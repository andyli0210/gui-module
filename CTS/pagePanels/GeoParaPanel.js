IFL.CTS.GeoParaPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    
    var lengthSlider;
    var stopSlider;
    var iterationsSlider;
    var sliderContainer;
    var loadingDiv;
    
    var checkButton;
    
    init();
    
    function initDefaultOptions() {
        options = {
            sliderHandler: null,
            buttonHandler: null
        }
    }
    
    function init() {
        container = $('<div/>').css({
            width: 600
        });
        
        container.append('<p>Run the Geo Code to check and customer locations.</p>');
        //container.append('<br/>');
        container.append('<p>Checking and correcting location data will feed back into database used to generate the <b>Input</b> Data currently displayed.</p>');
        //container.append('<br/>');
        container.append('<p>This will update after committing the changes you make location data.</p>');
        //container.append('<br/>');
        container.append('<br/>');        
        
        initSliders();
        initCheckButton();
        
        if (options.sliderHandler) {
            registerSliderHandler(options.sliderHandler);
        }
        
        if (options.buttonHandler) {
            registerButtonHandler(options.buttonHandler);
        }
        
        initLoadingDiv();
    }
    
    function initLoadingDiv() {
        loadingDiv = new IFL.CTS.LoadingDiv({
            message: {
                title: 'Checking Customer Geo Locations',
                content: 'Geo code corrections are running through the Geo Coder<br/>When completed you will be able to edit customer location data.'
            }
        });
        container.append(loadingDiv.getContainer());  
    }
    
    function initSliders() {
        sliderContainer = $('<div class="ui-widget-content" />').css({
            padding: 10
        }).appendTo(container);
        
        sliderContainer.append('<h2>Set your geo parameters</h2>');
        
        lengthSlider = new IFL.CTS.ParaSlider({
            min: 2,
            max: 48,
            unitSuffix: ' hours',
            //unitPre: '$',
            defaultValue: 24,
            titleText: 'Geo run length in hours: '
        });
        
        stopSlider = new IFL.CTS.ParaSlider({
            min:02,
            max: 24,
            unitSuffix: ' hours',
            //unitPre: '$',
            defaultValue: 12,
            titleText: 'Max time between stops in hours: '
        });
        
        sliderContainer.append(lengthSlider.getContainer());
        sliderContainer.append('<br/>');
        sliderContainer.append(stopSlider.getContainer());
        sliderContainer.append('<br/>');
        
        iterationsSlider = new IFL.CTS.ParaSlider({
            readonly: options.readonly,
            min: 0,
            max: 2000,
            //unitSuffix: '',
            //unitPre: '$',
            defaultValue: 100,
            titleText: 'Number of solver iterations: '
        });
        
        sliderContainer.append(iterationsSlider.getContainer());
        sliderContainer.append('<br/>');
    }
    
    function initCheckButton() {
        container.append('<br/>');
        checkButton = $('<button>Check</button>').button().appendTo(container);
        checkButton.css({
            fontSize: '1em'
        })
        
    }
    
    function setGeoParameters(paras) {
        lengthSlider.setSliderValue(paras.runLength);
        stopSlider.setSliderValue(paras.stopTime);
    }
    
    function getGeoParameters() {
        return {
            runLength: lengthSlider.getSliderValue(),
            stopTime: stopSlider.getSliderValue(),
            iterations: iterationsSlider.getSliderValue()
        };
    }
    
    function registerButtonHandler(handler) {
        checkButton.click(handler);
    }
    
    function registerSliderHandler(handler) {
        lengthSlider.registerHandler('change', handler);
        stopSlider.registerHandler('change', handler);
    }
    
    function displayLoading(isDisplay) {
        if (isDisplay) {
            sliderContainer.hide();
            checkButton.hide();
            loadingDiv.setPara({
                title: 'SOLVER PARAMETERS IN USE',
                content: 'Run Length: ' + lengthSlider.getSliderValue() + ' hours<br/>' + 'Time between stops: ' + stopSlider.getSliderValue() + ' hours'
            });
            loadingDiv.show();
        } else {
            sliderContainer.show();
            checkButton.show();
            loadingDiv.hide();
        }
    }
    
    function getSliders() {
        var sliders = {
            container: sliderContainer,
            lengthSlider: lengthSlider,
            stopSlider: stopSlider
        }
        
        return sliders;
    }
    
    function getContainer() {
        return container;
    }
    
    return {
        getContainer: getContainer,
        registerButtonHandler: registerButtonHandler,
        registerSliderHandler: registerSliderHandler,
        displayLoading: displayLoading,
        setGeoParameters: setGeoParameters,
        getGeoParameters: getGeoParameters,
        getSliders: getSliders
    }
}