function OtisMapService(mapService) {
    var sites = {};
    var routePoints = {};
    var techRoutes = {};
    var dateRoutes = {};
    var routes = {};
    var homes = {};
    var isShowHomes = false;
    var isShowVisits = true;
    var isShowSites = true;
    
    var routeIndex = 0;
    var routeColors = ['#3366ff','#000000','#990066','#CC9900','#FF00CC','#FFFF00','#009900','#000066','#00FFFF','#FF6600'];
    
    function initSites(csv_data) {
        sites = {};
        var mapping_data = IFL.Util.CSVToArray(csv_data);
                
        for (var i=1; i< mapping_data.length; i++) {
            var row = mapping_data[i];
            var point;
                    
            if (!row || ((!row[0] || row[0].trim().length == 0) && row.length == 1) ) {
                break;
            }
            point = getOtisLocation(row);
                    
            var jobId = point.jobId;
            
            if (!jobId) {
                debugger;
            }
                    
            sites[jobId] = {};
            sites[jobId].point = point;
                    
            var marker = addLocationMarker(point);
            mapService.displayMarker(marker, false);
            sites[jobId].marker = marker;
            
            if (jobId.toLowerCase().indexOf("home") >= 0) {
                var techId = point.fieldTechnicianID;
                homes[techId] = {};
                homes[techId].point = point;
                homes[techId].marker = marker;
            }
        }
    }
    
    function loadSitesInfoFromLocal(url, callback) {
        jQuery.ajax({
            type: "GET",
            url: url,
            dataType: 'text',
            success: function(csv_data) {
                initSites(csv_data);
                if (callback)
                    callback();
            }
        })
    }
    
    function loadRoutesInfoFromLocal(url, callback) {
        jQuery.ajax({
            type: "GET",
            url: url,
            dataType: 'text',
            success: function(csv_data) {
                initRoutes(csv_data);
                
                if (callback)
                    callback();
            }
        })
    }
    
    function getDateStr(timeStr) {
        var dateStr = timeStr.split(" ")[0].trim();
        return dateStr;
    }
    
    function addRoutePoint(routePoint) {
        var timeStr = routePoint.time;
        var dateStr = getDateStr(timeStr);
        
        var techId = routePoint.techId;
        
        if (!routePoints[techId]) {
            routes[techId] = {};
            routePoints[techId] = {};
            techRoutes[techId] = {
                visibility: true
            };
            
            var colorIndex = routeIndex++ % routeColors.length;
            var color = routeColors[colorIndex];
            routes[techId].color = color
        }
        
        if (!routePoints[techId][dateStr]) {
            routes[techId][dateStr] = {};
            
            routePoints[techId][dateStr] = [];
            dateRoutes[dateStr] = {
                visibility: true
            };
        }
        
        routePoints[techId][dateStr].push(routePoint);
    }
    
    function initRoutes(csv_data) {
        routes = {};
        var mapping_data = IFL.Util.CSVToArray(csv_data);
        var bounds = mapService.getBoundsObject();
        
        for (var i=1; i< mapping_data.length; i++) {
            var row = mapping_data[i];
            var point;
                    
            if (!row || ((!row[0] || row[0].trim().length == 0) && row.length == 1) ) {
                break;
            }
                    
            point = getRoutePoint(row);
            
            if (!point.techId) {
                break;
            }
            
            addRoutePoint(point);

            var emsLonlat = mapService.getMapLonLat(point.lon, point.lat);
                    
            if (emsLonlat)
                bounds = mapService.extendToPoint(bounds, emsLonlat);
        }
                
        mapService.zoomToBounds(bounds);
        processOtisRoute(routePoints);
       
    }
    
    function processOtisRoute(routePoints) {
        generateOtisRoute(routePoints);
    }
    
    function displayRoute(techId, dateStr, isShow) {
        if (!routes[techId] || !routes[techId][dateStr])
            return;
        
        var visits = routes[techId][dateStr].visits;
        var polyline = routes[techId][dateStr].polyline;
        
        mapService.displayPolyline(polyline, isShow);
        
        for (var v in visits) {
            var visit = visits[v];
            mapService.displayMarker(visit.marker, isShow && isShowSites);
            
            for (var a in visit.actVisits) {
                var actVisit = visit.actVisits[a];
                mapService.displayMarker(actVisit.marker, isShow && isShowVisits);
            }
        }
    }
    
    function displayDateRoute(dateStr, isShow) {
        dateRoutes[dateStr].visibility = isShow;
        
        for (var techId in routes) {
            displayRoute(techId, dateStr, (techRoutes[techId].visibility && dateRoutes[dateStr].visibility));
        }
    }
    
    function displayTechRoute(techId, isShow) {
        techRoutes[techId].visibility = isShow;
        
        for (var dateStr in routes[techId]) {
            if (dateStr != 'color') {
                displayRoute(techId, dateStr, (techRoutes[techId].visibility && dateRoutes[dateStr].visibility));
            }
        }
        if (!homes[techId]) {
            console.warn('No home locaiton for tech id: ' + techId);
        } else {
            mapService.displayMarker(homes[techId].marker, isShow && isShowHomes);
        }
        
    }
    
    function displaySites(isShow) {
        isShowSites = isShow;
        
        for (var techId in routes) {
            
            for (var dateStr in routes[techId]) {
                if (dateStr != 'color') {
                    var visits = routes[techId][dateStr].visits;
        
                    for (var v in visits) {
                        var visit = visits[v];
                        mapService.displayMarker(visit.marker, techRoutes[techId].visibility && dateRoutes[dateStr].visibility && isShowSites);
                    }
                }
            }
        }
        
    }
    
    function displayVisits(isShow) {
        isShowVisits = isShow;
        
        for (var techId in routes) {
            
            for (var dateStr in routes[techId]) {
                if (dateStr != 'color') {
                    var visits = routes[techId][dateStr].visits;
        
                    for (var v in visits) {
                        var visit = visits[v];
                        for (var a in visit.actVisits) {
                            var actVisit = visit.actVisits[a];
                            mapService.displayMarker(actVisit.marker, techRoutes[techId].visibility && dateRoutes[dateStr].visibility && isShowVisits);
                        }
                    }
                }
            }
        }
        
    }
    
    function displayHomes(isShow) {
        isShowHomes = isShow;
        for (var techId in techRoutes) {
            
            if (!homes[techId]) {
                console.warn('No home locaiton for tech id: ' + techId);
            } else {
                console.debug('display: '  + techRoutes[techId].visibility && isShowHomes);
                mapService.displayMarker(homes[techId].marker, techRoutes[techId].visibility && isShowHomes);

            }
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
        for (var techId in routePoints) {
            var techRoute = routePoints[techId];
        
            for (var dateStr in techRoute) {
                var pathPoints = techRoute[dateStr];
                routes[techId][dateStr].pathPoints = pathPoints;
                routes[techId][dateStr].visits = [];
                generateRoute(routes[techId][dateStr], routes[techId].color);
            }
        }
    }
    
    function generateRoutePolyline(route, color) {
        var routeStyle = {
            normalStyle: {
                fillColor: color,
                fillOpacity: 1,
                pointRadius: 6,
                pointerEvents: "visiblePainted",
                strokeColor: color,
                strokeOpacity: 1,
                strokeWidth: 2
            }
        }
        var polyline = mapService.drawPolyline(route.path, null, routeStyle);
        mapService.displayPolyline(polyline, true);
        
        route.polyline = polyline;
    }

    function generateRoute(route, color) {
        route.path = [];
        for (var p in route.pathPoints) {
            var point = route.pathPoints[p];
        
            var activity = point.activity;
            if (activity) {
                var lonlat = {
                    lon: point.lon,
                    lat: point.lat
                }
                
                if (!lonlat.lon || !lonlat.lat) {
                    alert('route location: ' + point.id +' has unavailable latlon');
                }
                
                if (activity.toLowerCase().trim() != 'location' && activity.toLowerCase().trim() != 'accepted') {
                    
                    var job = point.job;
                    
                    
                    //debugger;
                    if (!sites[job]) {
                        console.warn("Can not find job location for job: " + job);
                        var findActVisit = findVisitByLocation(lonlat, route.visits);
                        if (!findActVisit) {
                            findActVisit = addVisit(point,false);
                            route.visits.push(findActVisit);
                        }
                        findActVisit.popupRows += pointRow;
                        
                        route.path.push(lonlat);
                    } else {
                        var geoVisit = sites[job].point;
                        var geoLonlat = {
                            lon: geoVisit.lon,
                            lat: geoVisit.lat
                        }
                        
                        if (!geoLonlat.lon || !geoLonlat.lat) {
                            alert('site location: '+ geoVisit.id + 'unavailable latlon');
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
        generateRoutePolyline(route, color);
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
        
        //mapService.displayMarker(marker, true);
        
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
    
    function getRoutes() {
        return routes;
    }
    
    function getTechRoutes() {
        return techRoutes;
    }
    
    function getDateRoutes() {
        return dateRoutes;
    }

    return {
        displayRoute: displayRoute,
        initSites: initSites,
        initRoutes: initRoutes,
        loadSitesInfoFromLocal: loadSitesInfoFromLocal,
        loadRoutesInfoFromLocal: loadRoutesInfoFromLocal,
        getRoutes: getRoutes,
        getTechRoutes: getTechRoutes,
        getDateRoutes: getDateRoutes,
        displayTechRoute: displayTechRoute,
        displayDateRoute: displayDateRoute,
        displayHomes: displayHomes,
        displaySites: displaySites,
        displayVisits: displayVisits
    }
}
    



