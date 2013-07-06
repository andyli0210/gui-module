function AppStarter() {
    var layoutManager = new IFL.Dispatch.LayoutManager();
    initTabContents();
    
    function initTabContents() {
        initConfigTab();
        initVisTab();
    }
    
    function initConfigTab() {
        var configContainer = layoutManager.getConfigContainer();
        //var configService = new IFL.Dispatch.ConfigService(configContainer);
    }
    
    function initVisTab() {
        var scheduleService;
        var visContainer = layoutManager.getVisContainer();
        visContainer.css({
            width: '100%',
            height: 800
        })
       
        
        layoutManager.registerTabHandler('show', function(tabTitle) {
            if (tabTitle == 'Visualisation' && !scheduleService) {
                //contentPanel.append(mapContainer);
                scheduleService = new IFL.Dispatch.ScheduleService(visContainer);
                var layoutService = new IFL.Layout.LayoutService();
                layoutService.layout(visContainer, {
                    west: {
                        size: 350
                    //spacing_open: 0
                    }
                });
            }
        });
    }
    
    
}


