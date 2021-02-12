function setup() {
    createCanvas(500,500)
  }
  
  function draw() {
      background(157, 176, 179);
      noFill();

    for(var i = 0; i < 111; i++) {
        circle(250,250, i * 2.25);
    }
  }  