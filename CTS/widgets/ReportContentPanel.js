IFL.CTS.ReportContentPanel = function(_options) {
    var options;
    var container;
    var checkBoxGroup;
    var reportNameInput;

    var reportContents = ['Summary', 'Route Checking', 'Route Details'];
    
    initOptions();
    init();
    function init() {
        container = $('<div/>');

        var message = $('<h5>Generate Report for Schedule: ' + options.optInfo.name + '<h5><h5>Please select report contents:</h5>');
        checkBoxGroup = new IFL.Widget.CheckboxGroup('reportContents', reportContents, ['Summary'], true);
        
        var msg = $('<h5>Input Report Name:</h5>');
        reportNameInput = $('<input/>').css('width','250px').val(options.optInfo.name + ' report');

        container.append(message).append(checkBoxGroup.getContainer()).append(msg).append(reportNameInput);
    }

    function initOptions() {
        options = _options;
    }

    function getContainer() {
        return container;
    }

    function getSelectedContents() {
        var reportContents = {
            id: options.optInfo.id,
            includeSummary: false,
            includeRouteChecking: false,
            includeRouteDetails: false,
            reportName: reportNameInput.val()
        }
        var contents = checkBoxGroup.getSelectedItems();

        for (var c in contents) {
            if (contents[c] == 'Summary') {
                reportContents.includeSummary = true;
            }

            if (contents[c] == 'Route Checking') {
                reportContents.includeRouteChecking = true;
            }

            if (contents[c] == 'Route Details') {
                reportContents.includeRouteDetails = true;
            }
        }

        return reportContents;
    }


    return {
        getContainer: getContainer,
        getSelectedContents: getSelectedContents
    }
}


