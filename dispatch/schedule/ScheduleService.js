IFL.Dispatch.ScheduleService = function(visContainer) {
    Config.chartInWindow = false;
    //var mapservice;
    var ganttService;
    
    var controlPanel;
    
    initContainers();
    
    initMapHandler(mapservice);
    
    var isPanelInited = false;
    var routeTable;
    var techPanel;
    var datePanel;
    var schedulePanel;
    //initRouteControlPanel();
    initSchedulePanel();
    initDateRoutePanel();
    initTechIdPanel();
    
    
    var chartTab;
    var chartContainer;
    var chartWindow;
    initGanttPanel();
    //initChartTab();
    
    //var xmlProcessor = new IFL.Schedule.FseXmlProcessor();
    var xmlProcessor = new IFL.Schedule.XmlProcessor({
        schemaName: 'IFL'
    });
   
    var results;
    
    function initContainers() {
        // init left control panel and center content panel
        controlPanel = $('<div class="ui-layout-west"/>').appendTo(visContainer);
        var contentPanel = $('<div class="ui-layout-center"/>').appendTo(visContainer);
        
        // init map view
        mapView = $('<div class="ui-layout-north"/>').appendTo(contentPanel);
        var mapContainer = $('<div id="mapContainer" style="height: 600px; width: 100%"/>');
        mapPanel = IFL.Widget.FolderWidget({
            title: 'Map View'
        });
        
        mapPanel.addFunctionIcon("window-list-icon.png", function() {
            switchMapWindow();
        });
        mapPanel.setContent(mapContainer);
        mapPanel.getContainer().appendTo(mapView);
        initMapService('mapContainer');
        
        contentPanel.append('<br/>');
        
        // init gantt chart
        charView = $('<div class="ui-layout-center"/>').appendTo(contentPanel);
        var chartContainer = $('<div id="ganttchartContainer" style="height: 600px; width: 100%"/>');
        chartPanel = IFL.Widget.FolderWidget({
            title: 'Chart View'
        //width: '100%'
        });
        //chartPanel.addFunctionIcon("window-list-icon.png");
        chartPanel.setContent(chartContainer);
        chartPanel.getContainer().appendTo(charView);
        initFolderChartService();
        
    }
    
    function initMapService(mapContainerId) {
        mapservice = new IFL.Schedule.MapService({
            mapContainerId: mapContainerId,
            noLcp: true
        });
    }
    
    function switchMapWindow() {
        win2 = window.open('ganttview.html');
        win2.readyHandler = function() {
            //$(win2.document.body).append(mapView);
            //var newMapService = new IFL.MapService.EMS('mapContainer');
            mapservice.clear();
            mapView.hide();
            
            var oldMapService = mapservice.getMapService();
            mapservice.setMapService(win2.mapService);
            mapservice.refresh();
            
            win2.onunload  = function() {
                win2.mapService.clear();
                mapservice.setMapService(oldMapService);
                mapView.show();
                mapservice.refresh();
            }
        }
        
    }
    
    function initFolderChartService() {
        var options = {
            keyTitleMapping: {
                resourceId: 'Resource',
                scheduleId: 'Schedule',
                travelTime: 'Travel Time',
                serviceTime: 'Service Time',
                vehicleLoad: 'Vehicle Load'
            },
            listOptions: {
                cssOptions: {
                    titleHeight: 60,
                    rowHeight: 110
                }
            },
            ganttOptions: {
                labelHeight: 58
            }
        }
        
        var chartTable = new IFL.Widget.GanttChartTable(options);
        chartTable.getContainer().appendTo($('#ganttchartContainer'));
                
        chartTable.refreshWithRoutes([]);
        ganttService = chartTable;
        
        initGanttHandler(chartTable.getGanttService());
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
        techPanel = new TechRoutePanel(itemChangeHandler, true);
        
        controlPanel.append(techPanel.getContainer());
    }
    
    function initDateRoutePanel() {
        //        var itemChangeHandler = function(item, isSelected) {
        //            mapservice.displayDateRoute(item, isSelected);
        //            refreshGanttChart();   
        //        }
        
        var itemChangeHandler = function(items, isSelected) {
            for (var i in items) {
                mapservice.displayDateRoute(items[i], isSelected);
            }
            
            refreshGanttChart();   
        }
        datePanel = new DateRoutePanel(itemChangeHandler, true);    
        
        controlPanel.append(datePanel.getContainer());
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
        
        schedulePanel = new SchedulePanel(itemChangeHandler, uploadHandler, true);
        
        controlPanel.append(schedulePanel.getContainer());
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
        
        datePanel.refreshPanel(items, true);
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


