import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// canvas
const canvas = document.querySelector("canvas#three-ex");
const scene = new THREE.Scene();

//lights
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 50)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight);

//sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true


//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);


//make a plane
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshStandardMaterial({ color: "#657997" }),
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(plane)


const gltfLoader = new GLTFLoader();

let gltfModel = null;
let gltfDuck = null;
// try{
//     gltfModel = await gltfLoader.loadAsync( 'model/Fox/glTF/Fox.gltf' );
//     console.log(gltfModel)
// }
// catch (error){
//     console.log(error.message)
// }

// window.requestAnimationFrame(animate);
    
// function animate()
// {
    
//     // Update controls
//     controls.update()
//     // Render
//     renderer.render(scene, camera)
//     window.requestAnimationFrame(animate)
// }

try {
    gltfModel = await gltfLoader.loadAsync("model/Fox/glTF/Fox.gltf");
    gltfDuck = await gltfLoader.loadAsync("model/Duck/glTF/Duck.gltf");
    let objs = []
  objs.push(gltfModel)
  objs.push(gltfDuck)
    addAndRun(objs)
    
} 
catch (error) {
    console.log(error.message);
}

function addAndRun(loadedObjsArray){
  let foxModel = loadedObjsArray[0].scene.children[0]
  let duckModel = loadedObjsArray[1].scene.children[0]

  //set scale
  foxModel.scale.set(.015,.015,.015)
  duckModel.scale.x -=.005
  duckModel.scale.y -=.005
  duckModel.scale.z -=.005

  //set pos
  duckModel.position.x =1
  foxModel.position.z = -5

  scene.add(foxModel)
  scene.add(duckModel)

  const mixer = new THREE.AnimationMixer(foxModel)
  
  // Access the second animation clip in the array
  const clip = loadedObjsArray[0].animations[1];
  //returns a reference to an AnimationAction
  //https://threejs.org/docs/index.html?q=Anima#AnimationAction
  const anim_action = mixer.clipAction(clip);
  // Start playing the animation
  anim_action.play()

  let elapsedTime = 0; //
  window.requestAnimationFrame(animate);

    function animate(timer) {
        //calculate the difference since last frame
        let deltaTime = (timer - elapsedTime) / 1000; //put in secs
        elapsedTime = timer; //update  new elapsedTime

        // Update controls
        controls.update();
        if (mixer) {
            mixer.update(deltaTime);
        }

        // fox model
        foxModel.position.z+=.01
        // Render
        renderer.render(scene, camera);

        window.requestAnimationFrame(animate);
    }


}