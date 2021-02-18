let neapolitan = ["#FA94B5", "#FFDDBD", "#8C6551"]

function setup(){
    createCanvas(750,500);  
}

function draw() {
    for(var i = 0; i < 3; i++) {
        noStroke();
        fill(neapolitan[i]);
        rect(250 *i,0,250,500);
    }
}