IFL.Config.XmlProcessor = function(_options) {
    
    
    function processAccountConfigXml(xml) {
        var account = processAccount(xml);
        
        return account;
    }
    
    function processAccount(accountXml) {
        var id = $(accountXml).find('> id').text();
        var uri = $(accountXml).find('> uri').text();
        var optMetricDist = $(accountXml).find('> optMetricDist').text();
        
        //process metrics
        var metrics = [];
        $(accountXml).find('metrics > metric').each(function() {
            var metric = processMetric($(this));
            metrics.push(metric);
        });
        
        //process properties
        var properties = [];
        $(accountXml).find('properties > property').each(function() {
            var property = processProperty($(this));
            properties.push(property);
        });
        
        //process comparisons
        var comparisons = [];
        $(accountXml).find('comparisons > comparison').each(function() {
            var comparison = processComparison($(this));
            comparisons.push(comparison);
        });
        
        //process commodities
        var commodities = [];
        $(accountXml).find('commodities > commodity').each(function() {
            var commodity = processCommodity($(this));
            commodities.push(commodity);
        });
        
        
        var account = {
            id: id,
            uri: uri,
            optMetricDist: optMetricDist,
            metrics: metrics,
            properties: properties,
            comparisons: comparisons,
            commodities: commodities
        }
        
        return account;
    }
    
    function processMetric(metricXml) {
        var id = $(metricXml).find('> id').text();
        var uri = $(metricXml).find('> uri').text();
        var type = $(metricXml).find('> type').text();
        var weighting = $(metricXml).find('> weighting').text();
        
        var metric = {
            id: id,
            uri: uri,
            type: type,
            weighting: weighting
        }
        
        return metric;
    }
    
    function processComparison(comparisonXml) {
        var id = $(comparisonXml).find('> id').text();
        var uri = $(comparisonXml).find('> uri').text();
        var type = $(comparisonXml).find('> type').text();
        var compatible = $(comparisonXml).find('> compatible').text();
        var penalty = $(comparisonXml).find('> penalty').text();
        
        var propA = processProperty($(comparisonXml).find('> fkPropertyA'));
        var propB = processProperty($(comparisonXml).find('> fkPropertyB'));
        
        var comparison = {
            id: id,
            uri: uri,
            type: type,
            compatible: compatible,
            propA: propA.title,
            propB: propB.title,
            propAId: propA.id,
            propBId: propB.id,
            penalty: penalty
        }
        
        return comparison
    }
    
    function processCommodity(commodityXml) {
        var id = $(commodityXml).find('id').text();
        var uri = $(commodityXml).find('uri').text();
        var title = $(commodityXml).find('title').text();
        var unitWhole = $(commodityXml).find('unitWhole').text();
        var load = $(commodityXml).find('load');
        var unload = $(commodityXml).find('unload');
        
        var commodity = {
            id: id,
            uri: uri,
            title: title,
            unitWhole: unitWhole,
            load: (load ? load.text() : ''),
            unload: (unload ? unload.text() : '')
        }
        
        return commodity;
    }
    
    function processProperty(propertyXml) {
        var id = $(propertyXml).find('id').text();
        var uri = $(propertyXml).find('uri').text();
        var title = $(propertyXml).find('title').text();
        var base = $(propertyXml).find('base').text();
        var type = $(propertyXml).find('type').text();
        
        var property = {
            id: id,
            uri: uri,
            title: title,
            base: base,
            type: type
        }
        
        return property
    }
    
    function processConfigTypesXml(xml) {
        //process base types
        var baseTypes = [];
        $(xml).find('baseTypes > baseType').each(function() {
            baseTypes.push($(this).text());
        })
        
        //process comparison Types
        var comparisonTypes = [];
        $(xml).find('comparisonTypes > comparisonType').each(function() {
            comparisonTypes.push($(this).text());
        })
        
        //process property Types
        var propertyTypes = [];
        $(xml).find('propertyTypes > propertyType').each(function() {
            propertyTypes.push($(this).text());
        })
        
        //process metric Types
        var metricTypes = [];
        $(xml).find('metricTypes > metricType').each(function() {
            metricTypes.push($(this).text());
        })
        
        var configTypes = {
            baseTypes: baseTypes,
            comparisonTypes: comparisonTypes,
            propertyTypes: propertyTypes,
            metricTypes: metricTypes
        }
        
        return configTypes;
    }
    
    
    
    return {
        processAccountConfigXml: processAccountConfigXml,
        processConfigTypesXml: processConfigTypesXml
    }    
}


