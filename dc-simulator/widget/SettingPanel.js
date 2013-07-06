function SettingPanel(_options) {
    var containerPanel;
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
        containerPanel = new IFL.Widget.FolderWidget(options.containerPanelOptions);
        dListTable = new IFL.Widget.DomainListTable(options.keyTitleMapping, options.listOptions);
        
        containerPanel.setContent(dListTable)
    }
    
    function getContainer() {
        return containerPanel.getContainer();
    }
    
    function getSettings() {
        return dListTable.getItems();
    }
    
    function setSettings(settings) {
        var settingItems = {};
        
        for (var s=0; s<settings.length; s++) {
            var setting = settings[s];
            
            var settingItem = getSettingItem(s+1, setting);
            settingItems[s] = settingItem;
        }
        dListTable.setItems(settingItems);
        
        dListTable.refresh();
    }
    
    function getSettingItem(id, setting) {
        var dropdown = new IFL.Widget.DropdownList("settingdropdown" + id, ['Deterministic', 'Lognormal']);
        var distribute = setting.distribution;
        dropdown.selectItem(distribute);
        
        var change = setting.change;
        
        var domainTable = new IFL.Widget.DomainTable(change);
        domainTable.enableEdit();
        dropdown.registerHandler('change', function(item) {
            domainTable.setDomainValue();
            if (item != 'Deterministic') {
                if (!change.stddev) {
                    change.stddev = '';
                    domainTable.refresh();
                }
            } else {
                delete change.stddev;
                domainTable.refresh();
            }
        });
        
        var settingItem = {
            id: id,
            variable: setting.variable,
            distribution: dropdown,
            change: domainTable
            
        }
        return settingItem;
    }
    
    
    return {
        getContainer: getContainer,
        getSettings: getSettings,
        setSettings: setSettings
    }
}








