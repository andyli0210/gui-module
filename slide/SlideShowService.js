IFL.SlideShow.Service = function(_options) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var container;
    var slides = [];
    var curSlideIndex = -1;
    
    var autoInterval;
    
    init();
    function init() {
        container = $('<div/>').css({
            textAlign: 'center'
        });
        initSlides();
    }
    
    function initDefaultOptions() {
        options = {
            interval: 2000,
            fadeSpeed: 1000
        }
    }
    
    function initSlides() {
        if (!options.slidePaths) {
            console.warn('There is no slide paths for Slide Show Service !!!');
            return;
        }
        
        for (var s in options.slidePaths) {
            var path = options.slidePaths[s];
            var slide = $('<img>').attr('src', path).css('margin', 'auto');
            slide.hide();
            slides.push(slide);
        }
    }
    
    function startAutoShow() {
        console.info('starting auto slide show......');
        autoInterval = setInterval(nextSlide, options.interval);
    }
    
    function stopAutoShow() {
        if (autoInterval) {
            window.clearInterval(autoInterval);
            autoInterval = null;
        }
            
    }
    
    function toggleAutoShow() {
        if (autoInterval) {
            stopAutoShow();
        } else {
            startAutoShow();
        }
    }
    
    function nextSlide() {
        console.info('changing to next slide......');
        var curSlide;
        if (curSlideIndex > -1) {
            curSlide = slides[curSlideIndex];
            curSlide.hide('fade', {}, options.fadeSpeed);
            curSlide.detach();
        }
        curSlideIndex = ++curSlideIndex % slides.length;
        curSlide = slides[curSlideIndex];
        curSlide.appendTo(container);
        curSlide.show('fade', {}, options.fadeSpeed);
    }
    
    function preSlide() {
        console.info('changing to previous slide......');
        var curSlide;
        if (curSlideIndex > -1) {
            curSlide = slides[curSlideIndex];
            curSlide.hide('fade', {}, options.fadeSpeed);
            curSlide.detach();
        }
        curSlideIndex = (--curSlideIndex + slides.length) % slides.length;
        curSlide = slides[curSlideIndex];
        curSlide.appendTo(container);
        curSlide.show('fade', {}, options.fadeSpeed);
    }
    
    function getContainer() {
        return container;
    }
    
    return {
        getContainer: getContainer,
        nextSlide: nextSlide,
        preSlide: preSlide,
        startAutoShow: startAutoShow,
        stopAutoShow: stopAutoShow,
        toggleAutoShow: toggleAutoShow
    }
}


