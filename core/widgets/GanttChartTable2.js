IFL.Widget.GanttChartTable = function(_options) {
    var defaultOptions = {
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
            containerId: 'chartContainer',
            labelHeight: 45
        },
        panelOptions:{},
        ganttService: null
    }
    
    var options = $.extend(true, {}, defaultOptions, _options);
    
    var panel;
    var chartTd;
    var ganttService;
    init();
    function init() {
        if (!options.ganttService) {
            
        }
        
        panel = new IFL.Widget.ListControlPanel(options);
    }
    
    function getContainer() {
        return panel.getContainer();
    }
    
    function setRowItems(rows) {
        panel.setItems(rows);
        panel.refresh();
        initChartTd();
        initGanttService();
    }
    
    function initChartTd() {
        if (chartTd) {
            return;
        }
        
        var listTable = panel.getListTable();
        var titleRow = listTable.getTitleRow();
        
        chartTd = $('<td rowspan="' + (options.listOptions.itemPerPage + 1)+ '" style="vertical-align: top; width: 70%;"></td>').appendTo(titleRow);
    }
    
    function initGanttService() {
        if (ganttService) {
            return;
        }
        
        var rowHeight = options.listOptions.cssOptions.rowHeight;
        var titleHeight = options.listOptions.cssOptions.titleHeight;
        var itemPerPage = options.listOptions.itemPerPage;
        
        
        
        var height = rowHeight * itemPerPage + titleHeight;
        var width = chartTd.width();
        var chartContainer = $('<div id="chartContainer"></div>').css({
            height: height,
            width: width
        }).appendTo(chartTd);
        
        options.ganttOptions.pager = panel.getPager();
        ganttService = new IFL.Schedule.GanttService(options.ganttOptions);
    }
    
    function refreshWithRoutes(_routes) {
        var routes = [];
        for (var r in _routes) {
            routes.push(_routes[r]);
        }
        
        setRowItems(routes);
        ganttService.refreshWithRoutes(routes);
    }
    
    function refreshWithResourceRoutes(resourceRoutes) {
        var resources = [];
        for (var resourceId in resourceRoutes) {
            for (var scheduleId in resourceRoutes[resourceId]) {
                var routes = resourceRoutes[resourceId][scheduleId];
                
                var totalTravelTime = 0;
                var totalServiceTime = 0;
                // cal travel and service time
                for (var r in routes) {
                    var route = routes[r];
                    totalTravelTime += route.travelTime;
                    totalServiceTime += route.serviceTime;
                }
                
                totalTravelTime = IFL.Util.millsecsToHours(totalTravelTime);
                totalServiceTime = IFL.Util.millsecsToHours(totalServiceTime);
                
                var randomLoad = Math.random();
                var resourceRoute = {
                    id: resourceId+scheduleId,
                    resourceId: resourceId,
                    scheduleId: scheduleId,
                    travelTime: totalTravelTime,
                    serviceTime: totalServiceTime,
                    vehicleLoad: new VehicleLoad({load: randomLoad})
                }
                
                resources.push(resourceRoute);
            }
            
        }
        
        setRowItems(resources);
        ganttService.refreshWithResourceRoutes(resourceRoutes);
    }
    
    function getGanttService() {
        return ganttService;
    }
    
    function highlightTask(service, isHighlight) {
        if (ganttService) {
            ganttService.highlightTask(service, isHighlight);
        }
    }
    
    return {
        getContainer: getContainer,
        setRowItems: setRowItems,
        refreshWithRoutes: refreshWithRoutes,
        refreshWithResourceRoutes: refreshWithResourceRoutes,
        getGanttService: getGanttService,
        highlightTask: highlightTask
    }
}


