IFL.CTS.ScheduleDetailPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var unscheduleListPanel;
    var unscheduleListChart;
    var chartPanel;
    var scheduleGanttchart;
    var container;
    var daysCheckBox;
    
    init();
    function init() {
        container = $('<div class="ui-layout-content ui-widget-content"></div>').css({
            padding: 5,
            width: '100%',
            height: '100%'
        });
        
        container = $('<div/>');
        initChartPanel();
        initUnscheduleListPanel();
    }
    
    function initDefaultOptions() {
        options = {
            ganttChartTableOptions: {
                tableOptions: {
                    ganttOptions: {
                        containerId: 'chartContainer'
                    }
                }
            }
        }
    }
    
    function initDayButtons() {
        var chartContainerId = options.ganttChartTableOptions.tableOptions.ganttOptions.containerId;
        var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
        
        //Only show monday by default
        daysCheckBox = new IFL.Widget.CheckboxGroup('daysCheckBox'+chartContainerId, days, ['MONDAY'], false, true);
        daysCheckBox.getContainer().buttonset();
        
        var chartTable = $('tbody', scheduleGanttchart.getContainer()).has('#' + chartContainerId);
        var buttonRow = $('<tr></tr>');
        var td1 = $('<td colspan="1"></td>').appendTo(buttonRow);
        var td2 = $('<td></td>').appendTo(buttonRow);
        daysCheckBox.getContainer().appendTo(td2);
        chartTable.prepend(buttonRow);
        
        daysCheckBox.registerChangeHandler(function(selectedItem, isSelected) {
            var selectedDays = daysCheckBox.getSelectedItems();
            scheduleGanttchart.displayScheduleRoutesByDays(selectedDays);
        });
    }
    
    function initUnscheduleListPanel() {
        unscheduleListPanel = $('<div/>').css({
            width: '100%',
            margin: 5
        });
        
        unscheduleListPanel.appendTo(container);
        //unscheduleListPanel.hide();
        
        unscheduleListChart = new IFL.CTS.CustomerListTable();
        
        var unscheduleFolderPanel = new IFL.Widget.FolderWidget({
            title: 'Unschedule List'
        });
        
        unscheduleFolderPanel.setContent(unscheduleListChart);
        unscheduleListPanel.append(unscheduleFolderPanel.getContainer());
    }
    
    function initChartPanel() {
        chartPanel = $('<div/>').css({
            width: '100%',
            maring: 5
        });
        
        chartPanel.appendTo(container);
        //chartPanel.hide();
        
        scheduleGanttchart = new IFL.CTS.GanttChartTable(options.ganttChartTableOptions);
        
        var scheduleFolderPanel = new IFL.Widget.FolderWidget({
            title: 'Schedule Gantt Chart'
        });
        
        scheduleFolderPanel.setContent(scheduleGanttchart);
        chartPanel.append(scheduleFolderPanel.getContainer());
    }
    
    function displayScheduleSolution(solution) {
        scheduleGanttchart.displayScheduleRoutes(solution.routes.route);
        
        //only show MONDAY by default
        scheduleGanttchart.displayScheduleRoutesByDays(['MONDAY']);
        
        if (!daysCheckBox) {
            initDayButtons();
        }
        
        var droppedCustomers = [];
        for (var u in solution.unscheduleds.unscheduled) {
            var unschedule = solution.unscheduleds.unscheduled[u].refConsignment;
            
            var refLocation = unschedule.refLocation;
            var requestId = unschedule.id;
            var duration = unschedule.elapsedService;
            var timeStart = unschedule.windows.window[0].timeStart;
            var timeFinish = unschedule.windows.window[0].timeFinish;
            
            var timeStartStr = formatDate(new Date(timeStart), 'HH:mm');
            var timeFinishStr = formatDate(new Date(timeFinish), 'HH:mm');
            
            var locationId = refLocation.id;
            var custName = refLocation.pk;
            var custId = locationId.split('-')[1];
            
            var customerDomain = {
                requestId: requestId,
                id: custId,
                custName: custName,
                timeStart: timeStartStr,
                timeFinish: timeFinishStr,
                serviceDuration: duration
            }
            
            droppedCustomers.push(customerDomain);
        }
        
        //unscheduleListChart.displayUnschedules(ropSolution.unscheduleds.unscheduled);
        unscheduleListChart.setCustomers(droppedCustomers);
    }
    
    function getContainer() {
        return container;
    }
    
    return {
        getContainer: getContainer,
        displayScheduleSolution: displayScheduleSolution
    }
    
}


