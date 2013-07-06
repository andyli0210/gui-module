IFL.CTS.OptInfoWidget = function(optInfo, _options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var statusText;
    var loadingIcon;
    var mapButton;
    var chartButton;
    var parametersButton;
    var rerunButton;
    var deleteButton;
    var cancelButton;
    var asInputButton;
    var reportButton;
    
    var buttonPanel;
    
    var eventHandler = new IFL.Util.EventHandler(['mouseover', 'mouseout', 'click', 'showMap', 'showChart','showParameters','rerun','delete','cancel','asInput','report']);
    init();
    
    function initDefaultOptions() {
        options = {
            loadingIconPath: Config.imagePath + "/loading2.gif"
        };
    }
    
    function init() {
        var row = $('<tr></tr>').addClass('ui-widget-content');
        var nameTd = $('<td></td>').append(optInfo.name).appendTo(row);
        nameTd.css({
            'width': '25%',
            paddingLeft: 2
        });
        
        var startTimeTd = $('<td></td>').append(optInfo.startTime);
        startTimeTd.css('width', '25%')
        
        statusText = $('<div/>').append(optInfo.status);
        var statusTd = $('<td></td>').append(statusText);
        statusTd.css('width','4%');
        startTimeTd.appendTo(row);
        statusTd.appendTo(row);
        
        loadingIcon = $('<img/>').attr('src',options.loadingIconPath);
        var loadingTd = $('<td width="1%"></td>').append(loadingIcon);
        loadingTd.appendTo(row);
        
        row.appendTo(container);
        
        $('td',row).css({
            borderBottom: '1px solid #DDD'
        });
        
        container = row;
        
        initButtons();
        updateOptInfo(optInfo);
        
        row.mouseover(function() {
            row.addClass('ui-state-active');
            eventHandler.notifyHandlers('mouseover', optInfo);
        });
        
        row.mouseout(function() {
            row.removeClass('ui-state-active');
            eventHandler.notifyHandlers('mouseout', optInfo);
        });
    }
    
    function initButtons() {
        buttonPanel = $('<div/>');
        mapButton = $('<button>Map</button>').button();
        mapButton.attr('title', 'show schedule details on Map');
        
        mapButton.click(function() {
            eventHandler.notifyHandlers('showMap', optInfo);
        });
        mapButton.appendTo(buttonPanel);
        
        chartButton = $('<button>Chart</button>').button();
        chartButton.click(function() {
            eventHandler.notifyHandlers('showChart', optInfo);
        });
        chartButton.attr('title', 'show schedule details in Gantt Chart');
        chartButton.appendTo(buttonPanel);
        
        parametersButton = $('<button>Parameters</button>').button();
        parametersButton.click(function() {
            eventHandler.notifyHandlers('showParameters', optInfo);
        });
        parametersButton.attr('title', 'show customer parameters of this optimisation');
        parametersButton.appendTo(buttonPanel);
        
        asInputButton = $('<button>As Input</button>').button();
        asInputButton.click(function() {
            eventHandler.notifyHandlers('asInput', optInfo);
        });
        asInputButton.attr('title', 'Use this solution as input to generate other opimisation');
        asInputButton.appendTo(buttonPanel);
        
        reportButton = $('<button>Report</button>').button();
        reportButton.click(function() {
            eventHandler.notifyHandlers('report', optInfo);
        });
        reportButton.attr('title', 'Generate report for this schedule solution');
        reportButton.appendTo(buttonPanel);
        
        // only base case and rop has rerun button
        if (optInfo.id == 'checkers-data' || optInfo.id == 'rop-data') {
            rerunButton = $('<button>Rerun</button>').button();
            rerunButton.click(function() {
                var msg = 'This operation will allow you to re-run the ' + optInfo.name + '\n';
                var noteMsg = 'Note: ';
                if (optInfo.id == 'baseCase') {
                    noteMsg += 'All the existing optimisation will be Deleted. You will need to run through all the checkers(Geo, Volume, Time, Route) and Route Optimisation again.';
                } else if (optInfo.id == 'rop') {
                    noteMsg += 'All the existing CTS optimisation and Route Optimisation will be Deleted.'
                }
                
                 IFL.Util.showConfirmDialog('Rerun Optimisation', msg + '<br/><br/>' + noteMsg, function() {
                     eventHandler.notifyHandlers('rerun', optInfo);
                 });
                
            });
            rerunButton.attr('title', 'Re-run this optimisation');
            rerunButton.appendTo(buttonPanel);
        } else {
            deleteButton = $('<button>Delete</button>').button();
            deleteButton.click(function() {
                IFL.Util.showConfirmDialog('Delete CTS Optimisation', 'Do you want to delete this CTS Optimisation', function() {
                    eventHandler.notifyHandlers('delete', optInfo);
                    container.remove();
                });
            });
            deleteButton.attr('title', 'Delete this optimisation');
            deleteButton.appendTo(buttonPanel);
        }
        
        //        cancelButton = $('<button>delete</button>').button();
        //        cancelButton.click(function() {
        //            eventHandler.notifyHandlers('cancel', optInfo);
        //        });
        //        cancelButton.attr('title', 'Cancel this optimisation');
        //        cancelButton.appendTo(buttonPanel);
        
        var buttonsTd = $('<td/>').append(buttonPanel).appendTo(container);
        buttonsTd.css('width', '45%');
    //        if (optInfo.status != 'completed') {
    //            buttonPanel.hide();
    //        }
    }
    
    function updateOptInfo(_optInfo) {
        if (optInfo.id != _optInfo.id) {
            console.warn('OptInfo Widget has a different opt info, can not do update !');
            return;
        }
        
        optInfo = _optInfo;
        statusText.html(optInfo.status);
        
        if (optInfo.status == 'in progress') {
            loadingIcon.show();
        } else {
            loadingIcon.hide();
        }
        
        if (optInfo.status != 'completed') {
            buttonPanel.hide();
        } else {
            buttonPanel.show();
        }
    }
    
    function getContainer() {
        return container;
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    function getOptInfo() {
        return optInfo;
    }
    
    return {
        getContainer: getContainer,
        updateOptInfo: updateOptInfo,
        registerHandler: registerHandler,
        getOptInfo: getOptInfo
    }
    
}


