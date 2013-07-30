IFL.Widget.DropdownList = function(name, _items, isMultiple) {
    var items = _items;

    var selectHtml = '<select name="' + name + '"' + (isMultiple ? ' multiple' : '') + '></select>';
    var select = $(selectHtml);

    var eventsHandler = new IFL.Util.EventHandler(['change']);

    for (var i in items) {
        addItem(items[i]);
    }

    initHandler();
    function initHandler() {

        //don't init change handler for multiple selections
        if (!isMultiple) {
            select.change(function() {
                var item = getSelectedItem();
                notifyHandlers('change', item);
            });
        }

    }

    function addItem(item) {
        var option = $('<option value="' + item + '">' + item + '</option>').appendTo(select);
    }

    function removeItem(item) {
        $('option[value="' + item + '"]', select).remove();
    }

    function getSelectedItem() {

        if (!isMultiple) {
            if ($("option:selected", select))
                return $("option:selected", select).text();
            else
                return '';
        } else {
            var selectedItems = [];
            $("option:selected", select).each(function() {
                selectedItems.push($(this).text());
            });

            return selectedItems;
        }

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
        var value;

        if (!isMultiple) {
            value = getSelectedItem();
        } else {
            value = [];
        }

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


