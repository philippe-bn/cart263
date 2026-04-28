class FreeStyleObj {
    constructor(x, y, length, f_color, s_color,context) {
      // We write instructions to set up a Flower here
      // Position and size information
      this.x = x;
      this.y = y;
      this.fill_color = f_color;
      this.stroke_color = s_color;
      this.theta = 0;
      this.length = length;
      this.yOffset = 20;
      this.angularSpeed = .07;
      this.context =context;

      // Leah (Leah got help from GenAI with coding)
      this.counter = 0;
      this.r1 = 30; 
      this.micVolume = 0;
    }
  
    display() {
      this.theta =0; //reset everytime
      this.context.fillStyle = this.fill_color; // change the color we are using
      this.context.strokeStyle = this.stroke_color; // change the color we are using
      this.context.lineWidth = 3;
      this.context.beginPath();
      this.context.moveTo(this.x,this.y)

      for(let i =this.x; i< this.x+this.length; i++){
      this.context.lineTo(i,(Math.sin(this.theta)*5)+this.y)
      this.context.lineTo(i,(Math.sin(this.theta)*5)+this.y+this.yOffset)
      this.theta+=this.angularSpeed;
      }
      this.context.stroke(); //set the stroke
    }

    update(){
       let newSize = Math.sin(this.counter) * this.r1 + this.r1;
       this.y = 60 + newSize;
       this.counter += 0.02;

       this.yOffset = 5 + this.micVolume * 0.5;

       this.stroke_color = `hsl(${this.micVolume * 1.8}, 90%, 55%)`;
    }
  }
  