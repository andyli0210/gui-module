IFL.MapVis.Operator = function(_domain, _visObject) {
    var vis_object;
    var domain;
    var events = new IFL.MapVis.Events();
    
    setDomain(_domain);
    setObject(_visObject);
    
    function setDomain(_domain) {
        domain = _domain;
    }
    
    function getDomain() {
        return domain;
    }
    
    function setObject(object) {
        vis_object = object;
    }
    
    function getObject() {
        return vis_object;
    }
    
    function registerEventHandler(eventName, handler) {
        events[eventName].push(handler);
    }
    
    function triggerEvent(eventName, pageX, pageY) {
        for (var h in events[eventName]) {
            var handler = events[eventName][h];
            handler(domain, pageX, pageY);
        }
    }
    
    function unregisterEvent(eventName) {
        events[eventName] = [];
    }
    
    
    return {
        setDomain: setDomain,
        getDomain: getDomain,
        setVisObject: setObject,
        getVisObject: getObject,
        registerEventHandler: registerEventHandler,
        triggerEvent: triggerEvent,
        unregisterEvent: unregisterEvent,
        renderVisObject: function() {},
        displayVisObject: function(isDisplay) {},
        deleteVisObject: function() {}
    }
}
