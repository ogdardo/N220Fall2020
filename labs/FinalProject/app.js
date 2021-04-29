var ship;
var flowers = []; //flower array
var drops = []; // drop array

function setup() {
    createCanvas(600, 400);
    ship = new Ship(); //adds ship object
    // drop = new Drop(width/2, height/2); //adds drop object
    for (var i = 0; i < 6; i++) { //loops the flower
        flowers[i] = new Flower(i * 80+80, 60); //creates new flower  
    }
}

function draw() {
    background(51);
    ship.show(); //shows ship that is a constructor function
    ship.move();
    for (var i = 0; i < drops.length; i++) { 
        drops[i].show();
        drops[i].move();
        for (var j = 0; j < flowers.length; j++) { 
            if (drops[i].hits(flowers[j])) {
                flowers[j].grow();
                drops[i].evaporate();
            }
        }
    }
    var edge = false;

    for (var i = 0; i < flowers.length; i++) { 
        flowers[i].show();
        flowers[i].move();

        if(flowers[i].x > width || flowers[i].x < 0) {
            edge = true;
        }
    }

if (edge) {
    for (var i = 0; i < flowers.length; i++) { 
        flowers[i].shiftDown();   //shifts down once it hits the right edge
    }
}

    for (var i = drops.length-1; i >= 0; i--) { 
       if(drops[i].toDelete) {
           drops.splice(i, 1);
       }
    }
}

function keyReleased () {
    if (key != ' ') {
        ship.setDir(0);  
    }
}

function keyPressed() {
    if (key === ' ') { //drops shoots out when spacebar is pressed
        var drop = new Drop(ship.x, height); //drops shoot from center of the ship
        drops.push(drop);
    }

    if (keyCode === RIGHT_ARROW) { 
        ship.setDir(1); //moves ship to the right 1 always
    } else if(keyCode === LEFT_ARROW) {
        ship.setDir(-1); //moves ship to the left 1 always
    }
}