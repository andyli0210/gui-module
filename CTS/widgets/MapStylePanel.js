IFL.CTS.MapStylePanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var folderWidget;
    var styleCheckboxGroup;

    var eventHandler = new IFL.Util.EventHandler(['change']);
    var styleMapping = {
        'Delivery Sequence': 'showDeliverySeq',
        'Scale By Gpad':  'scaleByGpad',
        'Route Direction': 'showRouteDirection',
        'Vehicle Movement': 'showVehMovement'
    };

    init();
    initHandlers();
    function init() {
        folderWidget = new IFL.Widget.FolderWidget({
            title: 'Map Styles'
        });

        styleCheckboxGroup = new IFL.Widget.CheckboxGroup('mapstyle-checkboxgroup', options.mapStyles, options.defaultMapStyles, true, true);

        $('input', styleCheckboxGroup.getContainer()).button();
        $('label', styleCheckboxGroup.getContainer()).css({
            fontSize: '1em',
            width: '100%'
        });

        folderWidget.setContent(styleCheckboxGroup);
    }

    function initDefaultOptions() {
        options = {
            mapStyles: ['Scale By Gpad', 'Delivery Sequence', 'Route Direction', 'Vehicle Movement'],
            defaultMapStyles: ['Scale By Gpad']
        };
    }

    function initHandlers() {
        styleCheckboxGroup.registerChangeHandler(function(item, isSelected) {
            eventHandler.notifyHandlers('change', styleMapping[item], isSelected);
        });
    }

    function registerChangeHandler(handler) {
        eventHandler.registerHandler('change', handler);
    }

    function getContainer() {
        return folderWidget.getContainer();
    }

    return {
        getContainer: getContainer,
        registerChangeHandler: registerChangeHandler
    };
};


