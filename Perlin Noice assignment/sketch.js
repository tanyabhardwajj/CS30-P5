// Perlin Noice Assignment(Terrain Generation)
// Tanya Bhardwaj
// 12 March 2024
//

//Global Variable
let rectWidth = 2;
let rectHeight;
let randomHeight;
let scrollSpeed = 0;
//for average line
let totalrectHeight = 0;
let rectNumber = 0;
let averageHeight = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function terrain(){
  let time = 0;
  let highestY = 0;
  let highestX = 0;
  let x = 0;
  totalrectHeight = 0;
  rectNumber = 0;
  while(x < width){
    //panning occurs because of scrollspeed
    scrollSpeed += 0.0002;
    randomHeight = noise(time+scrollSpeed);
    randomHeight = map(randomHeight, 0, 1, 0, height * 0.8);
    time += 0.03;
    fill(255, 105, 180);//hot pink color to annoy Mr. Scott
    noStroke();
    rectHeight = height - randomHeight;
    rect(x, height, x + rectWidth, rectHeight);
    x += rectWidth;


    //to determine highest peaks(including the peak's x and y value)
    if(randomHeight > highestY){
      highestY = randomHeight;
      highestX = x - rectWidth;
    }
    if(rectWidth > highestX){
      highestX = x;
    }

    //
    totalrectHeight += rectHeight;
    rectNumber += 1;
  }
  drawFlag(highestX, height - highestY);
}

function drawFlag(x,y){
  let longSquare = 50;
  let square = 20;
  fill(139,0, 0);
  rect(x, y - longSquare, x + 5, y);
  rect(x, y - longSquare - square, x + square, y - longSquare);
}

function averageLine(){
  averageHeight = totalrectHeight / rectNumber;
  stroke(255, 0, 0);//Dark red to annoy Mr. Scott
  strokeWeight(5);
  rect(0, averageHeight, width, averageHeight);
}

function draw() {
  background(220);
  terrain();
  averageLine();
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW){
    if(rectWidth <= 3.5){
      rectWidth = rectWidth + 0.5;
    }
  }
  else if(keyCode === LEFT_ARROW){
    if(rectWidth >= 1){
      rectWidth = rectWidth - 0.5;
    }
  }
}