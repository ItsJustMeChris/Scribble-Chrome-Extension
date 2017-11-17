document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.getSelected(null, function(tab) {
        d = document
        var canvas = d.getElementById("canvas")
        var ctx = canvas.getContext("2d")
        var drawing = 0
        var lastx, lasty
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        canvas.addEventListener("mousemove", function (e){
            if (drawing){
                console.log(e)
                x = e.pageX-canvas.offsetLeft;
                y = e.pageY-canvas.offsetTop;
                ctx.fillStyle = "#000";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(lastx, lasty);
                ctx.lineTo(x, y);
                ctx.closePath();
                ctx.stroke();
                console.log(ctx)
                lastx = e.pageX-canvas.offsetLeft;
                lasty = e.pageY-canvas.offsetTop;
            }
        }, false)
        canvas.addEventListener("mousedown", function (e){
            drawing = 1
            lastx = e.pageX-canvas.offsetLeft;
            lasty = e.pageY-canvas.offsetTop;
        }, false)
        canvas.addEventListener("mouseup", function (e){
            drawing = 0
        }, false)
    });
}, false);
