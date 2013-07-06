IFL.Panel.FakeLcpService = function() {
    //var lcpService = new LcpService(Config.uriPath);
    
    function getRoute(visits, handler) {
        var pathPoints = [];
                
        for (var v in visits) {
            //for (var v=visits.length-1; v>=0; v--) {
            var visit = visits[v];
            var lcp_encoded = visit.path;
            if (lcp_encoded) {
                var legPoints = pathDecode(lcp_encoded);
                //debugger;
                pathPoints = pathPoints.concat(legPoints);
            }
        }

        //debugger;
        
        // visit had path element, use it directly, else call the lcp service to get the route
        if (pathPoints.length > 0) {
            console.debug('route has path, use');
            handler.onLCPServiceFinish(pathPoints);
        } else {
            if (Config.useLcp) {
                console.debug('route has No path, call lcp service');
                getRouteByLcpService(visits, handler);
            }
           
        }
        
    }
    
    function getRouteByLcpService(visits, handler) {
        var waypoints = [];
        for (var v in visits) {
            var location = visits[v].getLocation();
            waypoints.push({
                lon: parseFloat(location.lon),
                lat: parseFloat(location.lat)
            })
        }
        
        lcpService.getRoute(waypoints, handler);
    }
    
    function pathDecode(encoded) {
        var len = encoded.length;
        var index = 0;
        var lat = 0;
        var lng = 0;
            
        var pathPoints = [];

        while (index < len) {
            var b;
            var shift = 0;
            var result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += dlat;

            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += dlng;
            //cb(lat * 1e-5, lng * 1e-5);
                
            var point = {
                lon: lng * 1e-5,
                lat: lat * 1e-5
            };
                
            pathPoints.push(point);
        }
            
        return pathPoints;
    }
    
    return {
        getRoute: getRoute
    }
    
}
