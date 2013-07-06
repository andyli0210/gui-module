IFL.CTS.StatusTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var statusDomain;
    var domainTable;
    init();
    
    function init() {
        statusDomain = {
            national: 'Input Data',
            vehicles: '',
            routeNum: '',
            cusNum: '',
            gpad: '',
            grossMargin: '',
            varCost: '',
            fixCost: '',
            linehaulCost: '',
            volWeek: '',
            volMF: '',
            distance: '',
            duration: ''
        }
        
        domainTable = new IFL.Widget.DomainTable(statusDomain, {
            nameMapping: options.nameMapping,
            showMappingOnly: true,
            width: 200
        });
    }
    
    function initDefaultOptions() {
        options = {
            nameMapping: {
                national: 'National',
                vehicles: 'Vehicles',
                routeNum: 'Routes Num',
                cusNum: 'Customers Num ',
                gpad: 'GPAD',
                grossMargin: 'Gross Margin',
                varCost: 'Variable Costs',
                fixCost: 'Fixed Costs',
                linehaulCost: 'Linehaul Cost',
                volWeek: 'Volume(Week)',
                volMF: 'Volume(M-F)',
                distance: 'Distance(KM)(Week)',
                duration: 'Duration(hrs)(Week)'
            }
        }
    }
    
    function getContainer() {
        return domainTable.getContainer();
    }
    
    function clear() {
        domainTable.empty();
        init();
    }
    
    function refresh(_statusDomain) {
        $.extend(true, statusDomain, _statusDomain);
        domainTable.refresh();
    }
    
    return {
        getContainer: getContainer,
        refresh: refresh
    }
}