var myBox = {
    width: 50,
    height: 50,
    xPos: 25,
    yPos: 25,
    color: [209, 187, 134]
}

function setup() {
    createCanvas(400,300);
}

function draw() {
    fill(myBox.color);
    rect(myBox.xPos, myBox.yPos, myBox.width, myBox.height);
}