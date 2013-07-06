/**
 * Class: EMS.HighlightFeature
 * This control will automatically highlight a feature when the user
 * hovers the mouse over it.
 *
 * Inherits from:
 *  - <OpenLayers.Control>
 */
EMS.HighlightFeature = OpenLayers.Class(OpenLayers.Control, {

    /**
     * @type {Object} The functions that are sent to the handler for callback
     */
    callbacks: null,

    /**
     * @type {Function} Optional function to be called when a feature is selected.
     *                  The function should expect to be called with a feature.
     */
    onSelect: function() {},

    /**
     * @type {Function} Optional function to be called when a feature is unselected.
     *                  The function should expect to be called with a feature.
     */
    onUnselect: function() {},

    initialize: function(layer, options) {
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
        this.callbacks = OpenLayers.Util.extend({
            over: this.overFeature,
            out: this.outFeature
        }, this.callbacks);
        this.layer = layer;
        this.handler = new OpenLayers.Handler.Feature(this, layer, this.callbacks);
        this.selectStyle = options.hoverStyle;

        // override the activate so that it does not change the zindex of the vector
        // layer.
        this.handler.activate = function() {
            if(OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
                this.layerIndex = this.layer.div.style.zIndex;
                return true;
            } else {
                return false;
            }
        }
    },

    /**
     * Called when the feature handler detects a mouse-over on a feature.
     * Only responds if this.hover is true.
     * @param {OpenLayers.Feature.Vector}
     */
    overFeature: function(feature) {
        if (!(OpenLayers.Util.indexOf(this.layer.selectedFeatures, feature) > -1)) {
            this.select(feature);
        }
    },

    /**
     * Called when the feature handler detects a mouse-out on a feature.
     * Only responds if this.hover is true.
     * @param {OpenLayers.Feature.Vector}
     */
    outFeature: function(feature) {
        this.unselect(feature);
    },

    /**
     * Add feature to the layer's selectedFeature array, render the feature as
     * selected, and call the onSelect function.
     * @param {OpenLayers.Feature.Vector} feature
     */
    select: function(feature) {
        // Store feature style for restoration later
        if (feature.originalStyle == null) {
            feature.originalStyle = feature.style;
        }
        this.layer.selectedFeatures.push(feature);
        this.layer.drawFeature(feature, this.selectStyle);
        this.onSelect(feature);
    },

    /**
     * Remove feature from the layer's selectedFeature array, render the feature as
     * normal, and call the onUnselect function.
     * @param {OpenLayers.Feature.Vector} feature
     */
    unselect: function(feature) {
        // Store feature style for restoration later
        if (feature.originalStyle == null) {
            feature.originalStyle = feature.style;
        }
        this.layer.drawFeature(feature, feature.originalStyle);
        OpenLayers.Util.removeItem(this.layer.selectedFeatures, feature);
        this.onUnselect(feature);
    },

    /** Set the map property for the control.
     *
     * @param {OpenLayers.Map} map
     */
    setMap: function(map) {
        this.handler.setMap(map);
        OpenLayers.Control.prototype.setMap.apply(this, arguments);
    },

    /** @final @type String */
    CLASS_NAME: "EMS.HighlightFeature"


});