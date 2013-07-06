IFL.GanttChart.ChartRow = function(itemOperators, options) {
    var UTC_offset = 11*60*60*1000;
    
//    if (!itemOperators || !itemOperators[0]) {
//        alert('No row items !');
//        return null;
//    }
    
    if (!options) {
        options = {};
    }
    
    if (!options.index && !itemOperators) {
        alert('Gantt Chart Row must have row index !');
        return null;
    }
    
    var title = options.title;
    var index = options.index || itemOperators[0].series_data.data[0][1];
    var height = options.height || 0.01;
    
    var markings = [];
    var color = options.color || '#0000FF';
    var highlightColor = options.highlightColor || color;
    var operator;
    
    initMarkings();
    initOperator();
    //initHandlers();
    
    function initMarkings() {
        markings = [];
    
        if (itemOperators && itemOperators.length > 1) {
            var lastItem = itemOperators[0];
    
            for (var i=1; i< itemOperators.length; i++) {
                var thisItem = itemOperators[i];
                
                var start = lastItem.series_data.data[1][0];
                var end = thisItem.series_data.data[0][0];
                //var start = Date.parse(lastAddress.getEndTime()).getTime() + UTC_offset;
                //var end = Date.parse(thisAddress.getStartTime()).getTime() + UTC_offset;
            
                var rowMarking = new IFL.GanttChart.Marking(start, end, index-height, index+height, color, highlightColor);
            
                markings.push(rowMarking);
                
                lastItem = thisItem;                
            }
        }
    }
    
    function initRowMarkings() {
        var upRowMarking = new IFL.GanttChart.Marking("min", "max", index-0.5, index-0.5, color);
        var downRowMarking = new IFL.GanttChart.Marking("min", "max", index+0.5, index+0.5, color);
        markings.push(upRowMarking);
        markings.push(downRowMarking);
    }
    
    function initOperator() {
        operator = new IFL.MapVis.Operator(options.domain, markings);
        operator.rowIndex = index;
        operator.rowTitle = title;
    }
    
    function initHandlers() {
        operator.registerEventHandler('mouseover', function(domain, x, y) {
            console.debug('mouse mouseover chart row operator ');
        });
        
        operator.registerEventHandler('mouseout', function(domain, x, y) {
            console.debug('mouse mouseout, chart row operator ');
        });
        
        operator.registerEventHandler('mouseclick', function(domain, x, y) {
            console.debug('mouse click, chart row operator ');
        });
    }
    
    return operator;
}






