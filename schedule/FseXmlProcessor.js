IFL.Schedule.FseXmlProcessor = function() {
    
    function processXml(xml) {
        if (!xml) {
            alert('no xml to parse !');
            return null;
        }
        
        var resources = {};
        var tasks = {};
        $(xml).find('route').each(function() {
            var resourceXml  = $(this).find('resource');
            var resource = processResource(resourceXml);
            
            if (!resources[resource.id])    
                resources[resource.id] = resource;
            
            $(this).find('visit').each(function() {
                var serviceXml = $(this).find('service');
                var service = processService(serviceXml, resource.id);
                if (!tasks[service.id])    
                    tasks[service.id] = service;
            });
        });
        
        return {
            vehicles: resources,
            tasks: tasks
        }
    }
    
    function processResource(resourceXml) {
        var id = $(resourceXml).attr('refResource');
        if (!id) {
            console.warn('A resource does not have ID !');
            return null;
        }
        
        var resource = {
            id: id
        }
        
        return resource;
    }
    
    function processService(serviceXml, resourceId) {
        var id = $(serviceXml).attr('refTask');
        
        if (!id) {
            console.warn('A service does not have ID !');
        }
        
        var startTimeISOStr = $(serviceXml).find('> timeEarliest').text();
        var endTimeISOStr = $(serviceXml).find('> timeLatest').text();
        
        var startTime = new IFL.Util.DateTime(startTimeISOStr);
        var endTime = new IFL.Util.DateTime(endTimeISOStr);
        var status = $(serviceXml).find('> status').text();
        
        return {
            id: id,
            ISOStartTimeStr: startTimeISOStr,
            ISOEndTimeStr: endTimeISOStr,
            startTime: startTime,
            endTime: endTime,
            status: status,
            vehicle: resourceId
        }
    }
    
    return {
        processXml: processXml
    }
}

