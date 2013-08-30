IFL.Widget.RadioGroup = function(name, items, defaultItem, isVertical) {
    var container = $('<div></div>');
    var changeHandlers = [];
    
    for (var i=0; i<items.length; i++) {
        var item = items[i];
        addItem(item);
    }
    
    initHandler();

    function addItem(item) {
        var checked = '';
        if (item == defaultItem) {
            checked = 'checked';
        }
        
        var itemRow = $('<input type="radio" name="' + name + '" ' + checked + 'id="' + item  +'" />' + '<label for="' + item + '">' + item + '</label>').appendTo(container);
        //container.append(item);
        
        if (isVertical) {
            container.append('<br/>');
        }
    }
    
    function getContainer() {
        return container;
    }
    
    function initHandler() {
        $('input[name=' + name + ']', container).change(function() {
            var selectedItem = $('label[aria-pressed=true] span', container).text();
            //var selectedItem = $('input[name=' + name + ']:checked', container).val();
            notifyChangeHandlers(selectedItem);
        });
    }
    
    function notifyChangeHandlers(selectedItem) {
        for (var h in changeHandlers) {
            var handler = changeHandlers[h];
            handler(selectedItem);
        }
    }
    
    function registerChangeHandler(handler) {
        changeHandlers.push(handler);
    }
    
    function getSelectedItem() {
        //var selectedItem = $('input[name=' + name + ']:checked', container).val();
        var selectedItem = $('label[aria-pressed=true] span', container).text();
        return selectedItem;
    }
    
    function setSelectedItem(item) {
        $('label[aria-pressed=true]', container).removeClass('ui-state-active').attr('aria-pressed', false);
        
        $('span:contains("'+ item+'")', container).parent().addClass('ui-state-active').attr('aria-pressed', true);
        //var selectedItem = $('label span:contains("'+ item+'")', container).prop('aria-pressed', true);
        //$('input[name=' + name + ']:checked', container).removeAttr('checked');
        
        //$('input[name=' + name + ']', container).filter("[value="+item+"]").prop('checked', true);
    }
    
    return {
        getContainer: getContainer,
        addItem: addItem,
        registerChangeHandler: registerChangeHandler,
        setSelectedItem: setSelectedItem,
        getSelectedItem: getSelectedItem
    }
}


