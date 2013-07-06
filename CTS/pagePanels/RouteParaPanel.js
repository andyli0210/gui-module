IFL.CTS.RouteParaPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var timeSlider;
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
        
        container.append('<p>Run The Checker to check and customer <b>route detail data</b></p>');
        //container.append('<br/>');
        container.append('<p>If there are errors:');
        container.append('<ul style="list-style-type:decimal">')
        container.append('<li>Download the database</li>');
        container.append('<li>Correct the data errors in your master spreadsheet</li>');
        container.append('<li>Upload database again</li>');
        container.append('</ul>');
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
                title: 'Checking route detail',
                content: 'Your route detail data is running through The Checker'
            }
        });
        container.append(loadingDiv.getContainer());  
    }
    
    function initSliders() {
        sliderContainer = $('<div class="ui-widget-content" />').css({
            padding: 10
        }).appendTo(container);
        
        sliderContainer.append('<h2>Set your route detail parameters</h2>');
        
        timeSlider = new IFL.CTS.ParaSlider({
            min: 0,
            max: 24,
            unitSuffix: ' hour',
            //unitPre: '$',
            defaultValue: 0,
            titleText: 'Allowable time window violation: '
        });
        
        sliderContainer.append(timeSlider.getContainer());
        sliderContainer.append('<br/>');
    }
    
    function initCheckButton() {
        container.append('<br/>');
        checkButton = $('<button>Check</button>').button().appendTo(container);
        checkButton.css({
            fontSize: '1em'
        })
        
    }
    
    function setRouteParameters(paras) {
        timeSlider.setSliderValue(paras.maxTimeWindow);
    }
    
    function getRouteParameters() {
        return {
            maxTimeWindow : timeSlider.getSliderValue()
        }
    }
    
    function displayLoading(isDisplay) {
        if (isDisplay) {
            sliderContainer.hide();
            checkButton.hide();
            
            loadingDiv.setPara({
                title: 'SOLVER PARAMETERS IN USE',
                content: 'Allowable time window violation: ' + timeSlider.getSliderValue() + '%'
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
    }
    
    function getContainer() {
        return container;
    }
    
    function getSliders() {
        var sliders = {
            container: sliderContainer,
            timeSlider: timeSlider
        }
        
        return sliders;
    }
    
    return {
        getContainer: getContainer,
        registerButtonHandler: registerButtonHandler,
        registerSliderHandler: registerSliderHandler,
        displayLoading: displayLoading,
        getSliders: getSliders,
        setRouteParameters: setRouteParameters,
        getRouteParameters: getRouteParameters
        
    }
}