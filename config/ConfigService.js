IFL.Config.ConfigService = function(_options) {
    
    var options = {
        configUrl: Config.uriConfig || '/core/config/resources',
        configTypesUrl: '/configTypes',
        accountsUrl: '/accounts',
        urls: {
            property: '/properties',
            comparison: '/comparisons',
            commodity: '/commodities',
            metric: '/metrics'
        },
        accountId: null
    }
    
    $.extend(true, options, _options);
    
    var eventsHandler = new IFL.Util.EventHandler(['panelReady']);
    var comparisonConfigPanel;
    var propertyConfigPanel;
    var commodityConfigPanel;
    var metricConfigPanel;
    
    var xmlProcessor;
    var xmlGenerator;
    
    init();
    
    function init() {
        xmlProcessor = new IFL.Config.XmlProcessor();
        xmlGenerator = new IFL.Config.XmlGenerator();
    }
    
    function initPanels(configTypes) {
        initPropertyPanel(configTypes);
        initComparisonConfigPanel(configTypes);
        initMetricConfigPanel(configTypes);
        initCommodityConfigPanel();
        
        eventsHandler.notifyHandlers('panelReady');
    }
    
    function initPropertyPanel(configTypes) {
        propertyConfigPanel = new IFL.Config.PropertyConfigPanel({
            entityTypes: configTypes.baseTypes,
            valueTypes: configTypes.propertyTypes,
            serverHandlers: {
                addHandler: function(domain, callback) {
                    callServerHandler('property', domain, callback, 'add');
                },
                updateHandler: function(domain, callback) {
                    callServerHandler('property', domain, callback, 'update');
                },
                deleteHandler: function(domain, callback) {
                    callServerHandler('property', domain, callback, 'delete');
                }
            }
        });
    }
    
    function initComparisonConfigPanel(configTypes) {
        comparisonConfigPanel = new IFL.Config.ComparisonConfigPanel({
            comparasionTypes: configTypes.comparisonTypes,
            getAvailableProperties: function() {
                var props = propertyConfigPanel.getProperties();
                return props;
            },
            serverHandlers: {
                addHandler: function(domain, callback) {
                    comparisonConfigPanel.setPropIdForComparison(domain);
                    callServerHandler('comparison', domain, callback, 'add');
                },
                updateHandler: function(domain, callback) {
                    comparisonConfigPanel.setPropIdForComparison(domain);
                    callServerHandler('comparison', domain, callback, 'update');
                },
                deleteHandler: function(domain, callback) {
                    comparisonConfigPanel.setPropIdForComparison(domain);
                    callServerHandler('comparison', domain, callback, 'delete');
                }
            }
        });
        
    }
    
    function initCommodityConfigPanel() {
        commodityConfigPanel = new IFL.Config.CommodityConfigPanel({
            serverHandlers: {
                addHandler: function(domain, callback) {
                    comparisonConfigPanel.setPropIdForComparison(domain);
                    callServerHandler('commodity', domain, callback, 'add');
                },
                updateHandler: function(domain, callback) {
                    comparisonConfigPanel.setPropIdForComparison(domain);
                    callServerHandler('commodity', domain, callback, 'update');
                },
                deleteHandler: function(domain, callback) {
                    comparisonConfigPanel.setPropIdForComparison(domain);
                    callServerHandler('commodity', domain, callback, 'delete');
                }
            }
        });
    }
    
    function initMetricConfigPanel(configTypes) {
        metricConfigPanel = new IFL.Config.MetricConfigPanel({
            metricTypes: configTypes.metricTypes,
            serverHandlers: {
                addHandler: function(domain, callback) {
                    comparisonConfigPanel.setPropIdForComparison(domain);
                    callServerHandler('metric', domain, callback, 'add');
                },
                updateHandler: function(domain, callback) {
                    comparisonConfigPanel.setPropIdForComparison(domain);
                    callServerHandler('metric', domain, callback, 'update');
                },
                deleteHandler: function(domain, callback) {
                    comparisonConfigPanel.setPropIdForComparison(domain);
                    callServerHandler('metric', domain, callback, 'delete');
                }
            }
        });
    }
    
    function readAccountConfig() {
        $.ajax({
            type: "GET",
            url: options.configUrl + options.accountsUrl +'/' + options.accountId,
            accept: 'xml',
            success: function(xml) {
                var account = xmlProcessor.processAccountConfigXml(xml);
                
                propertyConfigPanel.setProperties(account.properties);
                comparisonConfigPanel.setComparisons(account.comparisons);
                commodityConfigPanel.setCommodities(account.commodities);
                metricConfigPanel.setMetrics(account.metrics);
                
            },
            error: function(a,b,c) {
                alert('Failed to load account configuration !');
            }
        })
    }
    
    function readConfigTypes() {
        $.ajax({
            type: "GET",
            url: options.configUrl + options.configTypesUrl,
            accept: 'xml',
            success: function(xml) {
                var configTypes = xmlProcessor.processConfigTypesXml(xml);
                initPanels(configTypes);
                
                readAccountConfig();
            },
            error: function(a,b,c) {
                alert('Failed to load config types !');
            }
        })
    }
    
    function callServerHandler(type, domain, callback, action) {
        var domainXml;
        var url, method;
        
        switch (type) {
            case 'property':
                domainXml= xmlGenerator.generateProperty(domain);
                break;
            case 'comparison' :
                domainXml=xmlGenerator.generateComparison(domain);
                break;
            case 'commodity' :
                domainXml=xmlGenerator.generateCommodity(domain);
                break;
            case 'metric' :
                domainXml=xmlGenerator.generateMetric(domain);
                break;
        }
        
        switch (action) {
            case 'add': {
                url = options.configUrl + options.accountsUrl + "/" + options.accountId + options.urls[type];
                method = 'POST';
                break;   
            }
            case 'delete': {
                method = 'DELETE';
                url = options.configUrl + options.accountsUrl + "/" + options.accountId + options.urls[type] + "/" + domain.id;
                break;  
            }
            case 'update': {
                method = 'PUT';
                url = options.configUrl + options.accountsUrl + "/" + options.accountId + options.urls[type] + "/" + domain.id;
                break;  
            }
        }
        
        var serverOptions = {
            data: domainXml,//$('<div/>').append(domainXml).html(),
            url: url,
            method: method,
            successCallBack: function(result, textStatus, XMLHttpRequest) {
                if (method == 'POST') {
                    var resultUrl = XMLHttpRequest.getResponseHeader('Location');
                    var id = IFL.Util.getIdFromRestUrl(resultUrl);                           
                    domain.id = id;
                }
                callback(domain);
            },
            errorCallBack: function() {
                alert(action + ' ' + type + ' failed !');
            }
        }
        
        serverHandler(serverOptions);
    }
    
    function serverHandler(options) {
        $.ajax({
            type: options.method || 'GET',
            url: options.url,
            //accept: options.accept || 'xml',
            contentType: options.contentType || 'application/xml',
            data: options.data,
            success: function(resultData, textStatus, XMLHttpRequest) {
                if (options.successCallBack)
                    options.successCallBack(resultData, textStatus, XMLHttpRequest);
            },
            error: function(a,b,c) {
                if (options.errorCallBack)
                    options.errorCallBack(a,b,c);
            }
        })
    }
    
    function setAccountId(id) {
        options.accoutnId = id;
    }
    
    function registerHandler(name, handler) {
        eventsHandler.registerHandler(name, handler);
    }
    
    function getComparisonConfigPanel() {
        return comparisonConfigPanel;
    }
    
    function getPropertyConfigPanel() {
        return propertyConfigPanel;
    }
    
    function getCommodityConfigPanel() {
        return commodityConfigPanel;
    }
    
    function getMetricConfigPanel() {
        return metricConfigPanel;
    }
    
    return {
        readAccountConfig: readAccountConfig,
        readConfigTypes: readConfigTypes,
        setAccountId: setAccountId,
        getComparisonConfigPanel: getComparisonConfigPanel,
        getPropertyConfigPanel: getPropertyConfigPanel,
        getCommodityConfigPanel: getCommodityConfigPanel,
        getMetricConfigPanel: getMetricConfigPanel,
        registerHandler: registerHandler
    }
    
}


