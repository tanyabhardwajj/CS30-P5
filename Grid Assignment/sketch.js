// Multi-Coloured Grid
// Tanya Bhardwaj
// 1 March 2007
// - A grid filled with shades of blue
// - Right mouse click increases the size of the squares in the grid
// - Left mouse click decreases the size of the squares in the grid
// - Spacebar click refreshes the grid with different shades of blue

//Global Variables
let squareSize = 20;

function setup() {
  createCanvas(500, 500);
  document.addEventListener("contextmenu", event => event.preventDefault());
  makeGrid();
}

function makeGrid() {
  for (let x = 0; x < width; x += squareSize) {//horizontal lines
    for (let y = 0; y < height; y += squareSize) {//vertical lines
      if(x + squareSize <= width && y + squareSize <= height){
      fill(random((200, 250)), random(150, 240), random(175, 255));//shades of blue
      rect(x, y, squareSize, squareSize);
      }
    }
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    if (squareSize < 100){
      background(0);//fills the blocks falling off with a black
      squareSize = squareSize/0.5;//increase size of the squares
      makeGrid();
    }
  } 
  else if (mouseButton === LEFT) {
    if (squareSize > 6.25){
      background(0);//fills the blocks falling off with a black
      squareSize = squareSize*0.5; //decrease size of the squares
      makeGrid(); 
    }
  }
}

function keyPressed() {
  if(keyCode = 32){//spacebar
  makeGrid();
  }
}