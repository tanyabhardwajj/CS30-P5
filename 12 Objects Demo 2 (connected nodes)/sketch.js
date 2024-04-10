// Object Demo 2(Object Interactions)
// Tanya
// 10 April, 2024
// Objects Recap, Perlin Noise, Object Interactions

//Global Variables
let points = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let p of points){
    //this loop is perfect as long as we dont need to delete any items from the array
    p.move();
    p.connect(points);
    p.display();
  }
}

function mouseClicked(){
  // trigger on a full press/release mouse interaction
  points.push(new MovingPoint(mouseX, mouseY));
}

class MovingPoint{
  constructor(x,y){//called once each time we make a project
    //related to position and rendering
    this.x = x;
    this.y = y;
    this.size = 20;
    this.c = color(random(255), random(255), random(255));

    // related to motion
    this.xTime = random(10);
    this.yTime = random(10);
    this.timeShift = 0.01; 
    this. maxSpeed = 5;
  }

  //class methods/functions
  display(){
    fill(this.c);
    noStroke();
    //is the mouse close?
    let d = dist(mouseX, mouseY, this.x, this.y,)
    if(d< reach){
      this.size = map(d, 0, reach, 60, 20);
    }
    else{
      this.size = 20
    }
    circle(this.x, this.y, this.size);
  }

  getX(){return this.x};
  getY(){return this.y};

  connect(pointArray){
    //check if any points are nearby any other points, and if so join with a line segment
    stroke(this.c);
    for(let p of points){
      if(p !== this){
        let d = dist(this.x, this.y, p.getX(), p.getY());
        if(d > reach){
          line(this.x, this.y, p.getX(), p.getY());
        }
      }
    }
  }

  move(){
    //using perlin noise move horizontally/vertically
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;
    this.x += xSpeed;

    //add some wrap around code
    if(this.x < 0) this.x = width;
    else if(this.x > width)this.x = 0;
  }
}