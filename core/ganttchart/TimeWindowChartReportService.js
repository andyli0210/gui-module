IFL.GanttChart.TimeWindowChartReportService = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var plot;
    var chartRows = [];
    var chartItems = [];
    var highlightedChartItems = [];
    var ticks = [];
    var curOverItem;

    var ganttOptions;
    var ganttData = [];

    var xaxes = [];
    var yaxes = [];
    var plotOffset;
    var octx;
    var ctx;
    var tctx;

    var eventHandler;
    init();
    function init() {
        initPlotOptions();
        initPlot();
    }

    function initDefaultOptions() {
        var clientTimeOffset = new Date().getTimezoneOffset();
        var clientTimeZone = -(clientTimeOffset / 60);

        options = {
            containerId: 'ganttChartContainer',
            UTC_offset: clientTimeZone * 60 * 60 * 1000,
            itemPerPage: 5,
            usePager: false,
            labelWidth: 150,
            labelHeight: 25,
            minTickSize: 1,
            showYaxix: true,
            hoverable: true,
            clickable: true,
            zoomable: true,
            panable: true,
            itemHeight: 0.2,
            itemStyle: {
                borderColor: '#0000FF',
                fillColor: '',
                highlightColor: '#009933'
            }
        };
    }

    function reset() {
        chartRows = [];
        ganttData = [];
        ticks = [];
        chartItems = [];
        highlightedChartItems = [];
        curOverItem = null;
    }

    function initPlotOptions() {
        ganttOptions = {
            xaxis: {
                mode: "time",
                position: 'top',
                labelWidth: options.labelWidth,
                labelHeight: options.labelHeight
            },
            yaxis: {
                minTickSize: options.minTickSize,
                labelWidth: options.labelWidth,
                show: options.showYaxix,
                zoomRange: false,
                min: 0,
                max: 0,
                panRange: false,
                ticks: ticks
            },
            grid: {
                hoverable: options.hoverable,
                clickable: options.clickable,
                markings: []
            },
            series: {
                lines: {
                    show: false
                },
                shadowSize: 0
            },
            zoom: {
                interactive: options.zoomable
            },
            pan: {
                interactive: options.panable
            }
        };

    }



    function getVisitItem(visit) {
        var services = visit.services.service;
        var earliestArriveTime = visit.timeEarliest;
        var leaveTime = services[0].timeEarliest + services[0].elapsedDuration * 60 * 1000;
        var latestStartTime = services[0].timeLatest;

        var request = services[0].refRequest;
        var timeWindow = request.windows.window[0];
        var timeWindowStart = timeWindow.timetimeStart;
        var timeWindowEnd = timeWindow.timeFinish;

        return {
            earliestArriveTime: earliestArriveTime,
            leaveTime: leaveTime,
            latestStartTime: latestStartTime,
            timeWindowStart: timeWindowStart,
            timeWindowEnd: timeWindowEnd
        }
    }

    function getDepotVisitItem(visit, routeAvailability) {
        var earliestArriveTime = visit.timeEarliest;
        var leaveTime = visit.timeEarliest;
        var latestStartTime = visit.timeLatest;

        var timeWindowStart = routeAvailability.timeOpen;
        var timeWindowEnd = routeAvailability.timeClose;

        return {
            earliestArriveTime: earliestArriveTime,
            leaveTime: leaveTime,
            latestStartTime: latestStartTime,
            timeWindowStart: timeWindowStart,
            timeWindowEnd: timeWindowEnd
        }
    }
    
    function addRoute(route) {
        var visits = route.visits.visit;
        
        for (var i=0; i<visits.length; i++) {
            var visit = visits[i];
            
        }
    }

    function addVisitItemMarker(visitItem, rowIndex) {
        var timeTimeWindowItem = {
            start: visitItem.timeWindowStart,
            end: visitItem.timeWindowEnd,
            rowIndex: rowIndex
        }
        addItem(timeTimeWindowItem);

        var serviceItem = {
            start: visitItem.earliestArriveTime,
            end: visitItem.leaveTime,
            rowIndex: rowIndex,
            height: 0.1,
            style: {
                fillColor: '#00FF00'
            }
        }
        addItem(serviceItem);
    }

    function addItem(chartItem) {
        var start = chartItem.start + options.UTC_offset;
        var end = chartItem.end + options.UTC_offset;
        var rowIndex = chartItem.rowIndex;

        if (start != 0 && !start) {
            console.error('Chart Item must have start');
            return;
        }

        if (end != 0 && !end) {
            console.error('Chart Item must have end');
            return;
        }

        if (rowIndex != 0 && !rowIndex) {
            console.error('Chart Item must have rowIndex');
            return;
        }

        var height = (!chartItem.height && chartItem.height != 0) ? options.itemHeight : chartItem.height;
        var style = {};
        $.extend(true, style, options.itemStyle, chartItem.style);
        //create item marking
        var marking = new IFL.GanttChart.Marking(start, end, rowIndex - height, rowIndex + height, style.borderColor, style.fillColor, style.highlightColor);
        chartItem.marking = marking;

        chartItems.push(chartItem);
        ganttData.push({
            data: [[start, rowIndex], [end, rowIndex]]
        });
    }

    function addChartRow(chartRow) {
        var rowIndex = chartRow.rowIndex;
        var rowTitle = chartRow.rowTitle || rowIndex;

        if (rowIndex != 0 && !rowIndex) {
            console.error('Chart Row must have Row Index !!!');
            return;
        }

        chartRows.push(chartRow);

        var yStart = 0.5;
        var yEnd;

        if (options.usePager) {
            if (chartRows.length > options.itemPerPage) {
                yStart = chartRows.length - options.itemPerPage + 0.5;
                yEnd = chartRows.length + 0.5;
            } else {
                yEnd = options.itemPerPage + 0.5;
            }

        } else {
            yEnd = chartRows.length + 0.5;
        }

        if (!rowTitle) {
            ticks.push([rowIndex, rowIndex]);
        } else {
            ticks.push([rowIndex, '<b>' + rowTitle + '</b>']);
        }

        var yaxis_options = {
            min: yStart,
            max: yEnd,
            panRange: (options.usePager ? false : [0, chartRows.length + 1]),
            ticks: ticks
        }

        var yOptions = ganttOptions.yaxis;
        $.extend(true, yOptions, yaxis_options);
        //ganttOptions.yaxis = yOptions;
    }

    function initPlotHandlers() {
        // debugger;
        var plotContainer = $("#" + options.containerId);
        plotContainer.bind('panstart', function(event, plot) {
            //console.info('drag start');
            plotContainer.unbind("plothover", plotOver);
        });

        plotContainer.bind('panend', function(event, plot) {
            //console.info('drag end');
            plotContainer.bind("plothover", plotOver);
        });

        plotContainer.bind("plothover", plotOver);

        plotContainer.bind("plotclick", function(event, pagePos, canvasPos) {
            var item = findNearByChartItem(canvasPos.x, canvasPos.y);
            //console.info('plot clicked');
            if (item)
                notifyHandlers('mouseclick', item, pagePos);
        });

        plotContainer.bind("draw", drawChartItems);
    }

    function drawChartItems() {
        for (var i = 0; i < chartItems.length; i++) {
            renderChartItem(chartItems[i]);
        }

        //debugger;
        for (var j = 0; j < highlightedChartItems.length; j++) {
            highlightChartItem(highlightedChartItems[j], true);
        }

        if (options.showRowSeparateLine) {
            drawRowSeparateLine();
        }

    }

    function renderChartItem(chartItem) {
        var marking = chartItem.marking;
        marking.render(ctx, xaxes[0], yaxes[0], plotOffset);
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
        for (var r in chartRows) {
            var row = chartRows[r];
            var index = row.rowIndex;

            var yValue = yaxes[0].p2c(index - 0.5);

            drawSeparateLine(yValue, xStart, xEnd);

            yValue = yaxes[0].p2c(index + 0.5);
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
        initEventHandler();
    }

    function initEventHandler() {
        eventHandler = new IFL.Util.EventHandler(['mouseover', 'mouseout', 'mouseclick']);
    }

    function registerHandler(eventName, handler) {
        eventHandler.registerHandler(eventName, handler);
    }

    function notifyHandlers(eventName, item, options) {
        eventHandler.notifyHandlers(eventName, item, options);
    }

    function plotOver(event, pagePos, canvasPos) {
        var item = findNearByChartItem(canvasPos.x, canvasPos.y)
        if (curOverItem && curOverItem != item) {
            //console.info('mouse out');
            notifyHandlers('mouseout', curOverItem, pagePos);
        }
        if (item && curOverItem != item) {
            //console.info('mouse over');
            notifyHandlers('mouseover', item, pagePos);
        }

        curOverItem = item;
    }

    function refreshPlot() {
        if (plot) {
            $("#" + options.containerId).empty();
            delete plot;
        }

        plot = $.plot($("#" + options.containerId), ganttData, ganttOptions);

        xaxes = plot.getXAxes();
        yaxes = plot.getYAxes();

        plotOffset = plot.getPlotOffset();
        octx = plot.octx();
        ctx = plot.ctx();
        tctx = plot.tctx();

        drawChartItems();
    }

    function getPlot() {
        return plot;
    }

    function setGanttOptions(options) {
        ganttOptions = options;
    }

    function findNearByChartItem(mouseX, mouseY) {
        var mx = xaxes[0].c2p(mouseX);
        var my = yaxes[0].c2p(mouseY);
        for (var i = 0; i < chartItems.length; i++) {
            var item = chartItems[i];

            if (isMouseInChartItem(mx, my, item)) {
                return item;
            }
        }

        return null;
    }

    function isMouseInChartItem(mx, my, chartItem) {
        var marking = chartItem.marking;

        if (marking.isMouseInMarking(mx, my)) {
            return true;
        }

        return false;
    }

    function highlightChartItem(item, isHighlight) {
        //debugger;
        var marking = item.marking;
        marking.highlight(octx, xaxes[0], yaxes[0], plotOffset, isHighlight, 3);

        if (isHighlight && !item.isHighlighted) {
            highlightedChartItems.push(item);
            item.isHighlighted = true;
        } else {
            for (var i = 0; i < highlightedChartItems.length; i++) {
                var chartItem = highlightedChartItems[i];
                if (chartItem == item) {
                    highlightedChartItems.splice(i, 1);
                    item.isHighlighted = false;
                    break;
                }
            }
        }
    }

    function getChartItems() {
        return chartItems;
    }

    function getGanttOptions() {
        return ganttOptions;
    }

    function getCurrentOverItem() {
        return curOverItem;
    }

    return {
        refreshPlot: refreshPlot,
        addRow: addChartRow,
        addItem: addItem,
        highlightChartItem: highlightChartItem,
        registerHandler: registerHandler,
        reset: reset,
        getChartItems: getChartItems,
        drawChartItems: drawChartItems,
        drawLine: drawLine,
        getGanttOptions: getGanttOptions,
        getCurrentOverItem: getCurrentOverItem
    }


}


