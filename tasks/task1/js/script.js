"use strict";

// QU 3
let rect1 = {
    fill: 'pink',
    x: 20,
    y: 20,
    w: 40
}
let rect2 = {
    fill: 'purple',
    x: 40,
    y: 40,
    w: 40
}
let rect3 = {
    fill: 'teal',
    x: 60,
    y: 60,
    w: 40
}

function setup() {
    console.log("go")
    createCanvas(300, 300);

    // // QU 2
    // background(0);
    // drawEllipse(10, 20, 10, 128, 0, 128);
    // drawEllipse(30, 40, 20, 255, 0, 255);
    // drawEllipse(60, 70, 30, 75, 0, 130);

}

function draw() {

    // // QU 1
    // background(0);
    // noStroke();
    // push();
    // fill(128, 0, 128);
    // ellipse(10, 20, 10);
    // pop();
    // push();
    // fill(255, 0, 255);
    // ellipse(30, 40, 20);
    // pop();
    // push();
    // fill(75, 0, 130);
    // ellipse(60, 70, 30);
    // pop();

    // QU 3
    background(0);
    push();
    fill(rect1.fill);
    rect(rect1.x, rect1.y, rect1.w);
    pop();
    push();
    fill(rect2.fill);
    rect(rect2.x, rect2.y, rect2.w);
    pop();
    push();
    fill(rect3.fill);
    rect(rect3.x, rect3.y, rect3.w);
    pop();

    rect3.y += 5;
    // Handle the canvas bounds
    if (rect3.y >= height) {
        rect3.y = 0;
    }
}

// // QU 2
// function drawEllipse(x, y, w, r, g, b) {
//     noStroke();
//     fill(r, g, b);
//     ellipse(x, y, w);
// }

// QU 3 
function mouseClicked() {
    rect1.x += 5;
    rect1.y += 5;
}

function keyPressed() {
    if (keyCode === 32) {
        rect2.x += 5;
    }
}