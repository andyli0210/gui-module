IFL.Widget.DomainListTable = function(keyTitleMapping, _options) {
    if (!keyTitleMapping) {
        alert('Please specify key-title mapping for Domain List Table');
        return null;
    }
    
    var defaultOptions = {
        showTitle: true,
        showDeleteIcon: false,
        deleteIconPath: Config.imagePath + '/close.png',
        cssOptions: {
            titleHeight: null,
            rowHeight: null
        },
        keyColWidth: {}
    }
    
    var options = $.extend(true, {}, defaultOptions, _options);
    
    var containerTable = $('<table width="100%"></table>');
    var keyRowMapping = {};
    var items = {};
    var titleRow;
    var colCount = 0;
    
    var eventsHandler = new IFL.Util.EventHandler(['delete','select']);

    function addItemToTable(itemDomain) {
        if (!itemDomain.id) {
            console.error('Item must have ID to be added into Domain List Table');
            return null;
        }
        
        var row = $('<tr></tr>');
        row.hover(function() {
            row.addClass('ui-state-hover');
        }, function(){
            row.removeClass('ui-state-hover');
        });
        row.click(function() {
            eventsHandler.notifyHandlers('select', itemDomain);
        })
        
        for (var key in keyTitleMapping) {
            var value = itemDomain[key];
            
            if (!value) {
                value = '';
            }
            // check if it is a DateTime
            if (value && value.getDateString) {
                value = value.getDateString();
            }
            
            var td;
            if (value && value.getContainer) {
                td = $('<td></td>').append(value.getContainer());
            } else {
                td = $('<td></td>').append(value);
            }
            
            td.css('text-align','center');
            td.appendTo(row);
            
            if (options.keyColWidth[key]) {
                td.css('width', options.keyColWidth[key])
            }
        }
        
        if (options.showDeleteIcon) {
            var img = $('<img src="'+ options.deleteIconPath +'"/>')
            var td = $('<td align="middle" width="20px"></td>').append(img);
            td.appendTo(row);
            
            td.click(function(event) {
                event.stopPropagation();
            });
            
            img.click(function(event){
                event.stopPropagation();
                eventsHandler.notifyHandlers('delete', itemDomain);
            })
        }
        
        row.appendTo(containerTable);
        keyRowMapping[itemDomain.id] = row;
        return row;
    }
    
    function addEmptyRow(height) {
        countColumns();
        var row = $('<tr><td colspan="' + colCount + '">&nbsp</td></tr>').height(height).appendTo(containerTable);
    }
    
    function countColumns() {
        if (colCount) {
            return colCount;
        } 
        
        for (var key in keyTitleMapping) {
            colCount++;
        }
        
        if (options.showDeleteIcon) {
            colCount++;
        }
        
        return colCount;
    }
    
    function addItem(item) {
        if (!item.id) {
            console.error('Item must have ID to be added into Domain List Table');
            return;
        }
        
        if (items[item.id]) {
            console.warn('Duplicated Item ID: ' + item.id + ' in domain list table, old item will be replaced !');
        }
        
        items[item.id] = item;
    }
    
    function deleteItem(itemId) {
        var row = keyRowMapping[itemId];
        row.remove();
        row = null;
        
        keyRowMapping[itemId] = null;
        delete keyRowMapping[itemId];
        
        items[itemId] = null;
        delete items[itemId];
    }
    
    function refresh() {
        keyRowMapping = {};
        
        if (titleRow) {
            titleRow.detach();
        }
        containerTable.empty();
        if (options.showTitle) {
            initTitleRow();
        }
        
        var count = 0;
        for (var id in items) {
            var item = items[id];
            addItemToTable(item);
            count++;
        }
        
        if (options.itemPerPage && count < options.itemPerPage) {
            var firstRow = $('tr > td', containerTable);
            var height = firstRow.outerHeight();
            for (var i=0; i<options.itemPerPage - count; i++) {
                addEmptyRow(height);
            } 
        }
        
        initEffects();
    }
    
    function initTitleRow() {
        if (!titleRow) {
            titleRow = $('<tr></tr>');
        
            for (var key in keyTitleMapping) {
                var title = keyTitleMapping[key];
            
                var td = $('<th>' + title + '</th>');
                
                td.appendTo(titleRow);
                if (options.keyColWidth[key]) {
                    td.css('width', options.keyColWidth[key])
                }
            }
        
            if (options.showDeleteIcon) {
                var td = $('<th></th>');
                td.appendTo(titleRow);
            }
        }
        
        containerTable.prepend(titleRow);
    }
    
    function initEffects() {
        containerTable.css('border-collapse','collapse');
        
        $('td', containerTable).css('border', '1px solid #DDD');
        $('th', containerTable).css('border', '1px solid #DDD');
        $('img', containerTable).css('cursor','pointer');
        
        if (options.cssOptions.rowHeight)
            $('tr', containerTable).css('height', options.cssOptions.rowHeight);
        
        if (options.cssOptions.titleHeight)
            $(titleRow).css('height', options.cssOptions.titleHeight);
    }
    
    function setItems(_items) {
        items = _items;
    }
    
    function getItems() {
        return items;
    }
    
    function getContainer() {
        return containerTable;
    }
    
    function getKeyRowMapping() {
        return keyRowMapping;
    }
    
    function getKeyTitleMapping() {
        return keyTitleMapping;
    }
    
    function registerHandler(name, handler) {
        eventsHandler.registerHandler(name, handler);
    }
    
    function getTitleRow() {
        if (!titleRow) {
            initTitleRow();
        }
        
        return titleRow;
    }
    
    return {
        getContainer: getContainer,
        addItem: addItem,
        addItemToTable: addItemToTable,
        setItems: setItems,
        getItems: getItems,
        refresh: refresh,
        getKeyRowMapping: getKeyRowMapping,
        getKeyTitleMapping: getKeyTitleMapping,
        registerHandler: registerHandler,
        deleteItem: deleteItem,
        getTitleRow: getTitleRow
    }
}


