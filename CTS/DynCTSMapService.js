IFL.CTS.DynCTSMapService = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var mapservice;
    var routeservice;
    var ctsService;
    var gpadScale = 1;

    var custPopup;
    var depotPopup;
    var routePopup;

    var custMarkers = {};
    var droppedCustMarkers;
    var droppedCustBounds;
    var depotMarkers = {};
    var scheduleRoutes = {};

    var vehAnimationId;
    var mapStyle = {
        showDeliverySeq: false,
        scaleByGpad: true,
        showRouteDirection: false,
        showVehMovement: false
    };

    var scheduleId;

    init();
    function init() {
        ctsService = new IFL.CTS.CTSService();
        initMapService();
    }

    function initDefaultOptions() {
        options = {
        };
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

    function initWithScheduleId(scheduleId) {
        console.info('init dyn map service with schedule: ' + scheduleId);
        ctsService.getCtsOptParameters(scheduleId, function(optInfo) {
            window.document.title = 'Map View for Schedule ' + optInfo.name;

            //only get all summary routes when init
            var filterUrl = 'routeDays=summary';
            ctsService.getCtsOptSolution(scheduleId, function(iflSolution) {
                initWithScheduleSolution(iflSolution, optInfo);
            }, filterUrl);
        });
    }

    //this will init all customer markers and summary(grand route) first
    function initWithScheduleSolution(iflSolution, optInfo) {
        scheduleId = optInfo.id;
        if (!scheduleId) {
            console.error('Missing Schedule ID ! This will cause trouble late !');
        }

        initCustomerMarkers(iflSolution, optInfo);
        setCustMarkerStyle(mapStyle);

        fillScheduleRoutes(iflSolution);
    }

    //currently, this map view only fit for one day, (remember hide all the routes first)
    function displaySelectedDailyRoutes(routeIds, day, isZoom) {
        if (routeIds.length === 0 || !day) {
            return;
        }

        var missedRoutes = [];

        var displayBounds = mapservice.getBoundsObject();
        for (var i in routeIds) {
            var routeId = routeIds[i];

            //handle dropped customer selection
            if (routeId === 'Dropped Customer') {
                if (droppedCustMarkers) {
                    mapservice.displayMarkers(droppedCustMarkers, true);
                    displayBounds = mapservice.extendToBounds(displayBounds, droppedCustBounds);
                    continue;
                }
            }

            var scheduleRoute = scheduleRoutes[routeId];
            if (!scheduleRoute) {
                console.error('Schedule Route: ' + routeId + ' does NOT exist !');
                continue;
            }

            displayBounds = mapservice.extendToBounds(displayBounds, scheduleRoute.routeBounds);

            var dailyRoute = scheduleRoute.dailyRoutes[day];

            if (dailyRoute === 'processing') {
                continue;
            } else
            //if haven't fill the daily route, then put it in missed routes and get it from server later
            if (!dailyRoute) {
                missedRoutes.push(routeId);
                //mark it as 'progress', in case user multiple click during getting route info from server
                scheduleRoute.dailyRoutes[day] = 'processing';
            } else {
                //route info is ready, show its markers and polyline
                mapservice.displayMarkers(dailyRoute.markers, true);
                mapservice.displayPolyline(dailyRoute.polyline, true);
                dailyRoute.isVisible = true;

                //if route path is not lcp path, then try to get it from lcp service
                if (dailyRoute.lcpStatus === 'no') {
                    dailyRoute.lcpStatus = 'in progress';

                    var routeHandler = function(dailyRoute, routeColor) {
                        var polylineHandler = {
                            routeDomain: dailyRoute.domain,
                            onMouseClickPolyline: function(polyline, clientX, clientY) {
                                showRoutePopup(this.routeDomain, {
                                    x: clientX,
                                    y: clientY
                                });
                            }
                        }
                        return function(pathpoints) {
                            //do we need to update waypoints ? or just keep the original customer locations
                            dailyRoute.waypoints = pathpoints;
                            var lcpPolyline = mapservice.drawPolyline(pathpoints, polylineHandler, {
                                normalStyle: {
                                    strokeColor: routeColor,
                                    strokeOpacity: 1
                                }
                            });
                            //remove original straight line first
                            mapservice.displayPolyline(dailyRoute.polyline, false);
                            dailyRoute.polyline = lcpPolyline;
                            dailyRoute.lcpStatus = 'yes';
                            //make sure when lcp finished, the polyline visibility is correct
                            mapservice.displayPolyline(lcpPolyline, dailyRoute.isVisible);
                            //set current map style when lcp is done
                            mapservice.setPolylineExtraStyle(lcpPolyline, mapStyle);
                            //TODO --- also make sure polyline style is correct (route direction, veh movement)
                        };
                    };

                    routeservice.getShortestPathByHandler(dailyRoute.waypoints, routeHandler(dailyRoute, scheduleRoute.color), false);
                }
            }
        }

        if (isZoom) {
            mapservice.zoomToBounds(displayBounds);
        }


        //if there are any missed route, then try get them from server
        if (missedRoutes.length > 0) {
            var dayPara = day;
            if (day === IFL.NameUtil.routeDays[0]) {
                dayPara = 'summary';
            }
            //build parameter url
            var urlPara = 'routeDays=' + dayPara + '&routeIds=';
            for (var i = 0; i < missedRoutes.length; i++) {
                var missedRouteId = missedRoutes[i];
                if (i > 0) {
                    urlPara += ',';
                }
                urlPara += missedRouteId;
            }

            //call the server to get all missed routes
            ctsService.getCtsOptSolution(scheduleId, function(iflSolution) {
                fillScheduleRoutes(iflSolution);
                //then try display those missed route again
                displaySelectedDailyRoutes(missedRoutes, day);
            }, urlPara);
        }
    }

    function fillScheduleRoutes(iflSolution) {
        var iflRoutes = iflSolution.routes.route;
        for (var i in iflRoutes) {
            var iflRoute = iflRoutes[i];
            var routeId = IFL.NameUtil.getRouteId(iflRoute.id);

            var scheduleRoute = scheduleRoutes[routeId];
            if (!scheduleRoute) {
                console.error('Route ' + routeId + ' does NOT exist in schedule routes !');
                continue;
            }

            var day = IFL.NameUtil.getRouteDay(iflRoute.id);
            initDailyRoute(iflRoute, routeId, day);
        }
    }

    function initDailyRoute(iflRoute, routeId, day) {
        var scheduleRoute = scheduleRoutes[routeId];

        //at this stage, schedule route should be ready
        if (!scheduleRoute) {
            console.error('Schedule Route ' + routeId + ' does NOT exist !');
            return;
        }

        if (scheduleRoute.dailyRoutes[day] && scheduleRoute.dailyRoutes[day] !== 'processing') {
            console.warn('Route ' + routeId + ' already exists on ' + day);
        } else {
            scheduleRoute.dailyRoutes[day] = {
                waypoints: [],
                markers: [],
                polyline: null,
                lcpStatus: 'no', //lcp status: 'no', 'yes', 'in progress' (in case user multiple click during one lcp query)
                domain: null,
                isVisible: false,
                animationCount: 0
            };

            var dailyRoute = scheduleRoute.dailyRoutes[day];

            var depotId;
            var vehId = iflRoute.vehicles.vehicle.refVehicle.id;
            var profitableCust = 0;
            var unprofitableCust = 0;
            var runGpad = 0;
            var runCpu = 0;
            var runMargin = 0;

            var visits = iflRoute.visits.visit;

            for (var v = 0; v < visits.length; v++) {
                var visit = visits[v];

                var visitLoc = visit.refLocation;

                dailyRoute.waypoints.push(visitLoc);

                //ignore the last visit if it is ANYWHERE otherwise it should return to depot and we need to display the path
                if (visitLoc.id === 'loc-ANYWHERE') {
                    continue;
                }

                //ignore the first and last depot visit
                if (v === visits.length - 1) {
                    continue;
                }
                if (v === 0) {
                    depotId = visitLoc.id.split("-")[1];
                    continue;
                }

                var custId = IFL.NameUtil.getCustIdFromLocId(visitLoc.id);
                //at this stage, all the customer marker should be ready
                var custMarker = custMarkers[custId];
                if (!custMarker) {
                    console.error('No Marker for customer: ' + custId);
                }
                dailyRoute.markers.push(custMarker);

                //prepare route info
                var service = visit.services.service[0];
                var request = service.refRequest;
                var requestAttrs = getRequestGpad(request);
                var gpad = requestAttrs.gpad;
                var margin = requestAttrs.margin;
                var requestReport = request.report;
                var cpu = 0;
                if (requestReport) {
                    cpu = requestReport.cpuGPAD;
                }
                
                runGpad += gpad;
                runMargin += margin;
                runCpu += cpu;
                if (gpad > 0) {
                    profitableCust++;
                } else {
                    unprofitableCust++;
                }
            }

            var distance;
            var duration;
            var lastVisit = visits[visits.length - 1];
            for (var t in lastVisit.travels.travel) {
                var travel = lastVisit.travels.travel[t];

                if (travel.typeMetric === 'METRIC_DISTANCE') {
                    distance = travel.quantity;
                }

                if (travel.typeMetric === 'METRIC_TIME') {
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

            dailyRoute.domain = routeDomain;

            var polylineHandler = {
                routeDomain: routeDomain,
                onMouseClickPolyline: function(polyline, clientX, clientY) {
                    showRoutePopup(this.routeDomain, {
                        x: clientX,
                        y: clientY
                    });
                }
            };

            var polyline = mapservice.drawPolyline(dailyRoute.waypoints, polylineHandler, {
                normalStyle: {
                    strokeColor: scheduleRoute.color,
                    strokeOpacity: 1
                }},
            {
                showRouteDirection: true //would be useful to show direction for init straight line
            });

            mapservice.displayPolyline(polyline, false);
            dailyRoute.polyline = polyline;
        }
    }

    function initScheduleRoute(routeId, color) {
        if (!scheduleRoutes[routeId]) {
            scheduleRoutes[routeId] = {
                id: routeId,
                color: color,
                routeBounds: null,
                dailyRoutes: {}
            };
        } else {
            console.warn('Route ' + routeId + ' already exists');
        }
        return scheduleRoutes[routeId];
    }

    function initCustomerMarkers(solution, optInfo) {
        var maxGpad = 0;
        var gpadLocations = [];
        var routes = solution.routes.route;

        var solutionBounds = mapservice.getBoundsObject();

        //display scheduled visits and depot
        for (var i = 0; i < routes.length; i++) {

            var route = routes[i];
            var colorIndex = i % RouteColors.length;
            var routeColor = RouteColors[colorIndex];

            var vehId = route.vehicles.vehicle.refVehicle.id;
            var routeId = route.id;
            //only go through summary route to render all customer markers first            
            if (routeId.indexOf('summary') === -1) {
                continue;
            }

            //init all possible schedule routes here.
            initScheduleRoute(IFL.NameUtil.getRouteId(routeId), routeColor);
            var routeBounds = mapservice.getBoundsObject();

            var depotId;
            var visits = route.visits.visit;

            for (var v = 0; v < visits.length; v++) {
                var visit = visits[v];

                var visitLoc = visit.refLocation;

                //ignore the last visit if it is ANYWHERE otherwise it should return to depot and we need to display the path
                if (visitLoc.id === 'loc-ANYWHERE') {
                    continue;
                }

                //extend solution bounds
                solutionBounds = mapservice.extendToPoint(solutionBounds, visitLoc);
                routeBounds = mapservice.extendToPoint(routeBounds, visitLoc);

                if (v === visits.length - 1) {
                    continue;
                }

                //the first visit is depot
                if (v === 0) {
                    //only render depot marker once
                    if (!depotMarkers[visitLoc.id]) {
                        depotId = visitLoc.id.split("-")[1];

                        var depotDomain = optInfo.dataValueList;
                        depotDomain.depot = depotId;
                        depotDomain.id = depotId;
                        var depotColor = '#' + Config.depotColor || 'FFFF00';
                        var marker = renderLocationMarker(visitLoc, depotColor, 15, 'Depot', '#000000', depotDomain);
                        depotMarkers[depotId] = marker;
                    }
                }
                else {
                    //display scheduled visit
                    var service = visit.services.service[0];
                    var request = service.refRequest;
                    var requestAttrs = getRequestGpad(request)
                    var gpad = requestAttrs.gpad;

                    if (gpad && Math.abs(gpad) > maxGpad) {
                        maxGpad = Math.abs(gpad);
                    }
                    
                    request.status = vehId;

                    gpadLocations.push({
                        request: request,
                        routeColor: routeColor,
                        deliverySeq: v
                    });

                }
            }

            //set route bounds here for future display use. since daily route doesn't change too much.
            scheduleRoutes[IFL.NameUtil.getRouteId(routeId)].routeBounds = routeBounds;
        }

        //display unscheduled (dropped customers)
        var unschedules = solution.unscheduleds.unscheduled;
        for (var u in unschedules) {
            var unschedule = unschedules[u];

            var unscheduledRequest = unschedule.refConsignment;

            var requestAttrs = getRequestGpad(unscheduledRequest);
            var gpad = requestAttrs.gpad;

            if (gpad && Math.abs(gpad) > maxGpad) {
                maxGpad = Math.abs(gpad);
            }

            unscheduledRequest.status = 'Dropped';

            gpadLocations.push({
                request: unscheduledRequest,
                routeColor: '#' + (Config.droppedColor || 'CCFF00')
            });
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
            var marker = displayRequestMarker(gpadLoc.request, gpadLoc.routeColor, gpadLoc.deliverySeq, true);
            var custId = IFL.NameUtil.getCustIdFromLocId(gpadLoc.request.id);
            if (gpadLoc.request.status !== 'Dropped') {
                custMarkers[custId] = marker;
            } else {
                if (!droppedCustMarkers) {
                    droppedCustMarkers = {};
                    droppedCustBounds = mapservice.getBoundsObject();
                }
                droppedCustMarkers[custId] = marker;
                droppedCustBounds = mapservice.extendToPoint(droppedCustBounds, gpadLoc.request.refLocation);
            }
        }
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

        var marker = renderLocationMarker(requestLoc, color, size, label, routeColor, request);
        marker.deliverySeq = label;
        marker.gpadSize = size;
        return marker;
    }

    function renderLocationMarker(lonlat, color, size, label, borderColor, request) {
        var marker = mapservice.addDemandPoint(lonlat, color, size, label, borderColor, false, request, request);
        marker.id = request.id;
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

    function displayAllCustMakers(isShow) {
        mapservice.displayMarkers(custMarkers, isShow);
        mapservice.displayMarkers(droppedCustMarkers, isShow);
    }

    function displayPolylines(isShow) {
        for (var i in scheduleRoutes) {
            var scheduleRoute = scheduleRoutes[i];
            for (var j in scheduleRoute.dailyRoutes) {
                var dailyRoute = scheduleRoute.dailyRoutes[j];
                mapservice.displayPolyline(dailyRoute.polyline, isShow);
                dailyRoute.isVisible = isShow;
            }
        }
    }
    
    function setMarkerStyle(marker, style) {
        var markerStyle = {
            showLabel: null,
            iconStyle: null
        };
        if (style.showDeliverySeq) {
            markerStyle.showLabel = true;
        } else {
            markerStyle.showLabel = false;
        }

        if (style.scaleByGpad) {
            markerStyle.iconStyle = {
                scale: marker.gpadSize
            };
        } else {
            markerStyle.iconStyle = {
                scale: 3
            };
        }
        mapservice.setDemandPointStyle(marker, markerStyle);
    }
    
    function setCustMarkerStyle(style) {
        $.extend(true, mapStyle, style);
        for (var c in custMarkers) {
            var marker = custMarkers[c];
            setMarkerStyle(marker, mapStyle);
        }
        for (var c in droppedCustMarkers) {
            var marker = droppedCustMarkers[c];
            setMarkerStyle(marker, mapStyle);
        }
    }

    function setPolylineStyle(style) {
        var isShowingVehMovement = mapStyle.showVehMovement;
        
        $.extend(true, mapStyle, style);
        
        for (var i in scheduleRoutes) {
            var scheduleRoute = scheduleRoutes[i];
            for (var j in scheduleRoute.dailyRoutes) {
                var dailyRoute = scheduleRoute.dailyRoutes[j];
                mapservice.setPolylineExtraStyle(dailyRoute.polyline, mapStyle);
            }
        }

        if (mapStyle.showVehMovement) {
            //if is showing vehicle movement, then do nothing
            if (!isShowingVehMovement) {
                vehAnimationId = window.setInterval(showVehAnimation, 100);
            }
        } else {
            window.clearInterval(vehAnimationId);
        }
    }

    function showVehAnimation() {
        for (var i in scheduleRoutes) {
            var scheduleRoute = scheduleRoutes[i];
            for (var j in scheduleRoute.dailyRoutes) {
                var dailyRoute = scheduleRoute.dailyRoutes[j];

                if (!dailyRoute.isVisible)
                    continue;

                var points = dailyRoute.waypoints;
                dailyRoute.animationCount = (dailyRoute.animationCount + 1) % points.length;

                var icons = dailyRoute.polyline.get('icons');

                icons[0].offset = (dailyRoute.animationCount / points.length) * 100 + '%';
                dailyRoute.polyline.set('icons', icons);
            }
        }
    }

    function displayAll(isShow) {
        displayAllCustMakers(isShow);
        displayPolylines(isShow);
    }

    return {
        hightlightLocationMarker: hightlightLocationMarker,
        panToLocationMarker: panToLocationMarker,
        initWithScheduleSolution: initWithScheduleSolution,
        initWithScheduleId: initWithScheduleId,
        displayAllCustMakers: displayAllCustMakers,
        displaySelectedDailyRoutes: displaySelectedDailyRoutes,
        displayAll: displayAll,
        setPolylineStyle: setPolylineStyle,
        setCustMarkerStyle: setCustMarkerStyle
    };

}


