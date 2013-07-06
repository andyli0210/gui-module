/**
 * Class: EMS.MagicMarkerSorter
 *
 * Extends, and modifies the stacking behaviour of standard markers in the EMS.CombinerCalculator. 
 * MagicMarkerSorter takes a list of EMS.MagicMarker markers and stacks (combines) them, OR repositions their 
 * labels based on the pixel location of all the other magic markers, aka shuffling.
 * Example:
 *
 *    var sorter = new EMS.MagicMarkerSorter(map.getResolution(), magicMarkers);
 *    sorter.calculateCombined(); //to combine overlap
 *    var newMarkers = sorter.shuffle();
 *
 *    for (var i = 0; i< newMarkers.length;i++) {
 *           if (newMarkers[i].combined.length > 1) {
 *               var stackedMarker = new EMS.MagicMarker(newMarkers[i].lonlat, "(+ " + newMarkers[i].combined.length + ")");
 *               stackedMarker.combined = newMarkers[i].combined;
 *               map.markersLayer.addMarker(stackedMarker);
 *           } else {
 *               map.markersLayer.addMarker(newMarkers[i].combined[0]);
 *           }
 *       }
 * 
 * Inherits from:
 *  - <EMS.CombinerCalculator>
 */
EMS.MagicMarkerSorter = OpenLayers.Class(EMS.CombinerCalculator, {


   /**
    * Property: xOverlapTolerance
    * (String) horizontal overlap tolerance, above which will evoke shuffle behaviour
    */
    xOverlapTolerance: 10,
    
   /**
    * Property: yOverlapTolerance
    * (String) horizontal overlap tolerance, above which will evoke shuffle behaviour
    */
    yOverlapTolerance: 5,
    
   /**
    * APIMethod: shuffle
    * Move the magic markers around to minimise overlap
    */
    shuffle: function() {

    	var combinedMarkers = this.calculateCombined();

        //reset slide for all markers because we're not dealing with clones here
        for (var i=0;i<combinedMarkers.length;i++) {
            combinedMarkers[i].combined[0].slide(0);            
        }

        // then we can modify this stuff;
    	var out = [];
    	
    	if (combinedMarkers.length < 2) {
    
            // one or less objects, overlap is impossible.

            out = combinedMarkers;
    	
    	} else if (combinedMarkers.length == 2) {

            // special case, if there are two objects, they should nudge away from each other by an equal amount
            var first = combinedMarkers[0].combined[0];
            var next = combinedMarkers[1].combined[0];
            
            if (this._hasOverlap(first,next)) {
            
                var overlap = this._calculateSlide(first,next);
                first.slide(overlap);
                next.slide(0 - overlap);

                out.push(combinedMarkers[0]);
                out.push(combinedMarkers[1]);
            } else {
                out = combinedMarkers;
            }
    
        } else {

            out = this._recursivelySlideMarkers(combinedMarkers,[]);
                
    	}    

    	return out;

    },
    
    _hasOverlap: function(marker1, marker2) {

        var hasOverlap = false;
        
        var collectiveBounds = new EMS.PixelBounds();

        var marker1Bounds = marker1.getPixelBounds(this.resolution);
        var marker2Bounds = marker2.getPixelBounds(this.resolution);
        
        collectiveBounds.extend(marker1Bounds);
        collectiveBounds.extend(marker2Bounds);

        var xOverlap = marker1Bounds.width() + marker2Bounds.width() - collectiveBounds.width();
        var yOverlap = marker1Bounds.height() + marker1Bounds.height() - collectiveBounds.height();
    
        if ((xOverlap> this.xOverlapTolerance) && (yOverlap > this.yOverlapTolerance)) {
        
            hasOverlap = true;
        
        }
        

        return hasOverlap;    
    },

    /**
     * TODO
     */
    _getDistance: function(marker1,marker2) {

        var i = marker1.getPixelBounds(this.resolution).center();
        var j = marker2.getPixelBounds(this.resolution).center();

        var distX = Math.max(i[0], j[0]) - Math.min(i[0], j[0]);
        var distY = Math.max(i[1], j[1]) - Math.min(i[1], j[1]);

        return Math.sqrt((distX * distX) + (distY * distY));

    },
	
    /**
     * Returns the index of the most crowded MagicMarker
     */
    _getMostCrowdedIndex: function(list) {

        var mostCrowded = null;

        var index = null;

        for (var i=0;i<list.length;i++) {
            
            var totalDistance = 0;

	        for (var j=0; j < list.length;j++) {

                totalDistance += this._getDistance(list[i].combined[0],list[j].combined[0]);

            }

            var averageDistance = totalDistance/list.length;

            if (mostCrowded != null) {

                var isMoreCrowded = mostCrowded > averageDistance;

                if (isMoreCrowded) {
                    mostCrowded = averageDistance;
                    index = i;
                }

            } else {

                mostCrowded = averageDistance;
                index = i;

            }

        }

        return index;

    },

    _getMidpoint: function(marker1, marker2) {

        var collectiveBounds = new EMS.PixelBounds();

        var marker1Bounds = marker1.getPixelBounds(this.resolution);
        var marker2Bounds = marker2.getPixelBounds(this.resolution);
        
        collectiveBounds.extend(marker1Bounds);
        collectiveBounds.extend(marker2Bounds);

        var horizontalOverlap = marker1Bounds.width() + marker2Bounds.width() - collectiveBounds.width();

	   return horizontalOverlap;    
    
    },
    
    /**
     * Returns the number of pixels to the right that marker1 needs to slide to not overlap marker2. 
     * i.e if result is 0 then no slide is required. if the result is negative marker1 needs to slide 
     * to the left
     * 
     */
    _calculateSlide: function(marker1, marker2) {

        var slide = 0;
	
        var collectiveBounds = new EMS.PixelBounds();
        

        var marker1Bounds = marker1.getPixelBounds(this.resolution);
        var marker2Bounds = marker2.getPixelBounds(this.resolution);
        
        collectiveBounds.extend(marker1Bounds);
        collectiveBounds.extend(marker2Bounds);

        var horizontalOverlap = marker1Bounds.width() + marker2Bounds.width() - collectiveBounds.width();

        if (horizontalOverlap > 0) {
            if (0 > marker2Bounds.center()[0] - marker1Bounds.center()[0]) {
                slide = 0 - horizontalOverlap;
            } else {
                slide = horizontalOverlap;	    

            }
        } 
	
        return Math.round(slide/2);

    },

    _recursivelySlideMarkers: function(inList, outList) {

        if (inList.length > 1) {

	        var throughList = [];    
	
	        var indexOfMostCrowded = this._getMostCrowdedIndex(inList);
	        var mostCrowded = inList[indexOfMostCrowded].combined[0];
	
	        for (var i=0;i<inList.length;i++) {
	            if (indexOfMostCrowded != i) {        
		            var markerToCompare = inList[i].combined[0];
		            if (this._hasOverlap(mostCrowded, markerToCompare) == true) {
                        var overlap = this._calculateSlide(mostCrowded,markerToCompare);

                        if (overlap < -60) {
                            overlap = -60;
                        } else if (overlap > 60) {
                            overlap = 60;
                        }
                        markerToCompare.slide(Math.round(overlap));
		            }
		            
                    throughList.push(inList[i]);
	            }
	        }
	        outList.push(inList[indexOfMostCrowded]);
            return this._recursivelySlideMarkers(throughList,outList);
        } else if (inList.length == 1) {
            outList.push(inList[0]);
        } else {
            // hmm
        }
        
        return outList;        
    
    },
        
    /** @final @type String */
    CLASS_NAME: "EMS.MagicMarkerSorter"

})
