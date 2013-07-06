IFL.Domain.GeoAddress = function(xml) {
    var id;
    var status;
    var address_chosen;
    var address_criteria;
    var address_matches = [];
    
    var runNum;
    var stopNum;
    var timeWindow;
    
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
        status = json.status;
        
        
        if (json.addressChosen) {
            address_chosen = new IFL.Domain.Address();
            address_chosen.initByJson(json.addressChosen);
        }
        
        
        address_criteria = new IFL.Domain.Address();
        //address_matches = new AddressDomain();
        
        address_criteria.initByJson(json.addressCriteria);
        
        
        var matches = json.addressMatches;
        for (var i=0; i<matches.length; i++) {
            var match = matches[i];
            var address = new IFL.Domain.Address(); 
            address.initByJson(match);
            address_matches.push(address);
        }
        
        runNum = json.runNum;
        stopNum = json.stopNum;
        timeWindow = json.timeWindow;
    }
    
    function getRunNum() {
        return runNum;
    }
    
    function setRunNum(_run) {
        runNum = _run;
    }
    
    function getStopNum() {
        return stopNum;
    }
    
    function setStopNum(_stop) {
        stopNum = _stop;
    }
    
    function setTimeWindow(_time) {
        timeWindow = _time;
    }
    
    function getTimeWindow() {
        return timeWindow;
    }
    
    function getStatus() {
        return status;
    }
    
    function setStatus(_status) {
        status = _status;
    }
    
    function getAddressChosen() {
        return address_chosen;
    }
    
    function setAddressChosen(_address) {
        address_chosen = _address;
    }
    
    function getAddressCriteria() {
        return address_criteria;
    }
    
    function setAddressCriteria(_address) {
        address_criteria = _address;
    }
    
    function getAddressMatches() {
        return address_matches;
    }
    
    function setAddressMatches(_addresses) {
        address_matches = _addresses;
    }
    
    return {
        id: id,
        getStatus: getStatus,
        setStatus: setStatus,
        getAddressChosen: getAddressChosen,
        setAddressChosen: setAddressChosen,
        getAddressCriteria: getAddressCriteria,
        setAddressCriteria: setAddressCriteria,
        getAddressMatches: getAddressMatches,
        setAddressMatches: setAddressMatches,
        getRunNum: getRunNum,
        setRunNum: setRunNum,
        getStopNum: getStopNum,
        setStopNum: setStopNum,
        getTimeWindow: getTimeWindow,
        setTimeWindow: setTimeWindow,
        initByJson: initByJson
    }
}