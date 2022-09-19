/*
    Paste the code for your week 4 exercise below.
*/
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
 
}
