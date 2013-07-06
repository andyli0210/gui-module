/*
 * @requires ems/EMSUtils.js
 * @requires ems/HoverIcon.js
 * @requires ems/IndexedLayer.js
 */

// review: this file is two big and should be split into different files.
//         ideally 1 class per file is an easier model to deal with.  Perhaps
//         we need a services directory with the split out services one per
//         file.

/**
 * Namespace: EMS.Services
 *
 * The EMS Services exposes the backend services such as geocoding, routing
 * etc to the client.
 */
if (typeof EMS.Services == "undefined")
    EMS.Services = new Object();

// change some defaults
OpenLayers.Map.TILE_WIDTH = 400;
OpenLayers.Map.TILE_HEIGHT = 400;

/**
 * APIProperty: EMS.Services.communicationMode
 * {String} Sets the default communication mode for Ajax requests.  Can be
 * one of XMLHttpRequest or CrossDomain.  XMLHttpRequest only allows requests
 * from the originating server.  This may mean you need to install a proxy to
 * allow communication back to the whereis servers.  The CrossDomain mechanism
 * will allow you to make calls back regardless of the originating domain
 * however XMLHttpRequest is preferred where supported.   
 */
EMS.Services.communicationMode = "XMLHttpRequest";   // One of XMLHttpRequest or CrossDomain

/**
 * APIMethod: EMS.Services._onException
 *
 * Override this function to provide your own global exception
 * handling/reporting.
 */
EMS.Services._onException = function(req, exception) {
    if (typeof OpenLayers.Console != "undefined" && OpenLayers.Console)
        OpenLayers.Console.debug(exception);
    if(exception.message)    
        alert("Problem: " + exception.message);
    else
        alert("Problem: " + exception);
};

/**
 * Class: EMS.Services.Map
 *
 * This defines the standard WhereIs map.
 * Instances of <EMS.Services.Map> are interactive maps embedded in a web page.
 * Create a new map with the <EMS.Services.Map> constructor.
 *
 * To create a basic map include the following in your document:
 *
 * (code)
 * <script type="text/javascript" src="<baseURL>/js/ol/OpenLayers.js"></script>
 * <script type="text/javascript" src="<baseURL>/js/ems/EMS.js?token=<token>"></script>
 * <link rel="stylesheet" href="<baseURL>/js/ol/theme/default/style.css" type="text/css" />
 * <link rel="stylesheet" href="<baseURL>/js/ems/theme/default/style.css" type="text/css" />
 * (end)
 *
 * then use the following command to create a map.
 *
 * > map = new EMS.Services.Map('map-div', options);
 *
 * 'map-div' is the id of the div you want to place the map inside of.
 *
 * By default Whereis maps will be initialized with the following controls:
 *
 * - <EMS.Control.ZoomBar> (referenced using map.zoombar)
 * - <EMS.Control.MouseDefaults> (referenced using map.mouseDefaults)
 * - <EMS.Control.PanButton> - north facing (referenced using map.panNorth)
 * - <EMS.Control.PanButton> - south facing (referenced using map.panSouth)
 * - <EMS.Control.PanButton> - east facing (referenced using map.panWest)
 * - <EMS.Control.PanButton> - west facing (referenced using map.panEast)
 * - <EMS.Control.NorthArrow> - (referenced using map.northArrow)
 * - <EMS.Control.Copyright> - (must always be included to be compliant with license, referenced using map.copyRight)
 * - <EMS.Control.Scale> - (referenced using map.scalebar)
 * - <EMS.Control.OverviewMap> - (referenced using map.overviewmap)
 *
 * The set of controls that is initialized can be controled using the controls option.  For example:
 *
 * > map = new EMS.Services.Map('map-div', {controls: []});
 *
 * would initialize the map with no default controls.
 *
 * By default three layers are created:
 *
 * - A street layer (referenced using map.whereis_street_wms)
 * - A photo layer (referenced using map.whereis_photo_wms)
 * - A hybrid layer (referenced using map.whereis_hybrid_wms)
 *
 * Much like with the controls the layers can be initialized manually.  It is
 * not recommended you do this however.  Simply pass a layers option during the
 * map creation.  eg:
 *
 * > map = new EMS.Services.Map('map-div', {layers: []});
 *
 * The following events are available.
 *
 * - "addlayer" : called when a layer is added to a map
 * - "removelayer" : called when a layer is removed from a map
 * - "changelayer" : called when a layer is changed.
 * - "zoomend" : called when the map has been zoomed
 * - "popupopen" : called when a popup is opened.
 * - "popupclose" : called when a popup is closed.
 * - "addmarker" : called when a marker is added to a map.
 * - "removemarker" : called when a marker is removed from a map.
 * - "clearmarkers" : called when all markers are cleared from a map.
 * - "mouseover" : called when the cursor is moused into the map.
 * - "mouseout" : called when the cursor is moved out of the map rea.
 * - "mousemove" : called when the cursor moved in the map area.
 * - "dragstart" : called when a drag operation is started.
 * - "dragend" : called when a drag operation is ended.
 * - "changebaselayer" : called when the base layer is changed.
 * - "inactiveclick" : called is the map is inactive and the user clicks on the map area.
 *
 *
 * Inherits from:
 *  - <OpenLayers.Map>
 */
