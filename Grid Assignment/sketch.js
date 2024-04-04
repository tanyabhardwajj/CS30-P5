// Multi-Coloured Grid
// Tanya Bhardwaj
// 1 March 2007
// - A grid filled with shades of pink
// - Right mouse click increases the size of the squares in the grid
// - Left mouse click decreases the size of the squares in the grid
// - Spacebar click refreshes the grid with different shades of pink

function setup() {
  createCanvas(400, 400);
  makeGrid();
}

function makeGrid() {
  let squareSize = 20;
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      fill(random(255), random(255), random(255));
      rect(x, y, squareSize, squareSize);
    }
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    makeGrid();
  } else if (mouseButton === RIGHT) {
    makeGrid(30); // Change square size to 30
  }
}

function keyPressed() {
  makeGrid();
}

// Challenge Features

function makeGrid(squareSize) {
  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      fill(random(255), random(255), random(255));
      rect(x, y, squareSize, squareSize);
    }
  }
}