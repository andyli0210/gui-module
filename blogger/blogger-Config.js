var bloggerPath = IFL.searchForScriptLocation('blogger-Config');
console.info('Blogger Module path: ' + bloggerPath);

Config.bloggerPath = bloggerPath;
Config.bloggerScripts = ['MapService'];

IFL.Blogger = new IFL.Module(Config.bloggerPath, Config.bloggerScripts);
IFL.Modules.push(IFL.Blogger);

Config.screenRatio = 0.5;
Config.depotColor = 'C0C0C0';
Config.profitColor = '009933';
Config.unprofitColor = '990000';
Config.droppedColor = 'FF0000';
//Config.mapZoom = 10;
Config.displayRoutes = '';
Config.displayDays = '';

Config.skipChecker=true;

var colors1 = ['#003300', '#CC99FF', '#33CCFF', '#0033FF', '#660000', '#663300', '#669900', '#996600', '#99FF00'];
var colors2 = ['#009999', '#330099', '#663399', '#66CC99', '#993399', '#CCFF99', '#CCCC99', '#FF6699', '#339999'];
var colors3 = ['#FF33FF', '#CC99FF', '#99CCFF', '#9933FF', '#6666FF', '#33CCFF', '#3333FF', '#00FFFF', '#0033FF','#FFFFCC'];

var RouteColors = colors1.concat(colors2);