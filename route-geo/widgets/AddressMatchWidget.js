IFL.RouteGeo.AddressMatchWidget = function() {
    var folderWidgetOptions;
    var matches;
    var selectedMatch;
    var matchBars;
    
    var eventHandler = new IFL.Util.EventHandler(['mouseover', 'mouseout', 'click']);
    
    var folderWidget;
    var matchesContainer;
    initOptions();
    init();
    
    function init() {
        folderWidget = new IFL.Widget.FolderWidget(folderWidgetOptions);
        matchesContainer = $('<div ui-widget ui-dialog ui-state-default></div>');
        folderWidget.setContent(matchesContainer);
    }
    
    function initOptions() {
        folderWidgetOptions = {
            title: 'Address Matches'
        }
    }
    
    function registerHandler(eventName, handler) {
        eventHandler.registerHandler(eventName, handler);
    }
    
    function getContainer() {
        return folderWidget.getContainer();
    }
    
    function setMatches(_matches, selectedAddress, status) {
        matchesContainer.empty();
        matches = _matches;
        selectedMatch = null;
        
        matchBars = [];
        
        var selectedMatchRef = selectedAddress;
        for (var m in matches) {
            var match = matches[m];
            var isSelected = (match.id && match.id == selectedMatchRef);
            var matchBar = getAddressMatchBar(match);
            if (isSelected) {
                selectedMatch = match;
                addSelectedStyle(matchBar, status);
            }
            
            matchBars.push(matchBar);
            matchesContainer.append(matchBar);
        }
    }
    
    function selectMatch(match) {
        if (selectedMatch == match) {
            return;
        }
        
        var matchBar = findMatchBarByDomain(match);
        if (matchBar) {
            removeCurrentSelectedStyle();
            addSelectedStyle(matchBar);
            selectedMatch = match;
        } 
    }
    
    function mouseHoverMatch(match, isOver) {
        var matchBar = findMatchBarByDomain(match);
        if (matchBar) {
            if (isOver) {
                matchBar.addClass('ui-state-hover');
            } else {
                matchBar.removeClass('ui-state-hover');
            }
        } 
    }
    
    function findMatchBarByDomain(match) {
        for (var m in matchBars) {
            var matchBar = matchBars[m];
            
            if (matchBar.addressDomain == match) {
                return matchBar;
            }
        }
        
        console.warn('Can not find address bar by match !');
        return null;
    }
    
    function getAddressMatchBar(addressMatch) {
        var addressMatchBar = jQuery('<div class="ui-widget-content"><table width="100%"><tr><td width="16px"><span class="ui-icon ui-icon-check" style="display: none;"></span><td><td id="address"></td><td width="20px" id="confidence" title="location confidence"></td></tr></table></div>');
        
        addressMatchBar.addressDomain = addressMatch;
        addressMatchBar.hover(function(){
            addressMatchBar.addClass('ui-state-hover');
            eventHandler.notifyHandlers('mouseover', addressMatch);
        },function() {
            addressMatchBar.removeClass('ui-state-hover');
            eventHandler.notifyHandlers('mouseout', addressMatch);
        });
        
        addressMatchBar.click(function() {
            //check if address match already being selected
            if (!selectedMatch == addressMatch) {
                return;
            }
            
            selectedMatch = addressMatch;
            
            removeCurrentSelectedStyle();
            addSelectedStyle(addressMatchBar);
            
            eventHandler.notifyHandlers('click', selectedMatch);
        })
        
        //debugger;
        var number = addressMatch.number ? addressMatch.number.value : (addressMatch.index ? addressMatch.index : '');
        var type = addressMatch.type ? addressMatch.type.value : '';
            
        var street = number + ' ' + (addressMatch.street ? addressMatch.street.value : '') + ' ' + type;
        var suburb = addressMatch.locality ? addressMatch.locality.value : '';
        var state = addressMatch.state.value;
        var postcode = addressMatch.postcode.value;
        
        var confidence = '';
        var title = '';
        if (addressMatch.confidence || addressMatch.confidence == 0) {
            if (addressMatch.confidence > -999) {
                confidence = addressMatch.confidence.toFixed(2) + '%';
                title = 'Location match confidence';
            } else {
                //User provided
                confidence = 'P'
                title = 'Location lat/lon & address Provided by user';
            }
         }
         
        var addressSummary = (street? street + ',' : '') + (suburb || '') + ' ' + (state || '') + ' ' +  (postcode || '');
        jQuery('#address', addressMatchBar).html(addressSummary);
        jQuery('#confidence', addressMatchBar).html(confidence);
        
        jQuery('#confidence', addressMatchBar).attr('title', title);
        
        return addressMatchBar;
    }
    
    function removeCurrentSelectedStyle() {
        //remove current selected style
        var bars = jQuery('.ui-state-highlight', matchesContainer);
        bars.removeClass('ui-state-highlight');
        var icons = jQuery('span', matchesContainer);
        icons.css('display', 'none');
    }
    
    function addSelectedStyle(addressMatchBar, status) {
        //add select style
        addressMatchBar.addClass('ui-state-highlight');
        var icon = jQuery('span', addressMatchBar);
        if (icon.css('display') == 'none' && status != 'SELECT') {
            icon.css('display', 'inline-block');
        }
    }
    
    
    return {
        getContainer: getContainer,
        setMatches: setMatches,
        selectMatch: selectMatch,
        registerHandler: registerHandler,
        mouseHoverMatch: mouseHoverMatch
    }
}