IFL.CTS.RobustReportService = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);

    var mapservice;
    var chartService;
    var chartContainer;

    init();
    function init() {
        initLayout();
        mapservice = new IFL.CTS.MapService({
            mapContainerId: options.mapContainerId
        });
        chartService = new IFL.GanttChart.TimeWindowChartReportService({containerId: options.chartContainerId});
        //testInit();

        console.info('opt id: ' + Config.optId);
        //$('#mapContainer').hide();
        getCtsOptSolution(Config.optId, function(solution) {
            getCtsOptInfo(Config.optId, function(optInfo) {
                window.document.title = 'Robust Report for solution: ' + optInfo.name + ', route: ' + Config.routeIds + ' on ' + Config.routeDays;

                var drawOptions = {
                    showRouteDirection: false,
                    showVehAnimation: false,
                    showDeliverySeq: true,
                    scaleByGpad: false
                }
                drawOptions.showRouteDirection = Config.showDirection;
                drawOptions.showVehAnimation = Config.showVehicle;
                drawOptions.showDeliverySeq = Config.showDeliverySeq;
                drawOptions.scaleByGpad = Config.scaleByGpad;

                mapservice.displayOptSolution(solution, optInfo, drawOptions);
                
                //need to guarante that Robustness report only show one route on one day
                var route = solution.routes.route[0];
                
                var dayIndex = getDayIndex(Config.routeDays);
                chartService.displayRoute(route, dayIndex);
            });
        });

        chartContainer.css({
            overflow: 'hidden'
        });

        initHandlers();
    }

    function testInit() {
        var drawOptions = {
            showRouteDirection: true,
            showVehAnimation: true,
            showDeliverySeq: true,
            scaleByGpad: false
        }

        mapservice.displayOptSolution(rotueJson, routeOptInfo.ctsOptInfo, drawOptions);


        var route = rotueJson.routes.route[0];

        chartService.displayRoute(route);
    }

    function initHandlers() {
        chartService.registerHandler('mouseover', function(item) {
            mapservice.hightlightLocationMarker(item.id, true);
        });

        chartService.registerHandler('mouseout', function(item) {
            mapservice.hightlightLocationMarker(item.id, false);
        });

        chartService.registerHandler('mouseclick', function(item) {
            mapservice.panToLocationMarker(item.id);
        });
    }

    function initDefaultOptions() {
        options = {
            chartContainerId: 'chartContainer',
            mapContainerId: 'mapContainer'
        };
    }

    function initLayout() {
        var docWidth = $(document).width();
        var layoutService = new IFL.Layout.LayoutService();

        initMapPanel();
        initChartPanel();

        layoutService.layout($('body'), {
            east: {
                size: docWidth / 2,
                spacing_open: 10
            }
        });

    }

    function initMapPanel() {
        var mapPanel = $('<div class="ui-layout-east" style="width: 100%; padding: 0px;border: none">').appendTo($('body'));
        var mapContainer = $('<div id ="mapContainer" width="100%" class="ui-layout-content ui-widget-content" style="top: 0px; bottom: 0px; left: 0px; right: 0px;"></div>');
        mapPanel.append(mapContainer);
    }

    function initChartPanel() {

        var chartPanel = $('<div class="ui-layout-center" style="width: 100%; padding: 0px;border: none;">').appendTo($('body'));
//                chartPanel.css({
//                    position: ''
//                })

        chartContainer = $('<div id ="chartContainer" class="ui-layout-content ui-widget-content" style="left: 5px; right: 5px; top: 5px; bottom: 5px;"></div>');
        chartPanel.append(chartContainer);
    }

    function getCtsOptSolution(optId, callback) {
        var url = Config.ctsServerUrl + "/opt/solution/" + optId;
        if (!Config.routeDays) {
            url += '?routeDays=summary';
        } else {
            url += '?routeDays=' + Config.routeDays;
        }
        
        if (Config.routeIds) {
            url += '&routeIds=' + Config.routeIds;
        }

        console.info('trying to get CTS Opt Solution at: ' + url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(solution) {
                console.info('Successfully get CTS OPT Solution: ');// + JSON.stringify(solution));
                callback(solution);
            },
            error: function() {
                console.error('Failed to get CTS OPT Solution !!!');
                alert('Failed to get CTS OPT Solution !!!')
            }
        })
    }

    function getCtsOptInfo(optId, callback) {
        var url = Config.ctsServerUrl + "/opt/info/" + optId + "?noParameters=false";
        console.info('trying to get CTS Opt Info at: ' + url);
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                console.info('Successfully get CTS OPT parameters ');// + JSON.stringify(solution));
                callback(response.ctsOptInfo);
            },
            error: function() {
                console.error('Failed to get CTS OPT parameters !!!');
                alert('Failed to get CTS OPT parameters !!!')
            }
        })
    }
    
    function getDayIndex(day) {
        if (day === 'summary') {
            return 0;
        }
        
        var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        
        var index = $.inArray(day, days);
        if (index < 0) {
            alert('Can not find day index for day: ' + day);
        }
        return index;
    }



    return {
    }
}


