import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Fish } from '/js/Fish.js';

// --- Core Setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(0, 0, 255)"); // Blue, hexadecimal - water backdrop

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 1000);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxDistance = 150;
controls.minDistance = 20;

// --- Lighting ---
const ambientLight = new THREE.AmbientLight("rgb(255, 255, 255)"); // Bright ambient to see fish
scene.add(ambientLight);

// Our aquarium
let aquarium = {
    numFish: 50,
    school: [],
};

for (let i = 0; i < aquarium.numFish; i++) {
    let x = Math.random() * 100;
    x = map_range(x, 0, 100, -100, 100);
    let y = Math.random() * 100;
    y = map_range(y, 0, 100, -100, 100);
    let z = Math.random() * 100;
    z = map_range(z, 0, 100, -100, 100);
    // console.log([x,y,z])
        // let color = {
        //     r: Math.random() * 255,
        //     g: Math.random() * 200,
        //     b: Math.random() * 255,
        // }
    const gltfLoader = new GLTFLoader();
    let fishModel = await gltfLoader.loadAsync("models/animated_low_poly_fish_gltf/scene.gltf");
    let aquariumModels = []
    aquariumModels.push(fishModel)
    let fish = new Fish(scene, x, y, z, aquariumModels);
    aquarium.school.push(fish);
}

/*
* Assigns the mouse X and mouse Y position as the target for the fish to follow, activates seek behaviour
*/
function assign(e) {
    // imitates p5's mouseX and mouseY
    let touch = {
        pageX: e.pageX,
        pageY: e.pageY,  
    }
    let mouseX = touch.pageX;
    // console.log(mouseX)
    let mouseY = touch.pageY;
    /*
    * Optimized by following the method of taking the mouse Vector out of the loop, The Nature of Code, ch 5, "Algorithmic Efficiency"
    https://natureofcode.com/autonomous-agents/#algorithmic-efficiency-or-why-does-my-sketch-run-so-slowly
    */
    let mouse = new THREE.Vector3(mouseX, mouseY, 0);
    aquarium.school.forEach(Fish => Fish.seek(mouse));
}

let elapsedTime = 0;
function animate(timer) {
    requestAnimationFrame(animate);
    
    const delta = 0.001*(timer - elapsedTime) ;
    // console.log(delta)
    elapsedTime = timer;
    
    // Update all fish (this handles fish movement and animation)
    aquarium.school.forEach(Fish => Fish.update(delta));
    aquarium.school.forEach(Fish => Fish.checkEdges());
    aquarium.school.forEach(Fish => Fish.separate(aquarium.school));
    window.addEventListener("pointermove", assign); // when the mouse moves, the seek behaviour is activated (seek state)
    // document.querySelector(".water").addEventListener("touchmove", assignTouch); // when the touch moves, the seek behaviour is activated (seek state)
    
    controls.update();
    renderer.render(scene, camera);
}

animate(0);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Source - https://stackoverflow.com/a/5650012
// Posted by Alnitak, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-06, License - CC BY-SA 3.0
function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}


// function assignTouch(e) {
//     e.preventDefault();

//     for (const changedTouch of e.changedTouches) {
//         console.log(e.changedTouches)
//         const touch = ongoingTouches.get(changedTouch.identifier);
//         ongoingTouches.set(changedTouch.identifier, newTouch);
    
//     //     if (!touch) {
//     //         console.error(`Move: Could not find touch ${changedTouch.identifier}`);
//     //         continue;
//     //     }

//         const newTouch = {
//             pageX: changedTouch.pageX,
//             pageY: changedTouch.pageY,
//         };

//         let touchX = changedTouch.pageX
//         let touchY = changedTouch.pageY
//         let finger = new Vector(touchX, touchY);
//         for (let fish of aquarium.school) {
//             fish.seek(finger);
//         }        
//     }
// }

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