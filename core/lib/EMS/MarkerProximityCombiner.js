/**
 * @requires ems/EMSServices.js
 * @requires ems/EMSUtils.js
 * @requires ems/MarkerGroup.js
 *
 * Class: EMS.MarkerProximityCombiner
 *
 * Deprecated: Use <EMS.CombinerCalculator> instead.
 *
 * Important: When you use this to create a new set of markers it
 * is the clients responsibility to destroy those markers.
 */
EMS.MarkerProximityCombiner = OpenLayers.Class({

    combinePixels: 40,
    groups: null,

    // Standard multigroup icon factory.
    multigroupIconFactory: function(markers) {
        return EMS.Services.StandardIcons.babushka(this.map.tilePath, markers.length);
    },

    // todo: we don't really need a map here.  just the resolution
    initialize: function (map, groups, options) {
        this.map = map;
        this.groups = groups;
        options = options || {};
        OpenLayers.Util.extend(this, options);

        var iter = this._markerIterator();
        var marker = null;                              
        while (marker = iter()) {
            marker.combined = null;
        }
    },

    /**
     * Deprecated.  Calculating markers this way causes leaks.  The trouble is
     * the that markers end up being hidden inside the combinedMarkers property
     * and it gets confusing what has been created. 
     */
    getMarkers: function() {
        if (!this.markers) {
            this._calculateMarkers();
        }
        return this.markers;
    },

    destroy: function() {
        this.map = null;
        this.groups = null;
    },

    _calculateMarkers: function() {
        this.markers = [];
        var allMarkers = new Array();
        for (var i = 0; i < this.groups.length; i++) {
            allMarkers = allMarkers.concat(this.groups[i].markers);
        }
        allMarkers.sort(function(a,b) {
            return b.lonlat.lon - a.lonlat.lon;
        });

        //var iter1 = this._markerIterator();
        var marker, candidateMarker;
        var count = 0;

        var groupIdx1 = 0, markerIdx1 = 0;

        for (i = 0; i < allMarkers.length; i++) {
            marker = allMarkers[i];

            if (!this._markerVisible(marker)) continue;
            if (!marker.combined) {
                var startingMarker = marker;
                var combinedMarkers = [this._copyMarker(startingMarker)];
                var bounds = new OpenLayers.Bounds(marker.lonlat.lon, marker.lonlat.lat, marker.lonlat.lon, marker.lonlat.lat);

                function testMarker(candidateMarker) {
                    if (!this._markerVisible(candidateMarker)) return true;

                    // break out if we're too far away
                    if (Math.abs((candidateMarker.lonlat.lon - marker.lonlat.lon) / this.map.getResolution()) > this.combinePixels) {
                        return false;
                    }

                    if (startingMarker != candidateMarker && !candidateMarker.combined) {
                        var diffX = Math.abs(bounds.getCenterLonLat().lon - candidateMarker.lonlat.lon) / this.map.getResolution();
                        var diffY = Math.abs(bounds.getCenterLonLat().lat - candidateMarker.lonlat.lat) / this.map.getResolution();
                        if (diffX < this.combinePixels && diffY < this.combinePixels) {
                            combinedMarkers.push(this._copyMarker(candidateMarker));
                            candidateMarker.combined = true;
                            bounds.extend(candidateMarker.lonlat);
                        }
                    }

                    return true;
                };

                // search right
                for (var j = i+1; j < allMarkers.length; j++) {
                    candidateMarker = allMarkers[j];

                    if (! OpenLayers.Function.bind(testMarker, this)(candidateMarker)) {
                        break;
                    }
                }

                // search left
                for (j = i-1; j >= 0; j--) {
                    candidateMarker = allMarkers[j];

                    if (! OpenLayers.Function.bind(testMarker, this)(candidateMarker)) {
                        break;
                    }
                }

                startingMarker.combined = true;
                if (combinedMarkers.length == 1) {
                    this.markers.push(this._copyMarker(startingMarker));
                } else {
                    this.markers.push(this._makeCombinedMarker(combinedMarkers, bounds));
                }
            }
            count++;

        }
    },

    _makeCombinedMarker: function(combinedMarkers, bounds) {
        var lastGroupName = null;
        var multigroup = false;
        for (var i = 0; i < combinedMarkers.length; i++) {
            if (lastGroupName != null && combinedMarkers[i].group.name != lastGroupName) {
                multigroup = true;
            }
            lastGroupName = combinedMarkers[i].group.name; 
        }
        var icon;
        if (multigroup) {
            icon = this.multigroupIconFactory(combinedMarkers);
        } else {
            icon = combinedMarkers[0].group.iconFactory(combinedMarkers);
        }
        var lonlat = bounds.getCenterLonLat();
        var marker = new OpenLayers.Marker(lonlat, icon);
        marker.combinedMarkers = combinedMarkers;
        marker.combinedBounds = bounds;

        return marker;
    },

    _copyMarker: function(marker) {
        var newMarker = new OpenLayers.Marker(marker.lonlat.clone(), marker.icon.clone());
        newMarker.group = marker.group;
        return newMarker;
    },

    _markerVisible: function(marker) {
        if (marker.icon.div) {
            if (OpenLayers.Element.visible(marker.icon.div)) {
                return true;
            }
        } else if (marker.icon.imageDiv) {
            if (OpenLayers.Element.visible(marker.icon.imageDiv)) {
                return true;
            }
        }
        return false;
    },

    // deprecated
    _markerIterator: function() {

        var groupIdx = 0;
        var markerIdx = 0;
        var groups = this.groups;

        return function() {
            while (true) {
                if (groupIdx < groups.length) {
                    var group = groups[groupIdx];
                    var marker = group.markers[markerIdx++];
                    if (marker) {
                        // this is not nice.  asking the icon if it's visible
                        // would be better.  
                        if (marker.icon.div) {
                            if (OpenLayers.Element.visible(marker.icon.div)) {
                                return marker;
                            }
                        } else if (marker.icon.imageDiv) {
                            if (OpenLayers.Element.visible(marker.icon.imageDiv)) {
                                return marker;
                            }
                        }
                    } else {
                        groupIdx++;
                        markerIdx = 0;
                    }
                } else {
                    return null;
                }
            }
        }
    }
});
