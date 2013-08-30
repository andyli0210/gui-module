IFL.CTS.CTSOptPanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var container;

    var dataSummaryTable;
    var optInfoTable;
    var customerParaTabs;
    var runOptButton;
    var runGroButton;
    var runDynButton;

    var eventHandler = new IFL.Util.EventHandler(['runCts', 'runGro', 'runDyn', 'runDynId', 'report', 'showMap', 'showRobust']);

    init();
    function init() {
        container = $('<div class="ui-layout-content ui-widget-content"></div>').css({
            padding: 5,
            width: '100%'
                    //height: '100%'
        });
        initTitleBar();

        optInfoTable = new IFL.CTS.OptInfoTable();
        dataSummaryTable = new IFL.CTS.DataSummaryTable();
        customerParaTabs = new IFL.CTS.CustomerParaTabs({}, options.customerGroups);

        runOptButton = $('<button>Run CTS Optimisation</button>').button();
        runOptButton.click(function() {
            eventHandler.notifyHandlers('runCts');
        });

        //hide run cts button since we skip the run optimisation step (that's the default input when click this button)
        runOptButton.hide();

        runDynButton = $('<button>Run Dynamic Optimisation</button>').button();
        runDynButton.click(function() {
            showDynIdCtsGeneratorPopup();
        });

        container.append('<p style="color: #303030;"><b>You have the following optimisations</b></p>');
        container.append(optInfoTable.getContainer()).append('<br/>');
        container.append(dataSummaryTable.getContainer()).append('<br/>');

        var table = $('<table width="800px" height="600px"/>').appendTo(container);
        var row1 = $('<tr/>').appendTo(table);
        var rd2 = $('<td align="right"/>').append(runOptButton).append(runDynButton).appendTo(row1);

        var row2 = $('<tr/>').appendTo(table);
        var td1 = $('<td/>').append(customerParaTabs.getContainer()).appendTo(row2);


        //container.append(customerParaTabs.getContainer()).append('<br/>');

        initHandlers();
    }

    function initDefaultOptions() {
        options = {
            customerGroups: _options.customerGroups || testGroups,
            sliders: {
                volumeSliders: null,
                routeSliders: null,
                timeSliders: null,
                geoSliders: null
            }
        }
    }

    function initTitleBar() {
        var titleBar = $('<div/>').append('OPTIMISED COST TO SERVE').addClass('ui-widget-header ui-state-default').css({
            textAlign: 'left',
            padding: 5
        });

        container.append(titleBar);
        container.append('<br/>');
    }

    function showScheduleDetailPopup(solution, title) {
        var chartContainerId = title.replace(/ /g, '');
        var schedulePanel = new IFL.CTS.ScheduleDetailPanel({
            ganttChartTableOptions: {
                tableOptions: {
                    ganttOptions: {
                        containerId: 'chartContainer' + chartContainerId
                    }
                }
            }
        });
        schedulePanel.getContainer().dialog({
            title: 'Schedule Solution Information for ' + title,
            height: 600,
            width: 800,
            //position: [pagePos.x, pagePos.y],
            close: function() {
                schedulePanel.getContainer().dialog('destroy');
                schedulePanel.getContainer().remove();
                schedulePanel = null;
            }
        });
        schedulePanel.displayScheduleSolution(solution);
    }

    function showScheduleMapViewPopup(solution, title) {
        var mapContainerId = title.replace(/ /g, '');

        var mapContainer = $('<div/>').attr('id', mapContainerId).css({
            width: '100%',
            height: '100%'
        });


        mapContainer.dialog({
            title: 'Schedule Map View for ' + title,
            height: 600,
            width: 800,
            //position: [pagePos.x, pagePos.y],
            close: function() {
                mapContainer.dialog('destroy');
                mapContainer.remove();
                mapContainer = null;
            }
        });

        var mapService = new IFL.CTS.MapService({
            mapContainerId: mapContainerId
        })
        mapService.displayOptSolution(solution);

    }

    function showDynCtsGeneratorPopup(callback) {
        var dynamicOptPanel = new IFL.CTS.DynamicOptPanel();

        dynamicOptPanel.getContainer().dialog({
            title: 'Dynamic generate optimisation ',
            width: 650,
            modal: true,
            buttons: [{
                    text: 'OK',
                    click: function() {
                        $(this).dialog("close");
                        eventHandler.notifyHandlers('runDyn', dynamicOptPanel.getSelectedTypes());
                    }
                },
                {
                    text: 'Cancel',
                    click: function() {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    }

    function showReportPopup(defaultOpt) {
        var reportPanel = new IFL.CTS.ReportContentPanel({
            optInfo: defaultOpt
        });

        reportPanel.getContainer().dialog({
            title: 'Generate Schedule Report',
            modal: true,
            //height: 230,
            //width: 450,
            buttons: [{
                    text: 'OK',
                    click: function() {
                        var reportContent = reportPanel.getSelectedContents();

                        if (!reportContent.id) {
                            IFL.Util.showErrorDialog("No Schedule ID !");
                            return;
                        }

                        eventHandler.notifyHandlers('report', reportContent);

                        $(this).dialog("close");
                    }
                },
                {
                    text: 'Cancel',
                    click: function() {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    }

    function showDynIdCtsGeneratorPopup(defaultOpt) {
        var dynamicOptPanel = new IFL.CTS.DynamicOptIdPanel({
            inputOpts: optInfoTable.getCompletedOptInfos(),
            defaultOpt: defaultOpt
        });

        dynamicOptPanel.getContainer().dialog({
            title: 'Dynamic generate optimisation ',
            modal: true,
            height: 230,
            width: 600,
            buttons: [{
                    text: 'OK',
                    click: function() {
                        var request = dynamicOptPanel.getOptRequest();

                        if (!request.inputId) {
                            IFL.Util.showErrorDialog("", "No Input ID !");
                            return;
                        }

                        if (!request.outputName) {
                            IFL.Util.showErrorDialog("", "No Output Name !");
                            return;
                        }
                        eventHandler.notifyHandlers('runDynId', request);

                        $(this).dialog("close");
                    }
                },
                {
                    text: 'Cancel',
                    click: function() {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    }

    function showParameterPopup(optInfo) {

        var parameterContent;
        //different content for basecase & rop and other opts
//        if (optInfo.id == 'baseCase' || optInfo.id == 'rop') {
//            //no group member parameter for base case & rop, only show solver parameters
//            var parameterPanel = new IFL.CTS.SolverParameterPanel({
//                readonly: true
//            });
//            parameterPanel.setParameters(optInfo.solverParameterList);
//            parameterContent = parameterPanel.getContainer();
//        } else {
        var parameterTab = new IFL.CTS.CustomerParaTabs({
            readonly: true
        }, optInfo.groupMember);
        parameterTab.setSolverParameters(optInfo.solverParameterList);
        parameterContent = parameterTab.getContainer();
        //}


        parameterContent.dialog({
            title: 'Customer Parameters for ' + optInfo.name,
            height: 600,
            width: 800,
            modal: true,
            //position: [pagePos.x, pagePos.y],
            close: function() {
                parameterContent.dialog('destroy');
                parameterContent.remove();
                parameterContent = null;
            }
        });
    }

    function showOptMenu(optName, options) {
        var ul = $('<ul/>').css({
            position: 'absolute',
            top: options.pageY - 10,
            left: options.pageX - 10,
            width: 120,
            height: 50,
            zIndex: 2,
            fontSize: '0.8em'
        });

        var clearMenu = function() {
            ul.menu("destroy");
            ul.remove();
            ul = null;
        }


        var chartLi = $('<li><a>Show in Chart View</a></li>').appendTo(ul);
        var mapLi = $('<li><a>Show in Map View</a></li>').appendTo(ul);

        chartLi.click(function() {
            clearMenu();
            eventHandler.notifyHandlers("showChart", optName);
        });

        mapLi.click(function() {
            clearMenu();
            eventHandler.notifyHandlers("showMap", optName);
        });

        $('li', ul).css('cursor', 'pointer');

        ul.appendTo(document.body);
        ul.menu();

        //have to use hover to detect mouse out ul, don't know what's wrong with ul menu
        ul.hover(function() {
            //console.info('mouse over ul');
        }, function() {
            clearMenu();
        })



    }

    function getContainer() {
        return container;
    }

    function addDataSummary(optInfo) {
        dataSummaryTable.addDataColumn(optInfo);
    }

    function addOptInfo(optInfo) {
        optInfoTable.addOptInfo(optInfo);
    }

    function updateOptInfo(optInfo) {
        optInfoTable.updateOptInfo(optInfo);
    }

    function initHandlers() {
        //        dataSummaryTable.registerHandler('clickOpt', function(optName, options) {
        //            showOptMenu(optName, options);
        //        });

        optInfoTable.registerHandler('mouseover', function(optInfo, options) {
            dataSummaryTable.highlightOptColumn(optInfo, true);
        });

        optInfoTable.registerHandler('mouseout', function(optInfo, options) {
            dataSummaryTable.highlightOptColumn(optInfo, false);
        });

        optInfoTable.registerHandler('delete', function(optInfo) {
            dataSummaryTable.removeOptColumn(optInfo);
        });

        optInfoTable.registerHandler('asInput', function(optInfo) {
            showDynIdCtsGeneratorPopup(optInfo);
        });

        optInfoTable.registerHandler('report', function(optInfo) {
            showReportPopup(optInfo);
        });

        optInfoTable.registerHandler('showMap', function(optInfo) {
            eventHandler.notifyHandlers("showMap", optInfo);
//            var mapPara = 'optId=' + optInfo.id + '&depotColor=' + Config.depotColor + '&profitColor=' + Config.profitColor + '&unprofitColor=' + Config.unprofitColor + '&droppedColor=' + Config.droppedColor;
//
//            if (Config.mapZoom) {
//                mapPara += '&mapZoom=' + Config.mapZoom;
//            }
//
//            if (Config.stopZoom) {
//                mapPara += '&stopZoom=' + Config.stopZoom;
//            }
//
//            showMapFilterPopup(optInfo, mapPara);
        });

        optInfoTable.registerHandler('showRobust', function(optInfo) {
            var mapPara = 'optId=' + optInfo.id;
            showRobustReportFilterPopup(optInfo, mapPara);
        });
    }

    function showRobustReportFilterPopup(optInfo, mapPara) {

        var defaultStyleItems = Config.hideDeliverySequence ? ['Scale By Gpad'] : ['Show Delivery Sequence'];

        options.ctsService.getSolutionRouteIds(optInfo.id, function(routeIds) {
            var robustReportFilterPanel = new IFL.CTS.RouteFilterPanel({
                routeIds: routeIds,
                isMultipleSelect: false,
                defaultStyleItems: defaultStyleItems,
            });

            robustReportFilterPanel.getContainer().dialog({
                modal: true,
                title: 'Route Filter',
                autoOpen: true,
                height: 600,
                width: 450,
                buttons: [{
                        text: 'OK',
                        click: function() {
                            var filterContents = robustReportFilterPanel.getRouteFilterParameters();
                            mapPara += '&routeIds=' + filterContents.routeIds;
                            mapPara += '&routeDays=' + filterContents.routeDays;
                            mapPara += '&showDirection=' + filterContents.showDirection;
                            mapPara += '&showVehicle=' + filterContents.showVehicle;
                            mapPara += '&showDeliverySeq=' + filterContents.showDeliverySeq;
                            mapPara += '&scaleByGpad=' + filterContents.scaleByGpad;
                            $(this).dialog("close");
                            eventHandler.notifyHandlers("showRobust", optInfo, mapPara);
                        }
                    },
                    {
                        text: 'Cancel',
                        click: function() {
                            $(this).dialog("close");
                        }
                    }
                ],
                close: function() {
                    robustReportFilterPanel.getContainer().dialog('destroy');
                    robustReportFilterPanel.getContainer().remove();
                    robustReportFilterPanel = null;
                }
            });
        });

    }

    function showMapFilterPopup(optInfo, mapPara) {

        options.ctsService.getSolutionRouteIds(optInfo.id, function(routeIds) {
            var mapFilterPanel = new IFL.CTS.RouteFilterPanel({
                routeIds: routeIds
            });

            mapFilterPanel.getContainer().dialog({
                modal: true,
                title: 'Route Filter',
                autoOpen: true,
                height: 600,
                width: 450,
                buttons: [{
                        text: 'OK',
                        click: function() {
                            var filterContents = mapFilterPanel.getRouteFilterParameters();
                            mapPara += '&routeIds=' + filterContents.routeIds;
                            mapPara += '&routeDays=' + filterContents.routeDays;
                            mapPara += '&showDirection=' + filterContents.showDirection;
                            mapPara += '&showVehicle=' + filterContents.showVehicle;
                            mapPara += '&showDeliverySeq=' + filterContents.showDeliverySeq;
                            mapPara += '&scaleByGpad=' + filterContents.scaleByGpad;
                            $(this).dialog("close");
                            eventHandler.notifyHandlers("showMap", optInfo, mapPara);
                        }
                    },
                    {
                        text: 'Cancel',
                        click: function() {
                            $(this).dialog("close");
                        }
                    }
                ],
                close: function() {
                    mapFilterPanel.getContainer().dialog('destroy');
                    mapFilterPanel.getContainer().remove();
                    mapFilterPanel = null;
                }
            });
        });

    }

    function registerHandler(name, handler) {
        if (name == 'showChart' || name == 'showParameters' || name == 'delete' || name == 'rerun') {
            optInfoTable.registerHandler(name, handler);
        } else {
            eventHandler.registerHandler(name, handler);
        }
    }

    function getSolverParameters() {
        return customerParaTabs.getSolverParameters();
    }

    return {
        getContainer: getContainer,
        addDataSummary: addDataSummary,
        addOptInfo: addOptInfo,
        updateOptInfo: updateOptInfo,
        registerHandler: registerHandler,
        getSolverParameters: getSolverParameters,
        showScheduleDetailPopup: showScheduleDetailPopup,
        showScheduleMapViewPopup: showScheduleMapViewPopup,
        showParameterPopup: showParameterPopup,
        showOptMenu: showOptMenu
    }
}


