function DateRoutePanel() {
    var icon = {
        url: Config.imagePath + "/date_tab.png",
        width: 25,
        height: 122
    }
    
    var slidePanel = new IFL.Widget.SidePanel(icon, 'right', 80, 300, 'Route By Date');
    
    var itemChangeHandler;
    var checkboxGroup;


    function refreshPanel(dateStrs) {
        slidePanel.clear();
        checkboxGroup = new IFL.Widget.CheckboxGroup('dateroutes', dateStrs, dateStrs, true);
        slidePanel.addContent(checkboxGroup.getContainer());
        
        if (itemChangeHandler) {
            checkboxGroup.registerChangeHandler(itemChangeHandler);
        } else {
            alert('No change handler registered for Date Route panel');
        }
    }
    
    function registerHandler(handler) {
        itemChangeHandler = handler;
    }
    
    return {
        registerHandler: registerHandler,
        refreshPanel: refreshPanel
    }
    
}


