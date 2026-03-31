window.onload = setup;
function setup() {
    console.log("events!")

    //     let introSection = document.querySelector("#intro");
    //     introSection.addEventListener("click", function (e) {
    //         console.log(this);
    //         console.log(e)

    //         //a:
    //         this.style.background = `rgba(214, 110, 239, 0.5)`
    //     });

    // let introSection = document.getElementById("intro");
    // introSection.addEventListener("click", mouseIntroHandler);

    let allSections = document.querySelectorAll(".mouseclick-active-section");
    for (let element of allSections) {
        element.addEventListener("click", changeOpacityOfSection)
    }

    function changeOpacityOfSection(e) {


        if (this.getAttribute("custom-bool") === "inactive") {
            let classToAdd = `${this.id}-section-active`;
            let classToAddP = `${this.id}-section-p-active`;
            this.classList.add(classToAdd);
            document.querySelector(`#${this.id} p`).classList.add(classToAddP);

            this.setAttribute("custom-bool", "active")
            console.log(this);
        }
        else {
            let classToAdd = `${this.id}-section-active`;
            let classToAddP = `${this.id}-section-p-active`;
            this.classList.remove(classToAdd);
            document.querySelector(`#${this.id} p`).classList.remove(classToAddP);

            this.setAttribute("custom-bool", "inactive")
            console.log(this);
        }

    }

    function mouseIntroHandler(e) {
        console.log("hello");
        // console.log(e);
        // console.log(this);
        this.classList.add("intro-section-active")

        this.style.background = 'rgba(214, 110, 239, 0.5)';
        // console.log("#" + this.id + "p")
        console.log(document.querySelector(`#${this.id} p`))
        classList.add("intro-section-p-active");

    }

}

