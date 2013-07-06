var fsePath = IFL.searchForScriptLocation('FSE-Config');
console.info('FSE Module path: ' + fsePath);

Config.fsePath = fsePath;
Config.fseScripts = ['main','widgets/CheckboxFilter','widgets/GanttChartTable', 'FSEMapService'];

IFL.FSE = new IFL.Module(Config.fsePath, Config.fseScripts);
IFL.Modules.push(IFL.FSE);

Config.theme = 'blue';
Config.fseServerUrl = 'http://localhost/fse';
//Config.geoServerUrl = Config.ctsServerUrl + '/geo'; //override default geo server url
