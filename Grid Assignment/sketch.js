// Multi-Coloured Grid
// Tanya Bhardwaj
// 1 March 2007
// - A grid filled with shades of pink
// - Right mouse click increases the size of the squares in the grid
// - Left mouse click decreases the size of the squares in the grid
// - Spacebar click refreshes the grid with different shades of pink

let x;
let y;
let spacing = 30;
let squareSize = 20;


function setup() {
  createCanvas(511, 511);
  document.addEventListener("contextmenu", event => event.preventDefault())
  background(0);
  makeGrid();
}

function makeGrid() {
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      if(x + squareSize <= width && y + squareSize <= height){
      fill(random((200, 250)), random(150, 240), random(175, 255));
      rect(x, y, squareSize, squareSize);
      }
    }
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    if (squareSize < 100){
      background(0);
      squareSize = squareSize/0.5;
      makeGrid();
    }
  } 
  else if (mouseButton === LEFT) {
    if (squareSize > 6.25){
      background(0);
      squareSize = squareSize*0.5; 
      makeGrid(); 
    }
  }
}

function keyPressed() {
  if(keyCode = 32){
  makeGrid();
  }
}

// Challenge Features

