/**
 *
 * Namespace: EMS.Ajax
 *
 * The EMS.Ajax namespace exposes AJAX services both through using
 * XMLHttpRequest methods and Javascript <script> callbacks.
 */

EMS.Ajax = new Object();
/* Array of requests that can be canceled */
EMS.Ajax.cancelableRequests = [];
/* Hash of requests in groups.  Grouped requests have older requests discarded automatically */
EMS.Ajax.groupedRequests = {};
/* Maximum length of Cross Domain URL Length */
EMS.Ajax.maxCrossDomainURLLength = 1800;
/* Timeout for Cross Domain Requests */
EMS.Ajax.crossDomainTimeout = 10000;
/* jsessionid used to track session state */
EMS.Ajax.jsessionId = null;

// Move this section from EMS.Services to EMS.Ajax? (or alias)
if (typeof EMS.Services == "undefined")
    EMS.Services = new Object();
//EMS.Services._jsonBaseUrl = EMS._getScriptLocation() + "../..";
EMS.Services._jsonBaseUrl = 'http://ems.whereis.com';

/**
 * APIMethod: EMS.Ajax.json
 * Makes an ajax request to the backend service.
 * 
 * Parameters: 
 *  url - {String} The url to send the Ajax request to.
 *  callback - {Function} The function to call when the request has results.
 *  options  - optional parameters.  Includes options (communicationMode,
 *             onException).
 *
 */
