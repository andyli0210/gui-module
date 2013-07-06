IFL.Domain.Visit = function(xml) {
    var id;
    var status;
    var earliestTime;
    var latestTime;
    var travels = [];
    var services = [];
    var location;
    var locRef;
    var visitXml;
    
    if (xml) {
        initByXml(xml);
    }
    
    function initByXml(xml) {
        visitXml = xml;
        id = jQuery(xml).attr('id');
        
        if (!id) {
            id = jQuery(xml.get(0)).find('>id').text();
        }
        
        var locationXml = jQuery(xml).find('> location');
        locRef = jQuery(xml).attr('refLocation');
        
        if (locationXml) {
            location = new IFL.Domain.Location(locationXml);
        } 
        
        status = jQuery(xml).find('> status').text();
        earliestTime = jQuery(xml).find('> timeEarliest').text();
        latestTime = jQuery(xml).find('> timeLatest').text();
        
        jQuery(xml).find('service').each(function() {
            var serviceXml = jQuery(this);
            var service = new IFL.Domain.Service(serviceXml);
            
            services.push(service);
        });
    }
    
    function getId() {
        return id;
    }
    
    function getStatus() {
        return status;
    }
    
    function setStatus(newStatus) {
        return status = newStatus;
    }
    
    function getEarliestTime() {
        return earliestTime;
    }
    
    function getLatestTime() {
        return latestTime;
    }
    
    function getTravels() {
        return travels;
    }
    
    function getLocation() {
        return location;
    }
    
    function setLocation(_location) {
        location = _location;
    }
    
    function getServices() {
        return services;
    }
    
    function getXml() {
        return visitXml;
    }
    
    return {
        initByXml: initByXml,
        id: id,
        locRef: locRef,
        getXml: getXml,
        setStatus: setStatus,
        getStatus: getStatus,
        getEarliestTime: getEarliestTime,
        getLatestTime: getLatestTime,
        getTravels: getTravels,
        getLocation: getLocation,
        setLocation: setLocation,
        getServices: getServices
    }
    
}
