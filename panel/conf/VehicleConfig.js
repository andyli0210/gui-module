// fixed vehicle colors (will be used by 30 trucks one by one)
var colors1 = ['#003300', '#00CC00', '#330000', '#00FF00', '#333300', '#660000', '#663300', '#669900', '#996600', '#99FF00'];

var colors2 = ['#009999', '#330099', '#663399', '#66CC99', '#660000', '#993399', '#CCFF99', '#CCCC99', '#FF6699', '#339999'];

var colors3 = ['#FF33FF', '#CC99FF', '#99CCFF', '#9933FF', '#6666FF', '#33CCFF', '#3333FF', '#00FFFF', '#0033FF','#FFFFCC'];

var colors4 = ['','','','','','','','','',''];

var VehicleColors = colors1.concat(colors2, colors3, colors4);

initVehicles();
function initVehicles() {
    VehiclesConfig = [];
    for (var i=0; i<37; i++) {
        var vehId = 'V_' + (i>9? '' : '0') + i;
        
        var commodity;
        var modelIndex;
        if (i<5 || (i>14 && i<20)) {
            commodity = 40;
            modelIndex = 0;
        } else if ((i>9 && i<15) || (i > 24 && i<30)){
            commodity = 16;
            modelIndex = 2;
        } else if (i > 29) {
            commodity = -1;
            modelIndex = -1;
        } else {
            commodity = 24;
            modelIndex = 1;
        }
        
        var color = VehicleColors[i];
        
        var veh = {
            id: vehId,
            commodity: commodity,
            utilisation: 0,
            depotIndex: -1,
            slotIndex: -1,     
            modelIndex: modelIndex,
            color: color
        }
        
        VehiclesConfig.push(veh);
    }
    
// init unused vehicle
//    for (var v=30; v<=36; v++) {
//        var vehId = 'V_' + (v>9? '' : '0') + v;
//        var veh = {
//            id: vehId,
//            commodity: -1,
//            utilisation: -1,
//            depotIndex: -1,
//            slotIndex: -1,     
//            modelIndex: -1,
//            color: ''
//        }
//        VehiclesConfig.push(veh);
//    }
}
