IFL.CTS.UnscheduleListChartTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var isHandlerInited = false;
    var chartTable;
    init();
    function init() {
        chartTable = new IFL.Widget.GanttChartTable(options.tableOptions);
    }
    
    function initHandlers() {
        chartTable.registerHandler('mouseover', function(item) {
            if (item.style) {
                chartTable.highlightChartItem(item, true);
            }
        });
        
        chartTable.registerHandler('mouseout', function(item) {
            if (item.style) {
                chartTable.highlightChartItem(item, false);
            }
        });
        
        isHandlerInited = true;
    }
    
    function initDefaultOptions() {
        options = {
            tableOptions: {
                keyTitleMapping: {
                    id: 'Consignment ID'
                },
                listOptions: {
                    itemPerPage: 10,
                    cssOptions: {
                        titleHeight: 50,
                        rowHeight: 50
                    }
                },
                ganttOptions: {
                    itemPerPage: 10,
                    usePager: true,
                    containerId: 'unscheduleChartContainer',
                    labelHeight: 45
                }
            },
            popupOptions: {
                
        }
        }
    }
    
    function displayUnschedules(unschedules) {
        var tableRows = [];
        var chartRows = [];
         
        for (var u in unschedules) {
            var refConsignment = unschedules[u].refConsignment;
            
            var consignment = {
                id: refConsignment.id
            }
            
            if (!refConsignment.id) {
                console.error('No Consignment Id for unschedule consignment! ');
                return;
            }
            
            tableRows.push(consignment);
            
            var window = refConsignment.windows.window[0];
            var start = window.timeStart;
            var end = window.timeFinish;
            
            var chartItem = {
                start: start,
                end: end,
                style: {
                    fillColor: 'red'
                }
            }
            
            chartRows.push({
                chartItems: [chartItem]
            })
            
        }
            
        chartTable.setTableItems(tableRows);
        chartTable.setGanttItems(chartRows);
        
        if (!isHandlerInited) {
            initHandlers();
        }
    }
    
    function getContainer() {
        return chartTable.getContainer();
    }
    
    return {
        getContainer: getContainer,
        displayUnschedules: displayUnschedules
        
    }
}


