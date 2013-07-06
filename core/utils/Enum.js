IFL.Util.Enum = function(items, keyName) {
    var enumObject = {};
    
    for (var i in items) {
        var item = items[i];
        
        var key;
        if (keyName) {
            key = item[keyName];
            
            if (!key) {
                console.warn('Can not find key: ' + keyName + ' in enum');
                return null;
            }
        } else {
            key = item;
        }
        
        enumObject[key] = item;       
        
    }
    
    function get() {
        console.info('get');
    }
    
    //return enumObject;
}

