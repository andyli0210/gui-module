function EMSRouteService() {
    EMS.Services.communicationMode = "CrossDomain";
    var routeService = new EMS.Services.Itin();
    
    function getRoute(waypoints, handler) {
        var addressWaypoints = [];
        
        for (var w in waypoints) {
            var waypoint = waypoints[w];
            
            var lat = waypoint.lat;
            var lon = waypoint.lon;
            
            addressWaypoints.push({
                coordinates: {
                    "latitude": lat,
                    "longitude":lon
                },
                "postcode":"",
                "state":"",
                "street":
                {
                    "directionalPrefix":"",
                    "directionalSuffix":"",
                    "fullName":"",
                    "name":"",
                    "type":""
                },
                "streetNumber":"",
                "suburb":""
            })
        }
        
        function routeHandler(routeResult) {
            var resultPoints = routeResult.routePoints;
            
            var pathPoints = [];
            
            for (var p in resultPoints) {
                var point = resultPoints[p];
                pathPoints.push({
                    lat: point.latitude,
                    lon: point.longitude
                });
            }
            handler.onLCPServiceFinish(pathPoints);
        }
        routeService.combinedRoute(addressWaypoints, true, true, 'ALL_VEHICLES', false, routeHandler, {});
    }
    
    return {
        getRoute: getRoute
    }
}