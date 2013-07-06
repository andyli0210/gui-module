IFL.GanttChart.ChartItem = function(options) {
    var UTC_offset = 11*60*60*1000;
    if (!options) {
        options = {};
    }
    
    var domain = options.domain;
    //    if (!domain) {
    //        alert('Gantt Chart Item does not have a domain !');
    //        return null;
    //    }
    
    if (!options.rowIndex) {
        alert('Gantt Chart Item must have row index !');
        return null;
    }
    
    var startTime = options.startTime.getTime();
    var endTime = options.endTime.getTime();
    //getStartEndTime();
    
    if (!startTime || !endTime) {
        alert('Gantt Chart Item must have start time and end time !');
        return null;
    }
    
    var start = startTime + UTC_offset;
    var end = endTime + UTC_offset;
    
    var borderColor = options.borderColor || '#0000FF';
    var fillColor = options.fillColor;
    var highlightColor = options.highlightColor || '#009933';
    var height = options.height || 0.2;
    
    var series_data = [];
    var markings = [];
    var operator;
    
    initMarkings();
    initOperator();
    //initHandlers();
    
    
    function initMarkings() {
        markings = [];
        var marking;
        
        marking = new IFL.GanttChart.Marking(start, end, options.rowIndex - height, options.rowIndex + height, borderColor, fillColor, highlightColor);
        markings.push(marking); 
    }
    
    function getStartEndTime() {
        var dateFormat = 'dd/MM/yyyy HH:mm';
        if (options.dateFormat) {
                dateFormat = options.dateFormat;
            }
            
        if (options.startTime) {
            startTime = options.startTime.getTime();
        } else if (options.startTimeStr) {
            //var time = getDateFromFormat(options.startTimeStr.trim(), dateFormat);
            startTime = getDateFromFormat(options.startTimeStr.trim(), dateFormat);
            //startTime.setTime(time);
            //startTime.setSeconds(0, 0);
        } else if (options.ISOStartTimeStr) {
            startTime = IFL.Util.ISOStringToDate(options.ISOStartTimeStr).getTime();
        }
        
        if (options.endTime) {
            endTime = options.endTime.getTime();
        } else if (options.endTimeStr) {
             endTime = getDateFromFormat(options.endTimeStr.trim(), dateFormat);
            //endTime = new Date();
            //endTime.setTime(time);
           // endTime.setSeconds(0, 0);
        } else if (options.ISOEndTimeStr) {
            endTime = IFL.Util.ISOStringToDate(options.ISOEndTimeStr).getTime();
        }
    }
    
    
    function initOperator() {
        series_data.push([start, options.rowIndex]);
        series_data.push([end, options.rowIndex]);
    
        operator = new IFL.MapVis.Operator(domain, markings);
        operator.series_data = {
            data: series_data
        }
    }
    
    function initHandlers() {
        operator.registerEventHandler('mouseover', function(domain, x, y) {
            console.debug('mouse mouseover chart item ');
        });
        
        operator.registerEventHandler('mouseout', function(domain, x, y) {
            console.debug('mouse mouseout, chart item ');
        });
        
        operator.registerEventHandler('mouseclick', function(domain, x, y) {
            console.debug('mouse click, chart item ');
        });
    }
    
    return operator;
}


