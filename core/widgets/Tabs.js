IFL.Widget.Tabs = function(_options) {
    var container;
    var tabs;
    var tabIndex = 0;
    
    var eventHandler = new IFL.Util.EventHandler(['show','select']);
    
    var contentsContainer;
    
    var options = {
        tabs: [],
        show: function(event, ui) { 
            var tab = ui.tab.text;
            eventHandler.notifyHandlers('show', tab);
        },
        select: function(event, ui) { 
            var tab = ui.tab.text;
            eventHandler.notifyHandlers('select', tab);
        },
        contentHeight: null
    }
    
    $.extend(true, options, _options);
    
    init();
    function init() {
        container = options.container || $('<div></div>');
        tabs = $('<ul></ul>').appendTo(container);
        contentsContainer = $('<div class="ui-layout-content"></div>').appendTo(container);
        initTabs();
        container.tabs(options);
        
        if (options.contentHeight) {
            $('.ui-tabs-panel',container).css({
                height: options.contentHeight,
                overflow: 'auto'
            })
        }
    }
    
    function initTabs() {
        for (var i in options.tabs) {
            var tab = options.tabs[i];
            initTab(tab);
        }
    }
    
    function initTab(tab) {
        var id = 'ui-tabs-' + tabIndex;
        var title = tab.title;
        var tabLi = $('<li><a href="#' + id + '">' + title +'</a></li>').appendTo(tabs);
        
        var tabContainer = $('<div id="' + id +'"></div>').append(tab.content).appendTo(contentsContainer);
        
        tabIndex += 2;
    }
    
    function addTab(tab) {
        var id = 'ui-tabs-' + tabIndex;
        
        container.tabs("add" , id, tab.title);
        var tabContainer = $('#' + id).append(tab.content);
        
        tabIndex += 2;
    }
    
    function getContainer() {
        return container;
    }
    
    function selectTab(tabIndex) {
        container.tabs('select', tabIndex);
    }
    
    function disableTabs(tabIndxes) {
        for (var t in tabIndxes) {
            var tabIndex = tabIndxes[t];
            container.tabs('disable', tabIndex);
        }
    }
    
    function enableTabs(tabIndxes) {
        for (var t in tabIndxes) {
            var tabIndex = tabIndxes[t];
            container.tabs('enable', tabIndex);
        }
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    return {
        getContainer: getContainer,
        addTab: addTab,
        selectTab: selectTab,
        disableTabs: disableTabs,
        enableTabs: enableTabs,
        registerHandler: registerHandler
    }
}