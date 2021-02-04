function setup() {
    createCanvas(400,300);
    noStroke();
  }

  function draw() {
      background(161,207,165);

      if( mouseX > 200) {
        fill(191,107,107);
        circle(mouseX,mouseY,20,40)
      }

      if( mouseX < 200) {
        fill(96,123,219);
        circle(mouseX,mouseY,20,40)
    }
  }