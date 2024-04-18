// Cars Cars Cars
// Tanya Bhardwaj
// 12 April, 2024
// 

//Global Variables
let eastbound = [];//left to right
let westbound = [];//right to left

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 20; i++){//generates 20 cars in each lane
    let laneY = random(height/4, height*0.45);//keeps cars in their lane
    let car = new Vehicle(random(width), laneY, color(random(255), random(255), random(255)), 1);//eastbound - cars go left to right
    eastbound.push(car);
    laneY = random(height/2, 2*height/3);
    car = new Vehicle(random(width), laneY, color(random(255), random(255), random(255)), -1);//westbound - cars go right to left
      westbound.push(car);
    }
  }

function draw() {
  background(220);
  drawRoad();//draws the road 
  //used to keep the cars moving
  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action();
  }
  for (let i = 0; i < westbound.length; i++) {
    westbound[i].action();
  }
}

function drawRoad(){
  rectMode = CENTER;
  fill(0);
  rect(0, height*0.25, width*2, 450)
  //white dashes
  for(let i = 0; i < width; i+=40){
    stroke(220);
    strokeWeight(5);
    line(i, height/2, i+=20, height/2);
  }
}



class Vehicle{
  constructor(x, y, color, direction){
    this.x = x;
    this. y = y;
    this.type = Math.floor(Math.random()*2);//0 for car, 1 for truck
    this.c = color;
    this.direction = direction;
    this.xSpeed = random(1, 5)*this.direction
  }

  display(){
    fill(this.c);
    if (this.type === 0){
      rect(this.x, this.y, 50, 30);//cars
    }
    else if(this.type === 1){
      rect(this.x, this.y, 80, 40);//trucks
    }

  }

  move(){
  this.x += this.xSpeed;
  //if cars fall off the screen then the new ones keep generating 
  if(this.x > width && this.direction === 1){
    this.x = -50;
  }
  else if(this.x < -50 && this.direction === -1){
    this.x = width;
  }
  }

  speedUp(){
    if(this.xSpeed < 15 && this.xSpeed > -15){
      this.xSpeed += this.direction*0.5;
    }
  }

  speedDown(){
    if(this.xSpeed > 2 && this.xSpeed < -2){
      this.xSpeed -= this.direction*0.5;
    }
  }

  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }

  action(){
    //used to call all the functions in our class
    this.move();
    if(random(100) < 1){
      this.speedUp();
    }
    if(random(100) < 1){
      this.speedDown();
    }
    if (random(100) < 1){
      this.changeColor();
    }
    this.display();
  }
}