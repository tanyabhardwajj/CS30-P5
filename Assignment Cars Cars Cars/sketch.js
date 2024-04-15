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
  truck();
}

function drawRoad(){
  rectMode = CENTER;
  fill(0);
  rect(0, height*0.25, width*2, 500)
  for(let i = 0; i < width; i+=40){
    stroke(220);
    strokeWeight(5);
    line(i, height/2, i+=20, height/2);
  }
}

function truck(){
  let truckBody;
  truckBody = rect(width/2, height/2, 80, 50);
  line();
}

function car(){
  //car
  rect(width/2, height/2, )
}

class Vehicle{
  constructor(x, y){
    this.x = x;
    this. y = y;
    this.xspeed = 5;
    this.c = color(random(255), random(255), random(255));
  }

  display(){
   this.x += this.xspeed 
  }
}