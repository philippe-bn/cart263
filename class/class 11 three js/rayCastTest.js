import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()
const sizes = {
    width: 800,
    height: 600
}

 let mouse = {x:0, y:0}

const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const controls = new OrbitControls(camera, canvas)

const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object1.position.x = -2

const object2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object2.position.x = 2


const object3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)

scene.add(object1,object2,object3)


const raycaster = new THREE.Raycaster()

window.requestAnimationFrame(animate);

// function animate() {
//   controls.update();
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(animate);
// }

function animate(timer) {
  controls.update();

    object1.position.y = Math.sin(timer/1000 *.5 ) * 3
    object2.position.y = Math.sin(timer/1000  *.4) * 3
    object3.position.y = Math.sin(timer/1000 *.3) *  3

    raycaster.setFromCamera(mouse, camera);

  renderer.render(scene, camera);
  const objectsToTest = [object1, object2, object3]
    const intersects = raycaster.intersectObjects(objectsToTest)

     for(const object of objectsToTest)
    {
        object.material.color.set('#ff0000')
    }

    for(const intersect of intersects)
    {
        intersect.object.material.color.set('#0000ff')
    }
  window.requestAnimationFrame(animate);
}

// object1.updateMatrixWorld()
// object2.updateMatrixWorld()
// object3.updateMatrixWorld()

// //ray will start somewhere on left of the spheres
// const rayOrigin = new THREE.Vector3(- 3, 0, 0)
// //right (positive x)
// const rayDirection = new THREE.Vector3(10, 0, 0)  //reduce magnitude BUT keep direction
// console.log(rayDirection.length())
// //set direction only (has length ==1)
// rayDirection.normalize()
// console.log(rayDirection.length())
// raycaster.set(rayOrigin, rayDirection) //raycaster has been oriented

//cast a ray - check intersection with ONLY object 1
// const intersect = raycaster.intersectObject(object1)
// console.log(intersect)
 //cast a ray - check intersection with obj1, obj2 and obj 3 

window.addEventListener("mousemove", function(event) {
  mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
  mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
//   console.log(mouse);
});