EMS.Services.Map = OpenLayers.Class( OpenLayers.Map, {

    /**
     * APIProperty: buffer
     * {Number} The number of tiles to buffer ahead around the edges of the visible map area.
     */
    buffer: 0,

    /**
     * APIProperty: tilePath
     * {String} The url to the tile server.
     */
    tilePath: null,

    /**
     * APIProperty: pingPeriod
     * {Number} The number of milliseconds between pings back to the server.
     */
    pingPeriod: 1000 * 60 * 5,

    /**
     * APIProperty: EVENT_TYPES
     * {Array(String)}
     */
    EVENT_TYPES: [
    "addlayer", "removelayer", "changelayer", "movestart", "move",
    "moveend", "zoomend", "popupopen", "popupclose",
    "addmarker", "removemarker", "clearmarkers", "mouseover",
    "mouseout", "mousemove", "dragstart", "drag", "dragend",
    "changebaselayer", "inactiveclick"],


    /**
     * APIMethod: initialize
     *
     * Constructs a map.
     *
     * Parameters:
     *  div - {String or DOMElement} The div to place the map into.
     *  options - {Object} properties that can be used to override current map properties.
     *              Available parameters include:
     *                  onInit - indentifies a callback function to which the map object should be passed once initalised.
     *                  controls - specifies a list of controls that should be displayed.
     *                  zoom - {Number} specifies a zoom level 0-15.
     *                  center - {EMS.LatLon} specifies the maps center point
     *                  showMaxExtent - {Boolean} When set to true (default) and no center is provided the full map of Australia will display. If set to false no map will be displayed until a center point or bounds are set. If you find Australia flashing up before going to your loaction set this to false.
     *                  miniControls - {Boolean} specifies if the default map controls should be used or the mini map contols.
     *                  showMapPhotoButtons - {Boolean} if set to false the layer selection buttons in the top left hand corner will not be embedded in the map.      
     */
    initialize: function (div, options) {

        this.active = true;
        this.tilePath = EMS.tilePath;

        options = options ? options : {};

        options = OpenLayers.Util.extend(
        {
            maxExtent: new OpenLayers.Bounds(100, -50, 170, -3),
            maxResolution: 0.1,
            numZoomLevels: 17,
            miniControls: false,
            showMapPhotoButtons: true,
            showMaxExtent: true
        }, options);

        var addControlsAfterLayer = false;
        if (options.controls == null) {
            options.controls = [];
            addControlsAfterLayer = true;
        }

        OpenLayers.Map.prototype.initialize.apply(this, [div, options]);

        var tilePath;
        // tilePath can either be a single url or an array of urls
        if (EMS.tilePath instanceof Array) {
            tilePath = new Array(EMS.tilePath.length);
            for ( var i = 0; i < EMS.tilePath.length; i++) {
                tilePath[i] = EMS.tilePath[i] + "/tile?";
            }
        }
        else {
            tilePath = EMS.tilePath + "/tile?";
        }
        
        if (options.layers == null) {
            this.whereis_street_wms = new EMS.IndexedLayer("Whereis Street",
                tilePath, {
                    layers: 'street', 
                    format: "image/gif", 
                    CACHE: "TRUE", 
                    VERSION: EMS.tileVersion
                    }, {
                    displayOutsideMaxExtent: true, 
                    visible: true
                });
            this.whereis_street_wms.setVisibility(true);
            this.whereis_street_wms.transitionEffect = "resize";
            this.whereis_photo_wms = new EMS.IndexedLayer("Whereis Photo",
                tilePath, {
                    layers: 'photo', 
                    format: "image/jpg", 
                    CACHE: "TRUE", 
                    VERSION: EMS.tileVersion
                    }, {
                    displayOutsideMaxExtent: true, 
                    visible: false
                });
            this.whereis_photo_wms.setVisibility(false);
            this.whereis_photo_wms.transitionEffect = "resize";
            this.whereis_hybrid_wms = new EMS.IndexedLayer("Whereis Hybrid",
                tilePath, {
                    layers: 'hybrid', 
                    format: "image/gif", 
                    TRANSPARENT: true, 
                    CACHE: "TRUE", 
                    VERSION: EMS.tileVersion
                    }, {
                    displayOutsideMaxExtent: true, 
                    transparent: true
                });
            this.whereis_hybrid_wms.setVisibility(false);
            this.whereis_hybrid_wms.transitionEffect = "resize";
            if (OpenLayers.Renderer.SVG.prototype.supported() || OpenLayers.Renderer.VML.prototype.supported()) {
                this.vlayer = new EMS.Layer.Vector( "Route" );
            }
            this.markersLayer = new OpenLayers.Layer.Markers( "Markers" );

            if (OpenLayers.Renderer.SVG.prototype.supported() || OpenLayers.Renderer.VML.prototype.supported()) {
                this.addLayers([this.whereis_street_wms, this.whereis_photo_wms, this.whereis_hybrid_wms,
                    this.vlayer, this.markersLayer]);
            } else {
                this.addLayers([this.whereis_street_wms, this.whereis_photo_wms, this.whereis_hybrid_wms,
                    this.markersLayer]);
            }
        }

        if (addControlsAfterLayer) {
            this.addControl( this.zoombar = new EMS.Control.ZoomBar(
                this.whereis_street_wms,
                this.whereis_photo_wms,
                this.whereis_hybrid_wms, !options.miniControls, options.showMapPhotoButtons));
            this.addControl( this.mouseDefaults = new EMS.Control.MouseDefaults() );
            this.addControl( this.panNorth = new EMS.Control.PanButton('n') );
            this.addControl( this.panSouth = new EMS.Control.PanButton('s') );
            this.addControl( this.panEast = new EMS.Control.PanButton('e') );
            this.addControl( this.panWest = new EMS.Control.PanButton('w') );
            this.addControl( this.copyRight = new EMS.Control.Copyright({
                smallCopyright: options.miniControls
                }) );
            this.addControl( this.scalebar = new EMS.Control.Scale() );

            var ovLayer = new EMS.IndexedLayer("Street",
                tilePath, {
                    layers: 'street', 
                    format: "image/gif", 
                    cache: "TRUE", 
                    version: EMS.tileVersion
                    }, {
                    displayOutsideMaxExtent: true, 
                    visible: true
                });
            ovLayer.buffer = 0;
            this.addControl( this.overviewmap = new EMS.Control.OverviewMap( {
                layers: [ovLayer], 
                mapOptions: {
                    maxResolution: 1.6, 
                    numZoomLevels: 21, 
                    maxExtent: new OpenLayers.Bounds(100, -50, 170, -3)
                    }
                } ) );
    }
        
    if(this.center == undefined && options.showMaxExtent ){
        this.zoomToMaxExtent();
    }

    var callback = OpenLayers.Function.bind(function(results) {
        //debugger;
        if (results.authorized) {
            // ping every 5 minutes
            if (!options.noping)
                this.timeoutVar = setTimeout(OpenLayers.Function.bind(this.ping, this), this.pingPeriod);

            if (options.onInit) {
                options.onInit(this);
            }
        } else {
            EMS.token = null;
            this.destroy();
            alert("Authentication problem");
        }
    }, this);
    var domain = EMS.Util.getDomain();
    //debugger;
    EMS.Ajax.json("/json/auth/init", callback, {
        parameters:{
            token: EMS.token, 
            domain: 'localhost'
        }
    });
},

/**
     * APIMethod: ping
     *
     * Ping the backend server.  Called automatically.
     */
ping: function() {
    var empty = function() {};
    EMS.Services._json("/json/ping/ping", empty, {
        parameters:{}, 
        onException: empty
    });
    this.timeoutVar = setTimeout(OpenLayers.Function.bind(this.ping, this), this.pingPeriod);
},

/**
     * APIMethod: destroy
     *
     * Clear all resources used by the map.
     */
destroy: function() {
    OpenLayers.Map.prototype.destroy.apply(this);
    if (this.timeoutVar) {
        clearTimeout(this.timeoutVar);
    }
},

/**
     * APIMethod: deactivate
     * Make the map unresponsive to all mouse and keyboard input.
     *
     * Will still respond to the inactiveclick event however.
     */
deactivate: function() {
    if (!this.active) return;

    var glassPane = document.createElement("div");
    glassPane.style.left = "0px";
    glassPane.style.top = "0px";
    glassPane.style.width = "100%";
    glassPane.style.height = "100%";
    glassPane.id = this.div.id + "glassPane";
    glassPane.style.position = "relative";
    glassPane.style.backgroundImage = "url('+ " + EMS.Util.getImagesLocation() + "blank.gif')";
    glassPane.style.zIndex = "4000";

    var viewPortDiv = this.div.childNodes[0];

    var glassPaneEventHandler = function(e) {
        OpenLayers.Event.stop(e);
        this.events.triggerEvent("inactiveclick");
    }.bindAsEventListener(this);
    var nullHandler = function(e) {
        OpenLayers.Event.stop(e);
    }.bindAsEventListener(this);
    OpenLayers.Event.observe(glassPane, 'click', glassPaneEventHandler );
    OpenLayers.Event.observe(glassPane, 'mousedown', glassPaneEventHandler );
    OpenLayers.Event.observe(glassPane, 'mouseup', glassPaneEventHandler );
    OpenLayers.Event.observe(glassPane, 'dblclick', glassPaneEventHandler );
    OpenLayers.Event.observe(glassPane, 'mousemove', nullHandler );
    OpenLayers.Event.observe(glassPane, 'mouseover', nullHandler );
    OpenLayers.Event.observe(glassPane, 'mouseout', nullHandler );

    viewPortDiv.appendChild(glassPane);
    this.glassPane = glassPane;

    this.active = false;
},

/**
     * APIMethod: activate
     * Make the map respond to mouse and keyboard input again.
     *
     */
activate: function() {
    if (this.active) return;

    OpenLayers.Event.stopObservingElement(this.glassPane);

    var viewPortDiv = this.div.childNodes[0];
    viewPortDiv.removeChild(this.glassPane);



    this.active = true;
},

/**
     * APIMethod: print
     *
     * By default, the Whereis? API delivers an interactive map. In some instances
     * however, such as when printing or when you need to present some particular
     * location that your users must not navigate away from, you will prefer to
     * provide the map as a flat image.
     *
     * Use the EMS.Services.Map.print() method to return a flat representation
     * of the current map, in gif format, whether in map chart or photo view. 
     * This method will also print any custom drawn geometry on the vector layer.
     * 
     * The print2 method should be used for printing a basic EMS route.
     *
     * Parameters:
     *  callback - {Function} Function that is called when print map has been created.
     *             the function will have one parameter called result which has a property id that contains the print handle.
     *
     */
print: function(callback, options) {
    var request = {
        layers: OpenLayers.Function.bind(function() {
            var layers = [];
            if (this.whereis_street_wms.getVisibility()) layers.push("street");
            if (this.whereis_photo_wms.getVisibility()) layers.push("photo");
            if (this.whereis_hybrid_wms.getVisibility()) layers.push("hybrid");
            return layers;
        }, this)(),
        vector: this._externalizeVectorLayer(this.vlayer),
        markers: this._remoteMarkers(this.markersLayer),
        mapWidth: this.getSize().w,
        mapHeight: this.getSize().h,
        boundingBox: {
            left: this.getExtent().left,
            bottom: this.getExtent().bottom,
            right: this.getExtent().right,
            top: this.getExtent().top
        }
    };
    options = OpenLayers.Util.extend({
        parameters:{
            request: request
        }
    }, options);
EMS.Services._json("/json/print/custom", callback, options);
},

/**
     * APIMethod: print2
     *
     * By default, the Whereis? API delivers an interactive map. In some instances
     * however, such as when printing or when you need to present some particular
     * location that your users must not navigate away from, you will prefer to
     * provide the map as a flat image.
     *
     * Use the EMS.Services.Map.print() method to return a flat representation
     * of the current map, in gif format, whether in map chart or photo view.
     *
     * Parameters:
     *  rHandle - {String} Route handle if a route is currently being displayed.
     *  callback - {Function} Function that is called when print map has been created.
     *             the function will have one parameter called result which has a property id that contains the print handle.
     *
     */
print2: function(rHandle, callback, options) {
    var request = {
        layers: OpenLayers.Function.bind(function() {
            var layers = [];
            if (this.whereis_street_wms.getVisibility()) layers.push("street");
            if (this.whereis_photo_wms.getVisibility()) layers.push("photo");
            if (this.whereis_hybrid_wms.getVisibility()) layers.push("hybrid");
            return layers;
        }, this)(),
            
        routeHandle: rHandle,
        markers: this._remoteMarkers(this.markersLayer),
        mapWidth: options.width ? options.width : this.getSize().w,
        mapHeight: options.height ? options.height : this.getSize().h,
        boundingBox: {
            left: this.getExtent().left,
            bottom: this.getExtent().bottom,
            right: this.getExtent().right,
            top: this.getExtent().top
        }
    };

    options = OpenLayers.Util.extend({
        parameters:{
            request: request
        }
    }, options);
EMS.Services._json("/json/print/simple", callback, options);
},
_remoteGrid: function(layer) {
    if (layer.getVisibility()) {
        var serializedGrid = [];
        for (var x = 0; x < layer.grid.length; x++) {
            serializedGrid[x] = [];
            for (var y = 0; y < layer.grid[x].length; y++) {
                var tile = layer.grid[x][y];
                serializedGrid[x][y] = {
                    bounds: {
                        left: tile.bounds.left, 
                        right: tile.bounds.right, 
                        top: tile.bounds.top, 
                        bottom: tile.bounds.bottom
                        },
                    url: tile.url,
                    position: {
                        x: tile.position.x + this.layerContainerDiv.offsetLeft, 
                        y: tile.position.y + this.layerContainerDiv.offsetTop
                        }
                };
            }
        }
        return serializedGrid;
    } else {
        return null;
    }
},
_remoteMarkers: function(markersLayer) {
    var remoteMarkers = [];
    for (var i = 0; i < markersLayer.markers.length; i++) {
        var m = markersLayer.markers[i];
        if((m.visible == undefined) || m.visible ){
            remoteMarkers.push({
                lonlat: {
                    lat: m.lonlat.lat, 
                    lon: m.lonlat.lon
                    },
                icon: {
                    px: {
                        x: m.icon.px.x, 
                        y: m.icon.px.y
                        },
                    sz: {
                        w: m.icon.size.w, 
                        h: m.icon.size.h
                        },
                    url: EMS.Util.toAbsoluteUrl(m.icon.url),
                    offset: {
                        x: m.icon.offset.x, 
                        y: m.icon.offset.y
                        }
                }
            });
        }
    }
    return remoteMarkers;
},
_remoteFeatures: function(featuresLayer) {
    var lineArray = new Array();        
    for (var featuresIdx = 0; featuresIdx < featuresLayer.features.length; featuresIdx++) {
        var feature = featuresLayer.features[featuresIdx];
        for (var lineIdx = 0; lineIdx < feature.geometry.components.length; lineIdx++) {
            var line = feature.geometry.components[lineIdx];
            lineArray.push(line.toString());
        }
    }
    return lineArray;
},
    
_externalizeVectorLayer: function(featuresLayer){
    var filter = new EMS.Geometry.PolylineBoundsFilter(this.getExtent());
    var lineReducer = new EMS.Geometry.SimpleLineReducer(this.getResolution());
    return featuresLayer.externalize(new EMS.Geometry.JsonFormatter(filter,lineReducer));
}
});

