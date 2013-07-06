function XmlGenerator() {
    
    function generateTruckXml(truck) {
        var xml = '<truck>';
        
        var type = '<type>' + truck.type + '</type>';
        var capacity = '<capacity>' + truck.capacity + '</capacity>';
        var quantity = '<quantity>' + truck.quantity + '</quantity>';
        
        xml += type;
        xml += capacity;
        xml += quantity;
        
        xml += '</truck>';
        
        return xml;
    }
    
    function generateDockXml(dock) {
        var xml = '<dock>';
        
        var name = '<name>' + dock.name + '</name>';
        var quantity = '<quantity>' + dock.quantity + '</quantity>';
        
        var truckTypes = '<truckTypes>';
        for (var t in dock.truckType) {
            var type = '<type>' + dock.truckType[t] + '</type>';
            
            truckTypes += type;
        }
        truckTypes += '</truckTypes>';
        
        xml += name;
        xml += quantity;
        xml += truckTypes
        
        xml += '</dock>';
        
        return xml;        
    }
    
    function generateSettingXml(settings) {
        var xml = '<settings>';
        
        for (var s in settings) {
            var setting = settings[s];
            
            var settingXml = '<setting>'
            
            var variable = '<variable>' + setting.variable + '</variable>';
            var distribution = '<distribution>' + setting.distribution + '</distribution>';
            
            var change = '<change>';
            var mean = '<mean>' + setting.change.mean + '</mean>';
            var stddev = '<stddev>' + setting.change.stddev || '' + '</stddev>';
            
            change += mean;
            change += stddev;
            change += '</change>';
            
            settingXml += variable;
            settingXml += distribution;
            settingXml += change;
            settingXml += '</setting>';
            
            xml += settingXml;
        }
        xml += '</settings>';
        
        return xml;
    }
    
    function generateSimulationXml(simulation) {
        var xml = '<simuation>';
        
        var runs = '<nrRuns>' + simulation.runs + '</nrRuns>';
        var dc = '<dc>' + simulation.dc + '</dc>';
        
        xml += runs;
        xml += dc;
        
        xml += '</simuation>';
        
        return xml;
    }
    
    function generateSetupXml(setup) {
        var xml = '<setup>';
        
        var simulation = generateSimulationXml(setup.simulation);
        
        var trucks = setup.trucks;
        var trucksXml = '<trucks>';
        for (var i in trucks) {
            var truck = trucks[i];
            var truckXml = generateTruckXml(truck);
            trucksXml += truckXml;
        }
        trucksXml += '</trucks>';
        
        var docks = setup.docks;
        var docksXml = '<docks>';
        for (var i in docks) {
            var dock = docks[i];
            var dockXml = generateDockXml(dock);
            docksXml += dockXml;
        }
        docksXml += '</docks>';
        
        xml += simulation;
        xml += trucksXml;
        xml += docksXml;
        
        xml += '</setup>';
        
        return xml;
    }
    
    return {
        generateSetupXml: generateSetupXml
    }
}


