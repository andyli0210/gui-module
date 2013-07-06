IFL.Config.PropertyConfigPanel = function(_options) {
    var domainListEditor;
    var options;
    init();
    initHandlers();
    
    function init() {
        options = {
            entityTypes: ['Consignment', 'Vehicle'],
            valueTypes: ['String', 'Integer'],
            listControlOptions: {
                listOptions: {
                    itemPerPage: 5,
                    keyColWidth: {
                        id: '10%',
                        title: '35%',
                        base: '35%',
                        type: '20%'
                    }
                },
                keyTitleMapping:{
                    id: 'ID',
                    title: 'Title',
                    base: 'Entity',
                    type: 'Type'
                },
                panelOptions: null  
            },        
            containerPanelOptions: {
                title: 'Property Config',
                width: 800
            },
            editPopupOptions: {
                popupOptions: {
                    title: 'add/edit property' 
                },
                tableOptions: {
                    nameMapping: {
                        //id: 'ID',
                        title: 'Title',
                        base: 'Entity',
                        type: 'Type'
                    }
                }
            },
            emptyDomain: null,
            deleteConfirmOptions: {
                title: 'Delete Property',
                message: 'Do you want to delete this property'
            }
        }
        
        $.extend(true, options, _options);
        
        domainListEditor = new IFL.Widget.DomainListEditor(options);
    }
    
    function initHandlers() {
        var editPopup = domainListEditor.getEditPopup();
        editPopup.registerHandler('show', function() {
            var domainTable = editPopup.getDomainTable();
            domainTable.changeFieldToDropdown('base',options.entityTypes);
            domainTable.changeFieldToDropdown('type',options.valueTypes);
        })
    }
    
    function getContainer() {
        return domainListEditor.getContainer();
    }
    
    function setProperties(properties) {
        domainListEditor.setItems(properties);
        domainListEditor.refresh();
    }
    
    function getProperties() {
        return domainListEditor.getListControlPanel().getItems();
    }
    
    return {
        getContainer: getContainer,
        setProperties: setProperties,
        getProperties: getProperties
    }
}


