function SchedulePanel(boxHandler, uploadHandler, showInFolder) {
    var icon = {
        url: Config.imagePath + "/schedule_tab_right.png",
        width: 25,
        height: 180
    }
    
    var container
    if (!showInFolder) {
        container = new IFL.Widget.SidePanel(icon, 'right', 400, 400, 'Schedules', 250);
    } else {
        container = new IFL.Widget.FolderWidget({
            title: 'Schedules'
        });
    }
    
    var itemChangeHandler = boxHandler;
    var checkboxGroup;
    var fileUploadForm;
    var scheduleList = $('<div></div>');

    
    initFileUpload();
    refreshPanel([]);
    function initFileUpload() {
        
        fileUploadForm = new IFL.Schedule.FileUploadForm({
            dataType: 'xml',
            mode: Config.uploadMode,
            serverUrl: Config.uploadServer
        });
        
        fileUploadForm.registerHandler('upload', function(data, option) {
            if (uploadHandler) {
                uploadHandler(data, option);
            }
        });
        
        if (!showInFolder) {
            container.addContent(fileUploadForm.getContainer());
            container.addContent(scheduleList);
        } else {
            var contentContainer = $('<div></div>');
            contentContainer.append(fileUploadForm.getContainer());
            contentContainer.append(scheduleList);
            
            container.setContent(contentContainer);
        }
       
        
    }
    
    function refreshPanel(scheduleIds) {
        scheduleList.empty();
        checkboxGroup = new IFL.Widget.CheckboxGroup('schedulesroute', scheduleIds, scheduleIds, true);
        scheduleList.append(checkboxGroup.getContainer());
        
        if (itemChangeHandler) {
            checkboxGroup.registerChangeHandler(itemChangeHandler);
        } else {
            alert('No change handler registered for Date Route panel');
        }
    }
    
    function addSchedule(scheduleId) {
        checkboxGroup.addItem(scheduleId, true);
    }
    
    function registerHandler(handler) {
        itemChangeHandler = handler;
    }
    
    function getContainer() {
        return container.getContainer();
    }
    
    return {
        registerHandler: registerHandler,
        refreshPanel: refreshPanel,
        addSchedule: addSchedule,
        getContainer: getContainer
    }
    
}


