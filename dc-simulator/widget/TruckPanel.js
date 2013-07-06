function TruckPanel(_options) {
    var dListTable;
    
    var options = {
        keyTitleMapping: {
            type: 'Type',
            capacity: 'Capacity',
            quantity: 'Quantity'
        },
        keyFieldMapping: {
            //prop2: ['option1', 'option2', 'option3']
        },
        listOptions: {
            keyColWidth: {
                type: '30%',
                capacity: '30%',
                quantity: '30%'
            }
        },
        containerPanelOptions: {
            title: 'Trucks'
        }
    }
    
    $.extend(true, options, _options);
    
    init();
    function init() {
        dListTable = new IFL.Widget.DynamicListTable(options);
    }
    
    function getContainer() {
        return dListTable.getContainer();
    }
    
    function getTrucks() {
        return dListTable.getItems();
    }
    
    return {
        getContainer: getContainer,
        getTrucks: getTrucks
    }
}


