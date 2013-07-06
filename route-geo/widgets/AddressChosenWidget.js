IFL.RouteGeo.AddressChosenWidget = function() {
    var bottuonPanelOptions;
    var domainTableOptions;
    var folderWidgetOptions;
    var folderWidget;
    var buttonPanel;
    var domainTable;
    
    initOptions();
    init();
    
    setAddress({});
    
    function initOptions() {
        domainTableOptions = {
            nameMapping: {
                street: 'Street',
                suburb: 'Suburb',
                state: 'State',
                postcode: 'Postcode'
//                latitude: 'Latitude',
//                longtitude: 'Longtitude'
            },
            showMappingOnly: true
        }
        
        folderWidgetOptions = {
            title: 'Address Chosen'
        }
        
        bottuonPanelOptions = {
        }
    }
    
    function init() {
        folderWidget = new IFL.Widget.FolderWidget(folderWidgetOptions);
        buttonPanel = new IFL.Widget.ButtonPanel();
        
        folderWidget.setContent(buttonPanel);
    }
    
    function getContainer() {
        return folderWidget.getContainer();
    }
    
    function setAddress(addressChosen) {
        var domain = {
            street: '',
            suburb: '',
            state: '',
            postcode: '',
            latitude: '',
            longtitude: ''
        }
        
        if (addressChosen) {
            var number = addressChosen.number ? addressChosen.number.value : (addressChosen.index ? addressChosen.index : '');
            var type = addressChosen.type ? addressChosen.type.value : '';
        
            domain.street = number + ' ' + (addressChosen.street ?  addressChosen.street.value : '') + ' ' + type;
            domain.suburb = addressChosen.locality ? addressChosen.locality.value : '';
            domain.state = addressChosen.state ? addressChosen.state.value : '';
            domain.postcode = addressChosen.postcode ? addressChosen.postcode.value : '';
            domain.latitude = addressChosen.geocode? addressChosen.geocode.lat : '';
            domain.longtitude = addressChosen.geocode ? addressChosen.geocode.lon : '';
        } else {
            buttonPanel.setContent('');
            return;
        }
        
        domainTable = new IFL.Widget.DomainTable(domain, domainTableOptions);
        buttonPanel.setContent(domainTable);
    }
    
    return {
        getContainer: getContainer,
        setAddress: setAddress
    }
}