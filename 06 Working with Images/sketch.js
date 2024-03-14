// Working with Images
// Tanya
// 3/14/2024
// Loading and display images/animation

let lionL, lionR;
let pinImages = [];
let currentIndex = 0

function preload() {
  //runs before setup
  //wont end until loading is complete
  lionL = loadImage("Assets/lion-left.png");
  lionR = loadImage("Assets/lion-right.png");
  //pin wheel
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("Assets/pin-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(4);
}

function draw() {
  background(220);
  image(lionL, mouseX, mouseY, lionL.width / 2, lionL.height / 2);
  image(pinImages[currentIndex%9], width / 2, height / 2);
  currentIndex++;

}
