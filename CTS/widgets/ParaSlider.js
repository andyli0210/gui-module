IFL.CTS.ParaSlider = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var titleBar;
    var slider;
    var curValueField;
    var eventHandler = new IFL.Util.EventHandler(['change']);
    
    init();
    
    function initDefaultOptions() {
        options = {
            min: 0,
            max: 100,
            defaultValue: 50,
            unitPre: '',
            unitSuffix: '',
            titleText: 'Title Text for this slide: ',
            readonly: false
        }
    }
    
    function init() {
        container = $('<div class="ui-widget-content"></div>').css({
            padding: 5
        });
        
        initTitleBar();
        initRangeSlider();
        initTickBar();
    }
    
    function initTitleBar() {
        titleBar = $('<div></div>').appendTo(container).css({
            'margin-bottom': 10
        });
        
        var titleText = $('<span></span>').append(options.titleText).appendTo(titleBar);
        
        curValueField = $('<span/>').css({
            'font-weight': 'bold'
        }).appendTo(titleBar);
    }
    
    function initRangeSlider() {
        slider = $('<div/>').appendTo(container);
        $(slider).slider({
            range: "min",
            value: options.defaultValue,
            min: options.min,
            max: options.max,
            disabled: options.readonly,
            slide: function( event, ui ) {
                curValueField.text(options.unitPre + ui.value + options.unitSuffix);
                eventHandler.notifyHandlers('change', ui.value);
            }
        });
        
        curValueField.text(options.unitPre + slider.slider("value") + options.unitSuffix);
    }
    
    function initTickBar() {
        var maxTick = $('<div/>').append(options.unitPre + options.max + options.unitSuffix).css({
            'float': 'right'
        });
        
        var minTick = $('<div/>').append(options.unitPre + options.min + options.unitSuffix).css({
            'float': 'left'
        });
        
        var tickBar = $('<div/>').append(maxTick).append(minTick).appendTo(container).css({
            'height': 15
        });
    }
    
    function getContainer() {
        return container;
    }
    
    function getSliderValue() {
        return slider.slider("value");
    }
    
    function setSliderValue(val) {
        if (val || val == 0) {
            slider.slider("value", val);
            curValueField.text(options.unitPre + slider.slider("value") + options.unitSuffix);
        }
    }
    
    function registerHandler(eventName, handler) {
        eventHandler.registerHandler(eventName, handler);
    }
    
    return {
        getContainer: getContainer,
        getSliderValue: getSliderValue,
        setSliderValue: setSliderValue,
        registerHandler: registerHandler
    }
}