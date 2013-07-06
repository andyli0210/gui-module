// Extend Open Layers to Support printing

/**
 * APIMethod: OpenLayers.Geometry.externalize 
 * 
 * Add the ability to produce an external format using the supplied formatter.
 * 
 * Parameters:
 * formatter - to use to externalize object
 * 
 * Returns: 
 * A simplified object definition based on the formatter definition
 */
OpenLayers.Geometry.prototype.externalize= function(formatter) {
	throw "EMS Unsupported Geometry Type: "+this.CLASS_NAME;
};

/**
 * APIMethod: OpenLayers.Geometry.LineString.prototype.externalize
 * 
 * Add the ability to produce an external format using the supplied formatter.
 * 
 * Parameters:
 * 	formatter - to use to externalize object
 * 
 * Returns: 
 * A simplified object definition based on the formatter definition
 */
OpenLayers.Geometry.LineString.prototype.externalize =  function(formatter) {
	return formatter.formatPolyline(this);
};
	
/**
 * APIMethod: OpenLayers.Geometry.LinearRing.externalize 
 * 
 * Add the ability to produce an external format using the supplied formatter.
 * 
 * Parameters:
 * formatter - to use to externalize object
 * 
 * Returns:
 * A simplified object definition based on the formatter definition
 */
OpenLayers.Geometry.LinearRing.prototype.externalize = function(formatter) {
	return formatter.formatClosedPolyline(this);
};

/**
 * APIMethod: EMS.Geometry.MultiLineString.externalize 
 * 
 * Add the ability to produce an external format using the supplied formatter.
 * 
 * Parameters:
 * formatter - to use to externalize object
 * 
 * Returns: 
 * A simplified object definition based on the formatter definition
 */
OpenLayers.Geometry.MultiLineString.prototype.externalize = function(formatter) {
	return formatter.formatGeometryContainer(this);
};

/**
 * APIMethod: OpenLayers.Geometry.Polygon.prototype.externalize 
 * 
 * Add the ability to produce an external format using the supplied formatter.
 * 
 * Parameters:
 * formatter - to use to externalize object
 * 
 * Returns:
 * A simplified object definition based on the formatter definition
 */
OpenLayers.Geometry.Polygon.prototype.externalize = function(formatter) {
	return formatter.formatGeometryContainer(this);
};

/**
 * APIMethod: OpenLayers.Geometry.Point.externalize
 * 
 * Add the ability to produce an external format using the supplied formatter.
 * 
 * Parameters:
 * formatter - to use to externalize object
 * 
 * Returns:
 * A simplified object definition based on the formatter definition
 */
OpenLayers.Geometry.Point.prototype.externalize = function(formatter){
	return formatter.formatPoint(this);
};

/**
 * APIMethod: OpenLayers.Feature.Vector.externalize
 * 
 * Add the ability to produce an external format using the supplied formatter.
 * 
 * Parameters:
 * formatter - to use to externalize object
 * 
 * Returns:
 * A simplified object definition based on the formatter definition
 */
OpenLayers.Feature.Vector.prototype.externalize= function(formatter) {
	return formatter.formatFeature(this);
};

// Namespace
EMS.Layer = new Object();

/**
 * Class: EMS.Layer.Vector
 * 
 * Drop-in replacement for <OpenLayers.Layer.Vector> which provides the ability
 * to serialise its contained geometric features.
 * 
 * Inherits from: - <OpenLayers.Layer.Vector>
 */
EMS.Layer.Vector = OpenLayers.Class(OpenLayers.Layer.Vector,{
	
    /**
	 * Constructor: EMS.Layer.Vector Create a new vector layer
	 * 
	 * Parameters: 
	 *  name - {String} A name for the layer 
	 *  options - {Object} options Object with non-default properties to set on the layer
	 * 
	 * Returns: {<EMS.Layer.Vector>} A new vector layer
	 */
	initialize: function(name, options) {
    	OpenLayers.Layer.Vector.prototype.initialize.apply(this, arguments);
	},
	
	/**
	 * APIMethod: externalize 
	 * 
	 * Parameters:
	 * 	 formatter - to use to externalize object
	 * 
	 * Returns: 
	 * A simplified object definition based on the formatter definition
	 */
	externalize: function(formatter){
		return formatter.formatVector(this);
	}
});

// Namespace
EMS.Feature = new Object();

/**
 * Class: EMS.Feature.Vector
 * 
 * Drop-in replacement for <OpenLayers.Feature.Vector> which provides the
 * ability to serialise its contained geometric features.
 * 
 * Inherits from: - <OpenLayers.Feature.Vector>
 */
