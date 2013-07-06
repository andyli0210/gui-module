IFL.CTS.VolumeParaPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var capacitySlider;
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
        
        container.append('<p>Run The Checker to check and customer <b>product volume data</b></p>');
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
                title: 'Checking Product Volume',
                content: 'Your product volume data is running through The Checker'
            },
            parameter: {
                title: 'SOLVER PARAMETERS IN USE',
                content: 'Max allowable capacity: ' + capacitySlider.getSliderValue() + '%'
            }
        });
        container.append(loadingDiv.getContainer());  
    }
    
    function initSliders() {
        sliderContainer = $('<div class="ui-widget-content" />').css({
            padding: 10
        }).appendTo(container);
        
        sliderContainer.append('<h2>Set your vehicle capacity parameters</h2>');
        
        capacitySlider = new IFL.CTS.ParaSlider({
            min: 50,
            max: 200,
            unitSuffix: '%',
            //unitPre: '$',
            defaultValue: 100,
            titleText: 'Max allowable capacity: '
        });
        
        sliderContainer.append(capacitySlider.getContainer());
        sliderContainer.append('<br/>');
    }
    
    function initCheckButton() {
        container.append('<br/>');
        checkButton = $('<button>Check</button>').button().appendTo(container);
        checkButton.css({
            fontSize: '1em'
        })
        
    }
    
    function setVolumeParameters(paras) {
        capacitySlider.setSliderValue(paras.maxCapacity);
    }
    
    function getVolumeParameters() {
        return {
            maxCapacity: capacitySlider.getSliderValue()
        }
    }
    
    function displayLoading(isDisplay) {
        if (isDisplay) {
            sliderContainer.hide();
            checkButton.hide();
            
            loadingDiv.setPara({
                title: 'SOLVER PARAMETERS IN USE',
                content: 'Max allowable capacity: ' + capacitySlider.getSliderValue() + '%'
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
        capacitySlider.registerHandler('change', handler);
    }
    
    function getContainer() {
        return container;
    }
    
    function getSliders() {
        var sliders = {
            container: sliderContainer,
            capacitySlider: capacitySlider
        }
        
        return sliders;
    }
    
    return {
        getContainer: getContainer,
        registerButtonHandler: registerButtonHandler,
        registerSliderHandler: registerSliderHandler,
        setVolumeParameters: setVolumeParameters,
        getVolumeParameters: getVolumeParameters,
        displayLoading: displayLoading,
        getSliders: getSliders
    }
}