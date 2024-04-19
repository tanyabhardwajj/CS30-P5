// Perlin Noice Assignment(Terrain Generation)
// Tanya Bhardwaj
// 12 March 2024
//

//Global Variable
let rectWidth = 2;
let rectHeight;
let tallest = 0;
let tallest2 = 0;

function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault())
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS); 
}



function drawFlag(x,y){
  let longSquare = 50;
  let square = 20;
  fill(0);
  rect(x, y - longSquare, x + 5, y);
  rect(x, y - longSquare - square, x + square, y - longSquare);
}



function terrain(){
  let time = 0;
  let x = 0;
 
  while(x < width){
    rectHeight = noise(time);
    rectHeight = map(rectHeight, 0, 1, 0, height*0.90);
    time += 0.005;
    fill(255,233,0);
    rect(x, height , x + rectWidth, height - rectHeight);
    x += rectWidth;
    if (rectHeight > tallest){
      tallest = rectHeight;
      tallest2 = x - rectWidth;
    }
    if (rectWidth > tallest2){
      tallest2 = x;
    }
    drawFlag(tallest2, height - tallest);
  }
}

// do a rectWidth if statement for letting the program not crash
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
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

function highestPoint(){

}

function draw() {
  background(220);
  terrain();
}
