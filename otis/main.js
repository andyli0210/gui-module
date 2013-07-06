function AppStarter() {
    Config.mode = 'server';
    Config.imagePath = '../core/images';
    Config.sites = 'default';
    Config.setFromUrl();
    var mapService = new IFL.MapService.EMS('mapContainer');
    var scheduleMapService = new OtisMapService(mapService);
    initImageLayer();
    initLoading();
    initUI();
    initHandlers();
    var uploadPanel;
    var techRoutePanel;
    var dateRoutePanel;
    var optionPanel;
    
    function initUI() {
        //mapService.map.markersLayer.setVisibility(false);
        //        var temp = new OpenLayers.LonLat(151.103125, -35.9078125);
        //        mapService.map.setCenter(temp, 6);
        // $('#OpenLayers\\.Control\\.LayerSwitcher\\_5').css('top', '250px');
        initUploadPanel();
        techRoutePanel = new TechRoutePanel();
        dateRoutePanel = new DateRoutePanel();
        optionPanel = new OptionPanel();
    }
    
    function initHandlers() {
        techRoutePanel.registerHandler(techRouteHandler);
        dateRoutePanel.registerHandler(dateRouteHandler);
        optionPanel.registerHandler(homeOptionHandler,'home');
        optionPanel.registerHandler(siteOptionHandler,'site');
        optionPanel.registerHandler(visitOptionHandler,'visit');
    }
    
    function homeOptionHandler(isShow) {
        scheduleMapService.displayHomes(isShow);
    }
    
    function siteOptionHandler(isShow) {
        scheduleMapService.displaySites(isShow);
    }
    
    function visitOptionHandler(isShow) {
        scheduleMapService.displayVisits(isShow);
    }

    function techRouteHandler(techId, isSelected) {
        scheduleMapService.displayTechRoute(techId, isSelected);
    }
    
    function dateRouteHandler(dateStr, isSelected) {
        scheduleMapService.displayDateRoute(dateStr, isSelected);
    }
    
    function initUploadPanel() {
        var icon = {
            url: Config.imagePath + "/upload_tab.png",
            width: 56,
            height: 122,
            offset: -30
        }
        uploadPanel = new IFL.Widget.SidePanel(icon, 'left', 270, 300, 'File Upload');
        
        var uploadForm;
        if (Config.mode == 'server') {
            uploadForm = initServerUpload();
        } else {
            uploadForm = initClientUpload();
        }
        
        uploadPanel.addContent(uploadForm);        
    }
    
    function initClientUpload() {
        var fileform = $('<div>Select a file :</div>');
        var fileInput = $('<input type="text" size="25" style="margin: 5px;"/>').appendTo(fileform);
        fileform.appendTo('<br/><br/>');
        var submitButton = $('<input type="submit" value="Upload It"/>').appendTo(fileform);
        fileInput.val('route_data2.csv');
        
        if (Config.sites != 'default') {
            submitButton.click(function() {
                //displayLoading(true);
                var filePath = fileInput.val();
                scheduleMapService.loadRoutesInfoFromLocal(filePath, refreshPanels);
            });
        } else {
            scheduleMapService.loadSitesInfoFromLocal('locations_data3.csv', function() {
                submitButton.click(function() {
                    //displayLoading(true);
                    uploadPanel.slideIn();
                    var filePath = fileInput.val();
                    scheduleMapService.loadRoutesInfoFromLocal(filePath, refreshPanels);
                });
            })
        }
        
        return fileform;
    }
    
    function refreshPanels() {
        refreshTechRoutePanel();
        refreshDateRoutePanel();
    }
    
    function refreshDateRoutePanel() {
        var routes = scheduleMapService.getDateRoutes();
        
        var dateStrs = [];
        for (var dateStr in routes) {
            dateStrs.push(dateStr);
        }
        
        dateRoutePanel.refreshPanel(dateStrs);
    }
    
    function refreshTechRoutePanel() {
        var routes = scheduleMapService.getTechRoutes();
        
        var techIds = [];
        for (var techId in routes) {
            techIds.push(techId);
        }
        
        techRoutePanel.refreshPanel(techIds);
    }
    
    function initServerUpload() {
        var uploadForm = $('<form id="fileForm" method="post" enctype="multipart/form-data"><p>Select a file : <input id="filePath" type="file" name="file" size="20" /><br/><br/></p></form>');
        var submitButton = $(' <input type="submit" value="Upload It"/>').appendTo(uploadForm);
        
        if (Config.sites != 'default') {
           initServerSubmitHandler(uploadForm);
        } else {
            scheduleMapService.loadSitesInfoFromLocal('locations_data3.csv', function() {
                initServerSubmitHandler(uploadForm);
            })
        }
        
        
        
        return uploadForm;
    }
    
    function initServerSubmitHandler(uploadForm) {
        uploadForm.submit(function() { 
            displayLoading(true);
            // submit the form 
            $(this).ajaxSubmit({
                dataType: 'text',
                url: '../../upload',
                success: function(data, status) {
                    console.debug('uploaded succeed !!');
                    scheduleMapService.initRoutes(data);
                    refreshPanels();
                    displayLoading(false);
                    uploadPanel.slideIn();
                },
                error: function(a,b,c) {
                    alert('failed to upload xml');
                    displayLoading(false);
                }
            }); 
            // return false to prevent normal browser submit and page navigation 
            return false; 
        });
    }
    
    function initImageLayer() {
        var options = {
            isBaseLayer: true
        };
        
        var extent = new OpenLayers.Bounds(140.98125, -40.3234375, 153.9203125, -28.246875);
        var globe = new OpenLayers.Layer.Image(
            'Map Image',
            Config.imagePath + '/rect4080.png',
            extent,
            new OpenLayers.Size(1024, 768),
            options);

        mapService.map.addLayer(globe);
        
        mapService.map.events.register('changebaselayer', this, function(obj) {
            var background = '';
            if (obj.layer.name == 'Map Image') {
                background = '#9AC3E4';
                var temp = new OpenLayers.LonLat(151.103125, -35.9078125);
                mapService.map.setCenter(temp, 4);
            }
            
            $('#mapContainer').css('backgroundColor', background);
        });
    }
    
    function initLoading() {
        jQuery.fn.center = function () {
            this.css("position","absolute");
            this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
            this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
            return this;
        }
        
        var loadingDiv = jQuery('<div id="loadingPanel" style="position: absolute; width: 350px; height:350px;z-Index:2; display: none;"><img src="' + Config.imagePath + '/loading_big2.gif"/></div>');

        var top = ($(window).height() - 350) / 2;
        var left = ($(window).width() - 350) / 2;
        loadingDiv.css({
            top: top,
            left: left
        });
    
        loadingDiv.appendTo(document.body);
    }
    
    function displayLoading(isShow) {
        if (isShow) {
            $('#loadingPanel').show();
        }
        else {
            $('#loadingPanel').hide();
        }
    }
    
}

