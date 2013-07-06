var dispathPath = IFL.searchForScriptLocation('Dispatch-config');
console.info('Dispatch Module path: ' + dispathPath);
//
Config.dispathPath = dispathPath;
Config.dispathScripts = ['main', 'layout/LayoutManager', 'config/ConfigService', 'schedule/ScheduleService'];

IFL.Dispatch = new IFL.Module(Config.dispathPath, Config.dispathScripts);
IFL.Modules.push(IFL.Dispatch);

Config.theme = 'light-green';

// --------------------file upload config --------------------------
Config.uploadMode = 'client';
Config.uploadServer = '../../upload';



