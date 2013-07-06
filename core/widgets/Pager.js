IFL.Widget.Pager = function() {
        
    var evnetsHandler = new IFL.Util.EventHandler(['pagechange','search', 'categorychange']);
    
    var container, row;
    var nextImg,firstImg,prevImg,lastImg,searchImg,searchInput,pageDropList, catDropList;
    
    var totalPageNum;
    
    initUI();
    initEffects();
    initHandlers();
    
    function initUI() {
        nextImg = $('<img src="'+ Config.imagePath + '/next.gif"/>');
        firstImg = $('<img src="'+ Config.imagePath + '/first.gif"/>');
        prevImg = $('<img src="'+ Config.imagePath + '/prev.gif"/>');
        lastImg = $('<img src="'+ Config.imagePath + '/last.gif"/>');
        searchInput = $('<input type="text" size="4"></input>');
        searchImg = $('<img src="'+ Config.imagePath + '/veh_find.png"/>');
        pageDropList= new IFL.Widget.DropdownList("pageNums");
        catDropList= new IFL.Widget.DropdownList("category");
    
        container = $('<table></table>').css('border-collapse','collapse');
        row = $('<tr height="16px"></tr>').appendTo(container).addClass('ui-state-default');
        var first_td = $('<td></td>').append(firstImg).appendTo(row);
        var prev_td = $('<td></td>').append(prevImg).appendTo(row);
        var input_td = $('<td></td>').append(pageDropList.getContainer()).appendTo(row);
        var next_td = $('<td></td>').append(nextImg).appendTo(row);
        var last_td = $('<td></td>').append(lastImg).appendTo(row);
    
        var search_td = $('<td></td>').append(searchInput).appendTo(row);
        var catDropList_td = $('<td></td>').append(catDropList.getContainer()).appendTo(row);
        var searchImg_td = $('<td></td>').append(searchImg).appendTo(row);
        
    }

    function initEffects() {
        $('td', row).css({
            width: '25px',
            height: '16px'
        });
        
        $('img', row).css({
            marginTop: '3px',
            cursor: 'pointer'
        });
        
        $('td', row).hover(function() {
            $(this).addClass('ui-state-active')
        }, function() {
            $(this).removeClass('ui-state-active')
        })
    }
    
    function initHandlers() {
        pageDropList.registerHandler('change', function(pageNum) {
            evnetsHandler.notifyHandlers('pagechange', pageNum);
        });
        
        catDropList.registerHandler('change', function(cat) {
            evnetsHandler.notifyHandlers('categorychange', cat);
        });
        
        nextImg.click(function() {
            var curPage = goNextPage();
            
            if (curPage)
                evnetsHandler.notifyHandlers('pagechange', curPage);
        });
        
        firstImg.click(function() {
            var curPage = goFirstPage();
            
            if (curPage)
                evnetsHandler.notifyHandlers('pagechange', curPage);
        });
        
        prevImg.click(function() {
            var curPage = goPrevPage();
            
            if (curPage)
                evnetsHandler.notifyHandlers('pagechange', curPage);
        });
        
        lastImg.click(function() {
            var curPage = goLastPage();
            
            if (curPage)
                evnetsHandler.notifyHandlers('pagechange', curPage);
        });
        
        searchImg.click(function() {
            var searchItem = searchInput.val();
            var category = catDropList.getSelectedItem();
            
            if (searchItem && searchItem.trim()) {
                evnetsHandler.notifyHandlers('search', searchItem, category);
            }
        });
    }
    
    function setSearchItems(items) {
        searchInput.autocomplete({
            source: items
        });
    }
    
    function getContainer() {
        return container;
    }
    
    function setTotalPageNum(pageNum) {
        totalPageNum = parseInt(pageNum);
        pageDropList.clear();
        for (var i=1; i<=totalPageNum; i++) {
            pageDropList.addItem(i);
        }
    }
    
    function setSearchCatogiry(cats) {
        catDropList.clear();
        for (var c in cats) {
            catDropList.addItem(cats[c]);
        }
    }
    
    function setCurrentPage(pageNum) {
        pageDropList.selectItem(pageNum);
    }
    
    function getCurrentSearchCategory() {
        var cat = catDropList.getSelectedItem();
        return cat;
    }
    
    function getCurrentPageNum() {
        var num = pageDropList.getSelectedItem();
        
        if (num) {
            return parseInt(num);
        } else {
            console.warn('No Page Number');
            return null;
        }
    }
    
    function goNextPage() {
        var curPage = getCurrentPageNum();
        if (curPage < totalPageNum) {
            curPage++;
            pageDropList.selectItem(curPage);
            return curPage;
        } else {
            return null;
        }
        
    }
    
    function goPrevPage() {
        var curPage = getCurrentPageNum();
        
        if (curPage > 1) {
            curPage--;
            pageDropList.selectItem(curPage);
            return curPage;
        } else {
            return null;
        }
    }
    
    function goFirstPage() {
        var curPage = getCurrentPageNum();
        if (curPage != 1) {
            pageDropList.selectItem(1);
            curPage = 1;
            return curPage;
        } else {
            return null;
        }
    }
    
    function goLastPage() {
        var curPage = getCurrentPageNum();
        if (curPage != totalPageNum) {
            pageDropList.selectItem(totalPageNum);
            curPage = totalPageNum;
            return curPage;
        } else {
            return null;
        }
    }
    
    function registerHandler(name, handler) {
        evnetsHandler.registerHandler(name, handler);
    }
    
    return {
        getContainer: getContainer,
        setTotalPageNum: setTotalPageNum,
        getCurrentPageNum: getCurrentPageNum,
        setCurrentPage: setCurrentPage,
        setSearchItems: setSearchItems,
        registerHandler: registerHandler,
        setSearchCatogiry: setSearchCatogiry,
        getCurrentSearchCategory: getCurrentSearchCategory
    }
}

