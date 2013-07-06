IFL.RouteGeo.AddressDetailsWidget = function() {
    
    var domainTableOptions;
    var folderWidgetOptions;
    var domainTable;
    var buttonWidget;
    var checkboxGroup;
    var folderWidget;
    var eventHandler;
    
    initOptions();
    
    init();
    initHandlers();
    
    function init() {
        folderWidget = new IFL.Widget.FolderWidget(folderWidgetOptions);
        buttonWidget = new IFL.Widget.ButtonPanel();
        
        checkboxGroup = new IFL.Widget.CheckboxGroup('matchroutecheckgroup', ['matches', 'route'], ['matches'], false, true);
        checkboxGroup.getContainer().buttonset();
        checkboxGroup.getContainer().buttonset('disable');
        
        eventHandler = new IFL.Util.EventHandler(['displayMatch','displayRoute']);
        
        folderWidget.setContent(buttonWidget);
        buttonWidget.addButton(checkboxGroup.getContainer());
        buttonWidget.getPositionTd('right').css('width', '50%');
        
        setAddress(null);
    }
    
    function initHandlers() {
        checkboxGroup.registerChangeHandler(function(item, isSelect) {
            if (item == 'matches') {
                eventHandler.notifyHandlers('displayMatch', null, {
                    isSelect: isSelect
                });
            } else {
                eventHandler.notifyHandlers('displayRoute', null, {
                    isSelect: isSelect
                });
            }
        });
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    function initOptions() {
        domainTableOptions = {
            nameMapping: {
                id: 'ID',
                status: 'Status',
                runNum: 'Run No.',
                stopNum: 'Stop No.',
                lat: 'Latitude',
                lon: 'Longtitude'
            },
            showMappingOnly: true
        }
        
        folderWidgetOptions = {
            title: 'Address Datails'
        }
    }
    
    function getContainer() {
        return folderWidget.getContainer();
    }
    
    function setAddress(geoLocation) {
        var addressDetailDomain = {
            id: '',
            status: '',
            runNum: '',
            stopNum: '',
            lat: '',
            lon: ''
        }
        
        if (geoLocation) {
            addressDetailDomain = {
                id: geoLocation.id,
                status: geoLocation.status,
                runNum: geoLocation.criteria ? geoLocation.criteria.run : '',
                stopNum: geoLocation.criteria ? geoLocation.criteria.stop : '',
                lat: (geoLocation.lat && geoLocation.lat > -999) ? geoLocation.lat.toFixed(6) : '',
                lon: (geoLocation.lon && geoLocation.lon > -999) ? geoLocation.lon.toFixed(6) : ''
            }
        
            checkboxGroup.getContainer().buttonset('enable');
        } else {
            checkboxGroup.getContainer().buttonset('disable');
        }
        
        domainTable = new IFL.Widget.DomainTable(addressDetailDomain, domainTableOptions);
        updateStatusColor(addressDetailDomain.status);
        buttonWidget.setContent(domainTable);
        
        checkboxGroup.setSelectedItems(['matches'], true);
        checkboxGroup.setSelectedItems(['route'], false);
        checkboxGroup.getContainer().buttonset('refresh');
    }
    
    function updateLocation(lonlat) {
        var geoLocation = domainTable.getDomain();
        
        if (geoLocation) {
            geoLocation.lon = parseFloat(lonlat.lon).toFixed(6);
            geoLocation.lat = parseFloat(lonlat.lat).toFixed(6);
        }
        
        domainTable.refresh();
        updateStatusColor(geoLocation.status);
    }
    
    function getGeoLocation() {
        var geoLocation = domainTable.getDomain();
        
        return geoLocation;
    }
    
    function updateStatus(status) {
        var geoLocation = getGeoLocation();
        geoLocation.status = status;
        refresh();
        updateStatusColor(status);        
    }
    
    function updateStatusColor(status) {
        var cell_color = '';
        var font_color = '';
        
        switch(status) {
            case 'SELECT': {
                
                cell_color = 'yellow';
                font_color = 'blue';
                break;
            }
            case 'RESOLVED': {
                
                cell_color = 'lime';
                font_color = 'blue';
                break;
            }
            case 'UNRESOLVED': {
                
                cell_color = 'red';
                font_color = 'wheat';
                break;
            }
        }
        
        var rowKeyMapping = domainTable.getRowKeyMapping();
        var row = rowKeyMapping.status;
        
        var td = $('td:nth-child(2)', row);
        td.css({
            background: cell_color,
            color: font_color
        });
    }
    
    function refresh() {
        domainTable.refresh();
    }
    
    function isShowRoute() {
        var selectedItems = checkboxGroup.getSelectedItems();
        for (var s in selectedItems) {
            if (selectedItems[s] == 'route') {
                return true;
            }
        }
        return false;
    }
    
    return {
        getContainer: getContainer,
        setAddress: setAddress,
        updateLocation: updateLocation,
        updateStatus: updateStatus,
        refresh: refresh,
        registerHandler: registerHandler,
        isShowRoute: isShowRoute
    }
}