// Cars Cars Cars
// Tanya Bhardwaj
// 12 April, 2024
// 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad(){
  rectMode = CENTER;
  fill(0);
  rect(0, height*0.25, width*2, 500)
  while(i = 0, i < width, i++){
    fill(220)
    rect(width/2, height/2, 10, 10);
    line += 10;
  }
}

class Vehicle{
  constructor(x, y){
    this.x = x;
    this. y = y;
    this.xspeed = 5;
  }

  display(){

  }
}