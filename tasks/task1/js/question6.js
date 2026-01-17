"use strict";

let textObject = {
    string: "test",
    fill: "white",
    textSize: 28,
    x: 150,
    y: 150
}

const horizontalNumbersAmount = 10;
const verticalNumbersAmount = 15;
const numberSpacing = 20;

function setup() {
    console.log("go")
    createCanvas(500, 500);
}

function draw() {
    background(0);

    push();
    fill(textObject.fill);
    textAlign(CENTER, CENTER);
    textSize(textObject.textSize);
    text(textObject.string, textObject.x, textObject.y);
    pop();

    let initialX = 20;
    let initialY = 30;

    // horizontal numbers, start at 0, end at 9
    for (let i = 0; i < horizontalNumbersAmount; i++) {
        fill(textObject.fill);
        textSize(textObject.textSize);
        text(i, initialX + i * numberSpacing, initialY);
    }

    initialX = 20;
    initialY = 30;

    // vertical numbers, start at 15, end at 1 (ascending)
    for (let i = verticalNumbersAmount; i > 0; i--) {
        fill(textObject.fill);
        textSize(textObject.textSize);
        text(i, initialX, initialY + i * numberSpacing);
    }
}