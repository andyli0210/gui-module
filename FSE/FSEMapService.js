IFL.FSE.MapService = function(options) {
    if (!options || (!options.mapService && !options.mapContainerId)) {
        alert('Need Map Service or Map Container ID to init Schedule Map !');
        return null;
    }
    
    var mapservice;
    var routeservice;
    var visitPopup;
    var nameMapping;
    var routeIndex;
    var routeColors;
    
    var resourceRoutes = {};
    var schedules = {};
    var routes = {};
    var visits = {};
    var techVisibility = {};
    var dateVisibility = {};
    var scheduleVisibility = {};
    
    var selectedDates;
    var selectedResources;
    var dayResourceRoutes = {};
    
    var routePopupContent;
    
    var eventHandler = new IFL.Util.EventHandler(['mouseoverVisit', 'mouseoutVisit', 'mouseclickVisit', 'mouseoverRoute', 'mouseoutRoute', 'mouseclickRoute']);
    
    init();
    function init() {
        mapservice = options.mapservice;
        routeservice = options.routeservice;
        if (!mapservice) {
            mapservice = new IFL.MapService.EMS(options.mapContainerId);
        //mapservice = new IFL.MapService.Google(options.mapContainerId);
        }
    
        if (!routeservice) {
            routeservice = new IFL.RouteService.LCP(Config.fseServerUrl + '/file/routePath/');
        }
    
        var visitPopupOptions = {
            popupOptions: {
                title: "Visit Info",
                //width: 500,
                modal: false
            },
            tableOptions: {
                nameMapping: {
                    taskId: 'Task ID',
                    locationId: 'Location ID',
                    elapsedService: 'Service Duration (mins)',
                    timeEarliest: 'Time Earliest',
                    timeLatest: 'Time Latest'
                },
                showMappingOnly: true
            }
        }
        
        visitPopup = new IFL.Widget.DomainPopup(visitPopupOptions);
        routeIndex = 0;
        routeColors = ['#3366ff','#000000','#990066','#CC9900','#FF00CC','#FFFF00','#009900','#000066','#00FFFF','#FF6600'];
    }
    
    function addSchedule(schedule) {
        reset();
        showSchedule(schedule);
    }
    
    function refresh() {
        clear();
        
        for (var scheduleId in schedules) {
            displayScheduleRoute(scheduleId, scheduleVisibility[scheduleId]);
        }
                
    }
    
    function reset() {
        resourceRoutes = {};
        schedules = {};
        routes = {};
        visits = {};
        routeIndex = 0;
        
        techVisibility = {};
        dateVisibility = {};
        scheduleVisibility = {};
        
        selectedDates = null;
        selectedResources = null;
        
        clear();
    }
    
    function clear() {
        mapservice.clear();
    }
    
    function showSchedule(schedule) {
        
        var routes = schedule.solution.routes.route;
        var scheduleBounds = mapservice.getBoundsObject();
        for (var r in routes) {
            var route = routes[r];
            
            var refResource = route.resources.resource[0].refResource;
            var resourceId = refResource.id;
            
            if (!resourceId) {
                console.error('No resource Id for route: ' + route.id);
                return;
            }
            
            if (!dayResourceRoutes[resourceId]) {
                dayResourceRoutes[resourceId] = {}
            }
            
            var visits = route.visits.visit;
            if (!visits || visits.length <= 2) {
                continue;
            }
            var service = visits[1].services.service[0];
            var start = service.timeEarliest;
            var end = start + service.elapsedService * 60 * 1000;
            var date = formatDate(new Date(start), 'yyyy-MM-dd');
            
            if (!dayResourceRoutes[resourceId][date]) {
                dayResourceRoutes[resourceId][date] = {
                    routes: []
                }
            }
            
            showRoute(route);
            dayResourceRoutes[resourceId][date].routes.push(route)
            //dayResourceRoutes[resourceId][date].polylines.push(route.polyline);// = dayResourceRoutes[resourceId][date].polylines.concat(route.polyline);
            //dayResourceRoutes[resourceId][date].markers = dayResourceRoutes[resourceId][date].markers.concat(route.visitMarkers);
            
            
            scheduleBounds = mapservice.extendToBounds(scheduleBounds, route.bounds);
            
        //initResourceRoute(route, schedule);
        }
        
        mapservice.zoomToBounds(scheduleBounds);
        
        var id = schedule.id;
        schedules[id] = schedule;
        schedule.bounds = scheduleBounds;
    }
    
    function showRoute(route) {
        var visits = route.visits.visit;
        if (!visits || visits.length <= 2 ) {
            return;
        }
        
        var pathPoints = [];
        var visitMarkers = [];
        var bounds = mapservice.getBoundsObject();
        for (var v in visits) {
            var visit = visits[v];
            var visitMarker = showVisit(visit);
            visitMarkers.push(visitMarker);
            pathPoints.push(visit.refLocation);
            
            var point = {
                lon: visit.refLocation.lon, 
                lat: visit.refLocation.lat
            }
            bounds = mapservice.extendToPoint(bounds, point);
        }
        route.pathPoints = pathPoints;
        route.bounds = bounds;
        route.visitMarkers = visitMarkers;
        renderRoute(route);
        
        routes[route.id] = route;
    }
    
    function getVisibleScheduleRoutes() {
        var visibleRoutes = {};
        
        for (var resourceId in techVisibility) {
            if (!techVisibility[resourceId]) {
                continue;
            }
            
            visibleRoutes[resourceId] = {};
            for (var scheduleId in scheduleVisibility) {
                if (!scheduleVisibility[scheduleId] || !resourceRoutes[scheduleId][resourceId]) {
                    continue;
                }
                visibleRoutes[resourceId][scheduleId] = [];
                
                
                for(var dateStr in dateVisibility) {
                    if (!dateVisibility[dateStr] || !resourceRoutes[scheduleId][resourceId][dateStr]) {
                        continue;
                    }
                    
                    var newRoutes = resourceRoutes[scheduleId][resourceId][dateStr];
                    
                    if (newRoutes) {
                        visibleRoutes[resourceId][scheduleId] = visibleRoutes[resourceId][scheduleId].concat(newRoutes);
                    }
                    
                    
                }
            }
        }
        
        return visibleRoutes;
    }
    
    function getVisibleRoutes() {
        var visibleRoutes = [];
        for (var r in routes) {
            var route = routes[r];
            
            if (route.visibility) {
                visibleRoutes.push(route);
            }
        }
        
        return visibleRoutes;
    }
    
    function initResourceRoute(route, schedule) {
        
        var scheduleId = schedule.id;
        var routeDateStr = getRouteDate(route);

        if (!resourceRoutes[scheduleId]) {
            resourceRoutes[scheduleId] = {};
        }
        
        if (scheduleVisibility[scheduleId] == undefined) {
            scheduleVisibility[scheduleId] = true;
        }
        
        for (var i in route.resourceIds) {
            var resourceId = route.resourceIds[i];
            if (!resourceRoutes[scheduleId][resourceId]) {
                resourceRoutes[scheduleId][resourceId] = {};
            }
            
            if (techVisibility[resourceId] == undefined) {
                techVisibility[resourceId] = true;
            }
        
            if (!resourceRoutes[scheduleId][resourceId][routeDateStr]) {
                resourceRoutes[scheduleId][resourceId][routeDateStr] = [];
            }
            
            if (dateVisibility[routeDateStr] == undefined) {
                dateVisibility[routeDateStr] = true;
            }
        
            resourceRoutes[scheduleId][resourceId][routeDateStr].push(route);
            
            var visibility = techVisibility[resourceId] && dateVisibility[routeDateStr] && scheduleVisibility[scheduleId];
            if (!visibility) {
                displayRoute(route, scheduleId, routeDateStr, resourceId);
            }
        }
        
    }
    function getRouteDate(route) {
        var dateStr = route.visits[0].timeEarliest;
        dateStr = dateStr.substring(0,10);
        
        return dateStr;
    }
    
    function renderRoute(route) {
        var colorIndex = routeIndex++ % routeColors.length;
        var routeColor = routeColors[colorIndex];
        
        var draftLineStyle = {
            normalStyle: {
                strokeWidth: 1,
                fillColor: routeColor,
                strokeColor: routeColor
            }
        }
        var pathStyle = {
            normalStyle: {
                fillColor: routeColor,
                strokeColor: routeColor
            }
        }
        
        var handler = {
            onMouseOverPolyline: function(polyline, x, y) {
                highlightVisitMarkers(route.visitMarkers, true);
                eventHandler.notifyHandlers('mouseoverRoute', route);
            },
            onMouseOutPolyline: function(polyline, x, y) {
                highlightVisitMarkers(route.visitMarkers, false);
                eventHandler.notifyHandlers('mouseoutRoute', route);
            },
            onMouseClickPolyline: function(polyline, x, y) {
                showRouteInfoPopup(route, x, y);
                eventHandler.notifyHandlers('mouseclickRoute', route);
            }
        }
        
        var polyline = showPath(route.pathPoints, handler, draftLineStyle);
        route.polyline = polyline;
        route.visibility = true;
        
        var lcphandler = {
            onRouteServiceFinish: function(points) {
                route.pathPoints = points;
                if (route.polyline) {
                    mapservice.displayPolyline(route.polyline, false);
                    route.polyline = null;
                    delete route.polyline;
                    
                    route.polyline = showPath(route.pathPoints, handler, pathStyle);
                    mapservice.displayPolyline(route.polyline, route.visibility);
                }
            }
        }
        
        if (!options.callLcp) {
            routeservice.getRoute(route.pathPoints, lcphandler);
        }
            
    }
    
    function hightlightVisits(visits, isHighlight) {
        for (var v in visits) {
            var visit = visits[v];
            highlightVisit(visit, isHighlight);
        }
    }
    
    function highlightVisit(visit, isHighlight) {
        var marker = visit.marker;
        mapservice.highlightMarker(marker, isHighlight);
    }
    
    function highlightVisitMarkers(markers, isHighlight) {
        for (var m in markers) {
            mapservice.highlightMarker(markers[m], isHighlight);
        }
    }
    
    function highlightVisitById(visitId, isHighlight) {
        var visit = visits[visitId];
        highlightVisit(visit, isHighlight);

        //high light its route as well
        var route = routes[visit.routeId];
        highlightRoute(route, isHighlight); 
    }
    
    function highlightRoute(route, isHighlight) {
        var polyline = route.polyline;
        mapservice.highlightPolyline(polyline, isHighlight);
    }
    
    function showRouteInfoPopup(route, x, y) {
        if (routePopupContent) {
            routePopupContent.getContainer().dialog('close');
        }
        
        var visits = route.visits.visit;
        
        var nameMapping = {
            id: 'ID',
            startTime: 'Start Time',
            endTime: 'End Time'
        }
        routePopupContent = new IFL.Widget.DomainListTable(nameMapping, {
            showDeleteIcon: false
        });
        
        for (var v in visits) {
            routePopupContent.addItem(visits[v]);
        }
        
        routePopupContent.refresh();
        
        var popupOptions = {
            //position: [x, y],
            title: "Route " + route.id + " visits",
            width: 500,
            close: function(event, ui) {
                $(this).dialog('destroy').remove();
                routePopupContent = null;
            }
        }
        
        routePopupContent.getContainer().dialog(popupOptions);
    }
    
    function showPath(points, handler, style) {
        var polyline = mapservice.drawPolyline(points, handler, style);
        return polyline;
    }
    
    function showVisit(visit) {
        var location = visit.refLocation;
        
        var handler = {
            onMouseClickMarker: function(eventInfo) {
                visitPopup.close();
                showVisitPopup(visit, eventInfo.clientX, eventInfo.clientY);
                eventHandler.notifyHandlers('mouseclickVisit', visit);
            },
            onMouseOverMarker: function(eventInfo) {
                eventHandler.notifyHandlers('mouseoverVisit', visit);
            },
            onMouseOutMarker: function(eventInfo) {
                eventHandler.notifyHandlers('mouseoutVisit', visit);
            }
        }
        
        var marker = mapservice.addVisitMarker(location, handler);
        //visit.marker = marker;
        
        visits[visit.id] = visit;
        
        return marker
    }
    
    function showVisitPopup(visit, pageX, pageY) {
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
        
        var options = {
            popupOptions: {
                position: [pageX, pageY]
            }
        }
        visitPopup.show(taskDomain, options);
    }
    
    function displayResourceRoute(resourceId, isShow) {
        techVisibility[resourceId] = isShow;
        
        for (var scheduleId in resourceRoutes) {
            var scheduleRoutes = resourceRoutes[scheduleId];
            
            for (var dateStr in scheduleRoutes[resourceId]) {
                var routes = scheduleRoutes[resourceId][dateStr];
            
                for (var i in routes) {
                    var route = routes[i];
                    displayRoute(route, scheduleId, dateStr, resourceId);
                }
            }
        }
    }
    
    function displayRoute(route, scheduleId, dateStr, resourceId) {
        var polyline = route.polyline;
            
        var visibility = techVisibility[resourceId] && dateVisibility[dateStr] && scheduleVisibility[scheduleId];
        if (polyline) {
            mapservice.displayPolyline(polyline, visibility);
            route.visibility = visibility;
        }
                
                
        var visits = route.visits;
        for (var v in visits) {
            var marker = visits[v].marker;
            mapservice.displayMarker(marker, visibility);
        }
    }
    
    function displayScheduleRoute(scheduleId, isShow) {
        scheduleVisibility[scheduleId] = isShow;
        
        var scheduleRoutes = resourceRoutes[scheduleId];
        
        for (var resourceId in scheduleRoutes) {
            
            for (var dateStr in scheduleRoutes[resourceId]) {
                var routes = scheduleRoutes[resourceId][dateStr];
            
                for (var i in routes) {
                    var route = routes[i];
                    displayRoute(route, scheduleId, dateStr, resourceId);
                }
            }
        }
            
            
    }
    
    function displayDateRoute(dateStr, isShow) {
        dateVisibility[dateStr] = isShow;
        
        for (var scheduleId in resourceRoutes) {
            var scheduleRoutes = resourceRoutes[scheduleId];
            
            for (var resourceId in scheduleRoutes) {
            
                var routes = scheduleRoutes[resourceId][dateStr];
            
                for (var i in routes) {
                    var route = routes[i];
                    displayRoute(route, scheduleId, dateStr, resourceId);
                }
            }
        }
    }
    
    function displayRouteById(routeId, isShow) {
        var route = routes[routeId];
        
        if (!route) {
            console.warn('No route with ID: ' + routeId);
        } else {
            var polyline = route.polyline;
            
            if (polyline) {
                route.visibility = isShow;
                mapservice.displayPolyline(polyline, isShow);
            }
        }
    }
    
    function displayScheduleRoutesByDates(_selectedDates) {
        selectedDates = _selectedDates;
        
        for (var resourceId in dayResourceRoutes) {
            if (selectedResources && $.inArray(resourceId, selectedResources) == -1) {
                continue;
            }
            
            var resourceRoute = dayResourceRoutes[resourceId];
            for (var date in resourceRoute) {
                var isShow = true;
                if ($.inArray(date, selectedDates) == -1) {
                    isShow = false;
                }
                //var polylines = resourceRoute[date].polylines;
                //var markers = resourceRoute[date].markers;
                for (var r in resourceRoute[date].routes) {
                    var route = resourceRoute[date].routes[r];
                    displayRoutePolylineAndMarkers(route, isShow)
                }
                
            }
        }
    }
    
    function displayRoutePolylineAndMarkers(route, isShow) {
        var polyline = route.polyline;
        var markers = route.visitMarkers;
        mapservice.displayPolyline(polyline, isShow);
        for (var m in markers) {
            mapservice.displayMarker(markers[m], isShow);
        }
    }
    
    function displayScheduleRoutesByResources(_selectedResources) {
        selectedResources = _selectedResources;
        
        for (var resourceId in dayResourceRoutes) {
            var isShow = true;
            if ($.inArray(resourceId, selectedResources) == -1) {
                isShow = false;
            }
            
            for (var date in dayResourceRoutes[resourceId]) {
                
                if (selectedDates && $.inArray(date, selectedDates) == -1) {
                    continue;
                }
                var resourceRoute = dayResourceRoutes[resourceId][date];
                // var polylines = resourceRoute.polylines;
                // var markers = resourceRoute.markers;
                for (var r in resourceRoute.routes) {
                    var route = resourceRoute.routes[r];
                    displayRoutePolylineAndMarkers(route, isShow)
                }
            // displayRoutePolylineAndMarkers(polylines, markers, isShow)
                
            }
        }
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    function setMapService(_mapservice) {
        mapservice = _mapservice;
    }
    
    function getMapService() {
        return mapservice;
    }
    
    return {
        refresh: refresh,
        clear: clear,
        reset: reset,
        displayResourceRoute: displayResourceRoute,
        displayRouteById: displayRouteById,
        displayDateRoute: displayDateRoute,
        displayScheduleRoute: displayScheduleRoute,
        getVisibleRoutes: getVisibleRoutes,
        highlightVisit: highlightVisit,
        highlightVisitById: highlightVisitById,
        addSchedule: addSchedule,
        getVisibleScheduleRoutes: getVisibleScheduleRoutes,
        registerHandler: registerHandler,
        setMapService: setMapService,
        getMapService: getMapService,
        displayScheduleRoutesByResources: displayScheduleRoutesByResources,
        displayScheduleRoutesByDates: displayScheduleRoutesByDates
        
    }
}


