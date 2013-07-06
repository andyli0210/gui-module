IFL.Widget.DomainPopup = function(_options) {
    var defaultPopupOptions = {
        position: 'center',
        title: '',
        modal: true,
        close: function(event, ui) {
            notifyHandlers('close');
            $(this).dialog('destroy').remove();
            domainTable = null;
        }
    }
    
    var defaultOptions = {
        popupOptions: defaultPopupOptions,
        tableOptions: null,
        isEditable: false,
        buttonOptions: {
            ok: 'OK',
            cancel: 'Cancel',
            showAll: false
        }
    }
    
    defaultOptions = $.extend(true, {}, defaultOptions, _options);
    
    var eventsHandler = new IFL.Util.EventHandler(['ok', 'cancel','show', 'close']);
    var domainTable;
    
    function show(domain, _options) {
        if (!domain) {
            alert('Please specify domain to show in domain popup');
            return;
        }
        
        var options = $.extend(true, {}, defaultOptions, _options);
        
        domainTable = new IFL.Widget.DomainTable(domain, options.tableOptions);
        
        var buttonOptions = getButtonOptionsByMode(options.isEditable, domainTable, options.buttonOptions);
        
        var popupOptions = jQuery.extend(true, {}, options.popupOptions, buttonOptions);
        // debugger;
        if (options.isEditable) {
            domainTable.enableEdit();
        }
        
        domainTable.getTable().dialog(popupOptions);
        
        domainTable.getTable().css({
            'z-index': 1005,
            width: '100%'
        });
        
        notifyHandlers('show');
    }
    
    function getButtonOptionsByMode(isEditable, domainTable, button_options) {
        var buttonOptions = {
            buttons: {}
        }
        
        var okButton = function() {
            if (isEditable) {
                domainTable.setDomainValue();
            }
            
            notifyHandlers('ok');
            $(this).dialog("close");
        };
            
        var cancelButton = function() {
            notifyHandlers('cancel');
            $(this).dialog("close");
        }
        
        if (isEditable || button_options.showAll) {
            buttonOptions.buttons[button_options.cancel] = cancelButton;
            buttonOptions.buttons[button_options.ok] = okButton;
        } else {
            buttonOptions.buttons[button_options.ok] = okButton;
        }
        
        return buttonOptions;
    }
    
    function registerHandler(name, handler) {
        eventsHandler.registerHandler(name, handler);
    }
    
    function notifyHandlers(name, options) {
        var domain = domainTable.getDomain();
        eventsHandler.notifyHandlers(name, domain, options);
    }
    
    function getDomainTable() {
        return domainTable;
    }
    
    function close() {
        if (domainTable) {
            domainTable.getTable().dialog('close');
        }
    }
    
    return {
        show: show,
        close: close,
        registerHandler: registerHandler,
        getDomainTable: getDomainTable
    }
}


