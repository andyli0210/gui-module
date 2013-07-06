function AppStarter() {
    var mapservice;
    var depotPopups = {};
    var costPopup;
    var infoPopup;
    var smallMapPopup;
    var unscheduledPopup;
    var panelService;
    
    var windowHeight;
    var goButton;
    
    var topPlayerPanel;
    var playerNamePopup;
    var demandToolTipPoint;
    var demandToolTipPopup;
    
    init();
    function init() {
        Config.isMobile = $.browser.mobile;
        windowHeight = $(document).height();
        Config.screenRatio = windowHeight / 1280;
        console.info('Screen Ratio: ' + windowHeight + ' / 1280 = ' + Config.screenRatio);
        
        initMapService();
        initPanelService();
        
        initDepotsPoints();

        initCosePopup();
        initDepotPopups();
        
        //Not enough space on mobile, so don't show them
        if (!Config.isMobile) {
            initUnscheduledPopup();
            
            //No point to have leader board when demand is configurable
            if (!Config.isDemandConfigurable) {
                initTopPlayerPanel();
            }
            
        }
        //initSmallMapPopup();
        initCapacityInfoPopup();
        initGoButtonPopup();
        
        if (!Config.isMobile) {
            initToolTips();
        }
        
        initHandlers();
    }
    
    function initPanelService() {
        panelService = new IFL.Panel.PanelService();
    }
    
    function initMapService() {
        //mapservice = new IFL.MapService.EMS('mapContainer');
        mapservice = new IFL.MapService.Google('mapContainer');
        
        var routeService = new IFL.Panel.FakeLcpService();
        mapservice.setRouteService(routeService);
    }
    
    function initDepotPopups() {
        //if (!Config.isMobile) {
        var bottom = windowHeight;
        var spacing = 40 * Config.screenRatio;
        //var spacing = 
        var depotHeight = 150 * Config.screenRatio;
            
        console.info('bottom: ' + bottom);
        console.info('spacing: ' + spacing);
        console.info('depotHeight: ' + depotHeight);
            
        console.info('depot top:' + (bottom-depotHeight*3-spacing*2));
        console.info('depot top:' + (bottom-depotHeight*2-spacing*1));
        console.info('depot top:' + (bottom-depotHeight));
            
        canberraDepotPopup = new IFL.Panel.DepotPopup({
            title: 'Canberra Depot',
            //width: 600,
            position: ['right'],
            index: 2
        }, true);
            
        newcastleDepotPopup = new IFL.Panel.DepotPopup({
            title: 'Newcastle Depot',
            //width: 600,
            position: ['right'],
            index: 0
        }, true);
            
        sydneyDepotPopup = new IFL.Panel.DepotPopup({
            title: 'Sydney Depot',
            //width: 600,
            position: ['right'],
            index: 1
        }, true);
            
        var popupHeight = sydneyDepotPopup.getPopupHeight();
        console.info('popup height:' + sydneyDepotPopup.getPopupHeight());
            
        sydneyDepotPopup.setTop(bottom-popupHeight*2-spacing*2);
        canberraDepotPopup.setTop(bottom-popupHeight-spacing);
        newcastleDepotPopup.setTop(bottom-popupHeight*3-spacing*3)
            
        //        } else {
        //            var top = 40;
        //            var spacing = 25;
        //            newcastleDepotPopup = new IFL.Panel.DepotPopup('Newcastle Depot', 600, ['right', top], 0);
        //            sydneyDepotPopup = new IFL.Panel.DepotPopup('Sydney Depot', 600, ['right', (top+spacing)], 1);
        //            canberraDepotPopup = new IFL.Panel.DepotPopup('Canberra Depot', 600, ['right', (top+spacing*2)], 2);
        //            alert('top: ' + top + ', spacing: ' + spacing + ', top + spacing*2: ' + (top+spacing*2));
        //            
        //        }
        
        initDepotPopupClickHandlers();
    }
    
    function initDepotPopupClickHandlers() {
        newcastleDepotPopup.registerHandler('click', depotClickHandler(newcastleDepotPopup)); 
        sydneyDepotPopup.registerHandler('click', depotClickHandler(sydneyDepotPopup)); 
        canberraDepotPopup.registerHandler('click', depotClickHandler(canberraDepotPopup)); 
    }
    
    function depotClickHandler(depot) {
        return function(vehicle, slotIndex) {
            var modelIndex
            if (vehicle) {
                modelIndex = vehicle.modelIndex;
                vehicle.slotIndex = -1;
                vehicle.depotIndex = -1;
                vehicle.utilisation = 0;
            } else {
                modelIndex = -1;
            }
        
            if (modelIndex == 2) {
                depot.setVehicle(null, slotIndex);
            } else {
                var veh = findNextAvailableVehByModel(modelIndex + 1);
                depot.setVehicle(veh, slotIndex);
            }
            
            //update total truck capacity on capacity info popup
            if (infoPopup) {
                var total = panelService.getTotalTruckCapacity(VehiclesConfig);
                infoPopup.updateToalCapacity(total);
            }
            
        // show tooltips for GO button
        //goButton.qtip("show");
            
        }
    }
    
    function findNextAvailableVehByModel(modelIndex) {
        for (var v in VehiclesConfig) {
            var veh = VehiclesConfig[v];
            if (veh.modelIndex == modelIndex && veh.slotIndex < 0 && veh.depotIndex <0) {
                return veh;
            }
        }
        
        console.warn('Did NOT find available vehicle with model index: ' + modelIndex);
        return null;
    }
    
    function initCosePopup() {
        costPopup = new IFL.Panel.CostPopup({}, true);
    }
    
    function initCapacityInfoPopup() {
        //        var position;
        //        if (Config.isMobile) {
        //            position = ['left','top'];
        //        }
        
        infoPopup = new IFL.Panel.CapacityPopup({}, true);
    }
    
    function initSmallMapPopup() {
        var content = $('<div><img src="images/inset.png" style="width: 100%; height: 100%;"></div>');
    
        content.dialog({
            title: 'Australia Map',
            width: 250 * Config.screenRatio,
            height: 240 * Config.screenRatio,
            //maxHeight: 200,
            position: ['left', 'bottom'],
            closeOnEscape: false
        });
    
        $( 'a.ui-dialog-titlebar-close', content.parent()).remove();
        var fontSize = 20*Config.screenRatio;
        $( '.ui-dialog-title', content.parent()).css('font-size', fontSize+'px');
    
        if (Config.isMobile) {
            content.parent().hide();
        }
    }
    
    function initGoButtonPopup() {
        goButton = $('<button>Go</button>').button();
        
        //        button.dialog({
        //            position: ['left', 'bottom'],
        //            closeOnEscape: false,
        //            height: 100,
        //            width: 50
        //        })
        
        goButton.css({
            'font-size': 100 * Config.screenRatio,
            zIndex: 1000,
            position: 'absolute',
            bottom: 2,
            left: 2,
            'background-color': '#33FF00',
            '-moz-border-radius': '15px',
            '-webkit-border-radius': '15px',
            border: '5px solid #009900',
            padding: '5px'
        });
        
        goButton.click(function() {
            goButton.button('disable');
            panelService.runSolver(VehiclesConfig, function(result) {
                displayResult(result);
                goButton.button('enable');
                
                if (result.isTop && topPlayerPanel) {
                    showPlayerNamePopup(result.id, result.cost);
                }
            });
        })
        
        goButton.appendTo('body');
    // $( 'a.ui-dialog-titlebar-close', button.parent()).remove();
    }
    
    function initUnscheduledPopup() {
        unscheduledPopup = new IFL.Panel.UnSchedulePopup({}, true);
    }
    
    function initHandlers() {
        mapservice.registerHandler('clickDemandPoint', function(depot, options) {
            panelService.updateDepotCommodity(depot, options.label);
            demandToolTipPopup.close();
        })
    }
    
    function initDepotsPoints() {
        var bounds = mapservice.getBoundsObject();
        for (var d in DepotsConfig) {
            var depot = DepotsConfig[d];
            var color;
            var size;
            
            var label = depot.commodity || depot.id;
            var lonlat = depot.lonlat;
            var domain;
            var clickable;
            if (depot.commodity) {
                color = '#FF0000';
                size = depot.commodity;
                domain = depot;
                clickable = Config.isDemandConfigurable;
            } else {
                color = '#FFFF00';
                size = 15;
            }
            
            var demandMarker = mapservice.addDemandPoint(lonlat, color, size, label, color, clickable, domain);
            
            if (clickable && depot.id == 'Gilgandra') {
                demandToolTipPoint = demandMarker;
            }
            
            bounds = mapservice.extendToPoint(bounds, lonlat);
        }
        
        mapservice.zoomToBounds(bounds, 10);
        
    //        console.info('before set center');
    //        //debugger;
    //        mapservice.centerMap({
    //            lon: 153.40, 
    //            lat: -33.28
    //        }, 7);
    //        //mapservice.
    //        console.info('after set center');
    }
    
    function displayDepotPoints() {
        for (var d in DepotsConfig) {
            var depot = DepotsConfig[d];
            var color;
            var size;
            
            var label = depot.commodity || depot.id;
            var lonlat = depot.lonlat;
            
            if (!depot.commodity && depot.commodity != 0) {
                color = '#FFFF00';
                size = 15;
                mapservice.addDemandPoint(lonlat, color, size, label, color);
            } 
        }
    }
    
    function displayUnusedPoints() {
        for (var d in DepotsConfig) {
            var depotConfig = DepotsConfig[d];
            if (depotConfig.commodity == 0) {
                var size = depotConfig.commodity;
                var color = '#FF0000';
                var location = depotConfig.lonlat;
                mapservice.addDemandPoint(location, color, size, 0, color, Config.isDemandConfigurable, depotConfig);
            }
        }
    }
    
    function displayUnscheduledPoints(unschedules) {
        var unscheduleRequests = [];
        for (var s in unschedules) {
            var unschedule = unschedules[s];
            var request = unschedule.refRequest;
            var commodity = parseInt(request.commodities.commodity);
            var location = request.location.refLocation;
            
            var size = commodity;
            var color = '#FF0000';
            mapservice.addDemandPoint(location, color, size, commodity, color, Config.isDemandConfigurable, request);
            
            unscheduleRequests.push(request);
        }
        
        //update unscheduled popup if it's there
        if (unscheduledPopup) {
            unscheduledPopup.setUnSchedules(unscheduleRequests);
        }
    }
    
    function displayResult(result) {
        mapservice.clear();
        displayDepotPoints();
        displayUnscheduledPoints(result.solution.unscheduleds.unscheduled);
        displayRoutes(result.solution.routes.route);
        displayUnusedPoints();
        displayCost(result.cost);
    }
    
    function displayCost(cost) {
        //if there is capacity info popup, set current cost to previous cost field
        //also update potential to save
        if (infoPopup) {
            infoPopup.setPreCost(costPopup.getCost());
                    
            var potentialSave = panelService.getPotentialToSave(cost);
            infoPopup.setPotentialToSave(potentialSave);
        }
                
        costPopup.setCost(cost);
    }
    
    function displayRoutes(routes) {
        for (var r in routes) {
            var route = routes[r];
            var visits = route.stops.stop;
            
            if (!visits || visits.length <=2) {
                continue;
            }
            
            var vehId = route.vehicles.vehicle.refVehicle.id;
            var vehconfig = panelService.getVehicleConfigbyId(vehId);
            
            mapservice.getRoute(visits, {
                onLCPServiceFinish: function(pathPoints) {
                    mapservice.drawPolyline(pathPoints, null,{
                        normalStyle: {
                            strokeColor: vehconfig.color,
                            strokeOpacity: 1
                        }
                    });
                }
            });
            
            //display deliveried depot points on map
            for (var i=1; i<visits.length-1; i++) {
                var visit = visits[i];
                var location = visit.refLocation;
                
                var requestId = location.id.replace("loc-","");
                var request = DepotsConfig[requestId];
                
                if (!request) {
                    debugger;
                }
                var commodity = parseInt(request.commodity);
                var size = commodity;
                mapservice.addDemandPoint(location, '#FFFF00', size, commodity, vehconfig.color, Config.isDemandConfigurable, request);
            }
            
            //also update vehicle's commodity utilisation
            vehconfig.utilisation = visits[visits.length-1].commodities.commodity;
        }
        
        //update commodity utilisation on depot popup
        refreshDepotCommodityUtilisation();
        
        //also update capacity utilisation on capacity info popup
        if (infoPopup) {
            var usage = panelService.getCapacityUsage(VehiclesConfig);
            infoPopup.setUtilisation(usage);
        }
    }
    
    function refreshDepotCommodityUtilisation() {
        sydneyDepotPopup.refreshCommodityUtilisation();
        newcastleDepotPopup.refreshCommodityUtilisation();
        canberraDepotPopup.refreshCommodityUtilisation();
    }
    
    function initToolTips() {
        var toolTipOptions = {
            position: {
                corner: {
                    target: 'leftMiddle',
                    tooltip: 'rightMiddle'
                }
            },
            style: { 
                //                width: 200,
                //                padding: 5,
                //                background: '#A2D959',
                //                color: 'black',
                //                textAlign: 'center',
                //                border: {
                //                    width: 7,
                //                    radius: 5,
                //                    color: '#A2D959'
                //                },
                fontSize: 30 * Config.screenRatio,
                tip: 'rightMiddle',
                name: 'dark' // Inherit the rest of the attributes from the preset dark style
            },
            show: {
                ready: true,
                when: {
                    event: false
                }
            },
            hide: 'click'
        }
    
        var depotToolTipOptions = $.extend(true, {}, toolTipOptions, {
            content: 'Click depot Cell to add/switch vehicle'
        });
        
        sydneyDepotPopup.getContainer().qtip(depotToolTipOptions);
        newcastleDepotPopup.getContainer().qtip(depotToolTipOptions);
        canberraDepotPopup.getContainer().qtip(depotToolTipOptions);
        
        var goButtonToolTipOptions = $.extend(true,{}, toolTipOptions, {
            content: 'Click Go to run the Solver',
            position: {
                corner: {
                    target: 'topMiddle',
                    tooltip: 'bottomLeft'
                }
            },
            style: { 
                tip: 'bottomLeft'
            },
            show: {
                ready: true,
                when: {
                    event: false
                }
            }
        });
        
        goButton.qtip(goButtonToolTipOptions);
        
        var topButtonToolTipOpts = $.extend(true,{}, toolTipOptions, {
            content: 'Click Show/Hide Leaders Board',
            position: {
                corner: {
                    target: 'bottomMiddle',
                    tooltip: 'topMiddle'
                }
            },
            style: { 
                tip: 'topMiddle'
            },
            show: {
                ready: true,
                when: {
                    event: false
                }
            }
        });
        
        if (topPlayerPanel) {
            $('button', topPlayerPanel.getContainer()).qtip(topButtonToolTipOpts);
        }
        
        if (demandToolTipPoint) {
            var infoWinOptions = {
                isCustInfoPopup: true,
                content: '<div style="color: white;">Click to change customer demands</div>',
                backgroundColor: '#505050',
                border: '3px solid #303030',
                borderRadius: 4,
                padding: '5px 9px',
                'font-size': 30 * Config.screenRatio,
                arrowSize: 10,
                arrowPosition: 90,
                arrowStyle: 1,
                hideCloseButton: true,
                disableAutoPan: true,
                marker: demandToolTipPoint
            }
            
            demandToolTipPopup = mapservice.addMapPopup(null, infoWinOptions);
        }
        
    }
    
    function initTopPlayerPanel() {
        topPlayerPanel = new IFL.Panel.TopSlidePanel({}, true);
                
        $(document.body).append(topPlayerPanel.getContainer());
        
        panelService.getTopPlayers(function(players) {
            topPlayerPanel.setPlayerScores(players);
        });
        
    }
    
    function showPlayerNamePopup(scheduleId, cost) {
        var titleSize = 30 * Config.screenRatio;
        var contentSize = 25 * Config.screenRatio;
        
        playerNamePopup = $('<div/>').css('font-size', contentSize+'px');
        playerNamePopup.append('<p>You just achieved one of the most cost effective schdules with cost: <b>$' + cost + '</b></p>');
        var nameInput = $('<input type="text" length="10"/>');
        playerNamePopup.append('Please input your name or nickname<br/>');
        playerNamePopup.append(nameInput);
        
        nameInput.keypress(function(e) {
            if (e.which == 13) {
                setPlayerName(scheduleId, nameInput);
            }
        });
        
        playerNamePopup.dialog({
            title: 'Congratulations, You hit top 10 !',
            //height: 600,
            width: 900 * Config.screenRatio,
            modal: true,
            buttons: [ {
                text: "Ok", 
                click: function() {
                    setPlayerName(scheduleId, nameInput);
                }
            } ],
            close: function() {
                playerNamePopup.dialog('destroy');
                playerNamePopup.remove();
                playerNamePopup = null;
            }
        });
        
        $('.ui-dialog-title', playerNamePopup.parent()).css('font-size', titleSize+'px');
    }
    
    function setPlayerName(scheduleId, nameInput) {
        if ( !nameInput.val()) {
            alert('Player name can NOT be empty !');
            return;
        }
                    
        panelService.setPlayerName(scheduleId, nameInput.val(), function(){
            playerNamePopup.dialog("close");
            panelService.getTopPlayers(function(players) {
                topPlayerPanel.setPlayerScores(players);
            });
        });
    }
    
}

