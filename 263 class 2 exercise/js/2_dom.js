window.onload = setup
function setup() {
    console.log("running setup");

    // by ID
    console.log(document.getElementById("one"));
    console.log(document.querySelector("#one"));

    // by Tagname
    console.log(document.getElementsByTagName("div").length);
    console.log(document.getElementsByTagName("div")[0]);

    console.log(document.querySelectorAll("div").length);
    console.log(document.querySelectorAll("div")[0]);

    // by Class
    console.log(document.getElementsByClassName("square_shape").length);
    console.log(document.getElementsByClassName("square_shape")[0]);

    console.log(document.querySelectorAll(".square_shape").length);
    console.log(document.querySelectorAll(".square_shape")[0]);

    // access HTML
    console.log(document.getElementById("two").innerHTML);
    // access text
    console.log(document.getElementById("two").textContent);
    // access attributes
    console.log(document.querySelector("#five").getAttribute("id"));
    console.log(document.querySelector("#five").getAttribute("class"));

    console.log(document.querySelector("#two").getAttribute("class"));
    console.log(typeof (document.querySelector("#two").getAttribute("class")));

    console.log(document.querySelector("#two").classList);

    console.log(document.querySelector("#five").getAttributeNames());
    // access styles
    console.log(document.querySelector("#six").style);
    console.log(document.querySelector("#six").style.background);
    console.log(document.querySelector("#six").style.width);

    // access parent
    console.log(document.querySelectorAll("span")[0].parentElement.parentElement)
    // access children
    console.log(document.querySelector(".wrapper_flex_box").children[0])
    // modify children HTML
    document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header</h2>";
    // modify text
    //get the group
    let allSquareShapes = document.querySelectorAll(".square_shape");
    //go through each element
    for (let singleSquareShape of allSquareShapes) {
        //get children
        console.log(singleSquareShape.children[0])
        singleSquareShape.children[0].textContent += "adding content"
    }
    // modify attributes
    // class list
    document.querySelector(".square_shape").classList.remove("square_shape"); //first one only
    document.querySelector("p span").classList.add("change_span");
    // set attribute
    document.querySelectorAll(".another_class")[0].setAttribute("id", "newTest");
    console.log(document.querySelectorAll(".another_class")[0]);
    // remove attribute
    //second elements grandparent
    let element = document.querySelectorAll("span")[1].parentElement.parentElement
    element.removeAttribute("id")
    console.log(element)
    // dynamically change style
    //add
    document.querySelector("#four").style.background = "cornflowerBlue";
    document.querySelector("#four").style.borderColor = "darkblue";
    //modify
    document.querySelector("#one").style.background = "pink";
    document.querySelector("#one").style.borderColor = "darkblue";

    // add element
    //new element
    let newDiv = document.createElement("div");
    newDiv.classList.add("square_shape");
    newDiv.innerHTML = " NEW ELEMENT ";
    newDiv.style.backgroundColor = "purple";
    // access parent element
    let parentElement = document.querySelector(".wrapper_flex_box")
    parentElement.appendChild(newDiv)
    //then
    let newDivTwo = document.createElement("div");
    newDivTwo.classList.add("square_shape");
    newDivTwo.innerHTML = " NEW ELEMENT TWO ";
    newDivTwo.style.backgroundColor = "yellow";
    newDivTwo.querySelector("p").style.color = "black"
    // access parent element
    let sibling = document.querySelector("#three")
    let parentElementAgain = document.querySelector(".wrapper_flex_box")
    parentElementAgain.insertBefore(newDivTwo, sibling);

    // remove element
    let parentElementToRemoveFrom = document.querySelector(".wrapper_flex_box")
    let toRemove = document.getElementById("six");
    parentElementToRemoveFrom.removeChild(toRemove);
}
