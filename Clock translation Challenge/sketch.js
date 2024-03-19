// clock exercise
// tanya
// 19 March, 2024
// ..using basic transformations
// draw base clock
// add animated clock hand(hours, minutes, seconds)

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  drawStaticClock();
  drawClockHands();
}

function drawClockHands(){
  // seconds hand first
  push();
  fill(0);
  stroke(200,0,0);
  rotate(second()*6);
  line(0,0,0,-130);
  pop();

  // minutes hand
  rotate(minute()*6);
  line(0,0,0,-120);
  pop();

  //hour hand
  rotate(hour()*6);
  line(0,0,0,-80);
}

function drawStaticClock(){
  //using basic transformations, draw an analog clock
  //main circle:
  stroke(0);
  translate(width/2, height/2);
  push();
  circle(0,0,300);

  //all the individual ticks
  let count = 0;
  let angle = 6;
  while(count < 60){
    if(count % 5 === 0){
      strokeWeight(3);
      line(110, 0, 140, 0) 
    }
    else{
      strokeWeight(1);
      line(125, 0, 140, 0)
    }
   rotate(angle);
   count++;
  }
}

