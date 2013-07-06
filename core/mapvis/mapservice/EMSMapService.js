IFL.MapService.EMS = function(mapContainerId) {
    var clientX = 0;
    var clientY = 0;
    var map;
    var polylineStyle;
    var routeService;
    
    var eventHandler = new IFL.Util.EventHandler(["dragStart","onDrag","dragEnd"]);
    
    init();
    
    function init() {
        initMap(mapContainerId);
        initMouseListener(mapContainerId);
        initFeatureControl();
        initDragControl();
    }
    
    function initMap(mapContainerId) {
        EMS.Services.communicationMode = "CrossDomain";
        
        var navigation = new OpenLayers.Control.Navigation();

        var controls =[];
        var copyright = new EMS.Control.Copyright();
                        
        controls.push(copyright);
        controls.push(new OpenLayers.Control.MousePosition() );
        controls.push(new OpenLayers.Control.LayerSwitcher() );
        controls.push(navigation);
        
        map = new EMS.Services.Map(mapContainerId, {
            controls: controls
        }); 
        
        $('#EMS\\.Control\\.Copyright\\_3').css({
            'bottom' : '0px'
        });
        
        map.addControl(new EMS.Control.ZoomBar(map.whereis_street_wms, map.whereis_photo_wms, map.whereis_hybrid_wms, true, true));
        
        // Add blank base layer
        var blankLayer = new OpenLayers.Layer.Vector('Blank Layer', {
            isBaseLayer: true
        });
        map.addLayer(blankLayer);
        map.blankLayer = blankLayer;
    }
    
    function initDemandPointsLayer() {
        var style = new OpenLayers.Style({
            fillColor: '${color}',
            fillOpacity: 1,
            pointerEvents: "visiblePainted",
            strokeColor: "${borderColor}",
            strokeOpacity: 1,
            strokeWidth: 5,
            pointRadius: '${size}',
            label: '${label}',
            labelAlign: "cm",
            labelOutlineColor: "white",
            labelOutlineWidth: 3,
            //fontColor: '#FF9900',
            fontSize: '14px',
            fontWeight: 'bold'
        })
        
        var demandStyle = new OpenLayers.StyleMap({
            'default': style
        });
        
        var demandPointsLayer = new OpenLayers.Layer.Vector('demand layer', {
            styleMap: demandStyle
        });

        map.addLayer(demandPointsLayer);
        demandPointsLayer.setZIndex(1000);
        map.demandLayer = demandPointsLayer;
    }
    
    function initDragControl(){
        var draggableLayer = new OpenLayers.Layer.Markers('Draggable Layer');
        map.addLayer(draggableLayer);
        map.draggableLayer = draggableLayer;
        
        var dragControl = new EMS.Control.DraggingControl(draggableLayer,
        {
            'onStart': function(marker) {
                eventHandler.notifyHandlers("dragStart", marker);
            //   console.info('drag start');
            },
            'onDrag': function() {
                eventHandler.notifyHandlers("onDrag");
            // console.info('draging');
            },
            'onComplete': function(f, m) {
                eventHandler.notifyHandlers("dragEnd");
            // console.info('drag end');
            }
        });
        
        map.addControl(dragControl);
        dragControl.activate();
    }
        
    function initMouseListener(mapContainerId) {
        $('#' + mapContainerId).mousemove(setMousePosition(clientX, clientY));
                
        function setMousePosition(clientX, clientY) {
            return function(e) {
                clientX = e.pageX;
                clientY = e.pageY;
            }
        };
    }
    
    function initFeatureControl() {
        polylineStyle = {
            normalStyle: {
                fillColor: "#3366ff",
                fillOpacity: 0.7,
                pointRadius: 6,
                pointerEvents: "visiblePainted",
                strokeColor: "#3366ff",
                strokeOpacity: 0.7,
                strokeWidth: 5,
                graphicZIndex: 50
            },
            selectedStyle: {
                cursor: 'pointer',
                fillColor: "#FF0000",
                fillOpacity: 1,
                pointRadius: 6,
                pointerEvents: "visiblePainted",
                strokeColor: "#FF0000",
                strokeOpacity: 1,
                strokeWidth: 5,
                graphicZIndex: 100
            }
        }
                
        var select_feature_control = new OpenLayers.Control.SelectFeature(map.vlayer, {
            selectStyle: polylineStyle.selectedStyle,
            hover: true,
            overFeature : featureOver,                    
            outFeature: featureOut,
            clickFeature: featureClick
        });
                
        function featureOver(feature) {
            if (feature.isSelected)
                return;
            
            highlightPolyline(feature, true);
                        
            if (feature.handler) {
                feature.handler.onMouseOverPolyline(feature, clientX, clientY);
            }
        }
                
        function featureOut(feature) {
            if (feature.isSelected)
                return;
            
            highlightPolyline(feature, false);
                
            if (feature.handler) {
                feature.handler.onMouseOutPolyline(feature, clientX, clientY);
            }
                        
        }
                
        function featureClick(feature) {
            if (feature.handler)
                feature.handler.onMouseClickPolyline(feature,clientX, clientY);
        }
        
        map.addControl(select_feature_control);
        select_feature_control.activate();
                
        // hack the bug when activate feature select control
        map.setLayerZIndex(map.markersLayer, map.getLayerIndex(map.vlayer) + 100);
    }
    
    function highlightPolyline(polyline, isHighlight) {
        displayPolyline(polyline, false);
        
        if (isHighlight) {
            polyline.style = polyline.selectStyle;
        } else {
            polyline.style = polyline.normalStyle;
        }
        
        displayPolyline(polyline, true);
    }
    
    function getPolylineBounds(polyline) {
        return polyline.geometry.getBounds();
    }
    
    function displayPolyline(polyline, isShow, routelayer) {
        var layer = routelayer || map.vlayer;
        if (!isShow) {
            layer.removeFeatures(polyline);
        } else {
            layer.addFeatures(polyline);
        }
    } 
    
    function drawPolyline(pathPoints, handler, _style) {
        var points = [];
                    
        for (var i in pathPoints) {
            var point = pathPoints[i];
                                 

            var newPoint = new OpenLayers.Geometry.Point(parseFloat(point.lon), EMS.Util.latToSGP4(parseFloat((point.lat))));
            points.push(newPoint);
        }

        var lineString = new OpenLayers.Geometry.LineString(points);
        
        var style = $.extend(true, {}, polylineStyle, _style);
                    
        var polyline = new EMS.Feature.Vector(lineString,{}, style.normalStyle);
        polyline.selectStyle = style.selectedStyle;
        polyline.normalStyle = style.normalStyle;
        polyline.style = style.normalStyle;
        
        //        if (_style && _style.selectStyle) {
        //            polyline.selectStyle = _style.selectStyle;
        //        } else {
        //            polyline.selectStyle = polylineSelectedStyle;
        //        }
        //                    
        //        if (_style && _style.normalStyle) {
        //            polyline.normalStyle = _style.normalStyle;
        //            polyline.style = _style.normalStyle;
        //        } else {
        //            polyline.normalStyle = polylineNormalStyle;
        //        }
                    
        if (handler)
            polyline.handler = handler;
                 
        this.map.vlayer.addFeatures(polyline);
                    
        return polyline;                    
    }
    
    function addVisitMarker(lonlat, handler, layer) {
        var icon = new EMS.HoverIcon(Config.imagePath + '/icon_visit.png', new OpenLayers.Size(10, 20), new OpenLayers.Pixel(0, -20), null, 2);
        return addMarker(lonlat, icon, handler,layer);
    }
    
    function addNormalVisitMarker(lonlat, handler, layer) {
        var size = new OpenLayers.Size(21,25);
        var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
        var icon = new OpenLayers.Icon('http://www.openlayers.org/dev/img/marker.png',size,offset);
        return addMarker(lonlat, icon, handler,layer);
    }
    
    function addMarker(lonlat, icon, handler, draggable) {
        var mapLatlon = getMapLonLat(lonlat.lon, lonlat.lat);
        
        var marker = new OpenLayers.Marker(mapLatlon, icon);
        
        if (!draggable) {
            map.markersLayer.addMarker(marker);
        } else {
            map.draggableLayer.addMarker(marker);
        }
        
                
        var MarkEventInfo = function(markerLonlat,clientX, clientY){
            this.markerLonlat = markerLonlat;
            this.clientX = clientX;
            this.clientY = clientY;
        }
                
        if (handler)
        {
            marker.events.register("click", marker, function(e) {
                if (handler.onMouseClickMarker)
                    handler.onMouseClickMarker(new MarkEventInfo(marker.lonlat, e.clientX, e.clientY));
            });
                    
            marker.events.register("mouseover", marker, function(e) {
                        
                if (handler.onMouseOverMarker)
                    handler.onMouseOverMarker(new MarkEventInfo(marker.lonlat, e.clientX, e.clientY));
            });
                    
            marker.events.register("mouseout", marker, function(e) {
                        
                if (handler.onMouseOutMarker)
                    handler.onMouseOutMarker(new MarkEventInfo(marker.lonlat, e.clientX, e.clientY));
            });
                    
        }
            
        //marker.display(false);
            
        return marker;
    }
    
    function addPoint(lonlat, options, layer) {
        var mapLatlon = getMapLonLat(lonlat.lon, lonlat.lat);
        var point = new OpenLayers.Geometry.Point(mapLatlon.lon, mapLatlon.lat);
        
        var pointFeature = new OpenLayers.Feature.Vector(point, options);
        
        layer.addFeatures(pointFeature);
    }
    
    function addDemandPoint(lonlat, color, size, label, borderColor) {
        if (!map.demandLayer) {
            initDemandPointsLayer();
        }
        
        var options = {
            size: size,
            label: label,
            color: color,
            borderColor: borderColor || color
        }
        //        var pointFeature = new OpenLayers.Feature.Vector(point, {
        //            //Attributes go here
        //            size: size,
        //            label: label,
        //            color: color,
        //            borderColor: borderColor || color
        //        })
        
        //map.demandLayer.addFeatures(pointFeature);
        addPoint(lonlat, options, map.demandLayer);
    }
        
    function centerMap(lonlat, zoom_level) {
        map.setCenter(lonlat, zoom_level);        
    }
    
    function centerToBounds(bounds, _zoomLevel) {
        var zoomLevel = _zoomLevel || map.zoom;
        zoomToBounds(bounds);
        
        if (map.getZoomForExtent(bounds) > zoomLevel)
            map.zoomTo(zoomLevel);
    }
    
    function centerToPoint(lonlat) {
        var zoomLevel = map.zoom;
        map.setCenter(lonlat, zoomLevel);
    }
        
    function zoomToBounds(bounds) {
        if (map.getZoomForExtent(bounds) > map.zoom || !map.getExtent().intersectsBounds(bounds, true)) {
            map.zoomToExtent(bounds);
        } 
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
        return new EMS.LonLat(lon, lat);
    }
    
    function displayMarker(marker, isShow, draggable) {
        var layer;
        if (!draggable) {
            layer = map.markersLayer;
        } else {
            layer = map.draggableLayer;
        }
        
        if (isShow) {
            layer.addMarker(marker);
        } else {
            layer.removeMarker(marker);
        }
    }
    
    function removeMarker(marker, draggable) {
        if (!draggable) {
            map.markersLayer.removeMarker(marker);
        } else {
            map.draggableLayer.removeMarker(marker);
        }
        
        delete marker;
    }
    
    function getBoundsObject() {
        return new OpenLayers.Bounds();
    }
    
    function extendBounds(oriBounds, newBounds) {
        oriBounds.extend(newBounds);
        return oriBounds;
    }
    
    function extendToPoint(oriBounds, lonlat) {
        var mapLonlat = getMapLonLat(lonlat.lon, lonlat.lat);
        oriBounds.extend(mapLonlat);
        return oriBounds;
    }
    
    function isContainsBounds(bounds) {
        var currentBounds = map.getExtent();
        return currentBounds.containsBounds(bounds);
    }
    
    function getCrossIcon() {
        var icon = EMS.Services.StandardIcons.crossHair();
        return icon;
    }
    
    function getDirectionIcon(src) {
        var icon = new EMS.HoverIcon(src, new OpenLayers.Size(20, 20), new OpenLayers.Pixel(-10, -10), null, 2);
        return icon;
    }
    
    function highlightMarker(marker, isHighlight) {
        if (isHighlight) {
            marker.icon.highlight();
        }
        else {
            marker.icon.inhighlight();
        }
    }
    
    function displayDraggleLayer(isShow) {
        map.draggableLayer.setVisibility(isShow);
    }
    
    function removeMapPopup(popup) {
        map.removePopup(popup);
        popup.destroy();
        popup = null;
    }
    
    function addMapPopup(content, options) {
        var lonlat = getMapLonLat(options.lon, options.lat);
        var mapPopup = new EMS.Popup(options.id, lonlat, new OpenLayers.Size(200, 50), content, null, false);
        
        map.addPopup(mapPopup, options.exclusive);
        
        return mapPopup;
    }
    
    function getMarkerLatlon(marker) {
        var lon = marker.lonlat.lon;
        var lat = marker.lonlat.lat;
                    
        lat = EMS.Util.sgp4ToLat(lat);
        
        return {
            lat: lat,
            lon: lon
        }
    }  
    
    function clearPolylineLayer() {
        map.vlayer.removeAllFeatures();
    }
    
    function clear() {
        map.markersLayer.clearMarkers();
        map.vlayer.removeAllFeatures();
        map.draggableLayer.clearMarkers();
        map.draggableLayer.setVisibility(true);
        map.zoomToMaxExtent();
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }

    return {
        mapType: 'EMS',
        getRoute: getRoute,
        setRouteService: setRouteService,
        addMarker: addMarker,
        addVisitMarker: addVisitMarker,
        addNormalVisitMarker: addNormalVisitMarker,
        zoomToBounds: zoomToBounds,
        centerMap: centerMap,
        map: map,
        drawPolyline: drawPolyline,
        displayPolyline: displayPolyline,
        getPolylineBounds: getPolylineBounds,
        getMapLonLat: getMapLonLat,
        displayMarker: displayMarker,
        removeMarker: removeMarker,
        getBoundsObject: getBoundsObject,
        extendToBounds: extendBounds,
        extendToPoint: extendToPoint,
        centerToPoint: centerToPoint,
        centerToBounds: centerToBounds,
        isContainsBounds: isContainsBounds,
        getCrossIcon: getCrossIcon,
        getDirectionIcon: getDirectionIcon,
        clear: clear,
        highlightMarker: highlightMarker,
        highlightPolyline: highlightPolyline,
        addPoint: addPoint,
        addDemandPoint: addDemandPoint,
        displayDraggleLayer: displayDraggleLayer,
        removeMapPopup: removeMapPopup,
        addMapPopup: addMapPopup,
        getMarkerLatlon: getMarkerLatlon,
        clearPolylineLayer: clearPolylineLayer,
        registerHandler: registerHandler
    }    
    
}

