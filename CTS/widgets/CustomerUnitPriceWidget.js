IFL.CTS.CustomerUnitPriceWidget = function(_options, groupMember, isRoot) {
    var options = {
        treeWidth: 500
    };
    
    $.extend(true, options, _options);
    
    var treeWidget;
    var feeInputBox;
    var applyButton;
    var memberWidgets = [];
    
    init();
    function init() {
        if (groupMember.members && groupMember.members.length > 0) {
            for (var m in groupMember.members) {
                var member = groupMember.members[m];
                var memberWidget = new IFL.CTS.CustomerUnitPriceWidget(options, member);
                memberWidgets.push(memberWidget);
            }
            initTreeWidget(false);
        } else {
            initTreeWidget(true);
        }
    }
    
    function initTreeWidget(isLeaf) {
        feeInputBox = $('<input/>').attr('value', groupMember.unitPrice).css('width', 50);
        
        feeInputBox.change(function() {
            groupMember.unitPrice = parseFloat(feeInputBox.val());
        });
        
        if (!isLeaf) {
            applyButton = $('<button>apply to members</button>').button().css('font-size',10);
            
            applyButton.click(function() {
                var fees = parseFloat(feeInputBox.val());
                
                applyToChildren(fees);                
            })
        } else {
            applyButton = $('<div></div>');
        }
        
        var inputSpan = $('<div style="float:right;"/>').append(applyButton).append(' $').append(feeInputBox);
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
    
    function applyToChildren(fees) {
        for (var m in memberWidgets) {
            memberWidgets[m].setFees(fees);
            memberWidgets[m].applyToChildren(fees);
        }
    }
    
    function setFees(fees) {
        groupMember.unitPrice = fees;
        feeInputBox.val(fees);
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
        setFees: setFees
    }
}


