IFL.MapService.ServiceProvider = {
    getMapService: function(serviceName, mapContainerId) {
        switch(serviceName) {
            case 'EMS': return new IFL.MapService.EMS(mapContainerId);
                
            case 'Google':return new IFL.MapService.Google(mapContainerId);
        }
    },
    
    getRouteService: function(serviceName) {
        switch(serviceName) {
            case 'EMS':return new IFL.RouteService.EMS();
                
            case 'Google':return new IFL.RouteService.Google();
                
            case 'LCP':return new IFL.RouteService.Lcp(Config.uriPath);
                
            case 'FakeLCP' :return new FakeLcpService();
        }
    }
}
