IFL.Util = {
    showPopup: function(content, title, position, size, closeHandler) {
                
        content.dialog({
            close: function(event, ui) {
                jQuery(this).dialog('destroy');
                jQuery(this).remove();
                
                if (closeHandler)
                    closeHandler.onPopupClose();
            },
            title: title || '',
            position: position,
            width: size[0] || 200,
            height: size[1] || 200
        });
    },
            
    closePopup: function(content) {
        content.dialog('destroy');
        content.remove();
    },
    
    showWindowPopup: function(serviceId) {
        var content = $('<div></div>').transform({
            xml: scheduleXml_url, 
            xsl: Config.xsltPath + "/time_window.xsl", 
            xslParams: {
                serviceId: serviceId
            }
        })
                
        this.showPopup(content, 'Time Windows for service: ' + serviceId, 'center', [480,150]);
                
    },
    
    showLoadPopup: function(serviceId) {
        var content = $('<div></div>').transform({
            xml: scheduleXml_url, 
            xsl: Config.xsltPath + "/service_loads.xsl", 
            xslParams: {
                serviceId: serviceId
            }
        })
                
        this.showPopup(content, 'Loads for service: ' + serviceId, 'center',[250,100]);     
    },
    
    showInfoDialog: function(title, message) {
        var div_confirm = jQuery('<div></div>').addClass("ui-widget-default");
            
        div_confirm.html('<p>' + message + '<br></p>');
            
        function point_confirm_btn_cancel(){
            return function(event){
                div_confirm.dialog("close");
            }
        }
        
        div_confirm.dialog
        ({
            autoOpen: true,
            modal: true,
            resizable: false,
            title: title,
            //position:'top',
            close: function(event, ui)
            {
                jQuery(this).dialog( 'destroy' );
                div_confirm.remove();
            },
            buttons: {
                'Close':point_confirm_btn_cancel()
            }
        });
    },
    
    showErrorDialog: function(title, message) {
        var div_confirm = $('<div/>').addClass('ui-widget');
        var content_div = $('<div/>').addClass('ui-state-active ui-corner-all').css('padding', '0.7em');
        
        var iconSpan = $('<span/>').addClass('ui-icon ui-icon-alert').css({
            'float': 'left',
            marginRight: '.3em'
        });
        
        var msgDiv = $('<p/>').append('<strong>Alert: </strong>').append(message);
        content_div.append(iconSpan).append(msgDiv).appendTo(div_confirm);
            
        function point_confirm_btn_cancel(){
            return function(event){
                div_confirm.dialog("close");
            }
        }
        
        div_confirm.dialog
        ({
            autoOpen: true,
            modal: true,
            resizable: false,
            title: title,
            //position:'top',
            close: function(event, ui)
            {
                jQuery(this).dialog( 'destroy' );
                div_confirm.remove();
            },
            buttons: {
                'Close':point_confirm_btn_cancel()
            }
        });
    },
    
    showConfirmDialog: function(title, message, callback)
    {
        //var div_confirm = jQuery('<div></div>').addClass("ui-widget-default");
        
        var div_confirm = $('<div/>').addClass('ui-widget');
        var content_div = $('<div/>').addClass('ui-state-highlight ui-corner-all').css('padding', '0.7em');
        
        var iconSpan = $('<span/>').addClass('ui-icon ui-icon-alert').css({
            'float': 'left',
            marginRight: '.3em'
        });
        
        var msgDiv = $('<p/>').append('<strong>Alert:</strong>').append(message);
        content_div.append(iconSpan).append(msgDiv).appendTo(div_confirm);
            
        content_div.append('This action cannot be undone');
            
        function point_confirm_btn_ok(){
            return function(){
                div_confirm.dialog("close");
                callback();
            }
        }
        function point_confirm_btn_cancel(){
            return function(event){
                div_confirm.dialog("close");
            }
        }
        div_confirm.dialog
        ({
            autoOpen: true,
            modal: true,
            resizable: false,
            title: title,
            //position:'top',
            close: function(event, ui)
            {
                jQuery(this).dialog( 'destroy' );
                div_confirm.remove();
            },
            buttons: {
                'Cancel':point_confirm_btn_cancel(),
                'Confirm':point_confirm_btn_ok()
            }
        });
    },
    
    showChooseDialog: function(title, message, callback)
    {
        var div_confirm = jQuery('<div></div>').addClass("ui-widget-default");
            
        div_confirm.html('<p>' + message + '<br><br>' + 'This action cannot be undone.</p>');
            
        function point_confirm_btn_ok(){
            return function(){
                div_confirm.dialog("close");
                callback(true);
            }
        }
        function point_confirm_btn_cancel(){
            return function(event){
                div_confirm.dialog("close");
                callback(false);
            }
        }
        div_confirm.dialog
        ({
            autoOpen: true,
            modal: true,
            resizable: false,
            title: title,
            //position:'top',
            close: function(event, ui)
            {
                jQuery(this).dialog( 'destroy' );
                div_confirm.remove();
            },
            buttons: {
                'No':point_confirm_btn_cancel(),
                'Yes':point_confirm_btn_ok()
            }
        });
    },
    
    initLoading: function() {
        jQuery.fn.center = function () {
            this.css("position","absolute");
            this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
            this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
            return this;
        }
        
        this.loadingDiv = jQuery('<div id="loadingPanel" style="position: absolute; width: 350px; height:350px;z-Index:2; display: none;"><img src="' + Config.imagePath + '/loading_big2.gif"/></div>');

        var top = ($(window).height() - 350) / 2;
        var left = ($(window).width() - 350) / 2;
        this.loadingDiv.css({
            top: top,
            left: left
        });
    
        this.loadingDiv.appendTo(document.body);
    },
    
    displayLoading: function(isShow) {
        if (!this.loadingDiv) {
            this.initLoading();
        }
    
        if (isShow) {
            this.loadingDiv.show();
        }
        else {
            this.loadingDiv.hide();
        }
    },
    
    //======================== From old IFL Util.js ============================================================
    PathDecode: function(encoded) {
        var len = encoded.length;
        var index = 0;
        var lat = 0;
        var lng = 0;
            
        var pathPoints = [];

        while (index < len) {
            var b;
            var shift = 0;
            var result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += dlat;

            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            var dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += dlng;
            //cb(lat * 1e-5, lng * 1e-5);
                
            var point = {
                lon: lng * 1e-5,
                lat: lat * 1e-5
            };
                
            pathPoints.push(point);
        }
            
        return pathPoints;
    },
    PathEncode: function(virtexes)
    {
        // Encode a signed number in the encode format.
        function encodeSignedNumber(num)
        {
            var sgn_num = num << 1;
            if (num < 0)
                sgn_num = ~(sgn_num);
            return(encodeNumber(sgn_num));
        }
        // Encode an unsigned number in the encode format.
        function encodeNumber(num)
        {
            var encodeString = "";

            while (num >= 0x20)
            {
                encodeString += (String.fromCharCode((0x20 | (num & 0x1f)) + 63));
                num >>= 5;
            }

            encodeString += (String.fromCharCode(num + 63));
            return encodeString;
        }

        var i = 0;

        var plat = 0;
        var plng = 0;

        var encoded_points = "";
        //var encoded_levels = "";

        for(i = 0; i < virtexes.length; ++i)
        {
            var lat = virtexes[i].pos.lat();
            var lng = virtexes[i].pos.lng();
            //var level = point.Level;

            var late5 = Math.round(lat * 1e5);
            var lnge5 = Math.round(lng * 1e5);

            dlat = late5 - plat;
            dlng = lnge5 - plng;

            plat = late5;
            plng = lnge5;

            encoded_points += encodeSignedNumber(dlat) + encodeSignedNumber(dlng);
            //encoded_levels += encodeNumber(level);
        }
        return encoded_points;
    },
    SetMouseWheelHandler: function(cb) {
        function fn_wheel(cb) {
            return function (event) {
                var delta = 0;
                if (!event) event = window.event;
                if (event.wheelDelta) {
                    delta = event.wheelDelta/120;
                    if (window.opera) delta = -delta;
                } else if (event.detail) {
                    delta = -event.detail/3;
                }
                if (delta && event.xy)
                    cb(event.xy.x, event.xy.y, delta);
                if (event.preventDefault)
                    event.preventDefault();
                event.returnValue = false;
            }
        }

        /* Initialization code. */
        if (window.addEventListener)
            window.addEventListener('DOMMouseScroll', fn_wheel(cb), false);
        window.onmousewheel = document.onmousewheel = fn_wheel(cb);
    },
    GetQueryString: function(token) 
    {
        hu = window.location.search.substring(1);
        gy = hu.split("&");
        for (i=0;i<gy.length;i++) 
        {
            ft = gy[i].split("=");
            if (ft[0] == token) 
                return ft[1];
        }
    },
    encode64 : function(input)
    {
        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=';
        var output = '';
        var chr1, chr2, chr3 = '';
        var enc1, enc2, enc3, enc4 = '';
        var i = 0;

        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                keyStr.charAt(enc1) +
                keyStr.charAt(enc2) +
                keyStr.charAt(enc3) +
                keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = '';
            enc1 = enc2 = enc3 = enc4 = '';
        } while (i < input.length);

        return output;
    },
    trim: function(stringToTrim) {
        return stringToTrim.replace(/^\s+|\s+$/g,"");
    },
    ltrim: function(stringToTrim) {
        return stringToTrim.replace(/^\s+/,"");
    },
    rtrim: function(stringToTrim) {
        return stringToTrim.replace(/\s+$/,"");
    },
    CSVToArray: function( strData, strDelimiter ){
        if (!strData || strData.trim().length == 0) {
            return [];
        }
    
        // Check to see if the delimiter is defined. If not,
        // then default to comma.
        strDelimiter = (strDelimiter || ",");
 
        // Create a regular expression to parse the CSV values.
        var objPattern = new RegExp(
        (
        // Delimiters.
        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
 
            // Quoted fields.
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
 
            // Standard fields.
        "([^\"\\" + strDelimiter + "\\r\\n]*))"
    ),
        "gi"
    );
 
 
        // Create an array to hold our data. Give the array
        // a default empty first row.
        var arrData = [[]];
 
        // Create an array to hold our individual pattern
        // matching groups.
        var arrMatches = null;
 
 
        // Keep looping over the regular expression matches
        // until we can no longer find a match.
        while (arrMatches = objPattern.exec( strData )){
 
            // Get the delimiter that was found.
            var strMatchedDelimiter = arrMatches[ 1 ];
 
            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            if (
            strMatchedDelimiter.length &&
                (strMatchedDelimiter != strDelimiter)
        ){
 
                // Since we have reached a new row of data,
                // add an empty row to our data array.
                arrData.push( [] );
 
            }
 
 
            // Now that we have our delimiter out of the way,
            // let's check to see which kind of value we
            // captured (quoted or unquoted).
            if (arrMatches[ 2 ]){
 
                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
                var strMatchedValue = arrMatches[ 2 ].replace(
                new RegExp( "\"\"", "g" ),
                "\""
            );
 
            } else {
 
                // We found a non-quoted value.
                var strMatchedValue = arrMatches[ 3 ];
 
            }
 
 
            // Now that we have our value string, let's add
            // it to the data array.
            arrData[ arrData.length - 1 ].push( strMatchedValue );
        }
 
        // Return the parsed data.
        return( arrData );
    },
    
    getTimeZone: function() {
        if (!this.timeZone) {
            var offset = new Date().getTimezoneOffset(); 
            this.timeZone =  -offset/60;
        }
        
        return this.timeZone;
        
    },
    
    ISODateString: function(d) {
        function pad(n){
            return (n < 10) ? '0'+n : n
        }
        
        return d.getFullYear()+'-'
            + pad(d.getMonth()+1)+'-'
            + pad(d.getDate())+'T'
            + pad(d.getHours())+':'
            + pad(d.getMinutes())+':'
            + '00.000+' + this.getTimeZone();
    },
    
    ISOStringToDate: function (string) {
        var regexp = "([0-9]{4})(-([0-9]{2})(-([0-9]{2})" +
            "(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?" +
            "(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?";
        var d = string.match(new RegExp(regexp));

        var offset = 0;
        var date = new Date(d[1], 0, 1);

        if (d[3]) {
            date.setMonth(d[3] - 1);
        }
        if (d[5]) {
            date.setDate(d[5]);
        }
        if (d[7]) {
            date.setHours(d[7]);
        }
        if (d[8]) {
            date.setMinutes(d[8]);
        }
        if (d[10]) {
            date.setSeconds(d[10]);
        }
        if (d[12]) {
            date.setMilliseconds(Number("0." + d[12]) * 1000);
        }
        if (d[14]) {
            offset = (Number(d[16]) * 60) + Number(d[17]);
            offset *= ((d[15] == '-') ? 1 : -1);
        }

        //offset -= date.getTimezoneOffset();
        offset = 0;
        var time = (Number(date) + (offset * 60 * 1000));
        date.setTime(Number(time));
        
        return date;
    },
    
    initTimeWindowInput: function(startInput, endInput) {
        startInput.datetimepicker({
            dateFormat: 'dd/mm/yy',
            onClose: function(dateText, inst) {
                var endDateTextBox = endInput;
                if (endDateTextBox.val() != '') {
                    var testStartDate = new Date(dateText);
                    var testEndDate = new Date(endDateTextBox.val());
                    if (testStartDate > testEndDate)
                        endDateTextBox.val(dateText);
                }
                else {
                    endDateTextBox.val(dateText);
                }
            },
            onSelect: function (selectedDateTime){
                var start = $(this).datetimepicker('getDate');
                endInput.datetimepicker('option', 'minDate', new Date(start.getTime()));
            }
        });
        
        endInput.datetimepicker({
            dateFormat: 'dd/mm/yy',
            onClose: function(dateText, inst) {
                var startDateTextBox = startInput;
                if (startDateTextBox.val() != '') {
                    var testStartDate = new Date(startDateTextBox.val());
                    var testEndDate = new Date(dateText);
                    if (testStartDate > testEndDate)
                        startDateTextBox.val(dateText);
                }
                else {
                    startDateTextBox.val(dateText);
                }
            },
            onSelect: function (selectedDateTime){
                var end = $(this).datetimepicker('getDate');
                startInput.datetimepicker('option', 'maxDate', new Date(end.getTime()) );
            }
        });
    },
    
    removeArrayElement: function(array, element) {
        return $.grep(array, function(e) {
            return e !== element;
        });
    },
    
    getFieldValue: function(field) {
        var value = field;
        // check if it is a DateTime
        if (value && value.getDateString) {
            value = value.getDateString();
        }
        
        return value;
    },
    
    sleep: function(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    },
    
    changeFieldToDropDown: function(options) {
        var dropDownValues = options.values;
        var row = options.row;
    },
    
    millsecsToHours: function(millsecs) {
        var x = millsecs / 1000
        var seconds = x % 60
        x /= 60
        var minutes = x % 60
        x /= 60
        var hours = Math.floor(x);
        //var hours = x % 24;
        //x /= 24
        //var days = x
        
        var hoursString = hours ? (hours + ' hours') : '';
        hoursString += minutes ? ((hoursString? ', ' : '' )+ minutes + ' minutes') : '';
        hoursString += seconds ? ((hoursString? ', ' : '' ) +seconds + ' seconds') : '';
        
        if (!hoursString) {
            hoursString = 0;
        }
        
        return hoursString;
    },
    
    getIdFromRestUrl: function(url) {
        var components = url.split('/');
        
        var id = components[components.length-1];
        return id;
    },
    
    loadCssScript: function(cssUrl) {
        var link = document.createElement("link");
        link.setAttribute("rel","stylesheet");
        link.setAttribute("type","text/css");
        link.setAttribute("href",cssUrl);
        document.getElementsByTagName("head")[0].appendChild(link);
    },
    
    setConfigFromUrl: function() {
        var paraStr = window.location.search.substring(1);
        
        if (paraStr) {
            var parameters = paraStr.split("&");
            for (var i=0;i<parameters.length;i++) 
            {
                var strs = parameters[i].split("=");
                if (strs && strs.length>1) {
                    var name = strs[0];
                    var value = strs[1];
                    
                    if (value == 'false' || value == 'true') {
                        value = (value == 'true');
                    }
                    
                    Config[name] = value;
                }
                
            }
        }
    }
}

//if (JSON.stringify) {
//    alert('Json stringfy exist!')
//} else {
//    alert('Json stringfy does NOT exist!')
//}

JSON.stringify = JSON.stringify || function (obj) {
    var t = typeof (obj);
    if (t != "object" || obj === null) {
        // simple data type
        if (t == "string") obj = '"'+obj+'"';
        return String(obj);
    }
    else {
        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);
        for (n in obj) {
            v = obj[n];
            t = typeof(v);
            if (t == "string") v = '"'+v+'"';
            else if (t == "object" && v !== null) v = JSON.stringify(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
};

