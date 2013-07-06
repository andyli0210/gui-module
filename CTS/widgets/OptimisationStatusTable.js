IFL.CTS.OptimisationStatusTable = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    
    var optInfos;
    init();
    
    function initDefaultOptions() {
        options = {
            loadingIconPath: Config.imagePath + "/loading2.gif",
            width: 500
        }
    }
    
    function init() {
        optInfos = {};
        container = $('<table></table>').addClass('ui-widget ui-widget-content').css({
            width: options.width,
            'border-collapse': 'collapse'
        });
    }
    
    function addOptimisation(optInfo) {
        var row = $('<tr></tr>').addClass('ui-widget-content');
        var nameTd = $('<td></td>').append(optInfo.name).appendTo(row);
        var startTimeTd = $('<td></td>').append(optInfo.startTime);
        var statusTd = $('<td></td>').append(optInfo.status);
        startTimeTd.appendTo(row);
        statusTd.appendTo(row);
        
        
        var loadingIcon = $('<img/>').attr('src',options.loadingIconPath);
        var loadingTd = $('<td width="50px"></td>').append(loadingIcon);
        loadingTd.appendTo(row);
        
        optInfos[optInfo.id] = {
            statusTd: statusTd,
            loadingTd: loadingTd
        }
        
        row.appendTo(container);
        
        $('td',row).css({
            borderBottom: '1px solid #DDD'
        })
    }
    
    function setOptCompleted(optId) {
        optInfos[optId].statusTd.text("completed");
        $('img',optInfos[optId].loadingTd).hide();
    }
    
    function getContainer() {
        return container;
    }
    
    return {
        getContainer: getContainer,
        addOptimisation: addOptimisation,
        setOptCompleted: setOptCompleted
    }
    
}

