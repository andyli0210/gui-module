var schedulePath = IFL.searchForScriptLocation('Schedule-Config');
console.info('Schedule path: ' + schedulePath);

Config.schedulePath = schedulePath//relatice path to IFL.js
Config.scheduleScripts = ['ScheduleGanttService', 'ScheduleResourceService','FseXmlProcessor','XmlProcessor', 'ScheduleMapService', 'schema/XMLSchema',
    'widgets/TechRoutePanel', 'widgets/DateRoutePanel', 'widgets/SchedulePanel', 'widgets/FileUploadForm','widgets/VehicleLoad'];

IFL.Schedule = new IFL.Module(Config.schedulePath, Config.scheduleScripts);
IFL.Modules.push(IFL.Schedule);

// --------------------file upload config --------------------------
Config.uploadMode = 'client';
Config.uploadServer = '../../upload';