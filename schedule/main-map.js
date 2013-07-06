function AppStarter() {
    Config.chartInWindow = true;
    
    var mapservice = new IFL.Schedule.MapService({
        mapContainerId: 'mapContainer'
    });
    var ganttService;
    
    initMapHandler(mapservice);
    
    var isPanelInited = false;
    var routeTable;
    var techPanel;
    var datePanel;
    var schedulePanel;
    //initRouteControlPanel();
    initTechIdPanel();
    initDateRoutePanel();
    
    var chartTab;
    var chartContainer;
    var chartWindow;
    initGanttPanel();
    initChartTab();
    initSchedulePanel();
    //var xmlProcessor = new IFL.Schedule.FseXmlProcessor();
    var xmlProcessor = new IFL.Schedule.XmlProcessor({
        schemaName: 'IFL'
    });
    //readFile('fse-otis-minus-config-formatted.xml');
    //readFile('otis-ifl-out-formatted.xml');
   
    var results;
    function readFile(url) {
        jQuery.ajax({
            type: "GET",
            url: url,
            dataType: 'xml',
            success: function(xml) {
                var results = xmlProcessor.processXml(xml);
                mapservice.addSchedule(results);
                
                var techIds = [];
                for (var r in results.vehicles) {
                    var id = results.vehicles[r].id;
                    techIds.push(id);
                }
                techPanel.refreshPanel(techIds);
                
                var tasks = results.tasks;
                refreshDatePanel(tasks);
                
                var routes = mapservice.getVisibleScheduleRoutes();
                initGanttService(routes);
            }
        })
    }
    
    function refreshPanels(schedule) {
        var techIds = [];
        for (var r in schedule.resources) {
            var id = schedule.resources[r].id;
            techIds.push(id);
        }
        techPanel.refreshPanel(techIds);
                
        var tasks = schedule.tasks;
        refreshDatePanel(tasks);
                
        //var routes =  mapservice.getVisibleScheduleRoutes();
        //initGanttService(routes);
    }
    
    function initTechIdPanel() {
        var itemChangeHandler = function(item, isSelected) {
            mapservice.displayResourceRoute(item, isSelected);
            refreshGanttChart();    
        }
        techPanel = new TechRoutePanel(itemChangeHandler);
    }
    
    function initDateRoutePanel() {
        var itemChangeHandler = function(item, isSelected) {
            mapservice.displayDateRoute(item, isSelected);
            refreshGanttChart();   
        }
        datePanel = new DateRoutePanel(itemChangeHandler);    
    }
    
    function initSchedulePanel() {
        var itemChangeHandler = function(item, isSelected) {
            mapservice.displayScheduleRoute(item, isSelected);
            refreshGanttChart();
        }
        
        var uploadHandler = function(data, option) {
            var schedule = xmlProcessor.processXml(data);
            schedule.id = option.fileName
            mapservice.addSchedule(schedule);
            
            schedulePanel.addSchedule(schedule.id);
            if (!isPanelInited) {
                refreshPanels(schedule);
                isPanelInited = true;
            }
            
            refreshGanttChart();            
        }
        
        schedulePanel = new SchedulePanel(itemChangeHandler, uploadHandler);
    }
    
    function refreshDatePanel(tasks) {
        var dateStrs = {};
        var items = [];
        for (var t in tasks) {
            var task = tasks[t];
            
            var dateStr = task.ISOStartTimeStr;
            dateStr = dateStr.substring(0,10);
            
            if (!dateStrs[dateStr]) {
                dateStrs[dateStr] = dateStr;
                items.push(dateStr);
            }
        }
        
        datePanel.refreshPanel(items);
    }
    
    function initRouteControlPanel() {
        var controlPanel = $('#controlPanel').css('margin-left', '5px');
        routeTable = new IFL.Widget.ListControlPanel({
            keyTitleMapping: {
                id: 'ID'
            },
            listOptions: {
                showDeleteIcon: true, 
                showTitle: true, 
                itemPerPage: 15
            }
        });
        
        var routePanel = new IFL.Widget.FolderWidget({
            title: 'Resources'
        });
        routePanel.getContainer().appendTo(controlPanel);
        routePanel.setContent(routeTable);
    }
    
    function initGanttService() {
        if (!Config.chartInWindow) {
            ganttService = new IFL.Schedule.GanttService({
                containerId: 'chartContainer'
            });
            initGanttHandler(ganttService);
            refreshGanttChart();
        } else {
            initChartNewWindow();
        }
    }
    
    function refreshGanttChart() {
        if (!ganttService) {
            return;
        }
        
        if (!Config.chartInWindow) {
            if (!chartContainer.dialog( "isOpen" )) 
                return;
        }
        
        var routes = mapservice.getVisibleScheduleRoutes();
        ganttService.refreshWithResourceRoutes(routes);
    }
    
    function initGanttPanel() {
        chartContainer = $('<div width="100%"><div id="chartContainer" style="background-color: white; width: 95%; height: 95%;"></div></div>');
        chartContainer.dialog({
            title: 'Gantt Chart',
            autoOpen: false,
            height: 600,
            width: 800,
            close: function(event, ui) {
                chartTab.show();
            }
        //resizable: false
        });
    }
    
    function initChartNewWindow() {
        chartWindow=window.open('ganttview.html','chart','height=600,width=1024');
        if (window.focus) {
            chartWindow.focus();
        }
        
        chartWindow.onload = function() {
            chartWindow.onReadyHandler = function(_service, _table) {
                ganttService = _table;
                refreshGanttChart();
                chartWindow.setMapService(mapservice);
                initGanttHandler(_service);
            }
            
            chartWindow.onunload  = function() {
                ganttService = null;
                chartTab.show();
            }
        }
    }
    
    function initChartTab() {
        chartTab = jQuery('<div></div>').appendTo(document.body).css({
            backgroundImage: 'url("' + Config.imagePath + '/chart_tab_left.png' + '")', 
            'background-repeat': 'no-repeat',
            'background-position': -30, 
            position: 'absolute', 
            top: 450 + 'px', 
            left: 0,
            width: 57 + 'px', 
            height: 105 + 'px', 
            zIndex: 1000,
            cursor: 'pointer'
        });
        
        chartTab.click(function() {
            if (!Config.chartInWindow) {
                chartContainer.dialog('open');
            }
            
            if (!ganttService) {
                initGanttService();
            } else {
                refreshGanttChart();
            }
            
            chartTab.hide();
        });
    }
    
    function initGanttHandler(ganttService) {
        ganttService.registerHandler('mouseoverTask', function(task) {
            mapservice.highlightVisitById(task.visitId, true);
        });
        
        ganttService.registerHandler('mouseoutTask', function(task) {
            mapservice.highlightVisitById(task.visitId, false);
        })
    }
    
    function initMapHandler(scheduleMapService) {
        scheduleMapService.registerHandler('mouseoverRoute', function(route) {
            for (var v in route.visits) {
                var visit = route.visits[v];
                highlightVisitTask(visit, true);
            }
        });
        
        scheduleMapService.registerHandler('mouseoutRoute', function(route) {
            for (var v in route.visits) {
                var visit = route.visits[v];
                highlightVisitTask(visit, false);
            }
        });
        
        scheduleMapService.registerHandler('mouseoverVisit', function(visit) {
            highlightVisitTask(visit, true);
        });
        
        scheduleMapService.registerHandler('mouseoutVisit', function(visit) {
            highlightVisitTask(visit, false);
        });
    }
    
    function highlightVisitTask(visit, isHighlight) {
        for (var s in visit.services) {
            var service = visit.services[s];
                
            if (ganttService) {
                ganttService.highlightTask(service, isHighlight);
            }
        }
    } 
    
}



