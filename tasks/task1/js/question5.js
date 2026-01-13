"use strict";
// QU 4.0
// fill object
let colours = {
    rect1: {
        r: 0,
        g: 0,
        b: 255
    },
    rect2: {
        r: 100,
        g: 100,
        b: 255
    },
    rect3: {
        r: 150,
        g: 150,
        b: 255
    }
}

function setup() {
    console.log("go")
    createCanvas(300, 300);
}

function draw() {
    // QU 4.1
    background(0);
    noStroke();
    push();
    fill(colours.rect1.r, colours.rect1.g, colours.rect1.b);
    rect(0, 0, width / 3, height);
    pop();
    push();
    fill(colours.rect2.r, colours.rect2.g, colours.rect2.b);
    rect(100, 0, width / 3, height);
    pop();
    push();
    fill(colours.rect3.r, colours.rect3.g, colours.rect3.b);
    rect(200, 0, width / 3, height);
    pop();

    checkRect();
}


// QU 4.2
function checkRect() {
    // Overlapping rectangle 1
    if (mouseX > 0 && mouseX < 100) {
        colours.rect1.r = 255;
        colours.rect1.g = 255;
        colours.rect1.b = 255;
    }
    else {
        colours.rect1.r = 0;
        colours.rect1.g = 0;
        colours.rect1.b = 255;
    }

    // Overlapping rectangle 2
    if (mouseX > 100 && mouseX < 200) {
        colours.rect2.r = 255;
        colours.rect2.g = 255;
        colours.rect2.b = 255;
    }
    else {
        colours.rect2.r = 100;
        colours.rect2.g = 100;
        colours.rect2.b = 255;
    }

    // Overlapping rectangle 3
    if (mouseX > 200 && mouseX < 300) {
        colours.rect3.r = 255;
        colours.rect3.g = 255;
        colours.rect3.b = 255;
    }
    else {
        colours.rect3.r = 150;
        colours.rect3.g = 150;
        colours.rect3.b = 255;
    }
}