/**
 * Class: EMS.Services.Geocoder
 *
 * This class is used to make geocode requests back to the Whereis servers.
 *
 */
EMS.Services.Geocoder = OpenLayers.Class({

    /**
     * Constructor: initialize
     *
     * Creates a new instance of the geocoder class.
     *
     */
    initialize: function() { },

    /**
     * APIMethod: findAddress
     * Given a street, suburb and state will attempt to find matching locations.
     *
     * The result passed to the callback is an array of address objects.
     *
     * (code)
     * {"results":
     *   [
     *     {
     *       "accuracy":100.0,
     *       "address":
     *         {
     *           "coordinates": {"latitude":-37.81113,"longitude":144.9652},
     *           "postcode":"",
     *           "state":"VIC",
     *           "street":
     *             {
     *               "directionalPrefix":"",
     *               "directionalSuffix":"",
     *               "fullName":"LONSDALE ST",
     *               "name":"LONSDALE",
     *               "type":"ST"
     *             },
     *           "streetNumber": "222-226",
     *           "suburb":"MELBOURNE"
     *         }
     *     }
     *   ]
     * }
     * (end)
     *
     * Parameters:
     *   street - {String}
     *            Name of the street to match.  Empty string is acceptable.
     *   suburb - {String}
     *            Name of the suburb to match.
     *   state - {String}
     *           Name of the state to match.
     *   callback - {Function}
     *              The function to call when a list of addresses have been
     *              calculated.
     *   options - {Object} Optional parameters.  Can pass onException to
     *             set an event handler if an exception occurs.
     *
     */
    findAddress: function(street, suburb, state, callback, options) {
        var address = {};
        address.street = street;
        address.suburb = suburb;
        address.state = state;
        
        var parameters = {
            address: address
        };
        if(options && options.feature){
            parameters = OpenLayers.Util.extend(
            {
                feature: options.feature
                },
            parameters);
        }
        
        options = OpenLayers.Util.extend(
        {
            parameters: parameters
        },
        options);
        
        this._json("/json/fastGeocode/simple", callback, options);
    },
    
    /**
     * APIMethod: findGeocodedAddress
     * Given a query object containing an address attempt to find matching locations.
     *
     * The result passed to the callback is an array of address objects.
     *
     * (code)
     * {"results":
     *   [
     *     {
     *       "accuracy":100.0,
     *       "address":
     *         {
     *           "coordinates": {"latitude":-37.81113,"longitude":144.9652},
     *           "postcode":"",
     *           "state":"VIC",
     *           "street":
     *             {
     *               "directionalPrefix":"",
     *               "directionalSuffix":"",
     *               "fullName":"LONSDALE ST",
     *               "name":"LONSDALE",
     *               "type":"ST"
     *             },
     *           "streetNumber": "222-226",
     *           "suburb":"MELBOURNE"
     *         }
     *     }
     *   ]
     * }
     * (end)
     *
     * Parameters:
     *   query - An object that must contain an address object.
     *            Name of the street to match.  Empty string is acceptable.
     *   callback - {Function}
     *              The function to call when a list of addresses have been
     *              calculated.
     *   options - {Object} Optional parameters.  Can pass onException to
     *             set an event handler if an exception occurs.
     *
     */
    findGeocodedAddress: function(query, callback, options) {
        var address = query.address;     
        var parameters = {
            address: address
        };
        if(options && options.feature){
            parameters = OpenLayers.Util.extend(
            {
                feature: options.feature
                },
            parameters);
        }
        
        options = OpenLayers.Util.extend(
        {
            parameters: parameters
        },
        options);
        
        this._json("/json/fastGeocode/findGeocodedAddress", callback, options);
    },

    /**
     * APIMethod: reverseGeocode
     * Given a longitude and latitude this method will try and match the closest
     * street. The data passed to the callback will have the following structure:
     *
     * (code)
     * {"results":
     *   [
     *     {
     *       "coordinates": {"latitude":-37.81081,"longitude":144.96051},
     *       "postcode":"",
     *       "state":"VIC",
     *       "street":
     *         {
     *           "directionalPrefix":"",
     *           "directionalSuffix":"",
     *           "fullName":"LA TROBE ST",
     *           "name":"LA TROBE",
     *           "type":"ST"
     *         },
     *       "streetNumber":"293",
     *       "suburb":"MELBOURNE"
     *     }
     *   ]
     * }
     * (end)
     *
     * Parameters:
     *  lon - {Number} The longitude to match.
     *  lat - {Number} The lattitude to match.  As retrieved from EMS.LonLat.lat *not* EMS.LonLat.asWGS84().lat
     *  callback - {Function}
     *              The function to call when a list of addresses have been
     *              calculated.
     *   options - {Object} Optional parameters.  Can pass onException to
     *             set an event handler if an exception occurs.
     *
     */
    reverseGeocode: function(lon, lat, callback, options) {     
        var params =  {
            longitude: lon, 
            latitude: lat
        };
        if(options && options.feature){
            params = OpenLayers.Util.extend(
            {
                feature: options.feature
                },
            params);
        }
        options = OpenLayers.Util.extend(
        {
            parameters: params
        }, options);
        this._json("/json/fastGeocode/reverseGeocode", callback, options);
    },

    /**
     * APIMethod: reverseGeocodePoi
     * Find the closest poi to a given point.
     *
     *
     * Parameters:
         *  query - {Object} That must contain the following three properties
         *              lon - {Number} The longitude to match.
     *          lat - {Number} The latitude to match.  As retrieved from EMS.LonLat.lat *not* EMS.LonLat.asWGS84().lat
     *          keyword - {String} The search term.
     *
     *  callback - {Function} The function to call when a list of addresses have been
     *              calculated.
     *
     *  options - {Object} Optional parameters.  Can pass onException to
     *             set an event handler if an exception occurs.
     *
     */
    reverseGeocodePoi: function(query, callback, options) {
        var lon = query.lon;
        var lat = query.lat;
        var keyword = query.keyword;
        var source = query.source;

        options = OpenLayers.Util.extend(
        {
            parameters: {
                longitude: lon, 
                latitude: lat, 
                keyword: keyword, 
                source: source
            }
        }, options);
    this._json("/json/fastGeocode/reverseGeocodePoi", callback, options);
},

//  Do not display in API 
//     /**
//     * APIMethod: findLocalityByPrefix
//     * Returns all localities that start with the given prefix. Will not find
//         * regions.
//         *
//         * (code)
//         * var address = {};
//         *      address.street = "222 Lonsdale";
//         *      address.suburb = "Melbourne";
//         *      address.state = "Vic";
//     *
//     *  var query = {};
//     *  query.address = address;
//     * (end)
//         *
//     * Parameters:
//         *  query - {Object} That must contain the following property
//         *              address - {Object}
//     *
//     *  callback - {Function} The function to call when a list of addresses have been
//     *              calculated.
//     *
//     *  options - {Object} Optional parameters.  Can pass onException to
//     *             set an event handler if an exception occurs.
//     *
//     */
findLocalityByPrefix: function(query, callback, options) {
    var address = query.address;
    var id = query.id;

    options = OpenLayers.Util.extend(
    {
        parameters: {
            address: address, 
            id: id
        }
    }, options);
this._json("/json/fastGeocode/findLocalityByPrefix", callback, options);
    },

    //    Do not display in API
    //     /**
    //     * APIMethod: findStreetByPrefix
    //     * Returns all street addresses that start with the given prefix.
    //         *
    //         *
    //     * Parameters:
    //         *  street - {String} The street name.
    //         *      callback - {Function} The function to call when a list of addresses have been
    //     *              calculated.
    //     *
    //     *  options - {Object} Optional parameters.  Can pass onException to
    //     *             set an event handler if an exception occurs.
    //     *
    //     */
    findStreetByPrefix: function(street, callback, options) {
        options = OpenLayers.Util.extend(
        {
            parameters: {
                street: street
            }
        }, options);
    this._json("/json/fastGeocode/findStreetByPrefix", callback, options);
},

/**
     * APIMethod: poiSearch
     *  Get all points of interest within an area.
         *
         *  (code)
         *      var bounds = {};
     *  bounds.left = Number($('tllongitude').value);
     *  bounds.top = Number($('tllatitude').value);
     *  bounds.right = Number($('brlongitude').value);
     *  bounds.bottom = Number($('brlatitude').value);
     *
     *  var query = {};
     *  query.id = "9999";
     *  query.bounds = bounds;
     *  query.keyword = $('category').value;
     *  query.offset = 0;
     *  query.size = 10;
     *  geocoder.poiSearch(query, updateAddress);
     *  (end)
     *
     * Parameters:
         *  query - {Object} The query object can contain the following properties.
         *              address - {Object}
         *              bounds  - {Object} Bounding box of the area to be searched.
         *              keyword - {String} The search term.
     *      offset      - {Number} Paging offset.
     *          size    - {Number} Number of results to return.
     *          id              - {Number} Random number used to cache the query.
     *                                  Use this when paging thru results using offset.
     *  keyword and either an address or a bounds MUST be provided.
         *
         *      callback - {Function} The function to call when a list of addresses have been
     *              calculated.
     *  options - {Object} Optional parameters.  Can pass onException to
     *             set an event handler if an exception occurs.
     *
     */
poiSearch: function(query, callback, options) {
    var address = query.address;
    var bounds = query.bounds;
    var keyword = query.keyword;
    var offset = query.offset;
    var size = query.size;
    var source = query.source;
    var id = query.id;
    var poiId = query.poiId;
                
    options = OpenLayers.Util.extend(
    {
        parameters: {
            address: address, 
            bounds: bounds, 
            keyword: keyword,
            offset: offset, 
            size: size, 
            source: source, 
            id: id, 
            poiId: poiId
        }
    }, options);
this._json("/json/fastGeocode/poiSearch", callback, options);
},

/*
     * Doco not exposed. Whereis method only.
     */
combinedSearch: function(query, callback, options) {
    var address = query.address;
    var keyword = query.keyword;
    var offset = query.offset;
    var size = query.size;
    var source = query.source;
    var id = query.id;
    var bounds = query.bounds;
    var poiId = query.poiId;


    options = OpenLayers.Util.extend(
    {
        parameters: {
            address: address, 
            keyword: keyword, 
            bounds: bounds,
            offset: offset, 
            size: size, 
            source: source, 
            id: id, 
            poiId: poiId
        }
    }, options);
this._json("/json/fastGeocode/combinedSearch", callback, options);
},
    
locationPoiSearch: function(query, callback, options) {
    var address = query.address;
    var keyword = query.keyword;
    var offset = query.offset;
    var size = query.size;
    var source = query.source;
    var id = query.id;
    var xy = query.xy;
    var poiId = query.poiId;
    var bounds = query.bounds;
    var feature = query.feature;


    options = OpenLayers.Util.extend(
    {
        parameters: {
            address: address, 
            bounds: bounds, 
            keyword: keyword, 
            xy: xy,
            offset: offset, 
            size: size, 
            source: source, 
            id: id, 
            poiId: poiId, 
            feature: feature
        }
    }, options);
this._json("/json/fastGeocode/locationPoiSearch", callback, options);
},


/**
     * APIMethod: geocodeIntersection
     * Given two streets, returns a candidate list of results for matching
     * intersections.
         *
     * Parameters:
         *  query - {Object} The query must contain the following properties.
         *              primaryStreet - {String} The primary street.
         *              intersectingStreet  - {String} The intersecting street.
         *              suburb - {String} A suburb.
     *      state       - {String} A state.
     *
         *      callback - {Function} The function to call when a list of addresses have been
     *              calculated.
     *
     *  options - {Object} Optional parameters.  Can pass onException to
     *             set an event handler if an exception occurs.
     *
     */
geocodeIntersection: function(query, callback, options) {
    var primaryStreet = query.primaryStreet;
    var intersectingStreet = query.intersectingStreet;
    var suburb = query.suburb;
    var state = query.state;
        
    options = OpenLayers.Util.extend(
    {
        parameters: {
            primaryStreet: primaryStreet, 
            intersectingStreet: intersectingStreet, 
            suburb: suburb, 
            state: state
        }
    }, options);
this._json("/json/geocode/geocodeIntersection", callback, options);
},

/**
     * APIMethod: reverseGeocodeIntersection
     * Takes a lat/lon and convert it to one or more intersections (usually
     * just one address is returned).
         *
     * Parameters:
         *      lon - {Number} The longitude to match.
     *  lat - {Number} The latitude to match.  As retrieved from EMS.LonLat.lat *not* EMS.LonLat.asWGS84().lat
         *      callback - {Function} The function to call when a list of addresses have been
     *              calculated.
     *
     *  options - {Object} Optional parameters.  Can pass onException to
     *             set an event handler if an exception occurs.
     *
     */
reverseGeocodeIntersection: function(lon, lat, callback, options) {
    options = OpenLayers.Util.extend(
    {
        parameters: {
            longitude: lon, 
            latitude: lat
        }
    }, options);

this._json("/json/geocode/reverseGeocodeIntersection", callback, options);
},

_json: EMS.Services._json,
_onException: EMS.Services._onException,

CLASS_NAME: "EMS.Services.Geocoder"
});

