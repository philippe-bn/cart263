window.onload = function () {
  // FOR BUILDING THE EXAMPLES :)
  const allRows = document.querySelectorAll(".flex-row");
  let arrayOfShapes_One = [];

  	//INIT ONE:

	for (let i = 0; i < 10; i++) {
    let color = {r:(255 - i * 10),g:50,b:100};
    arrayOfShapes_One.push(
      new CustomShape((i + 1) * 55, 50, "shape", "rectangle", color)
    );}
    add_elements_to_dom(arrayOfShapes_One, allRows[0]);

  function mapArraysShape(arrayOfShapes,row) {
    // MAP ONE
    let arrayOfShapesNew = arrayOfShapes.map(changeShape);
    add_elements_to_dom(arrayOfShapesNew, row);
    
    function changeShape(el){
        return (
        /* need to make a copy */
        new CustomShape(el.x, el.y+100, el.shapeClass,"circle",el.color)
        )}
    }

	 document
    .querySelector("#mapButtonA")
    .addEventListener("click", function() {
      mapArraysShape(arrayOfShapes_One, allRows[0])
    });  

	function mapArraysColor(arrayOfShapes,row) {
    // MAP TWO
    let arrayOfShapesNew = arrayOfShapes.map(changeColor);
    add_elements_to_dom(arrayOfShapesNew, row);
  

    function changeColor(el){
        //take red color
        let newColor = {r:el.color.r, g:125, b:255}
        return (
        /* need to make a copy */
        new CustomShape(el.x, el.y+200, el.shapeClass,el.customShapeClass,newColor)
        )}
    }

	document
    .querySelector("#mapButtonB")
    .addEventListener("click",  function() {
      mapArraysColor(arrayOfShapes_One, allRows[0])
    });

	//INIT TWO:
	let cshape = "";
  let arrayOfShapes_Two =[]
  for (let i = 0; i < 16; i++) {
    let color = { r: 255 - i * 10, g: 50, b: 100 };
    if (i % 2 === 0) cshape = "circle";
    else cshape = "rectangle";
    arrayOfShapes_Two.push(
      new CustomShape((i + 1) * 55, 50, "shape", cshape, color),
    );
  }
  add_elements_to_dom(arrayOfShapes_Two, allRows[1]); 

   function filterArraysXPos(arrayOfShapes, row){
    // FILTER ONE
    let filteredArray= arrayOfShapes.filter(greater_posX);
    
    function greater_posX(el){
        return(
            (el.x > 200)
        )
    }
    add_elements_to_dom(filteredArray, row);
    console.log(filteredArray)
	   //then we can map - to change the y :)
    let arrayOfShapesYChange = filteredArray.map(
        function(el){
            return (new CustomShape(el.x, el.y+100, el.shapeClass,el.customShapeClass,el.color))

    });
    console.log(filteredArray)
    //update
    add_elements_to_dom(arrayOfShapesYChange, row);
    }

	 document
      .querySelector("#filterButtonA")
      .addEventListener("click", function(){filterArraysXPos(arrayOfShapes_Two, allRows[1])});

	function filterArraysByShape(arrayOfShapes, row){
    // FILTER TWO
    let filterArraysShape= arrayOfShapes.filter(shape_filter);
    
    function shape_filter(el){
        return(
            (el.customShapeClass ==='circle')
        )
    }

    //then we can map - to change the y :)
    let arrayOfShapesNew = filterArraysShape.map(
        function(el){
            return (new CustomShape(el.x, el.y+200, el.shapeClass,el.customShapeClass,el.color))

    });
    add_elements_to_dom(arrayOfShapesNew, row);
}

document
      .querySelector("#filterButtonB")
      .addEventListener("click", function(){filterArraysByShape(arrayOfShapes_Two, allRows[1])});

	//INIT THREE
  	//INIT FOUR
  
}