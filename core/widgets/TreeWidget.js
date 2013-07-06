IFL.Widget.TreeWidget = function(_options) {
    
    var options = {
        itemSummary: $('<div/>'),
        isLeaf: false,
        isRoot: false,
        width: 200
    }
    
    $.extend(true, options, _options);
    
    var container;
    var childrenContainer;
    var summaryContainer;
    
    var eventHandler = new IFL.Util.EventHandler(['click','change']);
    
    init();
    function init() {
        if (options.isRoot) {
            container = $('<div class="ui-state-default"></div>').css({
                width: options.width,
                padding: 5
            });
        }
        
        if (options.itemSummary) {
            summaryContainer = options.itemSummary;
        }
        
        if (!options.isLeaf) {
            childrenContainer = $('<ul class="filetree ui-state-default"></ul>');
            childrenContainer.css('border','none');
        }
        
        if (container) {
            container.append(summaryContainer).append(childrenContainer);
        }
    }
    
    function addItem(item) {
        if (options.isLeaf) {
            console.warn('Can not add item to a tree leaf !!!');
            return;
        }
        
        var liElement = $('<li class="closed"></li>').appendTo(childrenContainer);
        
        if (item.getSummaryContainer && item.getSummaryContainer()) {
            liElement.append(item.getSummaryContainer());
        } else {
            liElement.append(item);
        }           
        
        if (item.getChildrenContainer && item.getChildrenContainer()) {
            liElement.append(item.getChildrenContainer());
        }
            
    }
    
    function addItems(items) {
        for (var i in items) {
            var item = items[i];
            addItem(item)
        }
    }
    
    function getContainer() {
        return container;
    }
    
    function getSummaryContainer() {
        return summaryContainer;
    }
    
    function getChildrenContainer() {
        return childrenContainer;
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    function initTreeStyle() {
        childrenContainer.treeview();
    }
    
    function getItemId() {
        return options.itemId;
    }
    
    return {
        getContainer: getContainer,
        getSummaryContainer: getSummaryContainer,
        getChildrenContainer: getChildrenContainer,
        registerHandler: registerHandler,
        addItem: addItem,
        addItems: addItems,
        initTreeStyle: initTreeStyle,
        getItemId: getItemId
    }
}


