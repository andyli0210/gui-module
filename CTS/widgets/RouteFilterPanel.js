IFL.CTS.RouteFilterPanel = function(_options) {
    var options;
    var container;
    
    var routeFilterWidget;
    var mapStyleCheckboxGroup;
    var styleItems = ['Show Route Direction', 'Show Vehicle Movement', 'Show Delivery Sequence', 'Scale By Gpad'];

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
            if (style === styleItems[0]) {
                parameters['showDirection'] = true;
            }
            if (style === styleItems[1]) {
                parameters['showVehicle'] = true;
            }
            if (style === styleItems[2]) {
                parameters['showDeliverySeq'] = true;
            }
            if (style === styleItems[3]) {
                parameters['scaleByGpad'] = true;
            }
        }
        
        return parameters;
    }


    return {
        getContainer: getContainer,
        getRouteFilterParameters: getRouteFilterParameters
    }
}