/**
 * Class: EMS.Services.Itin
 *
 * The Itin class exposes itinerary services such as routing.
 *
 */
EMS.Services.Itin = OpenLayers.Class({

    /**
     * Constructor: initialize
     * Creates a new instance of the EMS.Services.Itin class.
     *
     */
    initialize: function() { },


    // deprecated
    //route: function(waypoints, fastest, tolls, transportType, handleOnly, callback, options) {
    //    options = OpenLayers.Util.extend(
    //        { parameters: this._getRouteParams(waypoints, fastest, tolls, transportType, handleOnly) },
    //        options);
    //    this._json("/json/itin/route", callback, options);
    //},

    // deprecated
    splitRoute: function(waypoints, fastest, tolls, transportType, handleOnly, callback, options) {
        options = OpenLayers.Util.extend({
            parameters: this._getRouteParams(waypoints, fastest, tolls, transportType, handleOnly)
        }, options);
        this._json("/json/itin/splitRoute", callback, options);
    },

    /**
     * APIMethod: combinedRoute
     * Calculates a route between points.
     *
     * The waypoints take addresses which have the following structure:
     * (code)
     * {
     *    "coordinates": {"latitude":-37.81081,"longitude":144.96051},
     *    "postcode":"",
     *    "state":"VIC",
     *    "street":
     *      {
     *        "directionalPrefix":"",
     *        "directionalSuffix":"",
     *        "fullName":"LA TROBE ST",
     *        "name":"LA TROBE",
     *        "type":"ST"
     *      },
     *    "streetNumber":"293",
     *    "suburb":"MELBOURNE"
     * }
     * (end)
     *
     * The callback function is called with a result that looks something like
     * this:
     *
     * (code)
     * {"boundingBox":
     *   {"bottom":-37.84569,
     *   "center":{"x":145.01115,"y":-37.827434999999994},
     *   "left":144.96526,
     *   "right":145.05704,
     *   "top":-37.80918,
     *   },
     *   "distanceMetres":12760,
     *   "routeDuration":815,
     *   "routeHandle":"5674286127015831924",
     *   "routes":[
     *     {"distanceMetres":12760.0,
     *     "overallMap":null,
     *     "routeDuration":815,
     *     "routeGeometry":[],
     *     "routeHandle":"api1-ZLY09B-1196832300142",
     *     "routeSegments":
     *     [
     *       {"centre":{"latitude":-37.81136,"longitude":144.96526},
     *       "metres":713.0,
     *       "routeDirection":"Straight",
     *       "segmentId":0,
     *       "segmentMap":null,
     *       "textualInstruction":"Start at _Lonsdale St, East Melbourne_ - head towards _Waratah Pl_",
     *       "travelTime":65
     *       },
     *       {"centre":{"latitude":-37.80918,"longitude":144.97289},
     *       "metres":17.0,
     *       "routeDirection":"Straight",
     *       "segmentId":1,
     *       "segmentMap":null,
     *       "textualInstruction":"Continue along _Albert St, East Melbourne_","travelTime":1
     *       },
     *       ...
     *     ]
     *   ]
     * }
     * (end)
     *
     * Note in this example handleOnly is set to true so we get the routeHandle
     * property instead of a complete route.
     *
     * Parameters:
     *  waypoints - {Array(Object)} An array of address objects.
     *  fastest - {Boolean} True to use the fastest route or false for the
     *            shortest route.
     *  tolls - {Boolean} True to use roadways with tolls, false otherwise.
     *  transportType - {String} One of the options "ALL_VEHICLES",
     *                  or "PEDESTRIAN"
     *  handleOnly - {Boolean} Don't retrieve the complete route data just
     *               return back a handle to the route.
     *  callback - {Function} The function to callback once the route has been
     *             calculated.
     *  options - {Object} Optional parameters.  Can pass onException to
     *            set an event handler if an exception occurs.
     *
     */
    combinedRoute: function(waypoints, fastest, tolls, transportType, handleOnly, callback, options) {
        options = OpenLayers.Util.extend({
            parameters: this._getRouteParams(waypoints, fastest, tolls, transportType, handleOnly, options.landmarks)
        }, options);
        this._json("/json/itin/combinedRoute", callback, options);
    },

    _getRouteParams: function(waypoints, fastest, tolls, transportType, handleOnly, landmarks) {
        var params = {};
        if (waypoints[0].street) {
            params.wpAddresses = waypoints;
        } else {
            for (var i = 0; i < waypoints.length; i++) {
                params["wp" + (i+1)] = waypoints[i];
            }
        }
        params.fastest = fastest;
        params.tolls = tolls;
        params.tt = transportType;
        params.handleOnly = handleOnly;
        params.landmarks = landmarks;
        return params;
    },

    /**
     * APIMethod: getRoutePart
     * Gets the part of a route in a particular bounding box.
     *
     * The paremeter passed to the callback looks somewhat similar to the
     * following:
     *
     * (code)
     * {
     *   "boundingBox":
     *     {"bottom":-37.84569,
     *     "center":{"x":145.01115,"y":-37.827434999999994},
     *     "left":144.96526,
     *     "right":145.05704,
     *     "top":-37.80918,
     *     },
     *   "distanceMetres":12760,
     *   "routeDuration":815,
     *   "routeHandle":"5674286127015831924",
     *   "routes":
     *   [
     *     {"distanceMetres":12760.0,
     *     "overallMap":null,
     *     "routeDuration":815,
     *     "routeGeometry":[
     *       [[144.99945,-37.8333],[145.00061,-37.83288],...],
     *       [[144.42345,-37.2333],[145.01231,-37.87321],...]
     *     ],
     *     "routeHandle":"api1-ZLY09B-1196832300142"
     *   ]
     * }
     * (end)
     *
     * The key part of this is the routeGeometry which contains the points
     * making up the route line(s).
     *
     * Parameters:
     *  handle - {String} The route handle as retrieved from the route request.
     *  resolution - {Number} The current map resolution.
     *  extent - {<EMS.Bounds>} The bounds to retrieve the route line for.
     *  callback - {Function} The function to call back when the results are
     *             available.
     *
     */
    getRoutePart: function(handle, resolution, extent, callback, options) {
        var params = {
            handle: handle, 
            resolution: resolution,
            left: extent.left, 
            top: extent.top, 
            right: extent.right, 
            bottom: extent.bottom
        };
        options = OpenLayers.Util.extend({
            parameters: params
        }, options);
        this._json("/json/itin/getRoutePart", callback, options);
    },

    /**
     * APIMethod: rankPoints
     * Ranks a list of points according to their travel time from the
     * origin. The travel time is calculated using the selected TransportMode.
     * The calculation is further modified by choosing to use toll roads or not.
     *
     * (code)
     *       var pos=OpenLayers.Util.pagePosition($("map"));
     *              var x=EMS.Event.pointerX(e)-pos[0];
     *              var y=EMS.Event.pointerY(e)-pos[1];
     *              var mousePos = map.getLonLatFromViewPortPx(new OpenLayers.Pixel(x,y));
     *
     *              itin.rankPoints(mousePos.asWGS84(),
     *                      {list:[ {lon: 130.840899, lat: -12.459971}, //Darwin
     *                              {lon: 138.60283, lat: -34.928545},  //Adelaide
     *                              {lon: 115.86164, lat: -31.948915}, //Perth
     *                              {lon: 153.02343, lat:-27.46802} ]},  //Brisbane
     *                       true, 6, processList);
     * (end)
     *
     * Parameters:
     *  centerPoint - {EMS.LonLat} Point to rank against.
     *  points - {Array} List of points to be ranked.
     *  tolls - {Boolean} Indicates whether or not to include toll roads in calculations.
     *  mode  - {Number} A method of ranking. Valid methods 1-6. See dev guide for explanation of each.
     *
     *  callback - {Function} The function to call back when the results are
     *             available.
     *  options - {Object} Optional parameters.  Can pass onException to
     *            set an event handler if an exception occurs.
     */
    rankPoints: function(centerPoint, points, tolls, mode, callback, options) {
        var params = {
            lon: centerPoint.lon,
            lat: centerPoint.lat,
            tolls: tolls,
            mode: mode,
            points: points
        };
        options = OpenLayers.Util.extend({
            parameters: params
        }, options);
        this._json("/json/itin/rankPoints", callback, options);
    },

    /**
     * APIMethod: releaseRouteHandle
     * When a route is calculated some server state is stored on the server.
     * Call this function when a route is no longer required.
     *
     * Parameters:
     *  handle - {String} The route handle to release.
     *  options - {Object} Optional parameters.  Can pass onException to
     *            set an event handler if an exception occurs.
     *
     */
    releaseRouteHandle: function(handle, options) {
        options = OpenLayers.Util.extend({
            parameters: {
                handle: handle
            }
        }, options);
    this._json("/json/itin/releaseRouteHandle", function() {}, options);
},

_json: EMS.Services._json,
_onException: EMS.Services._onException,

CLASS_NAME: "EMS.Services.Itin"
});

