IFL.Panel.MapService = function(mapService) {
    var schedule;
    var lastModified;
    var showByDefault = true;
    
    init();
    function init() {
        
    }
    
    function loadScheduleFromServer(server_url, callback) {
        console.debug('trying to run solver at ' + server_url + " ........");
        var mapping_data = generateMappingContent();
        //debugger;
        jQuery.ajax({
            type: "POST",
            data: mapping_data,
            url: server_url,
            dataType: 'json',
            success: function(schedule) {
                clean();
                console.debug('loaded schedule xml')
                mapService.clear();
                resetColors();
                initDepotMarkers();
                lastModified = xml.lastModified;
                //debugger;
                var schedule = new ScheduleDomain(xml);
                setSchedule(schedule);
                initSchedule(true);
                    
                if (callback) {
                    callback();
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.debug('failed to load shceudle xml');
            }
        });
    }
    
    function resetDemands() {
        initDepotMarkers();
        
        if (!schedule) {
            return;
        }
        var requests = schedule.getRequests();

        for (var r in requests) {
            var request = requests[r];
            request.setUnscheduled(true);
        //if (request.isUnscheduled()) {
        //            var location = request.getLocationDomain();
        //            var commodity = parseInt(request.getCommodity());
        //            var name = request.id;
        //            
        //            var label = commodity;
        //            var size = 5 + commodity*2;
        //            var color = '#FF0000'
        //             
        //            mapService.addDemandPoint(location, color, size, label);
            
            
        }
        resetColors();
        displayRequests(schedule);
        unscheduledPopup.displayUnSchedules(requests);
    }

    function initDepotMarkers() {
        var SydneyLoc = {
            lon: 151.043,
            lat: -33.8924
        }
    
        var NewcastleLoc = {
            lon: 151.697,
            lat: -32.9901
        }
    
        var CanberraLoc = {
            lon: 149.158,
            lat: -35.3244
        }
    
        mapService.addDemandPoint(SydneyLoc, '#FFFF00', 25, 'Sydney');
        mapService.addDemandPoint(NewcastleLoc, '#FFFF00', 25, 'Newcastle');
        mapService.addDemandPoint(CanberraLoc, '#FFFF00', 25, 'Canberra');
    }

    function showAll() {
        function showRoute(route) {
            return function() {
                route.displayVisObject(true);
            }
        }
            
        var routes = getRouteOperators();
        for (var i=0; i<routes.length; i++) {
            var route = routes[i];
             
            if (route.getVisObject()) {
                route.displayVisObject(true);
                route.registerEventHandler('renderfinished', showRoute(route));
            } else {
                route.registerEventHandler('renderfinished', showRoute(route));
            } 
                            
            for (var v in route.visitOperators) {
                route.visitOperators[v].displayVisObject(true);
            }
        }
    }
    
    function setSchedule(_schedule) {
        schedule = _schedule;
    }
    
    /*
     * add schedule onto map
     */
    function initSchedule() {
        if (!schedule) {
            alert('this is no schedule');
            return;
        }
        jQuery('#results').html('');
        // Init the Parameters
        parameters = schedule.getParameters();
        console.debug('Parameter = ' + parameters['cost_objective'].getTitle());
        //        jQuery('#results').append("<h2>Cost = " + parameters['cost_objective'].getValue() + "</h2>");
        //        jQuery('#cost_objective').html(parameters['cost_objective'].getValue());
        costPopup.setCost(parameters['cost_report'].getValue()/10);
        VehicleConfig.totalCost = parameters['cost_report'].getValue()/10;
        
        // Init the Routes
        var routes = schedule.getRoutes();
        for (var r in routes) {
            var routeDomain = routes[r];
            
            var routeOperator = addRoute(routeDomain);
            
            routeOperators.push(routeOperator);
        }
        
        // Init unscheduleds
        //var unscheduleds = schedule.getUnscheduleds();
        
        var requests = schedule.getRequests();
        unscheduledPopup.displayUnSchedules(requests);
        
        //        if (unscheduleds.length > 0) {
        //            jQuery('#results').append("<h2>Unscheduled List</h2>");
        //            for (var u in unscheduleds) {
        //                jQuery('#results').append("<p>" + unscheduleds[u] + "</p>");
        //            }
        //        }
        
        displayRequests(schedule);
    }
    
    function displayRequests(schedule) {
        var requests = schedule.getRequests();

        for (var r in requests) {
            var request = requests[r];
            //if (request.isUnscheduled()) {
            var location = request.getLocationDomain();
            var commodity = parseInt(request.getCommodity());
            var name = request.id;
            
            var label = commodity;
            var size = 5 + commodity*2;
            var color;
                
            if (request.isUnscheduled()) {
                color = '#FF0000'
            } else {
                color = '#00FF00';
            }
             
            var borderColor = requestColors[request.id];
            mapService.addDemandPoint(location, color, size, label, borderColor);
                
                
        //}
        }
        
    }
    
    function addRoute(routeDomain) {
        var routeOperator = new VisOperator();
        routeOperator.setDomain(routeDomain);
        
        generateRouteVisObj(routeOperator);
        routeOperator.visitOperators = [];
        
        var visits = routeDomain.getVisits();
        routeOperator.visitOperators = addVisits(visits);
        
        return routeOperator;
    }
    
    function addVisits(visits) {
        var visitOperators = [];
        for (var v in visits) {
            var visitDomain = visits[v];
            
            var visitOperator = addVisit(visitDomain);
            visitOperators.push(visitOperator);
            
        //visitOperator.displayVisObject(true);
        }
        
        return visitOperators;
    }
    
    function addVisit(visitDomain) {
        var visitOperator = new VisOperator();
        visitOperator.setDomain(visitDomain);
        
        generateVisitVisObj(visitOperator);
        
        return visitOperator;
    }
    
    function getRouteOperatorById(routeId) {
        for (var i=0; i<routeOperators.length; i++) {
            var routeOperator = routeOperators[i];
            
            if (routeOperator.getDomain().id == routeId) {
                return routeOperator;
            }
        }
        
        return null;
    }
    
    function getVisitOperatorById(visitId) {
        for (var i=0; i<routeOperators.length; i++) {
            var routeOperator = routeOperators[i];
            
            for (var j=0; j<routeOperator.visitOperators.length; j++) {
                var visitOpeartor = routeOperator.visitOperators[j];
                
                if (visitOpeartor.getDomain().id == visitId) {
                    return visitOpeartor;
                }
            }
        }
        
        return null;
    }
    
    function generateDraftPath(waypoints) {
        var pathStyle = {
            normalStyle: {
                fillColor: "#000000",
                fillOpacity: 0.7,
                pointRadius: 6,
                pointerEvents: "visiblePainted",
                strokeColor: "#000000",
                strokeOpacity: 0.7,
                strokeWidth: 1
            }
        }
        
        var draftPath = mapService.drawPolyline(waypoints, null, pathStyle);
        
        return draftPath;
    }
    
    function generateRouteVisObj(routeOperator) {
        var domain = routeOperator.getDomain();
        var visits = domain.getVisits();
        var waypoints = [];
        for (var v in visits) {
            var location = visits[v].getLocation();
            waypoints.push({
                lon: parseFloat(location.lon),
                lat: parseFloat(location.lat)
            })
        }
        
        var routeHandler = {
            onMouseOverPolyline: function(feature,x,y) {
                routeOperator.triggerEvent('mouseover', x,y);
            },
            
            onMouseOutPolyline: function(feature,x,y) {
                routeOperator.triggerEvent('mouseout', x,y);
            },
            
            onMouseClickPolyline: function(feature,x,y) {
                routeOperator.triggerEvent('mouseclick', x,y);
            }   
        }
        
        // var routeColorIndex = routeColors[domain.id];
        
        var routeColor = VehicleConfig[domain.id].color;
        var routeServiceHandler  = {
            routeId: domain.id,
            onLCPServiceFinish: function(_pathPoints) {
                //var colorIndex = routeIndex++ % 10;
                var routeStyle = {
                    normalStyle: {
                        fillColor: routeColor,
                        fillOpacity: 1,
                        pointRadius: 6,
                        pointerEvents: "visiblePainted",
                        strokeColor: routeColor,
                        strokeOpacity: 1,
                        strokeWidth: 5
                    }
                }
                console.debug('route ' + domain.id + ' color: ' + routeColor);
                var _polyline = mapService.drawPolyline(_pathPoints, routeHandler, routeStyle);
                
                //remove draft path
                var draftPath = routeOperator.getVisObject();
                mapService.displayPolyline(draftPath, false);
                
                routeOperator.setVisObject(_polyline);
                
                routeOperator.displayVisObject = function(isShow) {
                    mapService.displayPolyline(routeOperator.getVisObject(), isShow);
                }
                
                routeOperator.deleteVisObject = function() {
                    mapService.displayPolyline(routeOperator.getVisObject(), false);
                }
                
                console.debug('path points size: ' + _pathPoints.length);
                routeOperator.displayVisObject(true);
                routeOperator.triggerEvent('renderfinished');
            }
        }
        
        var draftPath = generateDraftPath(waypoints);
        mapService.displayPolyline(draftPath, showByDefault);
        routeOperator.setVisObject(draftPath);
        
        
        if (showByDefault) {
            routeOperator.registerEventHandler('renderfinished', function(domain) {
                routeOperator.displayVisObject(true);
            });
        }
        
        mapService.getRoute(visits,routeServiceHandler);
    }
    
    function generateVisitVisObj(visitOperator) {
        var domain = visitOperator.getDomain();
        var location = domain.getLocation();
                
        var markerHandler = {
            onMouseOverMarker : function(eventInfo) {
                visitOperator.triggerEvent('mouseover', eventInfo.clientX, eventInfo.clientY);
            },
                            
            onMouseOutMarker: function(eventInfo) {
                visitOperator.triggerEvent('mouseout', eventInfo.clientX, eventInfo.clientY);
            },
                            
            onMouseClickMarker: function(eventInfo) {
                visitOperator.triggerEvent('mouseclick', eventInfo.clientX, eventInfo.clientY);
            }
        }
        
        var marker = mapService.addVisitMarker(location, markerHandler);
        
        //mapService.addDemandPoint(location);
        
        visitOperator.setVisObject(marker);
        marker.display(true);
        
        visitOperator.displayVisObject = function(isShow) {
            mapService.displayMarker(visitOperator.getVisObject(), isShow);
        }
                
        visitOperator.deleteVisObject = function() {
            mapService.removeMarker(visitOperator.getVisObject());
        }
        
        if (showByDefault) {
            visitOperator.displayVisObject(true);
        }
    }
    
    function getRouteOperators() {
        return routeOperators;
    }
    
    function reset() {
        mapService.clear();
        resetDemands();
        costPopup.clear();
    }
    
    return {
        getRouteOperators: getRouteOperators,
        getRouteOperatorById: getRouteOperatorById,
        getVisitOperatorById: getVisitOperatorById,
        loadSchedule: loadSchedule,
        showAll: showAll,
        reset: reset,
        loadScheduleFromServer: loadScheduleFromServer
        
    }
}
