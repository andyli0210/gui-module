IFL.RTRoutes.MapService = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var mapservice;
    var routeservice;
    var gpadScale = 1;

    var custPopup;
    var depotPopup;
    var routePopup;

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
        routeservice = new IFL.RouteService.FakeLcpService();
        mapservice.setRouteService(routeservice);
    }

    function displayRTRoute(route) {

        var solutionBounds = mapservice.getBoundsObject();

        var colorIndex = i % RouteColors.length;
        var routeColor = RouteColors[colorIndex];

        for (var v in route.visits.visits) {
            var visit = route.visits.visits[v];

            if (v > 0) {
                mapservice.addPointMarker(visit.destWayPoint);
            } else {
                var icon = Config.imagePath + '/fleet.png';
                mapservice.addMarker(visit.destWayPoint, icon);
            }

            solutionBounds = mapservice.extendToPoint(solutionBounds, visit.destWayPoint);

        }

        var pathPoints = routeservice.getRTRouteWayPoints(route);
        mapservice.drawPolyline(pathPoints, null, {
            normalStyle: {
                strokeColor: routeColor,
                strokeOpacity: 1
            }
        });

        mapservice.map.fitBounds(solutionBounds);

    }

    function displayRTRoutes(rtRoutes) {

        var solutionBounds = mapservice.getBoundsObject();

        //for (var i = 0; i < rtRoutes.routes.length; i++) {
        for (var i = 21; i < 22; i++) {
            var route = rtRoutes.routes[i];

            var colorIndex = i % RouteColors.length;
            var routeColor = RouteColors[colorIndex];

            var pathPoints = routeservice.getRTRouteWayPoints(route);
            mapservice.drawPolyline(pathPoints, null, {
                normalStyle: {
                    strokeColor: routeColor,
                    strokeOpacity: 1
                }
            });

            for (var v in route.visits.visits) {
                var visit = route.visits.visits[v];

                if (v > 0) {
                    mapservice.addPointMarker(visit.destWayPoint);
                } else {
                    var icon = Config.imagePath + '/fleet.png';
                    mapservice.addMarker(visit.destWayPoint, icon);
                }

                solutionBounds = mapservice.extendToPoint(solutionBounds, visit.destWayPoint);

            }
        }

        mapservice.map.fitBounds(solutionBounds);
    }

    return {
        displayRTRoutes: displayRTRoutes,
        displayRTRoute: displayRTRoute
    }

}


