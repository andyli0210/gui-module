IFL.CTS.AccountManageWidget = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var eventHandler = new IFL.Util.EventHandler(['import','export']);
    var container;
    
    var usernameSpan;
    var excelContainer;
    var userProfileContainer;
    
    init();
    
    function init() {
        container = $('<div/>').css({
        });
        container.addClass('ui-widget-content ui-state-default');
        container.css({
            'float': 'right',
            margin: 5,
            padding: 5,
            background: 'none',
            border: 'none'
        });
        initUserProfileContainer();
        initExcelContainer();
        
        container.append(userProfileContainer).append(excelContainer);
        
        $('a', container).css({
            cursor: 'pointer'
        });
        
        $('img', container).css({
            cursor: 'pointer',
            marginLeft: 10
        });
        
    }
    
    function initUserProfileContainer() {
        userProfileContainer = $('<div/>').css({
            width: '100%',
            margin: 5,
            paddingBottom: 5,
            borderBottom: 'solid 1px #303030'
        });
        
        
        var table = $('<table width="100%"/>').appendTo(userProfileContainer);
        var row = $('<tr/>').appendTo(table);
        var td1 = $('<td/>').appendTo(row);
        td1.css({
            textAlign: 'left'
        });
        usernameSpan = $('<span/>').css({
            color: '#303030'
        });
        td1.append(usernameSpan);
        
        var td2 = $('<td/>').appendTo(row);
        td2.css({
            textAlign: 'right'
        })
        
        var linkSapn = $('<span width="100%" align="right"/>').appendTo(td2);
        var helpLink = $('<a>Help</a>').attr('href', options.helpLink).appendTo(linkSapn);
        linkSapn.append(' | ');
        
        var logoutLink = $('<a>Log Out</a>').attr('href', options.logoutLink).appendTo(linkSapn);
    }
    
    function initExcelContainer() {
        excelContainer = $('<div/>').css({
            width: '100%',
            margin: 5,
            textAlign: 'right'
        });
        
        var importIcon = $('<img align="middle"/>').attr('src', Config.imagePath + "/icon_xls_import_ONCLICK.png");
        var importLink = $('<a>Import Excel</a>')
        var importSpan = $('<span/>').append(importIcon).append(importLink);
        importSpan.appendTo(excelContainer);
        
        
        importSpan.hover(function(){
            importIcon.attr('src', Config.imagePath + "/icon_xls_import_INACTIVE.png");    
        }, function() {
            importIcon.attr('src', Config.imagePath + "/icon_xls_import_ONCLICK.png");
        });
        
        importSpan.click(function() {
            eventHandler.notifyHandlers('import');
        });
        
        var exportIcon = $('<img align="middle"/>').attr('src', Config.imagePath + "/icon_xls_export_ONCLICK.png");
        var exportLink = $('<a>Export Excel</a>');
        var exportSpan = $('<span/>').append(exportIcon).append(exportLink).appendTo(excelContainer);
        
        exportSpan.hover(function(){
            exportIcon.attr('src', Config.imagePath + "/icon_xls_export_INACTIVE.png");
        }, function() {
            exportIcon.attr('src', Config.imagePath + "/icon_xls_export_ONCLICK.png");    
        });
        
        exportLink.click(function() {
            eventHandler.notifyHandlers('export');
        });
    }
    
    function initDefaultOptions() {
        options = {
            accountName: 'Account Name',
            helpLink: '',
            logoutLink: Config.ctsServerUrl + '/j_spring_security_logout'
        }
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    function getContainer() {
        return container;
    }
    
    function setAccountName(name) {
        usernameSpan.html('Welcome <b>' + name + '</b>');
    }
    
    return {
        getContainer: getContainer,
        registerHandler: registerHandler,
        setAccountName: setAccountName
    }
}