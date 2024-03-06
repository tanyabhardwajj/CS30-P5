// Respositioning Rectangles
// Tanya
// 6 March, 2024
// Creating some geometry that can be picked up and moved around

//global variables
let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let pickedUp = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; 
  y = height/2;
  rWidth = 200;
  rHeight = 100;
}

function updateEdgePositions(){
  // update the top, right, bottom, left values
  rLeft = x - width/2;
  rRight = x + rWidth/2;
  rTop = y - rHeight/2;
  rBottom = y + rHeight/2;
}

function inRectangle(){
  //returns true if the mouse is within the rect
  if(mouseX <rRight && mouseX > rLeft){
    if(mouseY > rTop && mouseY<rBottom){
      return true;
    }
  }
  return false;
}

function drawRectangle(){
  // render the rect. calculate any movement
  updateEdgePositions();
  print("L:", rLeft, "\tT:", rTop, "\tR:", rRight, "\b", rBottom)

  if(inRectangle()){
    fill(100,250,150);
  }
  else{
    fill(255);
  }
  //check if the rect is picked up or not
  if(pickedUp){
    x = mouseX;
    y = mouseY;
  }
  rect(x, y, rWidth, rHeight);
}

function mousePressed(){
  //triggers exactly once per click only on mouse down 
  if(inRectangle()){
    pickedUp = true;
  }
}

function mouseReleased(){
  pickedUp = false;
}

function draw() {
  background(220);
  drawRectangle();
}