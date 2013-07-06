function DockPanel(_options) {
    var dListTable;
    
    var options = {
        keyTitleMapping: {
            name: 'Name',
            truckType: 'Truck Type',
            quantity: 'Quantity'
        },
        keyFieldMapping: {
            truckType: {
                value: [], 
                type: 'checkbox'
            }
        },
        listOptions: {
            keyColWidth: {
                name: '30%',
                truckType: '30%',
                quantity: '30%'
            }
        },
        containerPanelOptions: {
            title: 'Docks'
        },
        getAvlTruckTypes: function() {
            return [];
        }
    }
    
    $.extend(true, options, _options);
    
    init();
    function init() {
        dListTable = new IFL.Widget.DynamicListTable(options);
        
        dListTable.registerHandler('editTd', function(domain, eventoptions) {
            var key = eventoptions.key;
            
            if (key == 'truckType') {
                var types = options.getAvlTruckTypes();
                setAvalTruckTypes(types);
            }
        })
    }
    
    function getContainer() {
        return dListTable.getContainer();
    }
    
    function setAvalTruckTypes(types) {
        dListTable.setKeyFieldMapping({
            truckType: {
                value: types, 
                type: 'checkbox'
            }
        });
    }
    
    function getDocks() {
        var docks = dListTable.getItems();
        return docks;
    }
    
    return {
        getContainer: getContainer,
        setAvalTruckTypes: setAvalTruckTypes,
        getDocks: getDocks
    }
}


