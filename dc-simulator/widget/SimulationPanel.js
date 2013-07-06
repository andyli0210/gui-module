function SimulationPanel(_options) {
    var domainTable;
    var containerPanel;
    var buttonPanel;
    
    var runButton;
    
    var fileUpload;
    
    var options = {
        containerPanelOptions: {
            title: 'Simulation'
        },
        panelOptions: {},
        domainTableOptions: {
            nameMapping: {
                runs: 'Number of runs',
                inputFile: 'Input File',
                dc: 'DC'
            },
            showMappingOnly: true
        },
        runHandler: function() {},
        fileUploadHandler: function (data) {}
    }
    
    $.extend(true, options, _options);
    
    init();
    function init() {
        initDomainTable();
        
        buttonPanel = new IFL.Widget.ButtonPanel(options.panelOptions);
        buttonPanel.setContent(domainTable);
        runButton = buttonPanel.getPanelButton('Run');
        buttonPanel.addButton(runButton, 'right');
        runButton.click(function() {
            options.runHandler();
        })
        
        containerPanel = new IFL.Widget.FolderWidget(options.containerPanelOptions);
        containerPanel.setContent(buttonPanel);
    }
    
    function initDomainTable() {
        var simulationDomain = {
            runs: '1',
            inputFile: '',
            dc: ''
        }
        
        domainTable = new IFL.Widget.DomainTable(simulationDomain, options.domainTableOptions);
        domainTable.enableEdit();
        
        for (var key in simulationDomain) {
            if (key != 'runs' && key != 'dc' && key != 'inputFile') {
                domainTable.changeFieldToDropdown(key, ['Deterministic']);
            }
            
            if (key == 'inputFile') {
                var rowKeyMapping = domainTable.getRowKeyMapping();
                var row = rowKeyMapping[key];
                
                var td = jQuery('td:nth-child(2)', row);
                td.empty();
               
                fileUpload = $('<form id="fileForm" method="post" enctype="multipart/form-data"><input type="file" name="file"></input></form>').appendTo(td);
                
                fileUpload.submit(function() { 
                    console.info('uplaoding files');
                    //IFL.Util.displayLoading(true);
                    // submit the form 
                    fileUpload.ajaxSubmit({
                        //dataType: 'text',
                        type: 'POST',
                        url: Config.uploadServer,
                        success: function(data, status) {
                           // IFL.Util.displayLoading(false);
                            options.fileUploadHandler(data);
                        },
                        error: function(a,b,c) {
                            alert('File upload failed');
                           // IFL.Util.displayLoading(false);
                        }
                    }); 
                    // return false to prevent normal browser submit and page navigation 
                    return false; 
                });
            }
                
        }
    }
    
    function getSimulation() {
        domainTable.setDomainValue();
        var simulation = domainTable.getDomain();
        
        return simulation
    }
    
    function getContainer() {
        return containerPanel.getContainer();
    }
    
    function getFileUpload() {
        return fileUpload;
    }
    
    return {
        getContainer: getContainer,
        getSimulation: getSimulation,
        getFileUpload: getFileUpload
    }

}
