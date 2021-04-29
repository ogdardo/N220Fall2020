function Drop(x, y) { //contructor function
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false

    this.show = function() {
        noStroke();
        fill(50, 0, 255);
        ellipse(this.x, this.y, this.r*2, this.r*2); //location/size of ellipse on the screen
    }

    this.evaporate = function() {
        this.toDelete = true;
    }

    this.hits = function(flower) {
        var d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.r + flower.r) {
            return true;
        }   else {
            return false;
        }
    }

    this.move = function() {
        this.y = this.y - 5;
    }
    }