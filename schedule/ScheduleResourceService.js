IFL.Schedule.ResourceService = function() {
    var controlPanel = $('#controlPanel');
    var vehiclesTable;
    var tasksTable;
    
    var vehiclePopup = {};
    var taskPopup = {};
    
    var vehicles = {};
    var tasks = {};
    
    init();
    //initTestVehicles();
    function init() {
        initTables();
        initUI();    
        initPopups();
        initHandlers();
    }
    
    function initTables() {
        vehiclesTable = new IFL.Widget.ListControlPanel({
            keyTitleMapping: {
                id: 'ID'
            },
            listOptions: {
                showDeleteIcon: true, 
                showTitle: true, 
                itemPerPage: 10
            },
            panelOptions: {
        // title: 'Vehicles',
        // width: 300
        }
        });
        
        var taskMapping = {
            id: 'ID',
            //ISOStartTimeStr: 'Start Time',
            //ISOEndTimeStr: 'End Time',
            startTime: 'Start Time',
            endTime: 'End Time',
            vehicle: 'Vehicle ID'
        };
            
        tasksTable = new IFL.Widget.ListControlPanel({
            keyTitleMapping: taskMapping,
            listOptions: {
                showDeleteIcon: true, 
                showTitle: true, 
                itemPerPage: 10
            },
            panelOptions: {
        // title: 'Vehicles',
        // width: 300
        }
        });
    }
    
    function initUI() {
        controlPanel.css('margin-left', '15px');
        //vehiclesTable.getContainer().css('margin-left', '5px');
        //tasksTable.getContainer().css('margin-left', '5px');
        var vehiclePanel = new IFL.Widget.FolderWidget({
            title: 'Vehicle'
        });
        vehiclePanel.setContent(vehiclesTable);
        
        vehiclePanel.getContainer().appendTo(controlPanel);
        controlPanel.append('<br/>');
        
        var taskPanel = new IFL.Widget.FolderWidget({
            title: 'Tasks'
        });
        taskPanel.setContent(tasksTable);
        taskPanel.getContainer().appendTo(controlPanel);
        
        controlPanel.append('<br/>');
        $('<input id="refreshButton" type="button" value="Refresh"></input>').appendTo(controlPanel);
        
    //        myPager = new IFL.Widget.Pager();
    //        controlPanel.append('<br/>');
    //        controlPanel.append(myPager.getContainer());        
    }
    
    function initPopups() {
        vehiclePopup = new IFL.Widget.DomainPopup("Add/Edit Vehicle");
        taskPopup = new IFL.Widget.DomainPopup("Add/Edit Task"); 
    }
    
    function initHandlers(){
        var mapping = {
            id: 'ID',
            startTime: 'Start Time',
            endTime: 'End Time',
            vehicle: 'Vehicle'
            //ISOStartTimeStr: 'Start Time',
            //ISOEndTimeStr: 'End Time'
        }
        
        var vehMapping = {
            id: 'Veh ID'
        }
        
        vehiclesTable.registerHandler('delete', function(item) {
            vehiclesTable.deleteItem(item);
        });
            
        vehiclesTable.registerHandler('add', function() {
            var newVehicle = {
                id: ''
            };
            
            vehiclePopup.show(newVehicle, {
                isEditable: true,
                showMappingOnly: true,
                nameMapping: vehMapping
            });
        });
        
        vehiclesTable.registerHandler('select', function(item) {
            vehiclePopup.show(vehicles[item.id], {
                isEditable: true,
                showMappingOnly: true,
                nameMapping: vehMapping
            });
        });
        
        tasksTable.registerHandler('delete', function(item) {
            tasksTable.deleteItem(item);
        });
        
        tasksTable.registerHandler('add', function() {
            var newTask = {
                id: '',
                startTime: new IFL.Util.DateTime(),
                endTime: new IFL.Util.DateTime(),
                vehicle: ''
            };
            
            taskPopup.show(newTask, {
                isEditable: true,
                nameMapping: mapping,
                showMappingOnly: true
            });
            
            initTimePicker(taskPopup);
        });
        
        tasksTable.registerHandler('select', function(task) {
            taskPopup.show(tasks[task.id], {
                isEditable: true,
                nameMapping: mapping,
                showMappingOnly: true
            });
            // debugger;
            initTimePicker(taskPopup);
        });
        
        vehiclePopup.registerHandler(function(vehicle, isOk) {
            if (isOk) {
                
                if (!vehicles[vehicle.id]) {
                    vehiclesTable.addItem(vehicle);
                    vehicles[vehicle.id] = vehicle;
                }
            }
        })
        
        taskPopup.registerHandler(function(task, isOk) {
            if (isOk) {
                //debugger;
                if (!tasks[task.id]) {
                    tasksTable.addItem(task);
                    tasks[task.id] = task;
                }
            }
        })
    }
    
    function initTimePicker(taskPopup) {
        //debugger;
        var domainTable = taskPopup.getDomainTable();
        
        var keyRowMapping = domainTable.getRowKeyMapping();
        
        var startInput =$('td:nth-child(2) > input',keyRowMapping['startTime']);
        var endInput =$('td:nth-child(2) > input',keyRowMapping['endTime']);
        
        IFL.Util.initTimeWindowInput(startInput, endInput);
        
        var vehicetd = $('td:nth-child(2)',keyRowMapping['vehicle']);
        var vehicleValue = $('input', vehicetd).val();
        vehicetd.empty();
        
        var vehicleItems = [];
        for (var vehicleId in vehicles) {
            vehicleItems.push(vehicleId);
        }
        
        var vehicleDropdown = new IFL.Widget.DropdownList("vehicleDropdown", vehicleItems);
        controlPanel.append('<br/>');
        vehicleDropdown.getContainer().appendTo(vehicetd);
        vehicleDropdown.selectItem(vehicleValue);
    }
    
    function getVehicles() {
        return vehicles;
    }
    
    function getTasks() {
        //        for (var t in tasks) {
        //            var task = tasks[t];
        //        }
        
        return tasks;
    }
    
    function refresh(_vehicles, _tasks) {
        for (var v in _vehicles) {
            var veh = _vehicles[v];
            vehiclesTable.addItem(veh);
            vehicles[veh.id] = veh;
        }
        
        vehiclesTable.refresh();
        
        for (var t in _tasks) {
            var task = _tasks[t];
            tasksTable.addItem(task);
            tasks[task.id] = task;
        }
        
        tasksTable.refresh();
    }
    
    function initTestVehicles() {
        for (var i=1; i<20; i++) {
            var vId = 'V00' + i;
            var veh = {
                id: vId
            };
            
            vehiclesTable.addItem(veh);
            vehicles[veh.id] = veh;
            
            var startTime = new Date().getTime() + i*24*60*60*1000;
            initTestTasks(veh.id, startTime);
            
        }
        
        vehiclesTable.refresh();
        tasksTable.refresh();
    }
    
    function initTestTasks(vId, startTime) {
        //var endTime = new Date().getTime();
        var endTime = startTime;
        for (var i=0; i<10; i++) {
            var betweenAjust = (parseFloat(60*60*1000) - parseFloat(30*60*1000)) + 1;
            var between = Math.floor(Math.random()*betweenAjust) + parseFloat(30*60*1000);
             
            var startTime = endTime + between;
            
            var lengthAjust = (parseFloat(60*60*1000) - parseFloat(10*60*1000)) + 1;
            var length = Math.floor(Math.random()*lengthAjust) + parseFloat(10*60*1000);
            endTime = startTime + length;
            var testTask = {
                id: vId + "t" + i,
                startTime: new IFL.Util.DateTime(startTime),
                endTime: new IFL.Util.DateTime(endTime),
                vehicle: vId
            };
            tasksTable.addItem(testTask);
            tasks[testTask.id] = testTask;
        }
        
        
        
    }
    
    function getPager() {
        return vehiclesTable.getPager();
    }
    
    return {
        getVehicles: getVehicles,
        getTasks: getTasks,
        getPager: getPager,
        refresh: refresh
    }
}