EMS.Feature.Vector = OpenLayers.Class(OpenLayers.Feature.Vector,{
	
    /**
	 *  APIProperty: routeHandle
	 *  {String} set if layer is associated with an EMS route.
	 */
	routeHandle: null,
	
    /**
	 * Constructor: initialize
	 * 
	 * Create a vector feature.
	 * 
	 * Properties: 
	 * geometry - {<OpenLayers.Geometry>} The geometry that this feature represents. 
	 * attributes - {Object} An optional object that will be mapped to the <attributes> property. 
	 * style - {Object} An optional style object.
	 */
	initialize: function(geometry, attributes, style) {
		OpenLayers.Feature.Vector.prototype.initialize.apply(this, arguments);
	},
	
	/**
	 * APIMethod: getRouteHandle
	 * 
	 * Returns: the associated EMS route handle or null
	 * 
	 * @deprecated Use vector.routeHandle instead.
	 */
	getRouteHandle: function(){
		return this.routeHandle;
	}

});



// Namespace
EMS.Geometry = new Object();

/**
 * Class: EMS.Geometry.JsonFormatter
 * 
 * Provide a simple JSON formatter for Vector layer geometry. 
 *  
 */
EMS.Geometry.JsonFormatter=OpenLayers.Class({
	
	defaultColor: "none",
	defaultOpacity: 0.0,
	defaultWidth: 1,
	defaultLinecap: null,
	
	filter: null,
	lineReducer: null,
	
	
    /**
     * Constructor: initialize
     * Creates a new instance of EMS.Geometry.EMSJsonFormatter.
     *
     * Properties: 
	 * filter - EMS.Geometry.PolylineBoundsFilter clip the line to the desired view port. 
	 * lineReducer - EMS.Geometry.SimpleLineReducer strategy for reducing the number of points contained in the line.
     */
    initialize: function(filter,lineReducer) {
			this.filter = filter;
			this.lineReducer = lineReducer;
	},
    
    
	/**
	 * APIMethod: formatVector 
	 * Create a simple json format for the vector.
	 *  
	 *  Parameters:
	 *   vector - EMS.Layer.Vector 
	 * 
	 *  Returns: 
	 *  simple json format { features: [ {Feature.Vector}] }
	 */
    formatVector: function(vector){
    	return {
				features: this._formatComponents(vector.features)
		};
    },
    
	/**
	 * APIMethod: formatFeature 
	 * Create a simple json format for the feature.
	 * 
	 *  Parameters:
	 *  feature - OpenLayers.Feature.Vector
	 * 
	 *  Returns:
	 *  simple json format { routeHandle: {String} style: {Object} geometry: [ Formatted Geometry ] }
	 */
    formatFeature: function(feature){
    	return {
				routeHandle: feature.routeHandle ? feature.routeHandle : null,
				style: this.formatStyle(feature.style),
			    geometry: feature.routeHandle ? null : feature.geometry.externalize(this)	            
		};   	
    },
	
    /**
     * APIMethod: formatGeometryContainer 
     * Create a simple json format for the a geometry type which contains other geometry.
     * 
     * Parameters:
     * geometryContainer - OpenLayers.Geometry which contains other geometry types except Point
     * 
     * Returns: 
     * simple json format{ type: {String} components: {Array(Object)} }
     */
    formatGeometryContainer: function(geometryContainer){
    	return {
				type: geometryContainer.CLASS_NAME,
				components: this._formatComponents(geometryContainer.components)
			};
    },
    
    /**
     * APIMethod: formatPolyline 
     * Create a simple json format for the a geometry type which contains points.
     * 
     * Parameters:
     * pointContainer - OpenLayers.Geometry.LineString
     * 
     * Returns: 
     * simple json format { type: {String} segments: {Array(Array(points))} }
     */
    formatPolyline: function(line){
    	var visablePolylines = this._filterPolyline(line.components);
    	var segments = [];
    	for (var i=0; i < visablePolylines.length; i++){
    		segments.push(this._formatComponents(this._reducePolyline(visablePolylines[i])));
    	}
    	return {
    				type: line.CLASS_NAME,
    				segments: segments
    			};
    },
   
    /**
     * APIMethod: formatClosedPolyline 
     * Create a simple json format for the a geometry type which contains points.
     * 
     * Parameters:
     * pointContainer - OpenLayers.Geometry.LinearRing
     * 
     * Returns: 
     * simple json format { type: {String} segments: {Array(Array(points))} }
     */
   formatClosedPolyline: function(line){       	
       	var segments = [];
        segments.push(this._formatComponents(this._reducePolyline(line.components)));
       	return {
       				type: line.CLASS_NAME,
       				segments: segments
       			};
   },    	
    
    /**
     * APIMethod: formatStyle 
     * Create a simple json format for styling the geometry.
     * 
     * Parameters:
     * style - style object
     * 
     * Returns: 
     * simple json format { fillColor: {String} fillOpacity: {String} } }
     */
    formatStyle: function(style){
    	return  {
			fillColor: style.fillColor ? style.fillColor : this.defaultColor,
	    	fillOpacity: style.fillOpacity ? style.fillOpacity : this.defaultOpacity,
	    	strokeColor: style.strokeColor ? style.strokeColor : this.defaultColor,
	    	strokeOpacity: style.strokeOpacity ? style.strokeOpacity : this.defaultOpacity,
	    	strokeWidth: style.strokeWidth ? style.strokeWidth : this.defaultWidth,
	    	strokeLinecap: style.strokeLinecap ?  style.strokeLinecap : this.defaultLinecap
		};
    },
	
    _formatComponents: function(components){
    	var extComponents = [];
        for (var i = 0; i < components.length; i++){
        	extComponents.push(components[i].externalize(this));
        }	                    
        return extComponents;
    },
    
    _reducePolyline: function(polyline){
    	if (this.lineReducer){
    		return this.lineReducer.reduce(polyline);
    	}
    	return polyline;
    },
    
    _filterPolyline: function(polyline){
    	if (this.filter){
    		return this.filter.filter(polyline);
    	}
    	return [polyline];
    },
    
    /**
     * APIMethod: formatPoint     
     * The y coordinate of the point will be converted to WGS84 format.
     * 
     * Parameters:
     * point - an <OpenLayers.Geometry.Point>
     * 
     * Returns: 
     * simple json format{ x: {float} y: {float} }
     */
    formatPoint: function(point){
    	return {x: point.x, y: EMS.Util.sgp4ToLat(point.y)};
    },
	
	CLASS_NAME: "EMS.Geometry.JsonFormatter"
});
	
	
/**
 * Class: EMS.Geometry.SimpleLineReducer
 * 
 * Simple line generaliser using a distance measurement to weed out points
 * based on the current map resolution.
 *  
 */
