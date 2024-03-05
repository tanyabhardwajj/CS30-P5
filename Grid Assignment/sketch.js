// Multi-Coloured Grid
// Tanya Bhardwaj
// 1 March 2007
// 


function setup() {
  createCanvas(500, 500);
  grid();
}

function draw() {}

function grid(){
  let x = 0;
  while (x < width){
    x = x + 25;
    let y = 0;
    while (y < height){
      fill(random(255), random(255), random(255));
      square(x, y, 25);
      y = y + 25;
    }
  }
}

