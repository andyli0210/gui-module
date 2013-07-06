IFL.RouteService.FakeLcpService = function() {
    var fakePathUrl = Config.dummyPath + "/path.xml";
    var pathXml;

//    jQuery.ajax({
//        url: fakePathUrl,
//        dataType: 'xml',
//        type: 'GET',
//        error: function(jqXHR, textStatus, thrownError) {
//            alert('Failed to load Fake LCP paths ');
//        },
//        success: function(xml) {
//            pathXml = xml;
//        }
//    });

    function getRoute(wayPoints, handler) {
        var routeId = handler.routeId;
        var pathPoints = [];


        var lcp_encoded = jQuery(pathXml).find("#" + routeId).each(function(i) {
            var lcp_encoded = $(this).text();

            if (lcp_encoded) {
                var legPoints = pathDecode(lcp_encoded);
                pathPoints = pathPoints.concat(legPoints);
            }
        })

        handler.onLCPServiceFinish(pathPoints, handler);
    }

    function getRoutePathFromLocalXml(localXmlPath, handler) {
        $.ajax({
            url: localXmlPath,
            dataType: 'xml',
            type: 'GET',
            error: function(jqXHR, textStatus, thrownError) {
                alert('Failed to load Fake LCP paths ');
            },
            success: function(xml) {
                var pathPoints = [];
                $(xml).find("path").each(function(i) {
                    var lcp_encoded = $(this).text();

                    if (lcp_encoded) {
                        var legPoints = pathDecode(lcp_encoded);
                        pathPoints = pathPoints.concat(legPoints);
                    }
                });
                handler(pathPoints);

            }
        });
    }

    function getRTRouteWayPoints(rtRoute) {
        var pathPoints = [];
        for (var v in rtRoute.visits.visits) {
            var visit = rtRoute.visits.visits[v];

            if (visit.result.path) {
                var legPoints = pathDecode(visit.result.path);
                pathPoints = pathPoints.concat(legPoints);
            }
        }

        return pathPoints;
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
        getRoute: getRoute,
        getRTRouteWayPoints: getRTRouteWayPoints,
        getRoutePathFromLocalXml: getRoutePathFromLocalXml
    }

}
