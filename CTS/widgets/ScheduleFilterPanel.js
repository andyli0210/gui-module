IFL.CTS.ScheduleFilterPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var container;
    var dayCheckboxGroup;
    var routeCheckboxGroup;
    var mapStylePanel;

    var eventHandler = new IFL.Util.EventHandler(['change', 'dayChange', 'routeChange', 'markerStyleChange', 'routeStyleChange']);

    init();
    initHandlers();
    function init() {
        container = $('<div/>').addClass('ui-widget-content').css({
            padding: 5,
            overflow: 'auto'
        });
        var titleBar = $('<div class="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all">Schedule Routes Filter</div>').appendTo(container);
        titleBar.css({
            padding: '3px',
            'font-size': '1.1em',
            marginBottom: 15
        });

        mapStylePanel = new IFL.CTS.MapStylePanel();
        $(mapStylePanel.getContainer()).css({
            marginTop: 10
        });

        var dayFilterContainer = new IFL.Widget.FolderWidget({
            title: 'Day Filter'
        });

        var routeFilterContainer = new IFL.Widget.FolderWidget({
            title: 'Route Filter'
        });

        dayCheckboxGroup = new IFL.Widget.RadioGroup('day-checkboxgroup', options.dayOptions, options.defaultDayOptions, true);
        routeCheckboxGroup = new IFL.Widget.CheckboxGroup('route-checkboxgroup', options.routeOptions, options.defaultRouteOptions, true, false, true);

        $('input', dayCheckboxGroup.getContainer()).button();
        $('label', dayCheckboxGroup.getContainer()).css({
            fontSize: '1em',
            width: '100%'
        });

        $(routeFilterContainer.getContainer()).css({
            marginTop: 10
        });

        $(dayFilterContainer.getContainer()).css({
            marginTop: 10
        });

        dayFilterContainer.setContent(dayCheckboxGroup);
        routeFilterContainer.setContent(routeCheckboxGroup);

        container.append(mapStylePanel.getContainer()).append(dayFilterContainer.getContainer()).append(routeFilterContainer.getContainer());
    }

    function initDefaultOptions() {
        options = {
            dayOptions: IFL.NameUtil.routeDays,
            defaultDayOptions: [],
            routeOptions: [],
            defaultRouteOptions: []
        };
    }

    function getCurrentSelected() {
        var day = dayCheckboxGroup.getSelectedItem();
        var routes = routeCheckboxGroup.getSelectedItems();

        return {
            day: day,
            routes: routes
        };
    }

    function initHandlers() {
        dayCheckboxGroup.registerChangeHandler(function(item) {
            var selected = getCurrentSelected();
            eventHandler.notifyHandlers('dayChange', selected);
        });

        routeCheckboxGroup.registerChangeHandler(function(item, isSelected) {
            var selected = getCurrentSelected();
            eventHandler.notifyHandlers('routeChange', selected);
        });

        mapStylePanel.registerChangeHandler(function(item, isSelected) {
            if (item === 'showDeliverySeq' || item === 'scaleByGpad') {
                eventHandler.notifyHandlers('markerStyleChange', item, isSelected);
            } else {
                eventHandler.notifyHandlers('routeStyleChange', item, isSelected);
            }
        });
    }

    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }

    function getContainer() {
        return container;
    }

    return {
        getContainer: getContainer,
        registerHandler: registerHandler
    }

}


