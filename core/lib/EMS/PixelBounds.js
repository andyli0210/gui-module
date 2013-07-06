/**
 * Class: EMS.PixelBounds
 * Pixel counterpart of OpenLayers.Bounds object. Used by EMS.MagicMarkerSorter.
 */
EMS.PixelBounds = OpenLayers.Class( {

    /**
     * Property: left
     * {Number}
     */
    left: null,

    /**
     * Property: bottom
     * {Number}
     */
    bottom: null,

    /**
     * Property: right
     * {Number}
     */
    right: null,

    /**
     * Property: top
     * {Number}
     */
    top: null,    

   /** 
    * Constructor: EMS.PixelBounds
    * Parameters:
    * left - {<Number>}  left
    * bottom - {<Number>}  bottom
    * top - {<Number>}  top
    * right - {<Number>}  right
    */
    initialize: function(left, bottom, top, right) {

        if (left != null) 
            this.left = left;
        if (bottom != null)
            this.bottom = bottom;
        if (top != null) 
            this.top = top;
        if (right != null) 
            this.right = right;
    },
    
    /**
     * APIMethod: extend
     * Extend the PixelBounds to include the point, lonlat, or bounds specified.
     *     Note, this function assumes that left < right and bottom > top.
     * Parameters: 
     * pixelable - {Object} Can be Pixel or PixelBounds
     */
    extend: function(pixelable) {
    
        if (pixelable.CLASS_NAME == 'EMS.PixelBounds') {

            if (this.left == null) {
                this.left = pixelable.left;
            } else {
                if ((pixelable.left != null) && pixelable.left < this.left) {
                    this.left = pixelable.left;
                }
            }

            if (this.right == null) {
                this.right = pixelable.right;
            } else {
                if ((pixelable.right != null) && pixelable.right > this.right) {
                    this.right = pixelable.right;
                }
            }

            if (this.bottom == null) {
                this.bottom = pixelable.bottom;
            } else {
                if ((pixelable.bottom != null) && pixelable.bottom > this.bottom) {
                    this.bottom = pixelable.bottom;
                }
            }

            if (this.top == null) {
                this.top = pixelable.top;
            } else {
                if ((pixelable.top != null) && pixelable.top < this.top) {
                    this.top = pixelable.top;
                }
            }
            
        } else if (pixelable.CLASS_NAME == 'OpenLayers.Pixel') {

            if (this.left == null) {
                this.left = pixelable.x;
            } else {
                if (pixelable.x < this.left) {
                    this.left = pixelable.x;
                }
            }

            if (this.right == null) {
                this.right = pixelable.x;
            } else {
                if (pixelable.x > this.right) {
                    this.right = pixelable.x;
                }
            }

            if (this.bottom == null) {
                this.bottom = pixelable.y;
            } else {
                if (pixelable.y > this.bottom) {
                    this.bottom = pixelable.y;
                }
            }

            if (this.top == null) {
                this.top = pixelable.y;
            } else {
                if (pixelable.y < this.top) {
                    this.top = pixelable.y;
                }
            }
        
        } else {
        
            throw new Error("invalid pixelable type");        
        
        }
    
    },
    
    center: function() {
    
        return [Math.round((this.right + this.left)/2),Math.round((this.bottom + this.top)/2)];
    
    },

    /**
     * APIMethod: width
     * Calculates the width of this object.
     */
    width: function() {

        if ((this.right != null) && (this.left != null)) {
            return this.right - this.left;
        } 
        
        return 0;
        
    },

    /**
     * APIMethod: height
     * calculates the height of this object.
     */
    height: function() {

        if ((this.bottom != null) && (this.top != null)) {
            return this.bottom - this.top;
        } 
        
        return 0;
    
    },
    
    /** @final @type String */
    CLASS_NAME: "EMS.PixelBounds"
});
