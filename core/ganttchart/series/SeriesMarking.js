IFL.GanttChart.Marking = function(_xFrom, _xTo, _yFrom, _yTo, _borderColor, _fillColor, _hightlightFillColor) {
    var xFrom = _xFrom;
    var xTo = _xTo;
    var yFrom = _yFrom;
    var yTo = _yTo;
    var borderColor = _borderColor;
    var fillColor = _fillColor;
    var highlightColor = _hightlightFillColor;
    
    function setXFrom(_xFrom) {
        xFrom = _xFrom;
    }
    
    function getXFrom() {
        return xFrom;
    }
    
    function setXTo(_xTo) {
        xTo = _xTo;
    }
    
    function getXTo() {
        return xTo;
    }
    
    function setYFrom(_yFrom) {
        yFrom = _yFrom;
    }
    
    function getYFrom() {
        return yFrom;
    }
    
    function setYTo(_yTo) {
        yTo = _yTo;
    }
    
    function getYTo() {
        return yTo;
    }
    
    function setBorderColor(_color) {
        borderColor = _color;
    }
    
    function setFillColor(_color) {
        fillColor = _color;
    }
    
    function setHighlightColor(_color) {
        highlightColor = _color;
    }
    
    function isMouseInMarking(mx,my) {
        if (xFrom <= mx && yFrom <= my && xTo >= mx && yTo >= my) {
            return true;
        } else {
            return false;
        }
    }
    
    function render(context, xaxis, yaxis, plotOffset) {
        var ranges = extractRanges(xaxis, yaxis);
        
        if (!ranges)
            return;
        
        var xrange = ranges.xrange;
        var yrange = ranges.yrange;
        
        drawMarking(context, xrange, yrange, plotOffset, borderColor, fillColor);
    }
    
    function highlight(context, xaxis, yaxis, plotOffset, isHighlight, linewidth, _fillColor) {
        var ranges = extractRanges(xaxis, yaxis);
        
        if (!ranges)
            return;
        
        var xrange = ranges.xrange;
        var yrange = ranges.yrange;
        
        //debugger;
        var realFillColor = _fillColor || highlightColor || fillColor;
        if (isHighlight)
            drawMarking(context, xrange, yrange, plotOffset, borderColor, realFillColor, linewidth || 3);
        else
            clearMarking(context, xrange, yrange, plotOffset);
        
    }

    function drawMarking(context, xrange, yrange, plotOffset, borderColor, fillColor, lineWidth) {
        context.beginPath();
        
        context.rect(xrange.from + plotOffset.left, yrange.to + plotOffset.top, xrange.to - xrange.from, yrange.from - yrange.to);
        
        context.lineWidth = lineWidth || 1;
        
        if (fillColor)  {
            context.fillStyle = fillColor;
            context.fill();
        }
        
        if (borderColor) {
            context.strokeStyle = borderColor;
            context.stroke();
        }
        
        
            
        context.closePath();
    }
    
    function clearMarking(context, xrange, yrange, plotOffset) {
        context.clearRect(xrange.from + plotOffset.left-5, yrange.to + plotOffset.top-5, xrange.to - xrange.from+10, yrange.from - yrange.to+10);
    }
     
    function extractRanges(xaxis, yaxis) {
        var xrange = {
            from: xFrom,
            to: xTo,
            axis: xaxis
        };
        
        var yrange = {
            from: yFrom,
            to: yTo,
            axis: yaxis
        }
        
        if (xTo < xaxis.min || xFrom > xaxis.max ||
            yTo < yaxis.min || yFrom > yaxis.max)
            return null;
        
        xrange.from = Math.max(xrange.from, xrange.axis.min);
        xrange.to = Math.min(xrange.to, xrange.axis.max);
        yrange.from = Math.max(yrange.from, yrange.axis.min);
        yrange.to = Math.min(yrange.to, yrange.axis.max);
        
        if (xrange.from == xrange.to && yrange.from == yrange.to)
            return null;
        
        // then draw
        xrange.from = xrange.axis.p2c(xrange.from);
        xrange.to = xrange.axis.p2c(xrange.to);
        yrange.from = yrange.axis.p2c(yrange.from);
        yrange.to = yrange.axis.p2c(yrange.to);
        
        return  {
            xrange: xrange,
            yrange: yrange
        }
    }
    
    return {
        render: render,
        setXFrom: setXFrom,
        getXFrom: getXFrom,
        setXTo: setXTo,
        getXTo: getXTo,
        setYFrom: setYFrom,
        getYFrom: getYFrom,
        setYTo: setYTo,
        getYTo: getYTo,
        setBorderColor: setBorderColor,
        setFillColor: setFillColor,
        isMouseInMarking: isMouseInMarking,
        highlight: highlight
    }
}
