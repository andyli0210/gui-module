IFL.RouteGeo.GeoGrid = function(_options) {
    var options;
    
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var lastSelectedRow;
    
    var container = $('#' + options.containerId);
    
    if (!container) {
        alert('Can not find container: ' + options.containerId + ' for Geo Grid !');
        console.error('Can not find container: ' + options.containerId + ' for Geo Grid !');
        return null;
    }
    
    container.jqGrid(options).navGrid(options.pager,{
        edit:false,
        add:false,
        del:false
    });
    
    var eventHandler = new IFL.Util.EventHandler(['clickRow']);
    
    function initDefaultOptions() {
        options = {
            url: Config.geoServerUrl + '/get',
            datatype: 'json',
            colNames:['ID','Customer Name','Address', 'Suburb','State','Postcode','Lat/Lon', 'Status', 'Run Number', 'Stop Number'],
            colModel :[ 
            {
                name:'id', 
                width:40
            },
            {
                name: 'custName',
                width: 100
            },
            {
                name:'address', 
                width:100
            }, 
            {
                name:'suburb', 
                width:60
            }, 
            {
                name:'state', 
                width:25
            }, 
            {
                name:'postcode', 
                width:50
            //align:'right'
            }, 
            {
                name:'latlon', 
                width:100 
                //sortable:false
            },
            {
                name:'status', 
                width:30,
                formatter: statusFomatter
                //sortable:false
            },
            {
                name:'runNum', 
                width:40 
                //sortable:false
            },
            {
                name:'stopNum', 
                width:40
                //sortable:false
            }
            ],
            pager: '#pager',
            pgtext : "Page {0} of {1}",
            recordtext: "View {0} - {1} of {2}",
            rowNum:5,
            rowList:[5,10,20,30],
            // sortname: 'invid',
            //            sortorder: 'desc',
            viewrecords: true,
            caption: 'Geo Addresses',
            autowidth: true,
            forceFit: true,
            xmlReader: { 
                root:"gridResult", 
                row:"row",
                page:"gridResult>currentpage", 
                total:"gridResult>totalpages", 
                records:"gridResult>totalrecords",
                repeatitems:false,
                id : "id"
            },
            jsonReader : {
                root: "entries",
                page: "currentPage",
                total: "totalPage",
                records: "totalRecords",
                repeatitems: false,
                id: "id"
            },
            onSelectRow: function(rowId, status) {
                console.info('select row: ' + rowId + ", status: " + status);
                lastSelectedRow = rowId;
                if (status) {
                    notifyHandlers('clickRow', rowId);
                }
            },
            loadComplete: function(data) {
                //highlight the selected row if it is in current page
                container.jqGrid('setSelection', lastSelectedRow, false);
            }
        }
    }
    
    function clientFunc(postdata) {
        jQuery.ajax({
            url: 'gridData.xml',
            //data:postdata,
            dataType:"xml",
            complete: function(xmldata,stat){
                if(stat=="success") {
                    var thegrid = jQuery("#list")[0];
                    thegrid.addXmlData(xmldata.responseXML);
                }
            }
        });
    }
    
    function registerHandler(eventName, handler) {
        eventHandler.registerHandler(eventName, handler);
    }
    
    function notifyHandlers(eventName, item, options) {
        eventHandler.notifyHandlers(eventName, item, options);
    }
    
    function statusFomatter(cellvalue, options, rowObject) {
        var cell_color = '';
        var font_color = '';
        
        switch(cellvalue) {
            case 'SELECT': {cell_color = 'yellow'; font_color = 'blue'; break;}
            case 'RESOLVED': {cell_color = 'lime'; font_color = 'blue'; break;}
            case 'UNRESOLVED': {cell_color = 'red'; font_color = 'wheat'; break;}
        }
        
        var formated_status = '<div style="font-weight:bold; text-align: center;background-color:' + cell_color +'; color:' + font_color+ '">' + cellvalue + '</div>';
        
        return formated_status;
    }
    
    function refresh() {
        container.trigger("reloadGrid");
        
        if (lastSelectedRow)
            container.jqGrid('setSelection', lastSelectedRow, false);
    }
    
    function updateLatLon(latlon) {
        var latlonData = latlon.lat +  ", " + latlon.lon;
        container.jqGrid('setCell', lastSelectedRow, 'latlon', latlonData);
    }
    
    function updateStatus(status) {
        container.jqGrid('setCell', lastSelectedRow, 'status', status);
    }
    
    return {
        registerHandler: registerHandler,
        refresh: refresh,
        updateLatLon: updateLatLon,
        updateStatus: updateStatus
    }
}


