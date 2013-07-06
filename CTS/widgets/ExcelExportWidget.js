IFL.CTS.ExcelExportWidget = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var exportButton;
    
    init();
    function init() {
        container = $('<div/>').addClass('ui-widget-content').css({
            textAlign: 'center',
            padding: 10
        });
        
        container.append('<div>CTS Excel Spreadsheet<div/>');
        
        initExportButton();
    }
    
    function initExportButton() {
        container.append('<br/>');
        exportButton = $('<button>Export</button>').button().appendTo(container);
        exportButton.css({
            fontSize: '1em'
        })
    }
    
    function initDefaultOptions() {
        
    }
    
    function getContainer() {
        return container;
    }
    
    function registerButtonHandler(handler) {
        exportButton.click(handler);
    }
    
    return {
        getContainer: getContainer,
        registerButtonHandler: registerButtonHandler
    }
}