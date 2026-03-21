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
        /*
        * "Motion 101" adapted from The Nature of Code, chapter 1
        * https://natureofcode.com/vectors/#motion-with-vectors 
        */
        this.acceleration = new Vector(0,0);
        this.topSpeed = 2.5;
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
    /*
    * Adapted from The Nature of Code, chapter 5, example 5.1 "Seeking a Target"
    */
    move() {
        // this.acceleration = new Vector(Math.random()/-100, Math.random()/100);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    checkEdges() {
        let bottomOfAquarium = document.querySelector(".water").getBoundingClientRect().height;
        let rightOfAquarium = document.querySelector(".water").getBoundingClientRect().width;

        /* 
        * "Stay Within Walls" Steering Behaviour adapted from The Nature of Code, chapter 5, example 5.3
        * https://editor.p5js.org/natureofcode/sketches/fGNwVP3h7
        */ 
        let dir = null;

        // Steer off left edge and right edge
        if (this.position.x - this.size <= 0) {
            // this.velocity.x = this.velocity.x * -1; // flips to positive so the fish goes right now
            dir = new Vector(this.topSpeed, this.velocity.y)
        } else if (this.position.x + this.size*4 >= rightOfAquarium) {
            // this.velocity.x *= -1; // flips to negative so the fish goes left now
            dir = new Vector(-this.topSpeed, this.velocity.y)
        }

        // Bounce off bottom edge and steer off top edge
        if (this.position.y + this.size*2 >= bottomOfAquarium) {
            this.velocity.y *= -1; // flips to negative so the fish goes up now
            this.position.y += this.velocity.y;
            // dir = new Vector(this.velocity.x, -this.topSpeed)
        } else if (this.position.y + (this.size / 2) < 0) {
            // this.velocity.y *= -1; // flips to negative so the fish goes down now
            // this.position.y += this.velocity.y;
            dir = new Vector(this.velocity.x, this.topSpeed)
        }

        if (dir !== null) {
            dir.setMag(this.topSpeed);
            let steer = Vector.sub(dir, this.velocity);
            steer.limit(this.maxForce);
            this.applyForce(steer);
        }
    }

    /*
    * Adapted from The Nature of Code, chapter 2, example 2.1 "Forces"
    * https://natureofcode.com/forces/#creating-forces 
    */
    applyForce(force) {
        this.acceleration.add(force);
    }

    /*
    * "Seek" and "steer" behaviour adapted from The Nature of Code, chapter 5, example 5.1 "Seeking a Target"
    */
    seek(mouse) {
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

    /*
    * "Separate" behaviour adapted from The Nature of Code, chapter 5, "Complex Systems"
    */
    separate(school) {
        // This variable specifies how close is too close.
        let desiredSeparation = 30;
        let sum = new Vector(0,0);
        let count = 0;
        for (let other of school) {
            //{!1 .offset} What is the distance between this vehicle and the other vehicle?
            let d = Vector.dist(this.position, other.position);
            if (this !== other && d < desiredSeparation) {
            //{!1} Any code here will be executed if the vehicle is within 20 pixels.
            let diff = Vector.sub(this.position, other.position);
            diff.setMag(1/d);
            sum.add(diff);
            count++;
            }
        }
        if (count > 0) {
            sum.setMag(this.topSpeed);
            let steer = Vector.sub(sum, this.velocity);
            steer.limit(this.maxForce);
            this.applyForce(steer);
        }
    }

} // class Fish

// class Boid {
//   constructor(x, y) {
//     this.acceleration = createVector(0, 0);
//     this.velocity = createVector(random(-1, 1), random(-1, 1));
//     this.position = createVector(x, y);
//     this.size = 3.0;

//     // Maximum speed
//     this.maxSpeed = 3;

//     // Maximum steering force
//     this.maxForce = 0.05;
//     colorMode(HSB);
//     this.color = color(random(256), 255, 255);
//   }

//   run(boids) {
//     this.flock(boids);
//     this.update();
//     this.borders();
//     this.render();
//   }

//   applyForce(force) {
//     // We could add mass here if we want: A = F / M
//     this.acceleration.add(force);
//   }

//   // We accumulate a new acceleration each time based on three rules
//   flock(boids) {
//     let separation = this.separate(boids);
//     let alignment = this.align(boids);
//     let cohesion = this.cohesion(boids);

//     // Arbitrarily weight these forces
//     separation.mult(1.5);
//     alignment.mult(1.0);
//     cohesion.mult(1.0);

