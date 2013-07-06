function GeoRouteSeries(geoAddresses, route_index, route_title) {
    var UTC_offset = 11*60*60*1000;
    var markings = [];
    var color = '#0000FF';
    var operator;
    
    initMarkings();
    initOperator();
    //initHandlers();
    
    function initMarkings() {
        markings = [];
    
        if (geoAddresses.length > 1) {
            var lastAddress = geoAddresses[0];
    
            for (var i=1; i< geoAddresses.length; i++) {
                var thisAddress = geoAddresses[i];
                
                var start = getDateFromFormat(lastAddress.getEndTime(),'dd/MM/yyyy HH:mm')+ UTC_offset;
                var end = getDateFromFormat(thisAddress.getStartTime(),'dd/MM/yyyy HH:mm')+ UTC_offset;
                //var start = Date.parse(lastAddress.getEndTime()).getTime() + UTC_offset;
                //var end = Date.parse(thisAddress.getStartTime()).getTime() + UTC_offset;
            
                var routeMarking = new SeriesMarking(start, end, route_index-0.01, route_index+0.01, color, color);
            
                markings.push(routeMarking);
                
                lastAddress = thisAddress;                
            }
        }
    }
    
    function initOperator() {
        operator = new VisOperator(geoAddresses, markings);
        operator.rowIndex = route_index;
        operator.rowTitle = route_title;
    }
    
    function initHandlers() {
        operator.registerEventHandler('mouseover', function(domain, x, y) {
            console.debug('mouse mouseover geo Route operator ');
        });
        
        operator.registerEventHandler('mouseout', function(domain, x, y) {
            console.debug('mouse mouseout, geo Route operator ');
        });
        
        operator.registerEventHandler('mouseclick', function(domain, x, y) {
            console.debug('mouse click, geo Route operator ');
        });
    }
    
    return operator;
}


