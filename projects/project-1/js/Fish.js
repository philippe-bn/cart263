class Fish {

    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.position = new Vector(this.x,this.y);
        this.size = size;
        this.color = color;
        this.vx = Math.random() * 2 + 1;
        this.vy = Math.random() * 2 + 1;
        this.velocity = new Vector(this.vx, this.vy);
        // this.acceleration = new Vector(Math.random()/100, Math.random()/100);
        this.acceleration = new Vector(0,0);
        this.topSpeed = 2;
        this.maxForce = 0.2;

        this.fishBody = document.createElement("div");
        this.fishTail = document.createElement("div");
    }

    renderFish() {
        this.fishBody.classList.add("fish");
        this.fishBody.style.width = this.size*2 + "px";
        this.fishBody.style.height = this.size + "px";
        this.fishBody.style.borderRadius = "90%";
        this.fishBody.style.background = `rgb(${this.color.r},${this.color.g},${this.color.b})`;
        this.fishBody.style.left = this.position.x + "px";
        this.fishBody.style.top = this.position.y + "px";

        //add to the DOM
        document.getElementsByClassName("water")[0].appendChild(this.fishBody);

        this.fishTail.classList.add("tail");
        this.fishTail.style.width = (this.size + 10)/3.5 + "px";
        this.fishTail.style.height = `inherit`;
        this.fishTail.style.borderRadius = "20% 100% 100% 20%";
        this.fishTail.style.background = `inherit`;
        this.fishTail.style.alignItems = "last baseline";
        this.fishTail.style.justifyItems = "center";

        let angle = Math.atan2(this.velocity.y, this.velocity.x);
        this.fishBody.style.transform = `rotate(${angle}rad)`;

        document.getElementsByClassName("fish")[0].appendChild(this.fishTail);
    }
    
    // Move the fish according to its velocity
    move() {
        // this.acceleration = new Vector(Math.random()/-100, Math.random()/100);
        // this.velocity.add(this.acceleration);
        // this.velocity.limit(this.topSpeed);

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

    }

    checkEdges() {
        let bottomOfAquarium = document.querySelector(".water").getBoundingClientRect().height;
        let rightOfAquarium = document.querySelector(".water").getBoundingClientRect().width;

        // Bounce off left edge
        if (this.position.x <= 0) {
            this.velocity.x = this.velocity.x * -1; // flips to positive so the fish goes right now
        }
        
        // Bounce off right edge
        if (this.position.x + this.size >= rightOfAquarium) {
            this.velocity.x *= -1; // flips to negative so the fish goes left now
        }

        // Bounce off bottom edge
        if (this.position.y + this.size >= bottomOfAquarium) {
            this.velocity.y *= -1; // flips to negative so the fish goes up now
            this.position.y += this.velocity.y;
        }

        // Bounce off top edge of water
        if (this.position.y + (this.size / 2) < 0) {
            this.velocity.y *= -1; // flips to negative so the fish goes down now
            this.position.y += this.velocity.y;
        }
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    seek(mouseX, mouseY) {
        let mouse = new Vector(mouseX, mouseY);
        // console.log(mouse)
        let dir = Vector.sub(mouse, this.position);
        // dir.normalize();
        // dir.mult(0.1);
        dir.setMag(this.topSpeed);

        let steer = Vector.sub(dir, this.velocity);
        steer.limit(this.maxForce);
        this.applyForce(steer);

        // this.acceleration = dir;
        // this.velocity.add(this.acceleration);
        // this.velocity.limit(this.topSpeed);
        // this.position.add(this.velocity);
    }

}


function distance(x0, y0, x1, y1) {
  return Math.hypot(x1 - x0, y1 - y0);
}