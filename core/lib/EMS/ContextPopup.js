/**
 * 
 * Class: EMS.ContextPopup
 *
 * A popup that mimics the look and behaviour of a context menu. Used in conjuction with a
 * <EMS.Control.ContextMenu> offers a new techinque for the user to interact with the map. 
 * Additional functionality and customised presentation can be achieved by overridding functions 
 * in this class. 
 * 
 *
 * Example: 
 * (code)
 *  var menuOptions = new Array(
 *		new Array("Display Address", function(address) { alert(address.street.fullName )}),
 *	    new Array("Zoom To", function(address){ thisPage.map.setCenter(new EMS.LonLat(address.coordinates.longitude,address.coordinates.latitude),12)})
 *  );
 *    			
 *	thisPage.contextMenu = new EMS.ContextPopup(OpenLayers.Util.createUniqueID("contextMenu"), new OpenLayers.Size(100,40), lonlat,
 *	     	address, menuOptions);
 * (end)
 */
EMS.ContextPopup = OpenLayers.Class( OpenLayers.Popup.Anchored, {
	
	 /**
     * APIProperty: anchor
     * {Object} Object to which we'll anchor the popup. Must expose a 
     *     'size' (<OpenLayers.Size>) and 'offset' (<OpenLayers.Pixel>).
     */
	anchor:{ size: new OpenLayers.Size(0,0),
             offset: new OpenLayers.Pixel(0,0)},
             
    /**
     * APIProperty: address
     * {Object} Address object as returned from <EMS.Services.Geocoder>
     * 
     * (code)
	 *	   {
     *       "accuracy":100.0,
     *       "address":
     *         {
     *           "coordinates": {"latitude":-37.81113,"longitude":144.9652},
     *           "postcode":"",
     *           "state":"VIC",
     *           "street":
     *             {
     *               "directionalPrefix":"",
     *               "directionalSuffix":"",
     *               "fullName":"LONSDALE ST",
     *               "name":"LONSDALE",
     *               "type":"ST"
     *             },
     *           "streetNumber": "222-226",
     *           "suburb":"MELBOURNE"
     *         }
     *     }
     * (end)   
     * 
     */
	address: null,  
	
	 /**
     * APIProperty: menuOptions
     * {Array} The menu options that will be displayed by the context menu. Each menu
     * option is to be contained in its own Array. The first value of the these arrays is to contain the 
     * display name and the second value will be the function the is called when the option has
     * been selected. 
     * 
     */
	menuOptions: null,
	
	/** 
    * Constructor: OpenLayers.Popup.Anchored
    *
    * Parameters:
    * id - {String}
    * lonlat - {<OpenLayers.LonLat>}
    * size - {<OpenLayers.Size>}
    * address - {Object}
    * menuOptions - {Array}
    * closeBox - {Boolean}
    */
	initialize: function(id, size, lonlat, address, menuOptions) {
		OpenLayers.Popup.Anchored.prototype.initialize.apply(this, [id, lonlat , size, "", this.anchor, false]);
		this.address = address;
		this.setBackgroundColor("#FFFFFF");
    	this.setBorder("2px solid #999999");
    	this.menuOptions = menuOptions;
	},
	
	 /** 
     * APIMethod: draw
     * Constructs the contents of the popup. 
     * 
     * Parameters:
     * px - {<OpenLayers.Pixel>}
     * 
     * Returns: 
     * {DOMElement} Reference to a div that contains the drawn popup.
     */
	draw: function(px) {
		OpenLayers.Popup.Anchored.prototype.draw.apply(this, arguments);
		
		var height = this.size.h;

		this.element = $(this.contentDiv);
		this.element.addClass("emsPopupContent");
		
		if(this.menuOptions){
		
			this.menu = OpenLayers.Util.createDiv(null);
			this.menu.className = "emsPopupMenu";
		
			if(this.address){
				var displayAddress = "";
		        displayAddress += this.address.streetNumber
		        displayAddress += ' ' + this.address.street.fullName;
		        displayAddress += ' ' + this.address.suburb;
		        displayAddress += ' ' + this.address.state;
   		        displayAddress += '<BR/><BR/>';
				this.menu.innerHTML=displayAddress;	
			}
			
			for(var x = 0; x < this.menuOptions.length ; x++){			
				this.subMenu = OpenLayers.Util.createDiv(null);
				this.subMenu.className = "emsPopupMenuOption";
				OpenLayers.Event.observe(this.subMenu, "mouseover", OpenLayers.Function.bind(this.mouseOverMenu, this) );
				OpenLayers.Event.observe(this.subMenu, "mouseout", OpenLayers.Function.bind(this.mouseOutMenu, this) );
				OpenLayers.Event.observe(this.subMenu, "click", OpenLayers.Function.bind(this.menuOptions[x][1], this, this.address) );
				this.subMenu.innerHTML=this.menuOptions[x][0];
				height += 30;
				this.menu.appendChild(this.subMenu);
			}
			this.setSize(new OpenLayers.Size(150,height));
			this.element.appendChild(this.menu);
		}
		return this.div;
	},
	
 /** 
     * APIMethod: mouseOverMenu
     * Changes the menu options style when mouseover 
     * 
     * Parameters:
     * e {OpenLayers.Event} 
     */
	mouseOverMenu:function(e) {
		if (!e) var e = window.event;
		var tg = (window.event) ? e.srcElement : e.target;
		tg.setStyle("background","grey");
	},
	
 /** 
     * APIMethod: mouseOutMenu
     * Changes the menu options style when mouseover 
     * 
     * Parameters:
     * e {OpenLayers.Event} 
     * 
     */
	mouseOutMenu:function(e) {
		if (!e) var e = window.event;
		var tg = (window.event) ? e.srcElement : e.target;
		tg.setStyle("background","lightgrey");
	},
	
	/** @final @type String */
	CLASS_NAME: "EMS.ContextPopup"	
});

