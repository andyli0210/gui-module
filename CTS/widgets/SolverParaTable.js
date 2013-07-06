IFL.CTS.SolverParaTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var paraDomain;
    var container;
    
    var runLenField = $('<span/>');
    var maxTimeStopField= $('<span/>');
    var maxCapacityField= $('<span/>');
    var maxTimeField= $('<span/>');
    var maxSpeedField= $('<span/>');
    var maxTimeWindowField= $('<span/>');
    
    init();
    
    function init() {
        container = $('<div/>');
        initTitleBar();
        initParameters()
    }
    
    function initTitleBar() {
        var titleBar = $('<h4>Solver Parameters in use:</h4>');
        titleBar.appendTo(container);
    }
    
    function initParameters() {
        paraDomain = {
            runLength: 24,
            stopTime: 2,
            maxCapacity: 100,
            maxTime: 100,
            maxSpeed: 100,
            maxTimeWindow: 100
        }
        
        initRunAndTimeCapacity();
        initVehicleCapacity();
        initTime();
        initWindow();
        
        refresh(paraDomain);
    }
    
    function initRunAndTimeCapacity() {
        container.append('<p>');
        container.append('<span style="font-weight: bold; font-size: 1em">RUN and TIME CAPACITY</span> [using geo data]');
        container.append('<div>');
        container.append('Run Length: ').append(runLenField).append(' hours');
        container.append('</div>');
        container.append('<div>');
        container.append('Max time between stops: ').append(maxTimeStopField).append(' hours');
        container.append('</div>');
        container.append('</p>');
    }
    
    function initVehicleCapacity() {
        container.append('<p>');
        container.append('<div><span style="font-weight: bold; font-size: 1em">VECHICLE CAPACITY</span> [using product volume data]</div>');
        container.append('<div>');
        container.append('Max allowable capacity: ').append(maxCapacityField).append('%');
        container.append('</div>');
        container.append('</p>');
    }
    
    function initTime() {
        container.append('<p>');
        container.append('<div><span style="font-weight: bold; font-size: 1em">TIME</span> [using time data]</div>');
        container.append('<div>');
        container.append('Max allowable time: ').append(maxTimeField).append('%');
        container.append('</div>');
        container.append('<div>');
        container.append('Max allowable speed on road: ').append(maxSpeedField).append('%');
        container.append('</div>');
        container.append('</p>');
    }
    
    function initWindow() {
        container.append('<p>');
        container.append('<div><span style="font-weight: bold; font-size: 1em">CUSTOMER TIME WINDOWS</span> [using route details data]</div>');
        container.append('<div>');
        container.append('Max allowable time window violation: ').append(maxTimeWindowField).append(' hours');
        container.append('</div>');
        container.append('</p>');
    }
    
    function initDefaultOptions() {
    }
    
    function getContainer() {
        return container;
    }
    
    function clear() {
        container.empty();
        init();
    }
    
    function refresh(_dataDomain) {
        $.extend(true, paraDomain, _dataDomain);
        
        runLenField.text(paraDomain.runLength);
        maxTimeStopField.text(paraDomain.stopTime);
        maxCapacityField.text(paraDomain.maxCapacity);
        maxTimeField.text(paraDomain.maxTime);
        maxSpeedField.text(paraDomain.maxSpeed);
        maxTimeWindowField.text(paraDomain.maxTimeWindow);
    }
    
    return {
        getContainer: getContainer,
        refresh: refresh
    }
}