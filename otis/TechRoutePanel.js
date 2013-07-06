function TechRoutePanel() {
    var icon = {
        url: Config.imagePath + "/tech_tab.png",
        width: 56,
        height: 122,
        offset: -22
    }
    
    var slidePanel = new IFL.Widget.SidePanel(icon, 'left', 100, 300, 'Route By Tech Id');
    
    var itemChangeHandler;
    var checkboxGroup;


    function refreshPanel(techIds) {
        slidePanel.clear();
        checkboxGroup = new IFL.Widget.CheckboxGroup('techroutes', techIds, techIds, true);
        slidePanel.addContent(checkboxGroup.getContainer());
        
        if (itemChangeHandler) {
            checkboxGroup.registerChangeHandler(itemChangeHandler);
        } else {
            alert('No change handler registered for Tech Route panel');
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


