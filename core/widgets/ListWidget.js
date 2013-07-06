IFL.Widget.ListWidget = function(options, items) {
    if (!options) {
        options = {};
    }
    
    var container = jQuery('<div></div>');
    var tableContainer = jQuery('<div class="ui-widget ui-state-default"></div>').appendTo(container);
    
    var titleBar;
    var contentTable;
    var buttonRow;
    var events;
    var keyRowMapping = {}; 
    var pager;
    
    init();
    initUI();
    initEvents();
    
    function initUI() {
        if (options.title) {
            setTitle(options.title);
        }
        
        if (options.width) {
            container.css('width', options.width);
        }
    
        if (!options.usePager) {
            tableContainer.css('overflow', 'auto');
            tableContainer.css('height', options.height || 300);
        } else {
            initPager();
        }
    
        if (items) {
            for (var i in items) {
                addItem(items[i]);
            }
        }
        
        var button = addButton("Add", function() {
            notifyHandlers('add');
        });

    }
    
    function init() {
        titleBar = jQuery('<div class="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all" style="cursor: pointer; font-weight: bold; font-size: 1.1em;"><span class="ui-icon ui-icon-triangle-1-s" style="display: inline-block;"></span><a id="title">Title:</a></div>').insertBefore(tableContainer);
        titleBar.hover(function(){
            titleBar.addClass('ui-state-hover');
        },function() {
            titleBar.removeClass('ui-state-hover');
        });
        
        contentTable = jQuery('<table class="ui-widget ui-state-default" width="100%"></table>').appendTo(tableContainer);
        
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
        
        //buttonRow = jQuery('<tr><td align="right" colspan="3"></td></tr>').appendTo(contentTable);
        buttonRow = jQuery('<div width="100%" class="ui-widget ui-state-default" style="text-align: right;"></div>').appendTo(container);
    }
    
    function initPager() {
        
    }
     
    function initEvents() {
        events = {
            'edit': [],
            'delete': [],
            'add': []
        }
    }
    
    function registerHandler(eventName, handler) {
        if (events[eventName]) {
            events[eventName].push(handler);
        } else {
            alert('List Widget does not have such event: ' + eventName);
        }
    }
    
    function notifyHandlers(eventName, item, options) {
        for (var h in events[eventName]) {
            var handler = events[eventName][h];
            handler(item, options);
        }
    }
    
    function addItem(item) {
        //var row = getRow(item).insertBefore(buttonRow);
        var row = getRow(item).appendTo(contentTable);
        keyRowMapping[item] = row;
    }
    
    function getRow(name) {
        var row = jQuery('<tr></tr>');
        
        var label_td = jQuery('<td width="90px" class="ui-widget-header" style="text-align: center;">' + name + '</td>').appendTo(row);
        label_td.hover(function() {
            label_td.addClass('ui-state-active')
        }, function(){
            label_td.removeClass('ui-state-active')
        });
        
        var edit_img = $('<img title="Edit" src="'+ Config.imagePath + "/info-icon.png" + '">').css('cursor','pointer');
        var delete_img = $('<img title="Delete" src="'+ Config.imagePath + "/close.png" + '">').css('cursor','pointer');
        var edit_td = jQuery('<td class="ui-widget-content" style="text-align: center; width: 16px;"></td>').append(edit_img).appendTo(row);
        var delete_td = jQuery('<td class="ui-widget-content" style="text-align: center; width: 16px;"></td>').append(delete_img).appendTo(row);
        
        edit_img.click(function(){
            notifyHandlers('edit', name);
        });
        delete_img.click(function(){
            notifyHandlers('delete', name);
        });
        
        return row;
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
    
    function setTitle(title) {
        jQuery('#title', container).html(title);
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
        //jQuery('td', buttonRow).append(button);
        buttonRow.append(button);
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
    
    function getKeyRowMapping() {
        return keyRowMapping;
    }
    
    return {
        getContainer : getContainer,
        setTitle: setTitle,
        disableFolder: disableFolder,
        expand: expand,
        display: display,
        addButton: addButton,
        addItem: addItem,
        registerHandler: registerHandler,
        getKeyRowMapping: getKeyRowMapping
    }

}





