class Fish {

    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.vx = Math.random() * 2 + 1;
        this.vy = Math.random() * 2 + 1;
        this.fishBody = document.createElement("div")
    }

    renderFish() {
        this.fishBody.classList.add("fish");
        this.fishBody.style.width = this.size + "px";
        this.fishBody.style.height = this.size + "px";
        this.fishBody.style.borderRadius = this.size + "px";
        this.fishBody.style.background = `rgb(${this.color.r},${this.color.g},${this.color.b})`;
        this.fishBody.style.left = this.x + "px";
        this.fishBody.style.top = this.y + "px";

        //add to the DOM
        document.getElementsByClassName("water")[0].appendChild(this.fishBody);
    }
    
    // Move the squirrel according to its velocity
    move() {
        this.x += this.vx;
        this.y += this.vy;

        let bottomOfAquarium = document.querySelector(".water").getBoundingClientRect().height
        let rightOfAquarium = document.querySelector(".water").getBoundingClientRect().width

        // Bounce off left edge
        if (this.x <= 0) {
            this.vx = this.vx * -1; // flips to positive so the fish goes right now
        }
        
        // Bounce off right edge
        if (this.x + this.size >= rightOfAquarium) {
            this.vx *= -1; // flips to negative so the fish goes left now
        }

        // Bounce off bottom edge
        if (this.y + this.size >= bottomOfAquarium) {
            this.vy *= -1; // flips to negative so the fish goes up now
            this.y += this.vy;
        }

        // Bounce off top edge of water
        if (this.y + (this.size / 2) < 0) {
            this.vy *= -1; // flips to negative so the fish goes down now
            this.y += this.vy;
        }

        this.fishBody.style.left = this.x + "px";
        this.fishBody.style.top = this.y + "px";
    }

}


function distance(x0, y0, x1, y1) {
  return Math.hypot(x1 - x0, y1 - y0);
}