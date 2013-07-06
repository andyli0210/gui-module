IFL.Config.CommodityConfigPanel = function(_options) {
    var domainListEditor;
    var options;
    init();
    initHandlers();
    
    function init() {
        options = {
            listControlOptions: {
                listOptions: {
                    itemPerPage: 5,
                    keyColWidth: {
                        id: '10%',
                        title: '45%',
                        unitWhole: '45%'
                    }
                },
                keyTitleMapping:{
                    id: 'ID',
                    title: 'Title',
                    unitWhole: 'Unit Whole',
                    load: 'Load Time',
                    unload: 'Unload Time'
                },
                panelOptions: null  
            },        
            containerPanelOptions: {
                title: 'Commodity Config',
                width: 800
            },
            editPopupOptions: {
                popupOptions: {
                    title: 'add/edit commodity' 
                },
                tableOptions: {
                    nameMapping: {
                        //id: 'ID',
                        title: 'Title',
                        unitWhole: 'Unit Whole',
                        load: 'Load Time',
                        unload: 'Unload Time'
                    }
                }
            },
            emptyDomain: null,
            deleteConfirmOptions: {
                title: 'Delete commodity',
                message: 'Do you want to delete this commodity'
            }
        }
        
        $.extend(true, options, _options);
        
        domainListEditor = new IFL.Widget.DomainListEditor(options);
    }
    
    function initHandlers() {
    }
    
    function getContainer() {
        return domainListEditor.getContainer();
    }
    
    function setCommodities(commodities) {
        domainListEditor.setItems(commodities);
        domainListEditor.refresh();
    }
    
    function getCommodities() {
        return domainListEditor.getListControlPanel().getItems();
    }
    
    return {
        getContainer: getContainer,
        setCommodities: setCommodities,
        getCommodities: getCommodities
    }
}


