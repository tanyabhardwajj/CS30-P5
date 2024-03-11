// Terrain Gneration Starter
// Tanya
// 11 March
// Procedurally generated 2D Terrain

//Global Variable
let rectWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  drawRectangles();
}

function draw() {
}

function drawRectangles(){
  //using single loop, generate a bunch of side to side rectangles
  //of varying height(pattern, random, noice)
  let rectHeight;
  fill(0);
  for(let x = 0; x < width; x += rectWidth){
    //option 1 - pattern
    //rectHeight = x;

    //option 2 - random()
    rectHeight = random(0, height*0.8);

    //option 3 - 
    rect(x, height/2, rectWidth, rectHeight);
  }
}