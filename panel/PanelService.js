IFL.Panel.PanelService = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    var loadingPopup;
    init();
    
    function init() {
        initLoading();
    }
    
    function initDefaultOptions() {
        options = {
            panelServerUrl: Config.panelServerUrl
        }
    }
    
    function setPlayerName(scheduleId, name, callback) {
        $.ajax({
            url: options.panelServerUrl + 'solver/setPlayer?schedule=' + scheduleId + '&player=' + name,
            type: 'POST',
            success: function() {
                console.info('Successful set player name: ' + name);
                callback();
            },
            error: function() {
                alert('Failed to get top players !!!!');
            }
        });
    }
    
    function getTopPlayers(callback) {
        $.ajax({
            url: options.panelServerUrl + 'solver/topPlayers?top=10',
            method: 'GET',
            dataType: 'json',
            success: function(playerScores) {
                callback(playerScores);
            },
            error: function() {
                alert('Failed to get top players !!!!');
            }
        });
    }
    
    function runSolver(vehicles, callback) {
        var vehicleMappings = {
            vehicles: vehicles
        }
        
        //alert('going to run solver at: ' + options.panelServerUrl + 'solver/run');
        //var msg = generateMappingString(vehicles);
        var vehMappings = generateVehMappingConfig(vehicles);
        //alert('msg');
        var custConfigs = genreateCustomerConfigs(DepotsConfig);
        var panelRequest = {
            vehicles: vehMappings,
            depots: custConfigs,
            isDemandConfigurable: Config.isDemandConfigurable
        }
        //debugger;
        loadingPopup.show();
        $.ajax({
            url: options.panelServerUrl + 'solver/run',
            type:'POST',
            data: JSON.stringify(panelRequest),
            contentType: 'application/json',
            dataType: 'json',
            success: function(result) {
                loadingPopup.hide();
                callback(result);
            },
            error: function() {
                loadingPopup.hide();
                alert('Server failed !!!!');
            }
        })
    }
    
    function getVehicleConfigbyId(vehId) {
        for (var v in VehiclesConfig) {
            var vehicle = VehiclesConfig[v];
            if (vehicle.id == vehId) {
                return vehicle;
            }
        }
        
        console.warn('Did NOT find vehicle config for id: ' + vehId);
        return null;
    }
    
    function generateMappingString(vehicleConfigs) {
        var mappingString = '';
        for (var v in vehicleConfigs) {
            var veh = vehicleConfigs[v];
            if (v == 'undefined') {
                console.error('found undefind vehicle');
            }
            var rowContent = '{' + veh.id + "}," + veh.modelIndex + "," + veh.depotIndex + "," + veh.slotIndex + "\\n"
            mappingString += rowContent;
        }
        
        console.info('Generated vehicle mapping string: ' + mappingString);
        return mappingString;
    }
    
    function genreateCustomerConfigs(depotConfigs) {
        var custConfigs = [];
        for (var d in depotConfigs) {
            var depot = depotConfigs[d];
            
            if (!depot.commodity && depot.commodity != 0) {
                continue;
            }
            
            var custConfig = {
                id: depot.id,
                commodity: depot.commodity
            }
            
            custConfigs.push(custConfig);
        }
        
        return custConfigs;
    }
    
    function generateVehMappingConfig(vehicleConfigs) {
        var vehMappings = [];
        for (var v in vehicleConfigs) {
            var veh = vehicleConfigs[v];
            if (v == 'undefined') {
                console.error('found undefind vehicle');
            }
            
            var vehConfig = {
                id: veh.id,
                depotId: veh.depotIndex,
                slotIndex: veh.slotIndex,
                modelIndex: veh.modelIndex
            }
            
            vehMappings.push(vehConfig);
        }
        
        return vehMappings;
    }
    
    function getTotalTruckCapacity(vehicleConfigs) {
        var total = 0;
        for (var v in vehicleConfigs) {
            var veh = vehicleConfigs[v];
            
            if (veh.depotIndex > -1 && veh.slotIndex > -1) {
                total += veh.commodity;
            }
        }
        
        return total;
    }
    
    function getCapacityUsage(vehicleConfigs) {
        var total = 0;
        var usage = 0;
        
        for (var v in vehicleConfigs) {
            var veh = vehicleConfigs[v];
            
            if (veh.depotIndex > -1 && veh.slotIndex > -1) {
                total += veh.commodity;
                usage += veh.utilisation;
            }
        }
        
        if (total) {
            
            return (usage/total*100).toFixed(2) + '%';
        } else {
            return '';
        }
    }
    
    function getPotentialToSave(cost) {
        var bestCost = 3128;
        
        if (cost) {
            var save = (cost - bestCost) / cost;
            
            var saveString = (save*100).toFixed(2) + '%';
            return saveString;
        } else {
            return '';
        }
    }
    
    function initLoading() {
        //        loadingPopup = new IFL.Widget.LoadingPopup({
        //            loadingImagePath: Config.imagePath + '/loading_big2.gif'
        //        });
        
        var width= 500;
        //if (Config.isMobile) {
        width *= Config.screenRatio;
        //}
        
        var loadingImage = $('<img/>').attr('src',Config.imagePath + '/loading_big2.gif').css({
            width: width,
            height: width
        });
        loadingPopup = $('<div id="loadingPanel" style="position: absolute;z-Index:2000; display: none;"></div>').append(loadingImage);
        loadingPopup.css({
            width: width,
            height: width
        })

        var top = ($(document).height() - width) / 2;
        var left = ($(document).width() - width) / 2;
        loadingPopup.css({
            top: top,
            left: left
        });
    
        loadingPopup.appendTo(document.body);
    }
    
    function updateDepotCommodity(depot, commodity) {
        var depotId = depot.id;
        var depotConfig = DepotsConfig[depotId];
        if (depotConfig) {
            depotConfig.commodity = commodity;
            console.info('Updated depot ' + depot.id + ' commodity to ' + commodity);
        } else {
            console.warn('There is not depot with id: ' + depot.id);
        }
    }
    
    return {
        runSolver: runSolver,
        getVehicleConfigbyId: getVehicleConfigbyId,
        generateMappingString: generateMappingString,
        getTotalTruckCapacity: getTotalTruckCapacity,
        getCapacityUsage: getCapacityUsage,
        getPotentialToSave: getPotentialToSave,
        getTopPlayers: getTopPlayers,
        setPlayerName: setPlayerName,
        updateDepotCommodity: updateDepotCommodity
    }
}


