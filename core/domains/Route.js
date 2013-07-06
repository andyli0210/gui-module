IFL.Domain.Route = function(xml) {
    var id;
    var title;
    var vehicles = [];
    var visits = [];
    var assets = [];
    if (xml) {
        initByXml(xml);
    }
    
    function initByXml(xml) {
        id = jQuery(xml).attr('id');
        if (!id) {
            id = jQuery(xml).find('>id').text();
        }
        jQuery(xml).find('visit').each(function() {
            var visitXml = jQuery(this);
            var visit = new IFL.Domain.Visit(visitXml);
            
            visits.push(visit);
        });
        
        jQuery(xml).find('resource > id').each(function() {
            assets.push(jQuery(this).text());
        });
        
    }
    
    function getVehicles() {
        return vehicles;
    }
    
    function getVisits() {
        return visits;
    }
    
    function getAssets() {
        return assets;
    }
    
    function getXml() {
        return xml;
    }
    
    return {
        initByXml: initByXml,
        getVehicles: getVehicles,
        getVisits: getVisits,
        getAssets: getAssets,
        id: id,
        title: title,
        getXml: getXml
    }
}