/**
 * Class: EMS.Services.Itin2
 *
 * The Itin2 class exposes itinerary services such as routing.  It should be
 * used in favour of the old deprecated EMS.Services.Itin
 */
EMS.Services.Itin2 = OpenLayers.Class(EMS.Services.Itin, {

    /**
     * APIMethod: combinedRoute
     *
     * Generates a route between two points
     *
     * Parameters:
     *  routeRequest - An object with the following structure:
     *  (code)
     *      {
     *          "wayPoints": [[longitude, latitude], ...]
     *          "mode": One of FOOT BICYCLE CAR TRAIN TRAM BUS FERRY PUBLIC_TRANSPORT
     *          "instructionType": One of INTERSECTIONS LANDMARKS
     *          "startTime": DateTime or
     *          "stopTime": DateTime
     *          "preferences": [Array of preference strings: TOLLS_OK, SHORTEST, ROUTE_HANDLE_ONLY]
     *      }
     *  (end)
     *  callback - {Function} The function to callback once the route has been
     *             calculated.
     *  options - {Object} Optional parameters.  Can pass onException to
     *            set an event handler if an exception occurs.
     *
     */
    combinedRoute: function(routeRequest, callback, options) {
        options = OpenLayers.Util.extend({
            parameters: {
                json: routeRequest
            }
        }, options);
    this._json("/json/route/route", callback, options);
},


/**
     * APIMethod: getRoutePart
     * Gets the part of a route in a particular bounding box.
     *
     * The paremeter passed to the callback looks somewhat similar to the
     * following:
     *
     * (code)
     * [
     *       [[144.99945,-37.8333],[145.00061,-37.83288],...],
     *       [[144.42345,-37.2333],[145.01231,-37.87321],...]
     * ],
     * (end)
     *
     * These arrays are the polylines which make up the route..
     *
     * Parameters:
     *  handle - {String} The route handle as retrieved from the route request.
     *  resolution - {Number} The current map resolution.
     *  extent - {<EMS.Bounds>} The bounds to retrieve the route line for.
     *  callback - {Function} The function to call back when the results are
     *             available.
     *
     */
getRoutePart: function(handle, resolution, extent, callback, options) {
    var params = {
        handle: handle, 
        resolution: resolution,
        left: extent.left, 
        top: extent.top, 
        right: extent.right, 
        bottom: extent.bottom
    };
    options = OpenLayers.Util.extend({
        parameters: params
    }, options);
    this._json("/json/route/getRoutePart", callback, options);
}


});

