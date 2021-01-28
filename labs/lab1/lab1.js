var myColor = "#ff0000";
var white = "#ffffff";
function setup() {
    createCanvas(480,120)
    noStroke();
  }
  
  function draw() {
    background(myColor);
    fill(white);
    triangle(240,15,280,30,170,50);
    quad(280,30,277,90,257,90,250,34.5);
    quad(250,34.5,248,90,230,90,220,40);
    quad(220,40,220,90,205,90,197,45);
    quad(170,50,180,90,194.6,90,197,44);
    quad(220,95,277,97,275,110,230,105);
  }  