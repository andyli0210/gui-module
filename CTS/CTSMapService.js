IFL.CTS.MapService = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var mapservice;
    var routeservice;
    var gpadScale = 1;

    var custPopup;
    var depotPopup;
    var routePopup;
    
    var custMarkers = [];

    init();
    function init() {
        initMapService();
    }

    function initDefaultOptions() {
        options = {
        }
    }

    function initMapService() {
        mapservice = new IFL.MapService.Google(options.mapContainerId);
        routeservice = new IFL.RouteService.LCP(Config.geoServerUrl + '/routePath');
        mapservice.setRouteService(routeservice);

        mapservice.registerHandler('clickDemandPoint', function(request, opts) {
            if (!request.cusNum) {
                console.info('Request ID: ' + request.id);
                showRequestPopup(request, {
                    x: opts.pageX,
                    y: opts.pageY
                });
            } else {
                console.info('Show Depot Popup');
                showDepotPopup(request, {
                    x: opts.pageX,
                    y: opts.pageY
                });
            }
        });
    }

    function displayOptSolution(solution, optInfo, drawOptions) {
        var maxGpad = 0;
        var gpadLocations = [];
        var routes = solution.routes.route;

        var solutionBounds = mapservice.getBoundsObject();

        var lcpRoutes = [];
        //display scheduled visits and depot
        for (var i = 0; i < routes.length; i++) {
            var route = routes[i];
            route.wayPoints = [];

            var colorIndex = i % RouteColors.length;
            var routeColor = RouteColors[colorIndex];

            var profitableCust = 0;
            var unprofitableCust = 0;
            var runGpad = 0;
            var runCpu = 0;
            var runMargin = 0;

            var vehId = route.vehicles.vehicle.refVehicle.id;
            var routeId = route.id;
            var depotId;
            var visits = route.visits.visit;

            for (var v = 0; v < visits.length; v++) {
                var visit = visits[v];

                var visitLoc = visit.refLocation;

                //ignore the last visit if it is ANYWHERE otherwise it should return to depot and we need to display the path
                if (visitLoc.id == 'loc-ANYWHERE') {
                    continue;
                }
                //extend solution bounds
                solutionBounds = mapservice.extendToPoint(solutionBounds, visitLoc);
                
                //add waypoint
                route.wayPoints.push(visitLoc);

                //last visit is depot, already render its marker at first visit, so ignore the marker rendering
                if (v == visits.length - 1) {
                    continue;
                }

                //the first visit is depot
                if (v == 0) {
                    depotId = visitLoc.id.split("-")[1];
                    var depotDomain = optInfo.dataValueList;
                    depotDomain.depot = depotId;
                    depotDomain.id = depotId;
                    var depotColor = '#' + Config.depotColor || 'FFFF00';
                    renderLocationMarker(visitLoc, depotColor, 15, 'Depot', '#000000', depotDomain);
                }
                else {
                    //display scheduled visit
                    var service = visit.services.service[0];
                    var request = service.refRequest;
                    var requestAttrs = getRequestGpad(request)
                    var gpad = requestAttrs.gpad;
                    var margin = requestAttrs.margin;
                    
                    var cpu = 0;
                    var report = request.report;
                    if (report) {
                        cpu = report.cpuGPAD;
                    }

                    if (gpad && Math.abs(gpad) > maxGpad) {
                        maxGpad = Math.abs(gpad);
                    }

                    request.status = vehId;

                    gpadLocations.push({
                        request: request,
                        routeColor: routeColor,
                        deliverySeq: drawOptions.showDeliverySeq? v : null
                    });

                    runGpad += gpad;
                    runCpu += cpu;
                    runMargin += margin;
                    if (gpad > 0) {
                        profitableCust++;
                    } else {
                        unprofitableCust++;
                    }
                }
            }

            var distance;
            var duration;
            var lastVisit = visits[visits.length - 1];
            for (var t in lastVisit.travels.travel) {
                var travel = lastVisit.travels.travel[t];

                if (travel.typeMetric == 'METRIC_DISTANCE') {
                    distance = travel.quantity;
                }

                if (travel.typeMetric == 'METRIC_TIME') {
                    duration = travel.quantity;
                }
            }

            var runHours = parseInt(duration / 60);
            var runMins = parseInt(duration - runHours * 60);
            var hourStr = runHours;
            var minStr = (runMins > 9) ? runMins : '0' + runMins;

            var runKm = distance / 1000;

            var routeDomain = {
                //depot: 'South Coast Dairy', //hard coded again !!!
                depot: depotId,
                vehId: vehId,
                routeId: routeId,
                custNum: visits.length - 2,
                profitableCust: profitableCust,
                unprofitableCust: unprofitableCust,
                runGpad: '$' + runGpad.toLocaleString(),
                runCpu: '$' + runCpu.toLocaleString(),
                runMargin: '$' + runMargin.toLocaleString(),
                runLength: hourStr + ':' + minStr,
                runDistance: runKm
            };

            var lcpRoute = {
                id: route.id,
                routeDomain: routeDomain,
                routeColor: routeColor,
                wayPoints: route.wayPoints
            };
            lcpRoutes.push(lcpRoute);
        }

        //display unscheduled (dropped customers)
        var unschedules = solution.unscheduleds.unscheduled;
        for (var u in unschedules) {
            var unschedule = unschedules[u];

            var unscheduledRequest = unschedule.refConsignment;

            var requestAttrs = getRequestGpad(unscheduledRequest)
            var gpad = requestAttrs.gpad;

            if (gpad && Math.abs(gpad) > maxGpad) {
                maxGpad = Math.abs(gpad);
            }

            unscheduledRequest.status = 'Dropped';

            gpadLocations.push({
                request: unscheduledRequest,
                routeColor: '#' + (Config.droppedColor || 'CCFF00')
            });
            //displayRequestMarker(unscheduledRequest);
        }

        if (Config.mapZoom) {
            console.info('Mannually set map zoom: ' + Config.mapZoom);
            //hard coded center for batman's bay
            mapservice.centerMap({
                lat: -35.88187590767385,
                lon: 150.3269813867187
            }
            , parseInt(Config.mapZoom));

        } else {
            mapservice.map.fitBounds(solutionBounds);
            console.info('set map bounds......');
            if (!Config.stopZoom) {
                console.info('Zoom in after fit bounds......');
                var listener = google.maps.event.addListener(mapservice.map, "idle", function() {
                    mapservice.map.setZoom(mapservice.map.getZoom() + 1);
                    google.maps.event.removeListener(listener);
                });
            }
        }


        //finally display all the gapd locations
        gpadScale = maxGpad / 10;
        console.info('Gpad scale: ' + gpadScale);
        for (var g in gpadLocations) {
            var gpadLoc = gpadLocations[g];
            displayRequestMarker(gpadLoc.request, gpadLoc.routeColor, gpadLoc.deliverySeq, drawOptions.scaleByGpad);
        }


        drawPaths(lcpRoutes, drawOptions);
        
        //at last display path polylines, since it may take long.
        //draw paths after the map is idle, so user could see location markers first
//        var idleHandler = function(lcpRoutes) {
//            return function() {
//                drawPaths(lcpRoutes);
//            }
//        }
//        
////        mapservice.addIdleHandler(function() {
////            console.info('Map Idle !!!');
////        })
//
//        setTimeout(function() {
//            drawPaths(lcpRoutes, drawOptions);
//            //mapservice.addIdleHandler();
//        }, 1000 * (lcpRoutes.length / 5));
        
    }

    function drawPaths(lcpRoutes, drawOptions) {

        var drawHandler = function(routeColor, routeDomain) {
            var routeHandler = {
                onMouseClickPolyline: function(polyline, clientX, clientY) {
                    showRoutePopup(routeDomain, {
                        x: clientX,
                        y: clientY
                    });
                }
            }
            return function(pathPoints) {
                mapservice.drawPolyline(pathPoints, routeHandler, {
                    normalStyle: {
                        strokeColor: routeColor,
                        strokeOpacity: 1
                    }
                }, drawOptions);
            }
        };

        for (var r in lcpRoutes) {
            var lcpRoute = lcpRoutes[r];
            //render route polyline
            routeservice.getShortestPathByHandler(lcpRoute.wayPoints, drawHandler(lcpRoute.routeColor, lcpRoute.routeDomain), false);
        }
    }

    function getRequestGpad(request) {
        var attributes = request.attributes.attribute;
        var gpadValue = null;
        var requestMargin = null;
        for (var a in attributes) {
            var attribute = attributes[a];

            var property = attribute.refProperty;
            if (property.title == 'marginal-gpad') {
                gpadValue = parseInt(attribute.value);
            }

            if (property.title == 'request-margin') {
                requestMargin = parseInt(attribute.value);
            }
        }

        return {
            gpad: gpadValue,
            margin: requestMargin
        }
    }

    function displayRequestMarker(request, routeColor, deliverySeq, scaleByGpad) {
        var requestLoc = request.refLocation;

        var requestAttrs = getRequestGpad(request)
        var gpadValue = requestAttrs.gpad;

        var color;
        var label = deliverySeq;

        if (gpadValue == null) {
            console.warn('No GPAD value found for request: ' + request.id + ", can NOT show it on Map !!!");
            return;

            //for test before get real GPAD value
            //            var isMius = (Math.random() > 0.5) ? 1 : -1;
            //            gpadValue = isMius * Math.floor(Math.random()*10);
            //            label = gpadValue;

        } else {
            if (gpadValue > 0) {
                color = '#' + Config.profitColor || '00FF00';
            } else {
                color = '#' + Config.unprofitColor || 'FF0000';
            }
        }

        //label = gpadValue;
        var size = scaleByGpad ? Math.abs(gpadValue) / gpadScale : 5;

        renderLocationMarker(requestLoc, color, size, label, routeColor, request);
    }

    function renderLocationMarker(lonlat, color, size, label, borderColor, request) {
        var marker = mapservice.addDemandPoint(lonlat, color, size, label, borderColor, false, request, request);
        marker.id = request.id;
        custMarkers.push(marker);
        return marker;
    }
    
    function hightlightLocationMarker(custId, isHighlight) {
        for (var m in custMarkers) {
            var marker = custMarkers[m];
            
            if (marker.id.indexOf(custId) !== -1) {
                var point = marker.getIcon();
                if (isHighlight) {
                    point.oriColor = point.fillColor;
                    point.fillColor = '#FFFF99';
                    marker.setIcon(point);
                } else {
                    point.fillColor = point.oriColor;
                    marker.setIcon(point);
                }
            }
        }
    }
    
    function panToLocationMarker(custId) {
        for (var m in custMarkers) {
            var marker = custMarkers[m];
            
            if (marker.id.indexOf(custId) !== -1) {
                var latlon = mapservice.getMarkerLatlon(marker);
                mapservice.panTo(latlon);
            }
        }
    }

    function showRoutePopup(routeDomain, pagePos) {
        if (routePopup) {
            //routePopup.dialog('close');
        }

        var nameMapping = {
            depot: 'Depot', //hard coded again !!!
            vehId: 'Vehicle',
            routeId: 'Route ID',
            custNum: 'Customer Num',
            profitableCust: 'Profitable Customers',
            unprofitableCust: 'Unprofitable Customers',
            runGpad: 'GPAD(T&D)',
            runCpu: 'GPAD(CPU)',
            runMargin: 'Gross Margin',
            runLength: 'Route Duration',
            runDistance: 'Route Distance(KM)'
        }

        var domainTable = IFL.Widget.DomainTable(routeDomain, {
            nameMapping: nameMapping,
            showMappingOnly: true
                    //width: 350
        });

        domainTable.getContainer().dialog({
            title: 'Route Info',
            //height: 6,
            width: 360,
            position: [pagePos.x, pagePos.y],
            zIndex: 2000,
            close: function() {
                domainTable.getContainer().dialog('destroy');
                domainTable.getContainer().remove();
                domainTable = null;
                routePopup = null;
            }
        });

        routePopup = domainTable.getContainer();
        routePopup.css('width', '100%');
    }

    function showDepotPopup(depotDomain, pagePos) {
        if (depotPopup) {
            return;
        }

        var nameMapping = {
            unprofitableCust: 'Unprofitable Customers',
            profitableCust: 'Profitable Customers',
            droppedCust: 'Dropped Customers',
            depot: 'Depot',
            vehicles: 'Vehicles',
            routeNum: 'Routes Num',
            cusNum: 'Customers Num',
            gpad: 'GPAD(T&D)',
            cpu: 'GPAD(CPU)',
            grossMargin: 'Gross Margin',
            varCost: 'Variable Costs',
            fixCost: 'Fixed Cost',
            volWeek: 'Volume(Week)',
            volMF: 'Volume(M-F)',
            distance: 'Distance(KM)(Week)',
            duration: 'Duration(hrs)(Week)'
        }

        var domainTable = IFL.Widget.DomainTable(depotDomain, {
            nameMapping: nameMapping,
            showMappingOnly: true
        });

        domainTable.getContainer().dialog({
            title: 'Depot Info for ' + depotDomain.depot,
            //height: 6,
            width: 400,
            position: [pagePos.x, pagePos.y],
            zIndex: 2000,
            close: function() {
                domainTable.getContainer().dialog('destroy');
                domainTable.getContainer().remove();
                domainTable = null;
                depotPopup = null;
            }
        });

        depotPopup = domainTable.getContainer();
        depotPopup.css('width', '100%');
    }

    function showRequestPopup(request, pagePos) {
        //debugger;
        if (custPopup) {
            custPopup.dialog('close');
        }

        var requestIds = request.id.split("-");

        var attributes = request.attributes.attribute;
        var margin;
        var gpad;
        var status;
        var gpadStr;

        var attrs = getRequestGpad(request);
        gpad = attrs.gpad;
        margin = attrs.margin;
        gpadStr = Math.abs(gpad).toLocaleString();
        if (gpad < 0) {
            gpadStr = '-$' + gpadStr;
        } else {
            gpadStr = '$' + gpadStr;
        }
        
        var cpuStr = 0;
        if (request.report) {
            cpuStr = '$' + request.report.cpuGPAD.toLocaleString();
        }

        var timeWindow = request.windows.window[0];
        var elapsedService = request.elapsedService;
        //var timeStart = formatDate(new Date(timeWindow.timeStart), 'yyyy-MM-dd HH:mm:ss');
        //var timeEnd = formatDate(new Date(timeWindow.timeFinish), 'yyyy-MM-dd HH:mm:ss');

        var timeStart = formatDate(new Date(timeWindow.timeStart), 'HH:mm:ss');
        var timeEnd = formatDate(new Date(timeWindow.timeFinish), 'HH:mm:ss');

        var domain = {
            id: requestIds[requestIds.length - 1],
            custName: request.refLocation.pk,
            margin: '$' + margin.toLocaleString(),
            gpad: gpadStr,
            cpu: cpuStr,
            status: request.status,
            duration: elapsedService,
            timeStart: timeStart,
            timeEnd: timeEnd
        }

        var nameMapping = {
            id: 'ID',
            custName: 'Customer Name',
            margin: 'Gross Margin',
            gpad: 'GPAD(T&D)',
            cpu: 'GPAD(CPU)',
            status: 'Serviced by',
            duration: 'Service Duration(min)',
            timeStart: 'Time Window Start',
            timeEnd: 'Time Window End'
        };

        if (attributes[5] && attributes[5] != 'OK') {
            domain['dropReason'] = attributes[5].value;
            nameMapping['dropReason'] = 'Drop Reason';
        }

        var domainTable = IFL.Widget.DomainTable(domain, {
            nameMapping: nameMapping,
            showMappingOnly: true
        });

        domainTable.getContainer().dialog({
            title: 'Customer Info',
            //height: 6,
            width: 400,
            position: [pagePos.x, pagePos.y],
            zIndex: 2000,
            close: function() {
                domainTable.getContainer().dialog('destroy');
                domainTable.getContainer().remove();
                domainTable = null;
                custPopup = null;
            }
        });

        custPopup = domainTable.getContainer();
        custPopup.css('width', '100%');
    }

    return {
        displayOptSolution: displayOptSolution,
        hightlightLocationMarker: hightlightLocationMarker,
        panToLocationMarker: panToLocationMarker
    }

}


