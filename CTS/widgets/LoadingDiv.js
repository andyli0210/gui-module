IFL.CTS.LoadingDiv = function(_options) {
    var options
    initDefaultOption();
    $.extend(true, options, _options);
    
    var container;
    var messageContainer;
    var paraContainer;
    
    var messageTitle;
    var messageContent;
    var paraTitle;
    var paraContent;
    
    init();
    function init() {
        container = $('<div/>').css({
            width: 600,
            margin:'10px auto',
            padding: 5,
            //'text-align': 'center',
            background: 'none repeat scroll 0 0 #FFFFFF',
            border: '10px solid #DDDDDD',
            display: 'none'
        });
        
        initMessageContainer();
        initParaContainer();
        
        var loadingIcon = $('<img/>').attr('src', Config.imagePath + '/loading-big.gif').appendTo(container);
    }
    
    function initMessageContainer() {
        messageContainer = $('<div/>').appendTo(container);
        
        messageTitle = $('<h4></h4>').append(options.message.title).appendTo(messageContainer);
        messageContent = $('<div></div>').append(options.message.content).appendTo(messageContainer);
    }
    
    function initParaContainer() {
        paraContainer = $('<div/>').appendTo(container);
        
        paraTitle = $('<h4></h4>').append(options.parameter.title).appendTo(paraContainer);
        paraContent = $('<div></div>').append(options.parameter.content).appendTo(paraContainer);
    }
    
    function initDefaultOption() {
        options = {
            message: {
                title: 'Message Title',
                content: 'Message Content'
            },
            parameter: {
                title: 'Parameter Title',
                content: 'Parameter Content'
            }
        }
    }
    
    function show() {
        container.css('display','block'); // displaying the popup
        container.fadeIn(500); // Displaying popup with fade in animation
    }
    
    function hide() {
        container.fadeIn(4000);
        container.css('display','none');
    }
    
    function setMessage(meg) {
        messageTitle.text(meg.title);
        messageContent.html(meg.content);
    }
    
    function setPara(para) {
        paraTitle.text(para.title);
        paraContent.html(para.content);
    }
    
    function getContainer() {
        return container
    }
    
    return {
        getContainer : getContainer,
        show: show,
        hide: hide,
        setMessage: setMessage,
        setPara: setPara
    }
}

