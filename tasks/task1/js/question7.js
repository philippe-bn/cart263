"use strict";

let circle = {
    size: 30, // can become any multiple of 5
    fill: {
        r: undefined,
        g: undefined,
        b: undefined
    }
}

let state = "circle";

function setup() {
    console.log("go")
    createCanvas(300, 300);

    assignColour();
}

function draw() {
    background(0);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            fill(circle.fill.r, circle.fill.g, circle.fill.b);
            if (state === "circle") {
                ellipse((circle.size / 2) + x * circle.size, (circle.size / 2) + y * circle.size, circle.size);
            }
            else if (state === "square") {
                rect(x * circle.size, y * circle.size, circle.size);
            }
        }

    }
}

function assignColour() {
    circle.fill.r = random(255);
    circle.fill.g = random(255);
    circle.fill.b = random(255);
}

function keyPressed() {
    if (keyCode === 32) {
        assignColour();
    }
}

function mouseClicked() {
    if (state === "circle") {
        state = "square";
    }
    else if (state === "square") {
        state = "circle";
    }
}