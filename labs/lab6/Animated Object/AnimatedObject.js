var myCircle = {
    x: 25,
    y: 75,
    r: 12.5,
    color: [102, 140, 138]
}

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(197, 219, 218);
    fill(myCircle.color);
    myCircle.x +=1
    myCircle.y +=.5
    myCircle.r +=1
    circle(myCircle.x, myCircle.y, myCircle.r);
}