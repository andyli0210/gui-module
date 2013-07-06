function RouteSeries(routeDomain, route_index) {
    var UTC_offset = 10*60*60*1000;
    var markings = [];
    var color = '#0000FF';
    var timeStart = Date.parse('23/08/2010 02:31:07').getTime() + UTC_offset;
    var timeFinish = Date.parse('23/08/2010 13:25:07').getTime() + UTC_offset;
    
    renderMarkings();
    
    var operator = new VisOperator(routeDomain);
    operator.setVisObject(markings);
    
    function render(context, xaxis, yaxis, plotOffset) {
        
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            marking.render(context, xaxis, yaxis, plotOffset);
        }
    }
    
    function renderMarkings() {
        markings = [];
        var visits = routeDomain.getVisits();
    
        if (visits.length > 1) {
            var visit = visits[0];
    
            // calculate the finish time of the visit
            var services = visit.getServices();
            var lastService = services[services.length - 1];
            var last_finishTime = Date.parse(lastService.getEarliestTime()).getTime() + UTC_offset + lastService.getDuration();
            
            //var last_latestTime = Date.parse(visit.getLatestTime()).getTime() + UTC_offset;
            var this_startTime;
            for (var i=1; i< visits.length; i++) {
                visit = visits[i];
                this_startTime = Date.parse(visit.getEarliestTime()).getTime() + UTC_offset;
            
                var routeMarking = new SeriesMarking(last_finishTime, this_startTime, route_index-0.01, route_index+0.01, color, color);
            
                markings.push(routeMarking);
            
                // calculate the finish time of the visit
                services = visit.getServices();
                lastService = services[services.length - 1];
                last_finishTime = Date.parse(lastService.getEarliestTime()).getTime() + UTC_offset + lastService.getDuration();
            }
        }
    }
    
    function isMouseInSeries(mx,my) {
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            if (marking.isMouseInMarking(mx, my)) {
                return marking;
            }
        }
        
        return null;
        
    }
    
    function getTimeStart() {
        return timeStart;
    }
    
    function getTimeFinish() {
        return timeFinish;
    }
    
    function setTimeStart(time) {
        timeStart = time;
    }
    
    function setTimeFinish(time) {
        timeFinish = time
    }
    
    function highlight(context, xaxis, yaxis, plotOffset, isHighlight) {
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            marking.highlight(context, xaxis, yaxis, plotOffset, isHighlight);
        }
    }
    
    function getMarkings() {
        return markings;
    }
    
//    return {
//        markings: markings,
//        getMarkings: getMarkings,
//        id: routeDomain.id,
//        render: render,
//        isMouseInSeries: isMouseInSeries,
//        getTimeStart: getTimeStart,
//        getTimeFinish: getTimeFinish,
//        setTimeStart: setTimeStart,
//        setTimeFinish: setTimeFinish,
//        highlight: highlight
//    }

    return operator;
    
}