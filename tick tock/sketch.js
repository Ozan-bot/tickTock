

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  hr=hour()
  mn=minute()
  sc=second()
  text('Current hour:\n' + hr, 5, 50);
  text('Current minute: \n' + mn, 5, 50);
  text('Current second: \n' + sc, 5, 50);
  angleMode(DEGREES);

  hrAngle=map(hr,0,12,0,360);
  mnAngle=map(mn,0,60,0,360);
  scAngle=map(sc,0,60,0,360);
  
push();
rotate(hrAngle); //hour hand r o t a t e
stroke(500,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(mnAngle); //minute hand r o t a t e
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(scAngle); //second hand r o t a t e
stroke(900,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
}

function draw() {
  background(255,255,255);  
  hrAngle=map(hr,0,12,0,360);
  mnAngle=map(mn,0,60,0,360);
  scAngle=map(sc,0,60,0,360);
  drawSprites();
}





