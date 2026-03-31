import * as THREE from 'three';

// Planet class for Team C
export class PlanetC {
    constructor(scene, orbitRadius, orbitSpeed, texture1, texture2) {
        this.scene = scene;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.angle = Math.random() * Math.PI * 2;
        this.grass_texture = texture1;
        this.moon_texture = texture2;

        //Create planet group
        this.group = new THREE.Group()

        // Choose a theme for your team's planet: MEDIEVAL
        // Create a planet using THREE.SphereGeometry (Radius must be between 1.5 and 2).
        // Give it a custom material using THREE.MeshStandardMaterial.
        // Use castShadow and receiveShadow on the mesh and all future ones so they can cast and receive shadows.
        // Add the planet mesh to the planet group.
        // Add from 1 to 3 orbiting moons to the planet group.
        // The moons should rotate around the planet just like the planet group rotates around the Sun.
        // Load Blender models to populate the planet with multiple props and critters by adding them to the planet group.
        // Make sure to rotate the models so they are oriented correctly relative to the surface of the planet.
        // Use raycasting in the click() method below to detect clicks on the planet and/or models, and make an animation happen upon clicking.
        // Use your imagination and creativity!

        // Create planet
        //STEP 1:
        //TODO: Create a planet using THREE.SphereGeometry (Radius must be between 1.5 and 2).
        const planet = new THREE.SphereGeometry(1.5, 32, 32); // (radius, w segments, h segments)
        //TODO: Give it a custom material using THREE.MeshStandardMaterial. 
        // https://architextures.org/textures/554
        this.grass_texture.colorSpace = THREE.SRGBColorSpace;
        const grass = new THREE.MeshStandardMaterial({map: this.grass_texture});
        const medievalLand = new THREE.Mesh(planet, grass);
        //TODO: Use castShadow and receiveShadow on the mesh and all future ones so they can cast and receive shadows.
        medievalLand.castShadow = true
        medievalLand.receiveShadow = true
        //TODO: Add the planet mesh to the planet group.
        this.group.add(medievalLand);

        //STEP 2: 
        //TODO: Add from 1 to 3 orbiting moons to the planet group.
        const moonSphere = new THREE.SphereGeometry(0.5, 32, 32);
        this.moon_texture.colorSpace = THREE.SRGBColorSpace;
        const moonRock = new THREE.MeshStandardMaterial({map: this.moon_texture});
        const medievalMoon1 = new THREE.Mesh(moonSphere, moonRock);
        const medievalMoon2 = new THREE.Mesh(moonSphere, moonRock);
        const medievalMoon3 = new THREE.Mesh(moonSphere, moonRock);
        //TODO: The moons should rotate around the planet just like the planet group rotates around the Sun.
        medievalMoon1.position.x = 3;
        medievalMoon1.position.y = 3;
        medievalMoon2.position.x = 2;
        medievalMoon2.position.y = 6;
        medievalMoon3.position.x = 1;
        medievalMoon3.position.y = 8;
        // adding the rotation in update! -phil; nvm it doesnt work
        this.group.add(medievalMoon1);
        this.group.add(medievalMoon2);
        this.group.add(medievalMoon3);
        // console.log(medievalMoon1)

        //STEP 3:
        //TODO: Load Blender models to populate the planet with multiple props and critters by adding them to the planet group.
        //TODO: Make sure to rotate the models so they are oriented correctly relative to the surface of the planet.

        //STEP 4:
        //TODO: Use raycasting in the click() method below to detect clicks on the models, and make an animation happen when a model is clicked.
        //TODO: Use your imagination and creativity!

        this.scene.add(this.group);
    }

    update(delta) {
        // Orbit around sun
        this.angle += this.orbitSpeed * delta * 30;
        this.group.position.x = Math.cos(this.angle) * this.orbitRadius;
        this.group.position.z = Math.sin(this.angle) * this.orbitRadius;

        // Rotate planet
        this.group.rotation.y += delta * 0.5;
        // medievalMoon1.rotation.y += delta * 0.5; // not workingg

        //TODO: Do the moon orbits and the model animations here.
    }

    click(mouse, scene, camera) {
        //TODO: Do the raycasting here.
    }
}

