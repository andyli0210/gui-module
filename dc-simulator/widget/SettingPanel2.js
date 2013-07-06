function SettingPanel(_options) {
    var dListTable;
    
    var options = {
        keyTitleMapping: {
            variable: 'Variable',
            distribution: 'Distribution',
            change: 'Change'
        },
        keyFieldMapping: {
            distribution: {
                value: ['Deterministic', 'Lognormal'], 
                type: 'dropdown',
                handler: function() {}
            },
            change: {
                value: {
                    mean: 'Mean',
                    stddev: 'Stddev'
                },
                type: 'domaintable'
            }
        },
        listOptions: {
            keyColWidth: {
                variable: '20%',
                distribution: '30%',
                change: '40%'
            }
        },
        containerPanelOptions: {
            title: 'Settings'
        }
    }
    
    $.extend(true, options, _options);
    
    init();
    function init() {
        dListTable = new IFL.Widget.DynamicListTable(options);
        
        dListTable.registerHandler('editTd', function(domain, eventoptions) {
            var key = eventoptions.key;
            var td = eventoptions.td;
            
            if (key == 'distribution') {
                setDistributionChangeHandler(domain, td);
            }
            
        })
    }
    
    function setChangeFields(fields) {
        dListTable.setKeyFieldMapping({
            change: {
                value: fields, 
                type: 'domaintable'
            }
        });
        
    }
    
    function setDistributionChangeHandler(domain, td) {
        if (!domain.change) {
            domain.change = {};
            domain.change.mean = '';
        }
        dListTable.setKeyFieldMapping({
            distribution: {
                value: ['Deterministic', 'Lognormal'], 
                type: 'dropdown',
                handler: function(distribution) {
                    var nextTd = td.next();
                    if (distribution == 'Deterministic') {
                        delete domain.change.stddev;
                    } else {
                        if (!domain.change.mean) {
                            domain.change.mean = '';
                        }
                    }
                    
                    dListTable.enableEditTd(nextTd, domain, 'change');
                }
            }
        });
        
    }
    
    function getContainer() {
        return dListTable.getContainer();
    }
    
    function getSettings() {
        return dListTable.getItems();
    }
    
    function setSettings(settings) {
        dListTable.setItems(settings);
    }
    
    return {
        getContainer: getContainer,
        getSettings: getSettings,
        setSettings: setSettings
    }
}





