IFL.FSE.CheckboxFilter = function(_options, groupMember, isRoot) {
    var options = {
        treeWidth: 500
    };
    
    $.extend(true, options, _options);
    
    var treeWidget;
    var checkBox;
    var memberWidgets = [];
    
    init();
    function init() {
        if (groupMember.members && groupMember.members.length > 0) {
            for (var m in groupMember.members) {
                var member = groupMember.members[m];
                var memberWidget = new IFL.FSE.CheckboxFilter(options, member);
                memberWidgets.push(memberWidget);
            }
            initTreeWidget(false);
        } else {
            initTreeWidget(true);
        }
    }
    
    function initTreeWidget(isLeaf) {
        checkBox = $('<input type="checkbox" style="float:right;">').attr('value', groupMember.name).prop("checked", groupMember.isIncluded);
        var itemSummary = $('<div></div>').append(groupMember.name).append(checkBox);
        itemSummary.css({
            height: 20
        })
        
        itemSummary.hover(function() {
            itemSummary.addClass('ui-state-active');
            itemSummary.css('border', 'none');
        }, function() {
            itemSummary.removeClass('ui-state-active');
        })
        
//        if (!checkBox || !checkBox.change) {
//            debugger;
//        }
        
        checkBox.change(function() {
            applyToChildren($(this).prop("checked"));
            
            groupMember.isIncluded = $(this).prop("checked");
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
    
    function applyToChildren(isSelected) {
        for (var m in memberWidgets) {
            memberWidgets[m].setSelected(isSelected);
            memberWidgets[m].applyToChildren(isSelected);
        }
    }
    
    function setSelected(isSelected) {
        checkBox.prop("checked", isSelected);
        groupMember.isIncluded = isSelected;
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
        setSelected: setSelected
    }
}


