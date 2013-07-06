IFL.Widget.FolderWidget = function(options) {
    if (!options) {
        options = {};
    }
    
    var container = jQuery('<div></div>');
    if (options.width) {
        container.css('width', options.width);
    }
    
    if (options.height) {
        container.css('height', options.height);
    }
    
    var titleBar;
    var contentContainer;
    var content;
    init();
    
    
    function init() {
        titleBar = jQuery('<div class="ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"><span class="ui-icon ui-icon-triangle-1-s" style="display: inline-block; cursor: pointer"></span><a style="cursor: pointer" id="title">Title:</a></div>').appendTo(container);
        titleBar.hover(function(){
            titleBar.addClass('ui-state-hover');
        },function() {
            titleBar.removeClass('ui-state-hover');
        });
        
        contentContainer = jQuery('<div width="100%" class="ui-widget-content"></div>').appendTo(container);
        
        titleBar.click(function() {
            contentContainer.toggle('blind');
            if (jQuery('span', titleBar).hasClass('ui-icon-triangle-1-e')) {
                jQuery('span', titleBar).removeClass('ui-icon-triangle-1-e');
                jQuery('span', titleBar).addClass('ui-icon-triangle-1-s');
            } else {
                jQuery('span', titleBar).removeClass('ui-icon-triangle-1-s');
                jQuery('span', titleBar).addClass('ui-icon-triangle-1-e');
            }
            
        });
        
        if (options.title) {
            setTitle(options.title);
        }
    }
    
    function disableFolder() {
        $('#title', container).unbind('click');
        titleBar.unbind();
        $('span', titleBar).css('display', 'none');
        titleBar.css('cursor' , 'auto');
    }
    
    function expand(isExpand) {
        if (isExpand && contentContainer.css('display') == 'none') {
            titleBar.click();
        } else if (!isExpand && contentContainer.css('display') != 'none'){
            titleBar.click();
        }
    }
    
    function getContainer() {
        return container;
    }
    
    function setTitle(title) {
        jQuery('#title', container).html(title);
    }
    
    function display(isDisplay) {
        if (isDisplay) {
            container.css('display', 'block');
        } else {
            container.css('display', 'none');
        }
    }
    
    function setContent(_content) {
        content = _content;
        contentContainer.empty();
        
        if (content.getContainer) {
            contentContainer.append(content.getContainer());
        } else {
            contentContainer.append(content);
        }
    }
    
    function getContent() {
        return content;
    }
    
    function addFunctionIcon(icon, handler) {
        var img = $('<img/>').attr("src", Config.imagePath +'/' + icon).css({
            "cursor": "pointer",
            "float" : "right"
        });
        titleBar.append(img);
        
        
        img.click(function(event) {
            event.stopPropagation();
            if (handler) {
                handler();
            }
        })
        
        return img;
    }
    
    return {
        getContainer : getContainer,
        setTitle: setTitle,
        disableFolder: disableFolder,
        expand: expand,
        display: display,
        setContent: setContent,
        getContent: getContent,
        addFunctionIcon: addFunctionIcon
    }

}


