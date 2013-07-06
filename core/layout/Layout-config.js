var layoutPath = IFL.searchForScriptLocation('Layout-config');
console.info('Login Module path: ' + layoutPath);

Config.layoutPath = layoutPath
Config.layoutScripts = ['LayoutService'];

IFL.Layout = new IFL.Module(Config.layoutPath, Config.layoutScripts);
IFL.Modules.push(IFL.Layout);

Config.styles.push(IFL.CorePath + 'css/layout-default.css');