// Add extra helper function to map object
OpenLayers.Map.prototype.getLayerByName = function(layerName) {
    for (var i = 0; i < this.layers.length; i++) {
        if (this.layers[i].name == layerName)
            return this.layers[i];
    }
};


EMS.Services.StandardIconGeometry = {
    colours: {
        purple: {
            start: "4D1448", 
            end: "AB489B"
        },
        green: {
            start: "1D4242", 
            end: "71C9C1"
        },
        brown: {
            start: "522C10", 
            end: "AD8852"
        }
    },

    poi: {
        size: new OpenLayers.Size(27,32),
        offset: new OpenLayers.Pixel(-14,-32),
        url: function(colour1, colour2, text, textColour, hoverColour1, hoverColour2) {
            var poiQuery = "/marker?type=poi&width=27&height=96&colour1=" + encodeURIComponent(colour1) + "&colour2=" + encodeURIComponent(colour2) + "&text1=" + encodeURIComponent(text);
            // add optional marker parameters if set
            if (textColour != null) {
                poiQuery += "&textColour=" + encodeURIComponent(textColour);
            }
            if (hoverColour1 != null) {
                poiQuery += "&hoverColour1=" + encodeURIComponent(hoverColour1);
            }
            if (hoverColour2 != null) {
                poiQuery += "&hoverColour2=" + encodeURIComponent(hoverColour2);
            }
            return poiQuery;
        }
    },

    multipoi: {
        size: new OpenLayers.Size(36,43),
        offset: new OpenLayers.Pixel(-14,-43),
        url: function(colour1, colour2, text, textColour, hoverColour1, hoverColour2) {
            var query = "/marker?type=multipoi&width=36&height=129&colour1=" + encodeURIComponent(colour1) + "&colour2=" + encodeURIComponent(colour2) + "&text2=&text1=" + encodeURIComponent(text);
            // add optional marker parameters if set
            if (textColour != null) {
                query += "&textColour=" + encodeURIComponent(textColour);
            }
            if (hoverColour1 != null) {
                query += "&hoverColour1=" + encodeURIComponent(hoverColour1);
            }
            if (hoverColour2 != null) {
                query += "&hoverColour2=" + encodeURIComponent(hoverColour2);
            }
            return query;
        }
    },

    babushka: {
        size: new OpenLayers.Size(36,43),
        offset: new OpenLayers.Pixel(-14,-43),
        url: function(text, colour1, colour2, textColour, hoverColour1, hoverColour2) {
            var query = "/marker?type=babushka&width=36&height=129&text1=" + encodeURIComponent(text);
            // add optional marker parameters if set
            if (colour1 != null) {
                query += "&colour1=" + encodeURIComponent(colour1);
            } else {
                query += "&colour1=213367";
            }
            if (colour1 != null) {
                query += "&colour2=" + encodeURIComponent(colour2);
            } else {
                query += "&colour2=2B89C9";
            }
            if (textColour != null) {
                query += "&textColour=" + encodeURIComponent(textColour);
            }
            if (hoverColour1 != null) {
                query += "&hoverColour1=" + encodeURIComponent(hoverColour1);
            }
            if (hoverColour2 != null) {
                query += "&hoverColour2=" + encodeURIComponent(hoverColour2);
            }
            return query;
        }
    }

};

/**
 * Class: EMS.Services.StandardIcons
 *
 * Static class that contains various functions for generating set icons.
 *
 */
