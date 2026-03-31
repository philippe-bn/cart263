import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
// Canvas
const canvas = document.querySelector("canvas#three-ex");

//Ambient Light
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const ambientLight = new THREE.AmbientLight(0xffffff, .25);
scene.add(ambientLight);

// Directional light
// const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
const directionalLight = new THREE.DirectionalLight(0xffffff, .25);
directionalLight.position.set(2, 2, -1);
scene.add(directionalLight)

directionalLight.castShadow = true
console.log(directionalLight.shadow)
directionalLight.shadow.mapSize.width = 1024
directionalLight.shadow.mapSize.height = 1024
directionalLight.shadow.radius = 10

const spotLight = new THREE.SpotLight(0xff0000 ,5, 10, Math.PI * 0.3)
//new
spotLight.castShadow = true
spotLight.position.set(0, 2, 2)
scene.add(spotLight)
scene.add(spotLight.target)
spotLight.shadow.mapSize.width = 1024
spotLight.shadow.mapSize.height = 1024

//Sphere and plane
const geometry = new THREE.SphereGeometry(0.5, 32, 32);
const material = new THREE.MeshStandardMaterial({});
material.roughness = 0.7;

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material);
scene.add(plane);
plane.rotation.x = -Math.PI * 0.5;
plane.position.y = -0.5;

sphere.castShadow = true
plane.receiveShadow = true

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;

scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//RENDER
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

//ANIMATE
window.requestAnimationFrame(animate);
function animate() {
  controls.update();

  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}