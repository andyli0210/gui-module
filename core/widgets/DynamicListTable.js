IFL.Widget.DynamicListTable = function(_options) {
    var listTable;
    var buttonPanel;
    var eventHandler;
    var addButton;
    var containerPanel;
    
    var options = {
        panelOptions: {},
        keyTitleMapping: {},
        keyFieldMapping: {},
        listOptions: {},
        containerPanelOptions: {}
    }
    
    $.extend(true, options, _options);
    
    var itemId = 0;
    
    init();
    initHandlers();
    
    function init() {
        buttonPanel = new IFL.Widget.ButtonPanel(options.panelOptions);
        listTable = new IFL.Widget.DomainListTable(options.keyTitleMapping, options.listOptions);
        listTable.refresh();
        eventHandler = new IFL.Util.EventHandler(['add','editTd']);
        buttonPanel.setContent(listTable);
        
        addButton = buttonPanel.getPanelButton('Add');
        buttonPanel.addButton(addButton, 'left');
        
        
        containerPanel = new IFL.Widget.FolderWidget(options.containerPanelOptions);
        
        containerPanel.setContent(buttonPanel);
    }
    
    function initHandlers() {
        addButton.click(function(event) {
            //event.stopPropagation();
            addNewItem();
            eventHandler.notifyHandlers('add');
        });
        
        listTable.registerHandler('delete', function(item) {
            listTable.deleteItem(item.id);
        });
    }
    
    function initTdEvent(td, domain, key) {
        var field; 
        td.click(function(event) {
            field = enableEditTd(td, domain, key);
            
            if (field)
                field.focus();
        });
        
        td.hover(
            function(){ 
                td.mouse_is_inside=true; 
            }, function(){ 
                td.mouse_is_inside=false; 
            }
            )
        
        $("body").click(function() {
            if (field && !td.mouse_is_inside) {
                disableEditTd(td, domain, key, field);
                field = null;
            }
        })
    }
    
    function disableEditTd(td, domain, key, field) {
        var value = field.val();
        domain[key] = value;
        td.empty();
                
        if (value instanceof Object) {
            var count = 0;
            for (var v in value) {
                if (count>0) 
                    td.append('<br/>');
                
                if (!value.length) {
                    td.append(v + ': ');
                }
                
                td.append(value[v]);
                count++;
            }
        } else {
            td.append(value);
        }
    }
    
    function enableEditTd(td, domain, key) {
        eventHandler.notifyHandlers('editTd',domain, {
            td: td, 
            key: key
        });
        
        var value = domain[key];
            
        var field;
        if (options.keyFieldMapping[key]) {
            
            if (options.keyFieldMapping[key].type == 'checkbox') {
                field = getCheckboxGroup(options.keyFieldMapping[key].value, value, options.keyFieldMapping[key].handler)
            } else if (options.keyFieldMapping[key].type == 'dropdown') {
                field = getDropDownList(options.keyFieldMapping[key].value, value, options.keyFieldMapping[key].handler);
            } else if (options.keyFieldMapping[key].type == 'domaintable') {
                if (!value) {
                    return null;
                }
                
                field = getDomainTable(options.keyFieldMapping[key].value, value, options.keyFieldMapping[key].handler);
            }
            
        } else {
            field = getInput(value);
        }
        
        if (field.click) {
            field.click(function(event) {
                event.stopPropagation();
            });
        }
        
            
        td.empty();
        
        if (field.getContainer) {
            td.append(field.getContainer());
        } else {
            td.append(field);
        }
        
        return field;
    }
    
    function getDomainTable(keyNameMapping,domain) {
        var tableOptions = {
            //nameMapping: keyNameMapping,
            //showMappingOnly: true
        }
        
        var domainTable = new IFL.Widget.DomainTable(domain);
        domainTable.enableEdit();
        
        return domainTable;
    }
    
    function getDropDownList(items, value, handler) {
        var dropdown = new IFL.Widget.DropdownList('editdropdown', items);
        
        if (handler) {
            dropdown.registerHandler('change', handler);
        }
        
        if (value) {
            dropdown.selectItem(value);
        }
        
        return dropdown.getContainer();
    }
    
    function getInput(value) {
        var inputField = $('<input type="text"></input>');
        
        if (value) {
            inputField.val(value);
        }
        
        return inputField;
    }
    
    function getCheckboxGroup(items, values) {
        var checkboxGroup = new IFL.Widget.CheckboxGroup('editcheckboxgroup', items, values, true);
        
        return checkboxGroup;
    }
    
    function addNewItem() {
        var newDomain = {};
        
        var keys = [];
        for (var key in options.keyTitleMapping) {
            
            if (key == 'prop2') {
                newDomain[key] = [];
            } else {
                newDomain[key] = '';
            }
            
            keys.push(key);
        }
        
        newDomain.id = ++itemId;
        
        var newRow = addItem(newDomain);
        
        $('td', newRow).each(function(i){
            initTdEvent($(this), newDomain, keys[i]);
        });
    }
    
    function getContainer() {
        return containerPanel.getContainer();
    }
    
    function addItem(item) {
        listTable.addItem(item);
        var newRow = listTable.addItemToTable(item);
        
        $('td', newRow).css('border', '1px solid #DDD');
        $('img', newRow).css('cursor','pointer');
        return newRow;
    }
    
    function setItems(items) {
        listTable.setItems(items);
    }
    
    function getItems() {
        return listTable.getItems();
    }
    
    function refresh() {
        listTable.refresh();
    }
    
    function registerHandler(name, handler) {
        if (name == 'add' || name == 'editTd') {
            eventHandler.registerHandler(name, handler);
        } else {
            listTable.registerHandler(name, handler);
        }
    }
    
    function setKeyFieldMapping(mapping) {
        $.extend(true, options.keyFieldMapping, mapping);
        //options.keyFieldMapping = mapping;
    }
    
    return {
        getContainer: getContainer,
        getItems: getItems,
        setKeyFieldMapping: setKeyFieldMapping,
        registerHandler: registerHandler,
        enableEditTd: enableEditTd
    }
}


