var x=300
var y=60
var x1=50

function setup() {
  createCanvas(600,600);

  rect (300,300,40,50) 
}



function draw() {
  background("skyblue");
rectMode(CENTER)
x=x+1
fill ("green")
  rect (x,300,40,50) 
  y=y+1
x1=x1+1
fill ("red")
ellipseMode(RADIUS)
ellipse(x1,y,20,30)

}