IFL.NameUtil = {
    //route id --- RT_{availability-id}_{commidity-id}
    getRouteId: function(iflRouteId) {
        var routeIds = iflRouteId.split('-');
        var routeDayIds = routeIds[1].split('_');
        return routeDayIds[0];
    },
    getRouteDay: function(iflRouteId) {
        var routeIds = iflRouteId.split('-');
        var routeDayIds = routeIds[1].split('_');

        var day = routeDayIds[1];
        if (day === 'summary') {
            day = 'grand route';
        }
        return day.toUpperCase();
    },
    getCustIdFromLocId: function(locId) {
        var locIds = locId.split("-");
        var custId = locIds[locIds.length - 1];
        return custId;
    },
    routeDays: ['GRAND ROUTE', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']
};



