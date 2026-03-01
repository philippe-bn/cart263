class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
    }

    // The static version adds two vectors together and assigns the result to a new vector while leaving the original vectors (v and u in the preceding code blocks) intact. // use new Vector.add from what I understand
    static add(v1, v2) {
        let v3 = new Vector(v1.x + v2.x, v1.y + v2.y);
        return v3;
    }

    sub(v) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
    }

    // my creation based on my understanding of Schiffman's static add
    static sub(v1, v2) {
        let v3 = new Vector(v1.x - v2.x, v1.y - v2.y);
        return v3;
    }

    mult(n) {
        // The components of the vector are multiplied by a number.
        this.x = this.x * n;
        this.y = this.y * n;
    }

    // my creation based on my understanding of Schiffman's static add
    static mult(v, n){
        let v3 = new Vector(v.x * n, v.y * n);
        return v3;
    }

    div(n) {
        this.x = this.x / n;
        this.y = this.y / n;
    }

    // my creation based on my understanding of Schiffman's static add
    static div(v, n){
        let v3 = new Vector(v.x / n, v.y / n);
        return v3;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        let m = this.mag();
        if (m > 0) {
        this.div(m);
        }
    }

    limit(max) {
        if (this.mag() > max) {
            this.normalize();
            this.mult(max);
        }
    }

    // my creation (or attempted copy of p5's setMag) based on my understanding of magnitude and unit vectors
    setMag(n) {
        this.normalize();
        this.mult(n);
    }

    // my creation
    static dist(v1, v2) {
        return Math.sqrt((v2.x - v1.x)*(v2.x - v1.x) + (v2.y - v1.y)*(v2.y - v1.y))
    }
}