//child class #1 - Circle
class CircleObj extends AnimatedObject{
    constructor(x, y){
      super(x, y); //calls the parent class' constructor
      this.size = random(20, 40);
    }
    display(){
      strokeWeight(2);
      if(dist(this.x, this.y, mouseX, mouseY)<this.size/2){
        //mouse is on top of the circle
        fill(255, 0, 0);
      }
      else fill(255);
      circle(this.x, this.y, this.size);
    }
  }