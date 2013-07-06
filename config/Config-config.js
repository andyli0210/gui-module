var configPath = IFL.searchForScriptLocation('Config-config');
console.info('Config Module path: ' + configPath);

Config.configPath = configPath
Config.configScripts = ['widgets/PropertyConfigPanel','widgets/ComparisonConfigPanel', 'widgets/MetricConfigPanel', 'widgets/CommodityConfigPanel', 'ConfigService', 'xmlUtil/xmlProcessor', 'xmlUtil/xmlGenerator'];

IFL.Config = new IFL.Module(Config.configPath, Config.configScripts);
IFL.Modules.push(IFL.Config);

// --------------------file upload config --------------------------
//Config.uploadMode = 'server';
Config.uploadServer = '../../upload';

