function AppStarter() {
    var appContainer = $('#mainContainer');
    var configContainer = $('<div></div>');
    var resultContainer = $('<div></div>');
    
    var configXmlContainer;
    var inputFileContainer;
    setupResultPanel();
    
    var truckPanel; 
    var dockPanel;
    var simulationPanel;
    var settingPanel;
    
    var xmlGenerator;
    init();
    tabTest();
    initSettings();
    function init() {
        xmlGenerator = new XmlGenerator();
        
        initPanel();
    }
    
    function initPanel() {
        simulationPanel = new SimulationPanel({
            containerPanelOptions: {
                width: 600
            },
            runHandler: runHandler,
            fileUploadHandler: fileUploadHandler
        });
        simulationPanel.getContainer().appendTo(configContainer);
        
        configContainer.append('<br/>');
        
        settingPanel = new SettingPanel({
            containerPanelOptions: {
                width: 600
            }
        });
        
        settingPanel.getContainer().appendTo(configContainer);
        
        configContainer.append('<br/>');
        
        truckPanel = new TruckPanel({
            containerPanelOptions: {
                width: 600
            }
        });
        truckPanel.getContainer().appendTo(configContainer);
        
        configContainer.append('<br/>');
        
        dockPanel = new DockPanel({
            getAvlTruckTypes: function() {
                var trucks = truckPanel.getTrucks();
                
                var types = [];
                for (var t in trucks) {
                    var truck = trucks[t];
                    types.push(truck.type);
                }
                
                return types;
            },
            containerPanelOptions: {
                width: 600
            }
        });
        dockPanel.getContainer().appendTo(configContainer);
    }
    
    function initSettings() {
        var settings = [];
        
        var setting1 = {
            variable: 'Drive Time',
            distribution: 'Deterministic',
            change: {
                mean: 0
            }
        }
        
        var setting2 = {
            variable: 'Demand',
            distribution: 'Lognormal',
            change: {
                mean: 0,
                stddev: 0
            }
        }
        
        settings.push(setting1);
        settings.push(setting2);
        
        settingPanel.setSettings(settings);
    }
    
    function runHandler() {
        var simulation = simulationPanel.getSimulation();
        var docks = dockPanel.getDocks();
        var trucks = truckPanel.getTrucks();
        
        var setup = {
            simulation: simulation,
            docks: docks,
            trucks: trucks
        }
        
        var fileupload = simulationPanel.getFileUpload();
        fileupload.submit();
        var setupXml = xmlGenerator.generateSetupXml(setup);
        configXmlContainer.val(setupXml);
        tabWiget.selectTab(1);
        
        
    }
    
    function fileUploadHandler(data) {
        inputFileContainer.val(data);
    }
    
    function setupResultPanel() {
        resultContainer.append('Config Xml: <br/>');
        configXmlContainer = $('<textarea rows="5" cols="150"/>').appendTo(resultContainer);
        
        resultContainer.append('<br/>');
        resultContainer.append('Input File Content: <br/>');
        inputFileContainer = $('<textarea rows="10" cols="150"/>').appendTo(resultContainer);
    }
    
    function tabTest() {
        
        
        tabWiget = new IFL.Widget.Tabs({
            tabs: [{
                id: 'tab-1',
                title: 'Config',
                content: configContainer
            },
            {
                id: 'tab-2',
                title: 'Results',
                content: resultContainer
            }]
        });
        
        tabWiget.getContainer().addClass('ui-layout-center');
        tabWiget.getContainer().appendTo($('body'));
    }
}


