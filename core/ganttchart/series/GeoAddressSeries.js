function GeoAddressSeries(domain, route_index) {
    var UTC_offset = 11*60*60*1000;
    //var startTime = Date.parse(domain.getStartTime()).getTime() + UTC_offset;
    // var endTime = Date.parse(domain.getEndTime()).getTime() + UTC_offset;
    var startTime = getDateFromFormat(domain.getStartTime(),'dd/MM/yyyy HH:mm')+ UTC_offset;
    var endTime = getDateFromFormat(domain.getEndTime(),'dd/MM/yyyy HH:mm') + UTC_offset;
//    console.debug('domain start time: ' + domain.getStartTime());
//    console.debug('domain end time: ' + domain.getEndTime());
//    console.debug('start time: ' + startTime);
//    console.debug('end time: ' + endTime);
    var color = '#0000FF';
    var hightlight_color = '#009933';
    
    var series_data = [];
    var markings = [];
    var operator;
    
    initMarkings();
    initOperator();
    //initHandlers();
    
    
    function initMarkings() {
        markings = [];
        var marking;
        var fillColor = getFillColor();
        var highlightColor = getHighlightColor();
        var routeHeight = 0.2;
        
        //fillColor = '#00FF00';
        marking = new SeriesMarking(startTime, endTime, route_index-routeHeight, route_index+routeHeight, color, fillColor, highlightColor);
        markings.push(marking); 
    }
    
    function getFillColor() {
        var status = domain.getStatus()
        
        switch(status) {
            case 'select':return "#FFFF00";
            case 'unresolved':return "#FF0000";
            default:return "#00FF00";
        }
    }
    
    function getHighlightColor() {
        var status = domain.getStatus()
        
        switch(status) {
            case 'select':return "#FFCC00";
            case 'unresolved':return "#FF0099";
            default:return "#009933";
        }
    }
    
    function initOperator() {
        series_data.push([startTime, route_index]);
        series_data.push([endTime, route_index]);
    
        operator = new VisOperator(domain, markings);
        operator.series_data = {
            data: series_data
        }
    }
    
    function initHandlers() {
        operator.registerEventHandler('mouseover', function(domain, x, y) {
            console.debug('mouse mouseover geo operator ');
        });
        
        operator.registerEventHandler('mouseout', function(domain, x, y) {
            console.debug('mouse mouseout, geo operator ');
        });
        
        operator.registerEventHandler('mouseclick', function(domain, x, y) {
            console.debug('mouse click, geo operator ');
        });
    }
    
    return operator;
}


