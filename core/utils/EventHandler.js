IFL.Util.EventHandler = function(eventNames) {
    if (!eventNames) {
        return null;
    }
    
    var events = {};
    for (var n in eventNames) {
        var name = eventNames[n];
        events[name] = [];
    }
    
    function registerHandler(name, handler) {
        if (!events[name]) {
            console.warn('No event named: ' + name);
            return;
        }
        
        events[name].push(handler);
    }
    
    function notifyHandlers(name, item, options) {
        var handlers = events[name];
        
        for (var h in handlers) {
            var handler = handlers[h];
            handler(item, options);
        }
    }
    
    function unregisterHandler(name, handler) {
        IFL.Util.removeArrayElement(events[name],handler);
    }
    
    return {
        registerHandler: registerHandler,
        unregisterHandler: unregisterHandler,
        notifyHandlers: notifyHandlers
    }
}