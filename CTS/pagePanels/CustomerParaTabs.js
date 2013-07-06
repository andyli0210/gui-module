IFL.CTS.CustomerParaTabs = function(_options, customerGroups) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var inclusionsContainer;
    var arriveTimeContainer;
    var deliveryFeeContainer;
    var unitPriceContainer;
    var limitsContainer;
    
    var customerArriveTimeWidget;
    var customerInclusionWidget;
    var customerDeliveryFeeWidget;
    var customerUnitPriceWidget;
    var solverParameterPanel;
    
    var paraTabs;
    
    init()
    function init() {
        initInclusionsTab();
        initArriveTimeTab();
        initDeliveryFeeTab();
        initUnitPriceTab();
        initLimitsTab();
        
        initTabs();
        
        if (options.readonly) {
            $('input', paraTabs.getContainer()).attr('disabled', 'disabled');
        }
    }
    
    function initDefaultOptions() {
        options = {
            height: 500,
            contentWidth: 600,
            readonly: false
        }
    }

    function initTabs() {
        paraTabs = new IFL.Widget.Tabs({
            contentHeight: options.height,
            tabs: [{
                id: 'tab-1',
                title: 'Fixed Inclusions',
                content: inclusionsContainer
            },
            {
                id: 'tab-2',
                title: 'Arrival Time',
                content: arriveTimeContainer
            },
            {
                id: 'tab-3',
                title: 'Delivery Fees',
                content: deliveryFeeContainer
            },
            {
                id: 'tab-4',
                title: 'Unit Pricing',
                content: unitPriceContainer
            },
            {
                id: 'tab-5',
                title: 'Limits',
                content: limitsContainer
            }]
        });
        
        $('.ui-tabs-panel',paraTabs.getContainer()).css({
            'font-size': '0.9em'
        })
    }
    
    function initInclusionsTab() {
        inclusionsContainer = $('<div/>');
        
        var msgBar = $('<div/>').append('Customers that must be visited and included in the optimisation results');
        var resetButton = $('<button>reset to default</button>').button().css({
            marginLeft: 20,
            height: 30
        });
        msgBar.append(resetButton).css({
            marginBottom: 10,
            height: 35
        });
        msgBar.appendTo(inclusionsContainer);
        
        customerInclusionWidget = new IFL.CTS.CustomerInclusionWidget({
            treeWidth: options.contentWidth
        }, customerGroups, true); 
        inclusionsContainer.append(customerInclusionWidget.getContainer());
    }
    
    function initArriveTimeTab() {
        arriveTimeContainer = $('<div/>');
        
        var msgBar = $('<div/>').append('Adjust allowable earliness and lateness for arrival time windows');
        var resetButton = $('<button>reset to default</button>').button().css({
            marginLeft: 20,
            height: 30
        });
        msgBar.append(resetButton).css({
            marginBottom: 10,
            height: 35
        });
        msgBar.appendTo(arriveTimeContainer);
        
        customerArriveTimeWidget = new IFL.CTS.CustomerArriveTimeWidget({
            treeWidth: 680
        }, customerGroups, true);
        arriveTimeContainer.append(customerArriveTimeWidget.getContainer());
    }
    
    function initDeliveryFeeTab() {
        deliveryFeeContainer = $('<div/>');
        
        var msgBar = $('<div/>').append('Additional delivery fees per drop apply to the following groups:');
        var resetButton = $('<button>reset to default</button>').button().css({
            marginLeft: 20,
            height: 30
        });
        msgBar.append(resetButton).css({
            marginBottom: 10,
            height: 35
        });
        msgBar.appendTo(deliveryFeeContainer);
        
        customerDeliveryFeeWidget = new IFL.CTS.CustomerDeliveryFeeWidget({
            treeWidth: options.contentWidth
        }, customerGroups, true);
        deliveryFeeContainer.append(customerDeliveryFeeWidget.getContainer());
    }
    
    function initUnitPriceTab() {
        unitPriceContainer = $('<div/>');
        
        var msgBar = $('<div/>').append('Additional unit pricing applies to the following groups:');
        var resetButton = $('<button>reset to default</button>').button().css({
            marginLeft: 20,
            height: 30
        });
        msgBar.append(resetButton).css({
            marginBottom: 10,
            height: 35
        });
        msgBar.appendTo(unitPriceContainer);
        
        customerUnitPriceWidget = new IFL.CTS.CustomerUnitPriceWidget({
            treeWidth: options.contentWidth
        }, customerGroups, true);
        unitPriceContainer.append(customerUnitPriceWidget.getContainer());
    }
    
    function initLimitsTab() {
        limitsContainer = $('<div/>');
        
        var msgBar = $('<div/>').append('Specify limits to fleet, and set solver parameters');
        var resetButton = $('<button>reset to default</button>').button().css({
            marginLeft: 20,
            height: 30
        });
        msgBar.append(resetButton).css({
            marginBottom: 10,
            height: 35
        });
        msgBar.appendTo(limitsContainer);
        
        solverParameterPanel = new IFL.CTS.SolverParameterPanel({
            readonly: options.readonly,
            sliders: options.sliders
        })
        limitsContainer.append(solverParameterPanel.getContainer());
    }
    
    function getContainer() {
        return paraTabs.getContainer();
    }
    
    function setSolverParameters(parameters) {
        solverParameterPanel.setParameters(parameters);
    }
    
    function getSolverParameters() {
        return solverParameterPanel.getParameters();
    }
    
    return {
        getContainer: getContainer,
        getSolverParameters: getSolverParameters,
        setSolverParameters: setSolverParameters
    }
}


