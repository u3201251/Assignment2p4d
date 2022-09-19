/*
    Paste the code for your week 5 exercise below.
*/
// setting up points of crosshair for shrinking/expanding animation

let y1 = 215;
let y2 = 215;
let x3 = 285;
let x4 = 285;

// directional ques

let goDown = false;
let goUp = false;
let goLeft = false;
let goRight = false;

// Location variable for x and y
let midx = 250;
let midy = 250;

function setup() {
  createCanvas(500, 500);
  noFill();
  stroke(255);
  strokeWeight(50);
}

function draw() {
  background('gold')
  
  // Circles gradually getting smaller and moving off centre
  fill('red');
  circle(midx, midy, 350);
  
  fill('white');
  noStroke(0);
  circle(midx+10, midy-10, 300);
  
  fill('red');
  noStroke(0);
  circle(midx+20, midy-20, 230);
  
  fill('white');
  noStroke(0);
  circle(midx+27, midy-25, 180);
  
  fill('red');
  noStroke(0);
  circle(midx+35, midy-35, 65);
  
  // Crosshairs
  strokeWeight(5);
  stroke('gold');
  // Top and bottom crosshair
  line(285, 155, 285, y1);
  line(285, 275, 285, y2);
  // Right and left crosshair
  line(230, 215, x3, 215);
  line(x4, 215, 340, 215);
  
  // Crosshairs movement
  
  // Top crosshair
  if (goDown == false){
    y1=y1-0.5;
  }
  if (goDown == true){
    y1=y1+0.5;
  }
  if (y1<155){
    goDown = true
  }
  if (y1>215){
    goDown = false
  }
  
  // Bottom crosshair
  if (goUp == false){
    y2=y2+0.5;
  }
  if (goUp == true){
    y2=y2-0.5;
  }
  if (y2>275){
    goUp = true
  }
  if (y2<215){
    goUp = false
  }
  
  // Left crosshair
  if (goLeft == false){
    x3=x3-0.46
  }
  if (goLeft == true){
    x3=x3+0.46
  }
  if (x3<230){
    goLeft = true
  }
  if (x3>285){
    goLeft = false
  }
  
  // Right crosshair
  if (goRight == false){
    x4=x4+0.46
  }
  if (goRight == true){
    x4=x4-0.46
  }
  if (x4<285){
    goRight = false
  }
  if (x4>340){
    goRight = true
  }
}