EMS.Geometry.SimpleLineReducer = OpenLayers.Class({
	
	factor: 5,
		
	minDistance: null,
	
    /**
     * Constructor: initialize
     * Creates a new instance of EMS.Geometry.SimpleLineReducer.
     *
     * Properties: 
	 * resolution - the current map resolution 
     */
	initialize: function(resolution) {
		this.minDistance = resolution * this.factor;
	},
	
    /**
     * APIMethod: reduce     
     * Reduce the polyline by testing the distance between points and discarding those
     * designated to close.
     * 
     * Parameters:
     * polyline - an Array{<OpenLayers.Geometry.Point>}
     * 
     * Returns: 
     * a simplified polyline
     */
	reduce: function(polyline){
		var reducedLine = [];
		var currentPoint = polyline[0];
		reducedLine.push(currentPoint);
		if (polyline.length > 1){
			var numPoints = polyline.length - 1;
			for (var i = 1; i < numPoints; i++ ){
				var testPoint = polyline[i];
				if (this.includePoint(currentPoint, testPoint)){
					reducedLine.push(testPoint);
					currentPoint = testPoint;
				}
			}
			reducedLine.push(polyline[numPoints]);
		}	
		return reducedLine;
	},
	
	includePoint: function(firstPoint, secondPoint){
		return (Math.abs(firstPoint.x - secondPoint.x) > this.minDistance)
        || (Math.abs(firstPoint.y - secondPoint.y) > this.minDistance);
	},
	
	CLASS_NAME: "EMS.Geometry.SimpleLineReducer"
	
});

/**
 * Class: EMS.Geometry.PolylineBoundsFilter
 * 
 * Clips a polyline to a defined boundary.
 *  
 */
EMS.Geometry.PolylineBoundsFilter = OpenLayers.Class({
	
	bounds: null,
	
    /**
     * Constructor: initialize
     * Creates a new instance of PolylineBoundsFilter.
     *
     * Properties: 
	 * mapExtent - the current map bounds 
     */
	initialize: function(mapExtent) {
		this.bounds = mapExtent;
	},

    /**
     * APIMethod: filter     
     * Clip the polyline to the desired bounds.
     * This may produce multiple lines (segments).
     * 
     * Parameters:
     * polyline - an Array{<OpenLayers.Geometry.Point>}
     * 
     * Returns: 
     * an array of line segments
     */
    filter: function(polyline){
		var containedPolylines = [];
		if (polyline.length > 1 ){
			var containedPolyline = [];
			var numPoints = polyline.length - 1;
			for (var i = 0; i < numPoints; i++) {
				var lineBoundingBox = new OpenLayers.Bounds(polyline[i].x, polyline[i].y, polyline[i+1].x, polyline[i+1].y);
				if (this.bounds.intersectsBounds(lineBoundingBox)) {
					if (containedPolyline.length == 0){
						containedPolyline.push(polyline[i]);
					}
					containedPolyline.push(polyline[i+1]);
				} else if (containedPolyline.length > 0) {
					containedPolylines.push(containedPolyline);
					containedPolyline = [];
				}
			}
			//No point if there is only one point contained!
			if (containedPolyline.length > 1){
				containedPolylines.push(containedPolyline);
			}
		}
		return containedPolylines;
	},
	
	CLASS_NAME: "EMS.Geometry.PolylineBoundsFilter"
	
});
