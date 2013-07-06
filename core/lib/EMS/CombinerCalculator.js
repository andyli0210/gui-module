/*
 * @requires ems/EMSServices.js
 * @requires ems/EMSUtils.js
 */

/**
 * Class: EMS.CombinerCalculator
 *
 * Takes a set of objects that have a lonlat (EMS.LonLat) and determines which
 * ones should be combined into single points.
 */
EMS.CombinerCalculator = OpenLayers.Class({

    combinePixels: 40,

    /**
     * Constructor: Creates a new CombinerCalculator object.
     *
     * Parematers:
     *   resolution       - {Number} The current resolution of the map.
     *   locatableObjects - {Array(Object)} An away of objects that have a lonlat property.
     *   options          - {Object} an object that contains properties to extend this map with. (eg: combinePixels) 
     */
    initialize: function(resolution, locatableObjects, options) {
        this.resolution = resolution;

        this.locatableObjects = [].concat(locatableObjects);
        this.locatableObjects.sort(function(a,b) {
            return b.lonlat.lon - a.lonlat.lon;
        });

        options = options || {};
        OpenLayers.Util.extend(this, options);
    },

    /**
     * APIMethod: calculateCombined
     * 
     * Returns back the following data structure:
     *
     * (code)
     * [{
     *    lonlat,       // new position or same position marker has not been combined
     *    combined: []  // all objects that have been combined into this new
     *                  // position.  
     * }]
     * (end)
     */
    calculateCombined: function() {
        var results = [];

        for (var i = 0; i < this.locatableObjects.length; i++) {
            var locatable = this.locatableObjects[i];

            if (!locatable.combined) {
                var bounds = new OpenLayers.Bounds(locatable.lonlat.lon, locatable.lonlat.lat, locatable.lonlat.lon, locatable.lonlat.lat);
                var combined = [locatable];
                locatable.combined = true;

                // WARNING: Duplication ahead.  Wanted good abstraction for
                // dealing with this sort of looping.

                // search right
                var testResult, j;
                for (j = i+1; j < this.locatableObjects.length; j++) {
                    testResult = this.testForCloseness(locatable, this.locatableObjects[j], bounds);
                    if (testResult == "combine") {
                        bounds.extend(this.locatableObjects[j].lonlat);
                        this.locatableObjects[j].combined = true;
                        combined.push(this.locatableObjects[j]);
                    } else if (testResult == "break") {
                        break;
                    }
                }

                // search left
                for (j = i-1; j >= 0; j--) {
                    testResult = this.testForCloseness(locatable, this.locatableObjects[j], bounds);
                    if (testResult == "combine") {
                        bounds.extend(this.locatableObjects[j].lonlat);
                        this.locatableObjects[j].combined = true;
                        combined.push(this.locatableObjects[j]);
                    } else if (testResult == "break") {
                        break;
                    }
                }

                results.push({
                    lonlat: bounds.getCenterLonLat(),
                    combined: combined
                });
            }
        }

        // clear out combined flag as we may end up running this again.
        for (var i = 0; i < this.locatableObjects.length; i++) {
            delete this.locatableObjects[i].combined;
        }

        return results;
    },

    // Return one of:
    //   "break" to indicate locatable object is further than this.combinePixels away.
    //   "combine" to indicate locatable object is close enough to combine with origin.
    //   "nomatch" to indicate locatable object is not close enough to combine with origin.
    testForCloseness: function(originLocatable, locatable, bounds) {

        // break out if we're too far away
        if (Math.abs((locatable.lonlat.lon - originLocatable.lonlat.lon) / this.resolution) > this.combinePixels) {
            return "break";
        }

        if (originLocatable != locatable && !locatable.combined) {
            var diffX = Math.abs(bounds.getCenterLonLat().lon - locatable.lonlat.lon) / this.resolution;
            var diffY = Math.abs(bounds.getCenterLonLat().lat - locatable.lonlat.lat) / this.resolution;
            if (diffX < this.combinePixels && diffY < this.combinePixels) {
                return "combine";
            }
        }

        return "nomatch";
    }

});
