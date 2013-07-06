/**
 * Class: EMS.HoverIcon
 *
 * This class is a drop-in replacement for <OpenLayers.Icon>.  The difference
 * is that is supports hover states. 
 *
 */
EMS.HoverIcon = OpenLayers.Class({

    /**
     * APIProperty: url
     * {String} The URL of the icon we are displaying.
     */
    url: null,

    /**
     * APIProperty: size
     * {<OpenLayers.Size>} The size of the icon
     */
    size:null,

    /**
     * APIProperty: offset
     * {<OpenLayers.Pixel>} offset to center of icon.
     */
    offset: null,

    /**
     * APIProperty: calculateOffset
     * {Function} Function to calculate offset to center of icon.
     */
    calculateOffset: null,    

    /**
     * APIProperty: alphaImageDiv
     * {DOMElement} The div that contains the image file.
     */
    alphaImageDiv: null,

    /**
     * APIProperty: imageDiv
     * {DOMElement} The overall containing div.
     */
    imageDiv: null,

    /**
     * APIProperty: px
     * {OpenLayers.Pixel} Pixel position on the screen. 
     */
    px: null,

    /**
     * APIProperty: stickyState
     * {Number} Whether an icon is stuck to a particular state (number between 0
     * and numberOfStates - 1) or null for no sticky state.
     */
    stickyState: null,

    /**
     * Constructor: initialize
     * Creates a new instance of a hover icon.
     *
     * Parameters:
     * url {String}                - The URL of the icon.
     * size {<OpenLayers.Size>}    - The size of the icon.
     * offset {<OpenLayers.Pixel>} - The offset to the center of the icon.
     * calculateOffset {Function}  - A (optional) function to calculate the
     *                               offset to the center of the icon.
     * numberOfStates - The number of states this icon contains (defaults to 2)
     *
     */
    initialize: function(url, size, offset, calculateOffset, numberOfStates) {
        this.stickyState = null;
        this.numberOfStates = numberOfStates || 2;
        this.url = url;
        this.size = (size) ? size : new OpenLayers.Size(20,20);
        this.offset = offset ? offset : new OpenLayers.Pixel(-(this.size.w/this.numberOfStates), -(this.size.h/this.numberOfStates));
        this.calculateOffset = calculateOffset;

        var id = OpenLayers.Util.createUniqueID("OL_Icon_");
        this.alphaImageDiv = OpenLayers.Util.createAlphaImageDiv(id, null, new OpenLayers.Size(size.w, size.h * this.numberOfStates));
        this.imageDiv = OpenLayers.Util.createDiv(null, null, size, null, null, null, "hidden");
        this.imageDiv.appendChild(this.alphaImageDiv);
    },
    
    /**
     * APIMethod: draw
     * Constructs contents of the control.
     *
     * Returns:
     * A reference to a div that represents this control.
     */
    destroy: function() {
        OpenLayers.Event.stopObservingElement(this.alphaImageDiv.firstChild);
        OpenLayers.Event.stopObservingElement(this.alphaImageDiv);
        OpenLayers.Util.removeNode(this.alphaImageDiv);
        OpenLayers.Util.removeNode(this.imageDiv);
        this.alphaImageDiv = null;
        this.imageDiv = null;
    },

     
    /**
     * APIMethod: clone
     * Creates a fresh copy of the icon.
     *
     * Returns:
     * {<EMS.HoverIcon>}
     */
    clone: function() {
        return new EMS.HoverIcon(this.url,
            this.size,
            this.offset,
            this.calculateOffset,
            this.numberOfStates);
    },
    
    /**
     * APIMethod: setSize
     * Sets the size of the hover icon. 
     *
     * Parameters:
     *  size - {<OpenLayers.Size>} the size of the hover icon.
     */
    setSize: function(size) {
        if (size != null) {
            this.size = size;
        }
        this.draw();
    },

    /**
     * APIMethod: draw
     * Constructs contents of the control.
     *
     * Returns:
     * A reference to a div that represents this control.
     */
    draw: function(px) {
        OpenLayers.Util.modifyAlphaImageDiv(this.alphaImageDiv,
            null,
            null,
            new OpenLayers.Size(this.size.w, this.size.h),
            this.url,
            "absolute");
        OpenLayers.Util.modifyDOMElement(this.imageDiv,
            null,
            null,
            new OpenLayers.Size(this.size.w, this.size.h));
        this.imageDiv.style.position = "absolute";
        this.imageDiv.style.overflow = "hidden";
        var img = this.alphaImageDiv.childNodes[0];
        img.style.height = (this.size.h * this.numberOfStates) + "px";
        this.alphaImageDiv.style.height = this.size.h  + "px";
        this.alphaImageDiv.style.position = "relative";
		
        if(this.alphaImageDiv.firstChild.src.match("north") != null) {
            this.alphaImageDiv.firstChild.alt = "Pan north";
        } else if(this.alphaImageDiv.firstChild.src.match("south") != null) {
            this.alphaImageDiv.firstChild.alt = "Pan south";
        } else if(this.alphaImageDiv.firstChild.src.match("west") != null) {
            this.alphaImageDiv.firstChild.alt = "Pan west";
        } else if(this.alphaImageDiv.firstChild.src.match("east") != null) {
            this.alphaImageDiv.firstChild.alt = "Pan east";
        }

        OpenLayers.Event.observe(this.alphaImageDiv, 'mouseover', function(e) {

            // Ignore events that target other divs
            // http://www.quirksmode.org/js/events_mouse.html
            //            var tg = (window.event) ? e.srcElement : e.target;
            //            if (tg.nodeName != "IMG") return;
            //            var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
            //            if (typeof reltg == "undefined" || !reltg) return;
            //            while (reltg != tg && reltg.nodeName != 'BODY')
            //                reltg= reltg.parentNode
            //            if (reltg== tg) return;

            var div = this.alphaImageDiv;
            var offset;
            if (this.stickyState) {
                offset = (-this.size.h * this.stickyState) + "px";
            } else {
                offset = (-this.size.h) + "px";
            }
            if (document.all) {
                div.style.marginTop = offset;
            } else {
                div.style.top = offset;
            }

        }.bindAsEventListener(this));

        OpenLayers.Event.observe(this.alphaImageDiv, 'mouseout', function(e) {

            // Ignore events that target other divs
            // http://www.quirksmode.org/js/events_mouse.html
            //            var tg = (window.event) ? e.srcElement : e.target;
            //            if (tg.nodeName != 'IMG') return;
            //            var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;
            //            if (typeof reltg == "undefined" || !reltg) return;
            //            while (reltg != tg && reltg.nodeName != 'BODY')
            //                reltg= reltg.parentNode
            //            if (reltg== tg) return;

            var div = this.alphaImageDiv;
            var offset;
            if (this.stickyState) {
                offset = (-this.size.h * this.stickyState) + "px";
            } else {
                offset = "0px";
            }
            if (document.all) {
                div.style.marginTop = offset;
            } else {
                div.style.top = offset;
            }

        }.bindAsEventListener(this));

        this.setStickyState(this.stickyState);

        this.moveTo(px);
        return this.imageDiv;
    },
    
    highlight: function() {
        var div = this.alphaImageDiv;
        var offset;
        if (this.stickyState) {
            offset = (-this.size.h * this.stickyState) + "px";
        } else {
            offset = (-this.size.h) + "px";
        }
        if (document.all) {
            div.style.marginTop = offset;
        } else {
            div.style.top = offset;
        }

    
    },

    inhighlight: function() {
        var div = this.alphaImageDiv;
        var offset;
        if (this.stickyState) {
            offset = (-this.size.h * this.stickyState) + "px";
        } else {
            offset = "0px";
        }
        if (document.all) {
            div.style.marginTop = offset;
        } else {
            div.style.top = offset;
        }
    },
    /**
     * APIMethod: setOpacity
     * Change the icon's opacity
     *
     * Parameters:
     *  opacity - {Number} the icon's opacity.
     */
    setOpacity: function(opacity) {
        OpenLayers.Util.modifyAlphaImageDiv(this.alphaImageDiv, null, null, null,
            null, null, null, null, opacity);

    },
    
    /**
     * APIMethod: moveTo
     * Move the location of the icon to a new pixel position in the layer.
     *
     * Parameters:
     *  px - {<OpenLayers.Pixel>} The pixel position to move to.  
     */
    moveTo: function (px) {
        //if no px passed in, use stored location
        if (px != null) {
            this.px = px;
        }

        if (this.alphaImageDiv != null) {
            if (this.px == null) {
                this.display(false);
            } else {
                if (this.calculateOffset) {
                    this.offset = this.calculateOffset(this.size);
                }
                var offsetPx = this.px.offset(this.offset);
                OpenLayers.Util.modifyDOMElement(this.imageDiv, null, offsetPx);
            }
        }
    },
    
    /** Hide or show the icon
     * 
     * @param {Boolean} display
     */
    display: function(display) {
        this.imageDiv.style.display = (display) ? "" : "none";
    },

    setStickyState: function(state) {
        if (state == null) state = 0;
        this.stickyState = state;
        var offset = (-this.size.h * this.stickyState) + "px";
        if (document.all) {
            this.alphaImageDiv.style.marginTop = offset;
        } else {
            this.alphaImageDiv.style.top = offset;
        }
    },

    /**
     * APIMethod: isDrawn
     *
     * Returns:
     * {Boolean} Whether or not the icon is drawn.
     */
    isDrawn: function() {
        // nodeType 11 for ie, whose nodes *always* have a parentNode
        // (of type document fragment)
        var isDrawn = (this.imageDiv && this.imageDiv.parentNode &&
            (this.imageDiv.parentNode.nodeType != 11));

        return isDrawn;
    },
    
    /** 
     * Method: erase
     * Erase the underlying image element.
     *
     */
    erase: function() {
        if (this.imageDiv != null && this.imageDiv.parentNode != null) {
            OpenLayers.Element.remove(this.imageDiv);
        }
    }, 

    
    /** @final @type String */
    CLASS_NAME: "EMS.HoverIcon"
});
