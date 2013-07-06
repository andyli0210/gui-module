IFL.Widget.VerticalSlidePanel = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var contentContainer;
    var slideButton;
    
    var isSlideIn = true;
    var side = options.side;
    
    init();
    function init() {
        container = $('<div/>');
        contentContainer = $('<div/>').css({
            width: options.width,
            height: options.height,
            fontSize: options.contentSize,
            overflow: 'auto'
        });
        contentContainer.addClass('ui-corner-all ui-widget-content');
        var buttonContainer = $('<div/>').css({
            width: '100%',
            textAlign: 'center'
        });
        slideButton = $('<button>' + options.buttonText +'</button>').button();
        slideButton.css({
            height: '100%',
            fontSize: options.titleSize
        });
        
        slideButton.appendTo(buttonContainer);
        
        if (side == 'top') {
            container.append(contentContainer).append(buttonContainer);
        } else {
            container.append(buttonContainer).append(contentContainer);
        }
        
        container.css({
            position: 'absolute',
            zIndex: 1000,
            left: options.left
        });
        container.css(side, -options.height);
        
        initButtonHandler();
        //contentContainer.hide();
    }
    
    function initButtonHandler() {
        var move;
        slideButton.click(function () {
            if (isSlideIn) {
                move = 0;
                //contentContainer.show();
            } else {
                move = -options.height;
               // contentContainer.hide();
            }
            slide(move);
            
            isSlideIn = !isSlideIn;
        });
    }
    
    function slide(move) {
        var animateOpt = {};
        animateOpt[side] = move;
        container.animate(animateOpt,
        {
            duration: 500,
            complete: function() {
            }
        });
    }
    
    function initDefaultOptions() {
        options = {
            width: 200,
            height: 100,
            side: 'top',
            left: 5,
            buttonText: 'slide button'
        }
    }
    
    function setContent(content) {
        contentContainer.append(content);
    }
    
    function getContainer() {
        return container;
    }
    
    return {
        getContainer: getContainer,
        setContent: setContent,
    }
}


