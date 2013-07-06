
function AppStarter() {
    Config.imagePath = '../images';
    
    var controlPanel = $('#controlPanel');
    var vehiclesTable = new IFL.Widget.ListWidget(null, 'Vehicles', 280);
    var tasksTable = new IFL.Widget.ListWidget(null, 'Tasks', 280);
    vehiclePopup = {};
    var taskPopup;
    
    var ganttService = new IFL.GanttChart.GanttChartService('chartContainer');
    
    init();    
    initPopups();
    function init() {
        vehiclesTable.getContainer().css('margin-left', '5px');
        tasksTable.getContainer().css('margin-left', '5px');
        
        vehiclesTable.getContainer().appendTo(controlPanel);
        controlPanel.append('<br/>');
        tasksTable.getContainer().appendTo(controlPanel);
    }
    
    function initPopups() {
        vehiclePopup = new IFL.Widget.DomainPopup("Vehicle Popup");
    }
}



