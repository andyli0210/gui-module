

/**
 * Class: EMS.Control.Scale
 *
 * Displays a scalebar control on the screen showing the current scale.
 *
 * Inherits from:
 *  - <OpenLayers.Control>
 */
EMS.Control.Scale = OpenLayers.Class( OpenLayers.Control, {

    /**
     * Property: element
     * {DOMElement} the main DOMElement that contains the overview control.
     */    
    element: null,
    
     /**
     * Property: bottom
     * {String} Override the default position of the scale bar. 
     */ 
    bottom: null,

    /**
     * Constructor: initialize
     * Constructs a new instance of the scalebar control.
     *
     * Parameters:
     *  element - {DOMELEMENT} the element to place the scalebar into
     *  options - {Object} Extra options to override existing properties or add new ones.
     *
     */
    initialize: function(element, options) {
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
        this.element = OpenLayers.Util.getElement(element);        
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
        if (!this.element) {
            this.element = document.createElement("div");
            this.div.className = this.displayClass;
			if(this.bottom != undefined){
	            this.div.style.bottom = this.bottom;}
            this.element.style.fontSize="smaller";
            this.div.appendChild(this.element);
        }
        this.map.events.register( 'moveend', this, this.updateScale);
        this.updateScale();
        return this.div;
    },
   
    updateScale: function() {
        if (!this.map) return;
        if (!this.map.getExtent()) return;
        var latitudeAdjustment =  Math.cos(EMS.Util.sgp4ToLat(((this.map.getExtent().bottom + this.map.getExtent().top) / 2)) * Math.PI/180);
        var scale = latitudeAdjustment * 6378137.0  * Math.PI * this.map.getExtent().getWidth() / 180.0;
        if (!scale) return;

        function log10(x) {
            return Math.log(x)/Math.LN10
        }

        function magnitude(x) {
            return Math.pow(10, Math.floor(log10(x) + 0.0000001));
        }

        var quarterScale = scale / 4;
        var quarterWidth = this.map.getSize().w / 4;

        var scalePerPixel = this.map.getSize().w / scale;

        var roundedScale = Math.round(quarterScale / magnitude(quarterScale)) * magnitude(quarterScale);
        var roundedWidth = roundedScale * scalePerPixel;

        if (roundedScale < 1000) {
            roundedScale = "&nbsp;" + roundedScale + "m";
        } else {
            roundedScale = "&nbsp;" + (roundedScale / 1000) + "km";
        }
        
        // use white text for photo map to improve contrast
        var textColor
        if (this.map.whereis_street_wms.getVisibility()) {
        	textColor = "black";	
        } else {
        	textColor = "white";	
        }
        
        this.element.innerHTML = "<div class='" + this.displayClass + "Text' style='width: " + roundedWidth + "px ; color:" + textColor + "'>" + roundedScale + "</div>";
    }, 
    
    CLASS_NAME: "EMS.Control.Scale"
});

