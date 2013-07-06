/**
 * Namespace: EMS.Util
 *
 * EMS.Util is the namespace for all utility functions 
 */
EMS.Util = new Object();

/**
 * APIFunction: EMS.Util.latToSGP4
 *
 * Convert a WGS 84 latitude
 */
EMS.Util.latToSGP4 = function(lat) {
	return EMS.mapProjection.projectLatitude(lat);
}

/**
 * APIFunction: EMS.Util.sgp4ToLat
 *
 * convert a latitude in sgp 4 projection into WGS 84 regular latitude
 */
EMS.Util.sgp4ToLat = function(lat_) {
    return EMS.mapProjection.unprojectLatitude(lat_);
}

EMS.Util.isIE8 = function() {
	if (OpenLayers.Util.getBrowserName() == "msie") {
    	if (typeof XDomainRequest != "undefined") {
            return true;
        }
    }
    return false;
}


EMS.Util.isIE6 = function() {
	if (window.ActiveXObject) {
    	if (!window.XMLHttpRequest) {
            return true;
        }
    }
    return false;
}

/*
 * Firefox browser detection.
 * This is based on the Mootools equivalent check.
 */
EMS.Util.isGecko = function() {
	return document.getBoxObjectFor != null || window.mozInnerScreenX != null;
}

/*
APIFunction: EMS.Util.$type
	Returns the type of object that matches the element passed in.

Arguments:
	obj - the object to inspect.

Example:
	>var myString = 'hello';
	>$type(myString); //returns "string"

Returns:
	'element' - if obj is a DOM element node
	'textnode' - if obj is a DOM text node
	'whitespace' - if obj is a DOM whitespace node
	'array' - if obj is an array
	'object' - if obj is an object
	'string' - if obj is a string
	'number' - if obj is a number
	'boolean' - if obj is a boolean
	'function' - if obj is a function
	false - (boolean) if the object is not defined or none of the above.
*/
EMS.Util.$type = function(obj) {
	if (obj === null || obj === undefined) return false;
	var type = typeof obj;
	if (type == 'object'){
		if (obj.htmlElement) return 'element';
		if (obj.push) return 'array';
		if (obj.nodeName){
			switch (obj.nodeType){
				case 1: return 'element';
				case 3: return obj.nodeValue.test(/\S/) ? 'textnode' : 'whitespace';
			}
		}
	}
	return type;
};

EMS.Util.Json = {

	/*
	APIFunction: EMS.Util.Json.toString
		Converts an object to a string, to be passed in server-side scripts as a parameter. Although its not normal usage for this class, this method can also be used to convert functions and arrays to strings.

	Arguments:
		obj - the object to convert to string

	Returns:
		A json string

	Example:
		(start code)
		EMS.Util.Json.toString({apple: 'red', lemon: 'yellow'}); "{"apple":"red","lemon":"yellow"}" //don't get hung up on the quotes; it's just a string.
		(end)
	*/
	toString: function(obj){
        switch (EMS.Util.$type(obj)){
			case 'string':
				return '"'+obj.replace(new RegExp('(["\\\\])', 'g'), '\\$1')+'"';
			case 'array':
				return '['+ this._map(obj, function(ar){
					return EMS.Util.Json.toString(ar);
				}).join(',') +']';
			case 'object':
				var string = [];
				for (var property in obj) {
					//Ignore Functions
					if (EMS.Util.$type(obj[property]) != 'function'){
						string.push('"'+property+'":'+EMS.Util.Json.toString(obj[property]));
					}
				}
				return '{'+string.join(',')+'}';
            case 'function':
                return null;
        }
		return String(obj);
	},

	/*
	APIFunction: EMS.Util.Json.evaluate
		converts a json string to an javascript Object.

	Arguments:
		str - the string to evaluate.

	Example:
		>var myObject = Json.evaluate('{"apple":"red","lemon":"yellow"}');
		>//myObject will become {apple: 'red', lemon: 'yellow'}
	*/
	evaluate: function(str){
		return eval('(' + str + ')');
	},

    _map: function(array, func) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            result.push(func(array[i]));
        }
        return result;
    }

};

