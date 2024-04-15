// Objects in Objects
// Tanya
// 12 April, 2024
// Storing objects IN objects, overwriting objects, basic transformations

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
  angleMode = (DEGREES);
}

function draw() {
  background(0);
  myPlanet.display();
}

function mouseClicked(){
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(mouseX, mouseY);
  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    // myPlanet.x = mouseX;
    // myPlanet.y = mouseY;
   // myPlanet.relocate(mouseX, mouseY);
  }
}

class Planet{
  constructor(x, y){
  this.x = x;
  this.y = y;
  this.s = 100;
  this.moons = [];
  }

  relocate(){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
    for(let m of this.moons){
      m.x = mouseX;
      m.x = mouseY;
    }
  }

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }

  display(){
    circle(this.x, this.y, this.s);
    for (let m of this.moons){
      m.update();
    }
  }
}

class Moon{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.angle = 0;
    this.orbitRadius = 80;
    this.s = 25;
  }

  update(){
    this.move();
    this.display();
  }

  move(){
    this.angle += this.speed;
  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }
}