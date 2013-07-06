IFL.RouteGeo.AddressCriteriaWidget = function() {
    var bottuonPanelOptions;
    var domainTableOptions;
    var folderWidgetOptions;
    var folderWidget;
    var buttonPanel;
    var domainTable;
    var editButton;
    var searchButton;
    var iconSpan;
    
    var eventHandler = new IFL.Util.EventHandler(['Edit','Save','Search']);
    
    initOptions();
    init();
    
    setAddress(null);
    
    function initOptions() {
        domainTableOptions = {
            nameMapping: {
                street: 'Street',
                suburb: 'Suburb',
                state: 'State',
                postcode: 'Postcode'
            },
            showMappingOnly: true
        }
        
        folderWidgetOptions = {
            title: 'Address Criteria'
        }
        
        bottuonPanelOptions = {
        }
    }
    
    function init() {
        folderWidget = new IFL.Widget.FolderWidget(folderWidgetOptions);
        buttonPanel = new IFL.Widget.ButtonPanel();
        
        folderWidget.setContent(buttonPanel);
        initButtons();
    }
    
    function initButtons() {
        
        // init edit button
        editButton = $('<button>Edit</button>').button();
        editButton.click(function() {
            
            if (editButton.button('option','label') == 'Edit') {
                editButton.button({
                    label: 'Save'
                });
                domainTable.enableEdit();
                searchButton.button('disable');
                
            } else {
                editButton.button({
                    label: 'Edit'
                });
                domainTable.disableEdit();
                searchButton.button('enable');
                
                var searchDomain = domainTable.val();
                eventHandler.notifyHandlers('Save', searchDomain);
            }
        });
        buttonPanel.addButton(editButton);
        
        // init search button
        searchButton = $('<button>Search</button>').button();
        searchButton.click(function() {
            if (searchButton.button('option','label') == 'Search') {
                iconSpan.show();
                searchButton.button('disable');
                editButton.button('disable');
                
                eventHandler.notifyHandlers('Search');
            }
        })
        buttonPanel.addButton(searchButton);
        buttonPanel.getPositionTd('right').css('width', '50%');
        
        //init loading icon
        var loadingIcon = $('<img/>').attr({
            src: Config.imagePath + '/' + 'loader-small.gif'
        })
        
        iconSpan = $('<span/>').append(loadingIcon);
        buttonPanel.addButton(iconSpan, 'left');
        iconSpan.hide();
    }
    
    
    
    function reset() {
        editButton.button({
            label: 'Edit'
        });
        domainTable.disableEdit();
        setAddress(null);
        iconSpan.hide();
    }
    
    function getContainer() {
        return folderWidget.getContainer();
    }
    
    function setAddress(addressCriteria) {
        var domain = {
            street: '',
            suburb: '',
            state: '',
            postcode: ''
        }
        
        if (addressCriteria) {
            domain.street = addressCriteria.address;
            domain.suburb = addressCriteria.locality ? addressCriteria.locality.value : '';
            domain.state = addressCriteria.state ? addressCriteria.state.value : '';
            domain.postcode = addressCriteria.postcode ? addressCriteria.postcode.value : '';
            
            searchButton.button('enable');
            editButton.button('enable');
        } else {
            searchButton.button('disable');
            editButton.button('disable');
        }
        
        domainTable = new IFL.Widget.DomainTable(domain, domainTableOptions);
        buttonPanel.setContent(domainTable);
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    return {
        getContainer: getContainer,
        setAddress: setAddress,
        reset: reset,
        registerHandler: registerHandler
    }
}