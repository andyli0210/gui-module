function GoogleRouteService() {
    var routeService = new google.maps.DirectionsService();
    
    var routeRender = new google.maps.DirectionsRenderer();
    
    function getRoute(waypoints, handler) {
        var points = [];
        var start;
        var end;
        for (var w in waypoints) {
            var waypoint = waypoints[w];
            
            var latlng = new google.maps.LatLng(parseFloat(waypoint.lat), parseFloat(waypoint.lon));
            
            if (parseInt(w) == 0) {
                start = latlng;
            } else if (parseInt(w) == waypoints.length-1) {
                end = latlng;
            } else {
                points.push({
                    location: latlng,
                    stopover: false
                });                
            }             
        }
        
        var request = {
            origin: start,
            destination: end,
            waypoints: points,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: false
        };
        
        routeService.route(request, routeHandler);
        
        function routeHandler(routeResult, status) {
            if (status != google.maps.DirectionsStatus.OK) {
                alert('Google route service failed');
                return;
            }
            var resultPoints = [];
            
            var route = routeResult.routes[0];
            
            for (var l in route.legs) {
                var leg = route.legs[l];
                
                for (var s in leg.steps) {
                    var step = leg.steps[s];
                    
                    var path = step.path;
                    resultPoints = resultPoints.concat(path);
                }
                
            }
            
            var pathPoints = [];
            for (var p in resultPoints) {
                var point = resultPoints[p];
                pathPoints.push({
                    lat: point.lat(),
                    lon: point.lng()
                });
            }
            handler.onLCPServiceFinish(pathPoints);
        }
    }
    
    return  {
        getRoute: getRoute
    }
 
}
