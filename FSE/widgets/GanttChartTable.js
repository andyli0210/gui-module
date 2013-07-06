IFL.FSE.GanttChartTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var isHandlerInited = false;
    var chartTable;
    var dayResourceRoutes = {};
    
    var selectedDates;
    var selectedResources;
    init();
    function init() {
        chartTable = new IFL.Widget.GanttChartTable(options.tableOptions);
    }
    
    function initHandlers() {
        chartTable.registerHandler('mouseover', function(item) {
            //console.info(JSON.stringify(item));
            if (item.style) {
                chartTable.highlightChartItem(item, true);
            }
        });
        
        chartTable.registerHandler('mouseout', function(item) {
            if (item.style) {
                chartTable.highlightChartItem(item, false);
            }
        });
        
        chartTable.registerHandler('mouseclick', function(item, pagePos) {
            showTaskPopup(item.domain, pagePos);
        });
        
        chartTable.registerHandler('select', function(item) {
            //debugger;
            });
        
        isHandlerInited = true;
    }
    
    function initDefaultOptions() {
        options = {
            tableOptions: {
                keyTitleMapping: {
                    id: 'Vehicle ID'
                },
                listOptions: {
                    itemPerPage: 10,
                    cssOptions: {
                        titleHeight: 50,
                        rowHeight: 50
                    }
                },
                ganttOptions: {
                    itemPerPage: 10,
                    usePager: true,
                    containerId: 'chartContainer',
                    labelHeight: 45
                }
            },
            popupOptions: {
                
        }
        }
    }
    
    function displayResourceRoutes(routes) {
        dayResourceRoutes = {};
        var tableRows = [];
         
        for (var r in routes) {
            var route = routes[r];
            
            var refResource = route.resources.resource[0].refResource;
            var resourceId = refResource.id;
            var resource = {
                id: resourceId
            }
            
            if (!resourceId) {
                console.error('No resource Id for route: ' + route.id);
                return;
            }
            
            if (!dayResourceRoutes[resourceId]) {
                dayResourceRoutes[resourceId] = {}
                tableRows.push(resource);
            }
             
            var preEndTime = -1;
            for (var v in route.visits.visit) {
                var visit = route.visits.visit[v];
                
                var service = visit.services.service[0];
                
                if (service) {
                    var start = service.timeEarliest;
                    var end = start + service.elapsedService * 60 * 1000;
                    
                    var date = formatDate(new Date(start), 'yyyy-MM-dd');
                    
                    // add service item
                    var chartSeriveItem = {
                        start: start,
                        end: end,
                        //height: 0.1,
                        style: {
                            fillColor: 'yellow'
                        }, 
                        domain: visit
                    }
                    
                    if (!dayResourceRoutes[resourceId][date]) {
                        dayResourceRoutes[resourceId][date] = {
                            chartItems: []
                        }
                    }
                    dayResourceRoutes[resourceId][date].chartItems.push(chartSeriveItem);
                    //                    // add visit item
                    //                    var chartVisitItem = {
                    //                        start: start,
                    //                        end: end
                    //                    }
                    //                
                    //                    chartResources[vehId].chartItems.push(chartVisitItem);
                    
                    //add travel item
                    if (preEndTime > 0) {
                        var chartTravelItem = {
                            start: preEndTime,
                            end: start,
                            height: 0
                        }
                        
                        dayResourceRoutes[resourceId][date].chartItems.push(chartTravelItem);
                    }
                    preEndTime = end;
                } else {
                    //show dummy Visit
                    var start = visit.timeEarliest;
                    var end = start;
                    var date = formatDate(new Date(start), 'yyyy-MM-dd');
                    
                    // add dummy visit item
                    var dummyVisitItem = {
                        start: start,
                        end: end,
                        //height: 0.1,
                        style: {
                            fillColor: 'grey'
                        }, 
                        domain: visit
                    }
                    
                    if (!dayResourceRoutes[resourceId][date]) {
                        dayResourceRoutes[resourceId][date] = {
                            chartItems: []
                        }
                    }
                    dayResourceRoutes[resourceId][date].chartItems.push(dummyVisitItem);
                    
                    //add travel item
                    if (preEndTime > 0) {
                        var chartTravelItem = {
                            start: preEndTime,
                            end: start,
                            height: 0
                        }
                        
                        dayResourceRoutes[resourceId][date].chartItems.push(chartTravelItem);
                    }
                    preEndTime = end;
                }
            }
            
        }
        
        chartTable.setTableItems(tableRows);
        
        var chartRows = [];
        for (var v in dayResourceRoutes) {
            var vehDayRoute = dayResourceRoutes[v];
            var items = [];
            for (var c in vehDayRoute) {
                //var items = vehDayRoute[c].chartItems;
                items = items.concat(vehDayRoute[c].chartItems);
            }
            
            chartRows.push({
                chartItems: items
            });
        }
        
        chartTable.setGanttItems(chartRows);
        
        if (!isHandlerInited) {
            initHandlers();
        }
    }
    
    function displayScheduleRoutesByResources(_selectedResources) {
        selectedResources = _selectedResources;
        var chartRows = [];
        var tableRows = [];

        for (var v in selectedResources) {
            var vehDayRoute = dayResourceRoutes[selectedResources[v]];
            var items = [];
            //debugger;
            for (var c in vehDayRoute) {
                if (selectedDates && $.inArray(c, selectedDates) == -1) {
                    continue;
                }
                
                var rowRoutes = vehDayRoute[c];
                if (!rowRoutes || !rowRoutes.chartItems) {
                    console.warn('resource: ' + v + ' does not have task on ' + day);
                    continue;
                }
                items = items.concat(rowRoutes.chartItems);
            }
            
            chartRows.push({
                chartItems: items
            });
            
            tableRows.push({
                id: selectedResources[v]
            })
        }
        
        chartTable.setTableItems(tableRows);
        chartTable.setGanttItems(chartRows);
    }
    
    function displayScheduleRoutesByDates(_selectedDates) {
        selectedDates = _selectedDates
        
        var chartRows = [];
        for (var v in dayResourceRoutes) {
            if (selectedResources && $.inArray(v, selectedResources) == -1) {
                continue;
            }
            
            
            var vehDayRoute = dayResourceRoutes[v];
            var items = [];
            //debugger;
            for (var c in selectedDates) {
                var day = selectedDates[c];
                
                var rowRoutes = dayResourceRoutes[v][day];
                if (!rowRoutes || !rowRoutes.chartItems) {
                    console.warn('resource: ' + v + ' does not have task on ' + day);
                    continue;
                }
                items = items.concat(rowRoutes.chartItems);
            }
            
            chartRows.push({
                chartItems: items
            });
        }
        
        chartTable.setGanttItems(chartRows);
    }
    
    function addRouteItem(route) {
         
    }
    
    function showTaskPopup(visit, pagePos) {
        var service = visit.services.service[0];
        var serviceId = service.id;
        var elapsedService = service.elapsedService;
        var timeEarliest = formatDate(new Date(service.timeEarliest), 'yyyy-MM-dd HH:mm:ss');
        var timeLatest = formatDate(new Date(service.timeLatest), 'yyyy-MM-dd HH:mm:ss');
        
        var task = service.refTask;
        var taskId = task.id;
        var locationId = visit.refLocation.id;
        
        var taskDomain = {
            taskId: taskId,
            locationId: locationId,
            elapsedService: elapsedService,
            timeEarliest: timeEarliest,
            timeLatest: timeLatest
        }
        
        var contentTable = new IFL.Widget.DomainTable(taskDomain, {
            nameMapping: {
                taskId: 'Task ID',
                locationId: 'Location ID',
                elapsedService: 'Service Duration (mins)',
                timeEarliest: 'Time Earliest',
                timeLatest: 'Time Latest'
            }
        })
        
        contentTable.getContainer().dialog({
            title: 'Task Information',
            position: [pagePos.x, pagePos.y],
            close: function() {
                contentTable.getContainer().dialog('destroy');
                contentTable = null;
            }
        });
    }
    
    function getContainer() {
        return chartTable.getContainer();
    }
    
    return {
        getContainer: getContainer,
        displayResourceRoutes: displayResourceRoutes,
        displayScheduleRoutesByDates: displayScheduleRoutesByDates,
        displayScheduleRoutesByResources: displayScheduleRoutesByResources
    }
}


