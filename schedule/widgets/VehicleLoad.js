function VehicleLoad(vehicle) {
    var container;
    var loadDiv;
    
    var load = vehicle.load || 0;
    
    
    init();
    function init() {
        container = $('<div></div>')
        container.css({
            width: 110,
            height: 30,
            background: 'url(' + Config.imagePath +'/vehicle_load.gif) no-repeat center',
            paddingTop: 10
        });
        
        loadDiv = $('<div></div>').appendTo(container);
        setLoadDiv(load);
    }
    
    function getContainer() {
        return container;
    }
    
    function setLoad(_load) {
        load = _load;
        setLoadDiv(load);
    }
    
    function setLoadDiv(load) {
        loadDiv.css({
            height: 15,
            width: 78 * load,
            backgroundColor: '#0000FF',
            marginLeft: 30
        })
        
        container.attr('title', parseInt(load*100) + '%');
    }
    
    return {
        getContainer: getContainer,
        setLoad: setLoad
    }
}


