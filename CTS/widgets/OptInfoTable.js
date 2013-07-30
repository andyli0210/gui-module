IFL.CTS.OptInfoTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    
    var optInfoWidgets;
    var eventHandler = new IFL.Util.EventHandler(['mouseover', 'mouseout', 'click', 'showMap', 'showChart','showParameters', 'rerun','delete','cancel','asInput','report','showRobust']);
    
    init();
    function initDefaultOptions() {
        options = {
            loadingIconPath: Config.imagePath + "/loading2.gif",
            width: 1200
        }
    }
    
    function init() {
        optInfoWidgets = {};
        container = $('<table></table>').addClass('ui-widget ui-widget-content').css({
            width: options.width,
            'border-collapse': 'collapse'
        });
    }
    
    function addOptInfo(optInfo) {
        var optInfoWidget = new IFL.CTS.OptInfoWidget(optInfo);
        container.append(optInfoWidget.getContainer());
        
        optInfoWidgets[optInfo.id] = optInfoWidget;
        
        optInfoWidget.registerHandler('showMap', function(optInfo, options) {
            eventHandler.notifyHandlers('showMap', optInfo, options);
        });
        
        optInfoWidget.registerHandler('showChart', function(optInfo, options) {
            eventHandler.notifyHandlers('showChart', optInfo, options);
        });
        
        optInfoWidget.registerHandler('showParameters', function(optInfo, options) {
            eventHandler.notifyHandlers('showParameters', optInfo, options);
        });
        
        optInfoWidget.registerHandler('rerun', function(optInfo, options) {
            eventHandler.notifyHandlers('rerun', optInfo, options);
        });
        
        optInfoWidget.registerHandler('delete', function(optInfo, options) {
            eventHandler.notifyHandlers('delete', optInfo, options);
        });
        
        optInfoWidget.registerHandler('cancel', function(optInfo, options) {
            eventHandler.notifyHandlers('cancel', optInfo, options);
        });
        
        optInfoWidget.registerHandler('mouseover', function(optInfo, options) {
            eventHandler.notifyHandlers('mouseover', optInfo, options);
        });
        
        optInfoWidget.registerHandler('mouseout', function(optInfo, options) {
            eventHandler.notifyHandlers('mouseout', optInfo, options);
        });
        
        optInfoWidget.registerHandler('asInput', function(optInfo, options) {
            eventHandler.notifyHandlers('asInput', optInfo, options);
        });
        
        optInfoWidget.registerHandler('report', function(optInfo, options) {
            eventHandler.notifyHandlers('report', optInfo, options);
        });
        
        optInfoWidget.registerHandler('showRobust', function(optInfo, options) {
            eventHandler.notifyHandlers('showRobust', optInfo, options);
        });
    }
    
    function updateOptInfo(optInfo) {
        var optInfoWidget = optInfoWidgets[optInfo.id];
        if (optInfoWidget) {
            optInfoWidget.updateOptInfo(optInfo);
        } else {
            console.warn('This is not Opt Info with id: ' + optInfo.id + ' in opt info table !');
        }
    }
    
    function getCompletedOptInfos() {
        var optInfos = [];
        for (var i in optInfoWidgets) {
            var widget = optInfoWidgets[i];
            
            var optInfo = widget.getOptInfo();
            if (optInfo.status == 'completed') {
                optInfos.push(optInfo);
            }
        }
        
        return optInfos;
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    function getContainer() {
        return container;
    }
    
    return {
        getContainer: getContainer,
        addOptInfo: addOptInfo,
        updateOptInfo: updateOptInfo,
        registerHandler: registerHandler,
        getCompletedOptInfos: getCompletedOptInfos
    }
}


