IFL.Domain.Region = function(xml) {
    var id;
    var title;
    var polygonStr;
    var vertices = [];
    
    if (xml) {
        initByXml(xml);
    }

    function initByXml(xml) {
        var regionXml = jQuery(xml);
        id = regionXml.find('region').attr('id');
        
        if (!id) {
            id = regionXml.find('>id').text();
        }
        
        title = regionXml.find('title').text();
        
        polygonStr = regionXml.find('polygon').text();
    }
    
    function getVertices() {
        return vertices;
    }
    
    return {
        id: id,
        title: title,
        polygonStr: polygonStr,
        getVertices: getVertices
    }
}