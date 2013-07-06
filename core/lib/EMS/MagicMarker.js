/**
 * Class: EMS.MagicMarker
 *
 * Magic Marker is a type of enhanced marker that looks sort of like a speech bubble from a cartoon.
 * It includes a text label, and has the capabilty to 'nudged' horizontally. Can be used just like a regular marker.
 * Example:
 *
 *     var marker = new EMS.MagicMarker(new EMS.LonLat(144.748,-37.537), "Hourly Rate Hotel");
 *     map.markersLayer.addMarker(marker);
 *
 * See mapexamples/magicmarkers.html for further example.
 *
 * Inherits from:
 *  - <OpenLayers.Marker>
 */
EMS.MagicMarker = OpenLayers.Class( OpenLayers.Marker, {

   /**
    * Property: div
    * (String) generated Div
    */
    div: null,
    
   /**
    * Property: label
    * (String) label for the marker
    */
    label: null,

   /**
    * Property: offset
    * (Number) pixel offset of MagicMarker
    */
    offset: null, 
    
   /**
    * Property: popupOffset
    * (Object) -size OpenLayers.Size, -offset OpenLayers.Pixel
    */
    popupOffset: null, 

   /**
    * Property: pushTolerance
    * (Number) pixel overlap to force push behaviour
    */
    pushTolerance: 20,

   /**
    * Property: slidePx
    * (Number) amount of pixels we expect this baby to slide. Default is 0
    */
    slidePx: 0,
    
   /**
    * Property: stackTolerance
    * (Number) pixel overlap to force stack behaviour
    */
    stackTolerance: 30,
    
   /** 
    * Constructor: EMS.MagicMarker
    * Parameters:
    * lonlat - {<OpenLayers.LonLat>} the position of this marker
    * label - {<String>} the label for the marker
    * offset - {<Number>} the offset of this marker. Range -65 to 65, 0 = centered 
    */
    initialize: function(lonlat, label, offset) {
        this.lonlat = lonlat;
        this.label = label;
        this.offset = offset
        
        // set up icon to allow compatibility with markers layer
        this.icon = {}
        this.icon.imageDiv = this.generateHTML();
        this.div = this.icon.imageDiv;

        this.events = new OpenLayers.Events(this, this.div, null);
        this.popupOffset = {size: new OpenLayers.Size(150,47), offset: new OpenLayers.Pixel(-75 + this.slidePx,47)}
    },

   /**
    * Method: draw
    * Override of the Marker draw function, with pixel location corrected.
    */
    draw: function(px, sz) {

    	var newPx = new OpenLayers.Pixel(px.x - 75 + this.slidePx, px.y + 47);
        OpenLayers.Util.modifyDOMElement(this.div, null, newPx, sz);
        // return this.generateHTML(this.label);
        return this.div;
    }, 
    
   /**
    * Method: destroy
    * Override of the Marker draw function, with pixel location corrected
    */
    destroy: function() {
        this.map = null;

        this.events.destroy();
        this.events = null;

        if (this.icon != null) {
        
            var parent = this.icon.imageDiv.parentNode;
            parent.removeChild(this.icon.imageDiv);
            this.icon = null;
        }
    },
    
    generateSVG: function() {
    
        //TODO
    
    
    },

    /**
    * Method: generateHTML
    * Move the marker to the new location.
    *
    * Parameters:
    * label - {String} the label for the MagicMarker
    */
    generateHTML: function() {

        var div = OpenLayers.Util.createDiv();
        
        var imgPath = EMS.Util.getImagesLocation();

        // fix label
        var label = (this.label.length <= 18) ? this.label : (this.label.substring(0,15) + '&hellip;');

		//add panels
        var leftPanel = OpenLayers.Util.createAlphaImageDiv('mmLeftPanel', new OpenLayers.Pixel(0,0), new OpenLayers.Size(13,47), imgPath + 'mm_left.png', null, null, null, null, null);
        var leftPad = OpenLayers.Util.createAlphaImageDiv('mmLeftPad', new OpenLayers.Pixel(13,0), new OpenLayers.Size(52-this.slidePx,47), imgPath + 'mm_pad.png', null, null, null, null, null);
        var centerPanel = OpenLayers.Util.createAlphaImageDiv('mmCenterPanel', new OpenLayers.Pixel(65-this.slidePx,0), new OpenLayers.Size(19,47), imgPath + 'mm_point.png', null, null, null, null, null);
        var rightPad = OpenLayers.Util.createAlphaImageDiv('mmRightPad', new OpenLayers.Pixel(84-this.slidePx,0), new OpenLayers.Size(53+this.slidePx,47), imgPath + 'mm_pad.png', null, null, null, null, null);
        var rightPanel = OpenLayers.Util.createAlphaImageDiv('mmRightPanel', new OpenLayers.Pixel(137,0), new OpenLayers.Size(13,47), imgPath + 'mm_right.png', null, null, null, null, null);
    
        div.appendChild(leftPanel);
        div.appendChild(leftPad);
        div.appendChild(centerPanel);
        div.appendChild(rightPad);
        div.appendChild(rightPanel);
	
        //TODO recenter pointy bit

        var labelDiv = OpenLayers.Util.createDiv();
    
        labelDiv.style.position = 'absolute';
        labelDiv.style.top = '8px';
        labelDiv.style.left= '0';
        labelDiv.style.overflow = 'hidden';
        labelDiv.style.width = '150px';
        labelDiv.style.height = '47px';
        labelDiv.style.color = '#fff';
        labelDiv.style.textAlign = 'center';
        labelDiv.style.verticalAlign = 'middle';
        labelDiv.style.lineHeight = '47px';
        labelDiv.style.font = '13pt Arial bold';
        labelDiv.innerHTML = label;

        div.appendChild(labelDiv);

        div.style.overflow = 'hidden';
        div.style.width = '150px';
        div.style.height = '47px';
        div.style.font = '10px Arial';

        return div;
    
    },
    
    getPixelBounds: function(resolution) {
    
        var x = Math.round(1/resolution * this.lonlat.lon);
        var y = Math.round(1/resolution * this.lonlat.lat);

        var bounds = new EMS.PixelBounds();
        bounds.extend(new OpenLayers.Pixel(x-75+this.slidePx, y-47));        
        bounds.extend(new OpenLayers.Pixel(x+75+this.slidePx, y));        

        return bounds;    
    },
    
    slide: function(distance) {
        this.slidePx = distance;
        this.popupOffset = {size: new OpenLayers.Size(150,47), offset: new OpenLayers.Pixel(-75 + this.slidePx,47)}
        this.icon.imageDiv = this.generateHTML();
        this.div = this.icon.imageDiv;
    },
    
    /** @final @type String */
    CLASS_NAME: "EMS.MagicMarker"

});