EMS.Ajax.json = function(url, callback, options) {

    /**
     * Checks a JSON response for failure state. If failure state calls
     * exception handler.
     * @returns true if response ok
     */
    url = EMS.Services._jsonBaseUrl + url;

    options = options ? options : {};
    options.parameters = options.parameters ? options.parameters : {};
    options.parameters.domain = EMS.Util.getDomain();
    //if (!options.parameters.appId) options.parameters.appId = EMS.Services.appId;
    if (!options.parameters.token) options.parameters.token = EMS.token;
    if (options.parameters && typeof options.parameters != "string")
        options.parameters = EMS.Util.getParameterString(options.parameters);
    var exception = options.onException ? options.onException : EMS.Services._onException;

    var communicationMode = options.communicationMode || EMS.Services.communicationMode; 
    
    var transport = function() {/* todo */ };
    
    isJsonResponseOK = function(jsonResponse) {
        if (jsonResponse.stat && (jsonResponse.stat == "fail") ) {
            var errorMsg = "[" + jsonResponse.code + "] " + jsonResponse.error;
            if (jsonResponse.stackTrace) {
                errorMsg += "\n\n" + jsonResponse.stackTrace;
            }
            exception(transport, errorMsg);
            return false;
        }
        return true;
    };
    
    try{
        // append jsession to url if set
        if (EMS.Ajax.jsessionId != null)
            var jsess = EMS.Ajax.jsessionId ;
        else if(window.opener != null && window.opener.EMS != null && window.opener.EMS.Ajax.jsessionId != null)
            var jsess = window.opener.EMS.Ajax.jsessionId;
        else 
            jsess = null;
    }catch(e){}
        
    if(jsess != null){
        var pathParam = 'jsessionid';
        if (communicationMode == "XMLHttpRequest") {
            // if using a proxy the jsessionid needs to be renamed to avoid 
            // a collision with another jsessionid that might come from the proxying host
            pathParam = 'ems.jsessionid'
        }
        url += ';' + pathParam + '=' + jsess;
    }

    //var originalOnComplete = options.onComplete ? options.onComplete : null;
    if (communicationMode == "XMLHttpRequest") {
        var ajaxReq;
        var newOptions;
        var complete = OpenLayers.Function.bind( function(transport, json, request) {
            var result = eval('(' + transport.responseText + ')');
            EMS.Ajax.Responders.dispatch("onComplete", ajaxReq, transport, result);

            if (request && request.options && request.options.group && request.options.requestTime < EMS.Ajax.groupedRequests[request.options.group]) {
                return;  // Discard request.  It's old.
            }
            if (isJsonResponseOK(result)) {
                callback(result.message);
                //if (originalOnComplete) originalOnComplete();
            }
        }, this);

        // gjs: switched the order of the extends so it always executes our onComplete
        newOptions = OpenLayers.Util.extend(options,
            {onComplete: complete, onException: exception } );
        ajaxReq = new OpenLayers.Ajax.Request(url, newOptions);
        EMS.Ajax.Responders.dispatch("onCreate", ajaxReq, ajaxReq.transport, null);

    } else if (communicationMode == "CrossDomain") {

        var transport = function() {/* todo */ };
        var paramLength = options.parameters.length;        
        
        var parts= new Array();
        
        if( paramLength > EMS.Ajax.maxCrossDomainURLLength){
            var parts= new Array();
            var numOfParts = 0;
            var moreParts=true;
            var start = 0;          
            while(moreParts){
                //Ensure encoded chars are not split.
                var end = options.parameters.lastIndexOf("%22",start + EMS.Ajax.maxCrossDomainURLLength);
                if(end == start){
                    parts[numOfParts] = options.parameters.substring(start);
                    numOfParts++;
                    moreParts=false;
                }else{
                    parts[numOfParts] = options.parameters.substring(start,end);
                }
                start = end;
                numOfParts++;
            }           
        } else {
            parts[0]=options.parameters;    
        }
        var request = {
            "transport": transport,
            "options": options
        };
            
        if (typeof handlerFunctions == "undefined")
            handlerFunctions = {};
        if (typeof handler == "undefined")
            handler = 0;
        else
            handler++;
                
        handlerFunctions["ajaxHandler" + handler] = OpenLayers.Function.bind(
            function(group, requestTime, ajax) {                
            
            if (group && requestTime < EMS.Ajax.groupedRequests[group]) {
                return;  // Discard request.  It's old.
            }               
            if (isJsonResponseOK(ajax)) {
                if(ajax.chunked){
                        // Do nothing by default
                        //console.log(ajax.partReceived +" of " + ajax.of);
                } else {
                    try {
                        EMS.Ajax.Responders.dispatch("onComplete", request, transport, ajax);
                        callback(ajax.message);
                    } catch (e) {
                        alert("exception " + e);
                    }
                }
            }
        }, this, options.group, new Date().getTime());
    
        // Register the request create
        EMS.Ajax.Responders.dispatch("onCreate", request, transport, null);
            
        for(var i = 0; i < parts.length; i++){
            var dtRf = new Date();
            oScript = document.createElement("script");
            //Replace Parameter separator & equality for delineation
            var encodedParts = parts[i].replace(/=/g,"%3D%3D").replace(/&/g,"%26%26");                  
            var requestURL = url + "?cb=ajaxHandler" + handler + "&rf=" +dtRf.getTime() + "&nop="+ parts.length +"&pn=" + (i+1) + "&part=" + encodedParts; 
            oScript.setAttribute("src", requestURL );
            oScript.setAttribute("id", "emsajaxscript" + handler);
            var head = document.getElementsByTagName("head").item(0);
            head.appendChild(oScript);
        }            

       // cleanup after timeout
      setTimeout( OpenLayers.Function.bind(function(handler) {
           window["ajaxHandler" + handler] = null;
           var id = "emsajaxscript" + handler;
           var oScript = document.getElementById(id);
           var head = document.getElementsByTagName("head").item(0);
           if (oScript) {
                // Destory object
               head.removeChild(oScript);
           }
      }, this), EMS.Ajax.crossDomainTimeout);
    } else {
        alert("Invalid communication mode. Expected XMLHttpRequest or CrossDomain");
    }
};
EMS.Services._json = EMS.Ajax.json;

EMS.Ajax.callInProgress = function(xmlhttp) {
    switch (xmlhttp.readyState) {
        case 1: case 2: case 3: return true;
        // Case 4 and 0
        default: return false;
    }
}

