// service path Config
Config.uriPath ='/core/path/resources/lcp',
//uriPathServer= 'http=//ifldev=8080/core/path/resources/lcp',
Config.uriTrack='/core/track/resources',
Config.uriConfig='/core/config/resources',
Config.uriContext='/core/security/resources/context',
Config.uriExternal='http=//devsite1.jaix.net.au/jaixcentral/mapping.asmx/GetVehicleInformation?strVehicleNumber=',
    
// -------------------- Admin Config ------------------------
Config.adminEditable= true,
Config.useDummyFleet= true,
Config.useDummySchedule= true,
    
// -------------------- Trace Config ------------------------
Config.initTrace= false,
Config.showTracePlanPath= true,
Config.showPlanStraightLine= false,
Config.traceInterval= 5000,
Config.uriTrace= '/core/track/resources/accounts/{accountId}/fleets/{fleetId}/traces',
    
// -------------------- Login Config ------------------------
Config.initLogin= false,
//loginUrl= "http=//" + window.location.host + window.location.pathname + "/login",
Config.loginUrl= "http=//" + window.location.host + "/map-vis/login",
// -------------------- Account Config ------------------------
Config.uriCommodity= '/core/config/resources/accounts/{accountId}/commodities',
    
// -------------------- Map Service Config ------------------------
Config.mapServiceName= 'EMS',
Config.routeServiceName= 'LCP',
    
// -------------------- Image Config ------------------------
//Config.imagePath= 'gui/core/images',
    
// -------------------- xslt Config ------------------------
Config.xsltPath= '/gui/core/xslt',
    
// -------------------- dummy files Config ------------------------
Config.dummyPath= '/gui/core/dummy',

// --------------------file upload config --------------------------
Config.uploadMode = 'client';
Config.uploadServer = '../../upload';
    
// -------------------- Config Util------------------------
Config.setFromUrl= function() {
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
                    
                this[name] = value;
            }
                
        }
    }
}