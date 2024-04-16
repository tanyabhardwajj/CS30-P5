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



class Vehicle{
  constructor(x, y){
    this.x = x;
    this. y = y;
    this.type = type;
    this.c = color(random(255), random(255), random(255));
    this.direction = direction;
    this.xSpeed = random(1, 5)*this.direction
  }

  display(){
    fill(this.c);
    if (this.type === 0){
      rect(this.x, this.y, 50, 30);
    }
    else if(this.type === 1){
      rect(this.x, this.c, 70, 40)
    }
  }

  move(){
    this.x += this.xSpeed;
  if(this.x > width && this.direction === 1){
    this.x = -50;
  }
  else if(this.x < -50 && this.direction === -1){
    this.x = width;
  }
  }

  speedUp(){
    if(this.xSpeed < 15 && this.xSpeed > -15){
      this.xSpeed += this.dorection*0.5;
    }
  }

  speedDown(){
    if(this.xSpeed > 0.5 || this.xSpeed < -0.5){
      this.xSpeed -= this.direction*0.5;
    }
  }
}