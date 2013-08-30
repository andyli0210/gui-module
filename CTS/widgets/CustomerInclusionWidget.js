IFL.CTS.CustomerInclusionWidget = function(_options, groupMember, isRoot) {
    var options = {
        treeWidth: 500
    };
    
    $.extend(true, options, _options);
    
    var treeWidget;
    var inclusionDropdownList;
    var applyButton;
    var includeOptions = ['auto','include','exclude'];
    var memberWidgets = [];
    
    init();
    function init() {
        if (groupMember.members && groupMember.members.length > 0) {
            for (var m in groupMember.members) {
                var member = groupMember.members[m];
                var memberWidget = new IFL.CTS.CustomerInclusionWidget(options, member);
                memberWidgets.push(memberWidget);
            }
            initTreeWidget(false);
        } else {
            initTreeWidget(true);
        }
    }
    
    function initTreeWidget(isLeaf) {
        //inclusionDropdownList = $('<input type="checkbox" style="float:right;">').attr('value', groupMember.name).prop("checked", groupMember.isIncluded);
        
        inclusionDropdownList = IFL.Widget.DropdownList('isInclude-dropdownlist', includeOptions);
        if (groupMember.isIncluded) {
            inclusionDropdownList.selectItem(groupMember.isIncluded);
        }
        inclusionDropdownList.registerHandler('change', function(item) {
            groupMember.isIncluded = item;
        });
        
        if (!isLeaf) {
            applyButton = $('<button>apply to members</button>').button().css('font-size',10);
            
            applyButton.click(function() {
                var includeStatus = inclusionDropdownList.getSelectedItem();
                applyToChildren(includeStatus);                
            });
        } else {
            applyButton = $('<div></div>');
        }
        
        var inputSpan = $('<div style="float:right;"/>').append(applyButton).append(inclusionDropdownList.getContainer());
        var itemSummary = $('<div></div>').append(groupMember.name).append(inputSpan);
        itemSummary.css({
            height: 30
        });
        
        itemSummary.hover(function() {
            itemSummary.addClass('ui-state-active');
            itemSummary.css('border', 'none');
        }, function() {
            itemSummary.removeClass('ui-state-active');
        });
        
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
    
    function applyToChildren(includeStatus) {
        for (var m in memberWidgets) {
            memberWidgets[m].setSelected(includeStatus);
            memberWidgets[m].applyToChildren(includeStatus);
        }
    }
    
    function setSelected(includeStatus) {
        inclusionDropdownList.selectItem(includeStatus);
        groupMember.isIncluded = includeStatus;
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


