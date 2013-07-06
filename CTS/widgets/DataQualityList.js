IFL.CTS.DataQualityList = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var dataDomain;
    var domainTable;
    var container;
    
    var routeCapField = $('<span></span>');
    var routeDuraField = $('<span/>');
    var timeWindowField = $('<span/>');
    
    var maxCapField = $('<span/>');
    var maxDuraField = $('<span/>');
    var maxTimeWindowField = $('<span/>');
    
    var droppedCustNumField = $('<span></span>');
    var unusedVehNumField = $('<span></span>');
    var utlisationField = $('<span></span>');
    
    var detailFields = $('<div/>');
    
    init();
    function init() {
        container = $('<div/>');
        initTitleBar();
        initContent();
        
        dataDomain = {
            routeCapacity: {
                val: 0,
                max: 110
            },
            routeDuration: {
                val: 0,
                max: 100
            },
            timeWindow: {
                val: 0,
                max: 3
            }
        }
        
        refresh(dataDomain);
    }
    
    function initTitleBar() {
        var titleBar = $('<div/>').append('Data Quality Summary:').addClass('ui-widget-header ui-corner-all').css({
            padding: 5
        })
        
        titleBar.appendTo(container);
    }
    
    function initContent() {
        var content = $('<div/>').addClass('ui-widget-content').css({
            padding: 5
        }).appendTo(container);
        
        content.append('<p>');
        content.append(routeCapField).append(' Routes exceeding capacity of ').append(maxCapField)
        content.append('</p>');
        content.append('<p>');
        content.append(routeDuraField).append(' Routes exceeding duration of ').append(maxDuraField);
        content.append('</p>');
        content.append('<p>');
        content.append(timeWindowField).append(' Missed time windows by max ').append(maxTimeWindowField);
        content.append('</p>');
        
        
        detailFields.append('<p>');
        detailFields.append(droppedCustNumField).append(' Customers dropped ');
        detailFields.append('</p>');
        
//        detailFields.append('<p>');
//        detailFields.append(unusedVehNumField).append(' Unused vehicles ');
//        detailFields.append('</p>');
//        
//        detailFields.append('<p>');
//        detailFields.append(utlisationField).append(' Utlisation ');
//        detailFields.append('</p>');
        
        detailFields.appendTo(content);
        
        showDetails(false);
    }
    
    function initDefaultOptions() {
        options = {
        }
    }
    
    function getContainer() {
        return container;
    }
    
    function showDetails(isShow) {
        if (isShow) {
            detailFields.show()
        } else {
            detailFields.hide()
        }
    } 
    
    function clear() {
        domainTable.empty();
        init();
    }
    
    function refresh(_dataDomain) {
        $.extend(true, dataDomain, _dataDomain);
        
        setValueField(dataDomain.routeCapacity.val, routeCapField);
        setValueField(dataDomain.routeDuration.val, routeDuraField);
        setValueField(dataDomain.timeWindow.val, timeWindowField);
        
        setMaxField(dataDomain.routeCapacity.max, maxCapField, '%');
        setMaxField(dataDomain.routeDuration.max, maxDuraField, '%');
        setMaxField(dataDomain.timeWindow.max, maxTimeWindowField, ' hours');
        
        setValueField(dataDomain.droppedCustNum, droppedCustNumField);
        setValueField(dataDomain.unusedVehNum, unusedVehNumField);
        setValueField(dataDomain.utlisation, utlisationField);
    }
    
    function setValueField(value, field) {
        if (value > 0) {
            field.css('color', 'red');
        } else {
            field.css('color', 'green');
        }
        
        field.html('<b>' + value + '</b>');
    }
    
    function setMaxField(max, field, unit) {
        field.html('<b>' + max + unit + '</b>');
    }
    
    return {
        getContainer: getContainer,
        refresh: refresh,
        showDetails: showDetails
    }
}