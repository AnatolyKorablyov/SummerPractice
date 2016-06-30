var COLORS = ["#F00", "#0F0", "#00F", "#FF0", "#0FF", "#FFF"];
var CENTER_X = 300;
var СENTER_Y = 150;
var RADIUS = 100;
var SPEED = 0.04;
var SCORE = 0;
var TOP = 10;

var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var triangle = new Path2D();
triangle.moveTo(50, 0);
triangle.lineTo(100, 100);
triangle.lineTo(0, 100);
triangle.lineTo(50, 0);

var sector = new Path2D();
sector.arc(0, 0, RADIUS, 0, 0.5*Math.PI);
sector.lineTo(0, 0);
context.fillStyle = "red";
context.fill(sector);
context.stroke(sector);



function getRandomArbitary(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var rotation = 0;
var twist = true;
var changeColor = getRandomArbitary(0, 3);

function CheckColors()
{
    var turn = rotation / (2 * Math.PI);
    turn = turn % 1;
    turn = turn * 2 * Math.PI;
    if (turn < 0)
    {
        turn = Math.abs(turn);
        if ((turn < 0.5 * Math.PI && changeColor == 1) ||
            (turn > 0.5 * Math.PI && turn < Math.PI && changeColor == 2) ||
            (turn > Math.PI && turn < 1.5 * Math.PI && changeColor == 3) ||
            (turn > 1.5 * Math.PI && turn < 2 * Math.PI && changeColor == 0))
        {
            return true;
        }
    }
    else
    {
        if ((turn < 0.5 * Math.PI && changeColor == 0) ||
            (turn > 0.5 * Math.PI && turn < Math.PI && changeColor == 3) ||
            (turn > Math.PI && turn < 1.5 * Math.PI && changeColor == 2) ||
            (turn > 1.5 * Math.PI && turn < 2 * Math.PI && changeColor == 1))
        {
            return true;
        }
    }
    return false;
};

function DrawSector()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (twist)
    {
        rotation += SPEED;
    }
    else
    {
        rotation -= SPEED;
    }

    for (var i = 0; i < 4; ++i)
    {
        context.save();
        context.translate(CENTER_X, СENTER_Y);
        context.rotate(rotation + 0.5*i*Math.PI);
        context.fillStyle = COLORS[i];
        context.fill(sector);
        context.restore();
    }
    context.save();
    context.translate(CENTER_X - RADIUS / 2, СENTER_Y + RADIUS);
    context.fillStyle = COLORS[changeColor];
    context.fill(triangle);
    context.restore();


    context.fillStyle = COLORS[2];
    context.font = "italic 30pt Arial";
    context.fillText("Score " + SCORE, 20, 50);

    context.fillStyle = COLORS[4];
    context.font = "italic 30pt Arial";
    context.fillText("Speed " + Math.ceil(SPEED*100)/100, 20, 80);

    context.fillStyle = COLORS[2];
    context.font = "italic 30pt Arial";
    context.fillText("Record " + TOP, 350, 50);

    canvas.onmouseup = function ()
    {
        var randNumber = getRandomArbitary(0, 3);
        while (changeColor == randNumber) {
            randNumber = getRandomArbitary(0, 3);
        }
        if (!CheckColors())
        {
            alert("FAILED!");
            if (SCORE > TOP)
            {
                TOP = SCORE;
            }
            SCORE = 0;
            SPEED = 0.04;
        }
        else
        {
            ++SCORE;
        }
        if (SCORE % 5 == 0)
        {
            SPEED += 0.01;
        }
        changeColor = randNumber;
        twist = !twist;
    };

    requestAnimationFrame(DrawSector);
}

DrawSector();