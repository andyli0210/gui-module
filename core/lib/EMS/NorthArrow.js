/**
 * Class: EMS.Control.NorthArrow 
 *
 * North arrow indicator.  Simple control that just displays a north arrow.
 *
 * Inherits from:
 *  - <OpenLayers.Control>
 */
EMS.Control.NorthArrow = OpenLayers.Class( OpenLayers.Control, {
    
    /** @type DOMElement */
    element: null,
    
    /**
     * @constructor
     * 
     * @param {DOMElement} options Options for control.
     */
    initialize: function(options) {
        OpenLayers.Control.prototype.initialize.apply(this, arguments);
    },

    /**
     * @type DOMElement
     */    
    draw: function() {
        OpenLayers.Control.prototype.draw.apply(this, arguments);

        if (!this.element) {
            this.div.left = "";
            this.div.top = "";
            this.div.className = this.displayClass;
            var image = OpenLayers.Util.createAlphaImageDiv(
                    null, null,
                    new OpenLayers.Size(11,18),
                    EMS.Util.getImagesLocation() + "north_arrow.png"
                    );
            image.style.position = "relative";
            this.element = this.div;
            this.element.appendChild(image);
        }
        
        return this.div;
    },

    /** @final @type String */
    CLASS_NAME: "EMS.Control.NorthArrow"
});
