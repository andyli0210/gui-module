IFL.Domain.Address = function(xml) {
    var id;
    var location;
    var notes;
    var street;
    var suburb;
    var state;
    var country;
    var accuracy;
    
    if (xml) {
        initByXml(xml);
    }
    
    function initByXml(xml) {
        
    }
    
    function initByJson(json) {
        if (!json) {
            return;
        }
        //debugger;
        id = json.id;
        location = json.location;
        notes = json.notes;
        street = json.street;
        suburb = json.suburb;
        state = json.state;
        country = json.country;
        accuracy = json.accuracy;
    }
    
    function getLocation() {
        return location;
    }
    
    function setLocation(loc) {
        location = loc;
    }
    
    function setNotes(_notes) {
        notes = _notes;
    }
    
    function getNotes() {
        return notes;
    }
    
    function getStreet() {
        return street;
    }
    
    function setStreet(_street) {
        street = _street;
    }
    
    function getSuburb() {
        return suburb;
    }
    
    function setSuburb(_suburb) {
        suburb = _suburb;
    }
    
    function getState() {
        return state;
    }
    
    function setState(_state) {
        state = _state;
    }
    
    function getCountry() {
        return country;
    }
    
    function setCountry(_country) {
        country = _country;
    }
    
    function setAccuracy(_accuracy) {
        accuracy = _accuracy;
    }
    
    function getAccuracy() {
        return accuracy;
    }
    
    return {
        id: id,
        getLocation: getLocation,
        setLocation: setLocation,
        getNotes: getNotes,
        setNotes: setNotes,
        getStreet: getStreet,
        setStreet: setStreet,
        getSuburb: getSuburb,
        setSuburb: setSuburb,
        getState: getState,
        setState: setState,
        getCountry: getCountry,
        setCountry: setCountry,
        initByJson: initByJson,
        getAccuracy: getAccuracy,
        setAccuracy: setAccuracy
    }
}