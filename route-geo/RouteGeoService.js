IFL.RouteGeo.RouteGeoService = function(_options) {
    var options = {
        sidePanel: 'sidePanel',
        geoGrid: 'geoGrid',
        geoMap: 'mapContainer'
    }
    
    $.extend(true, options, _options);
    var geoGrid;
    var geoMapService;
    var addressDetailsWidget;
    var addressMatchWidget;
    var addressCriteriaWidget;
    var addressChosenWidget;
    //var routeVisitsWidget;
    var sidePanel;
    var uploadPopup;
    
    var curLocation;
    var locationRoutes = {};
    
    var eventsHandler = new IFL.Util.EventHandler(['locationUpdated']);
    
    init();
    function init() {
        initGeoGrid();
        initGeoMap();
        initSidePanel();
        initHandlers();
        
    //initFileUploadPopup();
    }
    
    function initGeoGrid() {
        geoGrid = new IFL.RouteGeo.GeoGrid({
            containerId: 'list'
        });
    }
    
    function initGeoMap() {
        geoMapService = new IFL.RouteGeo.MapService();
    }
    
    function initSidePanel() {
        sidePanel = $('#' + options.sidePanel);
        
        if (!sidePanel) {
            console.error('Can not find side panel with id: ' + options.sidePanel);
            return;
        }
        
        initWidgets();
    }
    
    function initWidgets() {
        addressDetailsWidget = new IFL.RouteGeo.AddressDetailsWidget();
        sidePanel.append(addressDetailsWidget.getContainer());
        sidePanel.append('<br/>');
        
        addressCriteriaWidget = new IFL.RouteGeo.AddressCriteriaWidget();
        sidePanel.append(addressCriteriaWidget.getContainer());
        sidePanel.append('<br/>');
                    
        addressMatchWidget = new IFL.RouteGeo.AddressMatchWidget();
        sidePanel.append(addressMatchWidget.getContainer());
        sidePanel.append('<br/>');
        
    //routeVisitsWidget = new IFL.RouteGeo.RouteVisitsWidget();
    //sidePanel.append(routeVisitsWidget.getContainer());
    //sidePanel.append('<br/>');
        
    //addressChosenWidget = new IFL.RouteGeo.AddressChosenWidget();
    //sidePanel.append(addressChosenWidget.getContainer());
    }
    
    function initHandlers() {
        initGeoGridHandlers();
        initGeoMapHandlers();
        initWidgetsHandlers();
    }
    
    function initGeoGridHandlers() {
        geoGrid.registerHandler('clickRow', function(locationId) {
            getAddressDetails(locationId);
        })
    }
    
    function initGeoMapHandlers() {
        geoMapService.registerHandler('mouseoverMatch', function(match) {
            addressMatchWidget.mouseHoverMatch(match, true);
        });
        
        geoMapService.registerHandler('mouseoutMatch', function(match) {
            addressMatchWidget.mouseHoverMatch(match, false);
        });
        
        geoMapService.registerHandler('selectMatch', function(match) {
            updateSelectedMatch(match);
            updateLocationStatus('RESOLVED');
            updateLocationLatLon(match.geocode);
            
            updateServerGeoLocation();
        });
        
        geoMapService.registerHandler('newLocation', function(match, lonlat) {
            updateLocationLatLon(lonlat);
            
            updateServerGeoLocation();
        });
    }
    
    function initWidgetsHandlers() {
        addressMatchWidget.registerHandler('mouseover', function(match) {
            geoMapService.onMouseOverMatch(match);
        });
        
        addressMatchWidget.registerHandler('mouseout', function(match) {
            geoMapService.onMouseOutMatch(match);
        })
        
        addressMatchWidget.registerHandler('click', function(match) {
            updateSelectedMatch(match);
            updateLocationStatus('RESOLVED');
            updateLocationLatLon(match.geocode);
            
            updateServerGeoLocation();
        })
        
        addressDetailsWidget.registerHandler('displayRoute', function(dummy, options) {
            if (!curLocation.id || !curLocation.criteria.run) {
                alert('Location does Not have Id or Run number !')
                return;
            }
            
            var locationRtoue = locationRoutes[curLocation.criteria.run];

            if (locationRtoue) {
                geoMapService.displayLocationRoute(curLocation, options.isSelect, locationRtoue);
            //routeVisitsWidget.setVisits(locationRtoue.visits.visits, curLocation);
            } else {
                if (options.isSelect) {
                    getLocationRoute(curLocation);
                }
            }
            
        //            if (options.isSelect) {
        //                routeVisitsWidget.getContainer().show();
        //            } else {
        //                routeVisitsWidget.getContainer().hide();
        //            }
        })
        
        addressDetailsWidget.registerHandler('displayMatch', function(dummy, options) {
            geoMapService.displayLocationMatches(curLocation, options.isSelect);
            
            if (options.isSelect) {
                addressMatchWidget.getContainer().show();
            } else {
                addressMatchWidget.getContainer().hide();
            }
        })
        
        addressCriteriaWidget.registerHandler('Search', function() {
            singleGeocode(curLocation);
        })
        
        addressCriteriaWidget.registerHandler('Save', function(newSearchDomain) {
            var addressCriteria = curLocation.criteria;
            
            addressCriteria.address = newSearchDomain.street;
            addressCriteria.locality = {
                value: newSearchDomain.suburb
            }
            addressCriteria.state = {
                value: newSearchDomain.state
            }
            
            addressCriteria.postcode = {
                value: newSearchDomain.postcode
            }
            
            updateServerGeoLocation(curLocation);
        })
    }
    
    function refreshUI(geoAddress) {
        addressDetailsWidget.setAddress(geoAddress);
            
        addressCriteriaWidget.reset();
        
        if (geoAddress)
            addressCriteriaWidget.setAddress(geoAddress.criteria);
        //addressChosenWidget.setAddress()
                
        if (geoAddress && geoAddress.matches && geoAddress.matches.match) {
            var selectedAddressRef = geoAddress.selectedAddress ? geoAddress.selectedAddress.refMatch : null;
                
            var selectedLatLon;
            if (geoAddress.lat > -999 && geoAddress.lon > -999) {
                selectedLatLon = {
                    lat: geoAddress.lat,
                    lon: geoAddress.lon
                };
            }
                
            geoMapService.showMatches(geoAddress.matches.match, selectedAddressRef, geoAddress.status, selectedLatLon);
            addressMatchWidget.setMatches(geoAddress.matches.match, selectedAddressRef, geoAddress.status);
                
            if (geoAddress.status == 'RESOLVED') {
                    
            }
        } else {
            geoMapService.clear();
        }
            
        var status = geoAddress? geoAddress.status : null;
        refreshGeoPanel(status);
    }
    
    function refreshGeoPanel(status) {
        switch(status) {
            case 'SELECT': {
                addressMatchWidget.getContainer().show();
                //addressChosenWidget.getContainer().show();
                addressCriteriaWidget.getContainer().show();
                break;
            }
            case 'RESOLVED' : {
                addressMatchWidget.getContainer().show();
                //addressChosenWidget.getContainer().show();
                addressCriteriaWidget.getContainer().show();
                break;
            }
            case 'UNRESOLVED' : {
                addressMatchWidget.getContainer().hide();
                //addressChosenWidget.getContainer().hide();
                addressCriteriaWidget.getContainer().show();
                break;
            }
            default: {
                console.warn('Unknown Status: ' + status + " !!!!"); 
                addressMatchWidget.getContainer().hide();
                addressCriteriaWidget.getContainer().show();
            }
               
        }
    }
    
    function updateLocationStatus(status) {
        curLocation.status = status;
        
        //update UI
        geoGrid.updateStatus(status);
        addressDetailsWidget.updateStatus(status);
    }
    
    function updateLocationLatLon(lonlat) {
        curLocation.lon = lonlat.lon;
        curLocation.lat = lonlat.lat;
        
        //update UI
        addressDetailsWidget.updateLocation(lonlat);
        geoGrid.updateLatLon(lonlat);
    }
    
    function updateSelectedMatch(match) {
        if (!curLocation.selectedAddress || curLocation.selectedAddress.refMatch != match.id) {
            curLocation.selectedAddress = {};
            curLocation.selectedAddress.refMatch = match.id;
        }
        
        //update UI
        addressMatchWidget.selectMatch(match);
        //addressChosenWidget.setAddress(match);
        geoMapService.selectMatch(match);
    }
    
    function updateServerGeoLocation(location) {
        if (!location) {
            location = curLocation;
        }
        $.ajax({
            url: Config.geoServerUrl + '/updateLocation',
            type: 'PUT',
            contentType: 'application/json',
            dataType: 'json',
            data: JSON.stringify(location),
            success: function(response) {
                console.info('Updated address details for ' + location.id);
                
                // clear route polyline on map first
                geoMapService.clearRoute(location.criteria.run);
                //update location route
                var isShowRoute = addressDetailsWidget.isShowRoute();
                if (isShowRoute) {
                    getLocationRoute(location, true);
                } else {
                    locationRoutes[location.criteria.run] = null;
                }
                
                geoGrid.refresh();
                eventsHandler.notifyHandlers('locationUpdated', response.geoStatus);
            },
            error: function() {
                console.error('Failed to update address details for ' + location.id);
            }
        })
    }
    
    function initFileUploadPopup() {
        uploadPopup = new IFL.RouteGeo.FileUploadPopup({
            serverUrl: Config.geoServerUrl + '/upload'
        })
    }
    
    function getLocationRoute(location) {
        // get related route to the location, return list of visits
        console.info('trying to get location route for ' + location.id + "...");
        $.ajax({
            url: Config.geoServerUrl + '/locationRoute?locationId=' + location.id,
            type: 'GET',
            dataType: 'json',
            success: function(geoRoute) {
                console.info('Successfully get route for location: ' + location.id);
                locationRoutes[location.criteria.run] = geoRoute;
                geoMapService.showRoute(geoRoute, curLocation);
            //routeVisitsWidget.setVisits(geoRoute.visits.visits, curLocation);
            },
            error: function() {
                console.error('Failed to get route for location: ' + location.id);
            }
        })
    }
    
    function singleGeocode(location) {
        // Do the single geocode when click search button
        console.info('trying to geocode location: ' + location.id + "...");
        $.ajax({
            url: Config.geoServerUrl + '/singleGeocode',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(location),
            dataType: 'json',
            success: function(newLocation) {
                console.info('Successfully get geocode for location: ' + newLocation.id);
                curLocation = newLocation;
                
                updateServerGeoLocation(curLocation);
                refreshUI(curLocation);
            },
            error: function() {
                console.error('Failed to get geocode for location: ' + location.id);
                alert('Failed to get geocode for location: ' + location.id);
                refreshUI(curLocation);
            }
        })
    }
    
    function getAddressDetails(locationId) {
        console.info('trying to get address details for location ' + locationId);
        
        if (!locationId) {
            curLocation = null;
            refreshUI();
            return;
        }
        
        $.ajax({
            url: Config.geoServerUrl + '/details?id=' +locationId,
            dataType: 'json',
            success: function(result) {
                console.info('get address details for location: ' + locationId);
                curLocation = result;
                refreshUI(result)
            },
            error: function() {
                console.error('Failed to get address details for ' + locationId);
            }
        })
    } 
    
    function refreshAfterCommit() {
        geoGrid.refresh();
        
        if (curLocation) {
            getAddressDetails(curLocation.id);
        }
        else {
            getAddressDetails();
        }
    }
    
    function registerHandler(name, handler) {
        eventsHandler.registerHandler(name, handler);
    }
    
    function reset() {
        geoGrid.refresh();
        getAddressDetails();
    }
    
    return {
        registerHandler: registerHandler,
        refreshAfterCommit: refreshAfterCommit,
        reset: reset
    }
}


