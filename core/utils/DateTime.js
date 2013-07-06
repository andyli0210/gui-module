// Do I really need a Date Object like this ?????
IFL.Util.DateTime = function(value, type, _format) {
    var dateFormat = 'dd/MM/yyyy HH:mm';
    var ISOString;
    var date = new Date();
    var time;
    var dateString;
    
    
    if (!value) {
        value = date;
    } 
    
    getDateTimeByType();
    
    function getDateTimeByType() {
        switch(type) {
            case 'date':
                getDateByType(type);
                break;
            case 'time':
                getDateByType(type);
                break;
            case 'iso':
                getDateByType('string');
                break;
            case 'string':
                getDateByType('string');
                break;
            default:
                autoGetDate();
        }
    }
    
    function autoGetDate() {
        type = typeof(value);
        getDateByType(type);
    }
    
    function getDateByType(type) {
        switch(type) {
            case 'object':
                valToDate();
                break;
            case 'number':
                valToTime();
                break;
            case 'string': {
                if (value.indexOf("T") == 10) {
                    valToISO();
                } else {
                    valToString();
                }
                break;
            }
        }
    }
    
    function valToDate() {
        if (value && value.getTime()) {
            date = value;
        } else {
            alert('invalid Date value for IFL DateTime');
        }
    }
    
    function valToString() {
        dateString = value;
        var format = _format || dateFormat;
        date = getDateFromFormat(dateString, format);
    }
    
    function valToISO() {
        ISOString = value;
        date = IFL.Util.ISOStringToDate(ISOString);
    }
    
    function valToTime() {
        time = value;
        date.setTime(time);
    }
    
    function getTime() {
        if (!time) {
            time = date.getTime();
        }
        return time;
    } 
    
    function getISOString() {
        if (!ISOString) {
            ISOString = IFL.Util.ISODateString(date);
        }
        
        return ISOString;
    }
    
    function getDate() {
        return date;
    }
    
    function getDateString() {
        if (!dateString) {
            dateString = formatDate(date, dateFormat);
        }
        
        return dateString;
    }
    
    return {
        getTime: getTime,
        getDate: getDate,
        getISOString: getISOString,
        getDateString: getDateString
    }
}


