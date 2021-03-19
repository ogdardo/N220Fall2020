var myCircle = {    //object created for circles
    x: 200, //x value coordinate
    y: 150, //y value coordinate
    r: 25,  // radius for circle
    color: ["#e1ecf2","#9bb1bd","#6e8a99","#4e7082","#2e5163","#1f3f4f","#0f2c3b","#081f2b","#041721","#010f17"], //array of colors
    update: function() {
        background("Grey")
        this.x = mouseX;
        if(mouseIsPressed) {    //supposed to have circle drop when mouse is clicked
            this.x += 4         
        } else {
            this.y = mouseY;
        }
        for(var i = 0; i < 10; i++) {      //for loop for drawing circles that change size & color
            this.r = 25 - i * 2.5;
            fill(this.color[i]);
            circle(this.x + i * 50, this.y, this.r)
        }
    }
}
function setup() {
    createCanvas(1920, 1080);   //creates canvas
}

function draw() {
    myCircle.update();
}