IFL.Panel.DepotPopup = function(_options, isScale) {
    var options;
    initDefaultOptions();
    $.extend(true, options, _options);
    
    var depotIndex;
    if ((!options.index && options.index != 0) || options.index < 0 || options.index > 2) {
        alert('Unvalid Depot Index: ' + options.index);
        return null;
    } else {
        depotIndex = options.index;
    }
    
    var container;
    var imageRow;
    var colorRow;
    var slotImages = [];
    var eventHandler = new IFL.Util.EventHandler(['click']);
    var vehicles = [];
    

    init();
    function init() {
        initVehImages();
        container = $('<table></table>');
        
        initColorRow();
        initImageRow();
        
        $(container).dialog({
            title: options.title,
            width: options.width,
            height: options.height,
            position: options.position,
            closeOnEscape: false,
            resizable: false,
            imageRowHeight: options.imageRowHeight,
            colorRowHeight: options.colorRowHeight
        });
        
        initDepotStyle();
        
        initDepotClick();
    }
    
    function initColorRow() {
        colorRow = $('<tr><td></td><td></td><td></td></tr>').appendTo(container);
        colorRow.css({
            height: options.colorRowHeight
        })
        
        $('td', colorRow).css('background-color', 'white');
    }
    
    function initImageRow() {
        imageRow = $('<tr><td></td><td></td><td></td></tr>').appendTo(container);
        imageRow.css({
            height: options.imageRowHeight
        })
        
        $('td', imageRow).css('background-color', '#C0C0C0');
    }
    
    function initVehImages() {
        for (var i=0; i<3; i++) {
            var images = [];
            images[0] = $('<img style="width: 100%;" src="' + "images/vehicle_pic0.jpg" + '"/>');
            images[1] = $('<img style="width: 100%;" src="' + "images/vehicle_pic1.jpg" + '"/>');
            images[2] = $('<img style="width: 100%;" src="' + "images/vehicle_pic2.jpg" + '"/>');
            slotImages.push(images);
        }
    }
    
    function initDefaultOptions() {
        var scale = 1;
        if (isScale) {
            scale = Config.screenRatio;
        }
        
        options = {
            width: 600 * scale,
            height: 150 * scale,
            position: 'center',
            title: 'depot popup',
            fontSize: 20 * scale,
            colorRowHeight: 10 * scale,
            imageRowHeight: 125 * scale,
            commodityStrTop: 35 * scale
        }
    }
    
    function initDepotStyle() {
        $(container.parent()).css('font-size', options.fontSize+'px');
        $('a.ui-dialog-titlebar-close', container.parent()).remove();
    
        container.css({
            width: options.width,
            padding: 0
        })
        
        $('td', container).width("33%");
        $('td', container).css({
            borderStyle: 'solid',
            borderWidth: '1px',
            textAlign: 'center'
        });
        
        $(container).dialog('widget').css({
            position: 'absolute',
            left: '',
            right: 0
        });
    }
    
    function initDepotClick() {
        $('td', imageRow).each(function(i) {
            $(this).click(function() {
                cellClicked(i)
            })
        });
        
        //stop the double click on depot popup, in case user use touch sreen.(will zoom in)
        container.dblclick(function(e){
            e.preventDefault();
            e.stopPropagation();
        });
    }
    
    function cellClicked(slotIndex) {
        eventHandler.notifyHandlers('click', vehicles[slotIndex], slotIndex);
    }
    
    function setVehicle(vehicle, slotIndex) {
        vehicles[slotIndex] = vehicle;
        
        if (vehicle) {
            vehicle.depotIndex = depotIndex;
            vehicle.slotIndex = slotIndex;
        } else {
            vehicle = {
                modelIndex: -1,
                slotIndex: slotIndex,
                color: 'white'
            }
        }
        
        setImage(vehicle.modelIndex, vehicle.slotIndex);
        setColor(vehicle.color,vehicle.slotIndex);
    }
    
    function setImage(modelIndex, slotIndex) {
        var imageTd = $('td:nth-child(' + (slotIndex + 1) + ')', imageRow);
        imageTd.empty();
        
        if (modelIndex > -1)
            imageTd.append(slotImages[slotIndex][modelIndex]);
    }
    
    function setColor(color,slotIndex) {
        var vTd = $('td:nth-child(' + (slotIndex + 1) + ')', colorRow);
        vTd.css({
            backgroundColor: color 
        });
    }
    
    function refreshCommodityUtilisation() {
        for (var i=0; i<3 ; i++) {
            var vehicle = vehicles[i];
            
            if (vehicle) {
                var commodityString = vehicle.utilisation + '/' + vehicle.commodity;
                setCommodity(commodityString, i);
            }
        }
    }
    
    function setCommodity(commodityString, slotIndex) {
        var imageTd = $('td:nth-child(' + (slotIndex + 1) + ')', imageRow);
        $('div', imageTd).remove();
        var commodityDiv = $('<div/>').append(commodityString).css({
            position: 'absolute',
            top: options.commodityStrTop,
            fontWeight: 'bold',
            fontSize: options.fontSize
        }).appendTo(imageTd);
    //var commodityDiv = $('<div style="position: absolute; top: 35px; font-weight: bold;">' + commodityString + '</div>').appendTo(imageTd);
    }
    
    function clearCell(slotIndex) {
        $('td:nth-child(' + (slotIndex + 1) + ')', colorRow).css('background-color', '');
        $('td:nth-child(' + (slotIndex + 1) + ')', imageRow).empty();
    }
        
    function reset() {
        $('td', imageRow).empty();
        $('td',colorRow).css('background-color', '');
    }
    
    function registerHandler(name, handler) {
        eventHandler.registerHandler(name, handler);
    }
    
    function getPopupHeight() {
        return container.dialog('widget').height();
    }
    
    function setTop(top) {
        container.dialog('widget').css({
            top: top
        })
    }
    
    function getContainer() {
        return container.dialog('widget');
    }
    
    return  {
        reset: reset,
        //refresh: refresh,
        setVehicle: setVehicle,
        registerHandler: registerHandler,
        getPopupHeight: getPopupHeight,
        setTop: setTop,
        refreshCommodityUtilisation: refreshCommodityUtilisation,
        getContainer: getContainer
    }
}