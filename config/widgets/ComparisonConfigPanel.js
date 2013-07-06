IFL.Config.ComparisonConfigPanel = function(_options) {
    var domainListEditor;
    var options;
    var props = [];
    
    init();
    initHandlers();
    
    function init() {
        options = {
            comparasionTypes: ['CONTAINS', 'EQUAL'],
            getAvailableProperties: function() {
                return []
            },
            listControlOptions: {
                listOptions: {
                    itemPerPage: 5,
                    keyColWidth: {
                        id: '5%',
                        propA: '30%',
                        propB: '30%',
                        type: '25%',
                        penalty: '10%'
                    }
                },
                keyTitleMapping:{
                    id: 'ID',
                    propA: 'Property A',
                    propB: 'Property B',
                    type: 'Comparasion Type',
                    penalty: 'Penalty'
                },
                panelOptions: null  
            },        
            containerPanelOptions: {
                title: 'Comparasion Config',
                width: 800
            },
            editPopupOptions: {
                popupOptions: {
                    title: 'add/edit Comparasion' 
                },
                tableOptions: {
                    nameMapping: {
                        //id: 'ID',
                        propA: 'Property A',
                        propB: 'Property B',
                        type: 'Comparasion Type',
                        penalty: 'Penalty'
                    }
                }
            },
            emptyDomain: null,
            deleteConfirmOptions: {
                title: 'Delete Comparasion',
                message: 'Do you want to delete this Comparasion'
            }
        }
        
        $.extend(true, options, _options);
        
        domainListEditor = new IFL.Widget.DomainListEditor(options);
    }
    
    function initHandlers() {
        var editPopup = domainListEditor.getEditPopup();
        editPopup.registerHandler('show', function() {
            var domainTable = editPopup.getDomainTable();
            
            props = options.getAvailableProperties();
            
            var titles = [];
            for (var p in props) {
                titles.push(props[p].title);
            }
            domainTable.changeFieldToDropdown('propA',titles);
            domainTable.changeFieldToDropdown('propB',titles);
            domainTable.changeFieldToDropdown('type',options.comparasionTypes);
        });
    }
    
    function getContainer() {
        return domainListEditor.getContainer();
    }
    
    function setComparisons(comparisons) {
        domainListEditor.setItems(comparisons);
        domainListEditor.refresh();
    }
    
    function setPropIdForComparison(domain) {
        var propATitle = domain.propA;
        var propBTitle = domain.propB;
        for (var p in props) {
            var property = props[p];
                
            if (propATitle == property.title) {
                domain.propAId = property.id;
            }
                
            if (propBTitle == property.title) {
                domain.propBId = property.id;
            }
        }
    }
    
    return {
        getContainer: getContainer,
        setComparisons: setComparisons,
        setPropIdForComparison: setPropIdForComparison
    }
}


