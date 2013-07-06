IFL.Domain.Vehicle = function(xml) {
    var id;
    var title;
    var type;
    var depot;
    
    if (xml) {
        initByXml(xml);
    }    
    
    function initByXml(xml) {
        
    }
    
    return {
        id: id,
        title: title,
        type: type,
        depot: depot
    }
}
