IFL.RouteService.LCP = function LcpService(lcpUrl) {
    var url = lcpUrl || Config.uriPath;
    
    function getShortestPath_old(wayPoints, pathPoints, handler) {
        if (!wayPoints || wayPoints.length <2) {
            if (handler)
                handler.onLCPServiceFinish(pathPoints);
            return;
        }
                      
        var startLngLat = wayPoints[0];
        var endLngLat = wayPoints[1];
        wayPoints.shift();
            
        var src = lcpUrl + '?weight=TIME';
        src = src + '&src_lat=' + startLngLat.lat;
        src = src + '&src_lon=' + startLngLat.lon;
        src = src + '&dst_lat=' + endLngLat.lat;
        src = src + '&dst_lon=' + endLngLat.lon;
            
        jQuery.ajax({
            url: src,
            success: lcp_success(wayPoints, pathPoints, handler, this),
            dataType: 'xml',
            type: 'GET',
            error: function(jqXHR, textStatus, thrownError) {
                console.warn('LCP Service Failed: ' + textStatus);
            }
        });
        
        function lcp_success(wayPoints, routePoints, handler, lcpService) {
            return function(data, textStatus, jqXHR) {
                var cost = jQuery(data).find("cost").text();
                var lcp_encoded = jQuery(data).find("path").text();
                            
                var pathPoints = pathDecode(lcp_encoded);
                            
                routePoints = routePoints.concat(pathPoints);
                lcpService.getShortestPath(wayPoints, routePoints, handler);
            }
        }

    }
    
    function getShortestPath(wayPoints, handler) {
        if (!wayPoints || wayPoints.length <2) {
            console.warn('Must provide at least two waypoints for LCP service');
            return;
        }
        
        // for now, just igonre weights
        var xmlPostData = '<route><visits>';
        
        for (var w in wayPoints) {
            var waypoint = wayPoints[w];
            var lat = waypoint.lat;
            var lon = waypoint.lon;
            
            xmlPostData += '<visit><destWayPoint>';
            xmlPostData += '<lat>' +  lat + '</lat>';
            xmlPostData += '<lon>' +  lon + '</lon>';
            xmlPostData += '</destWayPoint></visit>';
        }
        
        xmlPostData += '</visits></route>';
        jQuery.ajax({
            url: url,
            data: xmlPostData,
            contentType: 'application/xml',
            success: lcp_success(handler),
            dataType: 'xml',
            type: 'POST',
            error: function(jqXHR, textStatus, thrownError) {
                console.warn('LCP Service Failed: ' + textStatus);
            }
        });
        
        function lcp_success(handler) {
            return function(data, textStatus, jqXHR) {
                var pathPoints = [];
                var cost = jQuery(data).find("cost").text();
                
                
                var lcp_encoded = jQuery(data).find("path").each(function(i) {
                    var lcp_encoded = $(this).text();
                    
                    if (lcp_encoded) {
                        var legPoints = pathDecode(lcp_encoded);
                        pathPoints = pathPoints.concat(legPoints);
                    }
                    
                   // console.debug("<route id='" + handler.routeId + "'>" + lcp_encoded + "</route>");                    
                    //console.debug(handler.routeId + ": " + lcp_encoded);
                })
                
                
                
                handler.onRouteServiceFinish(pathPoints);
            }
        }
        
    }
    
    function getShortestPathByHandler(wayPoints, handler, isSync) {
        if (!wayPoints || wayPoints.length <2) {
            console.warn('Must provide at least two waypoints for LCP service');
            return;
        }
        
        // for now, just igonre weights
        var xmlPostData = '<route><visits>';
        
        for (var w in wayPoints) {
            var waypoint = wayPoints[w];
            var lat = waypoint.lat;
            var lon = waypoint.lon;
            
            xmlPostData += '<visit><destWayPoint>';
            xmlPostData += '<lat>' +  lat + '</lat>';
            xmlPostData += '<lon>' +  lon + '</lon>';
            xmlPostData += '</destWayPoint></visit>';
        }
        
        xmlPostData += '</visits></route>';
        jQuery.ajax({
            url: url,
            async: !isSync, 
            data: xmlPostData,
            contentType: 'application/xml',
            success: lcp_success(handler),
            dataType: 'xml',
            type: 'POST',
            error: function(jqXHR, textStatus, thrownError) {
                console.warn('LCP Service Failed: ' + textStatus);
            }
        });
        
        function lcp_success(handler) {
            return function(data, textStatus, jqXHR) {
                var pathPoints = [];
                var cost = jQuery(data).find("cost").text();
                
                
                var lcp_encoded = jQuery(data).find("path").each(function(i) {
                    var lcp_encoded = $(this).text();
                    
                    if (lcp_encoded) {
                        var legPoints = pathDecode(lcp_encoded);
                        pathPoints = pathPoints.concat(legPoints);
                    }
                    
                   // console.debug("<route id='" + handler.routeId + "'>" + lcp_encoded + "</route>");                    
                    //console.debug(handler.routeId + ": " + lcp_encoded);
                })
                
                
                
                handler(pathPoints);
            }
        }
        
    }
    
    function getBatchShortestPathByHandler(routes, handler) {
        if (!routes || routes.length == 0) {
            console.warn('No Routes for LCP service');
            return;
        }

        var xmlPostData = '<routes>';
        for (var r in routes) {
            var route = routes[r];
            var wayPoints = route.wayPoints;

            // for now, just igonre weights
            xmlPostData += '<route><id>' + route.id + '</id>'; 
            
            xmlPostData += '<visits>';
            for (var w in wayPoints) {
                var waypoint = wayPoints[w];
                var lat = waypoint.lat;
                var lon = waypoint.lon;

                xmlPostData += '<visit><destWayPoint>';
                xmlPostData += '<lat>' + lat + '</lat>';
                xmlPostData += '<lon>' + lon + '</lon>';
                xmlPostData += '</destWayPoint></visit>';
            }

            xmlPostData += '</visits></route>';
        }

        xmlPostData += '</routes>';


        jQuery.ajax({
            url: url,
            data: xmlPostData,
            contentType: 'application/xml',
            success: lcp_success(handler),
            dataType: 'xml',
            type: 'POST',
            error: function(jqXHR, textStatus, thrownError) {
                console.warn('LCP Service Failed: ' + textStatus);
            }
        });

        function lcp_success(handler) {
            
            return function(data, textStatus, jqXHR) {
                var routes = [];
                jQuery(data).find("route").each(function(i) {
                    var pathPoints = [];
                    var id = jQuery(this).find("id").text();
                    jQuery(this).find("path").each(function(j) {
                        
                        var lcp_encoded = $(this).text();
                        if (lcp_encoded) {
                            var legPoints = pathDecode(lcp_encoded);
                            pathPoints = pathPoints.concat(legPoints);
                        }
                    });
                    routes.push({
                        id: id,
                        pathPoints: pathPoints
                    });
                    
                });
                handler(routes);
            }
        }

    }
    
    function getShortestPathFromIfl(wayPoints, handler) {
        if (!wayPoints || wayPoints.length <2) {
            console.warn('Must provide at least two waypoints for LCP service');
            return;
        }
        
        // for now, just igonre weights
        var xmlPostData = '<route><visits>';
        
        for (var w in wayPoints) {
            var waypoint = wayPoints[w];
            var lat = waypoint.lat;
            var lon = waypoint.lon;
            
            xmlPostData += '<visit><destWayPoint>';
            xmlPostData += '<lat>' +  lat + '</lat>';
            xmlPostData += '<lon>' +  lon + '</lon>';
            xmlPostData += '</destWayPoint></visit>';
        }
        
        xmlPostData += '</visits></route>';
        jQuery.ajax({
            url: "http://" + window.location.host + "/map-vis/ifl/LcpPath",
            data: xmlPostData,
            contentType: 'application/xml',
            success: lcp_success(handler),
            dataType: 'xml',
            type: 'POST',
            error: function(jqXHR, textStatus, thrownError) {
                console.warn('LCP Service Failed: ' + textStatus);
            }
        });
        
        function lcp_success(handler) {
            return function(data, textStatus, jqXHR) {
                var pathPoints = [];
                var cost = jQuery(data).find("cost").text();
                
                
                var lcp_encoded = jQuery(data).find("path").each(function(i) {
                    var lcp_encoded = $(this).text();
                    
                    if (lcp_encoded) {
                        var legPoints = pathDecode(lcp_encoded);
                        pathPoints = pathPoints.concat(legPoints);
                    }
                    
                })
                            
                handler.onLCPServiceFinish(pathPoints);
            }
        }
        
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
    
    function getRoute(wayPoints, handler) {
        return getShortestPath(wayPoints, handler);
    }
    
    return {
        getShortestPath: getShortestPath,
        getShortestPathByHandler: getShortestPathByHandler,
        getBatchShortestPathByHandler: getBatchShortestPathByHandler,
        getRoute: getRoute
    }
    
}
