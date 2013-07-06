IFL.Schedule.GanttService = function(_options) {
    var defaultOptions = {
        itemPerPage: 10
    }
    
    var options = $.extend(true, {}, defaultOptions, _options);
    
    var ganttService;
    var taskPopup = new IFL.Widget.DomainPopup({
        popupOptions: {
            title: "Task Information",
            width: 500,
            modal: false
        },
        tableOptions: {
            nameMapping:  {
                id: 'ID',
                startTime: 'Start Time',
                endTime: 'End Time',
                visitId: 'Visit',
                scheduleId: 'Schedule'
            },
            showMappingOnly: true
        }
    });
            
    var resources = [];
    var taskItems = {};
    
    if (options.pager) {
        initPagerHandlers();
    }
    
    initGanttService();
    var eventHandler = new IFL.Util.EventHandler(['mouseoverTask', 'mouseoutTask', 'mouseclickTask']);
    
    function reset() {
        resources = [];
        taskItems = {};
    }
    
    function initGanttService() {
        if (options.ganttService) {
            ganttService = options.ganttService;
        } 
        
        if (options.containerId) {
            ganttService = new IFL.GanttChart.GanttChartService(options.containerId, options);
        }
        
        if (ganttService) {
            initHandlers();
        }
        
    }
    
    function initHandlers() {
        ganttService.registerHandler('mouseover', function(item, pagePos) {
            ganttService.highlightItem(item, true);
            
            var task = item.getDomain();
            if (task) {
                if (task.visitId) {
                    eventHandler.notifyHandlers('mouseoverTask', task)
                } else {
                    console.warn('A task does not have Visit ID');
                }
                
            }
        });
        
        ganttService.registerHandler('mouseout', function(item, options) {
            ganttService.highlightItem(item, false);
            
            var task = item.getDomain();
            if (task && task.visitId) {
                eventHandler.notifyHandlers('mouseoutTask', task);
            }
        });
        
        ganttService.registerHandler('mouseclick', function(item, options) {
            var task = item.getDomain();
            
            if (task) {
                eventHandler.notifyHandlers('mouseclickTask', task);
            }
            
            taskPopup.close();
            var taskPopupOptions = {
                popupOptions: {
                    position: [options.x, options.y]
                }
            }
            
            if (task) {
                taskPopup.show(task, taskPopupOptions);
            }
        });
        
        if (options.pager) {
            initPagerHandlers();
        }
    }
    
    function initPagerHandlers() {
        
        options.pager.registerHandler('pagechange', function(pageNum){
            displayVehiclesForPage(pageNum);
        });
        
    }
    
    function initPager() {
        if (!options.pager) {
            return;
        }
        
        if (!resources) {
            alert('No Resources for gantt chart!');
            return;
        }
        
        var totalVehicleNum = resources.length;
        var totalPageNum = ((totalVehicleNum - 1) / options.itemPerPage) + 1;
        options.pager.setTotalPageNum(totalPageNum);
    }
    
    function displayVehiclesForPage(pageNum) {
        var displayVehicles = getPageVehicles(pageNum);
        //debugger;
        displayResources(displayVehicles);
    //        for (var i=0; i<displayVehicles.length; i++) {
    //            
    //            
    //            var vTasks = displayVehicles[i].tasks;
    //            //console.info('vehicle: ' + displayVehicles[i].id + ' has tasks num: ' + vTasks.length);
    //            for (var j=0; j<vTasks.length; j++) {
    //                var item = addTaskItem(vTasks[j], options.itemPerPage - i);
    //                
    //                if (!taskItems[vTasks[j].id]) {
    //                    taskItems[vTasks[j].id] = [];
    //                }
    //                taskItems[vTasks[j].id].push(item);
    //            }
    //            
    //            addVehicleRow(displayVehicles[i], options.itemPerPage - i);
    //        }
        
    //ganttService.refreshPlot();
    }
    
    function getPageVehicles(pageNum) {
        var startIndex = (pageNum-1) * options.itemPerPage;
        var endIndex = startIndex + options.itemPerPage;
        
        return resources.slice(startIndex, endIndex);
    }
    
    function setPager(pager) {
        options.pager = pager;
        initPagerHandlers();
    }
    
    function initResourceRoutes(resource, routes, scheduleId) {
        for (var r in routes) {
            var route = routes[r];
                    
            var visits = route.visits;
            for (var v in visits) {
                var visit = visits[v];
                var travelTime = visit.travelTime;
                
                var services = visit.services;
                        
                if (services && services.length > 0) {
                    services[0].travelTime = travelTime;
                }
                
                resource.visits.push(visit);
                
                for (var s in services) {
                    var task = services[s];
                    task.scheduleId = scheduleId;
                    resource.tasks.push(task);
                }
            }
        }
       
    }
    
    function refreshWithResourceRoutes(resourceRoutes) {
        reset();
        
        for (var resourceId in resourceRoutes) {
            for (var scheduleId in resourceRoutes[resourceId]) {
                var routes = resourceRoutes[resourceId][scheduleId];
                
                var resource = {
                    id: resourceId,
                    tasks: [],
                    visits: []
                }
                
                initResourceRoutes(resource, routes, scheduleId);
                resources.push(resource);
            }
        }
        
        refresh();
    }
    
    function refreshWithRoutes(routes) {
        reset();
        var routeResources = {};
        for (var r in routes) {
            var route = routes[r];
            
            var resourceIds = route.resourceIds;
            
            for (var i in resourceIds) {
                var id = resourceIds[i];
                if (!routeResources[id]) {
                    routeResources[id] = {
                        id: id,
                        tasks: [],
                        visits: []
                    }
                    
                    resources.push(routeResources[id]);
                }
            }
            
            var visits = route.visits;
            for (var v in visits) {
                var visit = visits[v];
                var travelTime = visit.travelTime;
                var services = visit.services;
                
                if (services && services.length > 0) {
                    services[0].travelTime = travelTime;
                }
                
                routeResources[id].visits.push(visit);
                for (var s in services) {
                    var task = services[s];
                    
                    for (var i in resourceIds) {
                        var id = resourceIds[i];
                        routeResources[id].tasks.push(task);
                    }
                }
            }
        }
        
        refresh();
    }
    
    function refresh() {
        if (options.pager) {
            initPager();
            displayVehiclesForPage(options.pager.getCurrentPageNum());
        } else {
            displayResources(resources);
        }
    }
    
    function displayResources(showResources) {
        if (!ganttService) {
            console.warn('No Gantt Service in Schedule Gantt Service');
            return;
        }
        ganttService.reset();
        
        var index = (showResources.length > options.itemPerPage ? showResources.length : options.itemPerPage);
        for (var i in showResources) {
            var resource = showResources[i];
            
            addVehicleRow(resource, index);
            
            var tasks = resource.tasks;
            for (var t in tasks) {
                var task = tasks[t];
                addTaskItem(task, index);
            }
            
            var visits = resource.visits;
            for (var v in visits) {
                var visit = visits[v];
                addVisitItem(visit, index);
            }
            
            index--;
        }
        
        ganttService.refreshPlot();
    }
    
    function refreshWithResourceAndTask(_vehicles, tasks) {
        if (!ganttService) {
            console.warn('No Gantt Service in Schedule Gantt Service');
            return;
        }
        
        reset();
        var totalVehicleNum = 0;
        ganttService.reset();
        for (var v in _vehicles) {
            totalVehicleNum++;
        }
        
        var index = 0;
        var vehicleIndex = {};
        for (var v in _vehicles) {
            vehicleIndex[v] = index;
            resources[index] = _vehicles[v];
            resources[index].tasks = [];

            if (!options.pager) {
                addVehicleRow(resources[index], totalVehicleNum - index);
            }
            
            index++;
        }
        
        for (var t in tasks) {
            index = vehicleIndex[tasks[t].vehicle];
            resources[index].tasks.push(tasks[t]);
            
            if (!options.pager) {
                addTaskItem(tasks[t], totalVehicleNum - index);
            }
        }
        
        if (options.pager) {
            initPager();
            displayVehiclesForPage(options.pager.getCurrentPageNum());
        }
        
        ganttService.refreshPlot();
    }
    
    function addVehicleRow(vehicle, index, taskItems) {
        var options = {
            index: index,
            title: vehicle.id
        };
        var row = new IFL.GanttChart.ChartRow(null, options);
        ganttService.addRow(row);
        
        return row;
    }
    
    function addVisitItem(visit, index) {
        var options = {
            startTime: visit.startTime,
            endTime: visit.endTime,
            rowIndex: index,
            domain: visit,
            height: 0.35
        }
        
        var item = new IFL.GanttChart.ChartItem(options);
        ganttService.addItem(item);
        
        //Draw Travel Time
        if (visit.travelTime) {
            var end = visit.startTime.getTime();
            var start = end - visit.travelTime;
            
            var travelStartTime = new IFL.Util.DateTime(start);
            var travelEndTime = new IFL.Util.DateTime(end);
            var travelOptions = {
                startTime: travelStartTime,
                endTime: travelEndTime,
                rowIndex: index,
                fillColor: '#0000FF',
                height: 0.05
            }
            
            var travelItem = new IFL.GanttChart.ChartItem(travelOptions);
            ganttService.addItem(travelItem);
        }
    }
    
    function addTaskItem(task, index) {
        var colors = ['#FF0000','#FFFF00','#C0C0C0'];
        var colorsIndex = parseInt(Math.floor(Math.random()*3));
        
        
        var options = {
            startTime: task.startTime,
            endTime: task.endTime,
            startTimeStr: task.startTime,
            endTimeStr: task.endTime,
            ISOStartTimeStr: task.ISOStartTimeStr,
            ISOEndTimeStr: task.ISOEndTimeStr,
            rowIndex: index,
            domain: task,
            fillColor: colors[colorsIndex]
        };
            
        var item = new IFL.GanttChart.ChartItem(options);
        ganttService.addItem(item);
        
        if (!taskItems[task.id]) {
            taskItems[task.id] = [];
        }
        taskItems[task.id].push(item);
        
        return item;
    }
    
    function highlightTask(task, isHighlight) {
        if (!ganttService) {
            console.warn('No Gantt Service in Schedule Gantt Service');
            return;
        }
        
        for (var i in  taskItems[task.id]) {
            var item = taskItems[task.id][i];
            ganttService.highlightItem(item, isHighlight);
        }
    }
    
    function setGanttService(_ganttService) {
        ganttService  = _ganttService;
        initHandlers();
        refresh();
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    return {
        refresh: refresh,
        setPager: setPager,
        displayVehiclesForPage: displayVehiclesForPage,
        refreshWithRoutes: refreshWithRoutes,
        highlightTask: highlightTask,
        setGanttService: setGanttService,
        refreshWithResourceRoutes: refreshWithResourceRoutes,
        registerHandler: registerHandler
    }
}


