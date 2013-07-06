/**
 * @requires ems/EMSPopup.js
 */

/**
 * Class: EMS.MultiPopup 
 *
 * The multipop allows you to create a popup that contains an embedded map
 * showing a list of markers.
 *
 * Inherits from:
 *  - <EMS.Popup>
 */
EMS.MultiPopup = OpenLayers.Class( EMS.Popup, {

    /**
     * APIProperty: events
     * {<OpenLayers.Events>}
     */
    events: null,

    /** APIProperty: EVENT_TYPES
     *
     * {Array} supported application event types
     *
     */
    EVENT_TYPES: ["markerclick", "hidden", "shown"],

    /**
     * Property: history
     *  
     * Contains the history of all markers displayed at each level.  As the
     * user drill down the markers are pushed to the array.
     */
    history: [],

    /**
     * Constructor: initialize
     *  
     * Creates markers!
     * 
     * id                - The id number for the popup
     * lonlat            - An <EMS.LonLat> object describing the position of the popup on the map.
     * size              - An <OpenLayers.Pixel> object specifying the size of the popup.
     * anchor            - An <OpenLayers.Marker> object this popup is anchored to
     * closeBox          - {Boolean} - whether to display the close button
     * locatables        - An array of objects that have a lonlat property.  These
     *                     are the markers that are displayed on the page.
     * locatableRenderer - {Function} A function taking a locatable as a parameter and returns HTML to be rendered into the list view.
     * options           - A hash representing optional parameters.  Supported parameters are:
     *                             ~ markerCreator : a function taking a list of locatables and returning a marker to represent them.
     *                             ~ markerReleaser : a function taking a marker that releases a marker when no longer required.
     */
    initialize:function(id, lonlat, size, anchor, closeBox, locatables, locatableRenderer, options) {
        this.mapId = OpenLayers.Util.createUniqueID(this.CLASS_NAME.replace(/\./g,"") + "_map");
        EMS.Popup.prototype.initialize.apply(this, [id, lonlat, size, "", anchor, closeBox]);

        this.locatables = locatables;
        this.locatableRenderer = locatableRenderer;

        OpenLayers.Util.extend(this, options || {});

        this.history = [];

        this.events = new OpenLayers.Events(this, null, this.EVENT_TYPES, true);
    },

    markerCreator: function(locatables) {
        var icon, lonlat;
        if (locatables.length == 1) {
            icon = EMS.Services.StandardIcons.greenPoi(this.map.tilePath, "");
            lonlat = locatables[0].lonlat.clone();
        } else {
            icon = EMS.Services.StandardIcons.greenMultipoi(this.map.tilePath, locatables.length);
            var bounds = new OpenLayers.Bounds(locatables[0].lonlat.lon, locatables[0].lonlat.lat, locatables[0].lonlat.lon, locatables[0].lonlat.lat);
            for (var i = 1; i < locatables.length; i++) {
                bounds.extend(locatables[i].lonlat);
            }
            lonlat = bounds.getCenterLonLat();
        }
        return new OpenLayers.Marker(lonlat, icon);
    },

    markerReleaser: function(marker) {
        marker.destroy();
    },

    draw: function(px) {
        var div = EMS.Popup.prototype.draw.apply(this, arguments);

        this.countDiv = OpenLayers.Util.createDiv(null);
        this.countDiv.className = "ems-multipoi-count";
        this.contentDiv.appendChild(this.countDiv);

        this.mapTab = this.createMapTab();
        this.listTab = this.createListTab();

        this.tabs = new EMS.MultiPopupTabs([this.mapTab, this.listTab]);
        
        if(this.showListFirst == true){
        	this.tabs.showTab(this.listTab);
        }else{
            this.tabs.showTab(this.mapTab);	
        }
        
        return div;
    },

    createMapTab: function() {
    	// Tab 1
        var tab1ContentsDiv = OpenLayers.Util.createDiv(null, new OpenLayers.Pixel(5, 32), new OpenLayers.Size(this.size.w - 15, this.size.h - 70), null, "absolute");
        this.tab1ContentsDiv = tab1ContentsDiv;
        tab1ContentsDiv.style.borderTop = "1px solid #58a2d1";
        var tab1On = this.createImageDiv("multi-tab.gif", 0, 0, 45, 32, 90, 96, 140, 1);
        var tab1Off = this.createImageDiv("multi-tab.gif", 0, 32, 45, 32, 90, 96, 140, 1);
        var tab1Hover = this.createImageDiv("multi-tab.gif", 0, 64, 45, 32, 90, 96, 140, 1);
        var mapTab = new EMS.MultiPopupTab(tab1On, tab1Off, tab1Hover, tab1ContentsDiv);
        this.contentDiv.appendChild(tab1ContentsDiv);
        this.contentDiv.appendChild(tab1On);
        this.contentDiv.appendChild(tab1Off);
        this.contentDiv.appendChild(tab1Hover);

        this.mapDiv = OpenLayers.Util.createDiv(this.mapId, null, null);
        this.mapDiv.style.width = (this.size.w - 15) + "px";
        this.mapDiv.style.height = (this.size.h - 70) + "px";
        this.tab1ContentsDiv.appendChild(this.mapDiv)

        var extent = this.getExtent(this.locatables, this.mapDiv);

        var resolutions = EMS.Util.defaultResolutions;
        var zoomCalc = new EMS.Util.ZoomCalculator(resolutions, this.mapDiv);
        var zoom = zoomCalc.getZoomForExtent(extent);

        this.multimap = new EMS.Services.Map(this.mapDiv,
            {
                onInit:  OpenLayers.Function.bind(this.mapInit, this),
                controls: [],
                layers: [],
                noping: true,
                zoom: zoom,
                center: extent.getCenterLonLat()
            });

        // for testing only
        //this.multimap.addControl(new EMS.Control.MouseDefaults());

        this.historyDiv = OpenLayers.Util.createDiv(null, new OpenLayers.Pixel(0, this.size.h - 30));
        this.historyDiv.className = "ems-history";
        var topAnchor = document.createElement("a");
        topAnchor.className = "ems-top-back";
        topAnchor.href = "#";
        this.historyDiv.appendChild(topAnchor);
        this.historyDiv.appendChild(document.createTextNode("  "));
        var backAnchor = document.createElement("a");
        backAnchor.href = "#";
        backAnchor.className = "ems-back";
        backAnchor.appendChild(document.createTextNode("Back"));
        this.historyDiv.appendChild(backAnchor);
        this.historyDiv.style.top = (this.size.h-65) + "px";
        this.tab1ContentsDiv.appendChild(this.historyDiv);

        OpenLayers.Event.observe(backAnchor, "click",  OpenLayers.Function.bind(this.backInHistory, this) );
        OpenLayers.Event.observe(topAnchor, "click", OpenLayers.Function.bind(this.backInHistoryToTop, this) );

        return mapTab;
    },

    createListTab: function() {
        var tab2ContentsDiv = OpenLayers.Util.createDiv(null, new OpenLayers.Pixel(5, 32), new OpenLayers.Size(this.size.w - 15, this.size.h - 47), null, "absolute");
        this.tab2ContentsDiv = tab2ContentsDiv;
        this.tab2ContentsDiv.style.overflow = "auto";
        tab2ContentsDiv.style.borderTop = "1px solid #58a2d1";
        var tab2On = this.createImageDiv("multi-tab.gif", 45, 0, 45, 32, 90, 96, 186, 1);
        var tab2Off = this.createImageDiv("multi-tab.gif", 45, 32, 45, 32, 90, 96, 186, 1);
        var tab2Hover = this.createImageDiv("multi-tab.gif", 45, 64, 45, 32, 90, 96, 186, 1);
        var listTab = new EMS.MultiPopupTab(tab2On, tab2Off, tab2Hover, tab2ContentsDiv);
        this.contentDiv.appendChild(tab2ContentsDiv);
        this.contentDiv.appendChild(tab2On);
        this.contentDiv.appendChild(tab2Off);
        this.contentDiv.appendChild(tab2Hover);
        return listTab;
    },

    createImageDiv: function(imageName, imageOffsetX, imageOffsetY, imageWidth, imageHeight, fullWidth, fullHeight, left, top) {

        var imageDiv = OpenLayers.Util.createDiv(null,
                new OpenLayers.Pixel(left, top),
                new OpenLayers.Size(imageWidth, imageHeight),
                null, 
                "absolute");
        imageDiv.style.overflow = "hidden";

        var image = OpenLayers.Util.createImage(null, new OpenLayers.Pixel(-imageOffsetX, -imageOffsetY), new OpenLayers.Size(fullWidth, fullHeight), EMS.Util.getImagesLocation() + imageName);
        imageDiv.appendChild(image);

        return imageDiv;
    },

    mapInit: function(map) {
    	this.map = map;

        var markersLayer = new OpenLayers.Layer.Markers( "Markers" );
        var whereis_street_wms = new EMS.IndexedLayer("Whereis Street",
                    this.map.tilePath + "/tile?", {layers: 'street', format: "image/gif", cache: "TRUE", version: '1.0.2'}, {displayOutsideMaxExtent: true, visible: true});
        map.markersLayer = markersLayer;
        map.whereis_street_wms = whereis_street_wms;
        map.addLayer(map.whereis_street_wms);
        map.addLayer(map.markersLayer);

        var combiner = new EMS.CombinerCalculator(map.getResolution(), this.locatables);
        this.history.push(this.locatables);
        this.updateHistoryLinks();
        var points = combiner.calculateCombined();
        
        var extent = this.getExtent(this.locatables, this.mapDiv);

        var resolutions = EMS.Util.defaultResolutions;
        var zoomCalc = new EMS.Util.ZoomCalculator(resolutions, this.mapDiv);
        var zoom = zoomCalc.getZoomForExtent(extent);
        map.setCenter(extent.getCenterLonLat(), zoom);

        var i;
        for (i = 0; i < points.length; i++) {
            var point = points[i];
            var marker = this.markerCreator(point.combined);
            marker.lonlat.lon = point.lonlat.lon;
            marker.lonlat.lat = point.lonlat.lat;

            map.markersLayer.addMarker(marker);

            if (point.combined.length > 1) {
                marker.events.register("click", this,  OpenLayers.Function.bind(this.zoomMarker, this, point.combined, map));
            } else {
                marker.events.register("click", this,  OpenLayers.Function.bind(this.zoomToMarker, this, point.combined));
            }
        }
        for (i = 0; i < this.locatables.length; i++) {
            this.tab2ContentsDiv.appendChild(this.locatableRenderer(this.locatables[i]));
        }
        var redIcon = EMS.Services.StandardIcons.redNumber(this.map.tilePath, this.locatables.length);
        this.countDiv.innerHTML = "<img src='" + redIcon.url + "'/><span style='display: block; margin-left: 2em; margin-top: -1.7em;'> place" + (this.locatables.length == 1 ? "" : "s") + "</span>";
    },

    /** Zoom in on a combined marker */
    zoomMarker: function(locatables, map) {

        var extent = this.getExtent(locatables, this.mapDiv);
        var zoom = map.getZoomForExtent(extent);
        
        var allSameLocation = true;
        for (var i = 0; i < locatables.length; i++) {
         	if(i == 0){
         		var baselatlon = locatables[0].lonlat;
         	}
         	else if(!baselatlon.equals(locatables[i].lonlat)){
         		allSameLocation = false;
         	}
         }
        
        if (map.getZoom() == zoom || allSameLocation) {
            this.tabs.showTab(this.listTab);
        }
        map.setCenter(extent.getCenterLonLat(), zoom);

        var numPreviousMarkers = this.history.length == 0 ? -1 : this.history[this.history.length - 1].length;
        if (map.getZoom() != zoom || numPreviousMarkers != locatables.length) {
            this.history.push(locatables);
            this.tab2ContentsDiv.innerHTML = "";

            var combiner = new EMS.CombinerCalculator(map.getResolution(), locatables);
            var points = combiner.calculateCombined();
            this.destroyMarkersOnMap(map);
            var i;
            for (i = 0; i < points.length; i++) {
                var marker = this.markerCreator(points[i].combined);
                marker.lonlat.lon = points[i].lonlat.lon;
                marker.lonlat.lat = points[i].lonlat.lat;
                map.markersLayer.addMarker(marker);

                if (points[i].combined.length > 1) {
                    marker.events.register("click", this,  OpenLayers.Function.bind(this.zoomMarker, this, points[i].combined, map) );
                } else {
                    marker.events.register("click", this,  OpenLayers.Function.bind(this.zoomToMarker, this, marker) );
                }

            }
            for (i = 0; i < locatables.length; i++) {
                this.tab2ContentsDiv.appendChild(this.locatableRenderer(locatables[i]));
            }
            this.updateHistoryLinks();
            var redIcon = EMS.Services.StandardIcons.redNumber(this.map.tilePath, locatables.length);
            this.countDiv.innerHTML = "<img src='" + redIcon.url + "'/><span style='display: block; margin-left: 2em; margin-top: -1.7em;'> place" + (locatables.length == 1 ? "" : "s") + "</span>";
        }
    },

    backInHistory: function() {
        var locatables = this.history.pop();
        locatables = this.history.pop();
        console.assert(locatables, "Locatables present");
        this.zoomMarker(locatables, this.multimap);
    },

    backInHistoryToTop: function() {
        var locatables = this.history[0];
        this.history = [];
        console.assert(locatables, "Locatables present");
        this.zoomMarker(locatables, this.multimap);
    },

    updateHistoryLinks: function() {
        this.historyDiv.style.display = this.history.length > 1 ? "block" : "none";
    },

    destroyMarkersOnMap: function(map) {
        var markers = map.markersLayer.markers;
        while (markers.length > 0) {
            var marker = markers[0];
            map.markersLayer.removeMarker(marker);
            this.markerReleaser(marker);
        }
    },

    /** Zoom to street level for a marker */
    zoomToMarker: function(marker) {
        console.assert(marker, "marker present");
        this.events.triggerEvent("markerclick", {marker: marker, popup: this});
    },

/*
    groups: function(markers) {
        var groups = [];
        for (var i = 0; i < markers.length; i++) {
            var originalGroup = markers[i].group;
            var group;
            var groupIdx = this._indexOfGroup(groups, originalGroup);
            if (groupIdx >= 0) {
                group = groups[groupIdx]
            } else {
                group = new EMS.MarkerGroup(originalGroup.name, originalGroup.iconFactory);
                groups.push(group);
            }
            group.addMarker(markers[i]);
        }
        return groups;
    },

    _indexOfGroup: function(groups, group) {
        for (var i = 0; i < groups.length; i++) {
            if (groups.name == group.name)
                return i;
        }
        return -1;
    },
*/

    /**
     * APIMethod: destroy
     * Constructs contents of the control.
     *
     * Returns:
     * A reference to a div that represents this control.
     */
    destroy: function() {
        this.destroyMarkersOnMap();
        this.events.destroy();
        if (this.multimap) {
            this.multimap.destroy();
            this.multimap = null;
        }
    },

    getExtent: function(locatables, mapDiv) {

        var resolutions = EMS.Util.defaultResolutions;
        var zoomCalc = new EMS.Util.ZoomCalculator(resolutions,
                mapDiv);

        var bounds;
        for (var i = 0; i < locatables.length; i++) {
            if (i == 0)
                bounds = new OpenLayers.Bounds(locatables[i].lonlat.lon,
                        locatables[i].lonlat.lat,
                        locatables[i].lonlat.lon,
                        locatables[i].lonlat.lat);
            else
                bounds.extend(new OpenLayers.LonLat(locatables[i].lonlat.lon,
                        locatables[i].lonlat.lat));
        }

        // extend bounds so we have space for the icons.
        var zoom = zoomCalc.getZoomForExtent(bounds);
        var resolution = resolutions[zoom];
        bounds.extend(new OpenLayers.LonLat(bounds.left, bounds.top + resolution * 66.0));
        bounds.extend(new OpenLayers.LonLat(bounds.left - resolution * 15.0, bounds.top));
        bounds.extend(new OpenLayers.LonLat(bounds.right + resolution * 15.0, bounds.top));

        return bounds;
    },

    /** @final @type String */
    CLASS_NAME: "EMS.MultiPopup"

});

