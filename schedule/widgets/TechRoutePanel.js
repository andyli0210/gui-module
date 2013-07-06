function TechRoutePanel(handler, showInFolder) {
    var icon = {
        url: Config.imagePath + "/tech_tab.png",
        width: 56,
        height: 122,
        offset: -22
    }
    
    var container;
    if (!showInFolder) {
        container = new IFL.Widget.SidePanel(icon, 'left', 100, 300, 'Route By Tech Id');
    } else {
        container = new IFL.Widget.FolderWidget({
            title: 'Route By Tech Id'
        });
    }
    
    var itemChangeHandler = handler;
    var checkboxGroup;


    function refreshPanel(techIds) {
        
        checkboxGroup = new IFL.Widget.CheckboxGroup('techroutes', techIds, techIds, true);
        
        if (!showInFolder) {
            container.clear();
            container.addContent(checkboxGroup.getContainer());
        } else {
            container.setContent(checkboxGroup);
        }
        
        if (itemChangeHandler) {
            checkboxGroup.registerChangeHandler(itemChangeHandler);
        } else {
            alert('No change handler registered for Tech Route panel');
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


