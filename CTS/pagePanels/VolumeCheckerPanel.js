IFL.CTS.VolumeCheckerPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var volumeChecker;
    var reRunButton;
    var numOfViolationField;
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
        
        statusPanel.append('<h4>Product Volume Report</h4>');
        statusPanel.append('<p>The following inconsistencies were found in the Product Volume data.</p>');
        
        var table = $('<table width="700px"></table>').appendTo(statusPanel);
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
        
        var statusBar = jQuery('<div class="ui-accordion-header ui-state-default"></div>').css('padding','5px').appendTo(container);
        numOfViolationField = $('<span/>');
        statusBar.append(numOfViolationField).append(' routes are over capacity');
    }
    
    function initVolumeChecker(volumeCheckerResult) {
        if (volumeChecker) {
            volumeChecker.getContainer().remove();
        }
        
        volumeChecker = new IFL.CTS.VolumeCheckerChart({
            standardUtilisation: volumeCheckerResult.standardUtilisation
        });
        
        numOfViolationField.text(volumeCheckerResult.numOfViolation);
        
        container.append(volumeChecker.getContainer());
        volumeChecker.setRoutes(volumeCheckerResult.routes);
    }
    
    function initExportWidget(widgetContainer) {
       exportWidget = new IFL.CTS.ExcelExportWidget();
       exportWidget.getContainer().appendTo(widgetContainer);
    }
    
    function initRerunButton(buttonContainer) {
        buttonContainer.append('<br/>');
        buttonContainer.append('Want to re-run this data again?<br/>');
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
        initVolumeChecker: initVolumeChecker,
        registerRerunHandler: registerRerunHandler,
        registerExportHandler: registerExportHandler
    }
}