/**
 * Class: EMS.Control.ContextMenu 
 *
 * Replaces the browsers right click context menu with a custom version that can trigger map events.
 *
 * Inherits from:
 *  - <OpenLayers.Control>
 */
EMS.Control.ContextMenu = OpenLayers.Class.create();
EMS.Control.ContextMenu.prototype = 
  OpenLayers.Class.inherit(OpenLayers.Control, {
    
     /**
     * APIProperty: EVENT_TYPES
     * {Array} Supported application event types.
     */
    EVENT_TYPES: ["showMenu", "hideMenu"], 
    
     /**
     * Property: menuDisplayOwner
     *  
     * {Object} An object containing the owner of the custom hide and show menu functions.
     */
	menuDisplayOwner:null,
	
     /**
     * Property: menuDisplayCallbacks
     *  
     * {Object} An object that should contain two custom methods for showMenu and hideMenu. The scope of these
     * methods being the menuDisplayOwner object. It is in these methods that the user must define the 
     * menu options that will be displayed and the events they will trigger.
     */
    menuDisplayCallbacks:null,
        
    /**
     * Constructor: initialize
     *
     * Parameters:
     *  menuDisplayOwner {Object} - Scope of the hide and show menu fuctions
     *  menuDisplayCallbacks {Object} - Contains the hide and show functions to be used as callbacks
     *  options - {Object}
     * 
     * To use the Context Menu Control create the control then add it to your map.
     * You will also have to implement custom showMenu and hideMenu functions. Check out simple-test-page.html.
	 * 
	 * (code)  
	 *  var menuCallbacks = {showMenu: this.showMenu, hideMenu: this.hideMenu};
	 *	var contextMenuControl = new EMS.Control.ContextMenu(this, menuCallbacks, []);
	 *	
	 *  map.addControl( contextMenuControl );
	 *  contextMenuControl.activate();
	 * (end)
     * 
     */
    initialize: function(menuDisplayOwner, menuDisplayCallbacks, options) {
        OpenLayers.Control.prototype.initialize.apply(this, [options]);
        var callbacks = OpenLayers.Util.extend({show: this.showMenu, hide: this.hideMenu},callbacks);
        this.handler = new EMS.Handler.RightClick(this, callbacks, {});
        this.menuDisplayOwner = menuDisplayOwner;
        this.menuDisplayCallbacks = menuDisplayCallbacks;
    },
    
    /**
     * APIMethod: callback
     * Helper method used to run the menu callbacks.
     *
     * Parameters:
     *  name - {String} name of the method 
     *  args - {Array} arguments to be passed 
     */
    callback: function (name, args) {
        if (this.menuDisplayCallbacks[name]) {
            this.menuDisplayCallbacks[name].apply(this.control, args);
        }
    },
	
	 /**
     * APIMethod: showMenu
     * Triggered by the <EMS.Handler.RightClick>. Calls the showMenu callback function 
     * and passes in a <OpenLayers.LonLat> of the location clicked by the user.
     *
     * 
     * Parameters:
     *  evt - {<OpenLayers.Event>} 
     *  
     */
	showMenu: function(evt){
		this.callback("showMenu", [this.map.getLonLatFromPixel(evt.xy)]);
	},
	
	 /**
     * APIMethod: hideMenu
     * Triggered by the <EMS.Handler.RightClick>. Calls the hideMenu callback function.
     * 
	 * Parameters:
     *  evt - {<OpenLayers.Event>} 
     *
     */
	hideMenu: function(evt){
		this.callback("hideMenu", []);
	},
	
	/**
     * APIMethod: activate
     * Disables the browser context menu for the map div and registers to the zoomend event so
     * hideMenu can be called when a zoom has occured. hideMenu on other map events is handled by the 
     * <EMS.Handler.RightClick>.
     *
     */
	activate: function () {
        if (this.active) {
            return false;
        }
        if (this.handler) {
            this.handler.activate();
        }
        //stop browser context menu from appearing
		this.map.div.oncontextmenu = function noContextMenu(e) {return false;};
		//hide menu when zoomend
		this.map.events.register("zoomend", this, this.hideMenu);

        this.active = true;
        return true;
    },
    
    /**
     * APIMethod: deactivate
     * Disables the ContextMenu control.
     *
     */
    deactivate: function () {
        if (this.active) {
            if (this.handler) {
                this.handler.deactivate();
            }
            this.map.events.unregister("zoomend", this, this.hideMenu);
            this.active = false;
            return true;
        }
        return false;
    },

    /** @final @type String */
    CLASS_NAME: "EMS.Control.ContextMenu"
});
