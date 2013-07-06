IFL.RouteGeo.MapService = function(_options) {
    var options = {
        mapContainerId: 'mapContainer'
    }
    
    $.extend(true, options, _options);
    
    var mapservice;
    var routeservice;
    var map;
    var eventsHandler;
    var detailsPopup;
    
    var matchMarkers = [];
    var visitMarkers = [];
    var resolvedMatch;
    
    var routePath = {};
    
    init();
    function init() {
        initEvents();
        initMapService();
        //initDragControl();
        initHandlers();
        initDetailsPopup();
    }
    
    function initDetailsPopup() {
        detailsPopup = new IFL.Widget.DomainPopup();
        
        detailsPopup.registerHandler('ok', function(matchDetails) {
            
            var match = findMatchById(matchDetails.id);
            selectMatch(match);
            notifyHandlers('selectMatch', match);
        })
    }
    
    function findMatchById(matchId) {
        for (var m in matchMarkers) {
            var marker = matchMarkers[m];
            
            if (marker.domain.id == matchId) {
                return marker.domain;
            }
        }
        
        console.warn('can not find match with Id: ' + matchId + " !!!!!");
        return null;
    }
    
    //    function initDragControl(){
    //        var draggableLayer = new OpenLayers.Layer.Markers('Draggable Layer');
    //        map.addLayer(draggableLayer);
    //        map.draggableLayer = draggableLayer;
    //        
    //        dragControl = new EMS.Control.DraggingControl(draggableLayer,
    //        {
    //            'onStart': function(marker) {
    //                marker.oriLonlat = marker.lonlat;
    //            
    //                if (marker.hoverPopup) {
    //                    map.removePopup(marker.hoverPopup);
    //                    marker.hoverPopup.destroy();
    //                    marker.hoverPopup = null;
    //                }
    //            //   console.info('drag start');
    //            },
    //            'onDrag': function() {
    //            // console.info('draging');
    //            },
    //            'onComplete': function(f, m) {
    //            // console.info('drag end');
    //            
    //            //debugger;
    //            }
    //        });
    //        
    //        map.addControl(dragControl);
    //        dragControl.activate();
    //    }
    
    function initMapService() {
        mapservice = options.mapservice;
        routeservice = options.routeservice;
        if (!mapservice) {
            //mapservice = new IFL.MapService.EMS(options.mapContainerId);
            mapservice = new IFL.MapService.Google(options.mapContainerId);
        }
    
        if (!routeservice) {
            routeservice = new IFL.RouteService.LCP(Config.geoServerUrl + '/routePath');
            
            mapservice.setRouteService(routeservice);
        }
        
        map = mapservice.map;
        
        initMapServiceHandler();
    }
    
    function initMapServiceHandler() {
        mapservice.registerHandler('dragStart', function(marker) {
            marker.oriLonlat = mapservice.getMarkerLatlon(marker);
            
            if (marker.hoverPopup) {
                mapservice.removeMapPopup(marker.hoverPopup);
            }
        });
        
        mapservice.registerHandler('dragEnd', function(marker, eventInfo) {
            showLocationConfirmPopup(marker.domain, marker, eventInfo.clientX,eventInfo.clientY);
        });
    }
    
    function initEvents() {
        eventsHandler = new IFL.Util.EventHandler(['mouseoverMatch','mouseoutMatch', 'mouseclickMatch', 'selectMatch', 'newLocation','mouseoverVisit', 'mouseoutVisit', 'mouseclickVisit']);
    }
    
    function notifyHandlers(eventName, visObj, options) {
        eventsHandler.notifyHandlers(eventName, visObj, options);
    }
    
    function registerHandler(eventName, handler) {
        eventsHandler.registerHandler(eventName, handler);
    }
    
    function showMatches(matches, selectedMatch, status, selectedLonlat) {
        clear();
        
        if (matches.length == 0) {
            return;
        }
        
        //var bounds = new OpenLayers.Bounds();
        var bounds = mapservice.getBoundsObject();
        for (var m=0; m<matches.length; m++) {
            var match = matches[m];
            
            if (!match.geocode) {
                console.warn('match: ' + match.id + ' does NOT have geocode !!!');
                continue;
            }
            
            var matchLonlat = {
                lat: match.geocode.lat,
                lon: match.geocode.lon
            }
            
            var iconTitle = String.fromCharCode(65 + parseInt(m));
            
            var isSelected = false;
            if (match.id && match.id == selectedMatch) {
                // only marker it as 'S' when it's resolved
                if (status != 'SELECT') {
                    iconTitle = 'S';
                }
                
                isSelected = true;
            }
            
            var marker = getMatchLocationMarker(match, iconTitle, isSelected, status, selectedLonlat);
            
            // moved the selected match to draggable layer
            if (iconTitle == 'S') {
                mapservice.displayMarker(marker, false, false);
                mapservice.displayMarker(marker, true, true);
                
                //map.markersLayer.removeMarker(marker);
                //map.draggableLayer.addMarker(marker);
                
                //record the original icon title
                marker.iconTitle = String.fromCharCode(65 + parseInt(m));
            }
            
            matchMarkers.push(marker);
            
            bounds = mapservice.extendToPoint(bounds, matchLonlat);
        }
        
        mapservice.centerToBounds(bounds, 8);
        
    //        map.zoomToExtent(bounds);
    //        if (map.getZoom() > 8) {
    //            map.zoomTo(8)
    //        }
    }
    
    function getMatchLocationMarker(match, iconTitle, isSelected, status, selectedLonlat) {
        var marker;
        var lonlat = {
            lat: match.geocode.lat,
            lon: match.geocode.lon
        }
        
        // use selected latlon in case the marker moved
        if (isSelected && selectedLonlat) {
            lonlat = {
                lat: selectedLonlat.lat,
                lon: selectedLonlat.lon
            }
        }
        
        var handler = {
            onMouseClickMarker: function(eventInfo) {
                //check if marker just dragged (EMS map only)
                if (marker.preformedDrag) {
                    marker.preformedDrag = false;
                    showLocationConfirmPopup(match, marker, eventInfo.clientX,eventInfo.clientY);
                    return;
                } 
                
                notifyHandlers('mouseclickMatch', match, {
                    pageX: eventInfo.clientX, 
                    pageY: eventInfo.clientY,
                    marker: marker
                });
            },
            onMouseOverMarker: function(eventInfo) {
                notifyHandlers('mouseoverMatch', match, {
                    pageX: eventInfo.clientX, 
                    pageY: eventInfo.clientY,
                    marker: marker
                });
            },
            onMouseOutMarker: function(eventInfo) {
                notifyHandlers('mouseoutMatch', match, {
                    pageX: eventInfo.clientX, 
                    pageY: eventInfo.clientY,
                    marker: marker
                });
            }
        }
        
        var icon;
        
        if (mapservice.mapType == 'EMS') {
            if (isSelected) {
                if (status != 'RESOLVED') {
                    icon = EMS.Services.StandardIcons.poi(map.tilePath, "000000", "FFFF00", iconTitle);
                } else {
                    icon = EMS.Services.StandardIcons.poi(map.tilePath, "000000", "00ff00", iconTitle);
                }
            } else {
                icon = EMS.Services.StandardIcons.poi(map.tilePath, "000000", "ff0000", iconTitle);   
            }
        } else if (mapservice.mapType == 'Google') {
            if (isSelected) {
                if (status != 'RESOLVED') {
                    icon = getGoogleIcon('VISIT', iconTitle);
                } else {
                    icon = getGoogleIcon('RESOLVED', iconTitle);
                }
            } else {
                icon = getGoogleIcon('SELECT', iconTitle);
            }
        }
        
        
        marker = generateLocationMarker(lonlat, icon, handler);
        marker.domain = match;
        marker.iconTitle = iconTitle;
        marker.isSelected = isSelected;
        
        return marker;
    }
    
    function selectMatch(match) {
        if (resolvedMatch == match) 
            return;
        
        for (var m in matchMarkers) {
            var marker = matchMarkers[m];
            
            if (marker.domain == match) {
                if (!marker.isSelected || marker.iconTitle != 'S') {
                    setMarkerSelected(marker, true);
                }
            } else if (marker.isSelected) {
                setMarkerSelected(marker, false);
            }
        }
    }
    
    function setMarkerSelected(marker, isSelected) {
        marker.isSelected = isSelected;
        
        if (mapservice.mapType == 'EMS') {
            if (isSelected) {
                marker.icon.url = 'http://tiles.whereis.com/remapper/marker?type=poi&width=27&height=96&colour1=000000&colour2=00ff00&text1=S';
                mapservice.displayMarker(marker, false, false);
                mapservice.displayMarker(marker, true, true);
                
                //map.markersLayer.removeMarker(marker);
                //map.draggableLayer.addMarker(marker);
                resolvedMatch = marker.domain;
            //notifyNewLocation(marker);
            } else {
                marker.icon.url = 'http://tiles.whereis.com/remapper/marker?type=poi&width=27&height=96&colour1=000000&colour2=ff0000&text1=' + marker.iconTitle;
                //map.draggableLayer.removeMarker(marker);
                //map.markersLayer.addMarker(marker);
                mapservice.displayMarker(marker, false, true);
                mapservice.displayMarker(marker, true, false);
            }
        
            marker.icon.draw();
        } 
            
        if (mapservice.mapType == 'Google') { 
            if (isSelected) {
                var iconImage = getGoogleIcon('RESOLVED', marker.iconTitle);
                
                marker.setIcon(iconImage);
                marker.setDraggable(true);
                //map.markersLayer.removeMarker(marker);
                //map.draggableLayer.addMarker(marker);
                resolvedMatch = marker.domain;
            //notifyNewLocation(marker);
            } else {
                iconImage = getGoogleIcon('SELECT', marker.iconTitle);
                    
                marker.setIcon(iconImage);
                marker.setDraggable(false);
            //map.draggableLayer.removeMarker(marker);
            //map.markersLayer.addMarker(marker);
            //mapservice.displayMarker(marker, false, true);
            //mapservice.displayMarker(marker, true, false);
            }
        }
        
        
    }
    
    function generateLocationMarker(lonlat, icon, handler) {
        var marker = mapservice.addMarker({
            lat: lonlat.lat, 
            lon: lonlat.lon
        } , icon, handler);
        
        return marker;
    }
    
    function initHandlers() {
        registerHandler('mouseoverMatch', onMouseOverMatch);
        registerHandler('mouseoutMatch', onMouseOutMatch);
        registerHandler('mouseclickMatch', onMouseClickMatch);
    }
    
    function onMouseOverMatch(match, options) {
        var marker;
        if (!options) {
            marker = findMarkerByDomain(match);
        } else {
            marker = options.marker;
        }
        
        if (!marker) {
            return;
        }
        
        var addressSummary = getMatchAdressSummary(match);
        var hoverPopupContent = '<div class="ui-widget-content" style="width: 100%; height: 100%; font-weight: normal; padding: 5px;">' + addressSummary + '</div>';
        
        //var hoverPopup = new EMS.Popup("popup-div", marker.lonlat, new OpenLayers.Size(200, 50), hoverPopupContent, null, false);
        //map.addPopup(hoverPopup, true);
        
        var markerLatlon = mapservice.getMarkerLatlon(marker);
        
        var hoverPopup = mapservice.addMapPopup(hoverPopupContent, {
            id: 'popup-div',
            exclusive: true,
            lat: markerLatlon.lat,
            lon: markerLatlon.lon
        });
        
        marker.hoverPopup = hoverPopup;
    }
    
    function onMouseOutMatch(match, options) {
        var marker;
        if (!options) {
            marker = findMarkerByDomain(match);
        } else {
            marker = options.marker;
        }
        
        if (!marker) {
            return;
        }
        
        if (marker.hoverPopup) {
            //map.removePopup(marker.hoverPopup);
            mapservice.removeMapPopup(marker.hoverPopup);
        }
    }
    
    function onMouseClickMatch(match, options) {
        var marker;
        if (!options) {
            marker = findMarkerByDomain(match);
        } else {
            marker = options.marker;
        }
        
        if (!marker) {
            return;
        }
        
        var markerLatlon = mapservice.getMarkerLatlon(marker);
        
        var domain = {
            street: '',
            suburb: '',
            state: '',
            postcode: '',
            latitude: '',
            longtitude: ''
        }
        
        if (match) {
            var number = match.number ? match.number.value : (match.index ? match.index : '');
            domain.id = match.id;
            domain.street = number + ' ' + (match.street ?  match.street.value : '');
            domain.suburb = match.locality ? match.locality.value : '';
            domain.state = match.state ? match.state.value : '';
            domain.postcode = match.postcode ? match.postcode.value : '';
            domain.latitude = markerLatlon.lat.toFixed(6);
            domain.longtitude = markerLatlon.lon.toFixed(6);
        } else {
            console.error('No match clicked !!!');
            return;
        }
        
        var isSelected = marker.isSelected;
        var buttonOptions;
        if (!isSelected || marker.iconTitle != 'S') {
            buttonOptions = {
                ok: 'Select',
                cancel: 'Cancel',
                showAll: true
            }
        } else {
            buttonOptions = {
                ok: 'OK'
            }
        }
        
        detailsPopup.show(domain, {
            isEditable: false,
            popupOptions: {
                title: "Match Location Details",
                position: [options.pageX, options.pageY]
            },
            tableOptions: {
                nameMapping: {
                    street: 'Street',
                    suburb: 'Suburb',
                    state: 'State',
                    postcode: 'Postcode',
                    latitude: 'Latitude',
                    longtitude: 'Longtitude'
                },
                showMappingOnly: true
            },
            buttonOptions: buttonOptions
        });
        
    }
    
    function getMatchAdressSummary(addressMatch) {
        var number = addressMatch.number ? addressMatch.number.value : (addressMatch.index ? addressMatch.index : '');
        var type = addressMatch.type ? addressMatch.type.value : '';
        
        var street = number + ' ' + (addressMatch.street ? addressMatch.street.value : '') + ' ' + type;
        var suburb = addressMatch.locality ? addressMatch.locality.value : '';
        var state = addressMatch.state.value;
        var postcode = addressMatch.postcode.value;
        
        var addressSummary = (street? street + ',' : '') + (suburb || '') + ' ' + (state || '') + ' ' +  (postcode || '');
        
        return addressSummary;
    }
    
    function clear() {
        mapservice.clear();
        
        matchMarkers = [];
        visitMarkers = [];
    }
    
    function findMarkerByDomain(domain) {
        for (var i in matchMarkers) {
            var marker = matchMarkers[i];
            
            if (marker.domain == domain) {
                return marker;
            }
        }
        
        console.warn('Can not find marker for match !!');
        return null;
    }
    
    function showLocationConfirmPopup(addressDomain, marker, x,y) {
        var addressSum = getMatchAdressSummary(addressDomain);
        
        var content = jQuery('<div>Please confirm the new locaiton for address: <br/><b>' + addressSum + '</b></div>');
        
        content.dialog({
            //autoOpen: true,
            modal: false,
            resizable: true,
            close: function(event, ui) {
                jQuery(this).dialog('destroy');
                jQuery(this).remove();
            },
            title: 'Confirm Address Location',
            position: [x,y],
            width: 340,
            height: 150,
            buttons: {
                'OK': function(e) {
                    var curMarkerLonlat = mapservice.getMarkerLatlon(marker);
                    if (marker.oriLonlat != curMarkerLonlat) {
                        marker.oriLonlat = curMarkerLonlat;
                        notifyNewLocation(marker, addressDomain);
                    }
                    
                    content.dialog('close');
                },
                'Cancel': function() {
                    var markerLonLat = mapservice.getMapLonLat(marker.oriLonlat.lon, marker.oriLonlat.lat);
                    if (mapservice.mapType == 'EMS') {
                        marker.lonlat = markerLonLat;
                        mapservice.displayMarker(marker, false, true);
                        mapservice.displayMarker(marker, true, true);
                    } else if (mapservice.mapType == 'Google') {
                        marker.setPosition(markerLonLat); 
                    }
                    
                    content.dialog('close');
                }
            }
        });
    }
    
    function notifyNewLocation(marker, domain) {
        var markerLonlat = mapservice.getMarkerLatlon(marker);
                    
        // Do NOT update lat/lon on real Match !!?
        //                    addressDomain.getLocation().lat = lat.toFixed(6);
        //                    addressDomain.getLocation().lon = lon.toFixed(6);
                    
        notifyHandlers('newLocation', domain, {
            lat: markerLonlat.lat.toFixed(6),
            lon: markerLonlat.lon.toFixed(6)
        });
    }
    
    function clearRoute(routeId) {
        //before render change route on the fly, clear existing route polyline and markers
        mapservice.clearPolylineLayer();
        //map.vlayer.removeAllFeatures();
        
        for (var v in visitMarkers) {
            var marker = visitMarkers[v];
            mapservice.removeMarker(marker);
        }
        visitMarkers = [];
        
        routePath[routeId] = null;
    }
    
    function showRoute(route, curLocation) {
        //JAXB object to Json problem,so have two visits....
        var visits = route.visits.visits;
        
        showVisits(visits, curLocation);
        
        //return;
        //TODO -- generate route path polyline
        var routeId = curLocation.criteria.run;
        if (!routePath[routeId]) {
            showPath(visits, routeId);
        } else {
            var polylines = routePath[route.id];
            displayLocationRoute(curLocation, true, polylines);
        }
    }
    
    function showVisits(visits, curLocation) {
        for (var v=0; v<visits.length; v++) {
            var visit = visits[v];
            var isCurLocation = (visit.location.id == curLocation.id);
            var marker = getVisitLocationMarker(visit, v, isCurLocation);
            
            //debugger;
            if (marker)
                visitMarkers.push(marker);
        }
    }
    
    function showPath(visits, routeId) {
        if (!mapservice.getRoute) {
            console.error('Can not get route polyline, There is No Path Service setup for Map Service !!!');
            return;
        }
        
        var polylines = [];
        var waypoints = [];
        for (var v=0; v< visits.length; v++) {
            var location = visits[v].location;
            if (location && location.lat > -999 && location.lon > -999) {
                //debugger;
                var latlon = {
                    lat: location.lat,
                    lon: location.lon
                }
                waypoints.push(latlon);
            } else {
                //debugger;
                var handler = {
                    onRouteServiceFinish: function(pathPoints) {
                        var polyline = mapservice.drawPolyline(pathPoints);
                        polylines.push(polyline);
                    }
                }
                
                if (waypoints.length > 1) {
                    mapservice.getRoute(waypoints, handler);
                }
                
                waypoints = [];
            }
        }
        
        //do it again in case last visit is an available one
        if (waypoints.length >= 2) {
            var handler = {
                onRouteServiceFinish: function(pathPoints) {
                    var polyline = mapservice.drawPolyline(pathPoints);
                    polylines.push(polyline);
                }
            }
                
            if (waypoints.length > 1) {
                mapservice.getRoute(waypoints, handler);
            }
                
            waypoints = [];
        }
        
        routePath[routeId] = polylines;
    }
    
    function displayPath(polylines, isShow) {
        // a geo route may have multiple polylines, since we leave Gap for unresolved locations
        for (var p in polylines) {
            var polyline = polylines[p];
            mapservice.displayPolyline(polyline, isShow);
        }
    }
    
    function displayMarkers(markers, isDisplay) {
        for (var m in markers) {
            var marker = markers[m];
            
            mapservice.displayMarker(marker, isDisplay);
        }
    }
    
    function getVisitLocationMarker(visit, iconTitle, isCurLocation) {
        var marker;
        
        //skip visits whose location is not resolved
        if (!visit.location || !(visit.location.lat > -999 && visit.location.lon > -999)) {
            return null;
        }
        
        var lonlat = {
            lat: visit.location.lat,
            lon: visit.location.lon
        }
        
        var handler = {
            onMouseClickMarker: function(eventInfo) {
                
                notifyHandlers('mouseclickVisit', visit, {
                    pageX: eventInfo.clientX, 
                    pageY: eventInfo.clientY,
                    marker: marker
                });
                
                debugger;
                console.info("mouse click visit marker: " + visit);
            },
            onMouseOverMarker: function(eventInfo) {
                notifyHandlers('mouseoverVisit', visit, {
                    pageX: eventInfo.clientX, 
                    pageY: eventInfo.clientY,
                    marker: marker
                });
                
                
            },
            onMouseOutMarker: function(eventInfo) {
                notifyHandlers('mouseoutVisit', visit, {
                    pageX: eventInfo.clientX, 
                    pageY: eventInfo.clientY,
                    marker: marker
                });
            }
        }
        
        var icon;
        
        if (mapservice.mapType == 'EMS') {
            if (!isCurLocation) {
                icon = EMS.Services.StandardIcons.poi(map.tilePath, "000000", "FFFF00", iconTitle);
            } else {
                icon = EMS.Services.StandardIcons.poi(map.tilePath, "000000", "00ff00", iconTitle);
            }
        } else if (mapservice.mapType == 'Google'){
            if (!isCurLocation) {
                icon = getGoogleIcon('VISIT', iconTitle);
            } else {
                icon = getGoogleIcon('RESOLVED', iconTitle);
            }
        }
        
        
        marker = generateLocationMarker(lonlat, icon, handler);
        marker.domain = visit;
        marker.iconTitle = iconTitle;
        marker.isCurLocation = isCurLocation;
        
        return marker;
    }
    
    function displayLocationRoute(location, isShow, route) {
        var routeId = location.criteria.run;
        
        if (!routeId) {
            alert('There is no Run number for this locaiton: ' + location.id);
            return;
        }
        
        if (visitMarkers.length > 0) {
            displayMarkers(visitMarkers, isShow);
        } else {
            var visits = route.visits.visits;
            showVisits(visits, location);
        }
        
        var polylines = routePath[routeId];
        displayPath(polylines, isShow);
    }
    
    function displayLocationMatches(location, isShow) {
        displayMarkers(matchMarkers, isShow);
        
        //draggableLayer created by us
        mapservice.displayDraggleLayer(isShow);
    }
    
    function getGoogleIcon(status, title) {
        var iconUrl;
        switch (status) {
            case 'SELECT' : {
                
                iconUrl = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=" + title + "|ff0000|000000";
                break;
            }
            case 'RESOLVED' : {
                iconUrl = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=" + title + "|00ff00|000000";
                break
            }
            case 'VISIT' : {
                iconUrl = "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=" + title + "|FFFF00|000000";
                break
            }
        }
        
        var icon = new google.maps.MarkerImage(iconUrl,
            new google.maps.Size(21, 34),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
            
        return icon;
    }
    
    return {
        showMatches: showMatches,
        selectMatch: selectMatch,
        registerHandler: registerHandler,
        onMouseOutMatch: onMouseOutMatch,
        onMouseOverMatch: onMouseOverMatch,
        clear: clear,
        displayLocationRoute: displayLocationRoute,
        displayLocationMatches: displayLocationMatches,
        showRoute: showRoute,
        clearRoute: clearRoute
    }
}