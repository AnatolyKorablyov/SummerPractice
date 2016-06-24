/**
 * Created by Anatoly on 6/22/2016.
 */
var COLOR_RED = "#F00";
var COLOR_GREEN = "#0F0";
var COLOR_BLUE = "#00F";
var COLOR_ORANGE = "#FF7F00";
var COLOR_WHITE = "#FFFFFF";


var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
context.fillStyle = COLOR_WHITE;

var redPart = new Image();
redPart.src = 'sector.png';
var imageData=context.getImageData(0, 0, canvas.width,canvas.height);
var data=imageData.data;

for (var i = 0, n = data.length; i < n; i += 4) {
    data[i  ] = 0; // red
    data[i+1] = 255; // green
    data[i+2] = 0; // blue
    // i+3 is alpha (the fourth element)
}

redPart.setAttribute("stroke", "green");
redPart.fillStyle = "rgb(68, 191, 255)";
redPart.style.fill = "orange";
redPart.style.setProperty("fill", COLOR_GREEN, "");
redPart.onload = function () {
    context.drawImage(redPart, 100, 100);
}

 /*
var redPart = new Path2D();
redPart.arc(300, 150, 100, 0, 0.5*Math.PI);
redPart.lineTo(300, 150);
context.fillStyle = COLOR_RED;
context.fill(redPart);
context.stroke(redPart);

var greenPart = new Path2D();
greenPart.arc(300, 150, 100, 0.5*Math.PI, Math.PI);
greenPart.lineTo(300, 150);
context.fillStyle = COLOR_GREEN;
context.fill(greenPart);
context.stroke(greenPart);

var orangePart = new Path2D();
orangePart.arc(300, 150, 100, Math.PI, 1.5*Math.PI);
orangePart.lineTo(300, 150);
context.fillStyle = COLOR_ORANGE;
context.fill(orangePart);
context.stroke(orangePart);

var bluePart = new Path2D();
bluePart.arc(300, 150, 100, 1.5*Math.PI, 2*Math.PI);
bluePart.lineTo(300, 150);
context.fillStyle = COLOR_BLUE;
context.fill(bluePart);
context.stroke(bluePart);


context.restore();
context.fillStyle = COLOR_WHITE;
context.fillRect(0, 0, canvas.width, canvas.height);

redPart.arc(300, 150, 100, 0.1*Math.PI, 0.6*Math.PI);
redPart.lineTo(300, 150);
context.fillStyle = COLOR_RED;
context.fill(redPart);
context.stroke(redPart);

context.restore();
greenPart.arc(300, 150, 100, 0.6*Math.PI, 1.1*Math.PI);
greenPart.lineTo(300, 150);
context.fillStyle = COLOR_GREEN;
context.fill(greenPart);
context.stroke(greenPart);

orangePart.arc(300, 150, 100, 1.1*Math.PI, 1.6*Math.PI);
orangePart.lineTo(300, 150);
context.fillStyle = COLOR_ORANGE;
context.fill(orangePart);
context.stroke(orangePart);

bluePart.arc(300, 150, 100, 1.6*Math.PI, 2.1*Math.PI);
bluePart.lineTo(300, 150);
context.fillStyle = COLOR_BLUE;
context.fill(bluePart);
context.stroke(bluePart);*/