var ctsPath = IFL.searchForScriptLocation('CTS-Config');
console.info('CTS Module path: ' + ctsPath);

Config.ctsPath = ctsPath;
Config.ctsScripts = ['widgets/VolumeCheckerChart', 'widgets/TimeCheckerChart', 'widgets/RouteCheckerChart','widgets/RouteCheckerItem', 'widgets/RouteCheckerTable', 'widgets/ParaSlider', 'widgets/StatusTable','widgets/DataCheckList','widgets/LoadingDiv','widgets/CustomerInclusionWidget','widgets/CustomerArriveTimeWidget','widgets/CustomerDeliveryFeeWidget','widgets/CustomerUnitPriceWidget','widgets/DataSummaryTable', 'widgets/SolverParameterPanel','widgets/ScheduleDetailPanel','widgets/DynamicOptPanel','widgets/DynamicOptIdPanel','widgets/RouteFilterWidget','widgets/MapStylePanel',
    'widgets/SolverParaTable', 'widgets/AccountManageWidget','widgets/ExcelExportWidget','widgets/DataQualityList','layout/LayoutManager', 'pagePanels/GeoParaPanel', 'pagePanels/GeoCheckerPanel', 'pagePanels/VolumeParaPanel', 'pagePanels/VolumeCheckerPanel', 'pagePanels/TimeParaPanel', 'pagePanels/TimeCheckerPanel', 'pagePanels/CustomerParaTabs','widgets/GanttChartTable','widgets/UnscheduleListChartTable','widgets/OptInfoTable','widgets/OptInfoWidget','widgets/CustomerListTable','widgets/ReportContentPanel','widgets/RouteFilterPanel','widgets/ScheduleFilterPanel',
    'pagePanels/RouteParaPanel', 'pagePanels/RouteCheckerPanel','pagePanels/DataStatusContainer','pagePanels/BaseCasePanel','pagePanels/CTSOptPanel','CTSService', 'CTSMapService','RobustReportService','DynCTSMapService'];

IFL.CTS = new IFL.Module(Config.ctsPath, Config.ctsScripts);
IFL.Modules.push(IFL.CTS);

Config.theme = 'cts-green';
Config.ctsServerUrl = '/cts';
Config.geoServerUrl = Config.ctsServerUrl + '/geo'; //override default geo server url
Config.screenRatio = 0.5;

Config.newWindow = true;
Config.depotColor = 'C0C0C0';
Config.profitColor = '009933';
Config.unprofitColor = '990000';
Config.droppedColor = 'FF0000';
//Config.mapZoom = 10;
Config.displayRoutes = '';
Config.displayDays = '';
Config.stopZoom = true;

Config.skipChecker=false;
Config.hideDeliverySequence=false;

var colors1 = ['#003300', '#CC99FF', '#33CCFF', '#0033FF', '#660000', '#663300', '#669900', '#996600', '#99FF00'];
var colors2 = ['#009999', '#330099', '#663399', '#66CC99', '#993399', '#CCFF99', '#CCCC99', '#FF6699', '#339999'];
var colors3 = ['#FF33FF', '#CC99FF', '#99CCFF', '#9933FF', '#6666FF', '#33CCFF', '#3333FF', '#00FFFF', '#0033FF','#FFFFCC'];

var RouteColors = colors1.concat(colors2);
