IFL.CTS.TimeCheckerChart = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var containerTable;
    var contentTable;
    var line;
    
    init();
    
    function initDefaultOptions() {
        options = {
            colTitles: {
                routeId: 'ROUTE#',
                allowedDuration: 'ALLOWED DURATION',
                actDuration: 'ACTUAL DURATION',
                numOfViolation: 'NUMBER OF VIOLATIONS',
                totalDuration: ''
            },
            colWidth: {
                routeId: 6,
                allowedDuration: 8,
                actDuration: 8,
                numOfViolation: 8,
                totalDuration: 70
            },
            contentTableWidth: 1500,
            contentTableHeight: 500,
            maxDuration: 48 * 60,
            standardDuration: 12 * 60
        }
        
        initColPixelWidth();
    }
    
    function initColPixelWidth() {
        var routeIdWidth = options.contentTableWidth * options.colWidth.routeId / 100;
        var allowedDurationWidth = options.contentTableWidth * options.colWidth.allowedDuration / 100;
        var actDurationWidth = options.contentTableWidth * options.colWidth.actDuration / 100;
        var numOfViolationWidth = options.contentTableWidth * options.colWidth.numOfViolation / 100;
        var totalDuration = options.contentTableWidth * options.colWidth.totalDuration / 100;
        
        options.colPixelWith = {
            routeIdWidth: routeIdWidth,
            allowedDurationWidth: allowedDurationWidth,
            actDurationWidth: actDurationWidth,
            numOfViolationWidth: numOfViolationWidth,
            totalDurationWidth: totalDuration
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
    
    function initFoot() {
        var footer = $('<tfoot></tfoot>');
        var footRow = $('<tr></tr>').appendTo(footer);
        var footCell = $('<td colspan="5"></td>').appendTo(footRow);
        
        var footTable = $('<table></table>').css({
            width: options.contentTableWidth
        }).appendTo(footCell);
        
        var ticksRow = $('<tr></tr>').appendTo(footTable);
        
        var emptyCell = $('<td></td>').css({
            width: options.colPixelWith.routeIdWidth + options.colPixelWith.allowedDurationWidth + options.colPixelWith.actDurationWidth + options.colPixelWith.numOfViolationWidth - 2
        }).appendTo(ticksRow);
        
        var ticksCell = $('<td></td>').css({
            // width: options.colPixelWith.utilisationWidth,
            //'padding-top': 5,
            'font-size': '0.7em'
        }).appendTo(ticksRow);
        
        initTicks(1, 48, options.colPixelWith.totalDurationWidth, ticksCell);
        ticksCell.append('<div>HOURS</div>');
        footer.appendTo(containerTable);
    }
    
    function initTicks(interval, max, totalWidth, ticksDiv) {
        var tickAmounts = max/interval;
        var divWidth = totalWidth / tickAmounts;
        
        for (var i=0; i<tickAmounts; i++) {
            var tickDiv = getTickDiv(i*interval, divWidth, max);
            ticksDiv.append(tickDiv);
        }
    }
    
    function getTickDiv(tickNum, divWidth, max) {
        var div = $('<div></div>').css({
            'text-align': 'center',
            width: divWidth,
            display: 'inline-block'
        });
        
        if (tickNum == 0) {
            div.css({
                'text-align': 'left',
                width: divWidth/2
            });
        } 
        
        if (tickNum == max) {
            div.css({
                'text-align': 'right',
                width: divWidth/2
            });
        }
        
        div.append(tickNum);
        return div;
    }
    
    function initContentTable() {
        var contentContainer = $('<div></div>').css({
            height: options.contentTableHeight,
            width: '100%',
            //diplay: 'inline-block',
            overflow: 'auto'
        })
        
        //line = getVerticalLine(options.standardDuration);
        //contentContainer.append(line);
        
        contentTable = $('<table></table>').css({
            'border-collapse': "collapse",
            width: options.contentTableWidth,
            display: 'inline-block'
        }).appendTo(contentContainer);
        
        var tbody = $('<tbody></tbody>');
        var contentTd = $('<td colspan="5"></td>').append(contentContainer);
        var contentRow = $('<tr></tr>').append(contentTd);
        
        tbody.append(contentRow);
        
        containerTable.append(tbody);
        
    }
     
    function setRoutes(routes) {
        for (var r in routes) {
            var route = routes[r];
            var row = getRow(route);
            
            contentTable.append(row);
        }
        
        //line.height(contentTable.height());        
    }
    
    function getTitleRow() {
        var titleRow = getRow(options.colTitles);
        $('td', titleRow).css('border', 'none');
        
        return titleRow;
    }
    
    function getRow(vehicle) {
        var routeIdCell = $('<td></td>').css({
            width: options.colPixelWith.routeIdWidth,
            borderRight: 'solid 1px',
            textAlign: 'center'
        });
        
        var allowedDurationCell = $('<td></td>').css({
            width: options.colPixelWith.allowedDurationWidth,
            borderRight: 'solid 1px',
            textAlign: 'center'
        });
        
        var actDurationCell = $('<td></td>').css({
            width: options.colPixelWith.actDurationWidth,
            borderRight: 'solid 1px',
            textAlign: 'center'
        });
        
        var numOfViolationCell = $('<td></td>').css({
            width: options.colPixelWith.actDurationWidth,
            borderRight: 'solid 1px',
            textAlign: 'center'
        });
        
        var totalDurationCell = $('<td></td>').css({
            width: options.colPixelWith.totalDurationWidth,
            'padding-top': 3,
            'padding-bottom': 3
            //'padding-left': 5
        });
        
        routeIdCell.append(vehicle.routeId);
        allowedDurationCell.append(vehicle.allowedDuration);
        actDurationCell.append(vehicle.actDuration);
        numOfViolationCell.append(vehicle.numOfViolation);
        
        if (vehicle.travel || vehicle.service || vehicle.load) {
            var bar = getDurationBar(vehicle);
            bar.attr('title', vehicle.dayRouteId);
            
            totalDurationCell.append(bar);
            
        }
        
        var row = $('<tr></tr>').append(routeIdCell).append(allowedDurationCell).append(actDurationCell).append(numOfViolationCell).append(totalDurationCell);
        
        var actTime = getTimeMins(vehicle.actDuration);
        var allowedTime = getTimeMins(vehicle.allowedDuration);
        if (vehicle.numOfViolation > 0) {
            row.css({
                'background-color': '#C00000',
                color: 'white'
            })
        }
        
        return row;
    }
    
    function getDurationBar(durations) {
        var travelTime = durations.travel;
        var serviceTime = durations.service;
        var loadTime = durations.load;
          
        var travelTimeBar = getTimeBar(travelTime);
        var serviceTimeBar = getTimeBar(serviceTime);
        var loadTimeBar = getTimeBar(loadTime);
        
        var bar = $('<div></div>').append(travelTimeBar).append(serviceTimeBar).append(loadTimeBar);
        
        return bar;
    }
    
    function getTimeBar(time) {
        var mins = getTimeMins(time);
        
        var barWidth = options.colPixelWith.totalDurationWidth * ( mins / options.maxDuration);
        
        var timeBar = $('<div></div>').css({
            border: 'solid 1px',
            width: barWidth,
            textAlign: 'center',
            display: 'inline-block'
        }).append(time);
        
        return timeBar;
    }
    
    function getTimeMins(time) {
        var times = time.split(":");
        
        var hours = parseInt(times[0]);
        var min = parseInt(times[1]);
        
        var mins = hours * 60 + min;
        
        return mins
    }
    
    function getVerticalLine(standardDuration) {
        var left = options.colPixelWith.routeIdWidth + options.colPixelWith.allowedDurationWidth + options.colPixelWith.actDurationWidth;
        
        var utilisationLeft =  options.colPixelWith.totalDurationWidth * standardDuration / options.maxDuration;
        
        var bar = $('<div></div>').css({
            'background-color': 'red',
            width: 1,
            height: options.contentTableHeight,
            display: 'inline-block',
            position: 'relative',
            left: left + utilisationLeft + 2
        });
        
        return bar;
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
        setRoutes: setRoutes
    }
}