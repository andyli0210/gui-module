IFL.CTS.RouteFilterPanel = function(_options) {
    var options;
    var container;
    
    var routeFilterWidget;
    var mapStyleCheckboxGroup;
    var styleItems;
    if (Config.hideDeliverySequence) {
        styleItems = ['Show Route Direction', 'Show Vehicle Movement', 'Scale By Gpad'];
    } else {
        styleItems = ['Show Route Direction', 'Show Vehicle Movement', 'Show Delivery Sequence', 'Scale By Gpad'];
    }
    
    initOptions();
    $.extend(true, options, _options);
    
    init();
    function init() {
        container = $('<div/>');
        
        routeFilterWidget = new IFL.CTS.RouteFilterWidget({
            isMultiple: options.isMultipleSelect,
            routeIds: options.routeIds
        });
        
        container.append(routeFilterWidget.getContainer());
        
        var mapStyleMeg = $('<h5>Choose Map Styles</h5>').appendTo(container);
        mapStyleCheckboxGroup = new IFL.Widget.CheckboxGroup('mapStyleCheckboxGroup', styleItems, options.defaultStyleItems, true, true);
        mapStyleCheckboxGroup.getContainer().appendTo(container);
    }

    function initOptions() {
        options = {
            isMultipleSelect: true,
            defaultStyleItems: ['Scale By Gpad'],
            routeIds: []
        };
    }

    function getContainer() {
        return container;
    }

    function getRouteFilterParameters() {
        var parameters = {
            routeIds: routeFilterWidget.getSelectedRoutes(),
            routeDays: routeFilterWidget.getSelectedDays(),
            showDirection: false,
            showVehicle: false,
            showDeliverySeq: false,
            scaleByGpad: false
        };
        
        var seletedStyles = mapStyleCheckboxGroup.getSelectedItems();
        for (var i in seletedStyles) {
            var style = seletedStyles[i];
            switch (style) {
                case 'Show Route Direction': parameters['showDirection'] = true; break;
                case 'Show Vehicle Movement': parameters['showVehicle'] = true; break;
                case 'Show Delivery Sequence': parameters['showDeliverySeq'] = true; break;
                case 'Scale By Gpad': parameters['scaleByGpad'] = true; break;
            }
        }
        
        return parameters;
    }


    return {
        getContainer: getContainer,
        getRouteFilterParameters: getRouteFilterParameters
    }
}


