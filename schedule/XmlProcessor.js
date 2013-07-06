IFL.Schedule.XmlProcessor = function(options) {
    var schema = options._schema;
    
    if (options.schemaName) {
        switch(options.schemaName) {
            case 'IFL':schema = new IFL.Schema.IFL();break;
            case 'FSE':schema = new IFL.Schema.FSE();break;    
        }
    }
    
    var resources = {};
    var tasks = {};
    var locations = {};
    var routes = {};
    
    var nextServiceTime;
    
    function reset() {
        resources = {};
        tasks = {};
        locations = {};
        routes = {};
        nextServiceTime = null;
    }
    
    function setSchema(_schema) {
        schema = _schema;
    }
    
    function processXml(xml, _schema) {
        if (!xml) {
            alert('no xml to parse !');
            return null;
        }
        
        if (_schema) {
            schema = _schema;
        }
        
        if (!schema) {
            alert('No schema for XML parsing !');
            return null;
        }
        
        reset();
        
        // process locations
        $(xml).find(schema.schedule + '>' + schema.locations + '>' + schema.location).each(function() {
            var locationXml = $(this);
           
            var location = processLocation(locationXml);
            locations[location.id] = location;           
        });
        
        //process resources
        $(xml).find(schema.schedule + '>' + schema.resources + '>' + schema.resource).each(function() {
            var resourceXml = $(this);
           
            var resource = processResource(resourceXml);
            resources[resource.id] = resource;           
        });
        
        // process routes
        $(xml).find(schema.solution + '>' +schema.routes + '>' + schema.route).each(function() {
            var route = processRoute($(this));
            routes[route.id] = route;
        });
        
        var id = $(schema.schedule,xml).attr(schema.id);
        var version = $(schema.schedule,xml).attr('version');
        var type = $(schema.schedule,xml).attr('type');
        
        var schedule = {
            id: id,
            version: version,
            type: type,
            resources: resources,
            tasks: tasks,
            routes: routes,
            locations: locations
        }
        return schedule;
    }
    
    function processResource(resourceXml) {
        var id = $(resourceXml).attr(schema.id);
        if (!id) {
            //debugger;
            console.warn('A resource does not have ID !');
            return null;
        }
        
        var resource = {
            id: id,
            travelTime: 0,
            serviceTime: 0
        }
        
        return resource;
    }
    
    function processRoute(routeXml) {
        //debugger;
        var id = $(routeXml).attr(schema.id);
        
        if (!id) {
            console.warn('A Route does not have ID !');
        }
        
        //process route resource IDs
        var resourceIds = [];
        $(routeXml).find(schema.resource).each(function() {
            var resourceId = $(this).attr(schema.resourceRef);
            resourceIds.push(resourceId);
        });


        var travelTime = 0;
        var serviceTime = 0;
        var visits = [];
        // process visits
        $(routeXml).find(schema.visit).each(function() {
            // get visit
            var visit = processVisit($(this), id);
            visits.push(visit);
            
            travelTime += visit.travelTime;
            serviceTime += visit.duration;
        });
        
        var route = {
            id: id,
            visits: visits,
            resourceIds: resourceIds,
            travelTime: travelTime,
            serviceTime: serviceTime
        }
        
        //resource.routes.push(route);
        //console.info('route: ' + route.id + ', visit num: ' + visits.length);
        nextServiceTime = null;
        return route;
    }
    
    function processVisit(visitXml, routeId) {
        var id = $(visitXml).attr(schema.id);
        
        if (!id) {
            console.warn('A Visit does not have ID !');
        }
        
        var timeEarliest = $(visitXml).find('>' + schema.timeEarliest).text();
        var timeLatest = $(visitXml).find('>' + schema.timeLatest).text();
        
        var locId = $(visitXml).attr(schema.locationRef);
        var location = locations[locId];
        if (!location) {
            console.warn('Can not find location for Visit ' + id);
        }
        
        
        var travelTime = 0;
        var travelTimeText;
        if (nextServiceTime) {
            travelTimeText =  $(visitXml).find(schema.travelTime).text();
            travelTime = parseInt(travelTimeText) * 60 * 1000;
            nextServiceTime += travelTime;
        }
        
        var duration = 0;
        // process services/tasks
        var services = [];
        $(visitXml).find(schema.service).each(function() {
            var service = processDurationService($(this), id);
            //var service = processService($(this), id);
            services.push(service);
            if (!tasks[service.id]) {
                tasks[service.id] = service;
            }
            
            duration += service.duration;
        });
        
        var startTime;
        var endTime;
        
        if (services.length > 0) {
            startTime = services[0].startTime;
            endTime = services[services.length-1].endTime;
        }
        
        
        var visit = {
            id: id,
            startTime: startTime,
            endTime: endTime,
            timeEarliest: timeEarliest,
            timeLatest: timeLatest,
            location: location,
            routeId: routeId,
            services: services,
            travelTime: travelTime,
            duration: duration
        }        
        
        return visit;
    }
    
    function processDurationService(serviceXml, visitId){
        var id = $(serviceXml).attr(schema.id);
        
        if (!id) {
            console.warn('A service does not have ID !');
        }
        
        var startTimeISOStr = $(serviceXml).find('>' + schema.timeEarliest).text();
        var endTimeISOStr = $(serviceXml).find('>' + schema.timeLatest).text();
        
        if (!nextServiceTime) {
            nextServiceTime = startTimeISOStr;
        }
        
        var startTime = new IFL.Util.DateTime(nextServiceTime);
        
        var durationText = $(serviceXml).find('>' + schema.duration).text();
        var duration = parseInt(durationText) * 60 * 1000;
        
        nextServiceTime = startTime.getTime() + duration;
        var endTime = new IFL.Util.DateTime(nextServiceTime);
        
        return {
            id: id,
            startTime: startTime,
            endTime: endTime,
            ISOStartTimeStr: startTimeISOStr,
            ISOEndTimeStr: endTimeISOStr,
            duration: duration,
            visitId: visitId
        }
    }
    
    function processService(serviceXml, visitId) {
        var id = $(serviceXml).attr(schema.id);
        
        if (!id) {
            console.warn('A service does not have ID !');
        }
        
        var startTimeISOStr = $(serviceXml).find('>' + schema.timeEarliest).text();
        var endTimeISOStr = $(serviceXml).find('>' + schema.timeLatest).text();
        
        var startTime = new IFL.Util.DateTime(startTimeISOStr);
        var endTime = new IFL.Util.DateTime(endTimeISOStr);
        //var status = $(serviceXml).find('> status').text();
        
        var duration = $(serviceXml).find('>' + schema.duration).text();
        
        return {
            id: id,
            ISOStartTimeStr: startTimeISOStr,
            ISOEndTimeStr: endTimeISOStr,
            startTime: startTime,
            endTime: endTime,
            //status: status,
            visitId: visitId
        }
    }
    
    function processLocation(locationXml) {
        var id = $(locationXml).attr(schema.id);
        if (!id) {
            console.warn('A Location does not have ID !');
        }
        
        var lon = $(locationXml).find(schema.lon).text();
        var lat = $(locationXml).find(schema.lat).text();
        
        var loc = {
            id: id,
            lon: lon,
            lat: lat
        }
        
        return loc;
    }
    
    return {
        processXml: processXml
    }
}

