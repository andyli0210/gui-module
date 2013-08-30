IFL.Widget.CheckboxGroup = function(name, items, defaultItems, isVertical, hideSelectAll, isFancy) {
    var container = $('<div></div>');
    var changeHandlers = [];

    var boxItems = [];

    if (!hideSelectAll) {
        addItem("Select/Deselect All", false);
    }

    for (var i in items) {
        var item = items[i];
        addItem(item);
    }

    if (isFancy) {
        $('input', container).button();
        $('label', container).css({
            fontSize: '1em',
            width: '100%'
        });
    }

    function addItem(item, isChecked) {
        var checked = '';
        if (jQuery.inArray(item, defaultItems) > -1 || isChecked) {
            checked = 'checked';
        }

//        if (jQuery.inArray(item, items) > -1) {
//            console.warn('Duplicated item: ' + item +' in checkbox group');
//        } else {
        var itemRow = $('<input type="checkbox" name="' + name + '" value="' + item + '" ' + checked + '/>').appendTo(container);
        itemRow.attr({
            id: name + item
        });

        var itemLabel = $('<label></label>').attr({
            'for': name + item
        }).append(item).appendTo(container);
        //}
        initHandler(itemRow);
        //container.append(item);

        if (isVertical) {
            container.append('<br/>');
        }

        boxItems.push(item);
    }

    function getContainer() {
        return container;
    }

    function initHandler(checkbox) {
        $(checkbox).change(function() {
            if ($(this).prop("checked")) {
                var value = $(this).val();
                if (value == 'Select/Deselect All') {
                    selectAll(true);
                } else {
                    notifyChangeHandlers($(this).val(), true);
                }

            } else {
                var value = $(this).val();
                if (value == 'Select/Deselect All') {
                    selectAll(false);
                } else {
                    notifyChangeHandlers($(this).val(), false);
                }
            }
        })
    }

    function notifyChangeHandlers(selectedItem, isSelected) {
        for (var h in changeHandlers) {
            var handler = changeHandlers[h];
            handler(selectedItem, isSelected);
        }
    }

    function registerChangeHandler(handler) {
        changeHandlers.push(handler);
    }

    function getSelectedItems() {
        var selectedItems = [];


        if (isFancy) {
            $('.ui-state-active span', container).each(function() {
                if ($(this).text() !== 'Select/Deselect All') {
                    selectedItems.push($(this).text());
                }
            });
        } else {
            $('input[name=' + name + ']:checked', container).each(function() {
                if ($(this).val() !== 'Select/Deselect All') {
                    selectedItems.push($(this).val());
                }
            });
        }

        return selectedItems;
    }

    function setSelectedItems(items, isSelect) {
        //$('input[name=' + name + ']:checked', container).removeAttr('checked');
        for (var i in items) {
            var item = items[i];
            $('input[name=' + name + ']', container).filter("[value=" + item + "]").prop('checked', isSelect);

            if (isSelect) {
                $('span:contains("' + item + '")', container).parent().addClass('ui-state-active').attr('aria-pressed', true);
            } else {
                $('span:contains("' + item + '")', container).parent().removeClass('ui-state-active').attr('aria-pressed', false);
            }
        }
    }

    function selectAll(isSelect) {
        //console.debug('notified handlers ')
        //setSelectedItems(items, isSelect);
        $('input[name=' + name + ']', container).prop('checked', isSelect);

        if (isSelect) {
            $('span', container).parent().addClass('ui-state-active').attr('aria-pressed', true);
        } else {
            $('span', container).parent().removeClass('ui-state-active').attr('aria-pressed', false);
        }

        for (var i in boxItems) {
            var item = boxItems[i];
            notifyChangeHandlers(item, isSelect);
        }
    }

    function val() {
        return getSelectedItems();
    }

    function click(handler) {
        container.click(handler);
    }

    function focus(handler) {
        container.focus(handler);
    }

    return {
        getContainer: getContainer,
        //addItem: addItem,
        registerChangeHandler: registerChangeHandler,
        setSelectedItems: setSelectedItems,
        getSelectedItems: getSelectedItems,
        selectAll: selectAll,
        addItem: addItem,
        val: val,
        click: click,
        focus: focus
    }
}


