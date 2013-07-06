function EMSGeoCoder() {
    EMS.Services.communicationMode = "CrossDomain";
    var geocoder = new EMS.Services.Geocoder();
    
    
    function geocodeAddress(addressCriteria, handler) {
        //var addressCriteria = geoAddress.getAddressCriteria();
        
        var street = addressCriteria.getStreet() || null;
        var suburb = addressCriteria.getSuburb() || null;
        var state = addressCriteria.getState() || null;
        
        var query = {
            address: {
                street: street,
                suburb: suburb,
                state: state,
                postcode: ''
            }
        }
        geocoder.findGeocodedAddress(query, onGetGeocode(handler));
        //debugger;
        function onGetGeocode(handler) {
            return function(geoCoderesult) {
                //debugger;
                var addressDomains = [];
                for (var r in geoCoderesult.results) {
                    var result = geoCoderesult.results[r];
                    var addressDomain = getAddressDomain(result);
                    addressDomains.push(addressDomain);
                } 
            
                handler(addressDomains);
            }
        }
    }
    
    function getAddressDomain(geoResult) {
        //debugger;
        var resultAddress = geoResult.address;
        var accuracy = geoResult.accuracy;
        
        var postcode = resultAddress.postcode;
        var street = resultAddress.streetNumber + ' ' + resultAddress.street.fullName;
        var suburb = resultAddress.suburb;
        var state = resultAddress.state;
        
        var coordinates = resultAddress.coordinates;
        var lat = coordinates.latitude;
        var lon = coordinates.longitude;
        
        var location = new Location();
        location.lat = lat;
        location.lon = lon;
        location.postcode = postcode;
        
        
        var addressDomain = new AddressDomain();
        addressDomain.setLocation(location);
        addressDomain.setStreet(street);
        addressDomain.setSuburb(suburb);
        addressDomain.setState(state);
        addressDomain.setAccuracy(accuracy);
        
        return addressDomain;
    }
    
    return {
        geocodeAddress: geocodeAddress
    }
}