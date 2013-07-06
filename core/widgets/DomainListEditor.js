IFL.Widget.DomainListEditor = function(_options) {
    var listControlPanel;
    var containerPanel;
    var editPopup;
    
    var defaultOptions = {
        listControlOptions: {
            listOptions: {
                itemPerPage: 5
            },
            keyTitleMapping: null,
            panelOptions: null  
        },        
        containerPanelOptions: {
            title: null
        },
        editPopupOptions: {
            tableOptions: {
                showMappingOnly: true
            },
            isEditable: true
        },
        emptyDomain: null,
        deleteConfirmOptions: {
            title: '',
            message: ''
        },
        serverHandlers: {
            addHandler: function(domain, callback) {
                callback(domain);
            },
            updateHandler: function(domain, callback) {
                callback(domain);
            },
            deleteHandler: function(domain, callback) {
                callback(domain);
            }
        }
    }
    
    var options = $.extend(true, {}, defaultOptions, _options);
    
    init();
    initHandlers();
    
    function init() {
        listControlPanel = new IFL.Widget.ListControlPanel(options.listControlOptions);
        
        containerPanel = new IFL.Widget.FolderWidget(options.containerPanelOptions);
        
        editPopup = new IFL.Widget.DomainPopup(options.editPopupOptions);
        
        containerPanel.setContent(listControlPanel);
    }
    
    function initHandlers() {
        listControlPanel.registerHandler('add', function() {
            var newDomain = {};
            var emptyDomain = options.emptyDomain || options.editPopupOptions.tableOptions.nameMapping || options.listControlOptions.keyTitleMapping;
            for (var i in emptyDomain) {
                newDomain[i] = '';
            }
            
            editPopup.show(newDomain);
        });
        
        listControlPanel.registerHandler('select', function(domain) {
            editPopup.show(domain);
        });
        
        listControlPanel.registerHandler('delete', function(domain) {
            IFL.Util.showConfirmDialog(options.deleteConfirmOptions.title, options.deleteConfirmOptions.message, function() {
                options.serverHandlers.deleteHandler(domain, function(domain) {
                    listControlPanel.deleteItem(domain)
                })
            })
        //editPopup.show(domain);
        });
         
        editPopup.registerHandler('ok', function(domain) {
            if (domain.id) {
                options.serverHandlers.updateHandler(domain, function(newDomain) {
                    //listControlPanel.addItem(newDomain);
                    listControlPanel.refresh();
                });
            } else {
                options.serverHandlers.addHandler(domain, function(newDomain) {
                    listControlPanel.addItem(newDomain);
                    listControlPanel.refresh();
                });
            }
            
            
        });
    }
    
    function getContainer() {
        return containerPanel.getContainer();
    }
    
    function setItems(items) {
        listControlPanel.setItems(items);
    }
    
    function refresh() {
        listControlPanel.refresh();
    }
    
    function getEditPopup() {
        return editPopup;
    }
    
    function getListControlPanel() {
        return listControlPanel;
    }
    
    function getContainerPanel() {
        return containerPanel;
    }
    
    return {
        getContainer: getContainer,
        setItems: setItems,
        refresh: refresh,
        getEditPopup: getEditPopup,
        getListControlPanel: getListControlPanel,
        getContainerPanel: getContainerPanel
    }
}


