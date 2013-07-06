IFL.Widget.SidePanel = function(icon, side, top, _width, title, height) {
    var container = $('<div></div>');
    container.dialog({
        width: _width,
        height: height || 'auto',
        title: title || '',
        resizable: false,
        draggable:false
    });
    
    var dialog = container.dialog('widget');
    jQuery( 'a.ui-dialog-titlebar-close', dialog).remove();
    
    var width = dialog.outerWidth();
    var left = '', right = '';
    if (side == 'left') {
        left = -width + 'px';
    } else {
        right = -width + 'px';
    }
    dialog.css({
        top: top + 'px',
        left: left,
        right: right
            
    });
        
    var tab = jQuery('<div></div>').appendTo(document.body).css({
        backgroundImage: 'url("' + icon.url + '")', 
        'background-repeat': 'no-repeat',
        'background-position': icon.offset || 0, 
        position: 'absolute', 
        top: (top + 30) + 'px', 
        right: right?0:'',
        left: left?0:'',
        width: icon.width + 'px', 
        height: icon.height + 'px', 
        zIndex: 1000,
        cursor: 'pointer'
    });
    
    initTabAnimation();
    dialog.hide();
    

    function slideIn() {
       var  move = -(dialog.outerWidth());
       slide(move);
    }
    
    function slideOut() {
        slide(0);
    } 
    
    function slide(move) {
        var animateOpt = {};
        animateOpt[side] = move;
        dialog.animate(animateOpt,
        {
            duration: 500,
            complete: function() {
                if (move < 0)
                    dialog.hide();
            }
        });
            
        var tabAnimateOpt = {};
        tabAnimateOpt[side] = move + dialog.outerWidth();
        tab.animate(tabAnimateOpt, 500);
    }
    
    function initTabAnimation() {
        var move;
        tab.click(function () {
            var tabPosition = tab.css(side);
            if (tabPosition == '0px') {
                move = 0;
                dialog.show();
            } else {
                move = -(dialog.outerWidth());
            }
            slide(move);
        });
    }
    
    function addContent(content) {
        container.append(content);
    }
    
    function clear() {
        container.empty();
    }
    
    function getContainer() {
        return container;
    }
    
    return {
        addContent: addContent,
        clear: clear,
        getContainer: getContainer,
        slideIn: slideIn,
        slideOut: slideOut
        
    }
    
}


