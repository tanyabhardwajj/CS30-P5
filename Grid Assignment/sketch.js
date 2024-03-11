// Multi-Coloured Grid
// Tanya Bhardwaj
// 1 March 2007
// - A grid filled with shades of pink
// - Right mouse click increases the size of the squares in the grid
// - Left mouse click decreases the size of the squares in the grid
// - Spacebar click refreshes the grid with different shades of pink


//Global Variable
let gridSize = 83.11; // Initial size of the squares


function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault())
  createCanvas(500, 500);
  grid();
}


//function for drawing the grid : draws the grid and fills with
//random shades of pink
function grid() {
  for (let x = 0; x < width; x += gridSize) {//horizontal lines of grid
    for (let y = 0; y < height; y += gridSize) {//vertical lines of grid
      fill(random(200, 255), random(150, 200), random(150, 200)); // Shades of pink
      //using rect to easily fill the squares of the grid
      rect(x, y, gridSize, gridSize);
    }
  }
}


//function for increasing and decreasing the grid size
function mousePressed() {
  if (mouseButton === RIGHT) {
    //makes the program stop at the largest gridSize without 
    //having the squares fall off
    if (gridSize < 166) {
      gridSize = gridSize / 0.5; // to increase the gridSize
      grid();
    }
  }
  else if (mouseButton === LEFT) {
    //makes the program stop at the smallest gridSize without
    //having the squares fall off
    if (gridSize > 41.555) {
      gridSize = gridSize * 0.5; // to decrease the gridSize
      grid();
    }
  }
}

//function for refreshing colors of the grid
function keyPressed() {
  //changes colors when into different shades of pink when SPACEBAR
  //is pressed
  if (key !== ' ') return;
  grid();
} 
