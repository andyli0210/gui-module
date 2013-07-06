var corePath = IFL.searchForScriptLocation('Core-Config');
console.info('core-config path: ' + corePath);
IFL.CorePath = corePath;
Config.imagePath = corePath + "images";
//var corePath = '../core/Core-Config.js';
var coreConfig = {
    // ----------------- Core Modules --------------------
    jQueryPath: corePath + 'lib/jquery',
    domainPath: corePath + 'domains',
    openlayersPath: corePath + 'lib/OpenLayers',
    emsPath: corePath + 'lib/EMS',
    flexigridPath: corePath + 'lib/flexgrid/js',
    mapvisPath: corePath + 'mapvis',
    mapservicePath: corePath + 'mapvis/mapservice',
    routeservicePath: corePath + 'mapvis/routeservice',
    utilPath: corePath + 'utils',
    widgetsPath: corePath + 'widgets',
    ganttchartPath: corePath + 'ganttchart',
    treeviewPath: corePath + 'lib/treeview',
    jgridPath: corePath + 'lib/jgrid',
    googleMapsPath: corePath + 'lib/GoogleMaps',
    
    // Module Scripts File coreConfig
    domainScripts: ['Address', 'GeoAddress', 'Location', 'Region', 'Route', 'Schedule', 'Service', 'Vehicle', 'Visit'],
    jQueryScripts: ['jquery-1.8.3.min', 'jquery-ui-1.9.2.min','jquery.form','date','jquery-ui-timepicker-addon','jquery.layout.min','detectmobilebrowser','jquery.qtip.min','slides.min.jquery'],
    flexigridScripts: ['flexgrid'],
    mapvisScripts: ['visoperator/VisEvents','visoperator/VisOperator'],
    mapserviceScripts: ['EMSMapService', 'GoogleMapService'],
    routeserviceScripts: ['LcpService', 'FakeLcpService'],
    utilScripts:['Util','EventHandler', 'DateTime', 'Enum'],
    treeviewScripts: ['jquery.treeview'],
    jgridScripts: ['jquery.jqGrid.min','grid.locale-en'],
    widgetsScripts: ['SidePanel', 'RadioGroup', 'CheckboxGroup', 'FolderWidget', 'ButtonPanel', 'ListWidget','ListControlPanel', 'DomainTable', 'DomainPopup','DropdownList','Pager','DomainListTable', 'GanttChartTable','DomainListEditor','DynamicListTable','Tabs','DateFilter','LoadingPopup','FileUploadPanel','TreeWidget','VerticalSlidePanel'],
    ganttchartScripts: ['flot/jquery.flot', 'flot/jquery.flot.navigate', 'flot/jquery.flot.resize','series/ChartItem', 'series/ChartRow','series/SeriesMarking','GanttChartService'],
    googleMapsScripts: ['Label', 'infobubble'],
    emsScripts: ["EMS","EMSUtils",
    "Ajax",
    "HoverIcon",
    "EMSServices",
    "EMSGeometry",
    "EMSZoomBar",
    "EMSPopup",
    "EMSPanButton",
    "HighlightFeature",
    "MouseDefaults",
    "OverviewMap",
    "NorthArrow",
    "Copyright",
    "Button",
    "Scale",
    "MultiPopup",
    "MarkerProximityCombiner",
    "MarkerGroup",
    "CombinerCalculator",
    "MagicMarker",
    "PixelBounds",
    "MagicMarkerSorter",
    "IndexedLayer",
    "ContextMenu",
    "RightClick",
    "ContextPopup",
    "TabbedPopup",
    "RoutePopup",
    "DraggingControl",
    "DragMarkerHandler"],
    openlayersScripts: ['OpenLayers']
}

IFL.Domain = new IFL.Module(coreConfig.domainPath, coreConfig.domainScripts, true);
IFL.JQuery = new IFL.Module(coreConfig.jQueryPath, coreConfig.jQueryScripts);
IFL.Util = new IFL.Module(coreConfig.utilPath, coreConfig.utilScripts, true);
IFL.OpenLayers = new IFL.Module(coreConfig.openlayersPath, coreConfig.openlayersScripts);
IFL.EMS = new IFL.Module(coreConfig.emsPath, coreConfig.emsScripts);
IFL.MapVis = new IFL.Module(coreConfig.mapvisPath, coreConfig.mapvisScripts)
IFL.MapService = new IFL.Module(coreConfig.mapservicePath,coreConfig.mapserviceScripts);
IFL.RouteService = new IFL.Module(coreConfig.routeservicePath,coreConfig.routeserviceScripts);
IFL.Widget = new IFL.Module(coreConfig.widgetsPath, coreConfig.widgetsScripts);
IFL.GanttChart = new IFL.Module(coreConfig.ganttchartPath, coreConfig.ganttchartScripts);
IFL.GoogleMaps = new IFL.Module(coreConfig.googleMapsPath, coreConfig.googleMapsScripts);
IFL.TreeView = new IFL.Module(coreConfig.treeviewPath, coreConfig.treeviewScripts);
IFL.JGrid = new IFL.Module(coreConfig.jgridPath, coreConfig.jgridScripts);
    
IFL.Modules.push(IFL.GanttChart);
IFL.Modules.push(IFL.GoogleMaps);
IFL.Modules.push(IFL.Widget);
IFL.Modules.push(IFL.TreeView);
IFL.Modules.push(IFL.JGrid);
IFL.Modules.push(IFL.RouteService);
IFL.Modules.push(IFL.MapService);
IFL.Modules.push(IFL.MapVis);
IFL.Modules.push(IFL.EMS);
IFL.Modules.push(IFL.OpenLayers);
IFL.Modules.push(IFL.Util);
IFL.Modules.push(IFL.JQuery);
IFL.Modules.push(IFL.Domain);
    
IFL.Modules.reverse();

Config.styles.push(IFL.CorePath + 'lib/treeview/jquery.treeview.css');
Config.styles.push(IFL.CorePath + 'lib/jgrid/ui.jqgrid.css');


