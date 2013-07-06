function AppStarter() {
    var appContainer = $('#configViewContainer');
    
    var testConfigPanel;
    var testComparasionPanel;
    
    var configService;
    var accountId;
    //init();
    //testinit();
    //initWithLogin();
    initWithoutLogin();
    
    function initWithLogin() {
        var loginService = new IFL.Login.LoginService({
            loginHandler: loginHandler
        });
    }
    function loginHandler(loginInfo) {
        accountId = loginInfo.accountId;
        init();
    }
    
    function initWithoutLogin() {
        accountId = 1;
        init();
    }
    
    function init() {
        configService = new IFL.Config.ConfigService({
            accountId: accountId
        });
        
        configService.registerHandler('panelReady', function() {
            var propertyPanel = configService.getPropertyConfigPanel();
            var comparisonPanel = configService.getComparisonConfigPanel();
            var commodityPanel = configService.getCommodityConfigPanel();
            var metricPanel = configService.getMetricConfigPanel();
            
            propertyPanel.getContainer().appendTo(appContainer);
            appContainer.append('<br/>')
            comparisonPanel.getContainer().appendTo(appContainer);
            
            appContainer.append('<br/>')
            commodityPanel.getContainer().appendTo(appContainer);
            
            appContainer.append('<br/>')
            metricPanel.getContainer().appendTo(appContainer);
        });
        
        configService.readConfigTypes();
    }
    
    function testinit() {
        var index = 1;
        testConfigPanel = new IFL.Config.PropertyConfigPanel({
            entityTypes: ['a', 'b'],
            serverHandlers: {
                addHandler: function(domain, callback) {
                    domain.id = index++;
                    callback(domain);
                },
                updateHandler: function(domain, callback) {
                    callback(domain);
                },
                deleteHandler: function(domain, callback) {
                    callback(domain);
                }
            }
        });
        
        var testData = getTestData();
        testConfigPanel.setProperties(testData);
        testConfigPanel.getContainer().appendTo(appContainer);
        
        appContainer.append('<br/>')
        
        var propTitles = [];
        for (var t in testData) {
            var prop = testData[t];
            propTitles.push(prop.title);
        }
        
        testComparasionPanel = new IFL.Config.ComparisonConfigPanel({
            getAvailablePropery: function() {
                var props = testConfigPanel.getProperties();
                var titles = [];
                for (var p in props) {
                    titles.push(props[p].title);
                }
                
                return titles;
            },
            serverHandlers: {
                addHandler: function(domain, callback) {
                    domain.id = index++;
                    callback(domain);
                },
                updateHandler: function(domain, callback) {
                    callback(domain);
                },
                deleteHandler: function(domain, callback) {
                    callback(domain);
                }
            }
        });
        //testComparasionPanel.setProperties(propTitles);
        testComparasionPanel.getContainer().appendTo(appContainer);
        
        
        configService = new IFL.Config.ConfigService({
            accountId: 1
        });
        configService.readConfigTypes();
    }
    
    function getTestData() {
        var data = [];
        
        var data1 = {
            id: 123,
            title: 'prop1',
            base: 'Consignment',
            type: 'INTEGER'
        }
        
        data.push(data1);
        
        return data;
    }



}


