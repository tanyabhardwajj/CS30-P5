// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(400, 400);
  let startX = random(width);
  let startY = random(height);
  let endX = startX;
  let endY = random(height);
  for(let i=0; i<width; i++){
    rect(random(width), random(height), random(200), random(200));
  }
}