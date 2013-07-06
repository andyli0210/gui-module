function OtisMapService(mapService) {
    var geoVisits = {};
    
    function initGeoVisits(handler) {
        jQuery.ajax({
            type: "GET",
            url: "gui/otis/locations_data3.csv",
            dataType: 'text',
            success: function(data, textStatus) {
                var mapping_data = IFL.Util.CSVToArray(data);
                
                var homeMarkers = [];
                var homePoints = {};
                for (var i=1; i< mapping_data.length; i++) {
                    var row = mapping_data[i];
                    var point;
                    
                    if (!row[0]) {
                        break;
                    }
                    point = getOtisLocation(row);
                    
                    var jobId = point.jobId;
                    
                    geoVisits[jobId] = point;
                    
                    var id = point.id;
        
                    if (id.toLowerCase().indexOf("home") >= 0) {
                        var marker = addLocationMarker(point);
                        homeMarkers.push(marker);
                        homePoints[point.fieldTechnicianID] = point;
                        homePoints[point.fieldTechnicianID].marker = marker;
                    }
                }
                addHomeLayer(homeMarkers); 
                addTechHomeLayer(homePoints);
                handler();
            }
        })
    }
    
    function addTechHomeLayer(homePoints) {
        var techLayer = new OpenLayers.Layer.Vector('Current Tech Homes');
        mapService.map.addLayer(techLayer);
                
        function techChangeHandler(homePoints)  {
            return function(obj) {
                // debugger;
                var layers = mapService.map.layers;
                for (var l in layers) {
                    var layer = layers[l];
                    var layerName = layer.name;
                    if (layerName.toLowerCase().indexOf("route-") >= 0) {
                        
                        var techId = layerName.split('-')[1];
                        mapService.displayMarker(homePoints[techId].marker, layer.visibility && obj.object.visibility);
                    }
                }
            }
        }
                
        techLayer.events.register('visibilitychanged', techLayer, techChangeHandler(homePoints));
    }
    
    function addHomeLayer(homeMarkers) {
        var homeLayer = new OpenLayers.Layer.Vector('Home Locations');
        mapService.map.addLayer(homeLayer);
                
        function homeChangeHandler(homeMarkers)  {
            return function(obj) {
                for (var v in homeMarkers) {
                    var marker = homeMarkers[v];
                    mapService.displayMarker(marker, obj.object.visibility);
                }
            }
        }
                
        homeLayer.events.register('visibilitychanged', homeLayer, homeChangeHandler(homeMarkers));
    }
    
    function readCSVFile(url, type) {
        jQuery.ajax({
            type: "GET",
            url: url,
            dataType: 'text',
            success: function(data, textStatus) {
                processFileData(data, type);
            }
        })
    }
    
    function getDatestr() {
        var dateStr = $('#dateField').val();
        
        if (!dateStr) {
            return null;
        }
        if (dateStr.trim().length == 0) {
            return null;
        }
        return dateStr.trim();
    }
    
    function processFileData(data, type) {
        var dateStr = getDatestr();
        console.debug('dateStr: ' + dateStr);
        
        var mapping_data = IFL.Util.CSVToArray(data);
        var points = [];
        var bounds = mapService.getBoundsObject();
        
        for (var i=1; i< mapping_data.length; i++) {
            var row = mapping_data[i];
            var point;
                    
            if (!row || row.length == 0) {
                break;
            }
                    
            if (type == 'route') {
                point = getRoutePoint(row);
                
                if (!dateStr || checkForDate(point, dateStr)) {
                    points.push(point);
                }
                
            } else {
                point = processOtisLocation(row);
            }
                    
            // if (point.lon &&)
            //console.debug(point.lon + ',' + point.lat);
            var emsLonlat = mapService.getMapLonLat(point.lon, point.lat);
                    
            if (emsLonlat)
                bounds = mapService.extendToPoint(bounds, emsLonlat);
        }
                
        mapService.zoomToBounds(bounds);
        if (type == 'route') {
            initGeoVisits(function() {
                return processOtisRoute(points);
            });
        // processOtisRoute(points);
        }
    }
    
    function checkForDate(point, dateStr) {
        var date = point.time.split(" ")[0];
        
        if (date == dateStr)
            return true;
        else 
            return false;
    }
    
    function processOtisLocation(data) {
        var otisLoc = getOtisLocation(data);
        addLocationMarker(otisLoc);
        
        return otisLoc;
    }
    
    function processOtisRoute(points) {
        var routes = generateOtisRoute(points);
        //debugger;
        for (var r in routes) {
            var route = routes[r];
            generateRouteVisits(route);
            generateRoutePolyline(route);
        }
    }
    
    function getRoutePoint(row_data) {
        var otisRoutePoint = {
            id: row_data[0],
            techId: row_data[1],
            time: row_data[2],
            activity: row_data[3],
            job: row_data[4],
            lat: parseFloat(row_data[5]),
            lon: parseFloat(row_data[6])
        }
        
        return otisRoutePoint;
    }

    function generateOtisRoute(routePoints) {
        var routeColors = ['#3366ff','#000000','#990066','#CC9900','#FF00CC','#FFFF00','#009900','#000066','#00FFFF','#FF6600'];
                          
        var  routeIndex = 0;

        var routes = {};
    
        for (var r in routePoints) {
            var point = routePoints[r];
        
            var techId = point.techId;
            if (routes[techId]) {
            
            } else {
                routes[techId] = [];
                routes[techId].color = routeColors[routeIndex];
                console.debug('route: ' + techId + ', color: ' + routes[techId].color);
                routes[techId].visits = [];
                routes[techId].path = [];
                routeIndex = (routeIndex + 1) % 10;
                var routeLayer = new OpenLayers.Layer.Vector('Route-' + techId);
                mapService.map.addLayer(routeLayer);
                routes[techId].layer = routeLayer;
                
                
                function routeChangeHandler(visits)  {
                    return function(obj) {
                        for (var v in visits) {
                            var visit = visits[v];
                            //debugger;
                            mapService.displayMarker(visit.marker, obj.object.visibility);
                            
                            for (var i in visit.actVisits) {
                                var actVisit = visit.actVisits[i];
                                mapService.displayMarker(actVisit.marker, obj.object.visibility);
                            }
                        }
                    // if ()
                    }
                }
                
                routeLayer.events.register('visibilitychanged', routeLayer, routeChangeHandler(routes[techId].visits));
                
            //                var visitLayer = new OpenLayers.Layer.Markers('Visits-' + techId);
            //                mapService.map.addLayer(visitLayer);
            //                routes[techId].visitLayer = visitLayer;
            }
        
            routes[techId].push(point);
        }
        
        return routes;
    }
    
    function generateRoutePolyline(route) {
        var routeStyle = {
            normalStyle: {
                fillColor: route.color,
                fillOpacity: 0.7,
                pointRadius: 6,
                pointerEvents: "visiblePainted",
                strokeColor: route.color,
                strokeOpacity: 0.7,
                strokeWidth: 2
            }
        }
        
        //        var lonlats = [];
        for (var i in route.path) {
            var point = route.path[i];
        //console.debug('route point lat: ' + point.lat + ", lon: " + point.lon);
        }
        var polyline = mapService.drawPolyline(route.path, null, routeStyle);
        mapService.displayPolyline(polyline, true, route.layer);
    }

    function generateRouteVisits(route) {
        for (var p in route) {
            var point = route[p];
        
            var activity = point.activity;
            if (activity) {
                var lonlat = {
                    lon: point.lon,
                    lat: point.lat
                }
                
                if (activity.toLowerCase().trim() != 'location' && activity.toLowerCase().trim() != 'accepted') {
                    
                    var job = point.job;
                    var geoVisit = geoVisits[job];
                    
                    //debugger;
                    if (!geoVisit) {
                        console.debug("Can not find job location for job: " + job);
                        var findActVisit = findVisitByLocation(lonlat, route.visits);
                        if (!findActVisit) {
                            findActVisit = addVisit(point,false);
                            route.visits.push(findActVisit);
                        }
                        findActVisit.popupRows += pointRow;
                    } else {
                        var geoLonlat = {
                            lon: geoVisit.lon,
                            lat: geoVisit.lat
                        }
                    
                        route.path.push(geoLonlat);
                    
                        var findGeoVisit = findVisitByLocation(geoLonlat, route.visits);
                
                        if (!findGeoVisit) {
                            findGeoVisit = addVisit(geoVisit,true);
                            route.visits.push(findGeoVisit);
                        }
                
                        var pointRow = generateRoutePointRow(point);
                        findGeoVisit.popupRows += pointRow;
                    
                        var findActVisit = findVisitByLocation(lonlat, findGeoVisit.actVisits);
                        if (!findActVisit) {
                            findActVisit = addVisit(point,false);
                            findGeoVisit.actVisits.push(findActVisit);
                        }
                        findActVisit.popupRows += pointRow;
                    }
                    
                } else {
                    //console.debug('find a location: ');
                    route.path.push(lonlat)
                }
            }
            
        }
    }
    
    function findVisitByLocation(lonlat, visits) {
        for (var v in visits) {
            var visit = visits[v];
            var visit_lonlat = visit.lonlat;
            
            if (lonlat.lat == visit_lonlat.lat && lonlat.lon == visit_lonlat.lon) {
                return visit;
            }
        }
        
        return null;
    }

    function generateRoutePointRow(point) {
        var pointRow = '<tr><td>' + point.techId + '</td>';
        pointRow += '<td>' + point.time + '</td><td>' + point.activity + '</td>';
        pointRow += '<td>' + point.job + '</td></tr>';
        
        return pointRow;
    }
    
    function addVisit(routePoint, isGeoVisit) {
        var lonlat = {
            lon: parseFloat(routePoint.lon),
            lat: parseFloat(routePoint.lat)
        }
        
        var titleRow = '<tr><th>Tech ID</th><th>Time</th><th>Activity</th><th>Job</th></tr>';
        
        var visit = {
            lonlat: lonlat,
            popupRows: ''
        }
        
        if (isGeoVisit) {
            visit.actVisits = []; 
        }
        
        var emsLonlat = mapService.getMapLonLat(lonlat.lon, lonlat.lat);
        var handler = {
            onMouseOverMarker: function(event) {
                var table = '<table style="width: 100%;">' +titleRow + visit.popupRows + '</table>'
                var hoverPopup = new EMS.Popup("popup-div", emsLonlat, new OpenLayers.Size(450, 150), table, null, true);
                mapService.map.addPopup(hoverPopup, true);
            }
        }
        
        var marker; 
        
        if (isGeoVisit) {
            //console.debug('added geo visit');
            marker = mapService.addVisitMarker(lonlat, handler);
            mapService.displayMarker(marker, true);
        } else {
            // console.debug('added red visit');
            var icon = new EMS.HoverIcon(Config.imagePath + '/icon_visit_last.png', new OpenLayers.Size(10, 20), new OpenLayers.Pixel(0, -20), null, 2);
            marker = mapService.addMarker(lonlat, icon, handler);
            mapService.displayMarker(marker, true);
        }
        
        visit.marker = marker;
        
        return visit;
    }
   
    
    function addLocationMarker(otisLocation) {
        var lonlat = {
            lon: parseFloat(otisLocation.lon),
            lat: parseFloat(otisLocation.lat)
        }
        
        var jobRow = '<tr><th>Job ID</th><td>' + otisLocation.jobId + '</td></tr>';
        var TechRow = '<tr><th>Technician ID</th><td>' + otisLocation.fieldTechnicianID + '</td></tr>';
        var table = '<table style="width: 100%;">' +jobRow + TechRow +'</table>'
        
        var emsLonlat = mapService.getMapLonLat(lonlat.lon, lonlat.lat);
        var handler = {
            onMouseOverMarker: function(event) {
                var hoverPopup = new EMS.Popup("popup-div", emsLonlat, new OpenLayers.Size(350, 80), table, null, true);
                mapService.map.addPopup(hoverPopup, true);
            }
        }
        
        var id = otisLocation.id;
        
        var marker;
        if (id.toLowerCase().indexOf("home") >= 0) {
            var icon = new EMS.HoverIcon(Config.imagePath + '/icon_visit_first.png', new OpenLayers.Size(10, 20), new OpenLayers.Pixel(0, -20), null, 2);
            marker = mapService.addMarker(lonlat, icon, handler);
        } else {
            marker = mapService.addVisitMarker(lonlat, handler);
        }
        
        mapService.displayMarker(marker, true);
        
        return marker;
    }
    
    function getOtisLocation(row_data) {
        var otisLocation = {
            id: row_data[0],
            suburb: row_data[1],
            address: row_data[2],
            postcode: row_data[3],
            lat: parseFloat(row_data[4]),
            lon: parseFloat(row_data[5]),
            jobId: row_data[6],
            fieldTechnicianID: row_data[7]
        }
        
        return otisLocation;
    }
    
    return {
        readCSVFile: readCSVFile,
        processFileData: processFileData
    }
}


