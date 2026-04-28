class DrawingBoard {
  /* Constructor */
  constructor(canvas, context, drawingBoardId) {
    this.canvas = canvas;
    this.context = context;
    this.objectsOnCanvas = [];
    let self = this;

    this.rectColor = {
      r: 200,
      g: 200,
      b: 200,
    };

    this.drawingBoardId = drawingBoardId;
    //each element has a mouse clicked and a mouse over
    this.canvas.addEventListener("click", function (e) {
      self.clickCanvas(e);
    });

    this.canvas.addEventListener("mousemove", function (e) {
      self.overCanvas(e);
    });

    // Norah
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space" && this.drawingBoardId === "partA") {
        this.clearObjects();
      }
    });
  }
  overCanvas(e) {
    //console.log("over");
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    //console.log(this.mouseOffsetX, this.mouseOffsetY);
    //differentiate which canvas
    //you can remove the console.logs ///
    if (this.drawingBoardId === "partA") {
      console.log("in A");

      // Norah
      // added for loop to loop thorugh objects and update their position
      for (let i = 0; i < this.objectsOnCanvas.length; i++) {
        this.objectsOnCanvas[i].x = this.mouseOffsetX;
        this.objectsOnCanvas[i].y = this.mouseOffsetY;
      }
    }
    if (this.drawingBoardId === "partB") {
      console.log("in B");
    }
    if (this.drawingBoardId === "partC") {
      console.log("in C");
    }
    if (this.drawingBoardId === "partD") {
      console.log("in D");
    }
  }

  clickCanvas(e) {
    // console.log("clicked");
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    //console.log(this.mouseOffsetX, this.mouseOffsetY);

    //Norah
    let radius = Math.random() * 30 + 10;
    let fillColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    let strokeColor = `hsl(${Math.random() * 360}, 70%, 40%)`;

    //differentiate which canvas
    //you can remove the console.logs ///
    if (this.drawingBoardId === "partA") {
      console.log("in A");
    }

    // Norah
    // Create new circle
    let newCircle = new CircularObj(
      this.mouseOffsetX,
      this.mouseOffsetY,
      radius,
      fillColor,
      strokeColor,
      this.context,
    );
    // Add to array
    this.addObj(newCircle);

    if (this.drawingBoardId === "partB") {
      console.log("in B");
    }
    if (this.drawingBoardId === "partC") {
      console.log("in C");
    }
    if (this.drawingBoardId === "partD") {
      console.log("in D");

      this.rectColor.r = Math.random() * 256;
      this.rectColor.g = Math.random() * 256;
      this.rectColor.b = Math.random() * 256;
    }
  }
  /* method to add obj to canvas */
  addObj(objToAdd) {
    this.objectsOnCanvas.push(objToAdd);
  }

  /* method to add display objects on canvas */
  display() {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].display();
    }
  }

  /* method to add animate objects on canvas */
  animate() {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.objectsOnCanvas[i].update();
      this.objectsOnCanvas[i].display();
    }
  }

  run(videoElement) {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].update(videoElement);
      this.objectsOnCanvas[i].display();
    }
  }
}
