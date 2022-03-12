var x = 0;
var y = 0;

function update() {
    var c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeRect(x, y, 10, 10);
    ctx.stroke();

    x += 0.1;
    y += 0.1;

    setTimeout(update, 100);
}

update();