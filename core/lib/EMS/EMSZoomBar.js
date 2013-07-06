
/**
 * @requires ems/EMSUtils.js
 * @requires ems/Button.js
 *
 * Class: EMS.Control.ZoomBar
 * Displays a zoombar and layer switcher.
 *
 * Inherits from:
 *  - <OpenLayers.Control.PanZoom>
 */
EMS.Control.ZoomBar = OpenLayers.Class( OpenLayers.Control.PanZoom, {

    /**
     * Property: buttons
     * {Array} array of buttons used in the zoombar. 
     */
    buttons: null,

    /**
     * Property: showHybridInPhotoView
     * {Boolean} whether the hyrid is showing in the photoview.
     */
    showHybridInPhotoView: true,

    /**
     * Property: sliderSize
     * {<OpenLayers.Size} The size of the slider.  Constant. Do not change.
     */
    sliderSize: new OpenLayers.Size(40, 161),

    /**
     * APIProperty: handleSize
     * {<OpenLayers.Size>} The size of the slider handle.  Constant.  Do not change.
     */
    handleSize: new OpenLayers.Size(23, 18),
    
    /**
     * APIProperty: fullZoomBar
     * {Boolean} Display the full zoombar or the minimized version.
     */
    fullZoomBar:true,
    
    /**
     * APIProperty: showMapPhotoButtons
     * {Boolean}  Display the Map/Photo buttons
     */
    showMapPhotoButtons: true,

    /**
     * Constructor: initialize
     * Constructs a new instance of the zoombar control.  
     *
     * Parameters:
     *  streetLayer - {<OpenLayers.Layer>} The layer used to display the street data.
     *  photoLayer - {<OpenLayers.Layer>} The layer used to display the photo layer.
     *  hybridLayer - {<OpenLayers.Layer>} The layer used to display the hyrbid (transparent) layer.
     *  fullZoomBar - {Boolean} Display the full zoom bar or the minimized version.
     *  showMapPhotoButtons - {Boolean}  Display the Map/Photo buttons
     *
     */
    initialize: function(streetLayer, photoLayer, hybridLayer, fullZoomBar, showMapPhotoButtons) {
        OpenLayers.Control.PanZoom.prototype.initialize.apply(this, []);
        this.streetLayer = streetLayer;
        this.photoLayer = photoLayer;
        this.hybridLayer = hybridLayer;
        if(fullZoomBar != undefined){
            this.fullZoomBar = fullZoomBar;
        }
        if(showMapPhotoButtons != undefined){
            this.showMapPhotoButtons = showMapPhotoButtons;
        }
        this.position = new OpenLayers.Pixel(EMS.Control.ZoomBar.X,
        EMS.Control.ZoomBar.Y);
    },

    /**
     * APIMethod: destroy
     * Constructs contents of the control.
     *
     * Returns:
     * A reference to a div that represents this control.
     */
    destroy: function() {
        OpenLayers.Event.stopObservingElement(this.markersDiv);
        if(this.fullZoomBar){
            this.scale.events.destroy();
        
            for (var i = 0; i < this.markers.length; i++) {
                this.markers[i].events.destroy();
                OpenLayers.Event.stopObservingElement(this.markers[i].image);
                OpenLayers.Util.removeNode(this.div);
            }
        }
        OpenLayers.Event.stopObservingElement(this.zoominButton);
        OpenLayers.Event.stopObservingElement(this.zoomoutButton);
        if(this.fullZoomBar){
            this.map.events.unregister("mousemove", this, this._showHideMarkers);
        }
        this.map = null;
    },

    /**
     * Method: Called by OpenLayers to set the map this control is contained by.
     *
     * Parameters:
     *  map - {<OpenLayers.Map>}    A reference to the containing map.
     *
     */
    setMap: function(map) {
        OpenLayers.Control.PanZoom.prototype.setMap.apply(this, arguments);
        this.map.events.register("changebaselayer", this, this.redraw);
    },

    /**
     * APIMethod: redraw
     * clear the div and start over.
     *
     */
    redraw: function() {
        if (this.div != null) {
            this.div.innerHTML = "";
        }
        this.draw();
    },

    /**
     * APIMethod: draw
     * Constructs contents of the control.
     *
     * Returns:
     * A reference to a div that represents this control.
     */
    draw: function(px) {
        // initialize our internal div
        OpenLayers.Control.prototype.draw.apply(this, arguments);
        zoomPx = this.position.clone();
        layerPx = this.position.clone();
		
        // place the controls
        this.buttons = new Array();
		
        if(this.showMapPhotoButtons){
            // Layers        
            this.layersDiv = OpenLayers.Util.createDiv(this.div.id + "_LayersButtons",
            layerPx,
            new OpenLayers.Size(75, 22),
            null,
            "absolute");
	        
            this.layersDiv.className = "LayersButtons";
	      
            this.streetButton = this._addStreetButton(layerPx);
            this.photoButton = this._addPhotoButton(layerPx.add(38, 0));
	
            this.layersDiv.style.left = '27px';
            this.layersDiv.style.top = '2px';
	
            if(this.photoButton.isDown){
                var bgImage = "button_bg_lrg.png";
                var bgSize = 209;
            }else{
                var bgImage = "button_bg_sml.png";		
                var bgSize = 108;	
            }
			
            this.layerBackground = OpenLayers.Util.createAlphaImageDiv(
            null, this.position.clone(),
            new OpenLayers.Size(bgSize,25),
            EMS.Util.getImagesLocation() + bgImage
        );
	                    
            this.div.appendChild(this.layerBackground);
	
            this.div.appendChild(this.layersDiv);
        }

        this.northArrow = OpenLayers.Util.createAlphaImageDiv(
        null, this.position.clone().add(7,2),
        new OpenLayers.Size(13,20),
        EMS.Util.getImagesLocation() + "north_arrow.png"
    );
		
        this.northArrow.style.position = "absolute";		
        this.northArrow.firstChild.alt = "Magnetic North";		
		
        this.div.appendChild(this.northArrow);
				
        if(this.showMapPhotoButtons){
            // Scale poistion
            zoomPx = zoomPx.add(29, 34);
        }else{
            // Scale poistion
            zoomPx = zoomPx.add(8, 30);
        }
		
        // Zoom out button
        this.zoomoutButton = this._addButton("zoomout",
        "sdr-zoomout.png", 
        zoomPx, 
        new OpenLayers.Size(21,26));

        zoomPx = zoomPx.add(0, 26);
		
        if(this.fullZoomBar){
            this._addScale(this.div.id + "EMSZoomBar_Scale", 
            "sdr-scale.png", 
            zoomPx, 
            new OpenLayers.Size(21,169));
            this.scale.className = "EMSZoombarScale";
		
		
		
            // Markers
            this.markersDiv = OpenLayers.Util.createDiv(this.div.id + "_Markers",
            zoomPx.add(16, 0),
            new OpenLayers.Size(0, 169), 
            null, 
            "absolute");
            this.markersDiv.className = "EMSZoombarMarkers"
	
            this.map.events.register("mousemove", this, this._showHideMarkers);
	
            this.div.appendChild(this.markersDiv);
            this.markers = new Array();
	
            this._addMarker("country-marker",
            "country-marker.png" , 
            new OpenLayers.Pixel(0, 1), 
            new OpenLayers.Size(46, 15));
	                        
            this._addMarker("state-marker",
            "state-marker.png" , 
            new OpenLayers.Pixel(0, 30),
            new OpenLayers.Size(46, 15));
	        
            this._addMarker("suburb-marker",
            "suburb-marker.png" , 
            new OpenLayers.Pixel(0, 97), 
            new OpenLayers.Size(46, 15));
	        
            this._addMarker("street-marker",
            "street-marker.png" , 
            new OpenLayers.Pixel(0, 125),
            new OpenLayers.Size(46, 15));
	        
            // Zoom bar
            this._addZoomBar(zoomPx.add(0, 6));
        
        
            zoomPx = zoomPx.add(0, 169);
        	
            // Initialise the position relative to the zoom levels of the map
            this.moveZoomBar();
        }
        
        // Zoom in button
        this.zoominButton = this._addButton("zoomin",
        "sdr-zoomin.png", 
        zoomPx, 
        new OpenLayers.Size(21,26));
		
	
        return this.div;
    },

    /**
     * Method: _showHideMarkers
     * Displays or hides the markers based on the cursor position.
     */
    _showHideMarkers: function(e) {
        var pos = this.docPosition(this.map.div);
        var x = EMS.Event.pointerX(e);
        var y = EMS.Event.pointerY(e);
        x -= pos[0];
        y -= pos[1];
        if (this.markersVisible) {
            if (!(x > 28 && x < 90 && y > 34 && y < 256)) {
                if (this.slider.childNodes[0].style.marginTop != "-18px") {
                    this.hideMarkers();
                }
            }
        } else {
            if (x > 28 && x < 53 && y > 34 && y < 256) {
                this.showMarkers();
            }
        }
    },
    
    /**
     * Function: docPosition
     *
     * Position for element from top of document to element.
     */
    docPosition: function(forElement) {
        var valueT = 0, valueL = 0;

        var element = forElement;
        do {
            valueT += element.offsetTop  || 0;
            valueL += element.offsetLeft || 0;

            // Safari fix
            if (element.offsetParent==document.body)
                if (OpenLayers.Element.getStyle(element,'position')=='absolute') break;

        } while (element = element.offsetParent);

        return [valueL, valueT];
    },

    /**
     * Method: ignoreEvent
     * Private method to ignore event calls.
     *
     * Parameters:
     *  evt - {Event} event
     */
    ignoreEvent: function(evt) {
        OpenLayers.Event.stop(evt);
    },

    /**
     * Method: _addScale
     * Private method to add scalebar to div.
     *
     * Parameters:
     * id - {String}
     * img - {String}
     * px - {OpenLayers.Pixel}
     * sz - {OpenLayers.Size}
     *
     * Returns:
     * The scale element, nicely wrapped in a div and handles events.
     */
    _addScale:function(id, img, px, sz) {
        var imgLocation = EMS.Util.getImagesLocation() + img;
		
        this.scale = OpenLayers.Util.createAlphaImageDiv(id,
        px, 
        sz, 
        imgLocation, 
        "absolute", null, null);
        
        // Events
        this.scale.events = new OpenLayers.Events(this, this.scale, null, true);
        this.scale.events.register("mousedown", this, this.divClick);
        this.scale.events.register("mousemove", this, this.passEventToSlider);
        this.scale.events.register("mouseup", this, this.passEventToSlider);
        this.scale.events.register("dblclick", this, this.doubleClick);
        this.scale.events.register("click", this, this.doubleClick);
        //        this.scale.events.register("mouseover", this, this.showMarkers);
        //        this.scale.events.register("mouseout", this, this.hideMarkers);
        
        
        this.div.appendChild(this.scale);
        
        return this.scale;
    },

    /**
     * Method: _addMarker
     * Private method to add marker div to main div.
     *
     * id - {String}
     * img - {String}
     * xy - {OpenLayers.Pixel}
     * sz - @param {OpenLayers.Size}
     * 
     * Returns:
     * {DOMElement} The marker div element.
     */
    _addMarker:function(id, img, xy, sz) {
        var imgLocation = EMS.Util.getImagesLocation() + img;
		
        var image = OpenLayers.Util.createAlphaImageDiv(id + "-image", 
        null, 
        new OpenLayers.Size(sz.w, sz.h * 2), 
        imgLocation);
		
        OpenLayers.Event.observe(image, "mouseover", (function() { this.style.marginTop = "-15px"}).bindAsEventListener(image));
        OpenLayers.Event.observe(image, "mouseout", (function() { if(!this.parentNode.selected) { this.style.marginTop = "0px" }}).bindAsEventListener(image));
		                                                
        var marker = OpenLayers.Util.createDiv(id, xy, sz, null, "absolute", null, "hidden");
        marker.appendChild(image);
        marker.image = image;
        marker.value = xy.y;
		
        marker.events = new OpenLayers.Events(this, marker, null, true);
        marker.events.register("mousedown", this, this.markerClick);
        marker.events.register("mouseover", marker, function() { this.style.cursor = "pointer"});
		
        this.markers.push(marker);
        marker.style.visibility = "hidden";
        this.markersDiv.appendChild(marker);
        return this.marker;
    },

    /**
     * Method: _addButton
     * Private method to add layer selection button to div.
     *
     * Parameters:
     * id - {String}
     * img - {String}
     * xy - {<OpenLayers.Pixel>}
     * sz - {<OpenLayers.Size>}  
     *
     * Returns:
     * {DOMElement}
     */
    _addButton:function(id, img, xy, sz) {
        var imgLocation = EMS.Util.getImagesLocation() + img;
        
        var image = OpenLayers.Util.createAlphaImageDiv(id + "-image", 
        null, 
        new OpenLayers.Size(sz.w, sz.h * 2), 
        imgLocation);
        
        OpenLayers.Event.observe(image, "mouseover", (function() {this.style.marginTop = "-26px"} ).bindAsEventListener(image));
        OpenLayers.Event.observe(image, "mouseout", (function() {this.style.marginTop = "0px"} ).bindAsEventListener(image));
        
        if(id == "zoomin") {
            image.firstChild.alt = "Zoom In";
        }
        else if(id == "zoomout") {
            image.firstChild.alt = "Zoom Out";
        }
		
        var button = OpenLayers.Util.createDiv(id, xy, sz, null, "absolute", null, "hidden");
        button.appendChild(image);
      
        //we want to add the outer div
        this.div.appendChild(button);

        button.events = new OpenLayers.Events(this, button, null, true);

        button.events.register("mousedown", button, this.buttonDown);
        //		button.events.register("mouseup", button, this.doubleClick);
        button.events.register("dblclick", button, this.doubleClick);
        button.events.register("click", button, this.doubleClick);

        button.events.register("mouseover", button, function() {this.style.cursor = "pointer"});
        if(this.fullZoomBar){
            button.events.register("mousemove", this, this.passEventToSlider);
            button.events.register("mouseup", this, this.passEventToSlider);
		
            button.events.register("mouseover", this, this.showMarkers);
            button.events.register("mouseout", this, this.hideMarkers);
        }
        
        button.action = id;
        button.map = this.map;
        button.slideFactor = this.slideFactor;

        //we want to remember/reference the outer div
        this.buttons.push(button);
        return button;
    },

    /**
     * Method: _addZoomBar
     * Private method to add zoombar to div.
     *
     * @param {OpenLayers.Pixel} location where zoombar drawing is to start.
     * 
     */
    _addZoomBar:function(centered) {
        var imgLocation = EMS.Util.getImagesLocation();

        var sz = this.sliderSize.clone();
        var szSlider = this.handleSize;

        var id = "EMS_Control_ZoomBar_Slider" + this.map.id;
        var zoomsToEnd = this.map.getNumZoomLevels() - 1 - this.map.getZoom();
        
        var image = OpenLayers.Util.createAlphaImageDiv(id + "-image", 
        null,
        new OpenLayers.Size(this.handleSize.w, this.handleSize.h * 2),
        imgLocation+"sdr-pointer.png");
        
        OpenLayers.Event.observe(image, "mouseover", (function() {this.style.marginTop = "-18px"} ).bindAsEventListener(image));
        OpenLayers.Event.observe(image, "mouseout", (function() {this.style.marginTop = "0px"} ).bindAsEventListener(image));
        
        this.slider = OpenLayers.Util.createDiv(id, 
        centered.add(-szSlider.w/2 + 4, sz.h-szSlider.h/2),
        this.handleSize,
        null,
        "absolute", null, "hidden");
        this.slider.appendChild(image);                                       

        this.slider.events = new OpenLayers.Events(this, this.slider, null, true);
        this.slider.events.register("mousedown", this, this.zoomBarDown);
        this.slider.events.register("mousemove", this, this.zoomBarDrag);
        this.slider.events.register("mouseup", this, this.zoomBarUp);
        this.slider.events.register("dblclick", this, this.doubleClick);
        this.slider.events.register("click", this, this.doubleClick);
        this.slider.events.register("mouseover", this, this.showMarkers);
        //		this.slider.events.register("mouseout", this, this.hideMarkers);

        this.slider.className = "ZoomBar_Slider";

        this.div.appendChild(this.slider);

		
        this.map.events.register("zoomend", this, this.moveZoomBar);

        centered = centered.add(0, sz.h);
        return centered;
    },

    /**
     * Method: _addPhotoButton
     * Creates the photo button.
     *
     */
    _addPhotoButton:function(px) {
        var upIcon = new OpenLayers.Icon(
        EMS.Util.getImagesLocation() + "Photo_off.gif",
        new OpenLayers.Size(36,21),
        new OpenLayers.Size(0,0));
        var downIcon = new OpenLayers.Icon(
        EMS.Util.getImagesLocation() + "Photo_on_extended.gif",
        new OpenLayers.Size(137,21),
        new OpenLayers.Size(0,0));
        var hoverIcon = new OpenLayers.Icon(
        EMS.Util.getImagesLocation() + "Photo_on.gif",
        new OpenLayers.Size(36,21),
        new OpenLayers.Size(0,0));

        var photoSelected = this.photoLayer.getVisibility();

        var button = new EMS.Button(upIcon, downIcon, hoverIcon, photoSelected, {div: this.layersDiv, displayClass: "photoLayerSelector"});
        button.draw(px);
        button.contentDiv.innerHTML = "Photo";
        button.events.register("click", this, function(e) {
            this.streetButton.isDown = false;
            this.photoButton.isDown = true;
            this.map.setBaseLayer(this.photoLayer, false);
            this.hybridLayer.setVisibility(this.showHybridInPhotoView);
            this.photoButton.contentDiv.innerHTML = "";
            var contents = this._photoContents(this.streetButton.isDown, this.photoButton.isDown, this.hybridLayer.getVisibility());
            this.photoButton.contentDiv.appendChild(contents);
            OpenLayers.Event.stop(e);
        });

        return button;

    },
    
    /**
     * Method: displayPhotoLayer
     * Shows the photolayer by default
     * 
     * @param {Boolean} Hybrid or just photo
     *
     */
    displayPhotoLayer: function(hybrid){
        this.map.setBaseLayer(this.photoLayer, false);
        this.hybridLayer.setVisibility(hybrid);
    	if( this.showMapPhotoButtons ){
            this.streetButton.isDown = false;
            this.photoButton.isDown = true;

            this.photoButton.contentDiv.innerHTML = "";
            var contents = this._photoContents(this.streetButton.isDown, this.photoButton.isDown, this.hybridLayer.getVisibility());
            this.photoButton.contentDiv.appendChild(contents);
    	}
    },

    /**
     * Method: _addStreetButton
     * Creates the street button.
     *
     */
    _addStreetButton: function(px) {

        var upIcon = new OpenLayers.Icon(
        EMS.Util.getImagesLocation() + "Map_off.gif",
        new OpenLayers.Size(38,21),
        new OpenLayers.Size(0,0));
        var downIcon = new OpenLayers.Icon(
        EMS.Util.getImagesLocation() + "Map_on.gif",
        new OpenLayers.Size(38,21),
        new OpenLayers.Size(0,0));
        var hoverIcon = downIcon.clone();

        var streetSelected = this.streetLayer.getVisibility()

        var button = new EMS.Button(upIcon, downIcon, hoverIcon, streetSelected, {div: this.layersDiv, displayClass: "streetLayerSelector"});
        button.draw(px);
        button.contentDiv.innerHTML = streetSelected ? "<b>Map</b>" : "Map";
        button.events.register("click", this, function(e) {
            this.streetButton.isDown = true;
            this.photoButton.isDown = false;
            this.photoButton.contentDiv.innerHTML = "";
            var contents = this._photoContents(this.streetButton.isDown, this.photoButton.isDown, this.hybridLayer.getVisibility());
            this.photoButton.contentDiv.appendChild(contents);
            this.map.setBaseLayer(this.streetLayer, false);
            OpenLayers.Event.stop(e);
        });

        this.hybridLayer.setVisibility(false);

        return button;
    },

    /**
     * Method: _photoContents
     * Constructs the contents on the photo buttons
     */
    _photoContents: function(streetButtonDown, photoButtonDown, hybridLayerVisible) {
        var div = OpenLayers.Util.createDiv();
        var photo = document.createTextNode("Photo ");
        if (photoButtonDown) {
            var bold = document.createElement("b");
            bold.appendChild(photo);
            photo = bold;
        }
        div.appendChild(photo);
        if (photoButtonDown) {
            var divider = document.createElement("img");
            divider.src = EMS.Util.getImagesLocation() + "divider.gif";
            div.appendChild(divider);
            var space = document.createTextNode(" ");
            div.appendChild(space);
            var anchorDiv = document.createElement("span");
            var anchor = document.createElement("a");
            anchor.href = "#";
            OpenLayers.Event.observe(anchor, "click", this._toggleHybrid.bindAsEventListener(this));

            var text;
            if (hybridLayerVisible) {
                text = document.createTextNode("Hide street labels");
            } else {
                text = document.createTextNode("Show street labels");
            }
            anchor.appendChild(text);
            anchorDiv.appendChild(anchor);
            div.appendChild(anchorDiv);
        }
        return div;
    },

    _toggleHybrid: function() {
        this.hybridLayer.setVisibility(!this.hybridLayer.getVisibility(), false);
        this.showHybridInPhotoView = this.hybridLayer.getVisibility();
    },

    _addHover: function(button) {
        OpenLayers.Event.observe(button, "mouseover", function() {
            button.style.backgroundImage = button.onImgLocation;
        }); 
    },

    /*
     * @param evt
     * This function is used to pass events that happen on the div, or the map,
     * through to the slider, which then does its moving thing.
     */
    passEventToSlider:function(evt) {
        this.slider.events.handleBrowserEvent(evt);
    },

    /*
     * divClick: Picks up on clicks directly on the zoombar div
     *           and sets the zoom level appropriately.
     */
    divClick: function (evt) {
        if (!OpenLayers.Event.isLeftClick(evt)) return;
        var y = evt.xy.y - this.handleSize.h / 2;
        var zoomage = (y / this.sliderSize.h);
        var level = Math.ceil(zoomage * this.map.getNumZoomLevels());
        this.map.zoomTo(level);
        this.updateMarkers();
        OpenLayers.Event.stop(evt);
    },

    /**
     * When one of the markers is clicked, it passes this to 
     * the div click method with the appropriate value.
     * 
     * @param evt
     */
    markerClick: function(evt) {
        if (!OpenLayers.Event.isLeftClick(evt)) return;
		
        evt.xy.y = evt.element.value; 
        this.divClick(evt);
    },

    /**
     * Checks to see where the slider handle is and sees if it is overlapping
     * with any of the markers. It will select/hilite that one if it is
     * and unselect any already selected.
     */
    updateMarkers: function() {
        // Check if we are overlapping with a marker
        var top = OpenLayers.Util.pagePosition(this.slider)[1];   
        for(var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            var markerTop = OpenLayers.Util.pagePosition(marker)[1];
            var markerBottom = marker.clientHeight + markerTop; 	
            var overlap = markerBottom - top;    	
            if(overlap < this.handleSize.h * 2 && overlap >= 0) {
                marker.selected = true;
                marker.image.style.marginTop = "-15px";
            }
            else {
                marker.selected = false;
                marker.image.style.marginTop = "0px";
            }
        
        }

    },

    showMarkers: function() {
        this.updateMarkers();
        this.markersVisible = true;
        for(var i = 0; i < this.markers.length; i++) {
            this.markers[i].style.visibility = "visible"
        }

    },
	
    hideMarkers: function() {

        this.markersVisible = false;
        if(this.mouseDragStart != null) {
            return;
        }
        for(var i = 0; i < this.markers.length; i++) {
            this.markers[i].style.visibility = "hidden"
        }

    },

    /*
     * @param evt
     * event listener for clicks on the slider
     */
    zoomBarDown:function(evt) {
        if (!OpenLayers.Event.isLeftClick(evt)) return;

        // Fixes an IE6 bug where element are selected (turn blue) while dragging.
        // This disables selecting until mouse-up.
        document.onselectstart = function() { return false; };
        document.onmouseup = function () { document.onselectstart = null; };
        
        // Unregister while zooming for no snap back
        this.map.events.unregister("zoomend", this, this.moveZoomBar);
        
        this.map.events.register("mousemove", this, this.passEventToSlider);
        this.map.events.register("mouseup", this, this.passEventToSlider);       
       
        this.mouseDragStart = evt.xy.clone();
        this.zoomStart = evt.xy.clone();
       
        this.slider.style.cursor = "url('" + EMS.Util.getImagesLocation() + "grabbing.cur'), move";
        this.div.style.cursor = "url('" + EMS.Util.getImagesLocation() + "grabbing.cur'), move";
        OpenLayers.Event.stop(evt);
    },

    /*
     * @param evt
     * This is what happens when a click has occurred, and the client is dragging.
     * Here we must ensure that the slider doesn't go beyond the bottom/top of the
     * zoombar div, as well as moving the slider to its new visual location
     */
    zoomBarDrag:function(evt) {
        if (this.mouseDragStart != null) {

            var scaleOffset = OpenLayers.Util.docPosition(this.scale);

            var pos = EMS.Event.pointerY(evt) - scaleOffset[1]; 
            
            var scaleTop = parseInt(this.scale.style.top);
            var scaleHeight = parseInt(this.scale.style.height);
            var sliderHeight = parseInt(this.slider.style.height);

            var newTop = (scaleTop + pos - sliderHeight / 2);
            var upperCutoff = pos - sliderHeight / 2 < 0;
            if (upperCutoff) {
                newTop = scaleTop;
            }

            var lowerCutoff = pos - sliderHeight / 2 > scaleHeight - sliderHeight;
            if (lowerCutoff) {
                newTop = scaleTop + scaleHeight - sliderHeight;
            }

            var oldTop = parseInt(this.slider.style.top);

            this.slider.style.top = newTop + "px";
            this.updateMarkers();

            this.mouseDragStart = evt.xy.clone();

            // drop the slider if we go past the top or bottom
            var topChanged = oldTop != newTop;
            if (topChanged && (upperCutoff || lowerCutoff)) {
                this.zoomBarUp(evt);
            } else {
                OpenLayers.Event.stop(evt);
            }
        }
    },

    /*
     * @param evt
     * Perform cleanup when a mouseup event is received -- discover new zoom level
     * and switch to it.
     */
    zoomBarUp:function(evt) {
        if (!OpenLayers.Event.isLeftClick(evt)) return;

        if (this.zoomStart) {
            this.slider.style.cursor= "url('" + EMS.Util.getImagesLocation() + "grab.cur'), move";
            this.div.style.cursor = "url('" + EMS.Util.getImagesLocation() + "grab.cur'), move";
            
            this.map.events.unregister("mouseup", this, this.passEventToSlider);
            this.map.events.unregister("mousemove", this, this.passEventToSlider);

            var y = this.slider.offsetTop - this.scale.offsetTop;
            var zoomage = (y / this.sliderSize.h);
            var level = Math.floor(zoomage * this.map.getNumZoomLevels());

            this.map.zoomTo(level);
            //this.moveZoomBar();
            this.mouseDragStart = null;
            OpenLayers.Event.stop(evt);
            
            // Reregister now we have finished dragging
            this.map.events.register("zoomend", this, this.moveZoomBar);
            this.moveZoomBar();

            // Hide the markers if we are now off the area
            if(!this.markersVisible) {
                this.hideMarkers();
            }

            this.zoomStart = null;
        }
    },

    /*
     * Change the location of the slider to match the current zoom level.
     */
    moveZoomBar:function() {
        var zoomage = (this.map.getZoom() / this.map.getNumZoomLevels());
        var newTop = zoomage * this.sliderSize.h;
        newTop += parseInt(this.scale.style.top);  // push top start of zoomer
        this.slider.style.top = newTop + "px";
        this.updateMarkers();
    },

    CLASS_NAME: "EMS.Control.ZoomBar"
});

EMS.Control.ZoomBar.X = 0;
EMS.Control.ZoomBar.Y = 0;