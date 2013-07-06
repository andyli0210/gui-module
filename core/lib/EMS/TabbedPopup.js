/**
 * @requires ems/EMSPopup.js
 */

/**
 * Class: EMS.TabbedPopup 
 *
 * The TabbedPopup allows you to create popup with custom tabs and content.
 * A tabbedPopup can contain from 1 -4 tabs.
 * 
 * Example:
 * (code)
 *	   		var logoDiv = OpenLayers.Util.createAlphaImageDiv(this.id + "_logo", new OpenLayers.Pixel(0,0), new OpenLayers.Size(80,32), EMS.Util.getImagesLocation() + "logo.gif");
 *   		
 * 			var tabContents1 = OpenLayers.Util.createDiv(null,new OpenLayers.Pixel(5, 34), new OpenLayers.Size(300, 250), null, "absolute");			
 *			tabContents1.innerHTML = " This is the details page! ";
 *			tabContents1.className = "emsPopupContent";
 *			var tab1 = new EMS.CustomTab( "Details", tabContents1);
 *			
 *			var tabContents2 = OpenLayers.Util.createDiv(null, new OpenLayers.Pixel(5, 34), new OpenLayers.Size(300, 250), null, "absolute");			
 *			tabContents2.innerHTML = " This is the video page! ";
 *			tabContents2.className = "emsPopupContent";
 *			var tab2 = new EMS.CustomTab( "Video", tabContents2);
 *			
 *			var tabs = new Array(tab1,tab2);	
 *
 *   		var popup = new EMS.TabbedPopup(null, lonlat, null, "", marker.icon, true, null, tabs);
 * (end)
 * 
 * Inherits from:
 *  - <EMS.Popup>
 */
