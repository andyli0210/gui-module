IFL.GanttChart.GanttChartService = function(containerId, options) {
    if (!containerId) {
        alert('Please specify containter Id for Gantt Chart');
        return null;
    }
    
    if (!options) {
        options = {
            showRealTimeTick: false
        };
    }
    
    showRealTimeTick();
    
    var itemPerPage = options.itemPerPage || 5;
    var plot;
    var rows = [];
    var data = [];
    var ticks = [];
    var series = [];
    var curOverItem;
    
    var gantt_options;
    
    var xaxes = [];
    var yaxes = [];
    var plotOffset;
    var highlightedIflSeries = [];
    var octx;
    var ctx;
    var tctx;
    
    var events;
    
    initOptions();
    initPlot();
    
    function reset() {
        rows = [];
        data = [];
        ticks = [];
        series = [];
        highlightedIflSeries = [];
        curOverItem = null;
    }
    
    function initOptions() {
        gantt_options = {
            xaxis: {
                mode: "time",
                position: 'top',
                labelWidth: 150,
                labelHeight: options.labelHeight || 25
            },
            yaxis: {
                minTickSize: 1,
                labelWidth: 150,
                show: false
            },
            grid: {
                hoverable: true, 
                clickable: true,
                markings: []
            },
            series: {
                lines: {
                    show: false
                },
                shadowSize: 0
            },
            zoom: {
                interactive: true
            },
            pan: {
                interactive: true
            }
        };
        
        $.extend(true, gantt_options, options);
        
    }
    
    function addCellSeries(seriesOperator, isRedraw) {
        data.push(seriesOperator.series_data);
        series.push(seriesOperator);
        if (isRedraw) {
            refreshPlot();
        }
    }
    
    function addRowSeries(seriesOperator, isRedraw) {
        rows.push(seriesOperator);
        series.push(seriesOperator);
        
        var route_index = seriesOperator.rowIndex;
        var rowTitle = seriesOperator.rowTitle;
        
        var y_start = 0.5;
        var y_end = itemPerPage;
        
        if (rows.length > itemPerPage) {
            y_start = rows.length - itemPerPage + 0.5;
            y_end = rows.length + 0.5;
        } else {
            if (options.pager) {
                y_start = 0.5;
                y_end = itemPerPage + 0.5;
            } else {
                y_start = 0.5;
                y_end = rows.length + 0.5;
            }
        }
        
            
        if (!rowTitle) {
            ticks.push([ route_index, route_index]); 
        } else {
            ticks.push([ route_index, '<b>' + rowTitle + '</b>']); 
        }
        
        var yaxis_options = {
            min:  y_start,
            max:  y_end,
            minTickSize: 1,
            zoomRange: false,
            panRange: (options.pager? false : [0, rows.length + 1]),
            ticks: ticks,
            labelWidth: 150,
            show: false
        }
            
        gantt_options.yaxis = yaxis_options;
        
        if (isRedraw) {
            refreshPlot();
        }
        
    }
    
    function initPlotHandlers() {
        $("#" + containerId).bind('panstart', function (event, plot) {
            //console.warn('drag start');
            $("#" + containerId).unbind("plothover", plotOver);
        });
        
        $("#" + containerId).bind('panend', function (event, plot) {
            // console.warn('drag end');
            $("#" + containerId).bind("plothover", plotOver);
        });
        
        $("#" + containerId).bind("plothover", plotOver);
        
        $("#" + containerId).bind("plotclick", function (event, pagePos, canvasPos) {
            var item = findNearByIflSeries(canvasPos.x, canvasPos.y);
            
            if (item)
                notifyHandlers('mouseclick', item, pagePos);
        });
        
        $("#" + containerId).bind("draw", drawSeries);
    }
    
    function drawSeries() {
        //debugger;
        for (var i=0; i< series.length; i++) {
            //series[i].render(ctx, xaxes[0], yaxes[0], plotOffset);
            drawIflSeries(series[i]);
        }
        
        for (var j=0; j< highlightedIflSeries.length; j++) {
            //highlightedIflSeries[j].highlight(octx, xaxes[0], yaxes[0], plotOffset, true);
            highlightSeries(highlightedIflSeries[j], true);
        }
        
        drawRowSeparateLine();
    }
    
    function drawIflSeries(seriesOperator) {
        var markings = seriesOperator.getVisObject();
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            marking.render(ctx, xaxes[0], yaxes[0], plotOffset);
        }
    }
    
    function drawSeparateLine(index, xStart, xEnd) {
        var start = {
            x: xStart,
            y: index
        }
        var end = {
            x: xEnd,
            y: index
        }    
        
        drawLine(start, end);
    }
    
    
    function drawRowSeparateLine() {
        var xStart = xaxes[0].p2c(xaxes[0].min);
        var xEnd = xaxes[0].p2c(xaxes[0].max);
        
        ctx.beginPath();
        for (var r in rows) {
            var row = rows[r];
            var index = row.rowIndex;
            
            var yValue = yaxes[0].p2c(index-0.5);
            
            drawSeparateLine(yValue, xStart, xEnd);
            
            yValue = yaxes[0].p2c(index+0.5);
            drawSeparateLine(yValue, xStart, xEnd);
        }
        ctx.closePath();
    }
    
    function drawLine(start, end, color, width, context) {
        if (!context) {
            context = ctx;
        }
        
        context.strokeStyle = color || "#ccc";
        context.lineWidth = width || 1;
        context.moveTo(start.x + plotOffset.left, start.y + plotOffset.top);
        context.lineTo(end.x + plotOffset.left, end.y + plotOffset.top);
        context.stroke();
    }
    
    function initPlot() {
        refreshPlot();
        initPlotHandlers();
        initEvents();
    }
    
    function initEvents() {
        events = {
            'mouseover': [],
            'mouseout': [],
            'mouseclick': []
        }
    }
    
    function registerHandler(eventName, handler) {
        events[eventName].push(handler);
    }
    
    function notifyHandlers(eventName, item, options) {
        var handlers = events[eventName];
        for (var h in handlers) {
            var handler = handlers[h];
            handler(item, options);
        }
    }

    function plotOver(event, pagePos, canvasPos) {
        var item = findNearByIflSeries(canvasPos.x, canvasPos.y)
        if (curOverItem && curOverItem != item) {
            notifyHandlers('mouseout', curOverItem, pagePos);
        } 
        if (item && curOverItem != item) {
            notifyHandlers('mouseover', item, pagePos);
        }
        
        curOverItem = item;
    }
    
    function refreshPlot() {
        if (plot) {
            $("#" + containerId).empty();
            delete plot;
        }
        
        plot = $.plot($("#" + containerId), data, gantt_options);
        
        
        
        xaxes = plot.getXAxes();
        yaxes = plot.getYAxes();
        
        //        if (options.pager) {
        //            gantt_options.xaxis.panRange = [xaxes[0].min, xaxes[0].max];
        //        }
            
        //gantt_options.xaxis.zoomRange = [1, xaxes[0].max - xaxes[0].min];
        plotOffset = plot.getPlotOffset();
        octx = plot.octx();
        ctx = plot.ctx();
        tctx = plot.tctx();
        
        drawSeries();
    }
    
    function getPlot() {
        return plot;
    }
    
    function getGanttOptions() {
        return gantt_options;
    }
    
    function setGanttOptions(options) {
        gantt_options = options;
    }
    
    function findNearByIflSeries(mouseX, mouseY) {
        var mx = xaxes[0].c2p(mouseX);
        var my = yaxes[0].c2p(mouseY);
        for (var i=0; i<series.length; i++) {
            var item = series[i];
                
            if (isMouseInSeries(mx, my, item)) {
                return item;
            }
        }
            
        return null;
    }
    
    function isMouseInSeries(mx, my, seriesOperator) {
        var markings = seriesOperator.getVisObject();
        
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            if (marking.isMouseInMarking(mx,my)) {
                return marking;
            }
        }
        
        return null;
    }
    
    function highlightIflSeries(item, isHighlight) {
        highlightSeries(item, isHighlight);
        
        if (isHighlight) {
            highlightedIflSeries.push(item);
        } else {
            for (var i=0; i<highlightedIflSeries.length; i++) {
                var series = highlightedIflSeries[i];
                if (series == item) {
                    highlightedIflSeries.splice(i,1);
                    break;
                }
            }
        }
    }
    
    function highlightSeries(item, isHighlight) {
        var markings = item.getVisObject();
        
        for (var m in markings) {
            var marking = markings[m];
            marking.highlight(octx, xaxes[0], yaxes[0], plotOffset, isHighlight, 3);
        }            
    }
    
    function getSeriesItems() {
        return series;
    }
    
    function insertAxisTitles() {
        var placeholder = $("#" + containerId);
        placeholder.find(".tickTitles").remove();
        
        var table = $('<table></table>').css({
            width: 150,
            height: canvasHeight,
            position: 'absolute',
            top: 0,
            left: 0,
            textAlign: 'center'
        })
        
        var box = axes[0].box;
        var titleHight = box.top + box.height;
        var rowHeight = canvasHeight - (box.top + box.height);
        var title_row = $('<tr><td>ResourceId</td></tr>').css({
            height: titleHight,
            width: '100%'
        }).appendTo(table);
        
        for (var i=0; i<10; i++) {
            var row = $('<tr><td>123</td><tr>').css({
                width: '100%',
                height: rowHeight
            })
        }
        var titleDiv = $('<div class="tickTitles" style="font-size:normal">').css({
            position: 'absolute',
            top: 0,
            left: 0,
            textAlign: 'center'
        });
            
        table.appendTo(placeholder);
    }
    
    function showRealTimeTick() {
        if (options.showRealTimeTick) {
            setInterval(drawRealTimeTick,1000);
        }
    }
    
    function drawRealTimeTick() {
        console.info('drawing real time tick');
        var currentTime = new Date();
        currentTime = currentTime.getTime() + IFL.Util.getTimeZone() * 60 * 60 * 1000;
        
        if (!tctx) {
            return;
        }
        
        tctx.clearRect(0, 0, $("#" + containerId).width(), $("#" + containerId).height());
       var xaxis = xaxes[0];
       var yaxix = yaxes[0];
       
       if (currentTime <= xaxis.min || currentTime >= xaxis.max)
            return;
       
       var start = {
            x: xaxis.p2c(currentTime),
            y: yaxix.p2c(yaxix.min)
        }
        var end = {
            x: xaxis.p2c(currentTime),
            y: yaxix.p2c(yaxix.max)
        }    
        
        tctx.beginPath();
        drawLine(start, end, '#FF0000', null, tctx);
        tctx.closePath();
       
    }
    
    return {
        addRow: addRowSeries,
        addItem: addCellSeries,
        refreshPlot: refreshPlot,
        getPlot: getPlot,
        getGanttOptions: getGanttOptions,
        setGanttOptions: setGanttOptions,
        highlightItem: highlightIflSeries,
        registerHandler: registerHandler,
        reset: reset,
        getSeriesItems: getSeriesItems,
        drawSeries: drawSeries,
        drawLine: drawLine
    }


}


