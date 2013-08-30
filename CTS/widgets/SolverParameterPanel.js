IFL.CTS.SolverParameterPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var container;
    var capacitySlider;
    var timeSlider;
    var speedSlider;
    var timeWindowSlider;
    var runLengthSlider;
    var maxStopSlider;
    var iterationsSlider;
    var lolliPopupSlider;
    var lolliPopup2Slider;

    var sliderContainer;
    var optionalParaContainer;

    init();
    function init() {
        container = $('<div class="ui-widget-content"/>').css({
            padding: 10
        });
        container.append('<h2>Solver parameters</h2>');

        sliderContainer = $('<div/>').css({
            padding: 5
        }).appendTo(container);

        optionalParaContainer = $('<div/>').css({
            padding: 5
        }).appendTo(container);

        if (options.sliders) {
            initSliders(options.sliders);
        } else {
            createSliders();
        }

        initOptionalParameters();


        //        container.append(options.sliders.geoSliders.container);
        //        container.append(options.sliders.volumeSliders.container);
        //        container.append(options.sliders.timeSliders.container);
        //        container.append(options.sliders.routeSliders.container);
    }

    function initSliders(sliders) {
        capacitySlider = sliders.volumeSliders.capacitySlider;
        timeSlider = sliders.timeSliders.timeSlider;
        speedSlider = sliders.timeSliders.speedSlider;
        timeWindowSlider = sliders.routeSliders.timeSlider;
        runLengthSlider = sliders.geoSliders.lengthSlider;
        maxStopSlider = sliders.geoSliders.stopSlider;

        sliderContainer.append(runLengthSlider.getContainer());
        sliderContainer.append(maxStopSlider.getContainer());
        sliderContainer.append(capacitySlider.getContainer());
        sliderContainer.append(timeSlider.getContainer());
        sliderContainer.append(speedSlider.getContainer());
        sliderContainer.append(timeWindowSlider.getContainer());
    }

    function initOptionalParameters() {

        iterationsSlider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 0,
            max: 10000,
            //unitSuffix: '',
            //unitPre: '$',
            defaultValue: 100,
            titleText: 'Number of solver iterations: '
        });

        lolliPopupSlider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 0,
            max: 100,
            unitSuffix: '%',
            //unitPre: '$',
            defaultValue: 0,
            titleText: 'The Elise Lollipop: '
        });
        
        lolliPopup2Slider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 0,
            max: 100,
            unitSuffix: '%',
            //unitPre: '$',
            defaultValue: 0,
            titleText: 'Lollipop: '
        });

        optionalParaContainer.append(iterationsSlider.getContainer());
        optionalParaContainer.append(lolliPopupSlider.getContainer());
        optionalParaContainer.append(lolliPopup2Slider.getContainer());
    }

    function createSliders() {
        runLengthSlider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 2,
            max: 48,
            unitSuffix: ' hours',
            //unitPre: '$',
            defaultValue: 24,
            titleText: 'Geo run length in hours: '
        });

        maxStopSlider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 02,
            max: 24,
            unitSuffix: ' hours',
            //unitPre: '$',
            defaultValue: 12,
            titleText: 'Max time between stops in hours: '
        });

        timeWindowSlider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 0,
            max: 24,
            unitSuffix: ' hour',
            //unitPre: '$',
            defaultValue: 0,
            titleText: 'Allowable time window violation: '
        });

        timeSlider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 50,
            max: 200,
            unitSuffix: '%',
            //unitPre: '$',
            defaultValue: 100,
            titleText: 'Max allowable time: '
        });

        capacitySlider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 50,
            max: 200,
            unitSuffix: '%',
            //unitPre: '$',
            defaultValue: 100,
            titleText: 'Max allowable capacity: '
        });

        speedSlider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 50,
            max: 150,
            unitSuffix: '%',
            //unitPre: '$',
            defaultValue: 100,
            titleText: 'Max allowable speed on road: '
        });

        sliderContainer.append(runLengthSlider.getContainer());
        sliderContainer.append(maxStopSlider.getContainer());
        sliderContainer.append(capacitySlider.getContainer());
        sliderContainer.append(timeSlider.getContainer());
        sliderContainer.append(speedSlider.getContainer());
        sliderContainer.append(timeWindowSlider.getContainer());
    }

    function initDefaultOptions() {
        options = {
            readonly: false,
            sliders: null,
            parameters: {
                maxCapacity: 100,
                maxTime: 100,
                maxSpeed: 100,
                maxTimeWindow: 100,
                runLength: 24,
                stopTime: 2,
                iterations: 100,
                lollipop: 0
            }
        };
    }

    function getContainer() {
        return container;
    }

    function setParameters(parameters) {
        capacitySlider.setSliderValue(parameters.maxCapacity);
        timeSlider.setSliderValue(parameters.maxTime);
        speedSlider.setSliderValue(parameters.maxSpeed);
        timeWindowSlider.setSliderValue(parameters.maxTimeWindow);
        runLengthSlider.setSliderValue(parameters.runLength);
        maxStopSlider.setSliderValue(parameters.stopTime);
        iterationsSlider.setSliderValue(parameters.iterations);
        lolliPopupSlider.setSliderValue(parameters.lollipop);
        lolliPopup2Slider.setSliderValue(parameters.lollipop2);
    }

    function getParameters() {
        var maxCapacity = capacitySlider.getSliderValue();
        var maxTime = timeSlider.getSliderValue();
        var maxSpeed = speedSlider.getSliderValue();
        var maxTimeWindow = timeWindowSlider.getSliderValue();
        var runLength = runLengthSlider.getSliderValue();
        var stopTime = maxStopSlider.getSliderValue();
        var iterations = iterationsSlider.getSliderValue();
        var lollipop = lolliPopupSlider.getSliderValue();
        var lollipop2 = lolliPopup2Slider.getSliderValue();

        var paraDomain = {
            maxCapacity: maxCapacity,
            maxTime: maxTime,
            maxSpeed: maxSpeed,
            maxTimeWindow: maxTimeWindow,
            runLength: runLength,
            stopTime: stopTime,
            iterations: iterations,
            lollipop: lollipop,
            lollipop2: lollipop2
        };

        return paraDomain;
    }

    return {
        getContainer: getContainer,
        setParameters: setParameters,
        getParameters: getParameters
    }
}


