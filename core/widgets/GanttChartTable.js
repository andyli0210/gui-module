IFL.Widget.GanttChartTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var panel;
    var chartTd;
    var ganttService;
    var eventHandler;
    var chartRows = [];
    init();
    function init() {
        if (!options.keyTitleMapping) {
            console.error('Must specify keyTitleMapping for Gantt Chart Table !');
            return;
        }
        
        panel = new IFL.Widget.ListControlPanel(options);
        
        eventHandler = new IFL.Util.EventHandler(['']);
        
        initHandlers();
    }
    
    function initHandlers() {
        panel.registerHandler('pagechange', function(pageNum) {
            var displayRows = getChartPageItems(pageNum);
            displayChartItems(displayRows);
        })
    }
    
    function initDefaultOptions() {
        options = {
            keyTitleMapping: null,
            listOptions: {
                itemPerPage: 10,
                showDeleteIcon: false,
                cssOptions: {
                    titleHeight: 50,
                    rowHeight: 70
                }
            },
            ganttOptions: {
                itemPerPage: 10,
                usePager: true,
                containerId: 'chartContainer',
                labelHeight: 45,
                showYaxix: false
            },
            buttonPanelOptions:{},
            ganttService: null
        }
    }
    
    function getContainer() {
        return panel.getContainer();
    }
    
    function setTableItems(rowItems) {
        //make sure this methoed is called After the container is attached to DOM
        panel.setItems(rowItems);
        panel.refresh();
        initChartTd();
        //refreshGanttService();
    }
    
    function initChartTd() {
        if (chartTd) {
            return;
        }
        
        var listTable = panel.getListTable();
        var titleRow = listTable.getTitleRow();
        
        chartTd = $('<td rowspan="' + (options.listOptions.itemPerPage + 1)+ '" style="vertical-align: top; width: 70%;"></td>').appendTo(titleRow);
    }
    
    function setGanttItems(_chartRows) {
        chartRows = _chartRows;
        initGanttService();
        var rows = getChartPageItems(1);
        displayChartItems(rows);
    }
    
    function displayChartItems(rows) {
        ganttService.reset();
        //debugger;
        //var index = (chartRows.length > options.ganttOptions.itemPerPage ? chartRows.length : options.ganttOptions.itemPerPage);
        var index = options.ganttOptions.itemPerPage;
        for (var i=0; i<rows.length; i++) {
            var chartRow = rows[i];
            chartRow.rowIndex = index;
            
            ganttService.addRow(chartRow);
            
            for (var v in chartRow.chartItems) {
                var chartItem = chartRow.chartItems[v];
                chartItem.rowIndex = index;
                ganttService.addItem(chartItem);
            }
            
            index--;
        }
        
        ganttService.refreshPlot();
    }
    
    function getChartPageItems(pageNum) {
        var startIndex = (pageNum-1) * options.ganttOptions.itemPerPage;
        var endIndex = startIndex + options.ganttOptions.itemPerPage;
        
        return chartRows.slice(startIndex, endIndex);
    }
    
    function initGanttService() {
        //Make sure the container is attached to DOM before this
        if (ganttService) {
            return;
        }
        
        if (options.ganttService) {
            ganttService = options.ganttService;
            return;
        }
        
        var rowHeight = options.listOptions.cssOptions.rowHeight;
        var titleHeight = options.listOptions.cssOptions.titleHeight;
        var itemPerPage = options.listOptions.itemPerPage;
        
        var height = rowHeight * itemPerPage + titleHeight;
        var width = chartTd.width();
        var chartContainer = $('<div></div>').attr('id',options.ganttOptions.containerId).css({
            height: height,
            width: width
        }).appendTo(chartTd);
        
        ganttService = new IFL.GanttChart.GanttChartService(options.ganttOptions);
    }
    
    function getGanttService() {
        return ganttService;
    }
    
    function highlightChartItem(item, isHighlight) {
        if (ganttService) {
            ganttService.highlightChartItem(item, isHighlight);
        }
    }
    
    function getCurrentOverChartItem() {
        return ganttService.getCurrentOverItem();
    }
    
    //call this method after container is attached to DOM
    function registerHandler(name, handler) {
        if (name == 'mouseover' || name=='mouseout' || name == 'mouseclick') {
            ganttService.registerHandler(name, handler);
        } 
        
        if (name == 'select') {
            panel.registerHandler(name, handler);
        }
    }
    
    return {
        getContainer: getContainer,
        setTableItems: setTableItems,
        setGanttItems: setGanttItems,
        getGanttService: getGanttService,
        highlightChartItem: highlightChartItem,
        getCurrentOverChartItem: getCurrentOverChartItem,
        registerHandler: registerHandler
    }
}


