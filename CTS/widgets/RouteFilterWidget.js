IFL.CTS.RouteFilterWidget = function(_options) {
    var options;
    initOptions();

    var container;
    var dayDropdownList;
    var routeDropdownList;

    init();
    function init() {
        dayDropdownList = new IFL.Widget.DropdownList('DayDropDownList', options.dayOptions, options.isMultiple);
        routeDropdownList = new IFL.Widget.DropdownList('RouteIdDropDownList', options.routeOptions, options.isMultiple);

        container = $('<div/>');

        var message;
        var routeIdMeg;
        var routeDayMeg;
        if (options.isMultiple) {
            message = $('<h4>Filter Route by ID and Day</h4>');
            message.append('<h5>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</h5>');
            routeIdMeg = $('<div>Route IDs:</div>');
            routeDayMeg = $('<div>Route Days:</div>');
        } else {
            message = $('<h4>Select Route ID and Day</h5>');
            routeIdMeg = $('<div>Route ID:</div>');
            routeDayMeg = $('<div>Route Day:</div>');
        }

        var c = routeDropdownList.getContainer();
        //debugger;
        container.append(message).append(routeIdMeg).append(routeDropdownList.getContainer()).append('<br/>').append(routeDayMeg).append(dayDropdownList.getContainer());
    }

    function initOptions() {
        var dayOptions = ['Grand Route', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        var routeOptions = [];

        if (_options.isMultiple) {
            routeOptions.push('All routes');
        }

        if (!_options.routeIds || _options.routeIds.length === 0) {
            alert('No route ID options for route filter !');
            return;
        }

        for (var i in _options.routeIds) {
            var routeId = _options.routeIds[i];
            routeOptions.push(routeId);
        }

        options = {
            dayOptions: dayOptions,
            routeOptions: routeOptions,
            isMultiple: _options.isMultiple
        };
    }

    function getContainer() {
        return container;
    }

    function getSelectedDays() {
        var selectedItems = dayDropdownList.getSelectedItem();

        if (!selectedItems)
            return '';

        if (!options.isMultiple) {
            if (selectedItems === 'Grand Route') {
                return 'summary';
            } else {
                return selectedItems;
            }
        } else {
            for (var i in selectedItems) {
                var item = selectedItems[i];
                if (item === 'Grand Route') {
                    selectedItems[i] = 'summary';
                }
            }

            return selectedItems;
        }
    }

    function getSelectedRoutes() {
        var selectedItems = routeDropdownList.getSelectedItem();
        if (!selectedItems)
            return '';

        if ($.inArray('All routes', selectedItems) > -1) {
            return options.routeOptions;
        } else {
            return selectedItems;
        }

    }

    return {
        getContainer: getContainer,
        getSelectedDays: getSelectedDays,
        getSelectedRoutes: getSelectedRoutes
    };
}


