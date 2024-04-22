// Working with forces
// Tanya
// 22 April, 2024
// Making a simple particle system(using vectors)

let particles = [];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(220);
  for(let i = 0; i < 5; i++){
    particles.push(new Particle(mouseX, mouseY));
  }
  for(let i = 0; i < particles.length; i++){
    let p = particles[i];
    p.move();
    p.display();
    if(p.alive === false){
      particles.splice(i, 1);
      i--;
    }
  }
}

class Particle{
  constructor(x, y){
    this.position = createVector(x, y);
    this.size = 20;
    this.velocity = createVector(random(-3, 3), random(-5, -3));
    this.c = color(0, 100, random(150, 255), 100);
    this.alive = true;
  }

  move(){
    //Apply forces first(in this case - add gravity to velocity)
    this.velocity.add(gravity);
    //Apply velocity to position
    this.position.add(this.velocity);
    if(this.position.y > height){
      this.alive = false;
    }
    if(this.position.x < 0){
      this.position.x = 0;
      this.velocity.x *= 0;
    }
  }

  display(){
    fill(this.c); 
    noStroke();
    push();
    translate(this.position.x, this.position.y);
    circle(0,0, this.size);
    pop();
  }
}