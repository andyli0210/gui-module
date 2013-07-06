IFL.CTS.VolumeCheckerChart = function(_options) {
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
                productId: 'PRODUCT',
                capacity: 'CAPACITY',
                volume: 'VOLUME',
                utilisation: ''
            },
            colWidth: {
                routeId: 10,
                productId: 10,
                capacity: 10,
                volume: 10,
                utilisation: 60
            },
            contentTableWidth: 1000,
            contentTableHeight: 500,
            maxUtilisation: 160,
            standardUtilisation: 100
        }
        
        initColPixelWidth();
    }
    
    function initColPixelWidth() {
        var routeIdWidth = options.contentTableWidth * options.colWidth.routeId / 100;
        var productIdWidth = options.contentTableWidth * options.colWidth.productId / 100;
        var capacityWidth = options.contentTableWidth * options.colWidth.capacity / 100;
        var volumeWidth = options.contentTableWidth * options.colWidth.volume / 100;
        var utilisationWidth = options.contentTableWidth * options.colWidth.utilisation / 100;
        
        options.colPixelWith = {
            routeIdWidth: routeIdWidth,
            productIdWidth: productIdWidth,
            capacityWidth: capacityWidth,
            volumeWidth: volumeWidth,
            utilisationWidth: utilisationWidth
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
        var head = $('<thead width="900px"></thead>').append(titleRow);
        
        containerTable.append(head);
    }
    
    function initFoot() {
        var footer = $('<tfoot></tfoot>');
        var footRow = $('<tr></tr>').appendTo(footer);
        var footCell = $('<td colspan="5"></td>').appendTo(footRow);
        
        var footTable = $('<table></table>').css({
            width: '100%' //options.contentTableWidth
        }).appendTo(footCell);
        
        var ticksRow = $('<tr></tr>').appendTo(footTable);
        
        var emptyCell = $('<td></td>').css({
            width: options.colPixelWith.routeIdWidth + options.colPixelWith.productIdWidth + options.colPixelWith.capacityWidth + options.colPixelWith.volumeWidth - 2
        }).appendTo(ticksRow);
        
        var ticksCell = $('<td></td>').css({
            // width: options.colPixelWith.utilisationWidth,
            //'padding-top': 5,
            'font-size': '0.7em'
        }).appendTo(ticksRow);
        
        initTicks(10, options.maxUtilisation, options.colPixelWith.utilisationWidth, ticksCell);
        
        ticksCell.append('<div>% UTILISATION</div>');
        footer.appendTo(containerTable);
    }
    
    function initTicks(interval, max, totalWidth, ticksDiv) {
        var tickAmounts = max/interval;
        var divWidth = totalWidth / tickAmounts;
        
        for (var i=0; i<=tickAmounts; i++) {
            var tickDiv = getTickDiv(i*interval, divWidth);
            ticksDiv.append(tickDiv);
        }
    }
    
    function getTickDiv(tickNum, divWidth) {
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
        
        if (tickNum == options.maxUtilisation) {
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
            overflow: 'auto',
            position: 'relative'
        })
        
        line = getVerticalLine(options.standardUtilisation);
        contentContainer.append(line);
        
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
     
    function setRoutes(routes, standardUtilisation) {
        if (standardUtilisation) {
            options.standardUtilisation = standardUtilisation;
        }
        
        for (var r in routes) {
            var route = routes[r];
            addVehCapacityRow(contentTable, route)
        }
        
        // this has to be done after the Chart Container attached to the DOM
        line.height(contentTable.height());
    }
    
    function addVehCapacityRow(contentTable, route) {
        var vehProductCapacities = route.vehCapacities;
        
        var routeIdRowSpan = vehProductCapacities.length;
        for (var p in vehProductCapacities) {
            var productCapacity = vehProductCapacities[p];
            
            if (p>0) {
                routeIdRowSpan = false;
            } else {
                productCapacity.routeId = route.routeId;
            }
            
            var row = getRow(productCapacity, routeIdRowSpan);
            contentTable.append(row);
        }
        
    }
    
    function refreshTimeLineHeight() {
        line.height(contentTable.height());
    }
    
    function getTitleRow() {
        var titleRow = getRow(options.colTitles, 1);
        $('td', titleRow).css('border', 'none');
        
        return titleRow;
    }
    
    function getRow(vehicle, routeIdRowSpan) {
        
        var row = $('<tr></tr>');
        if (routeIdRowSpan) {
            var routeIdCell = $('<td></td>').css({
                width: options.colPixelWith.routeIdWidth,
                borderRight: 'solid 1px',
                textAlign: 'center'
            }).attr({
                rowSpan: routeIdRowSpan
            });
            routeIdCell.append(vehicle.routeId);
            row.append(routeIdCell);
        }
        
        var productCell = $('<td></td>').css({
            width: options.colPixelWith.productIdWidth,
            borderRight: 'solid 1px',
            textAlign: 'center'
        });
        
        var capacityCell = $('<td></td>').css({
            width: options.colPixelWith.capacityWidth,
            borderRight: 'solid 1px',
            textAlign: 'center'
        });
        
        var volumeCell = $('<td></td>').css({
            width: options.colPixelWith.volumeWidth,
            borderRight: 'solid 1px',
            textAlign: 'center'
        });
        
        var utilisationCell = $('<td></td>').css({
            width: options.colPixelWith.utilisationWidth,
            'padding-top': 5
        });
        
        productCell.append(vehicle.productId);
        capacityCell.append(vehicle.capacity);
        volumeCell.append(vehicle.volume);
        
        if (vehicle.utilisation) {
            var bar = getUtilisationBar(vehicle.utilisation);
            bar.attr('title', vehicle.dayRouteId);
            //bar.attr('title', 'testtest');
            utilisationCell.append(bar);
            
        // var standardLine = getVerticalLine(options.standardUtilisation);
        //utilisationCell.append(standardLine);
        } 
        
        row.append(productCell).append(capacityCell).append(volumeCell).append(utilisationCell);
        
        return row;
    }
    
    function getUtilisationBar(utilisation) {
        var barWidth = options.colPixelWith.utilisationWidth * utilisation / options.maxUtilisation;
        var bar = $('<div></div>').css({
            'background-color': '#C0C0C0',
            width: barWidth,
            height: 20,
            textAlign: 'center'
        //margin: 5
        }).append(utilisation + '%');
        
        if ( utilisation > options.standardUtilisation) {
            bar.css({
                'background-color': '#C00000',
                color: 'white'
            })
        }
        
        return bar;
    }
    
    function getVerticalLine(standardUtilisation) {
        var left = options.colPixelWith.routeIdWidth + options.colPixelWith.productIdWidth + options.colPixelWith.capacityWidth + options.colPixelWith.volumeWidth + 4;
        
        var utilisationLeft =  options.colPixelWith.utilisationWidth * standardUtilisation / options.maxUtilisation;
        //debugger;
        var bar = $('<div></div>').css({
            'background-color': 'red',
            top: 0,
            width: 1,
            bottom: 0,
            //height: options.contentTableHeight,
            display: 'inline-block',
            position: 'absolute',
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
        setRoutes: setRoutes,
        refreshTimeLineHeight: refreshTimeLineHeight
    }
}