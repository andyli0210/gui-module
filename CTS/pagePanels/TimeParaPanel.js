IFL.CTS.TimeParaPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    
    var timeSlider;
    var speedSlider;
    var checkButton;
    
    var sliderContainer;
    var loadingDiv;
    
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
        
        container.append('<p>Run The Checker to check and customer <b>time data</b></p>');
        //container.append('<br/>');
        container.append('<p>If there are errors:');
        container.append('<ol>')
        container.append('<li>Download the database</li>');
        container.append('<li>Correct the data errors in your master spreadsheet</li>');
        container.append('<li>Upload database again</li>');
        container.append('</ol>');
        container.append('</p>');
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
                title: 'Checking Time',
                content: 'Your time data is running through The Checker'
            }
        });
        container.append(loadingDiv.getContainer());  
    }
    
    function initSliders() {
        sliderContainer = $('<div class="ui-widget-content" />').css({
            padding: 10
        }).appendTo(container);
        
        sliderContainer.append('<h2>Set your time parameters</h2>');
        
        timeSlider = new IFL.CTS.ParaSlider({
            min: 50,
            max: 200,
            unitSuffix: '%',
            //unitPre: '$',
            defaultValue: 100,
            titleText: 'Max allowable time: '
        });
        
        speedSlider = new IFL.CTS.ParaSlider({
            min: 50,
            max: 150,
            unitSuffix: '%',
            //unitPre: '$',
            defaultValue: 100,
            titleText: 'Max allowable speed on road: '
        });
        
        sliderContainer.append(timeSlider.getContainer());
        sliderContainer.append('<br/>');
        sliderContainer.append(speedSlider.getContainer());
        sliderContainer.append('<br/>');
    }
    
    function initCheckButton() {
        container.append('<br/>');
        checkButton = $('<button>Check</button>').button().appendTo(container);
        checkButton.css({
            fontSize: '1em'
        })
        
    }
    
    function setTimeParameters(paras) {
        timeSlider.setSliderValue(paras.maxTime);
        speedSlider.setSliderValue(paras.maxSpeed);
    }
    
    function getTimeParameters() {
        return {
            maxTime: timeSlider.getSliderValue(),
            maxSpeed: speedSlider.getSliderValue()
        }
    }
    
    function displayLoading(isDisplay) {
        if (isDisplay) {
            sliderContainer.hide();
            checkButton.hide();
            loadingDiv.setPara({
                title: 'SOLVER PARAMETERS IN USE',
                content: 'Max allowable time: ' + timeSlider.getSliderValue() + '%<br/>' + 'Max allowable speed on road: ' + speedSlider.getSliderValue() + '%'
            });
            loadingDiv.show();
        } else {
            sliderContainer.show();
            checkButton.show();
            loadingDiv.hide();
        }
    }
    
    function registerButtonHandler(handler) {
        checkButton.click(handler);
    }
    
    function registerSliderHandler(handler) {
        timeSlider.registerHandler('change', handler);
        speedSlider.registerHandler('change', handler);
    }
    
    function getContainer() {
        return container;
    }
    
    function getSliders() {
        var sliders = {
            container: sliderContainer,
            timeSlider: timeSlider,
            speedSlider: speedSlider
        }
        
        return sliders;
    }
    
    return {
        getContainer: getContainer,
        registerButtonHandler: registerButtonHandler,
        registerSliderHandler: registerSliderHandler,
        setTimeParameters: setTimeParameters,
        getTimeParameters: getTimeParameters,
        displayLoading: displayLoading,
        getSliders: getSliders
    }
}