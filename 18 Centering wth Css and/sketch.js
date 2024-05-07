// CSS, Centering, Sound Loacal Storage
// Tanya
// 7 May 2024
//

let music, bounceSound;
let started = false;
let pos; let vel;

function preload(){
  //function waits for loading...
  music=loadSound("Assets/background.mp3");
  bounceSound = loadSound("Assets/bounceSound.wav");
}

function setup() {
  createCanvas(300, 200); // 4:3  
  pos = createVector(width/2, height/2);
  vel = createVector(5,3);
  textSize(30);
  textAlign(CENTER);
}


function draw() {
  background(220);
  if(started === false){
    text("Click to Begin.", width/2, height/2);
    if(mouseIsPressed){
      started= true;
      music.setVolume(0.1); //0-1  0→0%   1→100%
      music.loop(); //play over and over
    }
  }
  else{  //time to run the program...
    updateBall();
  }
}

function updateBall(){
  pos.add(vel);
  bounceSound.setVolume(0.9);
  if(pos.x < 0 || pos.x > width){
    bounceSound.play();
    vel.x *= -1;
  } 
  if(pos.y < 0 || pos.y > height){
    bounceSound.play();
    vel.y *= -1;
  }
  circle(pos.x, pos.y, 20);
}