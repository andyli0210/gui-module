function AppStarter() {
    var mapService;
    var lastProgressStatus;
    var markers = [];
    var depotVehicles = [];
    
    //initBlankLayer();
    var windowKeyDown;
    
    initAppByMode(Config.mode);
    
    function initConfig() {
        Config.screenHeight = screen.height;
        console.info('Screen height: ' + Config.screenHeight);
        Config.isMobile = $.browser.mobile;
        Config.screenRatio = Config.screenHeight / 1280;
        
        lastProgressStatus = 'false';
    }
    
    function initMapService() {
        mapService = new EMSMapService('mapContainer');
        var routeService = new FakeLcpService();
        mapService.setRouteService(routeService);
    }
    
    
    function initAppByMode(mode) {
        var temp = new OpenLayers.LonLat(151, -35.5);
        
        var level = Config.isMobile? 2 : 4;
        mapService.map.setCenter(temp, level);
        mapService.map.markersLayer.setVisibility(false);
        
        //        for (var i = 0; i< mapService.map.controls.length; i++) {
        //            if (mapService.map.controls[i].displayClass == 
        //                "olControlNavigation") {
        //                mapService.map.controls[i].deactivate();
        //            }
        //        }
    
        //mapService.map.zoomToExtent(extent);
        //
        //
        if (!Config.isMobile) {
            initImageLayer();
            mapService.map.setBaseLayer(globe);
        }
            
        
        console.debug('xml url: ' + Config.url);
        initSmallMapPopup();
        initScheduleMapService();
        initLoading();
        initResetKeyEvent();
        resetDepotVehicles();
    
        console.debug('mapping file url: ' + Config.mappingUrl);
        initDepotPopup();
        initCapacityPopup();
        
        if (mode == 'noPanel') {
            console.info('Run IFL demo Without USB board');
            clearTemp();
            //            $('#mapContainer').mousewheel(function(e) {
            //                e.stopPropagation();
            //            });
            //run it without vehicles to show request point on map
            goWithoutBoard();
        } else if (mode == 'server') {
            console.info('Run IFL demo with Server !!!!');
        // $(document.body).mouse
        } else {
            console.info('Run IFL demo with USB board');
            startPolling(Config.mappingUrl);
        }
    }
    
    function refreshDepotVehicles() {
        for (var i=0; i<3; i++) {
            var vehicles = depotVehicles[i];
            switch(i) {
                case 0:
                    newcastleDepotPopup.refreshWithVehicles(vehicles);
                    break;
                case 1:
                    sydneyDepotPopup.refreshWithVehicles(vehicles);
                    break;
                case 2:
                    canberraDepotPopup.refreshWithVehicles(vehicles);
                    break;
            }
        }
    }

    function resetVehicleRoutes() {
        for (var v in VehicleConfig) {
            var vehicle = VehicleConfig[v];
            if (!(vehicle instanceof Object)) {
                continue;
            }
            
            // vehicle.color = '';
            vehicle.utilisation = 0;
        }
        
        refreshDepotVehicles();
    }
    
    function resetDepotVehicles() {
        depotVehicles = [];
        for (var i=0; i<3; i++) {
            depotVehicles[i] = [];
            for (var j=0; j<3; j++) {
                depotVehicles[i][j] = null;
            }
        }
    }
    
    function initResetKeyEvent() {
        $(document.body).keypress(function(event) {
            console.info('click key: ' + event.which);
            
            if ( event.which == 99 || event.which == 67) {
                if (Config.mode == 'panel') {
                    resetApp();
                    capacityPopup.reset();
                }
                
                if (Config.mode == 'noPanel' && windowKeyDown) {
                    goWithoutBoard();
                }
                
            } else if ( event.which == 103 || event.which == 71) {
                if (Config.mode == 'noPanel') {
                    goWithoutBoard();
                } else if (Config.mode == 'server') {
                    goWithServer();
                }
                
            } 
        })
        
        if (Config.mode == 'noPanel') {
            $(document.body).keydown(function(e) {
                if (e.which == 91) {
                    windowKeyDown = true;
                }
            }).keyup(function(e)
            {
                if (e.which == 91) {
                    windowKeyDown = false;
                }
            });
        }
        
        
    }
    
    function goWithoutBoard() {
        loadingDiv.show();
        capacityPopup.setPreCost(VehicleConfig.totalCost);
        generateMappingFile();
        runSolver();
        startPollingScheduleXml();
    }
    
    function goWithServer() {
        loadingDiv.show();
        
        var serverUrl = '/PanelWeb/solver/run';
        //var serverUrl = document.location.href;
        //serverUrl = serverUrl.replace("/panel/panelDemo.html?mode=server","/solver/run");
        scheduleMapService.loadScheduleFromServer(serverUrl, function(){
            loadingDiv.hide();
            refreshCapacities();
                
            newcastleDepotPopup.refresh();
            sydneyDepotPopup.refresh();
            canberraDepotPopup.refresh(); 
        });
    }

    function resetApp() {
        resetVehicleRoutes();
        scheduleMapService.reset();
    }

    function loadingProgress(url) {
        console.debug('loading progress');
        jQuery.ajax({
            cache: false,
            type: "GET",
            url: url,
            dataType: 'xml',
            success: onLoadingProgressSuccess
        });
    } 
    
    function onLoadingProgressSuccess(data) {
    
        var status = $(data).find('progress').text();
        if (lastProgressStatus != status) {
            lastProgressStatus = status;
            console.debug('progress changed to: ' + status);
                
            switch (status) {
                case 'true':
                    displayLoading(true);
                    break;
                case 'false':
                    displayLoading(false);
                    break;
                default:
                    alert('loading progress xml return unknown status: ' + status);
            }
        }
    
    }


    function initLoading() {
        jQuery.fn.center = function () {
            this.css("position","absolute");
            this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
            this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
            return this;
        }
        //debugger;
        loadingDiv = jQuery('<div id="loadingPanel" style="position: absolute; z-Index:2; display: none;"></div>');
        //loadingDiv = jQuery('<img src="images/loading_big2.gif"/>');
        var width = 350 * Config.screenRatio;
        loadingDiv.css({
            width: 350 * Config.screenRatio,
            height: 350 * Config.screenRatio
        });
        
        var loadIcon = $('<img style="width: 100%;" src="images/' + Config.loadingIcon + '"/>').appendTo(loadingDiv);
        var top = ($(window).height() - width) / 2;
        var left = ($(window).width() - width) / 2;
        loadingDiv.css({
            top: top,
            left: left
        });
    
        loadingDiv.appendTo(document.body);
    
    //        setInterval(function() {
    //            loadingProgress(Config.progressUrl);
    //        },parseInt(Config.progressPolling));
    }

    function displayLoading(isShow) {
        if (isShow) {
            capacityPopup.setPreCost(VehicleConfig.totalCost);
            //resetApp()
            resetVehicleRoutes();
            loadingDiv.show();
        } else {
            scheduleMapService.loadSchedule(Config.url, function(){
                loadingDiv.hide();
                //showDepotsColor();
                refreshDepotVehicles();
                refreshCapacities();
            });
        }
    } 

    function initSmallMapPopup() {
    
        var content = jQuery('<div><img src="maps/inset.png" style="width: 100%; height: 100%;"></div>');
    
        content.dialog({
            title: 'Australia Map',
            width: 250 * Config.screenRatio,
            height: 240 * Config.screenRatio,
            //maxHeight: 200,
            position: ['left', 'bottom'],
            closeOnEscape: false
        });
    
        jQuery( 'a.ui-dialog-titlebar-close', content.parent()).remove();
        var fontSize = 20*Config.screenRatio;
        jQuery( '.ui-dialog-title', content.parent()).css('font-size', fontSize+'px');
    
        if (Config.isMobile) {
            content.parent().hide();
        }
    }

    function initScheduleMapService() {
        scheduleMapService = new ScheduleMapService(mapService);
    }

    function initOptisMapService() {
        scheduleMapService = new OptisMapService(mapService);
    }

    function startPolling(url) {
        self.setInterval(function() {
            loadLocationMapping(url);
        },parseInt(Config.mappingPolling));
    }
    
    function startPollingScheduleXml() {
        var schedulePoll = self.setInterval(function() {
            loadSchedule();
        },parseInt(Config.mappingPolling));
        
        function loadSchedule() {
            scheduleMapService.loadSchedule(Config.url, function(){
                loadingDiv.hide();
                window.clearInterval(schedulePoll);
                refreshCapacities();
                
                newcastleDepotPopup.refresh();
                sydneyDepotPopup.refresh();
                canberraDepotPopup.refresh(); 
            });
        }
    }

    function initKmlLayers() {
        var styles = new OpenLayers.StyleMap({
            "default": new OpenLayers.Style(null, {
                rules: [
                new OpenLayers.Rule({
                    symbolizer: {
                        "Point": {
                            pointRadius: 5,
                            graphicName: "square",
                            fillColor: "white",
                            fillOpacity: 0.25,
                            strokeWidth: 1,
                            strokeOpacity: 1,
                            strokeColor: "#333333"
                        },
                        "Line": {
                            strokeWidth: 3,
                            strokeOpacity: 1,
                            strokeColor: "#3366ff"
                        },
                        "Polygon": {
                            'label': ('${regionId}'.indexOf('undefined') != -1 )? 'untitled' : '${regionId}'
                        }
                    }
                })
                ]
            }),
            "highlight-seleted": new OpenLayers.Style({
                strokeColor: "#00ccff",
                strokeWidth: 4,
                fillColor: '#0000FF',
                fillOpacity: 0.25
            }),
            "seletect": new OpenLayers.Style({
                strokeColor: "#00ccff",
                strokeWidth: 4,
                fillColor: '#0000FF',
                fillOpacity: 0.25
            }),
            "selected": new OpenLayers.Style({
                fillColor: '#0000FF'
            }),
            "highlight": new OpenLayers.Style({
                strokeColor: "#00ccff",
                strokeWidth: 4
            }),
            "temporary": new OpenLayers.Style(null, {
                rules: [
                new OpenLayers.Rule({
                    symbolizer: {
                        "Point": {
                            pointRadius: 5,
                            graphicName: "square",
                            fillColor: "white",
                            fillOpacity: 0.25,
                            strokeWidth: 1,
                            strokeOpacity: 1,
                            strokeColor: "#333333"
                        },
                        "Line": {
                            strokeWidth: 3,
                            strokeOpacity: 1,
                            strokeColor: "#00ccff"
                        }
                    }
                })
                ]
            })
        });
    
        var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
        renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;
    
        kmlLayer = new OpenLayers.Layer.Vector("KML", {
            styleMap: styles,
            renderers: renderer,
            strategies: [new OpenLayers.Strategy.Fixed()],
            protocol: new OpenLayers.Protocol.HTTP({
                url: "foo2.kml",
                format: new OpenLayers.Format.emsKML({
                    extractStyles: true, 
                    extractAttributes: true,
                    maxDepth: 2
                })
            })
        })
    
    
        mapService.map.addLayer(kmlLayer);
        //mapService.map.setCenter(mapService.getMapLonLat(151.226181,-33.920380),1);
    
        var edit = new OpenLayers.Control.PolygonSelectFeature(kmlLayer, {
            displayClass: "olControlDrawFeaturePoint", 
            title: "Edit Region Title",
            name: 'Edit',
            selectStyle: {
                strokeColor: "#ffffff",
                strokeWidth: 4,
                fillColor: '#ffffFF',
                fillOpacity: 0.25
            }
        });
    
        mapService.map.addControl(edit);
        edit.activate();
    
    //     kmlLayer.events.register('featureselected', kmlLayer, function(obj) {
    //        debugger; 
    //     });
    }

    function initBlankLayer() {
        var options = {
            isBaseLayer: true
        };
        
        var extent = new OpenLayers.Bounds(140.98125, -40.3234375, 153.9203125, -28.246875);
        //map = new OpenLayers.Map('mapContainer');
        blankLayer = new OpenLayers.Layer.Image(
            'Blank Layer',
            'maps/blank.png',
            extent,
            new OpenLayers.Size(1024, 768),
            options);

        mapService.map.addLayer(blankLayer);
    }

    function initImageLayer() {
        var options = {
            isBaseLayer: true
        };
        
        var extent = new OpenLayers.Bounds(140.98125, -40.3234375, 153.9203125, -28.246875);
        //map = new OpenLayers.Map('mapContainer');
        globe = new OpenLayers.Layer.Image(
            'Map Image',
            'maps/rect4080.png',
            extent,
            new OpenLayers.Size(1024, 768),
            options);

        mapService.map.addLayer(globe);
    
    
    }

    function generateVisits(visitNum) {
        var bounds = getCurrentMapBounds();
        //debugger;
        var minLon = bounds.left;
        var maxLon = bounds.right;
        var maxLat = -bounds.bottom;
        var minLat = -bounds.top;
        for (var i=0; i<visitNum; i++) {
            var lat = -((Math.random()* (maxLat-minLat+1)) + minLat);
            var lon = (Math.random()*(maxLon-minLon+1)) + minLon;
            //var lon = -30;
            //var lat = 138.95;
            lat = EMS.Util.sgp4ToLat(lat);
            var marker = mapService.addVisitMarker({
                lat: lat, 
                lon: lon
            });
            mapService.displayMarker(marker, true);
        
            markers.push(marker);
        }
    }

    function generateLines(lineNum) {
        var style = {
            normalStyle: {
                fillColor: "#3366ff",
                fillOpacity: 0.7,
                pointRadius: 6,
                pointerEvents: "visiblePainted",
                strokeColor: "#3366ff",
                strokeOpacity: 0.7,
                strokeWidth: 1
            }
        }
    
        var maxIndex = markers.length;
        for (var i=0; i<lineNum; i++) {
            var indexA = Math.floor(Math.random() * maxIndex);
            var indexB;
        
            do {
                indexB = Math.floor(Math.random() * maxIndex);
            } while(indexB == indexA)
    
            var locA = markers[indexA].lonlat;
            var locB = markers[indexB].lonlat;
        
            var latA = EMS.Util.sgp4ToLat(locA.lat);
            var lonA = locA.lon;
        
            var latB = EMS.Util.sgp4ToLat(locB.lat);
            var lonB = locB.lon;
        
        
            var points = [{
                lat: latA, 
                lon: lonA
            }, {
                lat: latB, 
                lon: lonB
            }];
        
            var polyline = mapService.drawPolyline(points, null, style);
            mapService.displayPolyline(polyline, true);
        }
    }

    function getCurrentMapBounds() {
        return mapService.map.getExtent();
    }

    function loadLocationMapping(url) {
        console.debug('loading mapping');
        jQuery.ajax({
            cache: false,
            type: "GET",
            url: url,
            dataType: 'text',
            success: onLoadingMappingSuccess
        });
    }

    function onLoadingMappingSuccess(data) {
        var mapping_data = CSVToArray(data);
        if (mapping_data.length == 0) {
            alert('getting empty mapping.csv');
            return;
        }
            
        VehicleConfig.totalCapacity = 0;
        // read current vehicle config from mapping.csv
        for (var m=1; m<mapping_data.length; m++) {
            var row = mapping_data[m];
                
            var depotIndex = parseInt(row[2]);
            var vModelIndex = parseInt(row[1]);
            var slotIndex = parseInt(row[3]);    
            
            var vId = row[0].replace('}', '').replace('{', '');
            if (!VehicleConfig[vId]) {
                VehicleConfig[vId] = {
                    id: vId,
                    isUsed: false,
                    commodity: -1,
                    depotIndex: depotIndex,
                    slotIndex: slotIndex,
                    color: ''
                };
            }
            VehicleConfig[vId].modelIndex = vModelIndex;
            VehicleConfig[vId].id = vId;
            
            // vehicle is being moved, reset its color and utilisation for display
            if (VehicleConfig[vId].depotIndex != depotIndex || VehicleConfig[vId].slotIndex != slotIndex) {
                //VehicleConfig[vId].color = '';
                VehicleConfig[vId].utilisation = 0;
                
                //update vehicle configs
                if (slotIndex > -1 && depotIndex > -1) {
                    // vehicle is on the board
                    VehicleConfig[vId].isUsed = true;
                    VehicleConfig.totalCapacity += VehicleConfig[vId].commodity;
                } else {
                    // vehicle is NOT on the board
                    VehicleConfig[vId].isUsed = false;
                }
                
                // update vehicle's depot and slot
                VehicleConfig[vId].depotIndex = depotIndex;
                VehicleConfig[vId].slotIndex = slotIndex;
            }
            
            //if some vehicle moved, clean up capacity popup
            // capacityPopup.clearTds();
            if (VehicleConfig[vId].isUsed) {
                VehicleConfig.totalCapacity += VehicleConfig[vId].commodity;
            }
                
        }
        capacityPopup.setTotal(VehicleConfig.totalCapacity);
        
        //updates depots
        resetDepotVehicles();
        for (var v in VehicleConfig) {
            var vehicle = VehicleConfig[v];
            if (!(vehicle instanceof Object)) {
                continue;
            }
            
            if (vehicle.isUsed) {
                depotVehicles[vehicle.depotIndex][vehicle.slotIndex] = vehicle;
            }
        }
        refreshDepotVehicles();
        
        // try load progress every time after loaded mapping.csv, reduce polling.
        loadingProgress(Config.progressUrl);
    }

    function clearDepotCell(depotIndex, slotIndex) {
        switch(depotIndex) {
            case 0:
                newcastleDepotPopup.clearCell(slotIndex);
                break;
            case 1:
                sydneyDepotPopup.clearCell(slotIndex);
                break;
            case 2:
                canberraDepotPopup.clearCell(slotIndex);
                break;
        }
    }

    function initDepotPopup() {
        costPopup = new CostPopup();
        unscheduledPopup = new UnSchedulePopup();
        //debugger;
        if (!Config.isMobile) {
            var bottom = Config.screenHeight;
            var spacing = 250 * Config.screenRatio;
            //var spacing = 5;
            newcastleDepotPopup = new DepotPopup('Newcastle Depot', 600, ['right', bottom-spacing*3], 0);
            sydneyDepotPopup = new DepotPopup('Sydney Depot', 600, ['right', bottom-spacing*2], 1);
            canberraDepotPopup = new DepotPopup('Canberra Depot', 600, ['right', bottom-spacing], 2);
        } else {
            var top = 40;
            var spacing = 25;
            newcastleDepotPopup = new DepotPopup('Newcastle Depot', 600, ['right', top], 0);
            sydneyDepotPopup = new DepotPopup('Sydney Depot', 600, ['right', (top+spacing)], 1);
            canberraDepotPopup = new DepotPopup('Canberra Depot', 600, ['right', (top+spacing*2)], 2);
            alert('top: ' + top + ', spacing: ' + spacing + ', top + spacing*2: ' + (top+spacing*2));
            
            costPopup.getContainer().click(function() {
                goWithServer();
            })
        }
        
    }
    
    function initCapacityPopup() {
        var popupHeight = 180 * Config.screenRatio;
        var popupWidth = 385 * Config.screenRatio
        capacityPopup = new CapacityPopup(popupWidth,popupHeight);
        
        if (Config.isMobile) {
            capacityPopup.hide();
        }
    }
    
    function refreshCapacities() {
        var utilisation = ((VehicleConfig.utilisation/VehicleConfig.totalCapacity)*100).toFixed(1);
        
        console.info('utilisation: ' + VehicleConfig.utilisation + ', totalCapacity: ' + VehicleConfig.totalCapacity);
        capacityPopup.setUtilisation(utilisation + '%');
        
        var inefficienct = (((VehicleConfig.totalCost - VehicleConfig.bestCost)/VehicleConfig.bestCost)*100).toFixed(1);
        capacityPopup.setInefficiency(inefficienct + '%');
    }

    function CSVToArray( strData, strDelimiter ){
        if (!strData || strData.trim().length == 0) {
            return [];
        }
        // Check to see if the delimiter is defined. If not,
        // then default to comma.
        strDelimiter = (strDelimiter || ",");
 
        // Create a regular expression to parse the CSV values.
        var objPattern = new RegExp(
            (
                // Delimiters.
                "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
 
                // Quoted fields.
                "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
 
                // Standard fields.
                "([^\"\\" + strDelimiter + "\\r\\n]*))"
                ),
            "gi"
            );
 
 
        // Create an array to hold our data. Give the array
        // a default empty first row.
        var arrData = [[]];
 
        // Create an array to hold our individual pattern
        // matching groups.
        var arrMatches = null;
 
 
        // Keep looping over the regular expression matches
        // until we can no longer find a match.
        while (arrMatches = objPattern.exec( strData )){
            // Get the delimiter that was found.
            var strMatchedDelimiter = arrMatches[ 1 ];
 
            // Check to see if the given delimiter has a length
            // (is not the start of string) and if it matches
            // field delimiter. If id does not, then we know
            // that this delimiter is a row delimiter.
            if (
                strMatchedDelimiter.length &&
                (strMatchedDelimiter != strDelimiter)
                ){
 
                // Since we have reached a new row of data,
                // add an empty row to our data array.
                arrData.push( [] );
 
            }
 
 
            // Now that we have our delimiter out of the way,
            // let's check to see which kind of value we
            // captured (quoted or unquoted).
            if (arrMatches[ 2 ]){
 
                // We found a quoted value. When we capture
                // this value, unescape any double quotes.
                var strMatchedValue = arrMatches[ 2 ].replace(
                    new RegExp( "\"\"", "g" ),
                    "\""
                    );
 
            } else {
 
                // We found a non-quoted value.
                var strMatchedValue = arrMatches[ 3 ];
 
            }
 
 
            // Now that we have our value string, let's add
            // it to the data array.
            arrData[ arrData.length - 1 ].push( strMatchedValue );
        }
 
        // Return the parsed data.
        return( arrData );
    }
    
    function request(method, url, data, accept, authorise, fn_success, fn_error){

        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr){
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined"){
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            xhr = null;
        }
        if (xhr){
            if (accept) {
                //alert(method + ' ' + accept + ' ' + url + ' ' + data);
                if (method.toLowerCase() == 'get')
                    xhr.setRequestHeader('Accept', accept);
                else
                    xhr.setRequestHeader('Content-Type', accept);
            }
            xhr.onload = fn_success;
            xhr.onerror = fn_error;
            //                debugger;
            //                if (authorise) {
            //                    var username = 'ADMIN';
            //                    var password = 'admin';
            //                    var encoded = " Basic " + this.encode64( username + ":" + password);
            //                    xhr.withCredentials = true;
            //                    xhr.setRequestHeader("Authorization", encoded);
            //                }
            xhr.send(data);
        }
    }

}