IFL.RouteGeo.RouteVisitsWidget = function() {
    var folderWidgetOptions;
    var visits;
    var curVisit;
    var visitBars;
    
    var eventHandler = new IFL.Util.EventHandler(['mouseover', 'mouseout', 'click']);
    
    var folderWidget;
    var visitsContainer;
    initOptions();
    init();
    
    function init() {
        folderWidget = new IFL.Widget.FolderWidget(folderWidgetOptions);
        visitsContainer = $('<div ui-widget ui-dialog ui-state-default></div>');
        folderWidget.setContent(visitsContainer);
    }
    
    function initOptions() {
        folderWidgetOptions = {
            title: 'Route Visits'
        }
    }
    
    function registerHandler(eventName, handler) {
        eventHandler.registerHandler(eventName, handler);
    }
    
    function getContainer() {
        return folderWidget.getContainer();
    }
    
    function setVisits(_visits, curLocation) {
        visitsContainer.empty();
        visits = _visits;
        curVisit = null;
        
        visitBars = [];
        
        for (var m in visits) {
            var visit = visits[m];
            var isCurVisit = (visit.location.id == curLocation.id);
            var visitBar = getVisitBar(visit);
            if (isCurVisit) {
                curVisit = visit;
                addSelectedStyle(visitBar);
            }
            
            visitBars.push(visitBar);
            visitsContainer.append(visitBar);
        }
    }
    
    function selectVisit(visit) {
        if (curVisit == visit) {
            return;
        }
        
        var matchBar = findVisitBarByDomain(visit);
        if (matchBar) {
            removeCurrentSelectedStyle();
            addSelectedStyle(matchBar);
            curVisit = visit;
        } 
    }
    
    function mouseHoverVisit(visit, isOver) {
        var visitBar = findVisitBarByDomain(visit);
        if (visitBar) {
            if (isOver) {
                visitBar.addClass('ui-state-hover');
            } else {
                visitBar.removeClass('ui-state-hover');
            }
        } 
    }
    
    function findVisitBarByDomain(visit) {
        for (var m in visitBars) {
            var visitBar = visitBars[m];
            
            if (visitBar.addressDomain == visit) {
                return visitBar;
            }
        }
        
        console.warn('Can not find visit bar by visit !');
        return null;
    }
    
    function getVisitBar(visit) {
        var visitBar = jQuery('<div class="ui-widget-content"><table width="100%"><tr><td width="16px"><span class="ui-icon ui-icon-check" style="display: none;"></span><td><td id="address"></td><td width="20px" id="confidence" title="location confidence"></td></tr></table></div>');
        
        // TODO -- What the location for a Visit !? critria, selected match ?
        var visitLocation = visit.location;
        
        visitBar.addressDomain = visitLocation;
        visitBar.hover(function(){
            visitBar.addClass('ui-state-hover');
            eventHandler.notifyHandlers('mouseover', visit);
        },function() {
            visitBar.removeClass('ui-state-hover');
            eventHandler.notifyHandlers('mouseout', visit);
        });
        
        visitBar.click(function() {
            //check if address match already being selected
            if (!curVisit == visit) {
                return;
            }
            
            curVisit = visit;
            
            removeCurrentSelectedStyle();
            addSelectedStyle(visitBar);
            
            eventHandler.notifyHandlers('click', curVisit);
        })
        
        //debugger;
        var number = visitLocation.number ? visitLocation.number.value : (visitLocation.index ? visitLocation.index : '');
        var type = visitLocation.type ? visitLocation.type.value : '';
            
        var street = number + ' ' + (visitLocation.street ? visitLocation.street.value : '') + ' ' + type;
        var suburb = visitLocation.locality ? visitLocation.locality.value : '';
        var state = visitLocation.state.value;
        var postcode = visitLocation.postcode.value;
        var confidence = visitLocation.confidence ? (visitLocation.confidence + '%'): '';
        
        var addressSummary = (street? street + ',' : '') + (suburb || '') + ' ' + (state || '') + ' ' +  (postcode || '');
        jQuery('#address', visitBar).html(addressSummary);
        jQuery('#confidence', visitBar).html(confidence);
        
        return visitBar;
    }
    
    function removeCurrentSelectedStyle() {
        //remove current selected style
        var bars = jQuery('.ui-state-highlight', visitsContainer);
        bars.removeClass('ui-state-highlight');
        var icons = jQuery('span', visitsContainer);
        icons.css('display', 'none');
    }
    
    function addSelectedStyle(visitBar, status) {
        //add select style
        visitBar.addClass('ui-state-highlight');
        var icon = jQuery('span', visitBar);
        if (icon.css('display') == 'none' && status != 'SELECT') {
            icon.css('display', 'inline-block');
        }
    }
    
    
    return {
        getContainer: getContainer,
        setVisits: setVisits,
        selectVisit: selectVisit,
        registerHandler: registerHandler,
        mouseHoverVisit: mouseHoverVisit
    }
}