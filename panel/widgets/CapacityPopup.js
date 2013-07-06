IFL.Panel.CapacityPopup = function(_options, isScale) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var totalTd;
    var utilisationTd ;
    var inefficiencyTd;
    var preCostTd;

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
                title: 'Schedule Info',
                width: 400 * scale,
                //height: 200,
                position: ['right', 280 * scale],
                closeOnEscape: false,
                resizable: false
            },
            titleSize: 20 * scale,
            contentSize: 22 * scale
        }
    }
    
    function initContentTable() {
        totalTd = $('<th></th>');
        utilisationTd = $('<th></th>');
        inefficiencyTd = $('<th></th>');
        preCostTd = $('<th></th>');
    
        var table = $('<table class="ui-widget ui-state-default" width="100%"></table>').css('font-size', options.contentSize + 'px');
        var totalRow = $('<tr></tr>').append('<td>Total Truck Capacity: </td>').append(totalTd);
        var utilisationRow = $('<tr></tr>').append('<td>Capacity Utilisation: </td>').append(utilisationTd);
        var inefficiencyRow = $('<tr title="Most effective schedule cost is $3128"></tr>').append('<td>Potential to Save: </td>').append(inefficiencyTd);
        
        var preCostRow = $('<tr></tr>').append('<td>Previous Schedule Cost: </td>').append(preCostTd);
        table.append(preCostRow);
        table.append('<tr height="20px"/>');
        table.append(totalRow);
        table.append(utilisationRow);
        table.append(inefficiencyRow);
        
        // If demand is configurable, most effective cost could be different
        if (Config.isDemandConfigurable) {
            inefficiencyRow.hide();
        }
    
        table.appendTo(container);
	
        $('th', table).css('text-align', 'right');
    }
    
    function initPopupStyle() {
        $('.ui-dialog-title', container.parent()).css('font-size', options.titleSize+'px');
        $('a.ui-dialog-titlebar-close', container.parent()).remove();
        
        $('.ui-dialog-content',container.parent()).css('padding',0);
        
        if (Config.isMobile) {
            $(container).dialog('widget').css({
                position: 'absolute',
                left: 0,
                right: ''
            });
        } else {
            $(container).dialog('widget').css({
                position: 'absolute',
                left: '',
                right: 0
            });
        }
    }
    
    function setPreCost(cost) {
        if (cost)
            preCostTd.text(cost);
        else {
            preCostTd.text('');
        }
    }
    
    function updateToalCapacity(total) {
        utilisationTd.empty();
        inefficiencyTd.empty();
        totalTd.text(total);
    }
    
    function setCapacities(capacity) {
        totalTd.text(capacity.total);
        utilisationTd.text(capacity.utilisation);
        inefficiencyTd.text(capacity.inefficiency);
    }
    
    function reset() {
        utilisationTd.empty();
        inefficiencyTd.empty();
        totalTd.empty();
        preCostTd.empty();
    }
    
    function setPotentialToSave(potential) {
        inefficiencyTd.text(potential);
    }
    
    function setUtilisation(utilisation) {
        utilisationTd.text(utilisation);
    }
    
    return  {
        reset: reset,
        setPreCost: setPreCost,
        updateToalCapacity: updateToalCapacity,
        setCapacities: setCapacities,
        setPotentialToSave: setPotentialToSave,
        setUtilisation: setUtilisation
    }
}