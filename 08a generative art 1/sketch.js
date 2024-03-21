// Generative art 1: Diagonal Line tiling
// tanya
// 21 March, 2024
//

gridSpacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  strokeWeight(2);
  drawLines();
}

function draw() {
  randomSeed(100000000000);
  gridSpacing = map(mouseX, 0, width, 60, 10);
  background(220);
  strokeWeight(2);
  drawLines();
}

function diagonalAsc(x,y,s){
  //draw ascending diagonal line at x,y
  line(x - s/2, y + s/2, x + s/2, y - s/2);
}

function diagonalDesc(x,y,s){
  //draw ascending diagonal line at x,y
  line(x + s/2, y + s/2, x - s/2, y - s/2);
}

function drawLines(){
// create diagonal lines on a grid
  for(let x = 0; x<width; x+=gridSpacing){
    for(let y = 0; y<height; y+=gridSpacing){
      let choice = int(random(2));
      if(choice ===0){
      diagonalAsc(x,y,gridSpacing);
      }
      else{
        diagonalDesc(x,y,gridSpacing);
      }
    }
  }

}