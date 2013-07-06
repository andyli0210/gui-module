IFL.CTS.DataSummaryTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var dataValueField = ['vehicles','routeNum','cusNum','gpad','grossMargin','varCost','fixCost','linehaulCost','volWeek','volMF','distance','duration','droppedCust', 'profitableCust','unprofitableCust','violationNum'];
    var eventHandler = new IFL.Util.EventHandler(['clickOpt']);
    
    var optColumns = {};
    init();
    function init() {
        container = $('<table></table>').addClass('ui-widget ui-widget-content');
        initTitleColumn();
    }
    
    function initDefaultOptions() {
        options = {
            
        }
    }
    
    function initTitleColumn() {
        var titleRow = $('<tr><th></th></tr>').appendTo(container);
        var vehiclesRow = $('<tr><th>Vehicles</th></tr>').appendTo(container);
        var routeNumRow = $('<tr><th>Routes Num</th></tr>').appendTo(container);
        var custNumRow = $('<tr><th>Customers Num</th></tr>').appendTo(container);
        var gpadRow = $('<tr><th>GPAD</th></tr>').appendTo(container);
        var grossMarginRow = $('<tr><th>Gross Margin</th></tr>').appendTo(container);
        var varCostRow = $('<tr><th>Variable Costs</th></tr>').appendTo(container);
        var fixCostRow = $('<tr><th>Fixed Cost</th></tr>').appendTo(container);
        var linehaulCostRow = $('<tr><th>Linehaul Cost</th></tr>').appendTo(container);
        var volWeekRow = $('<tr><th>Volume(Week)</th></tr>').appendTo(container);
        var volMFRow = $('<tr><th>Volume(M-F)</th></tr>').appendTo(container);
        var distanceRow = $('<tr><th>Distance(KM)(Week)</th></tr>').appendTo(container);
        var durationRow = $('<tr><th>Duration(hrs)(Week)</th></tr>').appendTo(container);
        var droppedCustRow = $('<tr><th>Dropped Customers</th></tr>').appendTo(container);
        var profitCustRow = $('<tr><th>Profitable Customers</th></tr>').appendTo(container);
        var unprofitCustRow = $('<tr><th>Unprofitable Customers</th></tr>').appendTo(container);
        var violationNumRow = $('<tr><th>Violations Num</th></tr>').appendTo(container);
        
        $('th', container).addClass('ui-widget-header').css({
            textAlign: 'left',
            padding: 2
        });
    }
    
    function addDataColumn(optInfo) {
        var title = optInfo.name;
        var dataValueList = optInfo.dataValueList;
        
        optColumns[optInfo.id] = [];
        
        $('tr',container).each(function(i) {
            if (i == 0) {
                var th = $('<th>').css('padding','2px').append(title);
                $(this).append(th);
                
                optColumns[optInfo.id].push(th);
                
                //th.attr('title', 'click to show Optimisation details');
                //th.css('cursor', 'pointer');
//                th.click(function(e) {
//                    eventHandler.notifyHandlers('clickOpt', title, {pageX: e.pageX, pageY: e.pageY});
//                })
            } else {
                var field = dataValueField[i-1];
                var value = dataValueList[field];
                
                if (value == 0 || value) {
                    var td = $('<td/>').append(value);
                    $(this).append(td);
                    optColumns[optInfo.id].push(td);
                }
            }
        })
        
        $('td', container).addClass('ui-widget-content').css({
            textAlign: 'right',
            paddingRight: 1
        });
        $('th', container).addClass('ui-widget-header');
    }
    
    function getContainer() {
        return container;
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    function removeOptColumn(optInfo) {
        var optTds = optColumns[optInfo.id];
        if (optTds) {
            for (var o in optTds) {
                var td = optTds[o];
                td.remove();
            }
            
            optColumns[optInfo.id] = null;
        } else {
            console.warn('There is no opt info with id: ' + optInfo.id + ' in opt data summary table !');
        }
    }
    
    function highlightOptColumn(optInfo, isHighlight) {
        var optTds = optColumns[optInfo.id];
        if (optTds) {
            for (var o in optTds) {
                var td = optTds[o];
                if (isHighlight) {
                    td.addClass('ui-state-active');
                } else {
                    td.removeClass('ui-state-active');
                }
            }
            
        } else {
            console.warn('There is no opt info with id: ' + optInfo.id + ' in opt data summary table !');
        }
        
    }
    
    return {
        getContainer: getContainer,
        addDataColumn: addDataColumn,
        registerHandler: registerHandler,
        highlightOptColumn: highlightOptColumn,
        removeOptColumn: removeOptColumn
    }
}


