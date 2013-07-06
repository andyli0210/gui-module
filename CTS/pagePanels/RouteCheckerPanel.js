IFL.CTS.RouteCheckerPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var routeChecker;
    var reRunButton;
    var exportWidget;
    
    init();
    
    function initDefaultOptions() {
        options = {
            reRunHandler: null,
            exportHandler: null
        }
    }
    
    function init() {
        container = $('<div/>').css({
            width: '100%'
        });
        
        initStatusPanel();
        //initRerunButton();
    }
    
    function initStatusPanel() {
        var statusPanel = $('<div/>').appendTo(container);
        
        statusPanel.append('<h4>Route Detail Report</h4>');
        statusPanel.append('<p>The following inconsistencies were found in the Route Detail data.</p>');
        
        var table = $('<table width="800px"></table>').appendTo(statusPanel);
        var row = $('<tr></tr>').appendTo(table);
        var td1 = $('<td></td>').appendTo(row);
        var td2 = $('<td></td>').appendTo(row);
        var td3 = $('<td></td>').appendTo(row);
        
        $('td', row).css('padding','5px');
        
        td1.append('<b>If there are errors:</b>');
        td1.append('<ol>')
        td1.append('<li>Download the database.</li>');
        td1.append('<li>Correct your excel spreadsheet.</li>');
        td1.append('<li>Upload database again.</li>');
        td1.append('</ol>');
        td1.append('</p>');
        td1.append('<br/>');    
        
        initExportWidget(td2);
        initRerunButton(td3);
        
//        var statusBar = jQuery('<div class="ui-accordion-header ui-state-default"></div>').css('padding','5px').appendTo(container);
//        statusBar.append('2 routes are over capacity');
    }
    
    function initRouteChecker(routes) {
        if (routeChecker) {
            routeChecker.getContainer().remove();
        }
        
        routeChecker = new IFL.CTS.RouteCheckerTable({
            width: 800
        });
        container.append(routeChecker.getContainer());
        routeChecker.setRoutes(routes);
    }
    
    function initExportWidget(widgetContainer) {
       exportWidget = new IFL.CTS.ExcelExportWidget();
       exportWidget.getContainer().appendTo(widgetContainer);
    }
    
    function initRerunButton(buttonContainer) {
        buttonContainer.append('<br/>');
        buttonContainer.append('Want to re-run this data again?\n');
        reRunButton = $('<button>Re-run</button>').button().appendTo(buttonContainer);
        reRunButton.css({
            fontSize: '1em'
        })
        
        if (options.reRunHandler) {
            registerRerunHandler(options.reRunHandler);
        }
        
        if (options.exportHandler) {
            registerExportHandler(options.exportHandler);
        }
    }
    
    function registerRerunHandler(handler) {
        reRunButton.click(handler);
    }
    
    function registerExportHandler(handler) {
        exportWidget.registerButtonHandler(handler);
    }
    
    function getContainer() {
        return container;
    }
    
    return {
        getContainer: getContainer,
        initRouteChecker: initRouteChecker,
        registerRerunHandler: registerRerunHandler,
        registerExportHandler: registerExportHandler
    }
}