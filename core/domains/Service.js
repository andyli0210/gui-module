IFL.Domain.Service = function(xml) {
    var id;
    var status;
    var earliestTime;
    var latestTime;
    var duration;
    var task;
    
    if (xml) {
        initByXml(xml);
    }
    
    function initByXml(xml) {
        id = jQuery(xml).find('service').attr('id');
        
        if (!id) {
            id = jQuery(xml).find('>id').text();
        }
        
        
        status = jQuery(xml).find('> status').text();
        earliestTime = jQuery(xml).find('> timeEarliest').text();
        latestTime = jQuery(xml).find('> timeLatest').text();
        duration = parseInt(jQuery(xml).find('> elapsedDuration').text());
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
    
    function getDuration() {
        return duration;
    }
    
    function setDuration(_duration) {
        duration = _duration;
    }
    
    return {
        initByXml: initByXml,
        id: id,
        setStatus: setStatus,
        getStatus: getStatus,
        getEarliestTime: getEarliestTime,
        getLatestTime: getLatestTime,
        getDuration: getDuration,
        setDuration: setDuration
    }
}
