class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        this.x = this.x + v.x;
        this.y = this.y + v.y;
    }

    sub(v) {
        this.x = this.x - v.x;
        this.y = this.y - v.y;
    }

    mult(n) {
        // The components of the vector are multiplied by a number.
        this.x = this.x * n;
        this.y = this.y * n;
    }

    div(n) {
        this.x = this.x / n;
        this.y = this.y / n;
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
}