function ServiceSeries(serviceDomain, routeIndex) {
    var UTC_offset = 10*60*60*1000;
    var earliest_time = Date.parse(serviceDomain.getEarliestTime()).getTime() + UTC_offset;
    var latest_time = Date.parse(serviceDomain.getLatestTime()).getTime() + UTC_offset;
    var status = serviceDomain.getStatus();
    var duration = serviceDomain.getDuration();
    
    var color = '#0000FF';
    
    var markings = [];
    var data = [];
    
    // assume it arrive at earliest time and finish on time by default
    var startTime = earliest_time;
    var finishTime =  startTime + parseInt(duration);
    
    var durationMarking;
    var earliestTimeMarking;
    var latestTimeMarking;
    
    data.push([earliest_time, routeIndex]);
    data.push([latest_time, routeIndex]);
    
    var series_data = {
        data: data
    }
    
    renderDurationMarking();
    renderMarkings();
    
    var operator = new VisOperator(serviceDomain);
    operator.setVisObject(markings);
    operator.series_data = series_data;
    
    function renderDurationMarking() {
        var fillColor = getStatusColor();
        durationMarking = new SeriesMarking(startTime, finishTime, routeIndex-0.2, routeIndex+0.2, color, fillColor);
    }
    
    function renderTimeWindowMarkings() {
        earliestTimeMarking = new SeriesMarking(earliest_time, earliest_time, routeIndex-0.15, routeIndex+0.15);
        latestTimeMarking = new SeriesMarking(latest_time, latest_time, routeIndex-0.15, routeIndex+0.15);
    }
    
    function renderMarkings() {
        markings = [];
        markings.push(durationMarking);
    }
    
    function render(context, xaxis, yaxis, plotOffset) {
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            marking.render(context, xaxis, yaxis, plotOffset);
        }
    }
    
    function isMouseInSeries(mx, my) {
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            if (marking.isMouseInMarking(mx,my)) {
                return marking;
            }
        }
        return null;
    }
    
    function highlight(context, xaxis, yaxis, plotOffset, isHighlight) {
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            var fillColor = getStatusColor();
            
            marking.highlight(context, xaxis, yaxis, plotOffset, isHighlight, 1, fillColor);
        }
    }
    
    function getStatusColor() {
        var fillColor;
            
        switch(status.toUpperCase()) {
            case 'FULFILLED' : {
                fillColor = '#006600';
                break;
            }
            case 'PARTIAL': {
                fillColor = '#FFFF00';
                break;
            }
            case 'ABANDONED': {
                fillColor = '#D8D8D8';
                break;
            }
            case 'CREATED': 
            default: {
                fillColor = null;    
            }
        }
        
        return fillColor;
    }
    
    function setStartTime(time) {
        startTime = time;
    }
    
    function setFinishTime(time) {
        finishTime = time;
    }
    
    function getMarkings() {
        return markings;
    }
    
//    return {
//        id: serviceDomain.id,
//        series_data: series_data,
//        markings: markings,
//        getMarkings: getMarkings,
//        render: render,
//        isMouseInSeries: isMouseInSeries,
//        setStartTime: setStartTime,
//        setFinishTime: setFinishTime,
//        highlight: highlight
//    }
    return operator;
}