EMS.Services.StandardIcons = {
    /**
     * APIMethod: crossHair
     * Generates a cross air icon.
     */
    crossHair: function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "cross_hair.png",
            new OpenLayers.Size(28,30),
            new OpenLayers.Pixel(-14, -15) )
        },
    /**
     * APIMethod: crossHairAGD
     * Alternative cross hair icon.
     */
    crossHairAGD: function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "cross_hair3.png",
            new OpenLayers.Size(28,30),
            new OpenLayers.Pixel(-14, -15) )
    },
    /**
     * APIMethod: crossHairGDA
     * Alternative cross hair icon.
     */
    crossHairGDA: function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "cross_hair2.png",
            new OpenLayers.Size(28,30),
            new OpenLayers.Pixel(-14, -15) )
    },
    /**
     * APIMethod: start
     * Creates a start marker icon.
     */
    start: function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "start.png",
            new OpenLayers.Size(43,30),
            new OpenLayers.Pixel(-20, -29) )
        },
    /**
     * APIMethod: end
     * Creates an end marker icon.
     */
    end: function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "end.png",
            new OpenLayers.Size(34,30),
            new OpenLayers.Pixel(-20, -29) )
    },
    /**
     * APIProperty: vias
     * {Array} Array of functions that produce via points.
     */
    vias: [
    function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "via1.png",
            new OpenLayers.Size(42,30),
            new OpenLayers.Pixel(-20, -29) )
    },
    function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "via2.png",
            new OpenLayers.Size(42,30),
            new OpenLayers.Pixel(-20, -29) )
        },
    function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "via3.png",
            new OpenLayers.Size(42,30),
            new OpenLayers.Pixel(-20, -29) )
    },
    function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "via4.png",
            new OpenLayers.Size(42,30),
            new OpenLayers.Pixel(-20, -29) )
    },
    function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "via5.png",
            new OpenLayers.Size(42,30),
            new OpenLayers.Pixel(-20, -29) )
    }
    ],
    /**
     * APIMethod: redNumber
     * Creates a red point marker.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  text - the text to place in the marker
     */
    redNumber: function(tilePath, text) {
        return new OpenLayers.Icon(tilePath + "/marker?type=number&width=20&height=20&colour1=000000&colour2=000000&text1=" + text,
            new OpenLayers.Size(20,20),
            new OpenLayers.Pixel(-10,-10)
            );
    },
    /**
     * APIMethod: poi
     * Creates a point marker with a colour gradient.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  colour1 - The first gradient blend colour.
     *  colour2 - The second gradient blend colour.
     *  text - The text to place in the marker.
     *  textColour - The colour of the text (optional).
     *  hoverColour1 - The first gradient blend colour for hover states (optional).
     *  hoverColour2 - The second gradient blend colour for hover states (optional).
     */
    poi: function(tilePath, colour1, colour2, text, textColour, hoverColour1, hoverColour2) {
        return new EMS.HoverIcon(tilePath + EMS.Services.StandardIconGeometry.poi.url(colour1, colour2, text, textColour, hoverColour1, hoverColour2),
            EMS.Services.StandardIconGeometry.poi.size,
            EMS.Services.StandardIconGeometry.poi.offset,
            null,
            3
            );
    },
    /**
     * APIMethod: purplePoi
     * Creates a point marker with a purple colour gradient.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  text - the text to place in the marker
     */
    purplePoi: function(tilePath, text) {
        return EMS.Services.StandardIcons.poi(tilePath, EMS.Services.StandardIconGeometry.colours.purple.start, EMS.Services.StandardIconGeometry.colours.purple.end, text);
    },
    /**
     * APIMethod: greenPoi
     * Creates a point marker with a green colour gradient.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  text - the text to place in the marker
     */
    greenPoi: function(tilePath, text) {
        return EMS.Services.StandardIcons.poi(tilePath, EMS.Services.StandardIconGeometry.colours.green.start, EMS.Services.StandardIconGeometry.colours.green.end, text);
    },
    /**
     * APIMethod: brownPoi
     * Creates a point marker with a brown colour gradient.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  text - the text to place in the marker
     */
    brownPoi: function(tilePath, text) {
        return EMS.Services.StandardIcons.poi(tilePath, EMS.Services.StandardIconGeometry.colours.brown.start, EMS.Services.StandardIconGeometry.colours.brown.end, text);
    },
    /**
     * APIMethod: multipoi
     * Creates a multi point marker with a colour gradient.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  colour1 - The first gradient blend colour.
     *  colour2 - The second gradient blend colour.
     *  text - The text to place in the marker.
     *  textColour - The colour of the text (optional).
     *  hoverColour1 - The first gradient blend colour for hover states (optional).
     *  hoverColour2 - The second gradient blend colour for hover states (optional).
     */
    multipoi: function(tilePath, colour1, colour2, text, textColour, hoverColour1, hoverColour2) {
        return new EMS.HoverIcon(tilePath + EMS.Services.StandardIconGeometry.multipoi.url(colour1, colour2, text, textColour, hoverColour1, hoverColour2),
            EMS.Services.StandardIconGeometry.multipoi.size,
            EMS.Services.StandardIconGeometry.multipoi.offset,
            null,
            3
            );
    },
    /**
     * APIMethod: purpleMultipoi
     * Creates a multi point marker with a purple colour gradient.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  text - the text to place in the marker
     */
    purpleMultipoi: function(tilePath, text) {
        return new EMS.Services.StandardIcons.multipoi(tilePath, EMS.Services.StandardIconGeometry.colours.purple.start, EMS.Services.StandardIconGeometry.colours.purple.end, text);
    },
    /**
     * APIMethod: greenMultipoi
     * Creates a multi point marker with a green colour gradient.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  text - the text to place in the marker
     */
    greenMultipoi: function(tilePath, text) {
        return new EMS.Services.StandardIcons.multipoi(tilePath, EMS.Services.StandardIconGeometry.colours.green.start, EMS.Services.StandardIconGeometry.colours.green.end, text);
    },
    /**
     * APIMethod: brownMultipoi
     * Creates a multi point marker with a brown colour gradient.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  text - the text to place in the marker
     */
    brownMultipoi: function(tilePath, text) {
        return new EMS.Services.StandardIcons.multipoi(tilePath, EMS.Services.StandardIconGeometry.colours.brown.start, EMS.Services.StandardIconGeometry.colours.brown.end, text);
    },
    /**
     * APIMethod: babushka
     * Creates a multi-category multi point marker.
     *
     * Parameters:
     *  tilePath - The path to the tile server.  Can be retrieved from map.tilePath.
     *  text - The text to place in the marker.
     *  colour1 - The first gradient blend colour (optional).
     *  colour2 - The second gradient blend colour (optional).
     *  textColour - The colour of the text (optional).
     *  hoverColour1 - The first gradient blend colour for hover states (optional).
     *  hoverColour2 - The second gradient blend colour for hover states (optional).
     */
    babushka: function(tilePath, text, colour1, colour2, textColour, hoverColour1, hoverColour2) {
        return new EMS.HoverIcon(tilePath + EMS.Services.StandardIconGeometry.babushka.url(text, colour1, colour2, textColour, hoverColour1, hoverColour2),
            EMS.Services.StandardIconGeometry.babushka.size,
            EMS.Services.StandardIconGeometry.babushka.offset,
            null,
            3);
    },
    
    /**
     * APIMethod: circlePoi
     * Generates a cross air icon.
     */
    circlePoi: function() {
        return new EMS.HoverIcon(EMS.Util.getImagesLocation() + "circle_poi.png",
            new OpenLayers.Size(16,16),
            new OpenLayers.Pixel(-8, -8),null , 2 )
        }
};

EMS.Services.LineFeatureStyle = {
    fillColor: "#3366ff",
    fillOpacity: 0.7,
    hoverFillColor: "red",
    hoverFillOpacity: 1,
    strokeColor: "#3366ff",
    strokeOpacity: 0.7,
    strokeWidth: 7,
    hoverStrokeColor: "red",
    hoverStrokeOpacity: 1,
    hoverStrokeWidth: 6,
    pointRadius: 6,
    hoverPointRadius: 6,
    hoverPointUnit: "%",
    pointerEvents: "visiblePainted"
};

/**
 * Class: EMS.Services.RouteManager
 *
 * The route manager is a high level class that generates a route and will
 * update it automatically as the user pans and zooms around the map.
 *
 */
