IFL.CTS.DataCheckList = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var dataDomain;
    var domainTable;
    var container;
    init();
    
    function init() {
        container = $('<div/>');
        
        initTitleBar();
        
        dataDomain = {
            raw: '',
            geo: '',
            volume: '',
            time: '',
            route: ''
        }
        
        domainTable = new IFL.Widget.DomainTable(dataDomain, {
            nameMapping: options.nameMapping,
            showMappingOnly: true,
            width: 300
        });
        
        domainTable.getContainer().appendTo(container);
    }
    
    function initTitleBar() {
        var titleBar = $('<div/>').append('Data cleansing checklist:').addClass('ui-widget-header ui-corner-all').css({
            padding: 5
        })
        
        titleBar.appendTo(container);
    }
    
    function initDefaultOptions() {
        options = {
            nameMapping: {
                raw: 'Raw data',
                geo: 'Geo location data',
                volume: 'Product volume data',
                time: 'Time data',
                route: 'Route detail data'
            }
        }
    }
    
    function getContainer() {
        return container;
    }
    
    function clear() {
        domainTable.empty();
        init();
    }
    
    function refresh(_dataDomain) {
        $.extend(true, dataDomain, _dataDomain);
        domainTable.refresh();
        
        var keyRowMapping = domainTable.getRowKeyMapping();
        
        for (var key in dataDomain) {
            var row = keyRowMapping[key];
            var fieldVal = dataDomain[key];
            var value_td = $('td:nth-child(2)',row);
            var color;
            switch (fieldVal) {
                case 'UPLOADED':
                case 'CORRECTED':
                case 'CHECKED': {
                    color = '#990';
                    break;
                }
                case 'RUNNING': {
                    color = '#666666';
                    break;
                }
                case 'UNCHECKED': {
                    color = 'red';
                    break;
                }
            }
            
            value_td.css({
                color: color,
                padding: 5,
                fontWeight: 'bold'
            });
        }
    }
    
    return {
        getContainer: getContainer,
        refresh: refresh
    }
}