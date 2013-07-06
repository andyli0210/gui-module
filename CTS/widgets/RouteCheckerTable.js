IFL.CTS.RouteCheckerTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var containerTable;
    var contentTable;
    
    init();
    
    function initDefaultOptions() {
        options = {
            contentTableWidth: 1000,
            contentTableHeight: 500
        }
    }
    
    function init() {
        var containerTableWidth = options.contentTableWidth + 30
        containerTable = $('<table width="' + containerTableWidth + 'px"></table>').addClass("ui-widget-content");
        
        initHeader();
        initContentTable();
    }
    
    function initHeader() {
        var titleRow = getTitleRow();
        var head = $('<thead></thead>').append(titleRow);
        
        containerTable.append(head);
    }
    
    function getTitleRow() {
        var routeIdCell = $('<td align="center">ROUTE#</td>').width('20%');
        var missedWindowCell = $('<td>MISSED TIME WINDOWS</td>').width('65%');
        var displayLinkCell = $('<td></td>').width('15%');
        
        var titleRow = $('<tr></tr>').append(routeIdCell).append(missedWindowCell).append(displayLinkCell);
        
        return titleRow;
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
        var contentTd = $('<td colspan="3"></td>').append(contentContainer);
        var contentRow = $('<tr></tr>').append(contentTd);
        
        tbody.append(contentRow);
        
        containerTable.append(tbody);
    }
    
    function addRoute(route) {
        var routeCheckerItem = new IFL.CTS.RouteCheckerItem(route,{width: options.contentTableWidth});
        
        var row = $('<tr></tr>').appendTo(contentTable);
        var cell = $('<td></td>').append(routeCheckerItem.getContainer()).appendTo(row);
    }
    
    function setRoutes(routes) {
        contentTable.empty();
        
        for (var r in routes) {
            var route = routes[r];
            addRoute(route);
        }
    }
    
    function getContainer() {
        return containerTable;
    }
    
    return {
        getContainer: getContainer,
        setRoutes: setRoutes
    }
}