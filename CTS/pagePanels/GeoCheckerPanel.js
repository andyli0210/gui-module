IFL.CTS.GeoCheckerPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    
    var routeGeoService;
    var totalField;
    var correctedField;
    var correctedSpan;
    var missingField;
    var missingSpan;
    
    var commitButton;
    
    var eventsHandler = new IFL.Util.EventHandler(['commit']);
    
    init();
    
    function initDefaultOptions() {
    }
    
    function init() {
        container = $('<div/>').css({
            width: '100%'
        });
        
        initGeoStatusContainer();
        initGeoServiceContainer();
    }
    
    function initGeoStatusContainer() {
        var geoStatusContainer = $('<div/>').css({
            position: 'relative',
            width: '100%',
            'font-size': '0.8em'
        }).appendTo(container);
        
        geoStatusContainer.append('<p>Correct customer locations by selecting an Address Match and moving that pin on the map.</p>');
        geoStatusContainer.append('<p>Continue to other data cleansing steps when satisfied with updates.</p>');
        
        var statusBar = jQuery('<div class="ui-accordion-header ui-state-default"></div>').css({
            'padding':'5px',
            width: 1280
        }).appendTo(container);
        
        totalField = $('<span/>');
        var totalSpan = $('<span></span>').append(totalField).append(' addresses have been imported').css({
            padding: '2px',
            margin: '5px'
        }).appendTo(statusBar);
        
        correctedField = $('<span/>');
        correctedSpan = $('<span></span>').append(correctedField).append(' addresses require correcting').css({
            background: 'red',
            color: 'wheat',
            padding: '2px',
            margin: '5px'
        }).appendTo(statusBar);
        
        missingField = $('<span/>');
        missingSpan = $('<span></span>').append(missingField).append(' addresses are missing').css({
            background: 'red',
            color: 'wheat',
            padding: '2px',
            margin: '5px'
        }).appendTo(statusBar);
        
        commitButton = $('<input type="button" value="Commit Geo Locations"/>').button();
        commitButton.css({
            "float": "right",
            bottom: 5
        }).appendTo(statusBar);
        
        var autoChooseMsg = "Do you want to commit geo locations, CTS system will auto choose the highest confident match for you if the location is in SELECT status";
        var unresolveMsg = "Can NOT commit geo location. There are UNRESOLVED locations (without matches)";
        
        commitButton.click(function() {
            var msg;
            if (parseInt(missingField.text())) {
                msg = unresolveMsg;
                IFL.Util.showInfoDialog("Commit Geo Locations", msg);
            } else {
                msg = autoChooseMsg;
                IFL.Util.showConfirmDialog("Commit Geo Locations", msg, function() {
                    eventsHandler.notifyHandlers('commit');
                })
            }
            
            
        });
    }
    
    function updateGeoStatus(geoStatus) {
        var total = geoStatus.numOfSelected + geoStatus.numOfResolved + geoStatus.numOfUnresolved;
        totalField.text(total);
        
        if (geoStatus.numOfSelected) {
            correctedField.text(geoStatus.numOfSelected);
            correctedSpan.show();
        } else {
            correctedSpan.hide();
        }
        
        if (geoStatus.numOfUnresolved) {
            missingField.text(geoStatus.numOfUnresolved);
            missingSpan.show();
        } else {
            missingField.text(geoStatus.numOfUnresolved);
            missingSpan.hide();
        }
        
    }
    
    function initGeoServiceContainer() {
        var geoServiceContainer = $('<div/>').css({
            position: 'relative',
            width: '1280px',
            height: 650
        }).appendTo(container);
        
        var gridContainer = $('<div id="grid01" style="bottom: 0px; height: 250px; left: 0px; width: 960px; position: absolute;"><table id="list"><tr><td/></tr></table><div id="pager"></div></div>');
        var sidePanel = $('<div id="sidePanel" style="right: 5px; width: 300px; bottom: 5px; top: 5px; position: absolute; overflow: auto;"></div>');
        var mapContainer = $('<div id="mapContainer" style="left:0; right: 310px; top: 0; bottom: 250px; position: absolute;"></div>');
        
        geoServiceContainer.append(gridContainer).append(sidePanel).append(mapContainer);
    }
    
    function initGeoRouteService() {
        if (routeGeoService) {
            //already initialized before, just reset
            routeGeoService.reset();
            return;
        }
        routeGeoService = new IFL.RouteGeo.RouteGeoService();
        
        routeGeoService.registerHandler('locationUpdated', function(geoStatus) {
            updateGeoStatus(geoStatus);
        });
    }
    
    function registerHandler(name, handler) {
        eventsHandler.registerHandler(name, handler);
    }
    
    function getContainer() {
        return container;
    }
    
    function refreshAfterCommit(geoStatus) {
        updateGeoStatus(geoStatus);
        routeGeoService.refreshAfterCommit();
    }
    
    return {
        getContainer: getContainer,
        initGeoRouteService: initGeoRouteService,
        updateGeoStatus: updateGeoStatus,
        registerHandler: registerHandler,
        refreshAfterCommit: refreshAfterCommit
    }
}