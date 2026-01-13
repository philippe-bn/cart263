"use strict";
// QU 1.1
let ellipseFillR = 128;
let ellipseFillG = 0;
let ellipseFillB = 128;
let ellipseX = 10;
let ellipseY = 10;
let ellipseW = 10;

function setup() {
    console.log("go")
    createCanvas(300, 300);

    // QU 1.2
    background(0);
    push();
    fill(ellipseFillR, ellipseFillG, ellipseFillB);
    ellipse(ellipseX, ellipseY, ellipseW);
    pop();
    push();
    fill(ellipseFillR + 30, ellipseFillG, ellipseFillB + 30);
    ellipse(ellipseX + 20, ellipseY + 20, ellipseW + 10);
    pop();
    push();
    fill(ellipseFillR + 50, ellipseFillG, ellipseFillB + 50);
    ellipse(ellipseX + 50, ellipseY + 30, ellipseW + 20);
    pop();

}

function draw() {
}