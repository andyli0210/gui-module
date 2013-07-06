/**
 * Class: EMS.IndexedLayer 
 *
 * The default layer implementation used by whereis.  Represents the coordinate
 * system in terms of indexed tiles.
 *
 * Inherits from:
 *  - <OpenLayers.Layer.WMS>
 */
 
EMS.IndexedLayer = OpenLayers.Class( OpenLayers.Layer.WMS, {

    DEFAULT_PARAMS: {service: "EMS", version: "1.1.1"},

    initialize: function(name, url, params, options) {

        OpenLayers.Layer.WMS.prototype.initialize.apply(this, arguments);
    },

    /**
     * Method: getURL
     *
     * Calculates the URL used to retrieve a particular tile.
     *
     * Parameters:
     *  bounds - {<OpenLayers.Bounds>} the bounding box of this tile. 
     *
     * Returns:  {String}
     *           A string with the layer's url and parameters and also the
     *           passed-in bounds and appropriate tile size specified as
     *           parameters
     */
    getURL: function (bounds) {
        var imageSize = this.getImageSize();
        var x = (bounds.left - this.map.getMaxExtent().left) / (imageSize.w * this.map.getResolution());
        var y = (bounds.bottom - this.map.getMaxExtent().bottom) / (imageSize.h * this.map.getResolution());
        var z = this.map.getNumZoomLevels() - this.map.getZoom();

        return this.getFullRequestString({X: Math.round(x), Y: Math.round(y), Z: z});
    },

    CLASS_NAME: "EMS.IndexedLayer"

});
