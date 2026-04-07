import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { ImprovedNoise } from 'three/addons/math/ImprovedNoise.js';
import { Fish } from '/js/Fish.js';

// --- Core Setup ---
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(0, 0, 155)"); // Blue, hexadecimal - water backdrop

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.set(0, 0, 2000);
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
const ambientLight = new THREE.AmbientLight("rgb(100, 100, 100)"); // Bright ambient to see fish
scene.add(ambientLight);

const spotRay1 = new THREE.SpotLight( 0xffffff );
spotRay1.position.set(-30, 100, 100 ); // placed above the water
spotRay1.angle = Math.PI/15;
spotRay1.penumbra = 0.5;
// spotRay1.target = ? need seabed? or null object?
scene.add( spotRay1 );
const spotLightHelper1 = new THREE.SpotLightHelper( spotRay1 );
// scene.add( spotLightHelper1 );

const spotRay2 = new THREE.SpotLight( 0xffffff );
spotRay2.position.set(-30, 100, 100 ); // placed above the water
spotRay2.angle = Math.PI/15;
spotRay2.penumbra = 0.5;
scene.add( spotRay1 );
const spotLightHelper2 = new THREE.SpotLightHelper( spotRay2 );
// scene.add( spotLightHelper2 );

const light = new THREE.DirectionalLight( 0xFFFFFF ); // Sunlight
scene.add( light );


// Our aquarium
let aquarium = {
    numFish: 100,
    school: [],
};

let mesh, texture;
const worldWidth = 256, worldDepth = 256;

scene.fog = new THREE.FogExp2( 0x000055, 0.0025 );

const data = generateHeight( worldWidth, worldDepth );

const geometry = new THREE.PlaneGeometry( 7500, 7500, worldWidth - 1, worldDepth - 1 );
geometry.rotateX( - Math.PI / 2 );

const vertices = geometry.attributes.position.array;

for ( let i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
    vertices[ j + 1 ] = data[ i ] * 10;
}

texture = new THREE.CanvasTexture( generateTexture( data, worldWidth, worldDepth ) );
texture.wrapS = THREE.ClampToEdgeWrapping;
texture.wrapT = THREE.ClampToEdgeWrapping;
texture.colorSpace = THREE.SRGBColorSpace;

mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: texture } ) );
mesh.position.set(0, -1000, 0);
scene.add( mesh );

function generateHeight( width, height ) {

	let seed = Math.PI / 4;
	window.Math.random = function () {

		const x = Math.sin( seed ++ ) * 10000;
		return x - Math.floor( x );

	};

	const size = width * height, data = new Uint8Array( size );
	const perlin = new ImprovedNoise(), z = Math.random() * 100;

	let quality = 1;

	for ( let j = 0; j < 4; j ++ ) {

		for ( let i = 0; i < size; i ++ ) {

			const x = i % width, y = ~ ~ ( i / width );
			data[ i ] += Math.abs( perlin.noise( x / quality, y / quality, z ) * quality * 1.75 );

		}

		quality *= 5;

	}

	return data;

}

function generateTexture( data, width, height ) {

	let context, image, imageData, shade;

	const vector3 = new THREE.Vector3( 0, 0, 0 );

	const sun = new THREE.Vector3( 1, 1, 1 );
	sun.normalize();

	const canvas = document.createElement( 'canvas' );
	canvas.width = width;
	canvas.height = height;

	context = canvas.getContext( '2d' );
	context.fillStyle = '#000';
	context.fillRect( 0, 0, width, height );

	image = context.getImageData( 0, 0, canvas.width, canvas.height );
	imageData = image.data;

	for ( let i = 0, j = 0, l = imageData.length; i < l; i += 4, j ++ ) {

		vector3.x = data[ j - 2 ] - data[ j + 2 ];
		vector3.y = 2;
		vector3.z = data[ j - width * 2 ] - data[ j + width * 2 ];
		vector3.normalize();

		shade = vector3.dot( sun );

		imageData[ i ] = ( 96 + shade * 128 ) * ( 0.5 + data[ j ] * 0.007 );
		imageData[ i + 1 ] = ( 32 + shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
		imageData[ i + 2 ] = ( shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );

	}

	context.putImageData( image, 0, 0 );

	// Scaled 4x

	const canvasScaled = document.createElement( 'canvas' );
	canvasScaled.width = width * 4;
	canvasScaled.height = height * 4;

	context = canvasScaled.getContext( '2d' );
	context.scale( 4, 4 );
	context.drawImage( canvas, 0, 0 );

	image = context.getImageData( 0, 0, canvasScaled.width, canvasScaled.height );
	imageData = image.data;

	for ( let i = 0, l = imageData.length; i < l; i += 4 ) {

		const v = ~ ~ ( Math.random() * 5 );

		imageData[ i ] += v;
		imageData[ i + 1 ] += v;
		imageData[ i + 2 ] += v;

	}

	context.putImageData( image, 0, 0 );

	return canvasScaled;

}



// const seaBed = new THREE.PlaneGeometry(1000, 1000, 100, 100);
// const peaks = seaBed.attributes.position;

// for (let i = 0; i < peaks.count; i++) {
//     const x = peaks.getX(i);
//     const y = peaks.getY(i);
    
//     // Divide by a 'smoothing' factor to control hill size
//     let z = new SimplexNoise();
//     z = z.noise(x / 2, y / 2) * 200; 
//     peaks.setZ(i, z);
// }
// // seaBed.computeVertexNormals(); // Required for proper lighting

// const material = new THREE.MeshStandardMaterial({color: 0x110000});
// const plane = new THREE.Mesh( seaBed, material );
// plane.position.set(0, -1000, 0)
// plane.rotation.set(-1.57, 0,0)
// scene.add( plane );



// Populate the aquarium
for (let i = 0; i < aquarium.numFish; i++) {
    let x = Math.random() * 100;
    x = map_range(x, 0, 100, -100, 100);
    let y = Math.random() * 100;
    y = map_range(y, 0, 100, -100, 100);
    let z = Math.random() * 100;
    z = map_range(z, 0, 100, -100, 100);
    // console.log([x,y,z])
    let size = Math.random() * 5 + 8;
        // let color = {
        //     r: Math.random() * 255,
        //     g: Math.random() * 200,
        //     b: Math.random() * 255,
        // }
    const gltfLoader = new GLTFLoader();
    let fishModel = await gltfLoader.loadAsync("models/animated_low_poly_fish_gltf/scene.gltf");
    let aquariumModels = []
    aquariumModels.push(fishModel)
    let fish = new Fish(scene, x, y, z, size, aquariumModels);
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
    mouseX = map_range(mouseX, 0, innerWidth, -innerWidth/2, innerWidth/2)
    // console.log(mouseX)
    let mouseY = touch.pageY;
    mouseY = map_range(mouseY, 0, innerHeight, innerHeight/2, -innerHeight/2)
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
    // aquarium.school.forEach(Fish => Fish.checkEdges());
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