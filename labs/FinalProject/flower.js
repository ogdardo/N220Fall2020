function Flower(x, y) { //contructor function
    this.x = x;
    this.y = y;
    this.r = 30;

    this.xdir = 1;

    this.grow = function() {
        this.r = this.r + 2;
    }

    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += this.r;
    }

    this.move = function() {
        this.x = this.x + this.xdir;
    }

    this.show = function() {
        noStroke();
        fill(255, 0, 200, 150);
        ellipse(this.x, this.y, this.r*2, this.r*2); //location/size of ellipse on the screen
        }
    }