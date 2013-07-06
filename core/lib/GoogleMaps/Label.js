// Define the overlay, derived from google.maps.OverlayView
IFL.GoogleMaps.Label = function(opt_options) {
    if (typeof google === "undefined") {
        console.warn('google maps library is not imported');
        return null;
    }
    
    // Initialization
    this.setValues(opt_options);

    // Label specific
    var span = this.span_ = document.createElement('span');
    span.style.cssText = 'position: relative; left: -50%; top: -8px; ' +
    'white-space: nowrap; border: none; ' +
    'padding: 2px; background-color: none;' +
    'z-Index: 9999;';

    var div = this.div_ = document.createElement('div');
    div.appendChild(span);
    div.style.cssText = 'position: absolute; display: none; z-Index: 9999;';
};

if (!(typeof google === "undefined")) {
    
    IFL.GoogleMaps.Label.prototype = new google.maps.OverlayView;

    // Implement onAdd
    IFL.GoogleMaps.Label.prototype.onAdd = function() {
        var pane = this.getPanes().floatPane;
        pane.appendChild(this.div_);

        // Ensures the label is redrawn if the text or position is changed.
        var me = this;
        this.listeners_ = [
        google.maps.event.addListener(this, 'position_changed',
            function() {
                me.draw();
            }),
        google.maps.event.addListener(this, 'text_changed',
            function() {
                me.draw();
            })
        ];
    };

    // Implement onRemove
    IFL.GoogleMaps.Label.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);

        // Label is removed from the map, stop updating its position/text.
        for (var i = 0, I = this.listeners_.length; i < I; ++i) {
            google.maps.event.removeListener(this.listeners_[i]);
        }
    };

    // Implement draw
    IFL.GoogleMaps.Label.prototype.draw = function() {
        var projection = this.getProjection();
        var position = projection.fromLatLngToDivPixel(this.get('position'));
        
        $(this.span_).empty();
        var div = this.div_;
        div.style.left = position.x + 'px';
        div.style.top = position.y + 'px';
        div.style.display = 'block';
        div.style.zIndex = 2050;

        
        this.span_.innerHTML = this.get('text').toString();
    };
}



