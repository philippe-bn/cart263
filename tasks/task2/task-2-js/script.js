window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */
/* 1: all paragraph elements */
/***CODE */ console.log(document.getElementsByTagName("p"))
    /***OUTPUT: 
     * HTMLCollection(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]0: p#11: p#2.img-descript2: p#3.img-descript3: p#4.img-descript4: p#5.img-descript5: p#6.img-descript6: p#7.img-descript7: p#8.img-descript8: p#9.img-descript9: <value unavailable>length: 9[[Prototype]]: HTMLCollection
     */


/*************************************** */
/* 2: only the first paragraph element */
/***CODE */ console.log(document.querySelector("p"))
    /***OUTPUT: 
     * <p id="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            </p>
     */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */ console.log(document.querySelectorAll(".inner-container"))
    /***OUTPUT: 
     * NodeList(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
     */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */ let nbImgs = document.querySelectorAll(".img-container")
    for (let i = 0; i < nbImgs.length; i++) {
        console.log(document.querySelector("img"))
    }
    /***OUTPUT: 
     * <img src="task-2-images/two.png">
     * <img src="task-2-images/two.png">
     * <img src="task-2-images/two.png">
     * <img src="task-2-images/two.png">
     * <img src="task-2-images/two.png">
     * <img src="task-2-images/two.png">
     * <img src="task-2-images/two.png">
     * <img src="task-2-images/two.png">
     */


/*************************************** */
/* 5A: all h2 elements */ console.log(document.querySelectorAll("h2"))
/* 5B: length of the list in 5A */ console.log(document.querySelectorAll("h2").length)
/* 5C: the text content of the first element in the list from 5A */ console.log(document.querySelectorAll("h2")[0].textContent)
/***CODE */
    /***OUTPUT: 
     * A: NodeList [h2]0: h2length: 1[[Prototype]]: NodeList
     * B: 1
     * C: The header of this fancy page
     */


