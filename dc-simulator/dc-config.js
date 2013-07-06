Config.imagePath = '../core/images';

////var coreConfig = new IFL.ModuleConfig({
////   moduleName: 'Core',
////   modulePath: '../core'
////});
//
var dcPath = IFL.searchForScriptLocation('dc-config');
console.info('dc-simulator Module path: ' + dcPath);
//
Config.dcPath = dcPath;
Config.dcScripts = ['main', 'widget/DockPanel', 'widget/TruckPanel','widget/SimulationPanel', 'widget/SettingPanel','xml/XmlGenerator'];

IFL.dcModule = new IFL.Module(Config.dcPath, Config.dcScripts);
IFL.Modules.push(IFL.dcModule);

//Config.theme = 'ie-frog';

// --------------------file upload config --------------------------
//Config.uploadMode = 'server';
Config.uploadServer = '../../upload';

