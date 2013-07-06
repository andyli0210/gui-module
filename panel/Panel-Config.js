var panelPath = IFL.searchForScriptLocation('Panel-Config');
console.info('Panel Module path: ' + panelPath);

Config.panelPath = panelPath;
Config.panelScripts = ['main','FakeLcpService','widgets/CapacityPopup','widgets/CostPopup','widgets/DepotPopup','widgets/UnSchedulePopup','widgets/TopSlidePanel','FakeLcpService','conf/DepotsConfig','conf/VehicleConfig', 'PanelService'];

IFL.Panel = new IFL.Module(Config.panelPath, Config.panelScripts);
IFL.Modules.push(IFL.Panel);

Config.theme = 'blue';

Config.isDemandConfigurable = false;

Config.panelServerUrl = '/PanelWeb/';

