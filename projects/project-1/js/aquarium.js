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
        let x = Math.random() * (parseInt(aquarium.water.waterDiv.style.width) - 40) + 20;
        let y = Math.random() * (parseInt(aquarium.water.waterDiv.style.height) - 40) + 20;
        let size = Math.random() * 10 + 10;
        let color = {
            r: Math.random() * 100,
            g: Math.random() * 100,
            b: 255,
        }
        let fish = new Fish(x, y, size, color);
        aquarium.school.push(fish);
        fish.renderFish();
    }
}

function animateFish(){
    for (let fish of aquarium.school) {
        fish.move();
        fish.renderFish();
    }
    requestAnimationFrame(animateFish);
}

createFish();
animateFish();
}