EMS.MultiPopupTabs = OpenLayers.Class({
    initialize: function(tabs) {
        this.tabs = tabs;
        for (var i = 0; i < tabs.length; i++) {
            OpenLayers.Event.observe(tabs[i].tabOffDiv, "click",  OpenLayers.Function.bind(this.showTab, this, tabs[i]));
            OpenLayers.Event.observe(tabs[i].tabHoverDiv, "click",  OpenLayers.Function.bind(this.showTab, this, tabs[i]));
        }
    },
    
    addTab: function(tab){
    	this.tabs.push(tab);
    	OpenLayers.Event.observe(tab.tabOffDiv, "click",  OpenLayers.Function.bind(this.showTab, this, tab));
        OpenLayers.Event.observe(tab.tabHoverDiv, "click",  OpenLayers.Function.bind(this.showTab, this, tab));
    },

    showTab: function(tab) {
        if (this.activeTab) this.activeTab.hide();
        tab.show();
        this.activeTab = tab;
    }

});

EMS.MultiPopupTab = OpenLayers.Class({

    initialize: function(tabOnDiv, tabOffDiv, tabHoverDiv, contentDiv) {
        this.tabOnDiv = tabOnDiv;
        this.tabOffDiv = tabOffDiv;
        this.tabHoverDiv = tabHoverDiv;
        this.contentDiv = contentDiv;
        OpenLayers.Event.observe(this.tabOffDiv, "mouseover", function() {
            OpenLayers.Element.hide(tabOffDiv);
            OpenLayers.Element.show(tabHoverDiv);
        });
        OpenLayers.Event.observe(this.tabHoverDiv, "mouseout", function() {
            if (OpenLayers.Element.visible(tabOnDiv)) {
                OpenLayers.Element.hide(tabOffDiv);
            } else {
                OpenLayers.Element.show(tabOffDiv);
            }
            OpenLayers.Element.hide(tabHoverDiv);
        });
        this.hide();
    },

    show: function() {
        OpenLayers.Element.show(this.tabOnDiv);
        OpenLayers.Element.hide(this.tabOffDiv);
        OpenLayers.Element.hide(this.tabHoverDiv);
        OpenLayers.Element.show(this.contentDiv);
    },

    hide: function() {
        OpenLayers.Element.hide(this.tabOnDiv);
        OpenLayers.Element.show(this.tabOffDiv);
        OpenLayers.Element.hide(this.tabHoverDiv);
        OpenLayers.Element.hide(this.contentDiv);
    }

});

