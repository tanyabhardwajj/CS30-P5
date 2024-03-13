// Perlin Noice Assignment(Terrain Generation)
// Tanya Bhardwaj
// 12 March 2024
//

//Global Variable
let rectWidth = 2;
let rectHeight;

function setup() {
  document.addEventListener("contextmenu", event => event.preventDefault())
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function terrain(){
  let time = 0;
  let x = 0;    
  let tallest = 0;
  let xTallest = 0;
  while(x < width){
    rectHeight = noise(time);
    rectHeight = map(rectHeight, 0, 1, 0, height*0.90);
    if(rectHeight > tallest){
      tallest = rectHeight;
      }
    time += 0.005;
    fill(0);
    rect(x, height , x + rectWidth, height - rectHeight);
    x += rectWidth;
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
