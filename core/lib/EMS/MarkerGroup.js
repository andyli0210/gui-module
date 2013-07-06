/**
 * @requires ems/EMSUtils.js
 *
 * Class: EMS.MarkerGroup 
 *
 * Deprecated.  Use <EMS.CombinerCalculator>.
 *
 */
EMS.MarkerGroup = OpenLayers.Class({
    markers: null,

    name: "",

    // function to create an icon.  Takes list of markers as an argument.
    iconFactory: null,

    initialize: function(name, iconFactory) {
        this.name = name;
        this.iconFactory = iconFactory;
        this.markers = [];
    },

    /*
     * The object you pass here can be an OpenLayers.Marker object
     * however it's only necessary to have an object that contains
     * an 'icon' and 'lonlat' slot.
     */
    addMarker: function(marker) {
        marker.group = this;
        this.markers.push(marker);
    }
});
