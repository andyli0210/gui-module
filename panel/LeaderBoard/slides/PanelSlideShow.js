IFL.LeaderBoard.SlideShowService = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var slidePaths = [];
    
    var slideService;
    init();
    function init() {
        for (var i=1; i<=25; i++) {
            var path = 'slides/Slide' + i + '.PNG';
            slidePaths.push(path);
        }
        
        slideService = new IFL.SlideShow.Service({
            slidePaths: slidePaths
        });
    }
    
    function initDefaultOptions() {
        options = {};
    }
    
    function getContainer() {
        return slideService.getContainer();
    }
    
    function startAutoShow() {
        slideService.startAutoShow();
    }
    
    function getService() {
        return slideService;
    }
    
    return {
        getContainer: getContainer,
        startAutoShow: startAutoShow,
        getService: getService
    }
    
}


