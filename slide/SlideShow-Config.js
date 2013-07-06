var slidePath = IFL.searchForScriptLocation('SlideShow-Config');
console.info('CTS Module path: ' + slidePath);

Config.slidePath = slidePath;
Config.slideScripts = ['SlideShowService'];

IFL.SlideShow = new IFL.Module(Config.slidePath, Config.slideScripts);
IFL.Modules.push(IFL.SlideShow);

Config.theme = 'blue';
