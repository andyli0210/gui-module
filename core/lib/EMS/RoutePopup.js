/**
 *
 * Class: EMS.RoutePopup
 *
 * A popup that can be used when a route is on the map. 
 * It displays a small map zoomed in on the selected driving 
 * instruction with the route line showing. There are Next and 
 * Previous links that take the popup to the next or 
 * previous driving instruction as well as a ZoomTo link.  
 *
 * Example:
 * (code)
 * popup = new EMS.RoutePopup(routeResults, 0, 5);
 * map.addPopup(popup);
 * (end)
 */
EMS.RoutePopup = OpenLayers.Class( EMS.Popup, {

    /**
     * APIProperty: EVENT_TYPES
     * {Array} Supported application event types.
     */
    EVENT_TYPES: ["shown", "hidden", "next", "previous"], 
    
    /**
    * APIProperty: routeDetail
    * {Object} A result returned by a EMS.Services.RouteManager.route() 
    */
    routeDetail: null,
    
    /**
    * APIProperty: routeMap
    * {DOMElement} The small map div.
    */
   	routeMap: null,
    
    /**
    * APIProperty: currentRoute
    * {Number} The current route number being displayed by the popup. For example a route with 
    * 4 waypoints contains 3 routes. 
    */
    currentRoute: 0,
    
    /**
    * APIProperty: currentSegment
    * {Number} The current segment of the current route. A segment is one driving instruction.
    */
    currentSegment: 0,
    
    /**
    * APIProperty: mapZoomLevel
    * {Number} The mini map zoom level
    */
    mapZoomLevel: 13,
    
    /**
    * APIProperty: zoomToLevel
    * {Number} The zoomTo zoom level
    */
    zoomToLevel: 13,
    
    /**
    * APIProperty: showRouteMarkers
    * {Boolean} Show start, end and via markers in the mini map
    */
    showRouteMarkers: true,
    
    
     /**
     * Constructor: initialize
     *
     * Constructs a new instance of <EMS.RoutePopup>
     *
     * Properties:
     *  routeDetail - {Object} A result returned by a EMS.Services.RouteManager.route().
     *  routeNumber - {Number} Optional - The route to be displayed
     *  segmentNumber - {Number} Optional - The segment to be displayed
     */
    initialize: function(routeDetail, routeNumber, segmentNumber, showRouteMarkers) {
  		if(routeNumber){
  			this.currentRoute = routeNumber;
  		}
  		if(segmentNumber){
  			this.currentSegment = segmentNumber;
  		}
  		if(showRouteMarkers){
  			this.showRouteMarkers = showRouteMarkers;
  		}
  		
		this.routeDetail = routeDetail;
		
  		EMS.Popup.prototype.initialize.apply(this, ["emsRoutePopup", this.getSegmentLonLat(), new OpenLayers.Size(250, 260),  " ", null , true]);
  	},
  	
  	/**
     * APIMethod: getCurrentSegment
     * 
     * Grabs the current segment. 
     * 
     */
    getCurrentSegment: function(){
    	return this.getCurrentRoute().routeSegments[this.currentSegment];
    },
    
    /**
     * APIMethod: getCurrentRoute
     * 
     * Grabs the current route.    
     * 
     */
    getCurrentRoute: function(){
    	return this.routeDetail.routes[this.currentRoute];
    },
  	
  	 /**
     * APIMethod: draw
     * Constructs contents of the control.
     *
     * Returns:
     * A reference to a div that represents this control.
     */
    draw: function(px) {
 		var div = EMS.Popup.prototype.draw.apply(this, arguments);
 		
 		this.instructionsDiv  = OpenLayers.Util.createDiv(null, new OpenLayers.Pixel(15,10), new OpenLayers.Size(215, 42), null, "absolute");
 		this.instructionsDiv.innerHTML =  this.getSegmentInstructions();
 		this.instructionsDiv.className = "emsRouteInstructions";
 		this.contentDiv.appendChild(this.instructionsDiv);
 		
 		this.nextPreviousLinks  = OpenLayers.Util.createDiv(null, new OpenLayers.Pixel(15,52), new OpenLayers.Size(220, 30), null, "absolute");
 		this.nextPreviousLinks.className = "emsRouteLinks";
 		
 		this.previous =  document.createElement('a');
 		if(this.hasPrevious()){
        	this.previous.className = "emsPreviousLink";
        }else{
        	this.previous.className = "emsPreviousLink emsDisabled";
        }
        
        this.previous.appendChild(document.createTextNode("<< Previous"));
        
        
        this.nextPreviousLinks.appendChild(this.previous);
        
        OpenLayers.Event.observe(this.previous, "mouseover", function(){this.className= this.className + ' emsHover';});
        OpenLayers.Event.observe(this.previous, "mouseout", function(){this.className=this.className.replace('emsHover','');});
        OpenLayers.Event.observe(this.previous, "click", OpenLayers.Function.bind(this.goPrevious, this));
        
 		this.next =  document.createElement('a');
 		if(this.hasNext()){
        	this.next.className = "emsNextLink";
        }else{
			this.next.className = "emsNextLink emsDisabled";
        }
        
        this.next.appendChild(document.createTextNode("Next >>"));

        
        this.nextPreviousLinks.appendChild(this.next);
        
        OpenLayers.Event.observe(this.next, "mouseover", function(){this.className= this.className + ' emsHover';});
        OpenLayers.Event.observe(this.next, "mouseout", function(){this.className=this.className.replace('emsHover','');});
        OpenLayers.Event.observe(this.next, "click", OpenLayers.Function.bind(this.goNext, this));
        
 		this.contentDiv.appendChild(this.nextPreviousLinks);
 		
 		this.mapDiv = OpenLayers.Util.createDiv("mapDiv", new OpenLayers.Pixel(5,67), new OpenLayers.Size(234, 160), null, "absolute");
        this.mapDiv.className = "emsRouteMap";
        this.contentDiv.appendChild(this.mapDiv)

        this.routeMap = new EMS.Services.Map(this.mapDiv,
        {
              onInit: OpenLayers.Function.bind(this.mapInit, this),
              controls: [],
              layers: [],
              noping: true,
              zoom: this.mapZoomLevel,
              center: this.lonlat
        });
        
        this.zoomToLink  = OpenLayers.Util.createDiv(null, new OpenLayers.Pixel(15,235), new OpenLayers.Size(220, 20), null, "absolute");
 		this.zoomToLink.className = "emsRouteLinks";
 		
 		this.zoomTo =  document.createElement('a');
 		if(this.map.getZoom() < this.zoomToLevel){
 			this.zoomTo.className = "emsZoomToLink";
 		}else{
 			this.zoomTo.className = "emsZoomToLink emsDisabled";
 		}
        this.zoomTo.appendChild(document.createTextNode("Zoom to"));
        
        this.zoomToLink.appendChild(this.zoomTo);
        
        OpenLayers.Event.observe(this.zoomTo, "mouseover", function(){this.className= this.className + ' emsHover';});
        OpenLayers.Event.observe(this.zoomTo, "mouseout", function(){this.className=this.className.replace('emsHover','');});
        OpenLayers.Event.observe(this.zoomTo, "click", OpenLayers.Function.bind(this.goZoomTo, this));
		
		this.contentDiv.appendChild(this.zoomToLink);
		
		return div;

    },
    
     /**
     * APIMethod: updateSegment
     * 
     * Grabs the new segment to be displayed and updates the textualInstruction and the minimap. 
     * If the segment is off screen it will reposition the main map. 
     */
    updateSegment: function(event){
		this.instructionsDiv.innerHTML = this.getSegmentInstructions();
		this.routeMap.setCenter(this.lonlat, this.mapZoomLevel);
		
		if ((this.lonlat) && (this.map)) {
			if(!(this.map.getExtent().containsLonLat(this.lonlat))){
	            this.map.setCenter(this.lonlat);
            }	
           	var px = this.map.getLayerPxFromLonLat(this.lonlat);
            this.moveTo(px);
        }
        
        if(this.hasPrevious()){
        	this.previous.className = "emsPreviousLink";
        }else{
			this.previous.className = "emsPreviousLink emsDisabled";
        }
        
        if(this.hasNext()){
        	this.next.className = "emsNextLink";
        }else{
			this.next.className = "emsNextLink emsDisabled";
        }
        
        if(this.map.getZoom() < this.zoomToLevel){
 			this.zoomTo.className = "emsZoomToLink";
 		}else{
 			this.zoomTo.className = "emsZoomToLink emsDisabled";
 		}
    },
    
     /**
     * APIMethod: goZoomTo
     * 
     * Centres the main map on the segment and zooms to street level. Then removes this popup.
     */
 	goZoomTo: function(event){
 		if(this.map.getZoom() < this.zoomToLevel){
	 		this.map.setCenter(this.lonlat, this.zoomToLevel);
	 		this.map.removePopup(this);
	 		
	 		this.events.triggerEvent("hidden");
 		}
 	},
 	
 	 /**
     * APIMethod: goNext
     * 
     * Moves to the next segment in the route.
     */
    goNext: function(event){
    	if(this.currentSegment + 1 == this.getCurrentRoute().routeSegments.length ){
    		if(this.currentRoute + 1 != this.routeDetail.routes.length){
    			this.currentRoute++;
    			this.currentSegment = 0;
    		}else{
    			return;
    		}
    	}else
    	{
    		this.currentSegment++;
    	}
    	this.lonlat = this.getSegmentLonLat(); 
    	this.updateSegment();
    	
    	this.events.triggerEvent("next");
    },
    
     /**
     * APIMethod: goPrevious
     * 
     * Moves to the previous segment in the route.
     */
    goPrevious: function(event){
    	if(this.currentSegment == 0 ){
    		if(this.currentRoute != 0){
    			this.currentRoute--;
    			this.currentSegment = this.getCurrentRoute().routeSegments.length - 1;
    		}else{
    			return;
    		}
    	}else{
    		this.currentSegment--;
    	}
    	
    	this.lonlat = this.getSegmentLonLat(); 
    	this.updateSegment();
    	
    	this.events.triggerEvent("previous");
    	
    },
    
        
    hasNext: function(){
    	if(this.currentRoute == (this.routeDetail.routes.length -1) && this.currentSegment == (this.getCurrentRoute().routeSegments.length -1)){
   			return false;
    	}
    	return true;
    },
    
    hasPrevious: function(){
    	if(this.currentSegment == 0 && this.currentRoute == 0){
    		return false;
    	}
    	return true;
    },
    
    /**
     * APIMethod: mapInit
     * 
     * Mini Map init. Adds the markers and vector layers to the map. It also setup the routeManager with 
     * the data it needs to make routePart requests. 
     */
    mapInit: function(map) {
        var markersLayer = new OpenLayers.Layer.Markers( "Route Markers" );
        var whereis_street_wms = new EMS.IndexedLayer("Whereis Route Popup",
                    this.map.tilePath + "/tile?", {layers: 'street', format: "image/gif", cache: "TRUE", version: '1.0.2'}, {displayOutsideMaxExtent: true, visible: true});
        this.routeMap.markersLayer = markersLayer;
        this.routeMap.whereis_street_wms = whereis_street_wms;
        this.routeMap.addLayer(whereis_street_wms);
        
        if (OpenLayers.Renderer.SVG.prototype.supported() || OpenLayers.Renderer.VML.prototype.supported()) {
           this.routeVectorLayer = new OpenLayers.Layer.Vector( "Route" );
           this.routeMap.addLayer(this.routeVectorLayer);
        }
        this.routeMap.addLayer(markersLayer);
        
        if(this.showRouteMarkers){
	        for(var i = 0; i < this.routeDetail.routes.length; i++) {
		        for(var j = 0; j < this.routeDetail.routes[i].routeSegments.length; j++) {
		        	if(i == 0 && j == 0){
			        	seg = this.routeDetail.routes[i].routeSegments[j];
						var marker = new OpenLayers.Marker(new EMS.LonLat(seg.centre.longitude, seg.centre.latitude).clone(),EMS.Services.StandardIcons.start());	
						markersLayer.addMarker(marker);
		        	}
		        	if(i != 0 && j == 0){
		        		seg = this.routeDetail.routes[i].routeSegments[j];
						var marker = new OpenLayers.Marker(new EMS.LonLat(seg.centre.longitude, seg.centre.latitude).clone(),EMS.Services.StandardIcons.vias[i-1]());	
						markersLayer.addMarker(marker);
		        	}
		        	if((i + 1 == this.routeDetail.routes.length) && (j + 1 == this.routeDetail.routes[i].routeSegments.length)){
		        		seg = this.routeDetail.routes[i].routeSegments[j];
						var marker = new OpenLayers.Marker(new EMS.LonLat(seg.centre.longitude, seg.centre.latitude).clone(),EMS.Services.StandardIcons.end());	
						markersLayer.addMarker(marker);
		        	}
		        }
		    }
	    }

        
        // The routeManager will now listen for moveend events on the map. 
        this.routeManager = new EMS.Services.RouteManager(this.routeMap);
        this.routeManager.routeVectorLayer = this.routeVectorLayer;
        this.routeManager.itin = new EMS.Services.Itin();
        this.routeManager._setupMapRoute(this.routeDetail);
        
    },
        
     /**
     * APIMethod: getSegmentLonLat
     * 
     * Get current segements lonlat.    
     * 
     */
    getSegmentLonLat: function(){
    	return new EMS.LonLat(this.getCurrentSegment().centre.longitude, this.getCurrentSegment().centre.latitude);
    },
    
     /**
     * APIMethod: getSegmentInstructions
     * 
     * Get current segements instructions. Override this to change default format.    
     * 
     */
    getSegmentInstructions: function(){
    	var instruction = "<span>"+ (this.currentSegment + 1) + ". " + this.getCurrentSegment().textualInstruction + "</span>";
		// Some clean up of the text
		instruction = instruction.replace("ROUNDABOUT", "roundabout");
		instruction = instruction.replace("Start at", "Continue on");
		instruction = instruction.replace("Stop at", "Arrive at");
		
		while(true) {
			instruction = instruction.replace("_", "<strong>");
			instruction = instruction.replace("_", "</strong>");
			
			if(instruction.indexOf("_") == -1) {
				break;
			}
		}    
		
		if (this.getCurrentSegment().travelTime != 0) {
			instruction = instruction + "<br /><span>Travel " + this.formatLength(this.getCurrentSegment().metres);
			instruction = instruction + " (" + this.formatTime(this.getCurrentSegment().travelTime) + ")</span>";
		}
    
    	return instruction;
    },

   	/**
	 * Returns a length as a formatted string.
	 * 
	 * @param {float} metres
	 * @return {float}
	 */
	formatLength: function(metres) {
		var value = Math.round((metres/1000) * 10) / 10;
		if (value < 0.1) {
			value = Math.round(metres); 
			value += "m";
		} else {
			value += "km";
		}
		return value;
	},
	
	/**
	 * Returns time string, formatted into hours, minutes and seconds.
	 * 
	 * @param {int} seconds
	 * @return {float}
	 */
	formatTime: function(seconds) {
		var value = Math.round((seconds/60) * 10) / 10;
		if (value < 1) {
			value = Math.round(seconds);
			value += "sec";
		} else if (value > 60) {
			value = Math.floor(value/60) + "hr " + Math.round(value % 60) + "min";
		} else {
			value = Math.round(seconds/60);
			value += "min";
		}

		return value;
	},
	    
   
     /**
     * APIMethod: destroy
     * 
     * Kill this popup and its family
     */
    destroy: function() {
        if (this.map != null) {
            this.map.removePopup(this);
            this.routeMap.destroy();
            this.routeMap = null;
        }
        this.routeManager.clearRoute();
		this.routeDetail = null; 
        this.events.destroy();
        this.events = null;
        this.div = null;
    }
    
});



