/**
 * Namespace: EMS
 * The EMS object provides a namespace for EMS extensions.
 */


////
/// This blob sucks in all the files in uncompressed form for ease of use
///

EMS = new Object();
EMS.Control = new Object();
EMS.Handler = new Object();

EMS._scriptName = (
    typeof(_EMS_SFL_) == "undefined" ? "lib/EMS.js"
                                            : "EMS.js" );


// This is called a lot.  Cache?
EMS._getScriptLocation = function () {
	//This is done in a two step process as getElementsByTagName('script') does not always return
	// all scripts especially if the scripts are contained in the head.
    //Search the head first
    var scriptLocation = this._searchForEmsLibraryLocation(document.getElementsByTagName("head")[0].childNodes);
    if (scriptLocation == null){
    	//Try searching again as scripts may be located outside the head tag
    	scriptLocation = this._searchForEmsLibraryLocation(document.getElementsByTagName('script'));
    }
    return scriptLocation == null ? "" : scriptLocation;
    //return 'http://ems.whereis.com/v1/web/js/ems/';
}

EMS._searchForEmsLibraryLocation = function (scripts){
	var scriptLocation = null;
	 var SCRIPT_NAME = EMS._scriptName;
	 for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].tagName == "SCRIPT") {
            var src = scripts[i].getAttribute('src');
            if (src != null){
            	if (src.indexOf("?") > -1)
                	src = src.substring(0, src.indexOf("?"));
            	if (src) {
                	var index = src.lastIndexOf(SCRIPT_NAME);
                	// is it found, at the end of the URL?
                	if ((index > -1) && (index + SCRIPT_NAME.length == src.length)) {
                    	scriptLocation = src.slice(0, -SCRIPT_NAME.length);
                    	break;
                }
            }
            }
        }
    }
    return scriptLocation;
}

/*
  `_EMS_SFL_` is a flag indicating this file is being included
  in a Single File Library build of the library.

  When we are *not* part of a SFL build we dynamically include the
  library code.

  When we *are* part of a SFL build we do not dynamically include the
  EMS library code as it will be appended at the end of this file.
*/
if (typeof(_EMS_SFL_) == "undefined") {
    /*
      The original code appeared to use a try/catch block
      to avoid polluting the global namespace,
      we now use a anonymous function to achieve the same result.
     */
    (function() {
    var jsfiles=new Array(
        "EMSUtils.js",
        "Ajax.js",
        "HoverIcon.js",
        "EMSServices.js",
        "EMSGeometry.js",
        "EMSZoomBar.js",
        "EMSPopup.js",
        "EMSPanButton.js",
        "HighlightFeature.js",
        "MouseDefaults.js",
        "OverviewMap.js",
        "NorthArrow.js",
        "Copyright.js",
        "Button.js",
        "Scale.js",
        "MultiPopup.js",
        "MarkerProximityCombiner.js",
        "MarkerGroup.js",
        "CombinerCalculator.js",
        "MagicMarker.js",
        "PixelBounds.js",
        "MagicMarkerSorter.js",
        "IndexedLayer.js",
        "ContextMenu.js",
        "RightClick.js",
        "ContextPopup.js",
        "TabbedPopup.js",
        "RoutePopup.js",
        "DraggingControl.js",
        "DragMarkerHandler.js"
    ); // etc.

    var allScriptTags = "";
    //var host = EMS._getScriptLocation() + "lib/";
    var host = 'http://ems.whereis.com/v1/web/js/ems/lib/'
    //var localEmsPath = '/gui/core/lib/EMS/';
    var localEmsPath = IFL.host + Config.emsPath + "/";
    
    for (var i = 0; i < jsfiles.length; i++) {
        if (/MSIE/.test(navigator.userAgent) || /Safari/.test(navigator.userAgent)) {
		    //var currentScriptTag = "<script src='" + host + jsfiles[i] + "'></script>";
			
			//if (jsfiles[i] == 'EMSUtils.js' ||  jsfiles[i] == 'Ajax.js') {
			var	currentScriptTag = "<script src='" + localEmsPath + jsfiles[i] + "'></script>";
			//}
            
            allScriptTags += currentScriptTag;
        } else {
            var s = document.createElement("script");
           // s.src = host + jsfiles[i];
            
           // if (jsfiles[i] == 'EMSUtils.js' || jsfiles[i] == 'Ajax.js') {
                s.src = localEmsPath + jsfiles[i];
         //   }
            
            var h = document.getElementsByTagName("head").length ?
                       document.getElementsByTagName("head")[0] :
                       document.body;
            h.appendChild(s);
        }
    }
    if (allScriptTags) document.write(allScriptTags);
    });
}



EMS.tilePath = 'http://tiles.whereis.com:80/remapper';
EMS.tileVersion = '1.0.8';
EMS.token = '7696864323343493120';
EMS.VERSION_NUMBER = '1.20.3';
