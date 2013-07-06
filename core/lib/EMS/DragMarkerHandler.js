/**
 * Class: EMS.Handler.DragMarkerHandler
 *
 * Handles event calls for draggable features
 *
 * Inherits from:
 *  - <OpenLayers.Handler.Feature> 
 */ 
EMS.Handler.DragMarkerHandler = OpenLayers.Class.create();
EMS.Handler.DragMarkerHandler.prototype =
OpenLayers.Class.inherit(OpenLayers.Handler.Feature, {
	
	 /**
     * Method: handle
     * Trigger the appropriate callback if a feature is under the mouse.
     *
     * Returns:
     * {Boolean} A feature was selected
     */
	handle : function(evt) {
		var node =  evt.target || evt.srcElement;
		var feature = null;
		for (var i = 0; i < this.layer.markers.length; i++) {
			if (node.id.match("Icon")) {
				if (node.id.match("innerImage")) {
					if (this.layer.markers[i].icon.alphaImageDiv.firstChild == node) {
						feature = this.layer.markers[i];
						break;
					}
				} else if (this.layer.markers[i].icon.alphaImageDiv.id == node.id) {
					feature = this.layer.markers[i];
					break;
				}
			}
		}

		var selected = false;
		if (feature) {
			if (this.geometryTypes == null || (feature.geometry != null && (OpenLayers.Util.indexOf(this.geometryTypes, feature.geometry.CLASS_NAME) > -1))
					|| (feature.type != null && (OpenLayers.Util.indexOf(this.geometryTypes, feature.type) > -1))) {
				// over a new, out of the last and over a new, or still on the
				// last
				if (!this.feature) {
					// over a new feature
					this.callback('over', [feature]);
				} else if (this.feature != feature) {
					// out of the last and over a new
					this.callback('out', [this.feature]);
					this.callback('over', [feature]);
				}
				this.feature = feature;
				this.callback('move', [feature]);
				selected = true;
			} else {
				if (this.feature && (this.feature != feature)) {
					// out of the last and over a new
					this.callback('out', [this.feature]);
					this.feature = null;
				}
				selected = false;
			}
		} else {
			if (this.feature) {
				// out of the last
				this.callback('out', [this.feature]);
				this.feature = null;
			}
			selected = false;
		}
		return selected;

	},
	
	
	 /**
     * Method: select
     * Trigger the appropriate callback if a feature is under the mouse.
     *
     * Returns:
     * {Boolean} A feature was selected
     */
	select : function(type, evt){
		return this.handle(evt);
	},

	CLASS_NAME: "EMS.Handler.DragMarkerHandler"
});