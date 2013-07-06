/**
 * Class: EMS.Control.Copyright 
 *
 * Copyright indicator control. 
 * 
 * Inherits from:
 *  - <OpenLayers.Control> 
 */
EMS.Control.Copyright = OpenLayers.Class( OpenLayers.Control, {
    
    /** Property: element */
    element: null,
    
	/**
	* APIProperty: smallCopyright
	* {Boolean} display smaller copyright image.
	*/
    smallCopyright: false,
    
    /**
     * Constructor: EMS.Control.Copyright
     * Returns a new copyright control.
     * 
     * Parameters:
     *  options:  {<DOMElement>} Options for control.
     */
    initialize: function(options) {
        OpenLayers.Control.prototype.initialize.apply(this, arguments);
    },

    /**
     * APIMethod: destroy
     * Cleanly delete the resources used by this control.
     *
     */
    destroy: function() {
        OpenLayers.Control.prototype.destroy.apply(this, arguments);
        OpenLayers.Event.stopObservingElement(this.div);
    },

    /**
     * APIMethod: draw.
     *
     * Returns:
     * {DOMElement} div containing control.
     */    
    draw: function() {
        OpenLayers.Control.prototype.draw.apply(this, arguments);

        if (!this.element) {
            this.div.left = "";
            this.div.top = "";
            this.div.className = this.displayClass;

			// create the whereis part
			var whereisLogo = OpenLayers.Util.createAlphaImageDiv(
					null, null,
					new OpenLayers.Size(70,22),
					EMS.Util.getImagesLocation() + "whereis-footprint.png"
					);
			whereisLogo.style.position = "relative";

			// LNEMS-880 - clicking this control goes to whereis.com 
			var whereisClickHandler = function(e) {
				// LNEMS880+WHEREIS-449 - use WGS84 x,y and zoom in the URL for HTTP GET. 
				var wgslonlat = new OpenLayers.LonLat(this.map.center.lon, this.map.center.lat).asWGS84();
                window.open("http://www.whereis.com/?y="+wgslonlat.lat+"&x="+wgslonlat.lon+"&z="+this.map.zoom, "_blank");
				OpenLayers.Event.stop(e);
			}
			
            OpenLayers.Event.observe(whereisLogo, "click", whereisClickHandler.bindAsEventListener(this));

            // change mouseover/hover - make it obvious that it is clickable			
			OpenLayers.Event.observe(whereisLogo, "mouseover", function() {
                whereisLogo.style.cursor = "pointer";
            }); 


			// create the copyright and legals image - links to legals page
            if(this.smallCopyright){
	            var legalsImage = OpenLayers.Util.createAlphaImageDiv(
	                    null, null,
	                    new OpenLayers.Size(46,22),
	                    EMS.Util.getImagesLocation() + "legals_sml.png"
	                    );

            }else{
            	 var legalsImage = OpenLayers.Util.createAlphaImageDiv(
	                    null, null,
	                    new OpenLayers.Size(80,22),
	                    EMS.Util.getImagesLocation() + "legals.png"
	                    );
            }
			legalsImage.style.position = "absolute";
			legalsImage.style.top = "0px";
			legalsImage.style.left = "70px";
			
			// clicking this control goes to legals page
            OpenLayers.Event.observe(legalsImage, "click", function(e) {
                window.open("http://www.whereis.com/products/terms-of-use/index.html", "_blank");
                OpenLayers.Event.stop(e);
            });
            
            OpenLayers.Event.observe(legalsImage, "mouseover", function() {
                legalsImage.style.cursor = "pointer";
            }); 

            this.element = this.div;
            this.element.appendChild(whereisLogo);
            this.element.appendChild(legalsImage);
        }
        
        return this.div;
    },
    
    CLASS_NAME: "EMS.Control.Copyright"
});
