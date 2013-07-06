IFL.CTS.RouteFilterPanel = function(_options) {
    var options;
    var container;
    var routeIdsInput;
    var routeDaysInput;
    var mapStyleCheckboxGroup;
    var styleItems = ['Show Route Direction', 'Show Vehicle Movement', 'Show Delivery Sequence', 'Scale By Gpad'];

    initOptions();
    init();
    function init() {
        container = $('<div/>');

        var message = $('<h5>Filter Route by ID and Day (leave filters empty will show all Grand Routes)</h5>');
        
        var routeIdMeg = $('<div>Route IDs (use comma as Separator character)</div>');
        routeIdsInput = $('<input/>').attr('value', '').css('width', 350);
        
         var routeDaysMeg = $('<div>Route Days (use comma as Separator character, input "summary" will show grand route)</div>');
        routeDaysInput = $('<input/>').attr('value', '').css('width', 350);
        
        container.append(message).append(routeIdMeg).append(routeIdsInput).append('<br/>').append(routeDaysMeg).append(routeDaysInput);
        
        var mapStyleMeg = $('<h5>Choose Map Styles</h5>').appendTo(container);
        mapStyleCheckboxGroup = new IFL.Widget.CheckboxGroup('mapStyleCheckboxGroup', styleItems, ['Scale By Gpad'], true, true);
        mapStyleCheckboxGroup.getContainer().appendTo(container);
    }

    function initOptions() {
        options = _options;
    }

    function getContainer() {
        return container;
    }

    function getRouteFilterParameters() {
        var parameters = {
            routeIds: routeIdsInput.val(),
            routeDays: routeDaysInput.val(),
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