/**
 * APIMethod: EMS.Util.getParameterString
 *
 * Parameters:
 * params - {Object} parameters to convert into a URL encoded string.
 *
 * Returns:
 * {String} a concatenation of the properties of an object in
 * http parameter notation.
 *    (ex. <i>"key1=value1&key2=value2&key3=value3"</i>)
 * If a parameter is an object that parameter will then
 * be encoded into JSON
 */
EMS.Util.getParameterString = function(params) {
    var paramsArray = new Array();

    for (var key in params) {
        var value = params[key];
        if ((value != null) && (typeof value != 'function')) {
            var encodedValue;
            if (typeof value == 'object') {
                encodedValue = encodeURIComponent(EMS.Util.Json.toString(value));
            }
            else {
                /* value is a string; simply encode */
                encodedValue = encodeURIComponent(value);
            }
            paramsArray.push(encodeURIComponent(key) + "=" + encodedValue);
        }
    }

    return paramsArray.join("&");
};

EMS.Event = {

    /**
     * APIMethod: EMS.Event.pointerX
     * The current X position of the pointer.  Usually called as part of an
     * event handler. 
     *
     * Parameters:
     *  event - {Event} event object
     *
     * Returns:
     * x position of cursor 
     */
    pointerX: function(event) {
        return event.pageX || (event.clientX +
                               (document.documentElement.scrollLeft || document.body.scrollLeft));
    },

    /**
     * APIMethod: EMS.Event.pointerY
     * The current Y position of the pointer.  Usually called as part of an
     * event handler
     *
     * Parameters:
     *  event - {Event} event object
     *
     * Returns:
     * y position of cursor 
     */
    pointerY: function(event) {
        return event.pageY || (event.clientY +
                               (document.documentElement.scrollTop || document.body.scrollTop));
    }
}

/**
 * Method: OpenLayers.Util.onImageLoadError
 *
 * Overrides the openlayers image load error handler so that the no_data.png
 * tile is displayed when a tile fails to load.
 */
OpenLayers.Util.onImageLoadError = function() {
    this._attempts = (this._attempts) ? (this._attempts + 1) : 1;
    if(this._attempts <= OpenLayers.IMAGE_RELOAD_ATTEMPTS) {
        this.src = this.src;
    } else {

        var sizeLabel = "";

        //for mobi profile        
        if (OpenLayers.Map.TILE_WIDTH == 200) {
            sizeLabel = "_200x200";
        }                

        if(this.src.indexOf("LAYERS=street") >= 0 ){
            this.src = EMS.Util.getImagesLocation() + "no_data_map" + sizeLabel + ".png";
        } else{
            this.src = EMS.Util.getImagesLocation() + "no_data" + sizeLabel + ".png";
        }    
    }
    this.style.display = "";
};

EMS.ImgPath = 'http://ems.whereis.com/v1/web/js/ems/img/';

/**
 * APIMethod: EMS.Util.getImagesLocation
 * Determines the url of the EMS images 
 *
 * Returns:
 * {String} url to EMS images 
 */
EMS.Util.getImagesLocation = function() {
    return EMS.ImgPath || (EMS._getScriptLocation() + "img/");
};

/**
 * Method: EMS.Util.getDomain
 * Extract the domain that is currently displayed in the address bar.
 * 
 * Returns:
 * {String} domain name. 
 */
EMS.Util.getDomain = function() {
    // EMS-364 - fix regex to be less greedy
	var regexS = "https?.//([^:/]*)[:/]";
    var regex = new RegExp( regexS );
    var tmpURL = window.location.href;
    var results = regex.exec( tmpURL );
    //return results[1];
    return 'localhost';
}

/**
 * APIMethod: EMS.Util.toAbsoluteUrl
 * Convert a relative URL into an absolute URL.
 *
 * Parameters:
 *  url - {String} relative url.
 *
 * Returns:
 *  {String} absolute URL.
 */
