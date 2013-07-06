function GoogleGeoCoder() {
    var geocoder = new google.maps.Geocoder();
    
    function geocodeAddressString(addressSummary, handler) {
        geocoder.geocode( {
            'address': addressSummary
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                //debugger;
                onGetGeoresult(results);
                
            } else {
                alert("Google Geocode was not successful for the following reason: " + status);
                handler(null);
            }
        });
        
        function onGetGeoresult(geoCoderesults) {
            console.info('result address size: ' + geoCoderesults.length);
            var addressDomains = [];
            for (var i in geoCoderesults) {
                var result = geoCoderesults[i];
                var addressDomain = getAddressDomain(result);
                addressDomains.push(addressDomain);
            }
                
            handler(addressDomains);
        }
    }
    function geocodeAddress(addressCriteria, handler) {
        var addressSummary = addressCriteria.getAddressSummary();
        console.info('search address: ' + addressSummary);
        geocodeAddressString(addressSummary, handler);
    }
    
    function getAddressDomain(geoResult) {
        var address = new AddressDomain();
        for (var c in geoResult.address_components) {
            var component = geoResult.address_components[c];
            
            var value = component.short_name;
            var type = component.types[0];
            
            var streetNum;
            switch (type) {
                case 'street_number': streetNum = value;break;
                case 'route': address.setStreet( (streetNum ? streetNum : '') + ' ' + value);break;
                case 'locality': address.setSuburb(value);break;
                case 'administrative_area_level_1': address.setState(value);break;
                case 'country': address.setCountry(value);break;
                case 'postal_code': address.setPostcode(value);break;
            }
        }
        
        var latlngLocation = geoResult.geometry.location;
        var lat = latlngLocation.lat();
        var lon = latlngLocation.lng();
        var location = new Location();
        location.lat = lat;
        location.lon = lon;
        //location.postcode = postcode;
        address.setLocation(location);
        //debugger;
        return address;
    }
    
    return {
        geocodeAddress: geocodeAddress,
        geocodeAddressString: geocodeAddressString
    }
    
}


