IFL.CTS.GanttChartTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var isHandlerInited = false;
    var chartTable;
    var dayResourceRoutes = {};
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
            showVisitPopup(item.domain, pagePos);
        });
        
        //        chartTable.registerHandler('select', function(item) {
        //        });
        
        isHandlerInited = true;
    }
    
    function initDefaultOptions() {
        options = {
            tableOptions: {
                keyTitleMapping: {
                    id: 'Vehicle ID'
                //droppedCust: 'Dropped Customers'
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
    
    function displayScheduleRoutes(routes) {
        dayResourceRoutes = {};
        var tableRows = [];
         
        for (var r in routes) {
            var route = routes[r];
            
            var routeId = route.id;
            
            //ignore the summary route whose id contains 'summary'
            if (!routeId.indexOf("summary") == -1) {
                continue;
            }
            
            //skip routes with only two dummy visits
            if (route.visits.visit.length <= 2) {
                continue;
            }
            
            var day;
            var ids =routeId.split("_");
            var commodityTitle = ids[ids.length-1];
            var titles  = commodityTitle.split("-");
            day = titles[0];
            
            
            var refVeh = route.vehicles.vehicle.refVehicle;
            var vehId = refVeh.id;
            //var droppedCust = refVeh.droppedCustomers.length;
            var veh = {
                id: vehId
            // droppedCust: droppedCust
            }
            
            if (!vehId) {
                console.error('No vehicle Id for route: ' + route.id);
                return;
            }
            
            if (!dayResourceRoutes[vehId]) {
                dayResourceRoutes[vehId] = {}
                tableRows.push(veh);
            }
            
            //Get Route Day and put it into dayRoutes
            
            var firstVisit = route.visits.visit[1];
            var firstService = firstVisit.services.service[0];
            if (firstService) {
                for (var l in firstService.loads.load) {
                    var load = firstService.loads.load[l];
                    var refCommodity = load.refCommodity;
                    if (load.quantity > 0) {
                        
                        if (!dayResourceRoutes[vehId][day]) {
                            dayResourceRoutes[vehId][day] = {
                                chartItems: []
                            };
                        }
                        break;
                    }
                }
            }
            
            if (!day) {
                console.error('Can NOT find day for route: ' + route.id);
                return;
            }
             
            var preEndTime = -1;
            for (var v in route.visits.visit) {
                var visit = route.visits.visit[v];
                
                var service = visit.services.service[0];
                
                var start, end;
                
                if (service) {
                    // add service rectangle
                    start = service.timeEarliest;
                    end = start + service.elapsedDuration * 60 * 1000;
                } else {
                    // add dummy visit vertical line
                    start = visit.timeEarliest;
                    end = start;
                }  
                
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
                
                dayResourceRoutes[vehId][day].chartItems.push(chartSeriveItem);
                    
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
                        
                    dayResourceRoutes[vehId][day].chartItems.push(chartTravelItem);
                }
                preEndTime = end;
                
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
    
    function displayScheduleRoutesByDays(selectedDays) {
        var chartRows = [];
        for (var v in dayResourceRoutes) {
            var vehDayRoute = dayResourceRoutes[v];
            var items = [];
            for (var c in selectedDays) {
                var day = selectedDays[c];
                
                if (!vehDayRoute[day]) {
                    console.error('no day info for vehicle: ' + v + ' at ' + day);
                    //debugger;
                }
                items = items.concat(vehDayRoute[day].chartItems);
            }
            
            chartRows.push({
                chartItems: items
            });
        }
        
        chartTable.setGanttItems(chartRows);
    }
    
    function showVisitPopup(visit, pagePos) {
        var service = visit.services.service[0];
        var serviceId = service.id;
        var elapsedService = service.elapsedDuration;
        //var timeEarliest = formatDate(new Date(service.timeEarliest), 'yyyy-MM-dd HH:mm:ss');
        //var timeLatest = formatDate(new Date(service.timeLatest), 'yyyy-MM-dd HH:mm:ss');
        var timeEarliest = formatDate(new Date(service.timeEarliest), 'HH:mm:ss');
        var timeLatest = formatDate(new Date(service.timeLatest), 'HH:mm:ss');
        
        var task = service.refRequest;
        var taskId = task.id;
        var locationId = visit.refLocation.id;
        var custName = visit.refLocation.pk;
        
        var taskDomain = {
            taskId: taskId,
            custName: custName,        
            locationId: locationId,
            elapsedService: elapsedService,
            timeEarliest: timeEarliest,
            timeLatest: timeLatest
        }
        
        var contentTable = new IFL.Widget.DomainTable(taskDomain, {
            nameMapping: {
                taskId: 'Task ID',
                custName: 'Customer Name',
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
        displayScheduleRoutes: displayScheduleRoutes,
        displayScheduleRoutesByDays: displayScheduleRoutesByDays
    }
}


