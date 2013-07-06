IFL.CTS.RouteCheckerChart = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var containerTable;
    var contentTable;
    var depotCell;
    
    init();
    
    function initDefaultOptions() {
        options = {
            colWidth: {
                taskId: 20,
                durations: 80
            },
            contentTableWidth: 900,
            contentTableHeight: 100,
            minTimeMins: 12 * 60,
            maxTimeMins: 48 * 60
        }
        
        initColPixelWidth();
    }
    
    function initColPixelWidth() {
        var taskIdWidth = options.contentTableWidth * options.colWidth.taskId / 100;
        var durationsWidth = options.contentTableWidth * options.colWidth.durations / 100;
        
        options.colPixelWith = {
            taskIdWidth: taskIdWidth,
            durationsWidth: durationsWidth
        }
    }
    
    function init() {
        var containerTableWidth = options.contentTableWidth + 30
        containerTable = $('<table width="' + containerTableWidth + 'px"></table>').addClass("ui-widget-content");
        
        initHeader();
        initContentTable();
        initFoot();
    }
    
    function initHeader() {
        var titleRow = getTitleRow();
        var head = $('<thead></thead>').append(titleRow);
        
        containerTable.append(head);
    }
    
    function setDepot(depot) {
        depotCell.text(depot);
    }
    
    function initFoot() {
        var footer = $('<tfoot></tfoot>');
        var footRow = $('<tr></tr>').appendTo(footer);
        var footCell = $('<td colspan="2"></td>').appendTo(footRow);
        
        var footTable = $('<table></table>').css({
            width: options.contentTableWidth,
            'border-spacing': 0
        }).appendTo(footCell);
        
        var ticksRow = $('<tr></tr>').appendTo(footTable);
        
        var emptyCell = $('<td></td>').css({
            width: options.colPixelWith.taskIdWidth - 4
        }).appendTo(ticksRow);
        
        var ticksCell = $('<td></td>').css({
            //width: options.colPixelWith.utilisationWidth,
            //'padding-top': 5,
            'font-size': '0.7em'
        }).appendTo(ticksRow);
        
        initTicks(options.colPixelWith.durationsWidth, ticksCell);
        
        //ticksCell.append('<div>% UTILISATION</div>');
        footer.appendTo(containerTable);
    }
    
    function initTicks(totalWidth, ticksDiv) {
        var endTick = 17;
        var startTick = 4
        var divWidth = totalWidth / (endTick - startTick - 1);
        
        for (var i=4; i<endTick; i++) {
            var tickDiv = getTickDiv(i, divWidth);
            ticksDiv.append(tickDiv);
        }
    }
    
    function getTickDiv(tickNum, divWidth) {
        var div = $('<div></div>').css({
            'text-align': 'center',
            width: divWidth,
            display: 'inline-block'
        });
        
        if (tickNum == 4) {
            div.css({
                'text-align': 'left',
                width: divWidth/2
            });
        } 
        
        if (tickNum == 16) {
            div.css({
                'text-align': 'right',
                width: divWidth/2
            });
        }
        
        div.append((tickNum*3) % 24 + ':00');
        return div;
    }
    
    function initContentTable() {
        var contentContainer = $('<div></div>').css({
            height: options.contentTableHeight,
            width: '100%',
            overflow: 'auto'
        })
        
        contentTable = $('<table></table>').css({
            'border-collapse': "collapse",
            width: options.contentTableWidth,
            display: 'inline-block'
        }).appendTo(contentContainer);
        
        var tbody = $('<tbody></tbody>');
        var contentTd = $('<td colspan="2"></td>').append(contentContainer);
        var contentRow = $('<tr></tr>').append(contentTd);
        
        tbody.append(contentRow);
        
        containerTable.append(tbody);
        
    }
    
    function setDayTasks(tasks) {
        contentTable.empty();
        for (var t in tasks) {
            var task = tasks[t];
            
            var row = getRow(task);
            
            contentTable.append(row);
        }
    }
    
    function getTitleRow() {
        depotCell = $('<td></td>').width(options.colPixelWith.taskIdWidth);
        var emptyCell = $('<td></td>').width(options.colPixelWith.durationsWidth);
        depotCell.css({
            'border-bottom': '1px solid'
        })
        
        var titleRow = $('<tr></tr>').append(depotCell).append(emptyCell);
        
        return titleRow;
    }
    
    function getRow(task) {
        var taskIdCell = $('<td></td>').css({
            width: options.colPixelWith.taskIdWidth,
            //borderRight: 'solid 1px',
            textAlign: 'center'
        });
        
        var durationsCell = $('<td></td>').css({
            width: options.colPixelWith.durationsWidth,
            position: 'relative',
            'padding-top': 5,
            'padding-bottom': 5
        });
        
        taskIdCell.append(task.id);
        
        var bars = getDurationsBar(task);
        
        var barContainer = $('<div style="position: relative; top: -15px;"/>');
        barContainer.append(bars.serviceBar);
        barContainer.append(bars.visitBar);
        durationsCell.append(barContainer);
        
        var row = $('<tr height="30px"></tr>').append(taskIdCell).append(durationsCell);
        
        return row;
    }
    
    function getDurationsBar(durations) {
//        var serviceStart = getTimeMins(durations.serviceStart);
//        var serviceEnd = getTimeMins(durations.serviceEnd);
//        
//        var visitStart = getTimeMins(durations.visitEarliest);
//        var visitEnd = getTimeMins(durations.visitLatest);
        
        var serviceStart = durations.serviceStartMins;
        var serviceEnd = durations.serviceEndMins;
        
        var visitStart = durations.visitStartMins;
        var visitEnd = durations.visitEndMins;
        
        var serviceBar = getTimeBar(serviceStart, serviceEnd);
        var visitBar = getTimeBar(visitStart, visitEnd);
        
        var borderStyle = 'none';
        var top = 5;
        
        if (durations.isViolated) {
            borderStyle = '2px solid red';
            top = 3;
        }
        
//        if (visitStart < serviceStart || visitEnd > serviceEnd) {
//            borderStyle = '2px solid red';
//            top = 3;
//        }
        
        visitBar.css({
            'background-color': 'blue',
            border: borderStyle,
            top: top
        });
        
        var bars = {
            visitBar: visitBar,
            serviceBar: serviceBar
        }
        
        return bars;
    }
    
    function getTimeBar(start, end) {
        
        //in case it's an 'always' avaiable time window
        if (start < options.minTimeMins) {
            start = options.minTimeMins;
        }
        
        var barWidth = options.colPixelWith.durationsWidth * ((end- start)/ (options.maxTimeMins - options.minTimeMins));
        
        //in case it's to thin to show
        if (barWidth < 1) {
            barWidth = 1;
        }
        
        var left = options.colPixelWith.durationsWidth * ((start - options.minTimeMins)/ (options.maxTimeMins - options.minTimeMins));
        var bar = $('<div></div>').css({
            'background-color': '#C0C0C0',
            width: barWidth,
            top: 5,
            height: 20,
            position: 'absolute',
            left: left,
            display: 'inline-block'
        });
        
        return bar;
        
    }
    
    function getTimeMins(time) {
        var times = time.split(":");
        
        var hours = parseInt(times[0]);
        var min = parseInt(times[1]);
        
        var mins = hours * 60 + min;
        
        return mins
    }
    
    function getContainer() {
        return containerTable;
    }
    
    function clear() {
        containerTable.empty();
        init();
    }
    
    return {
        getContainer: getContainer,
        setDayTasks: setDayTasks,
        setDepot: setDepot
    }
}