IFL.Domain.Location = function(xml) {
    var id;
    var title;
    var lat;
    var lon;
    var postcode;
    
    if (xml) {
        initByXml(xml);
    }
    
    function initByXml(xml) {
        id = jQuery(xml).attr('id');
        lat = jQuery(xml).find('lat').text();
        lon = jQuery(xml).find('lon').text();
        postcode = jQuery(xml).find('postcode > value').text();
    }
    
    return {
        id: id,
        title: title,
        lat: lat,
        lon: lon,
        postcode: postcode
    }
}
