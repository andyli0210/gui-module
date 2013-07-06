IFL.Panel.UnSchedulePopup = function(_options, isScale) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var contentTable;

    init();
    function init() {
        container = $('<div></div>');
        initContentTable();
        
        $(container).dialog(options.dialog);
        initPopupStyle();
    }
    
    function initDefaultOptions() {
        var scale = 1;
        if (isScale) {
            scale = Config.screenRatio;
        }
        
        options = {
            dialog: {
                title: 'Missed',
                width: 250 * scale,
                position: ['left', 'top'],
                closeOnEscape: false,
                resizable: false
            },
            titleSize: 20 * scale,
            contentSize: 18 * scale
        }
    }
    
    function initContentTable() {
        contentTable = jQuery('<table width="100%"></table>').css('font-size', options.contentSize + 'px').appendTo(container);
        $('<tr><th align="Left">Location</th><th width="50%" align="center">Demand</th></tr>').appendTo(contentTable);
    }
    
    function setUnSchedules(unschedules) {
        $('tr',contentTable).remove();
        $('<tr><th align="Left">Location</th><th width="50%" align="center">Demand</th></tr>').appendTo(contentTable);
        
        for (var u in unschedules) {
            var request = unschedules[u];
            var row = jQuery('<tr><td align="Left">' + request.id +' </td><td align="center">' + request.commodities.commodity +'</td></tr>').appendTo(contentTable);
        }
    }
    
    function initPopupStyle() {
        $('.ui-dialog-title', container.parent()).css('font-size', options.titleSize+'px');
        $('a.ui-dialog-titlebar-close', container.parent()).remove();
    }
    
    function reset() {
        $('tr',contentTable).remove();
    }
    
    return  {
        reset: reset,
        setUnSchedules: setUnSchedules
    }
}