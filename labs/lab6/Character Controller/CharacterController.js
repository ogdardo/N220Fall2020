var myCircle = {
    x: 200,
    y: 150,
    r: 25,
    color: ["Black"],
    update: function() {
        background("Grey")
        fill(this.color);
        circle(this.x, this.y, this.r);
        if(keyIsPressed) {
            if(keyCode === 39) {
                myCircle.x +=2;
            }   else if(keyCode === 37) {
                myCircle.x -=2;
            }   else if(keyCode === 38) {
                myCircle.y -=2;
            }   else if(keyCode === 40) {
                myCircle.y +=2;
            }
        }
    }
}
function setup() {
    createCanvas(400, 300);
}

function draw() {
    myCircle.update();
}