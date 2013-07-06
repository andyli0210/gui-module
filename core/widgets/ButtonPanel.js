IFL.Widget.ButtonPanel = function(options) {
    if (!options) {
        options = {};
    }
    
    var container;
    var contentContainer;
    var content;
    var buttonRow;
    
    var leftTd;
    var middleTd;
    var rightTd;
    
    initUI();
    
    function initUI() {
        container = jQuery('<div class="ui-widget-content"></div>');
        contentContainer = jQuery('<div width="100%" class="ui-widget-content"></div>').appendTo(container);
        initButtonRow();
        
        if (options.width) {
            container.css('width', options.width);
        }
        
        if (options.height) {
            contentContainer.css('height', options.height);
        }

    }
    
    function initButtonRow() {
        var buttonTable = $('<table width="100%" class="ui-widget-content"></table>').appendTo(container);
        buttonRow = $('<tr></tr>').appendTo(buttonTable);
        leftTd = $('<td align="left" width="33%" style="padding-left: 5px;"></td>').appendTo(buttonRow);
        middleTd = $('<td align="middle"></td>').appendTo(buttonRow);
        rightTd = $('<td align="right" width="33%" style="padding-right: 5px;"></td>').appendTo(buttonRow);
    }
    
    function initPager() {
        
    }
    
    function getContainer() {
        return container;
    }
    
    function display(isDisplay) {
        if (isDisplay) {
            container.css('display', 'block');
        } else {
            container.css('display', 'none');
        }
    }
    
    function addButton(button, position) {
        //var button = getPanelButton(name);
        //button.click(handler);
        //jQuery('td', buttonRow).append(button);
        
        var buttonTd = getPositionTd(position);
        button.appendTo(buttonTd);
        return button;
    }
    
    function getPositionTd(position) {
        switch(position) {
            case 'left': return leftTd; break;
            case 'middle': return middleTd; break;
            default: return rightTd;
        }
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
    
    function setContent(_content) {
        content = _content;
        contentContainer.empty();
        
        if (content.getContainer) {
            contentContainer.append(content.getContainer());
        } else {
            contentContainer.append(content);
        }
    }
    
    function getContent() {
        return content;
    }
    
    return {
        getContainer : getContainer,
        display: display,
        addButton: addButton,
        setContent: setContent,
        getContent: getContent,
        getPanelButton: getPanelButton,
        getPositionTd: getPositionTd
    }
}

