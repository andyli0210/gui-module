IFL.Domain.Schedule = function(xml) {
    var id;
    var title;
    var type;
    var version;
    
    var locations = [];
    var vehicles = [];
    var routes = [];
    
    if (xml) {
        initByXml(xml);
    }
    
    function initByXml(xml) {
        id = jQuery(xml).find('schedule').attr('id');
        
        if (!id) {
            id = jQuery(xml).find('>id').text();
        }
        
        //get locations
        jQuery(xml).find('locations > location').each(function() {
            var locationXml = jQuery(this);
            var location = new IFL.Domain.Location(locationXml);
            
            locations.push(location);
        });
        
        //init routes
        jQuery(xml).find('routes > route').each(function() {
            var routeXml = jQuery(this);
            var route = new IFL.Domain.Route(routeXml);
            
            routes.push(route);
            
            initVisitLocation(route.getVisits());
        });
        
        
    }
    
    function initVisitLocation(visits) {
        for (var i=0; i<visits.length; i++) {
            var visit = visits[i];
            
            if (visit.locRef) {
                var location = findLocationById(visit.locRef);
                visit.setLocation(location);
            }
        }
    }
    
    function findLocationById(locId) {
        for (var i=0;  i<locations.length; i++) {
            var location = locations[i];
            if (location.id == locId) {
                return location;
            }
        }
        
        return null;
    }
    
    function getRoutes() {
        return routes;
    }
    
    function setRoutes(_routes) {
        routes = _routes;
    }
    
    return {
        id: id,
        title: title,
        getRoutes: getRoutes
    }    
}
