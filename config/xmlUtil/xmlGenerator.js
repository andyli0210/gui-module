IFL.Config.XmlGenerator = function() {
    
    function generateProperty(domain) {
        var xml = '<property>';
        
        var contentXml = generatePropertyContent(domain);
        
        xml += contentXml;
        xml += '</property>';
        return xml;
    }
    
    function generatePropertyContent(domain) {
        var xml = '';
        var id = '<id>' + (domain.id || '') + '</id>';
        var title = '<title>' +domain.title + '</title>';
        var base = '<base>' + domain.base + '</base>';
        var type = '<type>' + domain.type + '</type>';
        
        xml += id;
        xml +=title;
        xml += base;
        xml += type;
        
        return xml;
    }
    
    function generateComparison(domain) {
        var xml = '<comparison>';
        
        var id = '<id>' + (domain.id || '') + '</id>';
        var type = '<type>' + domain.type + '</type>';
        var penalty = '<penalty>' + domain.penalty + '</penalty>';
        var compatible = '<compatible>false</compatible>';
        
        xml += id;
        xml += type;
        xml += penalty;
        xml += compatible;
        
        var fakePropA = {
            id: domain.propAId,
            title: 'fake',
            base: 'ENTITY_VEHICLE',
            type: 'STRING'
        }
        var fakePropB = {
            id: domain.propBId,
            title: 'fake',
            base: 'ENTITY_VEHICLE',
            type: 'STRING'
        }
        var propA = '<fkPropertyA>' + generatePropertyContent(fakePropA) + '</fkPropertyA>';
        var propB = '<fkPropertyB>' + generatePropertyContent(fakePropB) + '</fkPropertyB>';
        
        xml += propA;
        xml += propB;
        
        xml += '</comparison>';
        return xml;
    }
    
    function generateMetric(domain) {
        var xml = '<metric>';
        
        var id = '<id>' + (domain.id || '') + '</id>';
        var type = '<type>' + domain.type + '</type>';
        var weighting = '<weighting>' + domain.weighting + '</weighting>';
        
        xml += id;
        xml += type;
        xml += weighting;
        
        xml += '</metric>';
        return xml;
    }
    
    function generateCommodity(domain) {
        var xml = '<commodity>';
        
        var id = '<id>' + (domain.id || '') + '</id>';
        var title = '<title>' +domain.title + '</title>';
        var unitWhole = '<unitWhole>' + domain.unitWhole + '</unitWhole>';
        
        var load = '';
        var unload = '';
        if (domain.load) {
            load = '<load>' + (domain.load || '') + '</load>';
        }
        
        if (domain.unload) {
            unload = '<unload>' + (domain.unload || '') + '</unload>';
        }
        
        xml += id;
        xml += title;
        xml += unitWhole;
        xml += load;
        xml += unload;
        
        xml += '</commodity>';
        return xml;
        
    }
    
    return {
        generateCommodity: generateCommodity,
        generateMetric: generateMetric,
        generateComparison: generateComparison,
        generateProperty: generateProperty
    }
}


