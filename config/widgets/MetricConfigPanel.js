IFL.Config.MetricConfigPanel = function(_options) {
    var domainListEditor;
    var options;
    init();
    initHandlers();
    
    function init() {
        options = {
            metricTypes: [],
            listControlOptions: {
                listOptions: {
                    itemPerPage: 5,
                    keyTitleMapping:{
                        id: '10%',
                        type: '45%',
                        weighting: '45%'
                    }
                },
                keyTitleMapping:{
                    id: 'ID',
                    type: 'Type',
                    weighting: 'Weighting'
                },
                panelOptions: null  
            },        
            containerPanelOptions: {
                title: 'Metric Config',
                width: 800
            },
            editPopupOptions: {
                popupOptions: {
                    title: 'add/edit metric' 
                },
                tableOptions: {
                    nameMapping: {
                        //id: 'ID',
                        type: 'Type',
                        weighting: 'Weighting'
                    }
                }
            },
            emptyDomain: null,
            deleteConfirmOptions: {
                title: 'Delete metric',
                message: 'Do you want to delete this metric'
            }
        }
        
        $.extend(true, options, _options);
        
        domainListEditor = new IFL.Widget.DomainListEditor(options);
    }
    
    function initHandlers() {
        var editPopup = domainListEditor.getEditPopup();
        editPopup.registerHandler('show', function() {
            var domainTable = editPopup.getDomainTable();
            
            domainTable.changeFieldToDropdown('type',options.metricTypes);
        });
    }
    
    function getContainer() {
        return domainListEditor.getContainer();
    }
    
    function setMetrics(metrics) {
        domainListEditor.setItems(metrics);
        domainListEditor.refresh();
    }
    
    function getMetrics() {
        return domainListEditor.getListControlPanel().getItems();
    }
    
    return {
        getContainer: getContainer,
        setMetrics: setMetrics,
        getMetrics: getMetrics
    }
}


