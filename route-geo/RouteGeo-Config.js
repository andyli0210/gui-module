var routeGeoPath = IFL.searchForScriptLocation('RouteGeo-Config');
console.info('Route-Geo Module path: ' + routeGeoPath);
//
Config.routeGeoPath = routeGeoPath;
Config.routeGeoScripts = ['geocodeMap','RouteGeoService','widgets/FileUploadPopup', 'widgets/GeoGrid', 'widgets/AddressDetailsWidget',
                          'widgets/AddressMatchWidget', 'widgets/AddressCriteriaWidget', 'widgets/AddressChosenWidget', 'widgets/RouteVisitsWidget'];
   

IFL.RouteGeo = new IFL.Module(Config.routeGeoPath, Config.routeGeoScripts);
IFL.Modules.push(IFL.RouteGeo);

Config.theme = 'blue';
Config.geoServerUrl = '/gui-module/jGrid';
