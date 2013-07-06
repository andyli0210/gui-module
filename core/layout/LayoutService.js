IFL.Layout.LayoutService = function() {
    var defaultOptions = {
        applyDefaultStyles: true
    }
    
    var container;
    var service;
    
    function layout(_container, _options) {
        var options = $.extend(true, {}, defaultOptions, _options);
        
        container = _container;
        service = $(container).layout(options);
    }
    
    function getNorthPanel() {
        return $('> .ui-layout-north', container);
    }
    
    function getCenterPanel() {
        return $('> .ui-layout-center', container);
    }
    
    function getWestPanel() {
        return $('> .ui-layout-west', container);
    }
    
    function getEastPanel() {
        return $('> .ui-layout-east', container);
    }
    
    function getSouthPanel() {
        return $('> .ui-layout-south', container);
    }
    
    function getService() {
        return service;
    }
    
    return {
        layout: layout,
        getNorthPanel: getNorthPanel,
        getCenterPanel: getCenterPanel,
        getWestPanel: getWestPanel,
        getEastPanel: getEastPanel,
        getSouthPanel: getSouthPanel,
        getService: getService
    }
}


