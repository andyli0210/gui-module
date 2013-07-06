IFL.Widget.LoadingPopup = function(_options) {
    var options
    initDefaultOption();
    $.extend(true, options, _options);
    
    var container;
    var overlay;
    var popup;
    
    var messageTitle;
    var messageContent;
    
    init();
    function init() {
        container = $('<div/>').css({
            width: 1002,
            margin:'10px auto',
            'text-align': 'center'
        }).appendTo(document.body);
        
        overlay = $('<div/>').css({
            background: '#000000',
            opacity: 0.5,
            bottom: 0,
            left: 0,
            position: 'fixed',
            right: 0,
            top: 0,
            'z-index': 10000,
            display: 'none'
        });
        popup = $('<div/>').css(options.popupCss);
        
        initMessageContainer();
        var loadingIcon = $('<img/>').attr('src', options.loadingImagePath).appendTo(popup);
        
        container.append(overlay).append(popup)
    }
    
    function initDefaultOption() {
        options = {
            loadingImagePath: Config.imagePath + '/loading-big.gif',
            popupCss: {
                //background: 'none repeat scroll 0 0 #FFFFFF',
                //border: '20px solid #DDDDDD',
                left: '31%',
                padding: '30px',
                position: 'fixed',
                'text-align': 'center',
                top: '28%',
                width: '380px',
                'z-index': 20000,
                '-moz-border-radius': '30px 0',
                display: 'none'
            }
        }
    }
    
    function initMessageContainer() {
        var messageContainer = $('<div/>').css({
            textAlign: 'center'
        }).appendTo(popup);
        
        messageTitle = $('<h4></h4>').appendTo(messageContainer);
        messageContent = $('<div></div>').appendTo(messageContainer);
    }
    
    function show(_title, _content) {
        var title = _title || '';
        var content = _content || '';
        
        messageTitle.text(title);
        messageContent.text(content);
        
        overlay.css('display','block'); // displaying the overlay
        popup.css('display','block'); // displaying the popup
        popup.fadeIn(500); // Displaying popup with fade in animation
    //        setTimeout(function() {
    //            jQuery("#popup").fadeIn(4000); //function to redirect the page after few seconds
    //        }, 3000);
    }
    
    function hide() {
        popup.fadeIn(4000);
        popup.css('display','none');
        overlay.css('display','none');
    }
    
    return {
        //getContainer : getContainer,
        show: show,
        hide: hide
    }
}

