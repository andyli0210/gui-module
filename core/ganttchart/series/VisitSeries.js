function VisitSeries(visitDomain, route_index, routeId) {
    
    var UTC_offset = 10*60*60*1000;
    var earliest_time = Date.parse(visitDomain.getEarliestTime()).getTime() + UTC_offset;
    var latest_time = Date.parse(visitDomain.getLatestTime()).getTime() + UTC_offset;
    var status = visitDomain.getStatus();
    var color = '#0000FF';
    
    // assume it arrive at earliest time by default
    var startTime = earliest_time;
    
    // calculate the finish time of the visit
    var services = visitDomain.getServices();
    var lastService = services[services.length - 1];
    var finishTime = Date.parse(lastService.getEarliestTime()).getTime() + UTC_offset + lastService.getDuration();

    var visit_data = [];
    var markings = [];
    
    var popupContent;
    var service_content;
    ///initPopupContent();
    
    visit_data.push([earliest_time, route_index]);
    visit_data.push([latest_time, route_index]);
    
    renderMarkings();
    
    var series_data = {
        data: visit_data
    }
    
    var operator = new VisOperator(visitDomain);
    operator.setVisObject(markings);
    operator.series_data = series_data;
    operator.showVisitPopup = showVisitPopup;
    operator.hideVisitPopup = hideVisitPopup;
        
    operator.hideServicePopup= hideServicePopup;
    operator.showServicePopup= showServicePopup;
    
    initHandlers();
    
    function renderMarkings() {
        
        markings = [];
        var marking;
        var fillColor;
        var routeHeight = 0.2;
        
        if (Config.ganttChartMode == 'IE')
            routeHeight = 0.5;
        
        switch(status.toUpperCase()) {
            case 'DEPARTED': {
                    fillColor = '#00FF00';
                    marking = new SeriesMarking(startTime, finishTime, route_index-routeHeight, route_index+routeHeight, color, fillColor);
                    markings.push(marking); 
                    break;
                }
            case 'ARRIVED': {
                    fillColor = '#FFA500';
                    marking = new SeriesMarking(startTime, finishTime, route_index-routeHeight, route_index+routeHeight, color, fillColor);
                    markings.push(marking); 
                
                    //                marking = new SeriesMarking(startTime, startTime + (finishTime - startTime)/2, route_index-0.2, route_index+0.2, null, fillColor);
                    //                markings.push(marking); 
                    break;
                }
            case 'CREATED':
            default: {
                    marking = new SeriesMarking(startTime, finishTime, route_index-routeHeight, route_index+routeHeight, color);
                    markings.push(marking); 
                }
        }
    }
    
    function render(context, xaxis, yaxis, plotOffset) {
        
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            marking.render(context, xaxis, yaxis, plotOffset);
        }
    }
    
    function isMouseInSeries(mx, my) {
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            if (marking.isMouseInMarking(mx,my)) {
                return marking;
            }
        }
        
        return null;
        
    }
    
    function highlight(context, xaxis, yaxis, plotOffset, isHighlight) {
        for (var i=0; i<markings.length; i++) {
            var marking = markings[i];
            
            marking.highlight(context, xaxis, yaxis, plotOffset, isHighlight);
        }
    }
    
    function initPopupContent() {
        popupContent = jQuery('<div></div>');
        var xml = visitDomain.getXml();
        //debugger;
        popupContent.transform({
            xmlobj: xml.get(0),
            //async: false,
            //xml: 'dummy/DummySchedule.xml',
            //xmlstr: xml,
            xsl: Config.xsltPath + "/visit2.xsl", 
            xslParams: {
                routeId: 123
            },
            error: function(a,b,c,d,e) {
                //   debugger;
            },
            success: function(a,b,c,d,e) {
                // debugger;
            }
        })
        //popupContent.html(content);

    }
    
    function showVisitPopup(clientX, clientY) {
        if (!popupContent) {
            initPopupContent();
        }
        
        DispatchUtil.showPopup(popupContent, 'Visit: ' + visitDomain.id,[clientX, clientY], [300, 200]);
    }
    
    function hideVisitPopup() {
        DispatchUtil.closePopup(popupContent);
    }
    
    function showServicePopup(closeHandler) {
        service_content = $('<div></div>');
        var xml = visitDomain.getXml();
        var servicesXml = $(xml).find('services').get(0);
        service_content.transform({
            xmlobj: servicesXml, 
            xsl: Config.xsltPath + "/services2.xsl",
            xslParams: {
                imagePath: Config.imagePath
            }
        })
        
        DispatchUtil.showPopup(service_content, 'Services for visit: ' + visitDomain.id,'center',[700,220], closeHandler);
    }
    
    function hideServicePopup() {
        DispatchUtil.closePopup(service_content);
    }
    
    function getMarkings() {
        return markings;
    }
    
    function initHandlers() {
        operator.registerEventHandler('mouseover', function(domain, x, y) {
            console.debug('mouse mouseover, selested: ');
        });
        
        operator.registerEventHandler('mouseout', function(domain, x, y) {
            console.debug('mouse mouseout, selested: ');
        });
        
        operator.registerEventHandler('mouseclick', function(domain, x, y) {
            console.debug('mouse click, selested: ');
        });
    }
    
//    return {
//        id: visitDomain.id,
//        series_data: series_data,
//        markings: markings,
//        getMarkings: getMarkings,
//        render: render,
//        isMouseInSeries: isMouseInSeries,
//        highlight: highlight,
//        showVisitPopup: showVisitPopup,
//        hideVisitPopup: hideVisitPopup,
//        showServicePopup: showServicePopup,
//        hideServicePopup: hideServicePopup
//    }
    
    return operator;
   
}
