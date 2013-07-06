IFL.Widget.DomainTable = function(domain, _options) {
    if (!domain) {
        alert('Domain Table must have domain !');
        return null;
    }
    
    var defaultOptions = {
        nameMapping: {},
        showMappingOnly: false,
        width: '100%'
    }
    
    var options = $.extend(true, {}, defaultOptions, _options);
    
    var nameMapping = options.nameMapping;
    var showMappingOnly = options.showMappingOnly;
    
    var rowKeyMapping = {};
    var contentTable = jQuery('<table class="ui-widget ui-widget-content"></table>').css({
        width: options.width
    });
    var isEditable = false;
    init();
    
    function init() {
        for (var key in domain) {
            var row = null;
            
            if (nameMapping[key]) {
                var value = IFL.Util.getFieldValue(domain[key]);
                row = getRow(nameMapping[key], value).appendTo(contentTable);
            } else {
                if (!showMappingOnly) {
                    var value = IFL.Util.getFieldValue(domain[key]);
                    row = getRow(key.toUpperCase(), value).appendTo(contentTable);
                }
            }
            
            //debugger;
            if (row) {
                rowKeyMapping[key] = row;
            }
                
        }
    }
    
    function getRowValue(key) {
        var row = rowKeyMapping[key];

        var value_td = $('td:nth-child(2)',row);
        
        var value;
        if (isEditable) {
            // debugger;
            value = $('input', value_td).val();
            
            if (!value) {
                // debugger;
                value = $("select > option:selected", value_td).text();
            }
        } else {
            value = value_td.text();
        }
        
        return value.trim();
    }
    
    function changeFieldToDropdown(key, values) {
        if (!isEditable) {
            console.info('No need to change readonly field to drop down !');
            return;
        }
        
        var row = rowKeyMapping[key];
        
        if (!row) {
            console.info('Can not find row with key: ' + key);
            return;
        }
        var value_td = $('td:nth-child(2)',row);
        var curValue = $('input', value_td).val();
        
        var dropdown = new IFL.Widget.DropdownList(key + 'dropdown', values);
        dropdown.selectItem(curValue);
        
        value_td.empty();
        dropdown.getContainer().appendTo(value_td);
    }
    
    function getRow(name, value) {
        var row = jQuery('<tr></tr>');
        var id = name.toLowerCase().split(' ').join('');
        var label_td = jQuery('<td class="ui-widget-header" width="50%" style="text-align: right; padding-right: 5px;">' + name + '</td>').appendTo(row);
        var value_td = jQuery('<td id="' + id + '" class="ui-widget-content" width="50%">'+ (value || '')+'</td>').appendTo(row);
        
        return row;
    }
    
    function getTable() {
        return contentTable;
    }
    
    function enableEdit() {
        if (isEditable)
            return;
        
        for (var i in rowKeyMapping) {
            var row = rowKeyMapping[i];
            
            var td = jQuery('td:nth-child(2)', row);
            var value = td.text();
            
            var input = jQuery('<input type="text" value="' + value + '"></input>');
            
            td.empty();
            td.append(input);
        }
        
        isEditable = true;
    }
    
    function disableEdit() {
        if (!isEditable) 
            return;
       
        for (var i in rowKeyMapping) {
            var row = rowKeyMapping[i];
            
            var td = jQuery('td:nth-child(2)', row);
            var input = jQuery('input', td);
            
            var value = input.val();
            
            td.empty();
            td.append(value);
        }
        
        isEditable = false;
    }
    
    function setDomainValue() {
        for (var key in rowKeyMapping) {
            var value = getRowValue(key);
            
            // check if it is a DateTime
            if (domain[key] && domain[key].getDateString) {
                var dateTime = new IFL.Util.DateTime(value);
                domain[key] = dateTime;
            } else {
                domain[key] = value;
            }
            
        }
    }
    
    function getDomain() {
        return domain;
    }
    
    function refresh() {
        contentTable.empty();
        init();
        if (isEditable) {
            isEditable = false;
            enableEdit();
        }
    }
    
    function getRowKeyMapping() {
        return rowKeyMapping;
    }
    
    function getContainer() {
        return getTable();
    }
    
    function val() {
        disableEdit();
        setDomainValue();
        
        return domain;
    }
    
    function focus() {
        $('input', contentTable).focus();
    }
    
    
    return {
        getTable: getTable,
        getContainer: getContainer,
        enableEdit: enableEdit,
        disableEdit: disableEdit,
        setDomainValue: setDomainValue,
        getDomain: getDomain,
        refresh: refresh,
        getRowKeyMapping: getRowKeyMapping,
        changeFieldToDropdown: changeFieldToDropdown,
        val: val,
        focus: focus
    }
}


