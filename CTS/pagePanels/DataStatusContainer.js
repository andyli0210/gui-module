IFL.CTS.DataStatusContainer = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var statusTable;
    var checkListTable;
    var titleBar;
    var baseBaseConfirmDiv;
    var baseBaseProceedDiv;
    var solverParaTable;
    var dataQualityList;
    
    var eventHandler = new IFL.Util.EventHandler(['confirm','proceed'])
    init();
    
    function initDefaultOptions() {
    }
    
    function init() {
        container = $('<div/>').css({
            width: '100%'
        });
        
        initTitleBar();
        initStatusLayoutTable();
        initBaseCaseConfirmDiv();  
        initBaseCaseProceedDiv();
    }
    
    function initTitleBar() {
        titleBar = $('<div/>').append('COST TO SERVE INPUT DATA').addClass('ui-widget-header ui-state-default').css({
            textAlign: 'left',
            padding: 5
        });
        
        container.append(titleBar);
        container.append('<br/>');
    }
    
    function initStatusLayoutTable() {
        initStatusTable();
        initCheckListTable();
        initDataQualityList();
        
        var statusLayoutTable = $('<table></table>');
        
        var row1 = $('<tr></tr>').appendTo(statusLayoutTable);
        var statusDataCell = $('<td rowspan="2"></td>').append(statusTable.getContainer()).appendTo(row1);
        var checkListCell = $('<td valign="top"></td>').append(checkListTable.getContainer()).appendTo(row1);
        
        
        var row2 = $('<tr></tr>').appendTo(statusLayoutTable);
        var dataQualityListCell = $('<td></td>').append(dataQualityList.getContainer()).appendTo(row2);
        
        container.append(statusLayoutTable);
        
        solverParaTable = new IFL.CTS.SolverParaTable();
        container.append(solverParaTable.getContainer());
    }
    
    function initStatusTable() {
        statusTable = new IFL.CTS.StatusTable();
        statusTable.getContainer().css({
            'font-size': '0.8em',
            padding: 5
        })
    }
    
    function initCheckListTable() {
        checkListTable = new IFL.CTS.DataCheckList();
        checkListTable.getContainer().css({
            'font-size': '0.8em',
            padding: 5
        })
        
        checkListTable.refresh({
            raw: 'UPLOADED',
            geo: 'UNCHECKED',
            volume: 'UNCHECKED',
            time: 'UNCHECKED',
            route: 'UNCHECKED'
        })
    }
    
    function initDataQualityList() {
        dataQualityList = new IFL.CTS.DataQualityList();
        dataQualityList.getContainer().css({
            'font-size': '0.8em',
            padding: 5
        })
        
        dataQualityList.getContainer().hide();
    }
    
    function baseCaseConfirmLayout() {
        titleBar.append('<span>: BASE CASE SUMMARY</span>');
        //solverParaTable.getContainer().hide();
        
        dataQualityList.getContainer().show();
        baseBaseConfirmDiv.hide();
    }
    
    function baseCaseProceedLayout() {
        baseBaseProceedDiv.show();
        dataQualityList.showDetails(true);
    }
    
    function initBaseCaseConfirmDiv() {
        baseBaseConfirmDiv = $('<div/>').addClass('ui-widget-content').css({
            padding: 5
        });
        
        //hide confirm button first, util user run through at least one checker
        baseBaseConfirmDiv.hide();
        
        baseBaseConfirmDiv.append('<p>Would you like to confirm your Base Case?</p><p>Proceed to All Customer Route Optimisation</p>');   
        var baseCaseConfirmButton = $('<button>Confirm Base Case</button>').button();
        baseCaseConfirmButton.click(function() {
            eventHandler.notifyHandlers('confirm');
        })
        
        baseBaseConfirmDiv.append(baseCaseConfirmButton);
        baseBaseConfirmDiv.appendTo(container);
    }
    
    function displayBaseCaseConfirmDiv(isShow) {
        if (isShow) {
            baseBaseConfirmDiv.show();
        } else {
            baseBaseConfirmDiv.hide();
        }
    }
    
    function initBaseCaseProceedDiv() {
        baseBaseProceedDiv = $('<div/>').addClass('ui-widget-content').css({
            padding: 5
        });
        
        baseBaseProceedDiv.append('<p>Happy with your Customer Route Optimisation Report?</p><p>Proceed to Optimsing the Cost To Serve</p>');   
        var baseCaseProceedButton = $('<button>Proceed</button>').button();
        baseCaseProceedButton.click(function() {
            eventHandler.notifyHandlers('proceed');
        })
        
        baseBaseProceedDiv.append(baseCaseProceedButton);
        baseBaseProceedDiv.appendTo(container);
        
        baseBaseProceedDiv.hide();
    }
    
    function setCheckList(checkStatus) {
        checkListTable.refresh(checkStatus);
        //when updating data status, check if it's time to show confirm base case button
        if (checkStatus.volume == 'CHECKED' || checkStatus.time == 'CHECKED' || checkStatus.route == 'CHECKED') {
            displayBaseCaseConfirmDiv(true);
        }
    }
    
    function setStatusTable(statusData) {
        statusTable.refresh(statusData);
    }
    
    function setDataQulity(qulityList) {
        dataQualityList.refresh(qulityList);
    }
    
    function setSolverParameters(parameters) {
        solverParaTable.refresh(parameters);
    }
    
    function getContainer() {
        return container;
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    return {
        getContainer: getContainer,
        registerHandler: registerHandler,
        setCheckList: setCheckList,
        setStatusTable: setStatusTable,
        setDataQulity: setDataQulity,
        setSolverParameters: setSolverParameters,
        baseCaseConfirmLayout: baseCaseConfirmLayout,
        baseCaseProceedLayout: baseCaseProceedLayout,
        displayBaseCaseConfirmDiv: displayBaseCaseConfirmDiv
    }
}