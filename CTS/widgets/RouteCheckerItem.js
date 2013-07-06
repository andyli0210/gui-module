IFL.CTS.RouteCheckerItem = function(route, _options) {
    if (!route) {
        alter('Need Route to init RouteCheckerItem !!!!!');
        return null;
    }
    
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var summaryBar;
    var contentContainer;
    var content;
    
    var routeIdCell;
    var missedWindowCell;
    var displayCell;
    
    var currentDayLink;
    var checkerChart;
    var chartsContainer;
    var chartsSlide;
    
    init();
    
    function initDefaultOptions() {
        options = {
            width: '100%'
        }
    }
    
    function init() {
        container = jQuery('<div></div>').css({
            width: options.width
        });
            
        initSummaryBar();
        initContentContainer();
    }
    
    function initSummaryBar() {
        summaryBar = jQuery('<div class="ui-accordion-header ui-state-default"></div>').appendTo(container);
        summaryBar.hover(function(){
            summaryBar.addClass('ui-state-hover');
        },function() {
            summaryBar.removeClass('ui-state-hover');
        });
        
        var summaryTable = $('<table width="100%"></table>').appendTo(summaryBar);
        var summaryRow = $('<tr></tr>').appendTo(summaryTable);
        routeIdCell = $('<td width="20%" align="center"></td>').append(route.routeId).appendTo(summaryRow);
        missedWindowCell = $('<td width="65%">&nbsp;</td>').append(route.missedTimeWindow).appendTo(summaryRow);
        if (route.missedTimeWindow > 0) {
            missedWindowCell.css('color' , 'red');
        }
        
        displayCell = $('<td width="15%"></td>').appendTo(summaryRow);
        initDisplayButton();
    }
    
    function initContentContainer() {
        contentContainer = jQuery('<div></div>').css({
            width: "100%"
        }).appendTo(container);
        
        intiDaysLine();
        initChart();
        contentContainer.hide();
    }
    
    function initChart() {
        checkerChart = new IFL.CTS.RouteCheckerChart();
        checkerChart.setDepot(route.depot);
        
        var dayVisit = getDayVisitByDay('Mon');
        setTasksToChart(dayVisit.tasks);
                
        checkerChart.getContainer().appendTo(contentContainer);
        checkerChart.getContainer().css('margin','auto');
    }
    
    function initAnimationCharts() {
        chartsContainer = $('<div></div>').css({
            width: 600,
            height: 160,
            overflow: 'hidden',
            position: 'relative',
            margin: 'auto'
        }).appendTo(contentContainer);
        
        chartsSlide = $('<div></div>').css({
            width: 4200,
            left: 0,
            position: 'absolute'
        }).appendTo(chartsContainer);
        
        var chart1 = new IFL.CTS.RouteCheckerChart();
        chart1.setDepot(route.depot);
        chart1.setDayTasks(route.dayVisits['Mon'].tasks);
        chart1.getContainer().css('float','left');
        
        var chart2 = new IFL.CTS.RouteCheckerChart();
        chart2.setDepot(route.depot);
        chart2.setDayTasks(route.dayVisits['Tues'].tasks);
        chart2.getContainer().css('float','left');
        
        chartsSlide.append(chart1.getContainer()).append(chart2.getContainer());
    }
    
    function setTasksToChart(tasks) {
        checkerChart.setDayTasks(tasks);
    }
    
    function intiDaysLine() {
        var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
        
        var daysLineContainer = $('<div></div>').css({
            width: '100%',
            'text-align': 'center'
        })
        
        for (var d in days) {
            var day = days[d];
            var dayLink;
            
            if (day != 'Mon') {
                daysLineContainer.append(' | ');
                dayLink = getDayLink(day);
            } else {
                dayLink = getDayLink(day, true);
            }
            
            daysLineContainer.append(dayLink);
        }
        
        daysLineContainer.appendTo(contentContainer);
    }
    
    function getDayLink(day, isDefault) {
        var dayLink = $('<div></div>').text(day)
        
        dayLink.css({
            display: 'inline-block'
        });
        
        if (!isDefault) {
            dayLink.css({
                'text-decoration': 'underline',
                color: 'blue',
                cursor: 'pointer'            
            });
        } else {
            currentDayLink = dayLink;
        }
        
        dayLink.click(function() {
            if (currentDayLink == dayLink) {
                return;
            }
            
            dayLink.css({
                'text-decoration': 'none',
                color: 'black',
                cursor: 'auto'            
            });
            
            currentDayLink.css({
                'text-decoration': 'underline',
                color: 'blue',
                cursor: 'pointer'            
            });
            
            currentDayLink = dayLink;
            
            var dayVisit = getDayVisitByDay(day);
            setTasksToChart(dayVisit.tasks);
        })
        
        return dayLink;      
    }
    
    function initDisplayButton() {
        var displayLink = $('<div></div>').text('Display Chart').css({
            'text-decoration': 'underline',
            color: 'blue',
            cursor: 'pointer'            
        });
        
        displayLink.click(function() {
            //debugger;
            contentContainer.toggle('blind');
            if (displayLink.text() == 'Display Chart') {
                displayLink.text('Hide Chart');
            } else {
                displayLink.text('Display Chart');
            }
        })
        
        displayLink.appendTo(displayCell);
    }
    
    function doAnimation() {
        var curLeft = chartsSlide.position().left;
            
        chartsSlide.animate({
            left: curLeft - 632
        }, {
            duration: 'slow'
        })
    }
    
    function getDayVisitByDay(day) {
        for (var d in route.dayVisits) {
            var dayVisit = route.dayVisits[d];
            if (dayVisit.day == day) {
                return dayVisit;
            }
        }
        
        console.warn('Can NOT day visit for ' + day + ' in route ' + route.routeId);
        return null;
    }
    
    function getContainer() {
        return container;
    }
    
    return {
        getContainer: getContainer
    }
}