IFL.CTS.CustomerListTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var domainListTable;
    
    init();
    function init() {
        domainListTable = new IFL.Widget.DomainListTable(options.keyTitleMapping, options); 
    }
    
    function initDefaultOptions() {
        options = {
            keyTitleMapping: {
                requestId: 'Request ID',
                id: 'Customer ID',
                custName: 'Customer Name',
                //custAddress: 'Customer Address',
                timeStart: 'Time Start',
                timeFinish: 'Time Finish',
                serviceDuration: 'Service Duration(mins)'
            }
        }
    }
    
    function getContainer() {
        return domainListTable.getContainer();
    }
    
    function setCustomers(customers) {
        domainListTable.setItems(customers);
        domainListTable.refresh();
    }
    
    return {
        getContainer: getContainer,
        setCustomers: setCustomers
    }
}


