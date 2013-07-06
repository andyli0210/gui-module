IFL.Widget.DateFilter = function(_options) {
    var dates = {};
    
    var options = {
        checkByDefault: true
    }
    
    $.extend(true, options, _options);
    
    var container;
    var monthNames = ['January','February', 'March', 'April','May','June','July','August','September','October','November','December'];
    
    var eventHandler = new IFL.Util.EventHandler(['click','change']);
    var dateCheckBoxes = [];
    
    init();
    function init() {
        container = $('<ul class="filetree"></ul>');
    }
    
    function refresh(dateTimeItems) {
        
        container.empty();
        
        if (dateTimeItems) {
            dates = {};
            groupDates(dateTimeItems);
        }
        
        initDatesContainer();
    }
    
    function groupDates(dateTimeItems) {
        for (var i in dateTimeItems) {
            var dateTime = dateTimeItems[i];
            
            var year = dateTime.getDate().getFullYear();
            if (!dates[year]) {
                dates[year] = {};
            }
            
            var monthNum = dateTime.getDate().getMonth();
            var month = monthNames[monthNum];
            
            if (!dates[year][month]) {
                dates[year][month] = {};
            }
            
            var date = dateTime.getDate().getDate();
            
            if (!dates[year][month][date]) {
                dates[year][month][date] = dateTime;
            }
        }
    }
    
    function initDatesContainer() {
        for (var year in dates) {
            var yearItem = addItem(container, year, false);
            
            for (var month in dates[year]) {
                var monthItem = addItem(yearItem, month, false);
                
                for (var date in dates[year][month]) {
                    var dateTime = dates[year][month][date];
                    addItem(monthItem, dateTime.getDateString(), true);
                }
            }
        }
        
        container.treeview();
            
    }
    
    function addItem(container, item, isLeaf, value) {
        var liElement = $('<li class="closed"></li>').appendTo(container);
        var checkBox = $('<input type="checkbox"/>').attr('value', item).appendTo(liElement);
        
        if (options.checkByDefault) {
            checkBox.prop('checked', true);
        }
        
        liElement.append(item);
        
        var ulElement;
        if (!isLeaf) {
            ulElement = $('<ul></ul>');
            liElement.append(ulElement);
            initFolderCheckBoxHandler(checkBox, ulElement);
        } else {
            dateCheckBoxes.push(checkBox);
            initLeafCheckBoxHandler(checkBox);
        }
        
        return ulElement;
    }
    
    function initLeafCheckBoxHandler(checkbox) {
        $(checkbox).change(function() {
            var value = $(this).val();
            var isCheck;
            if ($(this).prop("checked")) {
                isCheck = true;
            } else {
                isCheck = false;
            }
            
            eventHandler.notifyHandlers('change', [value], isCheck);
        })
    }
    
    function initFolderCheckBoxHandler(checkbox, childrenContainer) {
        $(checkbox).change(function() {
            var value = $(this).val();
            
            var isCheck;
            if ($(this).prop("checked")) {
                isCheck = true;
                $('input[type=checkbox]', childrenContainer).prop("checked", true);
            } else {
                isCheck = false;
                $('input[type=checkbox]', childrenContainer).prop("checked", false);
            }
            
            var changedItems = [];
            $('input[type=checkbox]', childrenContainer).each(function() {
                value = $(this).val();
                changedItems.push(value);
            });
            
            eventHandler.notifyHandlers('change', changedItems, isCheck);
        })
    }
    
    function getContainer() {
        return container;
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    return {
        refresh: refresh,
        getContainer: getContainer,
        registerHandler: registerHandler
    }
}


