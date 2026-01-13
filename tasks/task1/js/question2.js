"use strict";

function setup() {
    console.log("go")
    createCanvas(300, 300);

    // QU 2.1
    background(0);
    drawEllipse(10, 20, 10, 128, 0, 128);
    drawEllipse(30, 40, 20, 255, 0, 255);
    drawEllipse(60, 70, 30, 75, 0, 130);

}

function draw() {

}

// QU 2.2
function drawEllipse(x, y, w, r, g, b) {
    noStroke();
    fill(r, g, b);
    ellipse(x, y, w);
}