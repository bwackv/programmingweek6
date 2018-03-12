var x = 0;
var speed = 3; 
var y = 0;
var checkbox;

function setup() {
  createCanvas(600, 400);
  background(255, 204, 0);
  checkbox = createCheckbox('clicky click', false);
  checkbox.changed(myCheckedEvent);
}
function myCheckedEvent() {
  if (this.checked()) {
    background(255,0,0)
  } else {
    background(255, 204, 0);
  }
}

function draw() {
 
  stroke(8,1,177);
  strokeWeight(4);
  noFill();
  ellipse(x, y, 100, 100);
  
  if (x > width || x < 0 && y > height || y < 0) { //if x goes to the screen width or 
  //it goes to the left edge (where it would be less than 0)...
    speed = speed * -1 //reverse the direction of the speed
  }
  
 x = x + speed; 
 y = y + speed;
}


