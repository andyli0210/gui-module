function OptionPanel() {
    var icon = {
        url: Config.imagePath + "/options_tab.png",
        width: 56,
        height: 122,
        offset: -30
    }
    
    var handlers = {
        'home': function(){},
        'visit': function(){},
        'site': function(){}
    };
    
    var slidePanel = new IFL.Widget.SidePanel(icon, 'left', 450, 300, 'Options');
    
    var homeRadioGroup = new IFL.Widget.RadioGroup("home", ["show","hide"], "hide");
    var siteRadioGroup = new IFL.Widget.RadioGroup("site", ["show","hide"], "show");
    var visitRadioGroup = new IFL.Widget.RadioGroup("visit", ["show","hide"], "show");

    var contentTable = $('<table></table>').css('font-size','14px');
    slidePanel.addContent(contentTable);
    
    
    initRadioGroups();
    initHandlers();
    
    function initRadioGroups() {
        var row1 = $('<tr></tr>').appendTo(contentTable);
        $('<td>Home Locations:</td>').appendTo(row1);
        $('<td></td>').append(homeRadioGroup.getContainer()).appendTo(row1);
        
        var row2 = $('<tr></tr>').appendTo(contentTable);
        $('<td>Site Locations:</td>').appendTo(row2);
        $('<td></td>').append(siteRadioGroup.getContainer()).appendTo(row2);
        
        var row3 = $('<tr></tr>').appendTo(contentTable);
        $('<td>Visit Locations:</td>').appendTo(row3);
        $('<td></td>').append(visitRadioGroup.getContainer()).appendTo(row3);
    }
    
    function initHandlers() {
        homeRadioGroup.registerChangeHandler(visibilityHandler('home'));
        siteRadioGroup.registerChangeHandler(visibilityHandler('site'));
        visitRadioGroup.registerChangeHandler(visibilityHandler('visit'));
    }
    
    function visibilityHandler(option_name) {
        return function(selectedItem) {
            var visibility;
            if (selectedItem == 'show') {
                visibility = true
            } else {
                visibility = false;
            }
            
            notifyHandler(option_name, visibility);
        }
        
    }
    
    function notifyHandler(name, isShow) {
        handlers[name](isShow);
    }
    
    function registerHandler(handler, name) {
        handlers[name] = handler;
    }
    
    return {
        registerHandler: registerHandler
    }
    
}






