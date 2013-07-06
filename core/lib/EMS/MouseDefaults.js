
/**
 * TODO: This is wrong.  It should have been modelled after Navigation.js
 * since the openlayers MouseDefaults.js is deprecated.  
 *
 * @requires ems/EMSUtils.js
 *
 * Class: EMS.Control.MouseDefaults
 *
 * This control sets up mouse handling facilities for the map.  Examples:
 *
 *  - Click pan
 *  - Double click to zoom
 *  - Zoombox
 *  - Mouse wheel zoom
 *  - Drag pan.
 *
 * Inherits from:
 *  - <OpenLayers.Control>
 */
EMS.Control.MouseDefaults = OpenLayers.Class( OpenLayers.Control, {

    /**
     * Property: performedDrag
     * {Boolean} Whether a drag has been performed.
     */
    performedDrag: false,

    /**
     * Property: wheelObserver
     * {Function}  Not for public use.
     */
    wheelObserver: null,

    /**
     * Constructor: initialize
     *
     * Constructs a new instance of the <EMS.Control.MouseDefaults> control.
     *
     */
    initialize: function() {
        this.active = true;
        OpenLayers.Control.prototype.initialize.apply(this, arguments);
    },

    /**
     * APIMethod: destroy
     * Constructs contents of the control.
     *
     * Returns:
     * A reference to a div that represents this control.
     */    
    destroy: function() {

        if (this.handler) {
            this.handler.destroy();
        }
        this.handler = null;

        this.map.events.unregister( "click", this, this.defaultClick );
        this.map.events.unregister( "dblclick", this, this.defaultDblClick );
        this.map.events.unregister( "mousedown", this, this.defaultMouseDown );
        this.map.events.unregister( "mouseup", this, this.defaultMouseUp );
        this.map.events.unregister( "mousemove", this, this.defaultMouseMove );
        this.map.events.unregister( "mouseout", this, this.defaultMouseOut );

        //unregister mousewheel events specifically on the window and document
        OpenLayers.Event.stopObserving(window, "DOMMouseScroll",
                                        this.wheelObserver);
        OpenLayers.Event.stopObserving(window, "mousewheel",
                                        this.wheelObserver);
        OpenLayers.Event.stopObserving(document, "mousewheel",
                                        this.wheelObserver);
        this.wheelObserver = null;

        OpenLayers.Control.prototype.destroy.apply(this, arguments);
    },

    /**
     * APIMethod: draw
     * 
	 * Override of the OpenLayers.MouseDefaults.draw() to set the
	 * cursor to the hand.
	 */
	draw: function() {
        this.map.events.register( "click", this, this.defaultClick );
        this.map.events.register( "dblclick", this, this.defaultDblClick );
        this.map.events.register( "mousedown", this, this.defaultMouseDown );
        this.map.events.register( "mouseup", this, this.defaultMouseUp );
        this.map.events.register( "mousemove", this, this.defaultMouseMove );
        this.map.events.register( "mouseout", this, this.defaultMouseOut );

        this.registerWheelEvents();

        this.map.viewPortDiv.style.cursor = "url('" + EMS.Util.getImagesLocation() + "grab.cur'), move";
	},

    /**
     * Method: registerWheelEvents
     *
     * Register wheel events.
     */
    registerWheelEvents: function() {

        this.wheelObserver = this.onWheelEvent.bindAsEventListener(this);

        //register mousewheel events specifically on the window and document
        OpenLayers.Event.observe(window, "DOMMouseScroll", this.wheelObserver);
        OpenLayers.Event.observe(window, "mousewheel", this.wheelObserver);
        OpenLayers.Event.observe(document, "mousewheel", this.wheelObserver);
    },

    defaultMouseDown: function (evt) {
        if (!this.active) return;

        this.mouseDownStart = evt.xy.clone();
        this.mouseDownStartTime = new Date().valueOf();
        this.doubleClickCalled = false;
        this.clickCalled = false;
        this.map.viewPortDiv.style.cursor = "url('" + EMS.Util.getImagesLocation() + "grabbing.cur'), move";

        if (!OpenLayers.Event.isLeftClick(evt)) return;
        this.mouseDragStart = evt.xy.clone();
        this.performedDrag  = false;
        if (evt.shiftKey) {
            this.map.div.style.cursor = "crosshair";
            this.zoomBox = OpenLayers.Util.createDiv('zoomBox',
                                                     this.mouseDragStart,
                                                     null,
                                                     null,
                                                     "absolute",
                                                     "2px solid red");
            this.zoomBox.style.backgroundColor = "white";
            this.zoomBox.style.filter = "alpha(opacity=50)"; // IE
            this.zoomBox.style.opacity = "0.50";
            this.zoomBox.style.fontSize = "1px";
            this.zoomBox.style.zIndex = this.map.Z_INDEX_BASE["Popup"] - 1;
            this.map.viewPortDiv.appendChild(this.zoomBox);
        }
        document.onselectstart=function() { return false; }
        OpenLayers.Event.stop(evt);

    	
    },

    defaultClick: function(evt) {
        if (!this.active) return;

        this.clickCalled = true;
        var result = OpenLayers.Control.MouseDefaults.prototype.defaultClick.apply(this, arguments);

        if (!OpenLayers.Event.isLeftClick(evt)) return result;

        this.mouseDownStart = null;
        return result;
    },

    /**
     * @param {Event} evt
     */
    defaultMouseMove: function (evt) {
        if (!this.active) return;

        // record the mouse position, used in onWheelEvent
        this.mousePosition = evt.xy.clone();

        if (this.mouseDragStart != null) {
            if (this.zoomBox) {
                var deltaX = Math.abs(this.mouseDragStart.x - evt.xy.x);
                var deltaY = Math.abs(this.mouseDragStart.y - evt.xy.y);
                this.zoomBox.style.width = Math.max(1, deltaX) + "px";
                this.zoomBox.style.height = Math.max(1, deltaY) + "px";
                if (evt.xy.x < this.mouseDragStart.x) {
                    this.zoomBox.style.left = evt.xy.x+"px";
                }
                if (evt.xy.y < this.mouseDragStart.y) {
                    this.zoomBox.style.top = evt.xy.y+"px";
                }
            } else {
                var deltaX = this.mouseDragStart.x - evt.xy.x;
                var deltaY = this.mouseDragStart.y - evt.xy.y;
                if (!this.performedDrag && (Math.abs(deltaX) < 7 && Math.abs(deltaY) < 7)) {
                    return;
                }
                var size = this.map.getSize();
                var newXY = new OpenLayers.Pixel(size.w / 2 + deltaX,
                                                 size.h / 2 + deltaY);
                var newCenter = this.map.getLonLatFromViewPortPx( newXY );
                this.map.setCenter(newCenter, null, true);
                this.mouseDragStart = evt.xy.clone();
                this.map.div.style.cursor = "move";

                this.performedDrag = true;
            }
        }
    },

    /**
     * @param {Event} evt
     */
    defaultMouseOut: function (evt) {
        if (!this.active) return;

        if (this.mouseDragStart != null &&
            OpenLayers.Util.mouseLeft(evt, this.map.div)) {
            if (this.zoomBox) {
                this.removeZoomBox();
            }
            this.mouseDragStart = null;
            this.map.events.triggerEvent("moveend");

        }
    },

    cancelRecenter: function() {
        this.doubleClickCalled = true;
    },

    /** User spun scroll wheel up
     *
     */
    defaultWheelUp: function(evt) {
        if (!this.active) return;

        var mouse = this.map.getLonLatFromPixel(evt.xy); 
        var center = this.map.getCenter();
        var resolution = this.map.getResolution();
        var mouseToCenter = new OpenLayers.Pixel((mouse.lon - center.lon) / resolution,
                                                 (mouse.lat - center.lat) / resolution);

		if(this.map.baseLayer != null){
            var nextResolution = this.map.baseLayer.resolutions[this.map.getZoom() + 1];
        }else{
        	var nextResolution = this.map.getResolution();
        }

        if (this.useSmoothZoom()) {

            var newCenter = new OpenLayers.LonLat(center.lon + (mouseToCenter.x * nextResolution),
                                                     center.lat + (mouseToCenter.y * nextResolution));

            EMS.Util.smoothZoom(this.map, mouse, newCenter, this.map.getZoom() + 1);
        } else {
            this.map.setCenter(new OpenLayers.LonLat(mouse.lon - (mouseToCenter.x * nextResolution),
                                                     mouse.lat - (mouseToCenter.y * nextResolution)),
                               this.map.getZoom() + 1);
        }
    },

    useSmoothZoom: function() {
        return OpenLayers.Layer.prototype.SUPPORTED_TRANSITIONS && this.contains(OpenLayers.Layer.prototype.SUPPORTED_TRANSITIONS, "resize")
                && this.map.baseLayer.transitionEffect == "resize";
    },

    contains: function(arr, val) {
        for (var i = 0; i < arr.length; i++) if (arr[i] == val) return true;
        return false;
    },

    /** User spun scroll wheel down
     *
     */
    defaultWheelDown: function(evt) {
        if (!this.active) return;
		
		if (this.map.getZoom() > 0) { 
			var mouse = this.map.getLonLatFromPixel(evt.xy); 
            var center = this.map.getCenter(); 
            var resolution = this.map.getResolution(); 
            var mouseToCenter = new OpenLayers.Pixel((mouse.lon - center.lon) / resolution, 
                                                     (mouse.lat - center.lat) / resolution); 
 
 			if(this.map.baseLayer != null){
	            var prevResolution = this.map.baseLayer.resolutions[this.map.getZoom() - 1]; 
	        }else{
	        	var prevResolution = this.map.getResolution(); 
	        }

            if (this.useSmoothZoom()) {
                var newCenter = new OpenLayers.LonLat(mouse.lon - (mouseToCenter.x * prevResolution),
                        mouse.lat - (mouseToCenter.y * prevResolution));
                EMS.Util.smoothZoom(this.map, mouse, newCenter, this.map.getZoom() - 1);
            } else {
                this.map.setCenter(new OpenLayers.LonLat(mouse.lon - (mouseToCenter.x * prevResolution),
                                                         mouse.lat - (mouseToCenter.y * prevResolution)),
                                   this.map.getZoom() - 1);
            }
        }
    },


    /**
     * Override of the OpenLayers.MouseDefaults.defaultMouseUp method
     * to set the cursor back to the hand of glory.
     * 
     * @param {Event} evt
     */
    defaultMouseUp: function (evt) {
        if (!this.active) return;

        this.map.viewPortDiv.style.cursor = "url('" + EMS.Util.getImagesLocation() + "grab.cur'), move";

        if (!OpenLayers.Event.isLeftClick(evt)) return;
        if (this.zoomBox) {
            this.zoomBoxEnd(evt);
        } else {
            if (this.performedDrag) {
                this.map.setCenter(this.map.center);
            }
        }
        document.onselectstart=null;
        this.mouseDragStart = null;
        this.map.div.style.cursor = "";
        this.performedDrag = false;

    },

    /** Zoombox function.
     *
     */
    zoomBoxEnd: function(evt) {
        if (this.mouseDragStart != null) {
            if (Math.abs(this.mouseDragStart.x - evt.xy.x) > 5 ||
                Math.abs(this.mouseDragStart.y - evt.xy.y) > 5) {
                var start = this.map.getLonLatFromViewPortPx( this.mouseDragStart );
                var end = this.map.getLonLatFromViewPortPx( evt.xy );
                var top = Math.max(start.lat, end.lat);
                var bottom = Math.min(start.lat, end.lat);
                var left = Math.min(start.lon, end.lon);
                var right = Math.max(start.lon, end.lon);
                var bounds = new OpenLayers.Bounds(left, bottom, right, top);
                this.map.zoomToExtent(bounds);
            } else {
                var end = this.map.getLonLatFromViewPortPx( evt.xy );
                this.map.setCenter(new OpenLayers.LonLat(
                  (end.lon),
                  (end.lat)
                 ), this.map.getZoom() + 1);
            }
            this.removeZoomBox();
       }
    },

    /**
     * Remove the zoombox from the screen and nullify our reference to it.
     */
    removeZoomBox: function() {
        this.map.viewPortDiv.removeChild(this.zoomBox);
        this.zoomBox = null;
    },

    defaultDblClick: function(evt) {
        if (!this.active) return;

        this.doubleClickCalled = true;
        var newCenter = this.map.getLonLatFromViewPortPx( evt.xy );
        this.map.setCenter(newCenter, this.map.zoom + 1);
        OpenLayers.Event.stop(evt);
        return false;
    },

    /**
     *  Mouse ScrollWheel code thanks to http://adomas.org/javascript-mouse-wheel/
     */


    /** Catch the wheel event and handle it xbrowserly
     *
     * @param {Event} e
     */
    onWheelEvent: function(e){

        // first determine whether or not the wheeling was inside the map
        var inMap = false;
        var elem = OpenLayers.Event.element(e);
        while(elem != null) {
            if (this.map && elem == this.map.div) {
                inMap = true;
                break;
            }
            elem = elem.parentNode;
        }

        if (inMap) {

            var delta = 0;
            if (!e) {
                e = window.event;
            }
            if (e.wheelDelta) {
                delta = e.wheelDelta/120;
                if (window.opera) {
                    delta = -delta;
                }
            } else if (e.detail) {
                delta = -e.detail / 3;
            }
            if (delta) {
                // add the mouse position to the event because mozilla has a bug
                // with clientX and clientY (see https://bugzilla.mozilla.org/show_bug.cgi?id=352179)
                // getLonLatFromViewPortPx(e) returns wrong values
                e.xy = this.mousePosition;

                if (delta < 0) {
                   this.defaultWheelDown(e);
                } else {
                   this.defaultWheelUp(e);
                }
            }

            //only wheel the map, not the window
            OpenLayers.Event.stop(e);
        }
    },

    /** @final @type String */
    CLASS_NAME: "EMS.Control.MouseDefaults"
});

