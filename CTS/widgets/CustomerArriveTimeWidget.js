IFL.CTS.CustomerArriveTimeWidget = function(_options, groupMember, isRoot) {
    var options = {
        treeWidth: 600
    };
    
    $.extend(true, options, _options);
    
    var treeWidget;
    var hourPlusInputBox;
    var hourMinusInputBox;
    var plusPenaltyInputBox;
    var minusPenaltyInputBox;
    var applyButton;
    var memberWidgets = [];
    
    init();
    function init() {
        if (groupMember.members && groupMember.members.length > 0) {
            for (var m in groupMember.members) {
                var member = groupMember.members[m];
                var memberWidget = new IFL.CTS.CustomerArriveTimeWidget(options, member);
                memberWidgets.push(memberWidget);
            }
            initTreeWidget(false);
        } else {
            initTreeWidget(true);
        }
    }
    
    function initTreeWidget(isLeaf) {
        hourPlusInputBox = $('<input/>').attr('value', groupMember.arriveTimePlus).css('width', 15);
        hourMinusInputBox = $('<input/>').attr('value', groupMember.arriveTimeMinus).css('width', 15);
        plusPenaltyInputBox = $('<input/>').attr('value', groupMember.plusTimePanelty).css('width', 35);
        minusPenaltyInputBox = $('<input/>').attr('value', groupMember.minusTimePanelty).css('width', 35);
        
        hourPlusInputBox.change(function() {
            groupMember.arriveTimePlus = parseFloat(hourPlusInputBox.val());
        });
        
        hourMinusInputBox.change(function() {
            groupMember.arriveTimeMinus = parseFloat(hourMinusInputBox.val());
        })
        
        plusPenaltyInputBox.change(function() {
            groupMember.plusTimePanelty = parseFloat(plusPenaltyInputBox.val());
        });
        
        minusPenaltyInputBox.change(function() {
            groupMember.minusTimePanelty = parseFloat(minusPenaltyInputBox.val());
        });
        
        if (!isLeaf) {
            applyButton = $('<button>apply to members</button>').button().css('font-size',10);
            
            applyButton.click(function() {
                var minus = parseFloat(hourMinusInputBox.val());
                var plus = parseFloat(hourPlusInputBox.val());
                var plusTimePanelty = parseFloat(plusPenaltyInputBox.val());
                var minusTimePanelty = parseFloat(minusPenaltyInputBox.val());
                
                applyToChildren(plus, minus, plusTimePanelty, minusTimePanelty);                
            })
        } else {
            applyButton = $('<div></div>');
        }
        
        var inputSpan = $('<div style="float:right;"/>').append(applyButton).append(' - ').append(hourMinusInputBox).append(' + ').append(hourPlusInputBox).append(' hrs').append(', early penalty: ').append(minusPenaltyInputBox).append(' late penalty: ').append(plusPenaltyInputBox);
        var itemSummary = $('<div></div>').append(groupMember.name).append(inputSpan);
        itemSummary.css({
            height: 30
        })
        
        itemSummary.hover(function() {
            itemSummary.addClass('ui-state-active');
            itemSummary.css('border', 'none');
        }, function() {
            itemSummary.removeClass('ui-state-active');
        })
        
        treeWidget = new IFL.Widget.TreeWidget({
            isRoot: isRoot,
            isLeaf: isLeaf,
            itemSummary: itemSummary,
            width: options.treeWidth
        });
        
        if (memberWidgets.length > 0 && !isLeaf) {
            for (var m in memberWidgets) {
                treeWidget.addItem(memberWidgets[m].getTreeWidget());
            }
        }
        
        if (isRoot) {
            treeWidget.initTreeStyle();
        }
    }
    
    function applyToChildren(plus, minus, plusTimePenalty, minusTimePenalty) {
        for (var m in memberWidgets) {
            memberWidgets[m].setHours(plus, minus, plusTimePenalty, minusTimePenalty);
            memberWidgets[m].applyToChildren(plus, minus, plusTimePenalty, minusTimePenalty);
        }
    }
    
    function setHours(plus, minus, plusTimePenalty, minusTimePenalty) {
        groupMember.arriveTimePlus = plus;
        groupMember.arriveTimeMinus = minus;
        groupMember.plusTimePanelty = plusTimePenalty;
        groupMember.minusTimePanelty = minusTimePenalty;
        
        hourPlusInputBox.val(plus);
        hourMinusInputBox.val(minus);
        plusPenaltyInputBox.val(plusTimePenalty);
        minusPenaltyInputBox.val(minusTimePenalty);
    }
    
    function getContainer() {
        return treeWidget.getContainer();
    }
    
    function getTreeWidget() {
        return treeWidget;
    }
    
    return {
        getContainer: getContainer,
        getTreeWidget: getTreeWidget,
        applyToChildren: applyToChildren,
        setHours: setHours
    }
}


