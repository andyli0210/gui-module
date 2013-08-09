function AppStarter() {
    var layoutManager;
    var ctsService;
    
    var volumeChecker;
    var timeChecker;
    var routeCheckerTable;
    
    var statusContainer;
    var statusTable;
    var checkListTable;
    
    var timeParaPanel;
    var routeParaPanel;
    var volumeParaPanel;
    var geoParaPanel;
    
    var geoCheckerPanel;
    var volumeCheckerPanel;
    var timeCheckerPanel;
    var routeCheckerPanel;
    
    var volumeSliders;
    var routeSliders;
    var timeSliders;
    var geoSliders;
    
    var accountManagerWidget;
    var mapViewWindow;
    
    loadingPopup = new IFL.Widget.LoadingPopup({
        popupCss: {
            background: 'none repeat scroll 0 0 #FFFFFF',
            border: '20px solid #DDDDDD'
        }
    });
    
    var fileUploadPanel; 
    var baseCasePanel;
    var ctsOptPanel;
    
    init();
    function init() {
        ctsService = new IFL.CTS.CTSService();
        layoutManager = new IFL.CTS.LayoutManager();
        //disable checker tabs by default
        layoutManager.enableCheckerTabs(false);
        
        initFileUploadPanel();
        initAccountDetails();
        initHandlers();
    }
    
    function initTabContents() {
        if (geoParaPanel)
            return;
        
        initGeoTab();
        initVolumeTab();
        initTimeTab();
        initRouteTab();
        
        //record sliders to base case panel before they are gone
        volumeSliders = volumeParaPanel.getSliders();
        routeSliders = routeParaPanel.getSliders();
        timeSliders = timeParaPanel.getSliders();
        geoSliders = geoParaPanel.getSliders();
    }
    
    function initAccountManagerWidget() {
        if (accountManagerWidget) {
            return;
        }
        
        accountManagerWidget = new IFL.CTS.AccountManageWidget();
        accountManagerWidget.registerHandler('import', function() {
            var msg = 'You are going to import new Excel File, this will override all the existing data in database.';
            IFL.Util.showConfirmDialog("Import Excel File", msg, function() {
                showFileUploadPopup(true);
            })
            
        });

        accountManagerWidget.registerHandler('export', exportHandler);
        
        var headerPanel = layoutManager.getHeaderPanel();
        headerPanel.append(accountManagerWidget.getContainer());
    }
    
    function exportHandler() {
        var msg = 'Do you want to export current data as excel file ?';
        IFL.Util.showConfirmDialog("Export Excel File", msg, function() {
            ctsService.exportExcel();
        })
    }
    
    function initAccountDetails() {
        ctsService.getAccountDetails(function(response) {
            
            initAccountManagerWidget();
            accountManagerWidget.setAccountName(response.accountDetails.username);
            
            if (Config.showBuildInfo) {
                layoutManager.setBuildInfo({
                    number: response.accountDetails.buildNumber,
                    id: response.accountDetails.buildId
                });
            }
            
            
            //allow skip checkers and jump to last page
            if (Config.skipChecker && response.accountDetails.hasOriData) {
                initCtsLayout();
                return;
            }
            
            // Only show pages and init data when there is user input (from excel or other way in the future)
            if (response.accountDetails.hasGeoInput && response.accountDetails.hasOriData) {
                //init layout according to opt data status
                if (response.accountDetails.hasRopData) {
                    initCtsLayout();
                } else  {
                    initStatusPanel();
                    //init user data
                    refreshDataSummaryPanel(response);
                    if (response.accountDetails.hasCheckerData && response.accountDetails.baseCaseConfirmed) {
                        initBaseCaseLayout(response.solverParameterList);
                    } else {
                        initCheckersLayout(response);
                    }
                }             
                
            } else {
                // Ask user to upload Excel File
                showFileUploadPopup(true);
            }
            
        });
    }
    
    function refreshDataSummaryPanel(response) {
        statusContainer.setStatusTable(response.dataValueList);
        statusContainer.setCheckList(response.dataStatusList);
        statusContainer.setSolverParameters(response.solverParameterList);
    }
    
    function resetTabsLayout(dataStatusList) {
        //show geo tab by default
        layoutManager.selectTab(0);
        //check whether enable or disable other three checker tabs
        if (dataStatusList.geo == 'CORRECTED') {
            layoutManager.enableCheckerTabs(true);
        } else {
            
            //for testing purpose, don't disable checker tabs......
            layoutManager.enableCheckerTabs(true);
        }
        
        // show geo checker panel directly, prevent use run route geo again
        if (dataStatusList.geo == 'CORRECTED' || dataStatusList.geo == 'CHECKED') {
            geoCheckerPanel.getContainer().show();
            
            //reset geo checker panel
            geoCheckerPanel.initGeoRouteService();
            //update geo status bar
            ctsService.getGeoStatus(function(response) {
                geoCheckerPanel.updateGeoStatus(response.geoStatus);
            });
            
            geoParaPanel.getContainer().hide();
        } else {
            geoCheckerPanel.getContainer().hide();
            geoParaPanel.getContainer().show();
        }
        
        
        volumeCheckerPanel.getContainer().hide();
        volumeParaPanel.getContainer().show();
        
        timeCheckerPanel.getContainer().hide();
        timeParaPanel.getContainer().show();
        
        routeCheckerPanel.getContainer().hide();
        routeParaPanel.getContainer().show();
        
    }
    
    function refreshSlidersValue(solverParameterList) {
        //refresh parameter slider value
        geoParaPanel.setGeoParameters(solverParameterList);
        volumeParaPanel.setVolumeParameters(solverParameterList);
        timeParaPanel.setTimeParameters(solverParameterList);
        routeParaPanel.setRouteParameters(solverParameterList);
    }
    
    function initFileUploadPanel() {
        fileUploadPanel = new IFL.Widget.FileUploadPanel({
            serverUrl: Config.ctsServerUrl + '/file/upload'
        });
        
        fileUploadPanel.getContainer().dialog({
            modal: true,
            title: 'Upload CTS Excel File',
            autoOpen: false,
            height: 220,
            width: 400
        });
        
        var dialog = fileUploadPanel.getContainer().dialog('widget');
        $( 'a.ui-dialog-titlebar-close', dialog).remove();
        
        fileUploadPanel.registerHandler('start', function() {
            fileUploadPanel.showLoading(true);
        });
        
        fileUploadPanel.registerHandler('completed', function() {
            fileUploadPanel.showLoading(false);
            showFileUploadPopup(false);
            
            // Data uploaded, so try load lastest user details
            location.reload();
        //initAccountDetails();
        });
        
        fileUploadPanel.registerHandler('failed', function(fileName, errorOptions) {
            fileUploadPanel.showLoading(false);
            IFL.Util.showErrorDialog('Failed to parse excel file input', errorOptions.xhr.responseText, 300, 500);
        });
    }
    
    function showFileUploadPopup(isDisplay) {
        var isOpen = isDisplay ? 'open' : 'close';
        fileUploadPanel.getContainer().dialog(isOpen);
    }
    
    function initHandlers() {
        ctsService.registerHandler('solverResult', function(response) {
            
            if (response.dataValueList) {
                statusContainer.setStatusTable(response.dataValueList);
            }
            
            if (response.dataQualityList) {
                statusContainer.setDataQulity(response.dataQualityList);
            }
        });
        
        ctsService.registerHandler('ctsOptCreated', function(response) {
            if (response.ctsOptInfo) {
                ctsOptPanel.addOptInfo(response.ctsOptInfo);
            }
        });
        
    }
    
    function initGeoTab() {
        var geoCheckerContainer = layoutManager.getGeoCheckerContainer();
        geoCheckerContainer.css({
            position: 'relative',
            height: 650
        });
        
        geoParaPanel = new IFL.CTS.GeoParaPanel({
            buttonHandler: function() {
                geoParaPanel.displayLoading(true);
                var geoParameters = geoParaPanel.getGeoParameters();
                ctsService.checkGeo(function() {
                    geoParaPanel.displayLoading(false);
                    geoParaPanel.getContainer().hide();
                    geoCheckerPanel.getContainer().show();
                    geoCheckerPanel.initGeoRouteService();
                    
                    //update parameter value on left panel
                    statusContainer.setSolverParameters(geoParameters);
                    //update status panel
                    statusContainer.setCheckList({
                        geo: 'CHECKED'
                    });
                    
                    //update geo status bar
                    ctsService.getGeoStatus(function(response) {
                        geoCheckerPanel.updateGeoStatus(response.geoStatus);
                    });
                }, geoParameters);
                
            }
        });
        
        geoCheckerPanel = new IFL.CTS.GeoCheckerPanel();
        geoCheckerPanel.getContainer().hide();
        
        //Register Commit handler
        geoCheckerPanel.registerHandler('commit', function() {
            ctsService.commitGeoLocations(function(response) {
                if (response.isReady) {
                    geoCheckerPanel.refreshAfterCommit(response.geoStatus);
                    
                    //enable the other thress checker tabs
                    layoutManager.enableCheckerTabs(true);
                    
                    //update status panel
                    statusContainer.setCheckList({
                        geo: 'CORRECTED'
                    });
                } else {
                    IFL.Util.showErrorDialog("Error", 'Not All locations were resolved');
                }
            });
        });
            
       
        
        geoCheckerContainer.append(geoParaPanel.getContainer()).append(geoCheckerPanel.getContainer());
    }
    
    function initTimeTab() {
        var container = layoutManager.getTimeCheckerContainer();
        
        
        timeParaPanel = new IFL.CTS.TimeParaPanel({
            buttonHandler: function() {
                timeParaPanel.displayLoading(true);
                
                var timeParameters = timeParaPanel.getTimeParameters();
                ctsService.checkTime(function(checkerResult) {
                    timeParaPanel.getContainer().hide();
                    timeCheckerPanel.getContainer().show();
                    timeCheckerPanel.initTimeChecker(checkerResult.routes);
                    
                    timeParaPanel.displayLoading(false);
                    
                    //update parameter value on left panel
                    statusContainer.setSolverParameters(timeParameters);
                    //update status panel
                    statusContainer.setCheckList({
                        time: 'CHECKED'
                    });
                    
                    //update data qulity list even it's hiding
                    var numOfViolation = 0;
                    for (var i in checkerResult.routes) {
                        var route = checkerResult.routes[i];
                        numOfViolation += route.numOfViolation;
                    }
                    statusContainer.setDataQulity({
                        routeDuration: {
                            val: numOfViolation,
                            max: timeParameters.maxTime
                        }
                    });
                }, timeParameters)
            }
        });
        
        timeCheckerPanel = new IFL.CTS.TimeCheckerPanel({
            reRunHandler: function() {
                timeCheckerPanel.getContainer().hide();
                timeParaPanel.getContainer().show();
            },
            exportHandler: exportHandler
        });
        
        timeCheckerPanel.getContainer().hide();
        
        container.append(timeParaPanel.getContainer()).append(timeCheckerPanel.getContainer());
    //        timeChecker = new IFL.CTS.TimeCheckerChart();
    //        timeChecker.getContainer().appendTo(container);
    //                    
    //        timeChecker.setRoutes(testTimeVehs);
    }
            
    function initRouteTab() {
        var container = layoutManager.getRouteCheckerContainer();
        //        container.css('font-size', '0.8em');
        //        
        //        routeCheckerTable = new IFL.CTS.RouteCheckerTable({
        //            width: 800
        //        }); 
        //        routeCheckerTable.getContainer().appendTo(container);
        routeParaPanel = new IFL.CTS.RouteParaPanel({
            buttonHandler: function() {
                routeParaPanel.displayLoading(true);
                
                var rotueParameter = routeParaPanel.getRouteParameters();
                ctsService.checkRoute(function(checkerResult) {
                    routeParaPanel.getContainer().hide();
                    routeCheckerPanel.getContainer().show();
                    routeCheckerPanel.initRouteChecker(checkerResult.routes);
                    
                    routeParaPanel.displayLoading(false);
                    //update parameter value on left panel
                    statusContainer.setSolverParameters(rotueParameter);
                    //update status panel
                    statusContainer.setCheckList({
                        route: 'CHECKED'
                    });
                    //update data qulity list even it's hiding
                    var numOfViolation = 0;
                    for (var i in checkerResult.routes) {
                        var route = checkerResult.routes[i];
                        numOfViolation += route.missedTimeWindow;
                    }
                    statusContainer.setDataQulity({
                        timeWindow: {
                            val: numOfViolation,
                            max: rotueParameter.maxTimeWindow
                        }
                    });
                }, rotueParameter);
            }
        });
        
        routeCheckerPanel = new IFL.CTS.RouteCheckerPanel({
            reRunHandler: function() {
                routeCheckerPanel.getContainer().hide();
                routeParaPanel.getContainer().show();
            },
            exportHandler: exportHandler
        });
        
        routeCheckerPanel.getContainer().hide();
        container.append(routeParaPanel.getContainer()).append(routeCheckerPanel.getContainer());
    }
            
    function initVolumeTab() {
        var container = layoutManager.getVolumeCheckerContainer();
        //        volumeChecker = new IFL.CTS.VolumeCheckerChart({standardUtilisation: 100});
        //        volumeChecker.getContainer().appendTo(container);
        //                    
        //        volumeChecker.setRoutes(testVolumeVehs);
        
        volumeParaPanel = new IFL.CTS.VolumeParaPanel({
            buttonHandler: function() {
                volumeParaPanel.displayLoading(true);
                
                var volumeParameters = volumeParaPanel.getVolumeParameters();
                ctsService.checkVolume(function(checkerResult) {
                    volumeParaPanel.getContainer().hide();
                    volumeCheckerPanel.getContainer().show();
                    volumeCheckerPanel.initVolumeChecker(checkerResult);
                    
                    volumeParaPanel.displayLoading(false);
                    
                    //update parameter value on left panel
                    statusContainer.setSolverParameters(volumeParameters);
                    //update status panel
                    statusContainer.setCheckList({
                        volume: 'CHECKED'
                    });
                    //update data qulity list even it's hiding
                    statusContainer.setDataQulity({
                        routeCapacity: {
                            val: checkerResult.numOfViolation,
                            max: checkerResult.standardUtilisation
                        }
                    });
                }, volumeParameters);
            }
        });
        
        volumeCheckerPanel = new IFL.CTS.VolumeCheckerPanel({
            reRunHandler: function() {
                volumeCheckerPanel.getContainer().hide();
                volumeParaPanel.getContainer().show();
            },
            exportHandler: exportHandler
        });
        
        volumeCheckerPanel.getContainer().hide();
        
        container.append(volumeParaPanel.getContainer()).append(volumeCheckerPanel.getContainer());
        
    }
    
    function initBaseCasePanel(solverParameters) {
        baseCasePanel = new IFL.CTS.BaseCasePanel();
        baseCasePanel.setSliderValue(solverParameters);
        
        baseCasePanel.registerHandler('generate', function() {
            var parameters = baseCasePanel.getSliderValues();
            ctsService.generateBaseCase(function(ropSolution){
                baseCasePanel.showRopSolution(ropSolution);
                statusContainer.baseCaseProceedLayout();
            }, parameters);
                
        });
    }
    
    function initCtsOptPanel(customerGroups) {
        ctsOptPanel = new IFL.CTS.CTSOptPanel({
            customerGroups: customerGroups,
            ctsService: ctsService
        });
        
        ctsOptPanel.registerHandler('runCts', function() {
            var solverParas = ctsOptPanel.getSolverParameters();
            ctsService.generateCtsOpt(function(response) {
                var optInfo = response.ctsOptInfo;
                ctsOptPanel.updateOptInfo(optInfo);
                ctsOptPanel.addDataSummary(optInfo);
            }, customerGroups, solverParas);
        });
        
        ctsOptPanel.registerHandler('runGro', function() {
            var solverParas = ctsOptPanel.getSolverParameters();
            ctsService.generateGroOpt(function(response) {
                var optInfo = response.ctsOptInfo;
                ctsOptPanel.updateOptInfo(optInfo);
                ctsOptPanel.addDataSummary(optInfo);
            }, customerGroups, solverParas);
        });
        
        ctsOptPanel.registerHandler('runDyn', function(selectedTypes) {
            var solverParas = ctsOptPanel.getSolverParameters();
            ctsService.generateDynOpt(function(response) {
                var optInfo = response.ctsOptInfo;
                ctsOptPanel.updateOptInfo(optInfo);
                ctsOptPanel.addDataSummary(optInfo);
            }, customerGroups, solverParas, selectedTypes);
        });
        
        ctsOptPanel.registerHandler('runDynId', function(optRequest) {
            var solverParas = ctsOptPanel.getSolverParameters();
            ctsService.generateDynIdOpt(function(response) {
                var optInfo = response.ctsOptInfo;
                ctsOptPanel.updateOptInfo(optInfo);
                ctsOptPanel.addDataSummary(optInfo);
            }, customerGroups, solverParas, optRequest);
        });
        
        ctsOptPanel.registerHandler('report', function(reportContents) {
            ctsService.exportSolutionReport(reportContents);
        });
        
        ctsOptPanel.registerHandler('showMap', function(optInfo, mapPara) {
            
            var mapViewName;
            if (Config.newWindow) {
                mapViewName = '_blank';
            } else {
                mapViewName = 'mapView';
            }
            
            console.info('show map view with parameters: ' + mapPara);
            window.open('mapView.html?' + mapPara, mapViewName, 'fullscreen=yes');
        });
        
        ctsOptPanel.registerHandler('showRobust', function(optInfo, mapPara) {
            
            var mapViewName;
            if (Config.newWindow) {
                mapViewName = '_blank';
            } else {
                mapViewName = 'robustReportView';
            }
            
            console.info('show map view with parameters: ' + mapPara);
            window.open('robustReportView.html?' + mapPara, mapViewName, 'fullscreen=yes');
        });
        
        ctsOptPanel.registerHandler('showChart', function(optInfo) {
            ctsService.getCtsOptSolution(optInfo.id, function(solution) {
                ctsOptPanel.showScheduleDetailPopup(solution, optInfo.name);
            })
        });
        
        ctsOptPanel.registerHandler('showParameters', function(optInfo) {
            ctsService.getCtsOptParameters(optInfo.id, function(optInfo) {
                ctsOptPanel.showParameterPopup(optInfo);
            })
        });
        
        ctsOptPanel.registerHandler('delete', function(optInfo) {
            ctsService.deleteCtsOpt(optInfo.id, function() {
                //ctsOptPanel.showParameterPopup(optInfo);
                })
        });
        
        ctsOptPanel.registerHandler('rerun', function(optInfo) {
            ctsService.rerunOpt(optInfo, function() {
                location.reload();
            })
        });
    }
    
    function initStatusPanel() {
        var westContainer = layoutManager.getWestPanelContainer();
        
        statusContainer = new IFL.CTS.DataStatusContainer();
        statusContainer.getContainer().appendTo(westContainer);
        
        statusContainer.registerHandler('confirm', function() {
            ctsService.confirmOpt("baseCase", function(response) {
                initBaseCaseLayout(response.solverParameterList);
            });
        });
        
        statusContainer.registerHandler('proceed', function() {
            initCtsLayout();
        });
    }
    
    function initCtsLayout() {
        //try get cts opt inits first
        ctsService.getCtsOptInits(function(response) {
                
            //init cts panel and layout
            initCtsOptPanel(response.groupMember);
            layoutManager.ctsOptLayout();
            var centerPanel = layoutManager.getCenterPanelContainer();
            centerPanel.empty();
            centerPanel.css({
                overflow: 'auto'
            });
            centerPanel.append(ctsOptPanel.getContainer());
                
            //then add base case and rop data value list and existing cts opts data value list
            for (var d in response.optInfos) {
                var optInfo = response.optInfos[d];
                ctsOptPanel.addOptInfo(optInfo);
                
                if (optInfo.status == 'completed') {
                    //opt only got data summary when it's completed
                    ctsOptPanel.addDataSummary(optInfo);
                } else if (optInfo.status == 'in progress') {
                    //try keep on polling if it's not finished last time when user close browser
                    ctsService.pollCtsOptScenario(optInfo.scenarioId, function(response) {
                        var optInfo = response.ctsOptInfo;
                        ctsOptPanel.updateOptInfo(optInfo);
                        ctsOptPanel.addDataSummary(optInfo);
                    });
                    
                }
                    
            }
        })
    }
    
    function initCheckersLayout(response) {
        //Only show page contents after get user information and user uploaded Excel file
        initTabContents();
            
        //init parameter slider value
        if (response.solverParameterList) {
            refreshSlidersValue(response.solverParameterList);
        }
                
        //init tabs layout
        if (response.dataStatusList) {
            resetTabsLayout(response.dataStatusList);
        }
    }
    
    function initBaseCaseLayout(solverParameters) {
        statusContainer.baseCaseConfirmLayout();
                
        //init base case panel and add it into center
        initBaseCasePanel(solverParameters);
        var centerPanel = layoutManager.getCenterPanelContainer();
        centerPanel.empty();
        centerPanel.css({
            overflow: 'auto'
        });
        centerPanel.append(baseCasePanel.getContainer());
    }
    
}