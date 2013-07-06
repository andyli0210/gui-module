EMS.Button = OpenLayers.Class( OpenLayers.Control, {

    EVENT_TYPES: ["click"],

    events: null,

    isDown: false,

    initialize: function(upIcon, downIcon, hoverIcon, isDown, options) {
        OpenLayers.Control.prototype.initialize.apply(this, [options]);

        this.upIcon = upIcon;
        this.downIcon = downIcon;
        this.hoverIcon = hoverIcon;
        this.isDown = isDown;
        this.events = new OpenLayers.Events(this, this.div, this.EVENT_TYPES, false);
    },

    destroy: function () {
        OpenLayers.Event.stopObservingElement(this.imageDiv);
    },

    /** clear the div and start over.
     *
     */
    redraw: function() {
        if (this.div != null) {
            this.div.innerHTML = "";
        }
        this.draw();
    },

    /**
    * @param {OpenLayers.Pixel} px
    */
    draw: function(px) {
        OpenLayers.Control.prototype.draw.apply(this, arguments);

        this.imageDiv = OpenLayers.Util.createDiv(null, px, this.size(), this.url(), "absolute");
        this.imageDiv.className = this.displayClass;

        this.div.appendChild(this.imageDiv);
        this.contentDiv = OpenLayers.Util.createDiv(null, null, this.size(), null, "absolute");
        this.contentDiv.className = "contentDiv";
        this.imageDiv.appendChild(this.contentDiv);

        if (!this.isDown) {
            OpenLayers.Event.observe(this.imageDiv, "mouseover", this.mouseOver.bindAsEventListener(this));
            OpenLayers.Event.observe(this.imageDiv, "mouseout", this.mouseOut.bindAsEventListener(this));
        }

        OpenLayers.Event.observe(this.imageDiv, "mouseDown", function() {});
        OpenLayers.Event.observe(this.imageDiv, "click", this.click.bindAsEventListener(this));
    },

    size: function() {
        if (this.isDown) {
            return this.downIcon.size;
        } else {
            return this.upIcon.size;
        }
    },

    url: function() {
        if (this.isDown) {
            return this.downIcon.url;
        } else {
            return this.upIcon.url;
        }
    },

    mouseOver: function() {
        this.imageDiv.style.backgroundImage = "url(\"" + this.hoverIcon.url + "\")";
    },

    mouseOut: function() {
        this.imageDiv.style.backgroundImage = "url(\"" + this.upIcon.url + "\")";
    },

    click: function(e) {

        this.events.triggerEvent("click", e);

        OpenLayers.Event.stop(e);
    },

    /** @final @type String */
    CLASS_NAME: "EMS.Control.Button"

});
