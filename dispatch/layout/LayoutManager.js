IFL.Dispatch.LayoutManager = function(_options) {
    var layoutService = new IFL.Layout.LayoutService();
    var headerPanel;
    var centerPanel;
    
    var tabNav;
    
    var configContainer = $('<div></div>');
    var planContainer = $('<div/>');
    var visContainer = $('<div></div>');
    var reportContainer = $('<div/>');
    
    init();
    
    function init() {
        initHeader();
        initCenter();
        
        layoutService.layout($('body'), {
            north: {
                size: 92,
                spacing_open: 0
            }
        });
        
        initTabContainerStyle();
    }
    
    function initHeader() {
        headerPanel = $('<div class="ui-layout-north" style="padding: 0px;border: none">').appendTo($('body'));
        var headBanner = $('<img src="'+ Config.imagePath + '/header.png' +  '"></img>');
        headerPanel.append(headBanner);
    }
    
    function initCenter() {
        tabNav = new IFL.Widget.Tabs({
            tabs: [{
                id: 'tab-1',
                title: 'Config',
                content: configContainer
            },
            {
                id: 'tab-2',
                title: 'Plan',
                content: planContainer
            },
            {
                id: 'tab-3',
                title: 'Visualisation',
                content: visContainer
            },
            {
                id: 'tab-4',
                title: 'Report',
                content: reportContainer
            }]
        });
        
        tabNav.getContainer().addClass('ui-layout-center').css({
            padding: 0,
            border: 'none'
        });
        tabNav.getContainer().appendTo($('body'));
        
        centerPanel = tabNav;
    }
    
    function initTabContainerStyle() {
        configContainer.css({
            padding: 0
        }).addClass('ui-widget-content');
        
        planContainer.css({
            padding: 0
        })
        
        visContainer.css({
            padding: 0
        })
        
        reportContainer.css({
            padding: 0
        })
    }
    
    function getConfigContainer() {
        return configContainer;
    }
    
    function getVisContainer() {
        return visContainer;
    }
    
    function registerTabHandler(name, handler) {
        tabNav.registerHandler(name, handler);
    }
    
    return {
        getConfigContainer: getConfigContainer,
        getVisContainer: getVisContainer,
        registerTabHandler: registerTabHandler
    }
}


