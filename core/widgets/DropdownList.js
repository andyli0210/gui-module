IFL.Widget.DropdownList = function(name, _items) {
    var items = _items;
    
    var select = $('<select name="' + name + '"></select>');
    
    var eventsHandler = new IFL.Util.EventHandler(['change']);
    
    for (var i in items) {
        addItem(items[i]);
    }
    
    initHandler();
    function initHandler() {
        select.change(function() {
            var item = getSelectedItem();
            notifyHandlers('change',item);
        })
    }
    
    function addItem(item) {
        var option = $('<option value="' + item +'">' + item +'</option>').appendTo(select);
    }
    
    function removeItem(item) {
        $('option[value="' + item + '"]', select).remove();
    }
    
    function getSelectedItem() {
        if ($("option:selected", select))
            return $("option:selected", select).text();
        else 
            return '';
    }

    function selectItem(item) {
        if ($("option:selected", select))
            $("option:selected", select).removeAttr('selected');
        
        $('option[value="' + item + '"]', select).attr('selected', 'selected');
    }
    
    function getContainer() {
        return select;
    }
    
    function val() {
        var value = getSelectedItem();
        return value;
    }
    
    function focus(handler) {
        if (handler) {
            select.focus(handler)
        } else {
            select.focus()
        }
    }
    
    function blur(handler) {
        if (handler) {
            select.blur(handler)
        } else {
            select.blur()
        }
    }
    
    function registerHandler(name, handler) {
        eventsHandler.registerHandler(name, handler);
    }
    
    function notifyHandlers(name, item, options) {
        eventsHandler.notifyHandlers(name, item, options);
    }
    
    function clear() {
        select.empty();
    }
    
    return {
        addItem: addItem,
        removeItem: removeItem,
        getSelectedItem: getSelectedItem,
        selectItem: selectItem,
        getContainer: getContainer,
        val: val,
        registerHandler: registerHandler,
        clear: clear,
        blur: blur,
        focus: focus
    }
}


