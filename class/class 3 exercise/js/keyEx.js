window.onload = function () {
    console.log("keys");

    let speedX = 5;
    let boxA = this.document.querySelector("#boxA");

    window.addEventListener("keydown", function (e) {
        // console.log(e.key);
        // console.log(e.code);
        if (e.key === "ArrowRight") {
            // console.log(parseInt(boxA.style.left));
            let currentPos = parseInt(boxA.style.left);
            boxA.style.left = currentPos + speedX + "px";
        }
        if (e.key === "ArrowLeft") {
            // console.log(parseInt(boxA.style.left));
            let currentPos = parseInt(boxA.style.left);
            boxA.style.left = currentPos - speedX + "px";
        }
    });
}