/*************************************** */
/* 6: the element with id name parent */
/***CODE */ console.log(document.getElementById("parent"))
    /***OUTPUT: 
     * <section id="parent">
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/sixteen.png">
                    </div>
                    <p id="2" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/eight.png">
                    </div>
                    <p id="3" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">

                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/eleven.png">
                    </div>
                    <p id="4" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/fifteen.png">
                    </div>
                    <p id="5" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/five.png">
                    </div>
                    <p id="6" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/three.png">
                    </div>
                    <p id="7" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/twelve.png">
                    </div>
                    <p id="8" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
            <div class="inner-container">
                <div class="content-container">
                    <div class="img-container">
                        <img class="img-image" src="task-2-images/seventeen.png">
                    </div>
                    <p id="9" class="img-descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                        perspiciatis blanditiis, et
                        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur
                        ducimus officiis non
                        quasi officia sit veniam!</p>

                </div>
            </div>
            
        </section>
     */

    /*************************************** */
    /*** END PART ONE ACCESS */


    // /*************************************** */
    // /*** START PART TWO MODIFY */
    // /*************************************** */
    // /* 1: Select the first paragraph and replace the text within the paragraph... */
    // /***CODE */
    // document.querySelector("p").textContent = "New text in paragraph one: text changed by Philippe Beauchemin on the following date: January 27th, 2026"

    // /*************************************** */
    // /* 2: Select all elements in the HTML that have the class name content-container
    //  and change the background color ... of first and second ...*/
    // /***CODE */
    // document.querySelectorAll(".content-container")[0].style.background = "orange"
    // document.querySelectorAll(".content-container")[1].style.background = "purple"

    // /*************************************** */
    // /* 3: Change the src element of the first image element on the page to be ...
    // /***CODE */
    // document.querySelector("img").src = "task-2-images/seven.png"

    // /*************************************** */
    // /* 4: Select the third paragraph element on the page and 
    // replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    // /***CODE */
    // document.querySelectorAll("p")[2].innerHTML = "<h2> TEST 123 </h2>"

    // /*************************************** */
    // /* 5: Select the fourth paragraph element on the page and 
    // add to the existing content an h2 element containing the text `TEST 123`
    // /***CODE */
    // document.querySelectorAll("p")[3].innerHTML += "<h2> TEST 123 </h2>"

    // /*************************************** */
    // /* 6: Select the fifth paragraph element on the page and add to the existing content 
    // an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    // /***CODE */
    // document.querySelectorAll("p")[4].innerHTML += "<img src='task-2-images/one.png' class='newStyle'></img>"


    // /*************************************** */
    // /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
    // then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    // Next, iterate over the colors array, and for each color: 
    // assign the element from innerContainers variable with the same index 
    // (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    // a background using that color.
    // /***CODE */
    // let colors = ['red', 'blue', 'green', 'orange'];
    // let innerContainers = document.querySelectorAll(".inner-container");
    // for (let i = 0; i < colors.length; i++) {
    //     if (innerContainers[i]) {
    //         innerContainers[i].style.backgroundColor = colors[i];
    //     }
    // }

    // /*************************************** */
    // /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */
    /* 1C:  In the body of customCreateElement create a new parargraph element*/
    /* 1D:  Set the text of this element to be : `using create Element`*/
    /* 1E:  Set the background of this paragraph element to be green */
    /* 1F:  Set the color of the text in this paragraph element to be white */
    /* 1G: Append this new element to the parent variable within the function. */
    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */
    //1A:
    let allPTagsThree = document.querySelectorAll("p");
    //1B
    function customCreateElement(parent) {
        //1C
        let newElement = document.createElement("p");
        //1D
        newElement.textContent = "using create Element";
        //1E
        newElement.style.backgroundColor = "green";
        //1F
        newElement.style.color = "white"
        //1G
        parent.appendChild(newElement);
    }
    //1H
    for (let pTag of allPTagsThree) {
        customCreateElement(pTag);
    }

    /***EXPLANATION::
     * When running pTag, or each paragraph element through the for loop, it becomes the parent under which the new paragraph element is created, in every paragraph in the HTML.
     * SCREEN GRAB: task-2-images/part_three_1.PNG
     */

    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
    /* 2C:Then append this new element to the parent variable within the function. 
    /* 2D:Finally, return</code> this new element */
    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise let it have the content `ODD`.*/

    /***CODE */

    //2G
    let color = "purple"; // I don't know whether to make it purple or cornflowerblue... the instructions here are not the same as on the website
    let text = "ODD"; // I don't know if BONUS II is still in the assignment... it isn't on the website

    //2E
    for (let i = 0; i < 10; i++) {
        let verticalAlignment = i * 40 + "px";

        for (let j = 0; j < 10; j++) {
            //2F
            let returnedDiv = customNewBoxCreate(document.querySelector("#new-grid"));
            returnedDiv.style.left = j * 40 + "px";
            returnedDiv.style.top = verticalAlignment;
            //2G
            returnedDiv.style.background = color;
            //2H
            returnedDiv.textContent = text;
        }

        if (color === "purple") {
            color = "white";
            text = "EVEN";
        }
        else if (color === "white") {
            color = "purple";
            text = "ODD";
        }
    }

    //2A
    function customNewBoxCreate(parent) {
        //2B
        let newBox = document.createElement("div");
        newBox.classList.add("testDiv");
        //2C
        parent.appendChild(newBox);
        //2D
        return (newBox);
    }

    console.log(document.querySelectorAll(".testDiv")); // this is on the website but not here

    /***EXPLANATION::
     * There are 100 elements with the testDiv class because the grid is made up of 10 by 10 boxes, each with the class testDiv.
     * SCREEN GRAB: task-2-images/part_three_2.png
     */

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder 
        when dividing by three. */

    /***CODE */

    //3C
    let bgColor = "red";

    //3A
    for (let i = 0; i < 10; i++) {
        let verticalAlignment = i * 40 + "px";

        //3B
        let col = (i % 3);

        if (col === 0) {
            //3C
            bgColor = "red"; // the instructions state the first column is red, then orange, then yellow, but the reference image has white...
        }
        else if (col === 1) {
            bgColor = "orange";
        }
        else if (col === 2) {
            bgColor = "yellow";
        }

        for (let j = 0; j < 10; j++) {
            let returnedDiv = customNewBoxCreate(document.querySelector("#new-grid-three"));
            returnedDiv.style.top = j * 40 + "px";
            returnedDiv.style.left = verticalAlignment;
            returnedDiv.style.background = bgColor;
            returnedDiv.textContent = col;
        }


    }

    /***EXPLANATION::
     * The value of "col" is the remainder of the operation i/3. At the third column (or fourth including the first one being the zeroest column), the remainder is 0 since 3/3 leaves no remainder. 1/3 leaves a remainder of 1, 2/3 leaves a remainder of 2. 
     * SCREEN GRAB: task-2-images/part_three_3.PNG
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}