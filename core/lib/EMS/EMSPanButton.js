/**
 * @requires ems/EMSUtils.js
 * @requires ems/HoverIcon.js
 *
 * Class: EMS.Control.PanButton
 *
 * Can be controlled with the following style settings
 *
 * .emsControlPanButton-nElement,.emsControlPanButton-sElement,.emsControlPanButton-eElement,.emsControlPanButton-wElement {
 *   blah
 * }
 *
 * Inherits from:
 *  - <OpenLayers.Control> 
 */

EMS.Control.PanButton = OpenLayers.Class( OpenLayers.Control, {

    /**
     * Property: id
     * {String} Prefix to the div.id
     */
    id:  null,

    /**
     * APIProperty: type
     * {String} One of n, s, e, w
     */
    type: null,

    /**
     * APIProperty: map
     * {<EMS.Map>} Reference to the map this pan button is contained by.
     */
    map: null,

    element: null,

    /**
     * APIProperty: offset
     * {Number} Offset for the pan arrow and the outer edge of the map.
     */
    offset:0,
    
     /**
     * APIProperty: smallPanButton
     * {Boolean} Small pan buttons or large. Large by default.
     */
    smallPanButton:false,
    
    
     /**
     * Constructor: initialize
     *
     * Create an instance of <EMS.Control.EMSPanButton>.
     *
     * Parameters:
     *  type - {String} One of n, s, e, w.
     *  icon - {<OpenLayers.Icon>} Usually defaulted however it is possible to pass an icon explicitly.
     *  options - {Object} Extra options to override existing properties or add new ones.
     *
     */
    initialize: function(type, icon, options) {
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
        this.type = type;
        if (!icon) {
        	if(this.smallPanButton){
	            if (type == "n") {
	                icon = new EMS.HoverIcon(EMS.Util.getImagesLocation() + "pan_north_sml.png", new OpenLayers.Size(20,16));
	            } else if (type == "s") {
	                icon = new EMS.HoverIcon(EMS.Util.getImagesLocation() + "pan_south_sml.png", new OpenLayers.Size(20,16));
	            } else if (type == "e") {
	                icon = new EMS.HoverIcon(EMS.Util.getImagesLocation() + "pan_east_sml.png", new OpenLayers.Size(16,20));
	            } else if (type == "w") {
	                icon = new EMS.HoverIcon(EMS.Util.getImagesLocation() + "pan_west_sml.png", new OpenLayers.Size(16,20));
	            }
	        }else{
	        	 if (type == "n") {
	                icon = new EMS.HoverIcon(EMS.Util.getImagesLocation() + "pan_north.png", new OpenLayers.Size(25,20));
	            } else if (type == "s") {
	                icon = new EMS.HoverIcon(EMS.Util.getImagesLocation() + "pan_south.png", new OpenLayers.Size(25,20));
	            } else if (type == "e") {
	                icon = new EMS.HoverIcon(EMS.Util.getImagesLocation() + "pan_east.png", new OpenLayers.Size(20,25));
	            } else if (type == "w") {
	                icon = new EMS.HoverIcon(EMS.Util.getImagesLocation() + "pan_west.png", new OpenLayers.Size(20,25));
	            }
	        }
        }
        this.icon = icon;
        this.id = OpenLayers.Util.createUniqueID(this.CLASS_NAME + "_");
        this.displayClass = this.CLASS_NAME.replace("EMS.", "ems").replace(".","") + "-" + type;


    },

    /**
     * Method: Called by OpenLayers to set the map this control is contained by.
     * 
     * Parameters:
     *  map - {<OpenLayers.Map>}    A reference to the containing map.
     *
     */
    setMap: function(map) {

        OpenLayers.Control.prototype.setMap.apply(this, arguments);

        // Tap into the resize of the map
        // gjs: does this block do anything?!?!
		var updateSize = OpenLayers.Function.bind(this.updateSize);
        var original = map.updateSize;
        map.onMapResize = function() {
            original();
            updateSize();
        }

        // Because Mozilla does not support the "resize" event for elements other
        // than "window", we need to put a hack here.
        if (navigator.appName.contains("Microsoft")) {
            // If IE, register the resize on the div
            map.events.register("resize", this, this.updateSize);
        } else {
            // Else updateSize on catching the window's resize
            //  Note that this is ok, as updateSize() does nothing if the
            //  map's size has not actually changed.
            OpenLayers.Event.observe(window, 'resize',
                          this.updateSizeCallback = this.updateSize.bindAsEventListener(this));
        }
    },

    /**
     * APIMethod: updateSize
     * 
     * Called when the map size is updated to recalculate the positions of the
     * pan arrows..
     * 
     */
    updateSize: function() {
        var wMax = this.icon.size.w;
        var hMax = this.icon.size.h;
        var position;
        if (this.type == 'n')
            position = new OpenLayers.Pixel(this.map.getSize().w / 2 - wMax / 2, (0 + this.offset));
        else if (this.type == 's')
            position = new OpenLayers.Pixel(this.map.getSize().w / 2 - wMax / 2, this.map.getSize().h - (hMax + this.offset));
        else if (this.type == 'e')
            position = new OpenLayers.Pixel(this.map.getSize().w - (wMax + this.offset), this.map.getSize().h / 2 - hMax / 2);
        else if (this.type == 'w')
            position = new OpenLayers.Pixel((0 + this.offset), this.map.getSize().h / 2 - hMax / 2);
        OpenLayers.Util.modifyDOMElement(this.div, null, position);
    },

    /**
     * APIMethod: destroy
     * Cleanly releases resources used by this control.
     * 
     */
    destroy: function() {
        OpenLayers.Event.stopObservingElement(this.div);
    },

    /**
     * APIMethod: draw
     * Constructs contents of the control.
     * 
     * Returns:
     * A reference to a div that represents this control.
     */
    draw: function() {
        OpenLayers.Control.prototype.draw.apply(this, arguments);

        this.div.style.overflow = "hidden";
        this.div.style.height = this.icon.size.h + "px";

        var wMax = this.icon.size.w;
        var hMax = this.icon.size.h;
        var wMin = this.icon.size.w;
        var hMin = this.icon.size.h;
        var position;
        if (this.type == 'n')
            position = new OpenLayers.Pixel(this.map.getSize().w / 2 - wMax / 2, (0 + this.offset));
        else if (this.type == 's')
            position = new OpenLayers.Pixel(this.map.getSize().w / 2 - wMax / 2, this.map.getSize().h - (hMax + this.offset));
        else if (this.type == 'e')
            position = new OpenLayers.Pixel(this.map.getSize().w - (wMax + this.offset), this.map.getSize().h / 2 - hMax / 2);
        else if (this.type == 'w')
            position = new OpenLayers.Pixel((0 + this.offset), this.map.getSize().h / 2 - hMax / 2);

//        this.element = OpenLayers.Util.createDiv(this.id, position, this.size);
//        this.element.className = this.displayClass + 'Element';
        this.icon.draw();
        this.icon.display(true);
//        if (this.icon.size.w < this.iconHover.size.w)
//            this.icon.imageDiv.style.marginLeft = ((wMax - wMin)/2) + "px";
//        else
//            this.iconHover.imageDiv.style.marginLeft = ((wMax - wMin)/2) + "px";
//        if (this.icon.size.h < this.iconHover.size.h)
//            this.icon.imageDiv.style.marginTop = ((hMax - hMin)/2) + "px";
//        else
//            this.iconHover.imageDiv.style.marginTop = ((hMax - hMin)/2) + "px";
        OpenLayers.Event.observe(this.div, 'click', this.pan.bindAsEventListener(this));
        OpenLayers.Event.observe(this.div, 'mousedown', this._eatThisEvent);
        OpenLayers.Event.observe(this.div, 'mouseup', this._eatThisEvent);
        OpenLayers.Event.observe(this.div, 'dblclick', this._eatThisEvent);
//        OpenLayers.Event.observe(this.div, 'mousemove', this.showHover.bindAsEventListener(this));
//        OpenLayers.Event.observe(this.div, 'mouseout', this.hideHover.bindAsEventListener(this));
        this.div.appendChild(this.icon.imageDiv);
//        this.div.appendChild(this.iconHover.imageDiv);
        OpenLayers.Util.modifyDOMElement(this.div, null, position);
        OpenLayers.Util.modifyDOMElement(this.icon.imageDiv, null, null, null, "static");
        
        return this.div;
    },

    /**
     * APIMethod: pan
     * Event handler for the pan event.
     *
     * Parameters:
     * e - {Event} The event object.
     *
     */
    pan: function(e) {
        var newLonLat = this.map.getCenter().clone();
        if (this.type == 'n') {
            newLonLat.lat += this.map.getExtent().getHeight() / 2.0;
        } else if (this.type == 's') {
            newLonLat.lat -= this.map.getExtent().getHeight() / 2.0;
        } else if (this.type == 'w') {
            newLonLat.lon -= this.map.getExtent().getWidth() / 2.0;
        } else if (this.type == 'e') {
            newLonLat.lon += this.map.getExtent().getWidth() / 2.0;
        }
        this.map.setCenter(newLonLat);
        OpenLayers.Event.stop(e);
        return false;
    },

    /**
     * Method: _eatThisEvent
     * Private event handler to cancel event handling.
     *
     * Parameters:
     *  e - {Event} The event object.
     */

    _eatThisEvent: function(e) {
        OpenLayers.Event.stop(e);
        return false;
    },

    CLASS_NAME: "EMS.Control.PanButton"

});
