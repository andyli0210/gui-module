/* Copyright (c) 2006 MetaCarta, Inc., published under the BSD license.
 * See http://svn.openlayers.org/trunk/openlayers/release-license.txt
 * for the full text of the license. */

/**
 * @requires ems/EMSUtils.js
 *
 * Class: EMS.Popup
 *
 * A popup is a small div that can opened and closed on the map.
 * Typically opened in response to clicking on a marker.
 * See <OpenLayers.Marker>.  Popup's don't require their own
 * layer and are added the the map using the <OpenLayers.Map.addPopup>
 * method.
 *
 * Example:
 * (code)
 * popup = new EMS.Popup("chicken",
 *                    new OpenLayers.LonLat(5,40),
 *                    new OpenLayers.Size(200,200),
 *                    "example popup",
 *                    marker.icon,
 *                    true);
 *
 * map.addPopup(popup);
 * (end)
 */
EMS.Popup = OpenLayers.Class({

    /**
     * APIProperty: EVENT_TYPES
     * {Array} Supported application event types.
     */
    EVENT_TYPES: ["shown", "hidden"], 

    /**
     * APIProperty: events
     * {<OpenLayers.Events>} events object to be used when attaching custom
     * events handlers to this object.
     */
    events: null,

    /**
     * APIProperty: id
     * {String} Prefix to the div.id attribute.
     */
    id: "",

    /**
     * APIProperty: lonlat
     * {<EMS.LonLat>} Prefix to lonlat field
     */
    lonlat: null,

    /**
     * APIProperty: div
     * {DOMElement} The main div containing this popup.
     */
    div: null,

    /**
     * APIProperty: size
     * {<OpenLayers.Size>} The size of the popup.
     */
    size: null,

    /**
     * APIProperty: contentHTML
     * {String} The HTML string contained in this div.
     */
    contentHTML: "",

    /**
     * APIProperty: backgroundColor
     * {String} The hex rgb background colour.
     */
    backgroundColor: "",

    /**
     * Property: opacity
     * {float} Whether the popup is tranparent.
     */
    opacity: 1,

    /**
     * Property: border
     * {String} the border thickness
     */
    border: "",

    /**
     * APIProperty: contentDiv
     * {DOMElement} The div containing the actual content of the popup. 
     */
    contentDiv:null,

    /**
     * Property: groupDiv
     * {DOMElement}
     */
    groupDiv:null,

    /**
     * APIProperty: padding
     * {Number} The internal padding for the content div.
     */
    padding: 5,

    /**
     * Property: calloutSize
     * {<OpenLayers.Size>} The size of the callout. Constant. Do not change.
     */
    calloutSize: new OpenLayers.Size(14,22),

    /**
     * APIProperty: map
     * {<OpenLayers.Map>} this gets set in Map.js when the popup is added
     * to the map
     */
    map: null,

    /**
     * Constructor: initialize
     *
     * Constructs a new instance of <EMS.EMSPopup>
     *
     * Properties:
     *  id - {String}
     *  lonlat - {OpenLayers.LonLat}
     *  size - {OpenLayers.Size}
     *  contentHTML - {String}
     *  anchor	{Object} Object which must expose a -size OpenLayers.Size and -offset OpenLayers.Pixel (generally an {OpenLayers.Icon} or {EMS.HoverIcon}).
     *  closeBox - {Boolean} whether to display close button.
     */
    initialize:function(id, lonlat, size, contentHTML, anchor, closeBox) {
        if (id == null) {
            id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
        }

        this.id = id;
        this.lonlat = lonlat;
        this.size = (size != null) ? size
                : new OpenLayers.Size(
                OpenLayers.Popup.WIDTH,
                OpenLayers.Popup.HEIGHT);
        if (contentHTML != null) {
            this.contentHTML = contentHTML;
        }
        this.anchor = anchor;
        this.backgroundColor = OpenLayers.Popup.COLOR;
        this.opacity = OpenLayers.Popup.OPACITY;
        this.border = OpenLayers.Popup.BORDER;

        this.div = OpenLayers.Util.createDiv(this.id, null, null,
                null, null, null, "visible");
        this.div.className = 'emsPopup';
        this.div.style.backgroundColor = "transparent";

        this.calloutDiv = OpenLayers.Util.createAlphaImageDiv(this.div.getAttribute("id") + "-callout",
                                                    null,
                                                    this.calloutSize,
                                                    null, "absolute", null, null, 1.0);
        this.calloutDiv.style.backgroundColor = "transparent";
        //this.calloutDiv.appendChild(document.createElement("img"));
        this.div.appendChild(this.calloutDiv);

        this.groupDiv = OpenLayers.Util.createDiv(null, null, null,
                null, "absolute", null,
                "hidden");
        this.groupDiv.className = "emsPopupGroup";

        this.shadow1Div = OpenLayers.Util.createDiv(null, null, null,
                null, "absolute", null,
                "hidden", 0.15);
        this.shadow1Div.style.marginLeft = "4px";
        this.shadow1Div.style.marginTop = "4px";
        this.shadow1Div.style.backgroundColor = "black";
        //this.shadow1Div.style.zIndex = 750;
        this.shadow2Div = OpenLayers.Util.createDiv(null, null, null,
                null, "absolute", null,
                "hidden", 0.15);
        this.shadow2Div.style.marginTop = "8px";
        this.shadow2Div.style.marginLeft = "8px";
        this.shadow2Div.style.backgroundColor = "black";
        //this.shadow2Div.style.zIndex = 750;

        var id = this.div.id + "_contentDiv";
        this.contentDiv = OpenLayers.Util.createDiv(id, null, this.size.clone(),
                null, "relative", null,
                "hidden");
        this.contentDiv.className = 'emsPopupContent';
        this.groupDiv.appendChild(this.contentDiv);
        this.div.appendChild(this.shadow1Div);
        this.div.appendChild(this.shadow2Div);
        this.div.appendChild(this.groupDiv);

        if (closeBox) {
            // close icon
            var closeSize = new OpenLayers.Size(12, 12);
            //var img = OpenLayers.Util.getImagesLocation() + "close.gif";
            var img = EMS.Util.getImagesLocation() + "close_off.gif";
            var closeImg = OpenLayers.Util.createAlphaImageDiv(this.id + "_close",
                    null,
                    closeSize,
                    img);
            closeImg.style.right = this.padding + "px";
            closeImg.style.top = this.padding + "px";
            this.groupDiv.appendChild(closeImg);

            var closePopup = function(e) {
                this.hide();
                OpenLayers.Event.stop(e);
            }
            OpenLayers.Event.observe(closeImg, "click",
                    closePopup.bindAsEventListener(this));

        }

        this.registerEvents();
    },

    /**
     * APIMethod: destroy
     * Cleanly releases resources used by this control.
     *
     */
    destroy: function() {
        if (this.map != null) {
            this.map.removePopup(this);
            this.map = null;
        }
        this.events.destroy();
        this.events = null;
        this.div = null;
    },

    /**
     * APIMethod: draw
     * Constructs contents of the control.
     *
     * Returns:
     * A reference to a div that represents this control.
     */
    draw: function(px) {
        if (px == null) {
            if ((this.lonlat != null) && (this.map != null)) {
                px = this.map.getLayerPxFromLonLat(this.lonlat);
            }
        }

        this.setSize();
        this.setBackgroundColor();
        this.setOpacity();
        this.setBorder();
        this.setContentHTML();
        this.moveTo(px);

        return this.div;
    },

    /**
     * Method: updatePosition
     * if the popup has a lonlat and its map members set,
     * then have it move itself to its proper position.
     *
     */
    updatePosition: function() {
        if ((this.lonlat) && (this.map)) {
            var px = this.map.getLayerPxFromLonLat(this.lonlat);
            this.moveTo(px);
        }
    },

    /**
     * Method: moveTo
     * Moves the control to a given pixel position.
     *
     * Parameters: 
     *  px - {<OpenLayers.Pixel>} The pixel position to move to.
     *
     */
    moveTo: function(px) {
        if ((px != null) && (this.div != null)) {

            var direction = this.direction(px);

            var originalPx = px;
            
            var anchorHeight = (this.anchor == undefined ? 0 : this.anchor.size.h);
            var anchorWidth = (this.anchor == undefined ? 0 : this.anchor.size.w);

            // Adjust for anchor size
            if(this.anchor != undefined){
            	//if the offset is in the middle of the icon do nothing to the height
            	if(this.anchor.offset != undefined && (anchorHeight / 2) == (this.anchor.offset.y / -1)){
            		anchorHeight = 0;
            	}
	            px = px.add(direction * anchorWidth / 2, - anchorHeight / 2);
            }
            // Adjust for direction
            if (direction == -1) {
                px = px.add(-this.size.w, 0);
                px = px.add(direction * this.calloutSize.w, 0);
            }
            // Adjust for callout
            //px = px.add(direction * this.calloutSize.w, 0);

            // Align to center of popup
            px = px.add(0, -this.size.h / 2);
            // Adjust back if point is on map but partly offscreen
            if(this.map.getExtent().containsLonLat(this.map.getLonLatFromLayerPx(originalPx))){
	            if (this.map.getViewPortPxFromLayerPx(px).y < 0 ) {
	                px = px.add(0, -(this.map.getViewPortPxFromLayerPx(px).y));
	            } else if (this.map.getViewPortPxFromLayerPx(px).y + this.size.h > this.map.getSize().h) {
	                px = px.add(0, -(this.map.getViewPortPxFromLayerPx(px).y + this.size.h - this.map.getSize().h));
	            }
            }

            // position group div
            this.shadow1Div.style.marginTop = "4px";
            this.shadow2Div.style.marginTop = "8px";
            if (direction > 0) {
                this.shadow1Div.style.marginLeft = (this.calloutSize.w + 4) + "px";
                this.shadow2Div.style.marginLeft = (this.calloutSize.w + 8) + "px";
                this.groupDiv.style.marginLeft = this.calloutSize.w + "px";

                this.groupDiv.style.marginRight = "0px";
                this.shadow1Div.style.marginRight = "0px";
                this.shadow2Div.style.marginRight = "0px";
            } else {
                this.shadow1Div.style.marginLeft = "0px";
                this.shadow2Div.style.marginLeft = "0px";
                this.groupDiv.style.marginLeft = "0px";

                this.shadow1Div.style.marginLeft = (4) + "px";
                this.shadow2Div.style.marginLeft = (8) + "px";
                this.groupDiv.style.marginRight = this.calloutSize.w + "px";
            }

            // position callout
            if (direction > 0){
                this.calloutDiv.style.left = "2px";
                this.calloutDiv.style.right = "";
            }else {
                this.calloutDiv.style.right = "2px";
                this.calloutDiv.style.left = "";
            }
			
		    this.calloutDiv.style.top = (originalPx.y - px.y - this.calloutSize.h / 2 - anchorHeight / 2) + "px";
            this.calloutDiv.style.zIndex = this.div.style.zIndex + 1;
            
            if (direction > 0)
                OpenLayers.Util.modifyAlphaImageDiv(this.calloutDiv, null, null, null, EMS.Util.getImagesLocation() + "calloutleft.png");
            else
                OpenLayers.Util.modifyAlphaImageDiv(this.calloutDiv, null, null, null, EMS.Util.getImagesLocation() + "calloutright.png");

            this.div.style.left = px.x + "px";
            this.div.style.top = px.y + "px";
        }
    },

    /**
     * Method: direction
     * Determine which direction to open popup in.
     *
     * Parameters:
     *  px - {<OpenLayers.Pixel>} The pixel position of the popup. 
     *
     * Returns:
     *  -1 for left, 1 for right.
     */
    direction: function(px) {
        var lonlat = this.map.getLonLatFromLayerPx(px);
        var extent = this.map.getExtent();
        var quadrant = extent.determineQuadrant(lonlat);
        if (quadrant.charAt(1) == "l")
            return 1;
        else
            return -1;
    },

    /**
     * APIMethod: visible
     * Determine whether or not the popup is visible.
     *
     * Returns:
     *  Boolean indicating whether or not the popup is visible
     */
    visible: function() {
        return OpenLayers.Element.visible(this.div);
    },

    /**
     * APIMethod: toggle
     * Toggle visibility of the popup.  Can trigger shown and hidden events. 
     */
    toggle: function() {
        OpenLayers.Element.toggle(this.div);
        
        if(this.visible()) {
        	// Dispatch event for popup being shown
        	this.events.triggerEvent("shown");
        }
        else {
        	// Dispatch event for popup being hidden
        	this.events.triggerEvent("hidden");
        }
    },

    /**
     * APIMethod: show
     * Make the popup visible.  Will trigger the shown event.
     */
    show: function() {
        OpenLayers.Element.show(this.div);
        
        // Dispatch event for popup being shown
        this.events.triggerEvent("shown");
    },

    /**
     * APIMethod: hide
     * Make the popup invisible.  Will trigger the hidden event.
     */
    hide: function() {
        OpenLayers.Element.hide(this.div);
    
    	// Dispatch event for popup being hidden
    	this.events.triggerEvent("hidden");
    },

    /**
     * APIMethod: setSize
     * Sets the size of the popup.
     * 
     * Parameters: 
     *  size - {<OpenLayers.Size>} The size to set to
     *
     */
    setSize:function(size) {
        if (size != undefined) {
            this.size = size;
        }

        if (this.div != null) {
            this.div.style.width = (this.size.w + this.calloutSize.w) + "px";
            this.div.style.height = this.size.h + "px";
        }
        var innerWidth = this.size.w - 4;     // allow for border
        var innerHeight = this.size.h - 4;    // allow for border
        if (this.groupDiv != null) {
            this.groupDiv.style.width = innerWidth + "px";
            this.groupDiv.style.height = innerHeight + "px";
        }
        if (this.shadow1Div != null && this.shadow2Div != null) {
            this.shadow1Div.style.width = (innerWidth + 4) + "px";
            this.shadow1Div.style.height = (innerHeight + 4) + "px";
            this.shadow2Div.style.width = (innerWidth + 4) + "px";
            this.shadow2Div.style.height = (innerHeight + 4) + "px";
        }
        if (this.contentDiv != null) {
            this.contentDiv.style.width = innerWidth + "px";
            this.contentDiv.style.height = innerHeight + "px";
        }
    },

    /**
     * Method: setBackgroundColor
     * Sets the background colour of the popup.
     *
     * Parameters:
     *  color - {<String>}  Hex rgb colour.
     *
     */
    setBackgroundColor:function(color) {
        if (color != undefined) {
            this.backgroundColor = color;
        }

        if (this.div != null) {
            this.groupDiv.style.backgroundColor = this.backgroundColor;
        }
    },

    /**
     * APIMethod: opacity
     * Sets the opacity 
     *
     * Parameters:
     *  opacity - {<float>} 
     *
     */
    setOpacity:function(opacity) {
        if (opacity != undefined) {
            this.opacity = opacity;
        }

        if (this.div != null) {
            if (this.opacity == 1) {
                this.div.style.opacity = null;
                this.div.style.filter = null;
            } else {
                // for Mozilla and Safari
                this.div.style.opacity = this.opacity;

                // for IE
                this.div.style.filter = 'alpha(opacity=' + this.opacity*100 + ')';
            }
        }
    },

    /**
     * APIMethod: setBorder
     * Sets the border style for the popup.
     *
     * Parameters:
     *  border - {String} the border style setting
     *
     */
    setBorder:function(border) {
        if (border != undefined) {
            this.border = border;
        }

        if (this.div != null) {
            this.div.style.border = this.border;
        }
    },

    /**
     * APIMethod: setContentHTML
     * Sets the contents of the popup
     *
     * Parameters:
     *  contentHTML - {String} The HTML contents to place in the popup.
     *
     */
    setContentHTML:function(contentHTML) {
        if (contentHTML != null) {
            this.contentHTML = contentHTML;
        }

        if (this.contentDiv != null) {
            this.contentDiv.innerHTML = this.contentHTML;
        }
    },



    /** Do this in a separate function so that subclasses can
     *   choose to override it if they wish to deal differently
     *   with mouse events
     *
     *   Note in the following handler functions that some special
     *    care is needed to deal correctly with mousing and popups.
     *
     *   Because the user might select the zoom-rectangle option and
     *    then drag it over a popup, we need a safe way to allow the
     *    mousemove and mouseup events to pass through the popup when
     *    they are initiated from outside.
     *
     *   Otherwise, we want to essentially kill the event propagation
     *    for all other events, though we have to do so carefully,
     *    without disabling basic html functionality, like clicking on
     *    hyperlinks or drag-selecting text.
     */
    registerEvents:function() {
        this.events = new OpenLayers.Events(this, this.div, this.EVENT_TYPES, true);

        this.events.register("mousedown", this, this.onmousedown);
        this.events.register("mousemove", this, this.onmousemove);
        this.events.register("mouseup", this, this.onmouseup);
        this.events.register("click", this, this.onclick);
        this.events.register("mouseout", this, this.onmouseout);
        this.events.register("dblclick", this, this.ondblclick);
    },

    /** When mouse goes down within the popup, make a note of
     *   it locally, and then do not propagate the mousedown
     *   (but do so safely so that user can select text inside)
     *
     * Parameters:
     *  evt - {Event} event
     */
    onmousedown: function (evt) {
        this.mousedown = true;
        OpenLayers.Event.stop(evt, true);
    },

    /** If the drag was started within the popup, then
     *   do not propagate the mousemove (but do so safely
     *   so that user can select text inside)
     *
     * Parameters:
     *  evt - {Event} event 
     */
    onmousemove: function (evt) {
        if (this.mousedown) {
            OpenLayers.Event.stop(evt, true);
        }
    },

    /** When mouse comes up within the popup, after going down
     *   in it, reset the flag, and then (once again) do not
     *   propagate the event, but do so safely so that user can
     *   select text inside
     *
     * Parameters:
     *  ect - {Event} event
     */
    onmouseup: function (evt) {
        if (this.mousedown) {
            this.mousedown = false;
            OpenLayers.Event.stop(evt, true);
        }
    },

    /** Ignore clicks, but allowing default browser handling
     *
     * Parameters:
     *  evt - {Event} event
     */
    onclick: function (evt) {
        OpenLayers.Event.stop(evt, true);
    },

    /** When mouse goes out of the popup set the flag to false so that
     *   if they let go and then drag back in, we won't be confused.
     *
     * Parameters:
     * evt - {Event} event
     */
    onmouseout: function (evt) {
        this.mousedown = false;
    },

    /** Ignore double-clicks, but allowing default browser handling
     *
     * Parameters:
     *  evt - {Event} event
     */
    ondblclick: function (evt) {
        OpenLayers.Event.stop(evt, true);
    },

    CLASS_NAME: "EMS.Popup"
});
