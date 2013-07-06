IFL.MapService.Google = function(mapContainerId) {
    if (typeof google === "undefined") {
        console.warn('google maps library is not imported, can not create google map service');
        return null;
    }

    var clientX = 0;
    var clientY = 0;
    var polylineNormalStyle;
    var polylineSelectedStyle;
    var routeService;

    var markers = [];
    var polylines = [];
    var labels = [];
    var map;

    var eventHandler = new IFL.Util.EventHandler(["dragStart", "onDrag", "dragEnd", 'clickDemandPoint', 'mouseoverDemandPoint', 'mouseoutDemandPoint', 'idle']);

    initMap();
    initMouseListener(mapContainerId);

    function initMap() {
        map = new google.maps.Map(document.getElementById(mapContainerId), {
            zoom: 4,
            center: new google.maps.LatLng(-25.335448, 135.745076),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        polylineNormalStyle = {
            //            fillColor: "#FF0000",
            //            fillOpacity: 0.7,
            pointRadius: 6,
            pointerEvents: "visiblePainted",
            strokeColor: "#3366ff",
            strokeOpacity: 0.7,
            strokeWeight: 3
        }

        polylineSelectedStyle = {
            cursor: 'pointer',
            //            fillColor: "#FF0000",
            //            fillOpacity: 0.7,
            pointRadius: 6,
            pointerEvents: "visiblePainted",
            strokeColor: "#FF0000",
            strokeOpacity: 0.7,
            strokeWeight: 5
        }
    }

    function initMouseListener(mapContainerId) {
        $('#' + mapContainerId).mousemove(function(e) {
            setMousePosition(e)
        });


        function setMousePosition(e) {
            clientX = e.pageX;
            clientY = e.pageY;
        }
    }

    function drawPolyline(pathPoints, handler, style, extraStyle) {
        var points = [];
        var bounds = new google.maps.LatLngBounds();

        for (var i in pathPoints) {
            var point = pathPoints[i];
            var newPoint = new google.maps.LatLng(parseFloat(point.lat), parseFloat(point.lon));

            //            var newPoint = {
            //                lat: point.lat,
            //                lng: point.lon
            //            }

            points.push(newPoint);
            bounds.extend(newPoint);
        }

        var normalPolylineOptions = {};
        var seletedPolylineOptions = {};

        if (style) {
            $.extend(true, normalPolylineOptions, polylineNormalStyle, style.normalStyle);
        } else {
            normalPolylineOptions = polylineNormalStyle;
        }

        if (style) {
            $.extend(true, seletedPolylineOptions, polylineSelectedStyle, style.selectStyle);

        } else {
            seletedPolylineOptions = polylineSelectedStyle;
        }

        normalPolylineOptions.icons = [];
        if (extraStyle) {
            if (extraStyle.showVehAnimation) {
                var vehLineSymbol = {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    strokeColor: '#393'
                };

                normalPolylineOptions.icons.push({
                    icon: vehLineSymbol,
                    offset: '100%'
                });

            }

            if (extraStyle.showRouteDirection) {
                var directionLineSymbol = {
                    path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
                };
                normalPolylineOptions.icons.push({
                    icon: directionLineSymbol,
                    offset: '10px',
                    repeat: '100px'
                });
            }
        }

        var polyline = new google.maps.Polyline(normalPolylineOptions);
        polyline.selectStyle = seletedPolylineOptions;
        polyline.normalStyle = normalPolylineOptions;

        polylines.push(polyline);

        polyline.setPath(points);

        if (extraStyle && extraStyle.showVehAnimation) {
            var count = 0;
            offsetId = window.setInterval(function() {
                count = (count + 1) % points.length;

                var icons = polyline.get('icons');
                icons[0].offset = (count / points.length) * 100 + '%';
                polyline.set('icons', icons);
            }, 100);
        }

        google.maps.event.addListener(polyline, 'mouseover', function() {
            if (polyline.isSelected) {
                return;
            }

            //debugger;
            polyline.setOptions(seletedPolylineOptions);

            if (handler && handler.onMouseOverPolyline) {
                handler.onMouseOverPolyline(polyline, clientX, clientY);
            }
        });

        google.maps.event.addListener(polyline, 'mouseout', function() {
            if (polyline.isSelected) {
                return;
            }

            polyline.setOptions(normalPolylineOptions);

            if (handler && handler.onMouseOutPolyline) {
                handler.onMouseOutPolyline(polyline, clientX, clientY);
            }
        });

        google.maps.event.addListener(polyline, 'click', function() {
            //            if (polyline.isSelected) {
            //                polyline.isSelected = false;
            //                polyline.setOptions(normalPolylineOptions);
            //            } else {
            //                polyline.isSelected = true;
            //                polyline.setOptions(seletedPolylineOptions);
            //            }

            if (handler && handler.onMouseClickPolyline) {
                handler.onMouseClickPolyline(polyline, clientX, clientY);
            }
        });

        polyline.bounds = bounds;
        polyline.setMap(map);

        return polyline;

    }

    function displayPolyline(polyline, isShow) {
        if (isShow) {
            polyline.setMap(map);
        } else {
            polyline.setMap(null);
        }
    }

    function zoomToBounds(bounds, level) {
        if (level) {
            map.setZoom(level);
        }
        map.fitBounds(bounds);
    }

    function centerMap(lonlat, zoom_level) {
        var mapLonlat = getMapLonLat(lonlat.lon, lonlat.lat);
        map.setCenter(mapLonlat);
        map.setZoom(zoom_level);
    }

    function setRouteService(routeServiceProvider) {
        routeService = routeServiceProvider;
    }

    function getRoute(wayPoints, handler) {
        if (routeService)
            routeService.getRoute(wayPoints, handler);
        else
            alert('Please set route service');
    }

    function getMapLonLat(lon, lat) {
        return new google.maps.LatLng(lat, lon);
    }

    function getPolylineBounds(polyline) {
        return polyline.bounds;
    }

    function addPointMarker(lonlat) {
        var icon = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 3.5,
            fillColor: 'yellow',
            fillOpacity: 1,
            strokeOpacity: 1,
            strokeColor: 'black',
            strokeWeight: 1
        };

        return addMarker(lonlat, icon);
    }

    function addVisitMarker(lonlat, handler) {
        var icon = new google.maps.MarkerImage(Config.imagePath + '/column_visit.png');
        //debugger;
        return addMarker(lonlat, icon, handler);
    }

    function addMarker(lonlat, icon, handler, draggable) {
        //debugger;
        var marker = new google.maps.Marker();
        marker.setDraggable(draggable);

        markers.push(marker);
        if (!icon) {
            marker.setIcon(Config.imagePath + '/column_visit.png');
        } else {
            marker.setIcon(icon);
        }


        var marker_position = getMapLonLat(lonlat.lon, lonlat.lat);

        marker.setPosition(marker_position);

        var MarkEventInfo = function(markerLonlat, clientX, clientY) {
            this.markerLonlat = markerLonlat;
            this.clientX = clientX;
            this.clientY = clientY;
        }

        if (handler)
        {
            google.maps.event.addListener(marker, 'mouseover', function() {
                //highlightMarker(marker, true);
                if (handler.onMouseOverMarker) {
                    handler.onMouseOverMarker(new MarkEventInfo(lonlat, getClientX(), getClientY()));
                }
            });

            google.maps.event.addListener(marker, 'mouseout', function() {
                //highlightMarker(marker, false);
                if (handler.onMouseOutMarker)
                    handler.onMouseOutMarker(new MarkEventInfo(lonlat, getClientX(), getClientY()));
            });

            google.maps.event.addListener(marker, 'click', function() {
                if (handler.onMouseClickMarker)
                    handler.onMouseClickMarker(new MarkEventInfo(lonlat, getClientX(), getClientY()));
            });

        }

        google.maps.event.addListener(marker, 'drag', function() {
            eventHandler.notifyHandlers("onDrag", marker);
        });

        google.maps.event.addListener(marker, 'dragend', function() {
            eventHandler.notifyHandlers("dragEnd", marker, new MarkEventInfo(lonlat, getClientX(), getClientY()));
        });

        google.maps.event.addListener(marker, 'dragstart', function() {
            eventHandler.notifyHandlers("dragStart", marker);
        });

        displayMarker(marker, true);

        return marker;
    }

    function displayMarker(marker, isShow) {
        if (isShow) {
            marker.setMap(map);
        } else {
            marker.setMap(null);
        }
    }

    function removeMarker(marker) {
        marker.setMap(null);
        marker = null;
    }

    function getBoundsObject() {
        return new google.maps.LatLngBounds();
    }

    function extendToBounds(oriBounds, newBounds) {
        return oriBounds.union(newBounds);
    }

    function extendToPoint(bounds, point) {
        var mapLatLon = getMapLonLat(point.lon, point.lat);

        return bounds.extend(mapLatLon);
    }

    function getClientX() {
        return clientX;
    }

    function getClientY() {
        return clientY;
    }

    function centerToBounds(bounds, _zoomLevel) {
        var zoomLevel = _zoomLevel || map.getZoom();
        zoomToBounds(bounds);

        if (map.getZoom() > zoomLevel)
            map.setZoom(zoomLevel);
    }

    function centerToPoint(lonlat) {
        var zoomLevel = map.getZoom();
        centerMap(lonlat, zoomLevel);
    }

    function isContainsBounds(bounds) {
        var curBounds = map.getBounds();

        var northEast = bounds.getNorthEast();
        var southWest = bounds.getSouthWest();

        if (curBounds.contains(northEast) && curBounds.contains(southWest)) {
            return true;
        }

        return false;
    }

    function getCrossIcon() {
        return new google.maps.MarkerImage(Config.imagePath + '/crosshair.png');
    }

    function getDirectionIcon(src) {
        return new google.maps.MarkerImage(src, new google.maps.Size(20, 20), new google.maps.Point(0, 0), new google.maps.Point(10, 25));
    }

    function highlightMarker(marker, isHighlight) {
        //TODO -- change marker icon
        if (isHighlight) {
            marker.setIcon(Config.imagePath + '/column_vector.png');
        } else {
            marker.setIcon(Config.imagePath + '/column_visit.png');
        }
    }

    function clear() {
        for (var m in markers) {
            removeMarker(markers[m]);
        }

        for (var p in polylines) {
            polylines[p].setMap(null);
            polylines[p] = null;
        }

        for (var l in labels) {
            //            labels[l].div_.parentNode.removeChild(labels[l].div_);
            //            labels[l].map = null;
            //            labels[l] = null;
            labels[l].setMap(null);
            labels[l] = null;
        }

        markers = [];
        polylines = [];
        labels = [];
    }

    function highlightPolyline(polyline, isHighlight) {
        if (isHighlight) {
            polyline.setOptions(polyline.selectStyle);
        } else {
            polyline.setOptions(polyline.normalStyle);
        }
    }

    function addDemandPoint(lonlat, color, size, label, borderColor, isConfigurable, domain, isClickable) {
        if (label == 0 && isConfigurable) {
            color = '#C0C0C0'
        }

        var point = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: (15 + size * 2) * (Config.screenRatio ? Config.screenRatio : 1),
            fillColor: color,
            fillOpacity: 1,
            strokeOpacity: 1,
            strokeColor: borderColor || color,
            strokeWeight: 1.5
        }

        var marker = addMarker(lonlat, point);


        // init marker label
        var mapLabel;
        //debugger;
        if (label || label == 0) {
            mapLabel = new IFL.GoogleMaps.Label({
                map: map,
                text: label
            });
            mapLabel.bindTo('position', marker, 'position');
            //mapLabel.bindTo('text', marker, 'position');

            labels.push(mapLabel);

            $(mapLabel.div_).css('cursor', 'pointer');
            $(mapLabel.span_).click(clickHandler);
            $(mapLabel.span_).dblclick(function(e) {
                e.stopPropagation();
            });
        }

        if (isConfigurable || isClickable) {
            var clickHandler = function(e) {

                //only change label when it's configurable (for Panel Demo)
                if (isConfigurable) {
                    label = (label + 1) % 10;
                    mapLabel.text = label;
                    google.maps.event.trigger(mapLabel, 'text_changed');
                    point.scale = (15 + label * 2) * Config.screenRatio;

                    if (label == 0) {
                        point.fillColor = '#C0C0C0'
                    } else {
                        point.fillColor = '#FF0000'
                    }

                    marker.setIcon(point);
                }


                if (domain) {
                    eventHandler.notifyHandlers('clickDemandPoint', domain, {
                        label: label,
                        pageX: clientX,
                        pageY: clientY
                    });
                }
            }

            google.maps.event.addListener(marker, 'click', clickHandler);

            point.oriColor = point.fillColor;
            var mouseOverHandler = function(e) {
                point.fillColor = '#FFFF99';
                marker.setIcon(point);
                eventHandler.notifyHandlers('mouseoverDemandPoint', domain, {
                    label: label,
                    pageX: clientX,
                    pageY: clientY
                });
            }

            var mouseOutHandler = function(e) {
                point.fillColor = point.oriColor;
                marker.setIcon(point);
                eventHandler.notifyHandlers('mouseoutDemandPoint', domain, {
                    label: label,
                    pageX: clientX,
                    pageY: clientY
                });
            }

            google.maps.event.addListener(marker, 'mouseover', mouseOverHandler);
            google.maps.event.addListener(marker, 'mouseout', mouseOutHandler);
        }

        return marker;
    }

    function displayDraggleLayer(isShow) {

    }

    function addMapPopup(content, options) {
        var lonlat = getMapLonLat(options.lon, options.lat);

        var mapPopup
        if (!options.isCustInfoPopup) {
            mapPopup = new google.maps.InfoWindow({
                content: content,
                position: lonlat
            });
        } else {
            mapPopup = new InfoBubble(options);
        }

        mapPopup.open(map, options.marker);

        return mapPopup;
    }

    function removeMapPopup(mapPopup) {
        mapPopup.close();
    }

    function getMarkerLatlon(marker) {
        var mapLonlat = marker.getPosition();

        var lonlat = {
            lat: mapLonlat.lat(),
            lon: mapLonlat.lng()
        }

        return lonlat;
    }

    function clearPolylineLayer() {
        for (var p in polylines) {
            polylines[p].setMap(null);
            polylines[p] = null;
        }
    }

    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }

    function addIdleHandler(handler) {
        //draw it when the map is idle, Google Maps only
        google.maps.event.addListener(map, 'idle', function() {
            handler();
        });
    }

    return {
        mapType: 'Google',
        zoomToBounds: zoomToBounds,
        centerMap: centerMap,
        map: map,
        drawPolyline: drawPolyline,
        displayPolyline: displayPolyline,
        setRouteService: setRouteService,
        getRoute: getRoute,
        getMapLonLat: getMapLonLat,
        getPolylineBounds: getPolylineBounds,
        displayMarker: displayMarker,
        addMarker: addMarker,
        addVisitMarker: addVisitMarker,
        removeMarker: removeMarker,
        getBoundsObject: getBoundsObject,
        extendToBounds: extendToBounds,
        extendToPoint: extendToPoint,
        centerToPoint: centerToPoint,
        centerToBounds: centerToBounds,
        isContainsBounds: isContainsBounds,
        getCrossIcon: getCrossIcon,
        getDirectionIcon: getDirectionIcon,
        clear: clear,
        highlightMarker: highlightMarker,
        highlightPolyline: highlightPolyline,
        addDemandPoint: addDemandPoint,
        displayDraggleLayer: displayDraggleLayer,
        removeMapPopup: removeMapPopup,
        addMapPopup: addMapPopup,
        getMarkerLatlon: getMarkerLatlon,
        clearPolylineLayer: clearPolylineLayer,
        registerHandler: registerHandler,
        addIdleHandler: addIdleHandler,
        addPointMarker: addPointMarker
    }
}