//     // Add the force vectors to acceleration
//     this.applyForce(separation);
//     this.applyForce(alignment);
//     this.applyForce(cohesion);
//   }

//   // Method to update location
//   update() {
//     // Update velocity
//     this.velocity.add(this.acceleration);

//     // Limit speed
//     this.velocity.limit(this.maxSpeed);
//     this.position.add(this.velocity);

//     // Reset acceleration to 0 each cycle
//     this.acceleration.mult(0);
//   }

//   // A method that calculates and applies a steering force towards a target
//   // STEER = DESIRED MINUS VELOCITY
//   seek(target) {
//     // A vector pointing from the location to the target
//     let desired = p5.Vector.sub(target, this.position);

//     // Normalize desired and scale to maximum speed
//     desired.normalize();
//     desired.mult(this.maxSpeed);

//     // Steering = Desired minus Velocity
//     let steer = p5.Vector.sub(desired, this.velocity);

//     // Limit to maximum steering force
//     steer.limit(this.maxForce);
//     return steer;
//   }

//   render() {
//     // Draw a triangle rotated in the direction of velocity
//     let theta = this.velocity.heading() + radians(90);
//     fill(this.color);
//     stroke(255);
//     push();
//     translate(this.position.x, this.position.y);
//     rotate(theta);
//     beginShape();
//     vertex(0, -this.size * 2);
//     vertex(-this.size, this.size * 2);
//     vertex(this.size, this.size * 2);
//     endShape(CLOSE);
//     pop();
//   }

//   // Wraparound
//   borders() {
//     if (this.position.x < -this.size) {
//       this.position.x = width + this.size;
//     }

//     if (this.position.y < -this.size) {
//       this.position.y = height + this.size;
//     }

//     if (this.position.x > width + this.size) {
//       this.position.x = -this.size;
//     }

//     if (this.position.y > height + this.size) {
//       this.position.y = -this.size;
//     }
//   }

//   // Separation
//   // Method checks for nearby boids and steers away
//   separate(boids) {
//     let desiredSeparation = 25.0;
//     let steer = createVector(0, 0);
//     let count = 0;

//     // For every boid in the system, check if it's too close
//     for (let boid of boids) {
//       let distanceToNeighbor = p5.Vector.dist(this.position, boid.position);

//       // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
//       if (distanceToNeighbor > 0 && distanceToNeighbor < desiredSeparation) {
//         // Calculate vector pointing away from neighbor
//         let diff = p5.Vector.sub(this.position, boid.position);
//         diff.normalize();

//         // Scale by distance
//         diff.div(distanceToNeighbor);
//         steer.add(diff);

//         // Keep track of how many
//         count++;
//       }
//     }

//     // Average -- divide by how many
//     if (count > 0) {
//       steer.div(count);
//     }

//     // As long as the vector is greater than 0
//     if (steer.mag() > 0) {
//       // Implement Reynolds: Steering = Desired - Velocity
//       steer.normalize();
//       steer.mult(this.maxSpeed);
//       steer.sub(this.velocity);
//       steer.limit(this.maxForce);
//     }
//     return steer;
//   }

//   // Alignment
//   // For every nearby boid in the system, calculate the average velocity
//   align(boids) {
//     let neighborDistance = 50;
//     let sum = createVector(0, 0);
//     let count = 0;
//     for (let i = 0; i < boids.length; i++) {
//       let d = p5.Vector.dist(this.position, boids[i].position);
//       if (d > 0 && d < neighborDistance) {
//         sum.add(boids[i].velocity);
//         count++;
//       }
//     }
//     if (count > 0) {
//       sum.div(count);
//       sum.normalize();
//       sum.mult(this.maxSpeed);
//       let steer = p5.Vector.sub(sum, this.velocity);
//       steer.limit(this.maxForce);
//       return steer;
//     } else {
//       return createVector(0, 0);
//     }
//   }

//   // Cohesion
//   // For the average location (i.e., center) of all nearby boids, calculate steering vector towards that location
//   cohesion(boids) {
//     let neighborDistance = 50;
//     let sum = createVector(0, 0); // Start with empty vector to accumulate all locations
//     let count = 0;
//     for (let i = 0; i < boids.length; i++) {
//       let d = p5.Vector.dist(this.position, boids[i].position);
//       if (d > 0 && d < neighborDistance) {
//         sum.add(boids[i].position); // Add location
//         count++;
//       }
//     }
//     if (count > 0) {
//       sum.div(count);
//       return this.seek(sum); // Steer towards the location
//     } else {
//       return createVector(0, 0);
//     }
//   }
// } // class Boid