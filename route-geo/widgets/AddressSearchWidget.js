IFL.RouteGeo.AddressSearchWidget = function() {
    var container = jQuery('<div></div>');
    var titleBar;
    var contentTable;
    var buttonRow;
    var searchRow;
    var autocomplete;
    
    init();
    initAutoSearch();
    
    function init() {
        titleBar = jQuery('<div class="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" style="cursor: pointer"><span class="ui-icon ui-icon-triangle-1-s" style="display: inline-block;"></span><a id="title">Address Criteria</a></div>').appendTo(container);
        titleBar.hover(function(){
            titleBar.addClass('ui-state-hover');
        },function() {
            titleBar.removeClass('ui-state-hover');
        });
        
        contentTable = jQuery('<table class="ui-widget ui-dialog ui-state-default" width="100%"></table>').appendTo(container);
        
        titleBar.click(function() {
            contentTable.toggle('blind');
            if (jQuery('span', titleBar).hasClass('ui-icon-triangle-1-e')) {
                jQuery('span', titleBar).removeClass('ui-icon-triangle-1-e');
                jQuery('span', titleBar).addClass('ui-icon-triangle-1-s');
            } else {
                jQuery('span', titleBar).removeClass('ui-icon-triangle-1-s');
                jQuery('span', titleBar).addClass('ui-icon-triangle-1-e');
            }
            
        });
        
        searchRow = jQuery('<tr><td width="100%"><input id="searchInput" type="text" size="40"></input></td></tr>').appendTo(contentTable);
        //searchInput = jQuery('<input type="text" size="50"></input>').appendTo(searchRow);
        
        buttonRow = jQuery('<tr><td width="100%" align="right"></td></tr>').appendTo(contentTable);
    }
    
    function initAutoSearch() {
        var input = searchRow.find('input').get(0);
        autocomplete = new google.maps.places.Autocomplete(input);
        var ausBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-43.334256889915274, -4.227390722153237),
            new google.maps.LatLng(100.58882600000004, 170.90132600000004)); 
            
        autocomplete.setBounds(ausBounds);
    }
    
    function disableFolder() {
        $('#title', container).unbind('click');
        titleBar.unbind();
        $('span', titleBar).css('display', 'none');
        titleBar.css('cursor' , 'auto');
    }
    
    function expand(isExpand) {
        if (isExpand && contentTable.css('display') == 'none') {
            titleBar.click();
        } else if (!isExpand && contentTable.css('display') != 'none'){
            titleBar.click();
        }
    }
    
    function getContainer() {
        return container;
    }
    
    function getAddressString() {
        return searchRow.find('input').val();
    }
    
    function display(isDisplay) {
        if (isDisplay) {
            container.css('display', 'block');
        } else {
            container.css('display', 'none');
        }
    }
    
    function addButton(name, handler) {
        var button = getPanelButton(name);
        button.click(handler);
        jQuery('td', buttonRow).append(button);
        return button;
    }
    
    function getPanelButton(name) {
        var button = jQuery('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role="button" aria-disabled="false"><span class="ui-button-text">' + name + '</span></button>');
        button.css({
            //background: 'url("images/ui-bg_highlight-soft_75_cccccc_1x100.png") repeat-x scroll 50% 50% #CCCCCC',
            'margin-right': '5px',
            'font-weight' : 'bold',
            cursor: 'pointer'
        });
        
        button.hover(function() {
            button.addClass('ui-state-hover')
        }, function() {
            button.removeClass('ui-state-hover')
        });
        
        return button;
    }
    
    function setWidgetAddress(address) {
        var addressString = address.getAddressSummary();
        
        searchRow.find('input').val(addressString);
    }
    
    return {
        disableFolder: disableFolder,
        expand: expand,
        getContainer: getContainer,
        addButton: addButton,
        display: display,
        getAddressString: getAddressString,
        setAddress: setWidgetAddress
    }
}


