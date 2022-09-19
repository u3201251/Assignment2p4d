/*
    Paste the code for your week 3 exercise below.
*/
// Location variable for x and y
let midx = 250;
let midy = 250;
let clickCount = 0;
let tSize = 32;

function setup() {
  createCanvas(500, 500);
  noFill();
  stroke(255);
  strokeWeight(50);
}

function draw() {
  background('gold');
  fill(0);
  
  //Shots (mouse press) counter
  textSize(tSize);
  text( "Shots on target: " + clickCount, tSize, 450, 500);

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
  circle(midx+35, midy-35, 60);
   
  //Mouse location
  fill('black');
  noStroke(0);
  circle(mouseX, mouseY, 20);
  
}

function mousePressed(){
  if ((mouseX > 75) && (mouseX < 425) && (mouseY > 75) && (mouseY < 425))
  clickCount ++;
}
