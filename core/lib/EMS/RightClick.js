/**
 * Class: EMS.Handler.RightClick
 *
 * This class is used to show and hide context menus on the map.
 * When a right mouse click is detected the handler will call the show menu callback function.
 * Any other sort of mouse click with call the hide menu callback function. 
 *
 * Inherits from:
 *  - <OpenLayers.Handler> 
 */
EMS.Handler.RightClick = OpenLayers.Class.create();
EMS.Handler.RightClick.prototype = 
  OpenLayers.Class.inherit(OpenLayers.Handler, {
    
	 /**
     * Constructor: EMS.Handler.RightClick
     * Returns EMS.Handler.RightClick
     * 
     * Parameters:
     * control - {<OpenLayers.Control>} The control that is making use of
     * 	this handler. In most cases this will be <EMS.Control.ContextMenu>.
     * callbacks - {Object} An object containing a two functions. One for showing 
     * 	the menu and one for hiding the menu. Callbacks for 'hide' and 'show' 
     * 	are supported.
     * options - {Object} 
     */
	initialize: function(control, callbacks, options) {
        OpenLayers.Handler.prototype.initialize.apply(this, arguments);
    },
    
    /**
     * Method: activate
     * Activate the handler.
     * 
     * Returns:
     * {Boolean} The handler was successfully activated.
     */
    activate: function() {
        if(!OpenLayers.Handler.prototype.activate.apply(this, arguments)) {
            return false;
        }
        var options = {};
        return true;
    },
    
    /**
     * Method: deactivate 
     * Deactivate the handler.
     * 
     * Returns:
     * {Boolean} The handler was successfully deactivated.
     */
    deactivate: function() {
        if(!OpenLayers.Handler.prototype.deactivate.apply(this, arguments)) {
            return false;
        }
        // call the cancel callback if mid-drawing
        if(this.showingMenu) {
            this.hideMenu();
        }
        return true;
    },
    
     /**
     * Method: mousedown
     * Handle mousedown events
     *
     * Parameters:
     * evt - {Event} 
     *
     */
     mousedown: function(evt) {
       	if((((evt.which) && (evt.which == 2)) || ((evt.button) && (evt.button == 2)))){
       		this.hideMenu(evt);
        	this.displayMenu(evt);
        }else {
			this.hideMenu(evt);
		}
      },
      
     /**
     * Method: hideMenu
     * Calls the controllers hideMenu function
     *
     * Parameters:
     * evt - {Event} 
     *
     */
      hideMenu: function(evt){
      		this.callback("hide", [evt]);
      },
      
     /**
     * Method: displayMenu
     * Calls the controllers showMenu function
     *
     * Parameters:
     * evt - {Event} 
     *
     */
      displayMenu: function(evt){
      		this.callback("show", [evt]);
      },
  

    /** @final @type String */
    CLASS_NAME: "EMS.Handler.RightClick"
});
