window.onload = function () {
    console.log("move");



    // we want to do something when the mouse is over the box :)
    let drawBox = document.querySelector("#draw-box-a");

    //A: add event listener + callback
    drawBox.addEventListener("mousemove", moveCallBack);

    let particle = this.document.createElement("div");
    particle.classList.add("point");
    drawBox.appendChild(particle);

    function moveCallBack(e) {
        console.log("mouse move");
        // // B: note these are the same ... 
        console.log(this);
        // console.log(e.target);

        console.log(this.getBoundingClientRect());
        let offsetX = e.clientX - this.getBoundingClientRect().x
        let offsetY = e.clientY - this.getBoundingClientRect().y
        // this.innerHTML = `x: ${offsetX} y: ${offsetY}`;

        particle.style.left = offsetX + "px";
        particle.style.top = offsetY + "px";

    }
}

