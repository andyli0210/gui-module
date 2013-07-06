IFL.Panel.CostPopup = function(_options, isScale) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;

    init();
    function init() {
        container = $('<div></div>');
        var table = $('<table width="100%" ></table>').appendTo(container);
        var row = $('<tr><th colspan="2" valign="center"></th></tr>').css('font-size', options.contentSize + 'px').appendTo(table);
        
        console.info('cost popup height: ' + options.height);
        $(container).dialog({
            title: 'Schedule Cost',
            width: options.width,
            //height: options.height,
            minHeight: 20,
            position: ['right', 'top'],
            closeOnEscape: false
        //resizable: false
        });
        initPopupStyle();
        
    //setCost(33000);
    }
    
    function initDefaultOptions() {
        var scale = 1;
        if (isScale) {
            scale = Config.screenRatio;
        }
        
        var height = Config.isMobile? 320 * scale : 135;
        options = {
            width: 400 * scale,
            height: height,    
            titleSize: 30 * scale,
            contentSize: 80 * scale
        }
    }
    
    function initPopupStyle() {
        $('.ui-dialog-title', container.parent()).css('font-size', options.titleSize+'px');
        $('a.ui-dialog-titlebar-close', container.parent()).remove();
        
        container.dialog('widget').css({
            position: 'absolute',
            left: '',
            right: 0
        })
    }
    
    function setCost(cost) {
        $('th', container).text('$' + cost);
    }
    
    function getCost() {
        return $('th', container).text();
    }
    
    function reset() {
        $('th', container).empty();
    }
    
    return  {
        reset: reset,
        setCost: setCost,
        getCost: getCost
    }
}