function AppStarter() {
    
    var controlPanel;
    var mainContainer;
    
    var fileUploadPanel;
    var fileUploadContainer;
    
    var dateFilter;
    var techFilter;
    
    var dateFilterPanel;
    var techFilterPanel;
    
    var chartPanel;
    var scheduleGanttchart;
    
    var dateGroup;
    var techGroup;
    var mapPanel;
    var mapService
    
    init();
    function init() {
        controlPanel = $('<div id="controlPanel" style="left: 5px; width: 300px; bottom: 5px; top: 5px; position: absolute; overflow: auto;"></div>');
        mainContainer = $('<div id="mainContainer" style=" left:310px; right: 5px; top: 5px; bottom: 0px; position: absolute;"></div>');
        $(document.body).append(controlPanel).append(mainContainer);
        
        initFileUploadPanel();
        initDateFilterPanel();
        initTechFilterPanel();
        initGanttChart();
        initMapPanel();
    }
    
    function initMapPanel() {
        mapPanel = $('<div/>').css({
            width: '100%',
            maring: 5
        });
        
        mapPanel.appendTo(mainContainer);
        
        
        var mapFolderPanel = new IFL.Widget.FolderWidget({
            title: 'FSE Schedule Map'
        });
        
        var mapContainer = $('<div id="mapContainer" style="width: 100%; height: 600px"/>');
        
        mapFolderPanel.setContent(mapContainer);
        
        mapPanel.append(mapFolderPanel.getContainer());
        mapService = IFL.FSE.MapService({
            mapContainerId: 'mapContainer'
        });
    }
    
    function initGanttChart() {
        chartPanel = $('<div/>').css({
            width: '100%',
            maring: 5
        });
        
        chartPanel.appendTo(mainContainer);
        scheduleGanttchart = new IFL.FSE.GanttChartTable();
        //scheduleGanttchart.getContainer().appendTo(chartPanel);
        
        var scheduleFolderPanel = new IFL.Widget.FolderWidget({
            title: 'FSE Schedule Chart'
        });
        
        scheduleFolderPanel.setContent(scheduleGanttchart);
        chartPanel.append(scheduleFolderPanel.getContainer());
    }
    
    function initFileUploadPanel() {
        fileUploadPanel = new IFL.Widget.FileUploadPanel({
            serverUrl: Config.fseServerUrl + '/file/upload',
            dataType: 'json'
        });
        
        fileUploadPanel.registerHandler('start', function() {
            fileUploadPanel.showLoading(true);
        });
        
        fileUploadPanel.registerHandler('completed', function(result) {
            fileUploadPanel.showLoading(false);
            addFseSchedule(result);
            mapService.addSchedule(result);
            
        });
        
        fileUploadPanel.registerHandler('failed', function() {
            fileUploadPanel.showLoading(false);
        });
        
        fileUploadContainer = new IFL.Widget.FolderWidget({
            title: 'FSE Schedule'
        });
        
        fileUploadPanel.getContainer().append('<br/>');
        
        var urlPanel = $('<div/>').appendTo(fileUploadPanel.getContainer());
        
        urlPanel.append('or Specify a Scenario ID (on iflsolve.com): ')
        var urlInput = $('<input type="text" size="10"/>').appendTo(urlPanel);
        var goButton = $('<button>get schedule</button>').button().appendTo(urlPanel);
        var loadingIcon = $('<img/>').attr('src',Config.imagePath + '/loader-small.gif').css('margin-left', '5px').hide();
        loadingIcon.appendTo(urlPanel);
        goButton.click(function() {
            
            var url = urlInput.val();
            if (!url || url.length == 0) {
                alert('No Scenario ID Specified !');
                return;
            }
            loadingIcon.show();
            goButton.button('disable');
            $.ajax({
                method: 'GET',
                dataType: 'json',
                url: Config.fseServerUrl + '/file/scenario/' + url,
                success: function(data, status, request) {
                    goButton.button('enable');
                    loadingIcon.hide();
                    addFseSchedule(data);
                    mapService.addSchedule(data);
                },
                error: function(a,b,c) {
                    goButton.button('enable');
                    loadingIcon.hide();
                    alert('Failed to get xml from scenario: ' + url);
                }
            })
        })
        
        
        fileUploadContainer.getContainer().appendTo(controlPanel);
        fileUploadContainer.setContent(fileUploadPanel);
        
        
    }
    
    function initDateFilterPanel() {
        dateFilterPanel = new IFL.Widget.FolderWidget({
            title: 'Date Filter'
        }); 
        controlPanel.append(dateFilterPanel.getContainer());
    }
    
    function initTechFilterPanel() {
        techFilterPanel = new IFL.Widget.FolderWidget({
            title: 'Technician Filter'
        }); 
        controlPanel.append(techFilterPanel.getContainer());
    }
    
    function addFseSchedule(schedule) {
        refreshFilters(schedule);
        scheduleGanttchart.displayResourceRoutes(schedule.solution.routes.route);
    }
    
    function refreshFilters(schedule) {
        getDateFilter(schedule);
        getTechFilter(schedule);
        
        dateFilterPanel.setContent(dateFilter);
        techFilterPanel.setContent(techFilter);
    }
    
    function getDateFilter(schedule) {
        dateGroup = {
            name: 'All Dates',
            isIncluded: true,
            members: []
        }
        
        var dateResource = {
            
        }
        //generate date group first
        var routes = schedule.solution.routes.route;
        
        for (var r in routes) {
            var route = routes[r];
            
            for (var v in route.visits.visit) {
                var visit = route.visits.visit[v];
                
                var service = visit.services.service[0];
                
                if (service) {
                    var start = service.timeEarliest;
                    var date = formatDate(new Date(start), 'yyyy-MM-dd');
                    
                    var dateStrs = date.split("-");
                    
                    var year = dateStrs[0];
                    var month = dateStrs[1];
                    var day = dateStrs[2];
                    
                    if (!dateResource[year]) {
                        dateResource[year] = {};
                    }
                    
                    if (!dateResource[year][month]) {
                        dateResource[year][month] = {};
                    }
                    
                    if (!dateResource[year][month][day]) {
                        dateResource[year][month][day] = date;
                    }
                }
            }
        }
            
        for (var year in dateResource) {
            var yearGroup = {
                name: year,
                isIncluded: true,
                members: []
            }
            dateGroup.members.push(yearGroup);
            for (var month in dateResource[year]) {
                var monthGroup = {
                    name: month,
                    isIncluded: true,
                    members: []
                }
                yearGroup.members.push(monthGroup);
                for (var day in dateResource[year][month]) {
                    var dayMember = {
                        name: dateResource[year][month][day],
                        isIncluded: true,
                        members: []
                    }
                    monthGroup.members.push(dayMember);
                }
            }
        }
        
        
        dateFilter = new IFL.FSE.CheckboxFilter({
            treeWidth : 280
        }, dateGroup, true);
        
        $('input[type="checkbox"]', dateFilter.getContainer()).change(function() {
            var selectedDays = [];
            for (var y in dateGroup.members) {
                var yearGroup = dateGroup.members[y];
                
                for (var m in yearGroup.members) {
                    var monthGroup = yearGroup.members[m];
                    
                    for (var d in monthGroup.members) {
                        var dayMember = monthGroup.members[d];
                        
                        if (dayMember.isIncluded) {
                            selectedDays.push(dayMember.name);
                        }
                    }
                }
            }
            scheduleGanttchart.displayScheduleRoutesByDates(selectedDays);
            mapService.displayScheduleRoutesByDates(selectedDays);
        })
    }
    
    function getTechFilter(schedule) {
        var resources = schedule.resources.resource;
        
        techGroup = {
            name: 'All Technicians',
            isIncluded: true,
            members: []
        }
        for (var t in resources) {
            var resource = resources[t];
            var techMember = {
                name: resource.id,
                isIncluded: true,
                members: []
            }
            
            techGroup.members.push(techMember);
        }
        
        techFilter = new IFL.FSE.CheckboxFilter({
            treeWidth : 280
        }, techGroup, true);
        
        $('input[type="checkbox"]', techFilter.getContainer()).change(function() {
            var selectedResources = [];
            for (var y in techGroup.members) {
                var techMember =  techGroup.members[y];
                if (techMember.isIncluded) {
                    selectedResources.push(techMember.name);
                }
            }
            scheduleGanttchart.displayScheduleRoutesByResources(selectedResources);
            mapService.displayScheduleRoutesByResources(selectedResources);
        })
    }
    
}