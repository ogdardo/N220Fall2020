function setup() {
    createCanvas(1300,100);
  }
  
  function draw() {
    background(227, 223, 179);
    for(var g = 1; g <= 25; g++) {
     if(g % 3 === 0 && g % 5 === 0) {
         fill(101, 144, 184);
         square(g * 50, 37.5, 20, 50)
     }
     else if(g % 5 === 0) {
         fill(113, 235, 133);
         square(g * 50, 37.5, 20, 50)
     }
     else if(g % 3 ===0) {
         fill(150, 96, 181);
         circle(g * 50, 50, 10);
     }
     else {
         fill(0);
         circle(g * 50, 50, 10);
     }
    }
  }  