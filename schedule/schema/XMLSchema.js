IFL.Schema = {}

IFL.Schema.Common = {
    id: 'id',
    locations: 'locations',
    location: 'location',
    locationRef: 'refLocation',
    routes: 'routes',
    route: 'route',
    schedule: 'schedule',
    visit: 'visit',
    travelTime: 'travel[typeMetric="METRIC_TIME"] > quantity',
    timeEarliest: 'timeEarliest',
    timeLatest: 'timeLatest',
    service: 'service',
    duration: 'elapsedDuration',
    lon: 'lon',
    lat: 'lat',
    requestRef: 'refRequest',
    solution: 'solution'
}

IFL.Schema.IFL = function() {
    return $.extend(true, {}, IFL.Schema.Common, {
        resources: 'vehicles',
        resource: 'vehicle',
        resourceRef: 'refVehicle'
    })
}
    

IFL.Schema.FSE = function() {
    $.extend(true, {}, IFL.Schema.Common, {
        resources: 'resources',
        resource: 'resource',
        resourceRef: 'refResource'
    })
}
    