EMS.Services.RouteManager = OpenLayers.Class({
    /**
     * Method:
     * supported application event types
     *
     */
    EVENT_TYPES: ["routeretrieved", "invalidroute", "routeerror"],

    events: null,

    mode: null,  // one of route1 or route2 depending on if the old or new route method was called.

    /**
     * APIMethod: initialize
     * Create a new instance of the route manager.
     *
     * Parameters:
     *  map - {<EMS.Map>} The map to draw the route onto.
     *
     */
    initialize: function(map) {
        this.map = map;
        this.events = new OpenLayers.Events(this, null, this.EVENT_TYPES);
        this.show = true;
        this.vectors = [];
    },

    /**
     * APIMethod: route
     * Calculate a route from the provided waypoints.  When the route is
     * retrieves an event is fired called 'routeretrieved'.
     *
     * The route result has the following structure:
     *
     * (code)
     * {"boundingBox":
     *   {"bottom":-37.84569,
     *   "center":{"x":145.01115,"y":-37.827434999999994},
     *   "left":144.96526,
     *   "right":145.05704,
     *   "top":-37.80918,
     *   },
     *   "distanceMetres":12760,
     *   "routeDuration":815,
     *   "routeHandle":"5674286127015831924",
     *   "routes":[
     *     {"distanceMetres":12760.0,
     *     "overallMap":null,
     *     "routeDuration":815,
     *     "routeGeometry":[],
     *     "routeHandle":"api1-ZLY09B-1196832300142",
     *     "routeSegments":
     *     [
     *       {"centre":{"latitude":-37.81136,"longitude":144.96526},
     *       "metres":713.0,
     *       "routeDirection":"Straight",
     *       "segmentId":0,
     *       "segmentMap":null,
     *       "textualInstruction":"Start at _Lonsdale St, East Melbourne_ - head towards _Waratah Pl_",
     *       "travelTime":65
     *       },
     *       {"centre":{"latitude":-37.80918,"longitude":144.97289},
     *       "metres":17.0,
     *       "routeDirection":"Straight",
     *       "segmentId":1,
     *       "segmentMap":null,
     *       "textualInstruction":"Continue along _Albert St, East Melbourne_","travelTime":1
     *       },
     *       ...
     *     ]
     *   ]
     * }
     * (end)
     *
     * Parameters:
     *  waypoints - {Array(Object)} An array of address objects.
     *  fastest - {Boolean} True to use the fastest route or false for the
     *            shortest route.
     *  tolls - {Boolean} True to use roadways with tolls, false otherwise.
     *  transportType - {String} One of the options "ALL_VEHICLES",
     *                  or "PEDESTRIAN"
     *  routeVectorLayer - {OpenLayers.Layer.Vector} Vector layer to draw the
     *                     route onto.  Typically retrieved from map.vLayer.
     *  options - {Object} Optional parameters.  Can pass onException to
     *            set an event handler if an exception occurs.
     *            Can also pass onComplete property with a function to call
     *            when the route has been calculated.  This is passed a route
     *            result object.
     *
     *
     */
    route: function(waypoints, fastest, tolls, transportType, routeVectorLayer, options) {
        if (!this.itin)
            this.itin = new EMS.Services.Itin();

        this.mode = "route1";
        this.options = options;
        this.routeVectorLayer = routeVectorLayer;
        this.itin.combinedRoute(waypoints, fastest, tolls, transportType, true, OpenLayers.Function.bind(this._setupMapRoute, this), options);
    },

    /**
     * APIMethod: toggleRoute
     * Sets the visibility of the route.
     *
     * Parameters:
     *  show - {Boolean} True to display the route, false to hide.
     *
     */
    toggleRoute: function(show) {
        this.show = show;
        if(this.routeVectorLayer) {
            this.routeVectorLayer.setVisibility(show);
        }
    },

    /**
     * APIMethod: clearRoute
     * Clears the route from the map and releases any resources used.
     *
     *
     */
    clearRoute: function() {

        if (this.routeVectorLayer)
            this.routeVectorLayer.setVisibility(false);

        if (this.rHandle) {
            this.itin.releaseRouteHandle(this.rHandle);
        }       
        this._clearVectorFeatures();
        this.map.events.unregister('moveend', this, this._moveHandler);
        this.rHandle = null;
        this.routeVectorLayer = null;
        this.routeDetails = null;
    },    
    _clearVectorFeatures: function(){
        if (this.routeVectorLayer && this.vectors ){
            this.routeVectorLayer.removeFeatures(this.vectors);
            this.vectors = [];
        }
    },
    _setupMapRoute: function(route) {

        if (route.error) {
            this.events.triggerEvent('routeerror', route);
            return;
        }

        this.rHandle = route.routeHandle;
        this.routeDetails = route;

        this.map.events.register('moveend', this, this._moveHandler);
        this.events.triggerEvent('routeretrieved');
        this._moveHandler();

        if (this.options && this.options.onComplete) {
            this.options.onComplete(route);
        }
    },
    _moveHandler: function() {
        if (this.show) {
            var extent = this.map.getExtent();
            extent.top = EMS.Util.sgp4ToLat(extent.top);
            extent.bottom = EMS.Util.sgp4ToLat(extent.bottom);

            // http://jira.sensis.com.au/browse/LNSPECTRUM-444
            // Firefox 2.0 (3.0 not tested) has a limitation where values larger
            // or smaller than about 15000 in an SVG document lock the browser
            // up. So when we pan the map too much like what is done by
            // clicking on the EC direction panel markers this number is
            // exceeded and the vectors will not be displayed. This fix
            // will reset the renderers viewbox when we pan  past its threshold.
            if (navigator.appName.contains("Microsoft")) {
                this._clearVectorFeatures();
            }else if (EMS.Util.isGecko()){ // gecko test
                var x = (this.map.getCenter().lon / this.map.getResolution() + this.routeVectorLayer.renderer.left );
                var y = (this.map.getCenter().lat / this.map.getResolution() - this.routeVectorLayer.renderer.top );
                if (x < -14000 || x > 14000) {
                    this.routeVectorLayer.renderer.localResolution = null;
                }
                if (y < -14000 || y > 14000) {
                    this.routeVectorLayer.renderer.localResolution = null;
                }
            }
            var options = {
                group: 'routePart'
            };
            this.itin.getRoutePart(this.rHandle,
                this.map.getResolution(), 
                extent,
                OpenLayers.Function.bind(this._plotRouteLine, this),
                options);
        }
    },
    _plotRouteLine: function(routeResult) {
        if(!this.routeVectorLayer) {
            return;
        }

        var newVectors = [];

        if (routeResult.invalidRoute) {
            this.events.triggerEvent('invalidroute');
            this.clearRoute();
            return;
        }

        this.routeVectorLayer.setVisibility(false);

        for (var routeNumber = 0; routeNumber < routeResult.routes.length; routeNumber++) {

            var route = routeResult.routes[routeNumber];
            var lineFeatures = [];

            // Plot line
            for (i = 0; i < route.routeGeometry.length; i++) {
                var pointList = [];
                for (var j = 0; j < route.routeGeometry[i].length; j++) {
                    var lon = route.routeGeometry[i][j][0];
                    var lat = EMS.Util.latToSGP4(route.routeGeometry[i][j][1]);
                    var point = new OpenLayers.Geometry.Point(lon, lat);
                    pointList.push(point);
                }
                if (pointList.length > 0) {
                    var lineFeature = new OpenLayers.Geometry.LineString(pointList);
                    lineFeatures.push(lineFeature);
                }
            }
            if (lineFeatures.length > 0) {
                var multiString = new OpenLayers.Geometry.MultiLineString(lineFeatures);
                var vector = new EMS.Feature.Vector(multiString);
                vector.routeNumber = routeNumber;
                vector.routeHandle = routeResult.routeHandle;
                vector.style = EMS.Services.LineFeatureStyle;
                newVectors.push(vector);
            }

        }

        this._clearVectorFeatures();
        
        if (newVectors.length > 0) {
            this.routeVectorLayer.addFeatures(newVectors);
            for (var i = 0; i < newVectors.length; i++) {
                this.vectors.push(newVectors[i]);
            }
        }

        this.routeVectorLayer.setVisibility(true);
    },

    CLASS_NAME: "EMS.Services.RouteManager"
});

/**
 * Class: EMS.Services.RouteManager2
 *
 * New RouteManager interface.  Should be used in place of <EMS.Services.RouteManager>
 */
EMS.Services.RouteManager2 = OpenLayers.Class(EMS.Services.RouteManager, {
    /**
     * APIMethod: route
     *
     * Calculate a route from the provided waypoints.  When the route is
     * retrieves an event is fired called 'routeretrieved'.
     *
     * Parameters:
     *  routeRequest - An object with the following structure:
     *  (code)
     *      {
     *          "wayPoints": [[longitude, latitude], ...]
     *          "mode": One of FOOT BICYCLE CAR TRAIN TRAM BUS FERRY PUBLIC_TRANSPORT
     *          "instructionType": One of INTERSECTIONS LANDMARKS
     *          "startTime": DateTime or
     *          "stopTime": DateTime
     *          "preferences": [Array of preference strings: TOLLS_OK]
     *      }
     *  (end)
     *  routeVectorLayer - {OpenLayers.Layer.Vector} Vector layer to draw the
     *                     route onto.  Typically retrieved from map.vLayer.
     *  options - {Object} Optional parameters.  Can pass onException to
     *            set an event handler if an exception occurs.
     *            Can also pass onComplete property with a function to call
     *            when the route has been calculated.  This is passed a route
     *            result object.
     *
     */
    route: function(routeRequest, routeVectorLayer, options) {
        if (!this.itin)
            this.itin = new EMS.Services.Itin2();

        if (!routeRequest.preferences.contains("ROUTE_HANDLE_ONLY"))
            routeRequest.preferences.push("ROUTE_HANDLE_ONLY");

        this.mode = "route2";
        this.options = options;
        this.routeVectorLayer = routeVectorLayer;
        this.itin.combinedRoute(routeRequest, OpenLayers.Function.bind(this._setupMapRoute, this), options);
    },
    
    _plotRouteLine: function(routeResult) {
        if(!this.routeVectorLayer) {
            return;
        }

        var newVectors = [];

        if (routeResult.invalidRoute) {
            this.events.triggerEvent('invalidroute');
            this.clearRoute();
            return;
        }

        this.routeVectorLayer.setVisibility(false);

        var lineFeatures = [];
        var polylines = routeResult.polylines;

        // Plot line
        for (i = 0; i < polylines.length; i++) {
            var pointList = [];
            for (var j = 0; j < polylines[i].length; j++) {
                var lon = polylines[i][j][0];
                var lat = EMS.Util.latToSGP4(polylines[i][j][1]);
                var point = new OpenLayers.Geometry.Point(lon, lat);
                pointList.push(point);
            }
            if (pointList.length > 0) {
                var lineFeature = new OpenLayers.Geometry.LineString(pointList);
                lineFeatures.push(lineFeature);
            }
        }
        if (lineFeatures.length > 0) {
            var multiString = new OpenLayers.Geometry.MultiLineString(lineFeatures);
            var vector = new EMS.Feature.Vector(multiString);
            vector.style = EMS.Services.LineFeatureStyle;
            vector.routeHandle = routeResult.routeHandle;
            newVectors.push(vector);
        }

        this._clearVectorFeatures();            

        if (newVectors.length > 0) {
            this.routeVectorLayer.addFeatures(newVectors);
            for (var i = 0; i < newVectors.length; i++) {
                this.vectors.push(newVectors[i]);
            }
        }

        this.routeVectorLayer.setVisibility(true);
    },

    CLASS_NAME: "EMS.Services.RouteManager2"

} );

/**
 * Function: removeNode
 * Use this instead of removeChild.  Fixes a massive
 * memory leak in IE.
 */
OpenLayers.Util.removeNode = function(element) {
    var garbageBin = document.getElementById('IELeakGarbageBin');
    if (!garbageBin) {
        garbageBin = document.createElement('DIV');
        garbageBin.id = 'IELeakGarbageBin';
        garbageBin.style.display = 'none';
        document.body.appendChild(garbageBin);
    }

    // move the element to the garbage bin
    garbageBin.appendChild(element);
    garbageBin.innerHTML = '';
}
