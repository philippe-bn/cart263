window.onload = function () {
// Our aquarium
let aquarium = {
    numFish: 50,
    school: [],

    //algae
    //bubbles

    // The water object
    water: {
        // the color of the water (background)
        waterColor: {
            r: 0,
            g: 0,
            b: 255,
        },
        // the water element
        waterDiv: document.createElement("div"),
    },
};

function createAndRenderTheAquarium(){
    // water
    aquarium.water.waterDiv.classList.add("water");
    aquarium.water.waterDiv.style.left = 40 + "px";
    aquarium.water.waterDiv.style.top = 40 + "px";
    aquarium.water.waterDiv.style.width = window.innerWidth - 80 + "px";
    aquarium.water.waterDiv.style.height = window.innerHeight - 80 + "px";
    aquarium.water.waterDiv.style.background = `rgb(
    ${aquarium.water.waterColor.r},
    ${aquarium.water.waterColor.g},
    ${aquarium.water.waterColor.b}
    )`;
    document.getElementsByTagName("main")[0].appendChild(aquarium.water.waterDiv);

    // create algae
    // create bubbles?
}

createAndRenderTheAquarium();

// create fish
function createFish() {
    for (let i = 0; i < aquarium.numFish; i++) {
        let x = Math.random() * (parseInt(aquarium.water.waterDiv.style.width) - 80) + 20;
        let y = Math.random() * (parseInt(aquarium.water.waterDiv.style.height) - 80) + 20;
        let size = Math.random() * 10 + 10;
        let color = {
            r: Math.random() * 255,
            g: Math.random() * 200,
            b: Math.random() * 255,
        }
        let fish = new Fish(x, y, size, color);
        aquarium.school.push(fish);
        fish.renderFish();
    }
}

function animateFish(){
    for (let fish of aquarium.school) {
        fish.move();
        fish.checkEdges();
        fish.separate(aquarium.school);
        fish.renderFish();
    }
    document.querySelector(".water").addEventListener("mousemove", assign); // when the mouse moves, the seek behaviour is activated (seek state)
    requestAnimationFrame(animateFish);
}

createFish();
animateFish();

/*
* Assigns the mouse X and mouse Y position as the target for the fish to follow, activates seek behaviour
*/
function assign(e) {
    // imitates p5's mouseX and mouseY
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    /*
    * Optimized by following the method of taking the mouse Vector out of the loop, The Nature of Code, ch 5, "Algorithmic Efficiency"
    https://natureofcode.com/autonomous-agents/#algorithmic-efficiency-or-why-does-my-sketch-run-so-slowly
    */
    let mouse = new Vector(mouseX, mouseY);
    for (let fish of aquarium.school) {
        fish.seek(mouse);
    }
}

}

// let flock;

// function setup() {
//   createCanvas(640, 360);
//   createP('Drag the mouse to generate new boids.');

//   flock = new Flock();

//   // Add an initial set of boids into the system
//   for (let i = 0; i < 100; i++) {
//     let b = new Boid(width / 2, height / 2);
//     flock.addBoid(b);
//   }

//   describe(
//     'A group of bird-like objects, represented by triangles, moving across the canvas, modeling flocking behavior.'
//   );
// }

// function draw() {
//   background(0);
//   flock.run();
// }

// // On mouse drag, add a new boid to the flock
// function mouseDragged() {
//   flock.addBoid(new Boid(mouseX, mouseY));
// }

// // Flock class to manage the array of all the boids
// class Flock {
//   constructor() {
//     // Initialize the array of boids
//     this.boids = [];
//   }

//   run() {
//     for (let boid of this.boids) {
//       // Pass the entire list of boids to each boid individually
//       boid.run(this.boids);
//     }
//   }

//   addBoid(b) {
//     this.boids.push(b);
//   }
// }