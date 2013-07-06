IFL.Widget.ListControlPanel = function(_options) {
    var defaultOptions = {
        listOptions: {
            itemPerPage: 5
        },
        keyTitleMapping: null,
        panelOptions: null,
        showAddButton: false
    }
    
    var options = $.extend(true, {}, defaultOptions, _options);
    var buttonPanel;
    var listTable;
    var eventHandler;
    var pager;
    var addButton;
    
    var items = [];
    
    init();
    function init() {
        buttonPanel = new IFL.Widget.ButtonPanel(options.panelOptions);
        listTable = new IFL.Widget.DomainListTable(options.keyTitleMapping, options.listOptions);
        eventHandler = new IFL.Util.EventHandler(['add']);
        buttonPanel.setContent(listTable);
        
        if (options.showAddButton) {
            addButton = buttonPanel.getPanelButton('Add');
            buttonPanel.addButton(addButton, 'left');
            addButton.click(function() {
                eventHandler.notifyHandlers('add');
            });
        }
        
        pager = new IFL.Widget.Pager();
        buttonPanel.addButton(pager.getContainer(), 'middle');
        initPager();
    }
    
    function initPager() {
        pager.setSearchCatogiry(options.keyTitleMapping);
        
        pager.registerHandler('pagechange', function(pageNum) {
            displayItemsForPage(pageNum);
        });
        
        pager.registerHandler('categorychange', function(cat) {
            setSearchAutoComplete(cat);
        });
        
        pager.registerHandler('search', function(pageNum) {
            //displayItemsForPage(pageNum);
            });
        
    }
    
    function setSearchAutoComplete(cat) {
        var key = getKeyByTitle(cat);
        var values = getCatValues(key);
        pager.setSearchItems(values);
    }
    
    function getKeyByTitle(title) {
        for (var key in options.keyTitleMapping) {
            if (options.keyTitleMapping[key] == title) {
                return key;
            }
        }
        return null;
    } 
    
    function getCatValues(key) {
        var values = [];
        for (var i=0; i<items.length; i++) {
            var item = items[i];
            var value = IFL.Util.getFieldValue(item[key]);
            values.push(value);
        }
        
        return values;
    }
    
    function updatePageNum() {
        var totalItemNum = items.length;
        var totalPageNum = ((totalItemNum - 1) / options.listOptions.itemPerPage) + 1;
        pager.setTotalPageNum(totalPageNum);
    }
    
    function addItem(item) {
        for (var i in items) {
            if (items[i].id == item.id) {
                console.warn('duplicated id found in list control panel !')
                return;
            }
        }
        
        items.push(item);
        updatePageNum();
    }
    
    function deleteItem(item) {
        items = IFL.Util.removeArrayElement(items, item);
        listTable.deleteItem(item.id);
        updatePageNum();
        refresh()
    }
    
    function setItems(_items) {
        items = _items;
        updatePageNum();
    }
    
    function refresh() {
        var pageNum = pager.getCurrentPageNum();
        displayItemsForPage(pageNum);
        
        var cat = pager.getCurrentSearchCategory();
        if (cat) {
            setSearchAutoComplete(cat);
        }
    }
    
    function getContainer() {
        return buttonPanel.getContainer();
    }
    
    function registerHandler(name, handler) {
        if (name == 'pagechange' || name == 'categorychange' || name == 'search') {
             pager.registerHandler(name,handler);
        } else if (name == 'add') {
            eventHandler.registerHandler(name, handler);
        } else if (name == 'select' || name == 'delete'){
            listTable.registerHandler(name, handler);
        }
    }
    
    function displayItemsForPage(pageNum) {
        var displayItems = getPageItems(pageNum);
        listTable.setItems({}); 
        
        for (var i in displayItems) {
            var item = displayItems[i];
            listTable.addItem(item);            
        }
        
        listTable.refresh();
    }
    
    function getPageItems(pageNum) {
        var startIndex = (pageNum-1) * options.listOptions.itemPerPage;
        var endIndex = startIndex + options.listOptions.itemPerPage;
        
        return items.slice(startIndex, endIndex);
    }
    
    function getPager() {
        return pager;
    }
    
    function setPager(_pager) {
        pager = _pager;
    }
    
    function getListTable() {
        return listTable;
    }
    
    function getItems() {
        return items;
    }
    
    return {
        getContainer: getContainer,
        registerHandler: registerHandler,
        refresh: refresh,
        setItems: setItems,
        getItems: getItems,
        addItem: addItem,
        deleteItem: deleteItem,
        getPager: getPager,
        setPager: setPager,
        getListTable: getListTable
    }
    
    
}

