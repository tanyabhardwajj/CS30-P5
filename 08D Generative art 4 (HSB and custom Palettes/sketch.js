// HSB and custom Palettes
// Tanya
// 26 March 2023

let rectWidth = 50; 
let rectHeight = 10;
let colors = ["#93DFB8", "#FFC8BA", "#E3AAD6", "#B5D8EB", "#FFBDD8"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1);
  drawHSB(width*0.4);
  drawcustom(width*0.7);
}

function drawcustom(x){
  //darw a stack of rectangles at x=x, Using RGB random
  colorMode(RGB);
  let index = 0;
  for(let y = 0; y < height; y += rectHeight){
    //option 1 cycle through the paletter
    fill(colors[index%5]);

    //option 2 random selection
    fill(colors[]);
    rect(x, y, rectWidth, rectHeight);
    index++;
  }
}

function drawRGB(x){
  //darw a stack of rectangles at x=x, Using RGB random
  colorMode(RGB);
  for(let y = 0; y < height; y += rectHeight){
    fill(random(255), random(255), random(255));
    rect(x, y, rectWidth, rectHeight);
  }
}

function drawHSB(x){
  //darw a stack of rectangles at x=x, Using HSB random 360
  colorMode(HSB);
  for(let y = 0; y < height; y += rectHeight){
    let hue = map(y, 0, height, 0, 360);
    fill(hue, 360, 360);
    rect(x, y, rectWidth, rectHeight);
  }
}

