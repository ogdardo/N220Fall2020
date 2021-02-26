let colors = ["#eb4034", "#ffed2b", "#47bf49"]

function setup(){
    createCanvas(400,300);  
    background(200);
}

function draw() {
    for(var i = 0; i < colors.length; i++) {
        noStroke();
        fill(colors[i]);
        circle(200,50 + i * 60,30);
    }
}