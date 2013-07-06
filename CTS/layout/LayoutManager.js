IFL.CTS.LayoutManager = function(_options) {
    var layoutService = new IFL.Layout.LayoutService();
    var headerPanel;
    var centerPanel;
    var westPanelContainer;
    
    var tabNav;
    
    var geoCheckerContainer = $('<div></div>').css('position', 'absolute');
    var volumeCheckerContainer = $('<div/>');
    var timeCheckerContainer = $('<div></div>');
    var routeCheckerContainer = $('<div/>');
    
    var buildNumber = $('<span/>');
    var buildId = $('<span/>');
    
    init();
    
    function init() {
        initHeader();
        initWest();
        initCenter();
        
        layoutService.layout($('body'), {
            north: {
                size: 92,
                spacing_open: 0
            },
            west: {
                size: 550,
                spacing_open: 10
            }
        });
        
        initTabContainerStyle();
        initCenterHeader();
    }
    
    function initHeader() {
        headerPanel = $('<div class="ui-layout-north" style="padding: 0px;border: none; background-color: #DDE4CA;">').appendTo($('body'));
        var headBanner = $('<img src="'+ Config.imagePath + '/logo_IFL.png' +  '"></img>');
        
        //var headBanner = $('<img height="80px" src="'+ Config.imagePath + '/logo3.png' +  '"></img>');
        //var logoText =  $('<img src="'+ Config.imagePath + '/logo_text.PNG' +  '"></img>');
        
        var nictaLogo = $('<img src="'+ Config.imagePath + '/logo_NICTA.png' +  '"></img>').css({
            'float': 'right',
            marginTop: 10,
            marginLeft: 20,
            marginRight: 15
            });
            
        var buildInfo = $('<span></span>').css({
            position: 'absolute',
            margin: 'auto'
        }).append(buildNumber).append(' | ').append(buildId);
        headerPanel.append(headBanner).append(nictaLogo).append(buildInfo);
        
        if (!Config.showBuildInfo) {
            buildInfo.hide();
        } else {
            buildInfo.show();
        }
    }
    
    function initWest() {
        var westPanel = $('<div class="ui-layout-west" style="padding: 0px;border: none">').appendTo($('body'));
        westPanelContainer = $('<div width="100%" class="ui-layout-content ui-widget-content"></div>').css({
            padding: 5
        });
        westPanel.append(westPanelContainer);
    }
    
    function initCenterHeader() {
        $('<div/>').append('Data Cleansing Tool').insertBefore(tabNav.getContainer());
    }
    
    function initCenter() {
        //var centerPanel = $('<div class="ui-layout-center" style="padding: 0px;border: none">').appendTo($('body'));
        
        tabNav = new IFL.Widget.Tabs({
            tabs: [{
                id: 'tab-1',
                title: 'Geo',
                content: geoCheckerContainer
            },
            {
                id: 'tab-2',
                title: 'Volume',
                content: volumeCheckerContainer
            },
            {
                id: 'tab-3',
                title: 'Time',
                content: timeCheckerContainer
            },
            {
                id: 'tab-4',
                title: 'Route',
                content: routeCheckerContainer
            }]
        });
        
        //centerPanel.append(tabNav.getContainer());
        tabNav.getContainer().addClass('ui-layout-center').css({
            padding: 0,
            border: 'none'
        });
        tabNav.getContainer().appendTo($('body'));
        
        centerPanel = tabNav;
    }
    
    function initTabContainerStyle() {
        geoCheckerContainer.css({
            padding: 5
        });
        
        volumeCheckerContainer.css({
            padding: 5
        });
        
        timeCheckerContainer.css({
            padding: 5
        });
        
        routeCheckerContainer.css({
            padding: 5
        });
        
        $('.ui-layout-content').addClass('ui-widget-content');
        $('.ui-tabs-panel').css({
            padding: 0
        })
    }
    
    function enableCheckerTabs(isEnable) {
        if (isEnable) {
            tabNav.enableTabs([1,2,3]);
        } else {
            tabNav.disableTabs([1,2,3]);
        }
    }
    
    function selectTab(tabIndex) {
        tabNav.selectTab(tabIndex);
    }
    
    function getGeoCheckerContainer() {
        return geoCheckerContainer;
    }
    
    function getVolumeCheckerContainer() {
        return volumeCheckerContainer;
    }
    
    function getTimeCheckerContainer() {
        return timeCheckerContainer;
    }
    
    function getRouteCheckerContainer() {
        return routeCheckerContainer;
    }
    
    function getWestPanelContainer() {
        return westPanelContainer;
    }
    
    function getHeaderPanel() {
        return headerPanel;
    }
    
    function baseCaseLayout() {
        var service = layoutService.getService();
        service.hide('west');
        service.panes.center.empty()
        service.panes.center.append(westPanelContainer)
    }
    
    function ctsOptLayout() {
        var service = layoutService.getService();
        service.hide('west');
    }
    
    function getCenterPanelContainer() {
        var service = layoutService.getService();
        return service.panes.center;
    }
    
    function registerTabHandler(name, handler) {
        tabNav.registerHandler(name, handler);
    }
    
    function setBuildInfo(buildInfo) {
        buildNumber.text(buildInfo.number);
        buildId.text(buildInfo.id);
    }
    
    return {
        getGeoCheckerContainer: getGeoCheckerContainer,
        getVolumeCheckerContainer: getVolumeCheckerContainer,
        getTimeCheckerContainer: getTimeCheckerContainer,
        getRouteCheckerContainer: getRouteCheckerContainer,
        getWestPanelContainer: getWestPanelContainer,
        getCenterPanelContainer: getCenterPanelContainer,
        getHeaderPanel: getHeaderPanel,
        registerTabHandler: registerTabHandler,
        baseCaseLayout: baseCaseLayout,
        ctsOptLayout: ctsOptLayout,
        enableCheckerTabs: enableCheckerTabs,
        selectTab: selectTab,
        setBuildInfo: setBuildInfo
    }
}