EMS.Util.toAbsoluteUrl = function(url) {
    if (url.startsWith("/")) {
        return window.location.href.match(/http:\/\/.*?\//)[0] + url.substring(1);
    } else {
        return (url.indexOf("http://") >= 0 ? "" : window.location.href.match(/.*\//)[0]) + url;
    }
}

/**
 * Method: EMS.Util.dump
 * Debugging method to dump out detail about the given object.
 *
 * Parameters:
 *  arr - {Any} the variable to dump.
 *
 * Returns:
 *  {String} formated debug message.
 */

EMS.Util.dump = function (arr,level) {
    var dumped_text = "";
    if(!level) level = 0;

    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    ";

    if(typeof(arr) == 'object') { //Array/Hashes/Objects
        for(var item in arr) {
            var value = arr[item];

            if(typeof(value) == 'object') { //If it is an array,
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += dump(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { //Stings/Chars/Numbers etc.
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
};

/**
 * APIProperty: EMS.Util.defaultResolutions
 * {Array}  array of resolutions for each zoom level. 
 */
EMS.Util.defaultResolutions = [0.1, 0.05, 0.025, 0.0125, 0.00625, 0.003125, 0.0015625, 0.00078125, 0.000390625, 0.0001953125, 0.00009765625, 0.000048828125, 0.0000244140625, 0.00001220703125, 0.000006103515625, 0.0000030517578125, 0.00000152587890625];

/**
 * Class: EMS.Util.ZoomCalculator
 *
 * Can be used to calculate zoom levels when no map object is available.
 *
 */
EMS.Util.ZoomCalculator = OpenLayers.Class({

    /**
     * Constructor: initialize
     * Constructs a new instance of the <EMS.Util.ZoomCalculator>  
     *
     * Parameters:
     *  resolutions - {Array} Array of resolutions current in effect.  For whereis
     *                layers use <EMS.Util.defaultResolutions>.
     *
     */
    initialize: function(resolutions, element) {
        this.resolutions = resolutions;
        var dimensions = OpenLayers.Element.getDimensions(element);
        if ( (dimensions.width == undefined) || (dimensions.height == undefined) || dimensions.width == 0 || dimensions.height == 0) {
            this.width = parseInt($(element).style.width);
            this.height = parseInt($(element).style.height);   
        } else {
        	this.width = dimensions.width;
            this.height = dimensions.height;
        }
    },

    /**
     * APIMethod: getZoomForExtent
     *
     * Parameters:
     *  bounds - {<EMS.Bounds>}
     *
     * Returns:
     * {Number} The index of the zoomLevel (entry in the resolutions array)
     * that still contains the passed-in extent. We do this by
     * calculating the ideal resolution for the given extend (based
     * on the map size) and then find the smallest resolution that
     * is greater than this ideal resolution.
     *
     */
    getZoomForExtent: function(extent) {
        var viewSize = new OpenLayers.Size(this.width, this.height);
        var idealResolution = Math.max( extent.getWidth()  / viewSize.w,
                                        extent.getHeight() / viewSize.h );
        return this.getZoomForResolution(idealResolution);
    },

    /**
     * APIMethod: getZoomForResolution
     *
     * Parameters:
     * resolution - {number} the desired resolution.
     *
     * Returns:  {int} The index of the zoomLevel (entry in the resolutions array)
     *           that is the smallest resolution that is greater than the
     *           passed-in resolution.
     *
     */
    getZoomForResolution: function(resolution) {

        for(var i=1; i < this.resolutions.length; i++) {
            if ( this.resolutions[i] < resolution) {
                break;
            }
        }
        return (i - 1);
    }

});

// OpenLayers event patch
// isleftClick that works properly.
OpenLayers.Event.isLeftClick = function(event) {
    return (((event.which) && (event.which == 1)) ||
            ((typeof event.button != 'undefined') && (event.button < 2)));
};

//OpenLayers patch
//Alter test to filter out any IE7 browsers masquerading as IE6.
//A bug exists within IE7 browsers that will report the user agent
//as MSIE 6.0 when the user agent string is longer than 260 characters.
//Additionally checking the existence of the XMLHttpRequest object can
//filter these out.

OpenLayers.Util.alphaHack = function() {
	if (navigator.appVersion.indexOf( "MSIE" ) != -1){
		var arVersion = navigator.appVersion.split("MSIE");
		var version = parseFloat(arVersion[1]);
		var filter = false;    
		// IEs4Lin dies when trying to access document.body.filters, because 
		// the property is there, but requires a DLL that can't be provided. This
		// means that we need to wrap this in a try/catch so that this can
		// continue.    
		try { 
			filter = document.body.filters;
		} catch (e) {
		}    
		return (filter && (version >= 5.5) && (version < 7) && !window.XMLHttpRequest);
	}
	return false;
}

/**
 * APIMethod: OpenLayers.LonLat.asWGS84
 *
 * Adds the asWGS84() function to the existing <OpenLayers.LonLat> object so
 * that we can easily convert to the WGS84 coordinate system.
 *
 * Returns:
 * <OpenLayers.LonLat> object with coordinates adjusted for WGS84 format.
 */
OpenLayers.LonLat.prototype.asWGS84 = function() {
    return { lon: this.lon, lat: EMS.Util.sgp4ToLat(this.lat) }; 
};

/**
 * Class: EMS.LonLat 
 *
 * Drop-in replacement for <OpenLayers.LonLat> that automatically converts
 * WGS84 coordinates into the SGP coordinate system.  
 * 
 * Inherits from:
 *  - <OpenLayers.LonLat> 
 */
EMS.LonLat = OpenLayers.Class( OpenLayers.LonLat, {
    /**
     * Constructor: initialize
     * Creates a new instances of the EMS.LonLat class using a longitude
     * and latitude.  The longitude and latitude are automatically converted
     * into SGP format.  To get back original WGS coordinates call
     * <OpenLayers.LonLat.prototype.asWGS84>. 
     *
     * Parameters:
     *  lon - {Number}  The longitude in WGS84 format.
     *  lat - {Number}  The latitude in WGS84 format.
     *
     */
    initialize: function(lon, lat) {
        OpenLayers.LonLat.prototype.initialize.apply(this,
                [lon, EMS.Util.latToSGP4(lat)]);
    }
});

/**
 * APIMethod: OpenLayers.Bounds.asWGS84
 * Used to retrieve longitude and latitude in WGS84 format. 
 * 
 * Returns:
 * <OpenLayers.Bounds> with coordinates translated to WGS84.  
 */
OpenLayers.Bounds.prototype.asWGS84 = function() {
    return new OpenLayers.Bounds(this.left, EMS.Util.sgp4ToLat(this.bottom), this.right,  EMS.Util.sgp4ToLat(this.top));
};

/**
 * Class: EMS.Bounds 
 *
 * Drop-in replacement for <OpenLayers.Bounds> that automatically converts
 * WGS84 coordinates into the SGP coordinate system.
 * 
 * Inherits from:
 *  - <OpenLayers.Bounds> 
 */
EMS.Bounds = OpenLayers.Class( OpenLayers.Bounds, {
    initialize: function(left, bottom, right, top) {
        OpenLayers.Bounds.prototype.initialize.apply(this, [left, EMS.Util.latToSGP4(bottom), right, EMS.Util.latToSGP4(top)]);
    }
});

EMS.Util.supportsSmoothZoom = function() {
    return navigator.userAgent.indexOf('AppleWebKit/') > -1;
}

EMS.Util.smoothZoom = function(map, zoomLonLat, lonLat, newZoom) {
    var div = map.baseLayer.div.parentNode;
    var scaleUp = map.getResolution() / map.baseLayer.resolutions[newZoom];

    var origin = Math.round(map.getPixelFromLonLat(zoomLonLat).x-div.style.pixelLeft) + "px " +
                                          Math.round(map.getPixelFromLonLat(zoomLonLat).y-div.style.pixelTop) + "px";

    if (!EMS.Util.supportsSmoothZoom()) {
        map.setCenter(lonLat, newZoom);
    } else {

        div.style.webkitTransform = "scale(" + scaleUp + ")";
        div.style.webkitTransformOrigin = origin;
        div.style.webkitTransition = "0.5s";

        var animator = OpenLayers.Function.bind(function() {
            div.style.webkitTransformOrigin = "";
            div.style.webkitTransform = "";
            div.style.webkitTransition = "";

            map.setCenter(lonLat, newZoom);

        }, this);
        setTimeout(animator, 500);
    }
}

OpenLayers.Events.prototype.includeXY = true;

EMS.EllipsoidalMercatorProjection = OpenLayers.Class({
	
    /**
     * Constructor: initialize
     * Creates a new instance of the EMS.EllipsoidalMercatorProjection class.
     *
     */
    initialize: function() { },

	E: 0.0818191908426216,
	
	projectLatitude: function(lat) {
		var theta =  this.toRadians(lat);
		var z = Math.pow(this.eDiff(this.E, theta), this.E) /  this.eDiff(1, theta);
		z = Math.log(z) / 2;
		return this.toDegrees(z);
	},
	
	unprojectLatitude: function(lat) {		
		var y = this.toRadians(lat);
		var adj = 1;
		var theta = 0, oldTheta;
		for (i = 0; i < 12; i++ ) {
			oldTheta = theta;
			theta = Math.PI/2 - 2*Math.atan(Math.exp(-y) * adj);
			if (Math.abs(theta - oldTheta) < 1E-7)
				break;
			adj = Math.pow(this.eDiff(this.E, theta), this.E/2);
		}
		return this.toDegrees(theta);
	},

	toRadians: function(degrees){
		return degrees / 180.0 * Math.PI;
	},
	
	toDegrees: function(radians) {
		return radians * 180.0 / Math.PI;
	},
	
	eDiff: function(e, theta) {
		return (1 - e * Math.sin(theta)) / (1 + e * Math.sin(theta));
	}
		
});

EMS.SGP4Projection = OpenLayers.Class({
	
	convertY: [0.000000,10.000000,20.154266,30.796044,42.343049,55.397122,70.954360,90.954360,120.192404,177.780109],
 	
    /**
     * Constructor: initialize
     * Creates a new instance of the EMS.SGP4Projection class.
     *
     */
    initialize: function() { },
	
	projectLatitude: function(lat) {	
		var ilat = Math.ceil(lat / 10);
		if (ilat >= 9)
			ilat = 8;

		if (lat >= 0) {
			return convertY[ilat] + ((lat - 10 * ilat) / 10) * (convertY[ilat + 1] - convertY[ilat]);
		} else {
			lat = -lat;
			ilat = -ilat;
			return -(convertY[ilat] + ((lat - 10 * ilat) / 10) * (convertY[ilat + 1] - convertY[ilat]));
		}
	},
	
	unprojectLatitude: function(lat_) {
		var i;
	    if (lat_ >= 0) {
	        for (i = 0; i < 10; i++) {
	            if (lat_ < convertY[i]) {
	                return ( (i - 1) * 10.0) + 10 * (lat_ - convertY[i - 1]) / (convertY[i] - convertY[i - 1]);
	            }
	        }
	        i = 9;
	        return ( (i - 1) * 10.0) + 10 * (lat_ - convertY[i - 1]) / (convertY[i] - convertY[i - 1]);
	    } else {
	        lat_ = -lat_;
	        for (i = 0; i < 10; i++) {
	            if (lat_ < convertY[i]) {
	                return -(( (i - 1) * 10.0) + 10 * (lat_ - convertY[i - 1]) / (convertY[i] - convertY[i - 1]));
	            }
	        }
	        i = 9;
	        return -(( (i - 1) * 10.0) + 10 * (lat_ - convertY[i - 1]) / (convertY[i] - convertY[i - 1]));
	    }
	}
});

EMS.mapProjection = new EMS.EllipsoidalMercatorProjection();