function Ship() { //contructor function
    this.x = width/2;
    this.xdir = 0;

    this.show = function() {
        fill(255);
        rectMode(CENTER); //places the movement from the center
        rect(this.x, height-20, 20, 60); //location/size of rectangle at the bottom of the screen
    }

    this.setDir = function(dir) {
        this.xdir = dir;
    }

    this.move = function(dir) {
        this.x += this.xdir*5; //allows ship to move left or right
    }
}