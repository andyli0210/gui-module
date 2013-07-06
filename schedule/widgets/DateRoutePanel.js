function DateRoutePanel(_handler, showInFolder) {
    var icon = {
        url: Config.imagePath + "/date_tab.png",
        width: 25,
        height: 122
    }
    
    var container;
    
    if (!showInFolder) {
        container = new IFL.Widget.SidePanel(icon, 'right', 80, 300, 'Route By Date', 300);
    } else {
        container = new IFL.Widget.FolderWidget({
            title: 'Route By Date'
        });
    }
    
    
    var itemChangeHandler = _handler;
    var checkboxGroup;


    function refreshPanel(dateStrs, useDateFilter) {
        dateStrs.sort();
        
        if (useDateFilter) {
            var dateTimes = [];
            for (var d in dateStrs) {
                var dateTime = new IFL.Util.DateTime(dateStrs[d], 'string', 'yyyy-MM-dd');
                dateTimes.push(dateTime);
            }
            
            var dateFilter = new IFL.Widget.DateFilter();
            dateFilter.refresh(dateTimes);
            
            container.setContent(dateFilter);
            
            dateFilter.registerHandler('change', itemChangeHandler);
            return;
        } 
        checkboxGroup = new IFL.Widget.CheckboxGroup('dateroutes', dateStrs, dateStrs, true);
        
        if (!showInFolder) {
            container.clear();
            container.addContent(checkboxGroup.getContainer());
        } else {
            container.setContent(checkboxGroup);
        }
        
        if (itemChangeHandler) {
            checkboxGroup.registerChangeHandler(itemChangeHandler);
        } else {
            alert('No change handler registered for Date Route panel');
        }
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
        getContainer: getContainer
    }
    
}


