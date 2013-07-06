IFL = new Object();
IFL.Modules = [];
Config = {styles: []};
IFL.loader = $LAB;

IFL.ModuleConfig = function(options) {
    if (!options.moduleName) {
        alert('IFL Moudle must have name !');
        return;
    }
    
    if (!options.modulePath) {
        alert('Can not find config for Module: ' + options.moduleName);
        return;
    }
    console.info(options.moduleName + ' path: ' + options.modulePath);
    
    var configPath = options.modulePath + '/' + options.moduleName + '-Config.js';
    console.info(options.moduleName + ' config path: ' + configPath);
    
    IFL.loader = IFL.loader.script(configPath);
    
//if (!options.isAsync) {
// IFL.loader = IFL.loader.wait();
//}
    
//    var module = new IFL.Module(options.modulePath, options.scripts, options.isAsync, options.autoLoad);
//    IFL.Modules.push(module);
    
//    //load sub modules
//    var subModules = options.subModules;
//    for (var s in subModules) {
//        var subModuleOption = subModules[s];
//        
//        var subModule = new IFL.ModuleConfig(subModuleOption);
//        IFL.Modules.push(subModule);
//    }
    
}

IFL.ModuleLoader = function(options) {
    if (!options.name) {
        alert('IFL Moudle must have name !');
        return;
    }
    
    
}

IFL.Module = function(path, scripts, isAsync, autoLoad) {
    function load() {
        if (!scripts) {
            console.error('No schripts for path: ' + path + ' !!!');
        }
        for (var i=0; i<scripts.length; i++) {
            //var scriptPath = IFL.host + path + '/' + scripts[i] + '.js';
            
            
            var scriptPath = (path? (path + '/'): '') + scripts[i] + '.js';
            IFL.loader = IFL.loader.script(scriptPath);
        }
    
        if (!isAsync) {
            IFL.loader = IFL.loader.wait();
        }
    }
    
    if (autoLoad) {
        load();
    }
    
    return {
        load: load
    }
}

IFL._getScriptLocation = function () {
    //This is done in a two step process as getElementsByTagName('script') does not always return
    // all scripts especially if the scripts are contained in the head.
    //Search the head first
    var scriptLocation = IFL._searchForIFLLibraryLocation(document.getElementsByTagName("head")[0].childNodes);
    if (scriptLocation == null){
        //Try searching again as scripts may be located outside the head tag
        scriptLocation = IFL._searchForIFLLibraryLocation(document.getElementsByTagName('script'));
    }
    return scriptLocation == null ? "" : scriptLocation;
}

IFL._searchForIFLLibraryLocation = function (scripts){
    var scriptLocation = null;
    var SCRIPT_NAME = 'IFL.js';
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].tagName == "SCRIPT") {
            var src = scripts[i].getAttribute('src');
            if (src != null){
                if (src.indexOf("?") > -1)
                    src = src.substring(0, src.indexOf("?"));
                if (src) {
                    var index = src.lastIndexOf(SCRIPT_NAME);
                    // is it found, at the end of the URL?
                    if ((index > -1) && (index + SCRIPT_NAME.length == src.length)) {
                        scriptLocation = src.slice(0, -SCRIPT_NAME.length);
                        break;
                    }
                }
            }
        }
    }
    return scriptLocation;
}

IFL.searchForScriptLocation = function(scriptName) {
    var scriptLocation = null;
    var scripts = document.getElementsByTagName("head")[0].childNodes;
    var SCRIPT_NAME = scriptName + '.js';
    
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].tagName == "SCRIPT") {
            var src = scripts[i].getAttribute('src');
            if (src != null){
                if (src.indexOf("?") > -1)
                    src = src.substring(0, src.indexOf("?"));
                if (src) {
                    var index = src.lastIndexOf(SCRIPT_NAME);
                    // is it found, at the end of the URL?
                    if ((index > -1) && (index + SCRIPT_NAME.length == src.length)) {
                        scriptLocation = src.slice(0, -SCRIPT_NAME.length);
                        break;
                    }
                }
            }
        }
    }
    return scriptLocation;
}

IFL.host = IFL._getScriptLocation();

IFL.initCoreModules = function() {
    IFL.Domain = new IFL.Module(Config.domainPath, Config.domainScripts, true);
    IFL.JQuery = new IFL.Module(Config.jQueryPath, Config.jQueryScripts);
    IFL.Util = new IFL.Module(Config.utilPath, Config.utilScripts, true);
    IFL.OpenLayers = new IFL.Module(Config.openlayersPath, Config.openlayersScripts);
    IFL.EMS = new IFL.Module(Config.emsPath, Config.emsScripts);
    IFL.MapVis = new IFL.Module(Config.mapvisPath, Config.mapvisScripts)
    IFL.MapService = new IFL.Module(Config.mapservicePath,Config.mapserviceScripts);
    IFL.RouteService = new IFL.Module(Config.routeservicePath,Config.routeserviceScripts);
    IFL.Widget = new IFL.Module(Config.widgetsPath, Config.widgetsScripts);
    IFL.GanttChart = new IFL.Module(Config.ganttchartPath, Config.ganttchartScripts);
    
    IFL.Modules.push(IFL.GanttChart);
    IFL.Modules.push(IFL.Widget);
    IFL.Modules.push(IFL.RouteService);
    IFL.Modules.push(IFL.MapService);
    IFL.Modules.push(IFL.MapVis);
    IFL.Modules.push(IFL.EMS);
    IFL.Modules.push(IFL.OpenLayers);
    IFL.Modules.push(IFL.Util);
    IFL.Modules.push(IFL.JQuery);
    IFL.Modules.push(IFL.Domain);
    
    IFL.Modules.reverse();
}

IFL.loadModules = function() {
    for (var m in IFL.Modules) {
        var module = IFL.Modules[m];
        module.load();
    }
}

IFL.ready = function(handler) {
    console.info('IFL.js path: ' + IFL.host);
    IFL.loadModules();
    
    IFL.loader.wait(function() {
        console.info('IFL loading finished');
        
        IFL.Util.setConfigFromUrl();
        
        //load Theme css and other styles
        if (Config.theme) {
            var cssUrl = IFL.CorePath + 'css/' + Config.theme + '/jquery-ui.css';
            IFL.Util.loadCssScript(cssUrl);
        }
        
        for (var s in Config.styles) {
            var styleUrl = Config.styles[s];
            IFL.Util.loadCssScript(styleUrl);
        }
        
        //load external css
        if (Config.externalCss) {
            IFL.Util.loadCssScript(Config.externalCss);
        }
        
        handler();
    });

};
