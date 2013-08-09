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
    
    var dayOffset = 0;

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
                highlightColor: ''//'#009933'
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
                labelHeight: options.labelHeight,
                timeformat: '%H:%M'
            },
            yaxis: {
                minTickSize: options.minTickSize,
                labelWidth: 100,
                show: options.showYaxix,
                zoomRange: true,
                min: 0,
                max: 0,
                panRange: true,
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
        var earliestArriveTime = services[0].timeEarliest;//visit.timeEarliest;
        var leaveTime = services[0].timeEarliest + services[0].elapsedDuration * 60 * 1000;
        var latestStartTime = services[0].timeLatest;

        var request = services[0].refRequest;
        var timeWindow = request.windows.window[0];
        var timeWindowStart = timeWindow.timeStart + dayOffset;
        var timeWindowEnd = timeWindow.timeFinish + dayOffset;

        var softTimeWindowStart = timeWindowStart;
        var softTimeWindowEnd = timeWindowEnd;



        if (request.constraints) {
            var constraints = request.constraints.constraint;
            for (var i in constraints) {
                var constraint = constraints[i];

                if (constraint.name === 'max-tardiness' || constraint.name === 'max-earliness') {
                    var definition = constraint.definition;
                    var duration = parseInt($(definition).find('duration').text());

                    if (constraint.name === 'max-tardiness') {
                        softTimeWindowEnd += duration * 60 * 1000;
                    } else {
                        softTimeWindowStart -= duration * 60 * 1000;
                    }
                }
            }
        }


        return {
            earliestArriveTime: earliestArriveTime,
            leaveTime: leaveTime,
            latestStartTime: latestStartTime,
            timeWindowStart: timeWindowStart,
            timeWindowEnd: timeWindowEnd,
            softTimeWindowStart: softTimeWindowStart,
            softTimeWindowEnd: softTimeWindowEnd
        }
    }

    function getDepotVisitItem(visit, routeAvailability) {
        var earliestArriveTime = visit.timeEarliest;
        var leaveTime = visit.timeEarliest;
        var latestStartTime = visit.timeLatest;

        var timeWindowStart = routeAvailability.timeOpen + dayOffset;;
        var timeWindowEnd = routeAvailability.timeClose + dayOffset;;

        return {
            earliestArriveTime: earliestArriveTime,
            leaveTime: leaveTime,
            latestStartTime: latestStartTime,
            timeWindowStart: timeWindowStart,
            timeWindowEnd: timeWindowEnd,
            softTimeWindowEnd: timeWindowEnd,
            softTimeWindowStart: timeWindowStart
        };
    }

    function displayRoute(route, dayIndex) {
        
        dayOffset = (dayIndex?dayIndex:0) * 24 * 60 * 60 * 1000;
        //debugger;
        var visits = route.visits.visit;

        var preVisitItem;
        for (var i = 0; i < visits.length; i++) {
            var visit = visits[i];
            var visitItem;

            if (i > 0 && i < visits.length - 1) {
                visitItem = getVisitItem(visit);
            } else {
                var routeAvailability = route.vehicles.vehicle.refAvailability;
                visitItem = getDepotVisitItem(visit, routeAvailability);
            }
            //debugger;

            var index = i + 1;
            var locIds = visit.refLocation.id.split('-');
            var custId = locIds[1];
            visitItem.id = custId;
            visitItem.domain = visit;
            addVisitItemMarker(visitItem, index);

            var chartRow = {
                rowIndex: index,
                rowTitle: visitItem.id
            };
            addChartRow(chartRow);

            //previous visit should be under current one which has higher index
            if (preVisitItem) {
                addTravelLine(preVisitItem, visitItem, index - 1);
            }

            preVisitItem = visitItem;

            //console.info(i + ', ' + visitItem.id);
        }
        //debugger;
        refreshPlot();
    }

    function addTravelLine(startVisit, endVisit, startIndex) {
        var earlyStartTime = startVisit.leaveTime + options.UTC_offset;
        var earlyEndTime = endVisit.earliestArriveTime + options.UTC_offset;
        var endIndex = startIndex + 1;

        var style = {};
        $.extend(true, style, options.itemStyle);
        //create earliest travel line item marking
        var earliestTravelmarking = new IFL.GanttChart.Marking(earlyStartTime, earlyEndTime, startIndex, endIndex, '#009933', style.fillColor, style.highlightColor, 'line');
        var earliestTravelItem = {};
        earliestTravelItem.marking = earliestTravelmarking;

        chartItems.push(earliestTravelItem);
        ganttData.push({
            data: [[earlyStartTime, startIndex], [earlyEndTime, endIndex]]
        });

        //create latest travel line item marking
        var lastestStartTime = startVisit.latestStartTime + options.UTC_offset;
        var latestEndTime = endVisit.latestStartTime + options.UTC_offset;
        var latestTravelMarking = new IFL.GanttChart.Marking(lastestStartTime, latestEndTime, startIndex, endIndex, '#FF0000', style.fillColor, style.highlightColor, 'line');
        var lastestTravelItem = {};
        lastestTravelItem.marking = latestTravelMarking;
        chartItems.push(lastestTravelItem);

    }


    function addVisitItemMarker(visitItem, rowIndex) {
        //add soft time window bar
        var softTimeWindowItem = {
            id: visitItem.id,
            start: visitItem.softTimeWindowStart,
            end: visitItem.softTimeWindowEnd,
            rowIndex: rowIndex,
            //height: 0.1,
            style: {
                fillColor: '#FF9933', // '#FFFF99'
                borderColor: ''
            },
            domain: visitItem.domain
        };
        addItem(softTimeWindowItem);

        //add hard time window bar
        var timeTimeWindowItem = {
            id: visitItem.id,
            start: visitItem.timeWindowStart,
            end: visitItem.timeWindowEnd,
            rowIndex: rowIndex
        };
        addItem(timeTimeWindowItem);

        //add service duration bar
        var serviceItem = {
            id: visitItem.id,
            start: visitItem.earliestArriveTime,
            end: visitItem.leaveTime,
            rowIndex: rowIndex,
            height: 0.1,
            style: {
                fillColor: '#00FF00'
            }
        };
        addItem(serviceItem);
    }

    function showVisitPopup(visit, pagePos) {
        var services = visit.services.service;
        var service;
        var elapsedService;
        var timeEarliest;
        var timeLatest;
        var timeWindowStart;
        var timeWindowEnd;

        if (services && services.length > 0) {
            service = services[0];
            elapsedService = service.elapsedDuration;
            timeEarliest = formatDate(new Date(service.timeEarliest), 'HH:mm:ss');
            timeLatest = formatDate(new Date(service.timeLatest), 'HH:mm:ss');
            var task = service.refRequest;
            var timeWindow = task.windows.window[0];
            timeWindowStart = formatDate(new Date(timeWindow.timeStart), 'HH:mm:ss');
            timeWindowEnd = formatDate(new Date(timeWindow.timeFinish), 'HH:mm:ss');
        } else {
            elapsedService = 'N/A';
            timeEarliest = formatDate(new Date(visit.timeEarliest), 'HH:mm:ss');
            timeLatest = formatDate(new Date(visit.timeLatest), 'HH:mm:ss');
            timeWindowStart = 'N/A';
            timeWindowEnd = 'N/A';
        }

        var locIds = visit.refLocation.id.split('-');
        var custId = locIds[1];
        var locationId = visit.refLocation.id;
        var custName = visit.refLocation.pk || custId;

        var taskDomain = {
            taskId: custId,
            custName: custName,
            locationId: locationId,
            elapsedService: elapsedService,
            timeEarliest: timeEarliest,
            timeLatest: timeLatest,
            timeWindowStart: timeWindowStart,
            timeWindowEnd: timeWindowEnd
        }

        var contentTable = new IFL.Widget.DomainTable(taskDomain, {
            nameMapping: {
                taskId: 'Task ID',
                custName: 'Customer Name',
                locationId: 'Location ID',
                elapsedService: 'Service Duration (mins)',
                timeEarliest: 'Earliest Arrive Time',
                timeLatest: 'Latest Arrive Time',
                timeWindowStart: 'Time Window Start',
                timeWindowEnd: 'Time Window End'
            }
        })

        contentTable.getContainer().dialog({
            title: 'Visit Information',
            position: [pagePos.x, pagePos.y],
            width: 400,
            close: function() {
                contentTable.getContainer().dialog('destroy');
                contentTable = null;
            }
        });
    }

    function addItem(chartItem) {
        var start = chartItem.start + options.UTC_offset;
        var end = chartItem.end + options.UTC_offset;
        var rowIndex = chartItem.rowIndex;

        if (start != 0 && !start) {
            //debugger;
            console.error('Chart Item must have start: ' + chartItem.id);
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
            if (item && item.domain) {
                showVisitPopup(item.domain, pagePos);
                notifyHandlers('mouseclick', item, pagePos);
            }

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
            highlightChartItem(curOverItem, false);
            notifyHandlers('mouseout', curOverItem, pagePos);
        }
        if (item && curOverItem != item) {
            //console.info('mouse over');
            highlightChartItem(item, true);
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
        marking.highlight(octx, xaxes[0], yaxes[0], plotOffset, isHighlight, 3, '', '#009933');

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
        getCurrentOverItem: getCurrentOverItem,
        displayRoute: displayRoute
    }


}