EMS.TabbedPopup = OpenLayers.Class( EMS.Popup, {

    /**
     * APIProperty: EVENT_TYPES
     * {Array} Supported application event types.
     */
    EVENT_TYPES: ["shown", "hidden"], 
    
     /** APIProperty: tabs
     *
     * {Array} An Array of <EMS.CustomTab> objects. 
     *
     */
    tabs: null,
    
     /**
     * APIProperty: logoDiv
     * {DOMElement} The logo div.
     */
    logoDiv:null,

    /**
     * Constructor: initialize
     *
     * Constructs a new instance of <EMS.TabbedPopup>
     *
     * Properties:
     *  id - {String}
     *  lonlat - <OpenLayers.LonLat>
     *  size - Optional <OpenLayers.Size> 
     *  contentHTML - {String} Optional 
     *  anchor - <OpenLayers.Marker> 
     *  closeBox - {Boolean} whether to display close button.
     *  logoDiv - {DOMElement} Optional 
     *  tabs - An Array of <EMS.CustomTab> objects.

     */
  	initialize:function(id, lonlat, size, contentHTML, anchor, closeBox, logoDiv, tabs ) {
  		EMS.Popup.prototype.initialize.apply(this, [id, lonlat,  size? size: new OpenLayers.Size(304, 286), contentHTML, anchor, closeBox]);
		this.logoDiv = logoDiv;
		this.tabs = tabs;
  	},
  	
  	createTab: function(tab) {
  		
  	   var pos = this.currentPx.clone();
       var tabOn = OpenLayers.Util.createDiv(null, pos, tab.headingWidth, null, "absolute");
       tabOn.className = "emsPopupTabOn";
       tabOn.style.borderBottom = "1px solid white";
       tabOn.style.zIndex = 2000;
       tabOn.innerHTML = tab.heading;
       var leftFrame = OpenLayers.Util.createAlphaImageDiv(tabOn.id + "_left", new OpenLayers.Pixel(0,0), new OpenLayers.Size(1,33), EMS.Util.getImagesLocation() + "tab_end.gif");
       var rightFrame = OpenLayers.Util.createAlphaImageDiv(tabOn.id + "_right", new OpenLayers.Pixel(tab.headingWidth.w - 1,0), new OpenLayers.Size(1,33), EMS.Util.getImagesLocation() + "tab_end.gif");
	   tabOn.appendChild(leftFrame);
	   tabOn.appendChild(rightFrame);
       
       var tabOff = OpenLayers.Util.createDiv(null, pos,  tab.headingWidth, null, "absolute");
       tabOff.className = "emsPopupTabOff";
       tabOff.innerHTML = tab.heading;
       
       var tabHover = OpenLayers.Util.createDiv(null, pos, tab.headingWidth, null, "absolute");
       tabHover.className = "emsPopupTabHover";
       tabHover.innerHTML = tab.heading;
       
       this.currentPx = this.currentPx.add(tab.headingWidth.w, 0);
       
       this.contentDiv.appendChild(tabOn);
       this.contentDiv.appendChild(tabOff);
       this.contentDiv.appendChild(tabHover);
       this.contentDiv.appendChild(tab.contentDiv);
       var aTab = new EMS.MultiPopupTab(tabOn, tabOff, tabHover, tab.contentDiv);

       return aTab;
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
		
		if(this.tabs != undefined){
			if(this.logoDiv != undefined){
		      	this.contentDiv.appendChild(this.logoDiv);
		      	this.currentPx = new OpenLayers.Pixel(this.logoDiv.style.width,2);  
			}else{
				this.currentPx = new OpenLayers.Pixel(50,2);  
			}
			
			this.tab1 = this.createTab(this.tabs[0]);
			this.multiTabs = new EMS.MultiPopupTabs([this.tab1]);
			
			if(this.tabs.length > 1){
				this.tab2 = this.createTab(this.tabs[1]);
				this.multiTabs.addTab(this.tab2);
			}
			if(this.tabs.length > 2){
				this.tab3 = this.createTab(this.tabs[2]);
				this.multiTabs.addTab(this.tab3);
			}
			if(this.tabs.length > 3){
				this.tab4 = this.createTab(this.tabs[3]);
				this.multiTabs.addTab(this.tab4);
			}
			
	        this.multiTabs.showTab(this.tab1);
		}
		
        return div;
    },
    
    createImageDiv: function(imageName, imageOffsetX, imageOffsetY, imageWidth, imageHeight, fullWidth, fullHeight, left, top) {

        var imageDiv = OpenLayers.Util.createDiv(null,
                new OpenLayers.Pixel(left, top),
                new OpenLayers.Size(imageWidth, imageHeight),
                null,
                "absolute");
        imageDiv.style.overflow = "hidden";

        var image = OpenLayers.Util.createImage(null, new OpenLayers.Pixel(-imageOffsetX, -imageOffsetY), new OpenLayers.Size(fullWidth, fullHeight), EMS.Util.getImagesLocation() + imageName);
        imageDiv.appendChild(image);

        return imageDiv;
    }

});

/**
 * Class: EMS.CustomTab 
 *
 * These object are used to define a tab and provide the content for a <EMS.TabbedPopup>
 * 
 * Example:
 * (code)
 *	var tabContents1 = OpenLayers.Util.createDiv(null,new OpenLayers.Pixel(5, 34), new OpenLayers.Size(300, 250), null, "absolute");			
 *	tabContents1.innerHTML = " This is the details page! ";
 *	tabContents1.className = "emsPopupContent";
 *	var tab1 = new EMS.CustomTab( "Details", tabContents1);
 * (end)
 * 
 */
EMS.CustomTab = OpenLayers.Class({
	 
	 /**
     * Constructor: initialize
     *
     * Constructs a new instance of <EMS.CustomTab>
     *
     * Properties:
     *  heading - {String}
     *  contentDiv - {DOMElement} The div that will be displayed when this tab is active
     *  headingWidth - {Number} The width of the tab. Optional
     */
	 initialize: function(heading, contentDiv, headingWidth ) {
        this.heading = heading;
        this.contentDiv = contentDiv;
        if(headingWidth == undefined){
        	this.headingWidth = new OpenLayers.Size(45,32);
        }else{
        	this.headingWidth = new OpenLayers.Size(headingWidth,32);
        }
    }
});



