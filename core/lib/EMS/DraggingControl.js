/**
 * Class: EMS.Control.DraggingControl
 *
 * Control for all things draggable
 *
 * Inherits from:
 *  - <OpenLayers.Control.DragFeature> 
 */
EMS.Control.DraggingControl = OpenLayers.Class.create();
EMS.Control.DraggingControl.prototype = 
  OpenLayers.Class.inherit( OpenLayers.Control.DragFeature, {
	  
	  /**
	   * APIProperty: startPixel
	   * {OpenLayers.Pixel}: the pixel location of the start of a drag
	   */
	  startPixel: null,
	  
  	  /**
	   * APIProperty: performedDrag
	   * {Boolean}: Did we drag or was it simply a click
	   */
	  performedDrag: false,
	  
  	  /**
  	   * 
	   * APIProperty: oldCallback -deprecated
	   * {String}: The callback function to call when complete. Use onComplete from now on to keep inline
	   * with other openlayers handlers.  
	   */
	  oldCallback: null,
	  
	  
	  /**
	   * Constructor: initialize
	   *
	   * Constructs a new instance of <EMS.Control.DraggingControl>
	   *
	   * Parameters
	   * layer - {OpenLayers.Layer} The layer containing features to be
	   *     dragged.
	   * options - {Object} Optional object whose properties will be set on the
	   *     control.
	   */
	  initialize: function(layer, options) {
	  	OpenLayers.Control.prototype.initialize.apply(this, [options]);
        
    	this.layer = layer;
    	
        this.dragCallbacks = OpenLayers.Util.extend({down: this.downFeature,
            move: this.moveFeature,
            up: this.upFeature,
            out: this.cancel,
            done: this.doneDragging
           }, this.dragCallbacks);
       
        this.featureCallbacks = OpenLayers.Util.extend({over: this.overFeature,
            out: this.outFeature
           }, this.featureCallbacks);
		var handlerOptions = {geometryTypes: this.geometryTypes};
        this.dragHandler = new OpenLayers.Handler.Drag(this, this.dragCallbacks);
        this.featureHandler = new EMS.Handler.DragMarkerHandler(this, this.layer,
                                        this.featureCallbacks,
                                        handlerOptions);
		

        this.handlers = {
            drag: this.dragHandler,
            feature: this.featureHandler
        };
        
        
        this.oldCallback = options.markerDropped;

  	},        
  	
	  /**
	   * Method: moveFeature
	   * Called when the drag handler detects a mouse-move.  Also calls the
	   *     optional onDrag method. Detects if the mouse is dragging or clicking.
	   * 
	   * Parameters:
	   * pixel - {OpenLayers.Pixel} Location of the mouse event.
	   */
	  moveFeature: function(pixel) {
	  	 if (!this.active) return;
	  	 
	  	 if(this.startPixel != null){
	  	 	if(this.preformedDrag){
	  	 		var px = this.feature.icon.px.add(pixel.x - this.lastPixel.x, pixel.y - this.lastPixel.y);
				this.feature.moveTo(px);
				this.lastPixel = pixel;
	  	 		this.onDrag(this.feature, pixel);
	  	 	}else{
	  	 		var deltaX = Math.abs(this.startPixel.x - pixel.x);
	            var deltaY = Math.abs(this.startPixel.y - pixel.y);
		  	 	if ((Math.abs(deltaX) < 7 && Math.abs(deltaY) < 7)) {
		             return;
		        }
		     	this.preformedDrag = true;
	     	    this.onStart(this.feature, pixel);
	  	 	}
	  	 }
		},
		
    /**
     * Method: upFeature
     * Called when the drag handler detects a mouse-up.  Also calls the
     *     optional onComplete method.
     * 
     * Parameters:
     * pixel - {<OpenLayers.Pixel>} Location of the mouse event.
     */
    upFeature: function(pixel) {
    	if (!this.active) return;
    	
    	if(!this.over) {
            this.dragHandler.deactivate();
//            this.feature = null;
            // TBD replace with CSS classes
            this.map.div.style.cursor = "default";
        }
    },
    
    
     /**
     * Method: downFeature
     * Called when the drag handler detects a mouse-down.
     *
     * Parameters:
     * pixel - {<OpenLayers.Pixel>} Location of the mouse event.
     */
    downFeature: function(pixel) {
    	if (!this.active) return;
    	
    	this.preformedDrag = false;
    	
    	this.startPixel = pixel;
        this.lastPixel = pixel;
    },
    
     /**
     * Method: doneDragging
     * Once Dragging is complete the callback is called and a preformedDrag variable is added
     * to the feature for convenience. 
     *
     * Parameters:
     * pixel - {<OpenLayers.Pixel>} Location of the mouse event.
     */
    doneDragging: function(pixel) {
    	if (!this.active) return;
    	
    	if(this.preformedDrag){
    		if(this.feature)
    			this.feature.preformedDrag = true;
    		
    		if(this.oldCallback){
    			this.oldCallback(this.feature, pixel);
    		}else{
    			this.onComplete(this.feature, pixel);
    		}
    	}else{
    		this.cancel();
    	}
    	if(!this.over) {
    		this.feature = null;
    	}
    	
    	this.preformedDrag = false;
    	this.startPixel = null;
    	this.lastPixel = null;
    },
    
    /**
     * Method: cancel
     * Called when the drag handler detects a mouse-out (from the map viewport).
     */
    cancel: function() {
        this.dragHandler.deactivate();
        this.over = false;
    	this.preformedDrag = false;
    	this.startPixel = null;
    	this.lastPixel = null;
    },
		
	CLASS_NAME: "EMS.Control.DraggingControl"
		
  });