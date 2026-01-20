"use strict";
// QU 5.0
let counter = 0;

// orange square
let square = {
    w: 20,
    h: 20,
    x: 20,
    y: 30,
    colour: {
        r: 255,
        g: 100,
        b: 0
    }
};

function setup() {
    console.log("go")
    createCanvas(300, 300);
}

function draw() {
    background(0);

    checkSquareOverlap(mouseX, mouseY, square);

    displaySquare();

    let i = 0;
    let radius = 20;
    let ellipseAlpha = 100;

    while (i < counter) {
        if (counter > 0 && counter < 11) {
            push();
            fill(255, ellipseAlpha);
            ellipse(width / 2, height / 2, radius);
            pop();
            ellipseAlpha += 5;
            radius += 20;
            i++;
        }
    }

}

function displaySquare() {
    noStroke();
    push();
    fill(square.colour.r, square.colour.g, square.colour.b);
    rect(square.x, square.y, square.w, square.h);
    pop();

    if (checkSquareOverlap(mouseX, mouseY, square)) {
        square.colour.g = 180;
        square.colour.b = 30;
    }
    else {
        square.colour.g = 100;
        square.colour.b = 0;
    }
}

function mousePressed() {
    // Overlapping rectangle 1
    if (checkSquareOverlap(mouseX, mouseY, square)) {
        counter += 1;
        console.log(counter)
    }
}

function checkSquareOverlap(mouseX, mouseY, square) {
    // Overlapping rectangle 1
    return ((mouseX > square.x && mouseX < (square.x + square.w)) && (mouseY > square.y && mouseY < (square.y + square.h)));
}