/**
 * APIMethod: EMS.Ajax.cancelAll
 *
 * Cancels all currently pending AJAX requests.  
 *
 */
EMS.Ajax.cancelAll = function() {
    for (var i = 0; i < EMS.Ajax.cancelableRequests.length; i++) {
        if (EMS.Ajax.callInProgress(EMS.Ajax.cancelableRequests[i].transport)) {
            EMS.Ajax.cancelableRequests[i].options.onException = function() {};
            EMS.Ajax.cancelableRequests[i].transport.abort();
        }
    }
    EMS.Ajax.cancelableRequests = [];
}

/*
 * request - Request object is an object that contains the members
 *           transport and options.
 */
EMS.Ajax.requestCreate = function(request) {
    request.options.requestTime = new Date().getTime();
    if (!request.options.uninterruptable) {
        EMS.Ajax.cancelableRequests.push(request);
    }
};

/*
 * request - Request object is an object that contains the members
 *           transport and options.
 */
EMS.Ajax.requestComplete = function(request) {
    var i = -1;
    var found = false;
    for(i = 0; i < EMS.Ajax.cancelableRequests.length; i++) {
        if (EMS.Ajax.cancelableRequests[i].options.requestTime == request.options.requestTime) {
            found = true;
            break;
        }
    }
    if (found) EMS.Ajax.cancelableRequests.splice(i, 1);

    if (request.options.group) {
        if (!EMS.Ajax.groupedRequests[request.options.group]) {
            EMS.Ajax.groupedRequests[request.options.group] = request.options.requestTime;
        } else {
            if (request.options.requestTime < EMS.Ajax.groupedRequests[request.options.group]) {
                request.options.staleRequest = true;
            } else {
                EMS.Ajax.groupedRequests[request.options.group] = request.options.requestTime;
            }
        }
    }
}


/**
 * Class: EMS.Ajax.Responders
 *
 */
EMS.Ajax.Responders = {
    responders: [],

    /**
     * APIMethod: EMS.Ajax.Responders.register
     * 
     * Allows you to globally hook into AJAX requests.  Works
     * for any ajax request regardless of whether it's script based
     * or XMLRequest based.
     *
     * (code)
     * EMS.Ajax.Responders.register({
     *    onCreate: function(request, transport) {...},
     *    onComplete: function(request, transport, json) {...},
     * });
     * (end)
     * 
     * Parameters:
     *  responderToAdd - {<Object>} See class description. 
     *
     */
    register: function(responderToAdd) {
        for (var i = 0; i < this.responders.length; i++)
            if (responderToAdd == this.responders[i])
                return;
        this.responders.push(responderToAdd);
    },

    dispatch: function(callback, request, transport, json) {
        for (var i = 0; i < this.responders.length; i++) {
            var responder = this.responders[i];
            if (responder[callback] && typeof responder[callback] == 'function') {
                try {
                    responder[callback].apply(responder, [request, transport, json]);
                } catch (e) {}
            }
        }
    }
};

/* Registers Ajax.Requests global onCreate and onComplete events */
EMS.Ajax.Responders.register({
    /** Checks for the 'uninterruptable' option and adds it to the array if not present */
    onCreate: EMS.Ajax.requestCreate,
    /** Looks for the request in the array and removes it */
    onComplete: EMS.Ajax.requestComplete
});

/**
 * Extracts jsessionid from the json response
 * request - Request object is an object that contains the members
 *           transport and options.
 * transport - 
 * json - the json response
 */
EMS.Ajax.requestCompleteExtractJsessionId = function(request, transport, json) {
    if (json.jsessionid) {
        EMS.Ajax.jsessionId = json.jsessionid;
    }
}

//Register Ajax.Request global onComplete event to update jsessionid returned in response
EMS.Ajax.Responders.register({
    onComplete: EMS.Ajax.requestCompleteExtractJsessionId
});

