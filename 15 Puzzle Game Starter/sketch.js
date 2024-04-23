// Puzzle Game Starter
// Tanya
// April 23, 2024
// 

let grid = 
[ [0,   255,   0, 255,   0],
  [0,     0, 255,   0,   0],
  [0,   255, 255,   0, 255],
  [255, 255,   0, 255, 255]
];

let squareSize = 50;
const NUM_ROWS = 4;
const NUM_COLS = 5;

function setup() {
  createCanvas(NUM_COLS*squareSize, NUM_ROWS*squareSize);
}

let row, col;

function draw() {
  row = getCurrY(); 
  col = getCurrX();
  print(row, col);
  background(220);
  drawGrid();
}

function mousePressed(){
  flip(col, row);
}

function flip(x, y){
  if(grid[y][x]===0)grid[y][x] = 255;
  else grid[y][x] = 0;
}

function getCurrY(){
  let constrainY = constrain(mouseY, 0, height-1);
  return int(constrainY/squareSize);
}

function getCurrX(){
  //determine the current column th emouse is in and return a value
  let constrainX = constrain(mouseX, 0, width-1);
  return int(constrainX/squareSize);
}

function drawGrid(){
  //Read data from out 2D array and use the numbers there
  //to set the color of squares which are arranged in Grid Fashion
  for(let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      let fillValue = grid[y][x];
      fill(fillValue);
      square(squareSize*x, squareSize*y, squareSize);
    }
  }
}