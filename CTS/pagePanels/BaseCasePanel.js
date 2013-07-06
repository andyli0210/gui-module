IFL.CTS.BaseCasePanel = function(_options) {
    var options;
    
    var container;
    var confirmParaPanel;
    var schedulePanel;
    
    var solverParameterPanel;
    
    var eventHandler = new IFL.Util.EventHandler(['generate']);
    
    init();
    function init() {
        container = $('<div class="ui-layout-content ui-widget-content"></div>').css({
            padding: 5,
            width: '100%',
            height: '100%'
        });
        
        initParameterPanel();
        
        schedulePanel = new IFL.CTS.ScheduleDetailPanel();
        container.append(schedulePanel.getContainer());
        schedulePanel.getContainer().hide();
    }
    
    function initParameterPanel() {
        confirmParaPanel = $('<div/>').css({
            width: 800
        });
        
        confirmParaPanel.append('<h4>ADJUST GLOBAL ROUTE OPTIMISATION PARAMETERS</h4>');
        
        solverParameterPanel = new IFL.CTS.SolverParameterPanel();
        confirmParaPanel.append(solverParameterPanel.getContainer());
        
        var runCaseConfirmButton = $('<button>Run Optimisations</button>').button();
        runCaseConfirmButton.click(function() {
            eventHandler.notifyHandlers('generate');
        });
        
        runCaseConfirmButton.css({
            marginTop: '30px',
            'float': 'right',
            fontSize: '1em'
            
        })
        runCaseConfirmButton.appendTo(confirmParaPanel);
        
        confirmParaPanel.appendTo(container);
        //confirmParaPanel.hide();
        
//        capacitySlider = volumeSliders.capacitySlider;
//        timeSlider = timeSliders.timeSlider;
//        speedSlider = timeSliders.speedSlider;
//        timeWindowSlider = routeSliders.timeSlider;
    }
    
    function showRopSolution(ropSolution) {
        confirmParaPanel.hide();
        schedulePanel.getContainer().show();
        schedulePanel.displayScheduleSolution(ropSolution);
    }
    
    function getSliderValues() {
        var paraDomain = solverParameterPanel.getParameters();
        return paraDomain;
    }
    
    function setSliderValue(solverParameters) {
        solverParameterPanel.setParameters(solverParameters);
    }
    
    function getContainer() {
        return container;
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    return {
        getContainer: getContainer,
        getSliderValues: getSliderValues,
        setSliderValue: setSliderValue,
        registerHandler: registerHandler,
        showRopSolution: showRopSolution
    }
}

