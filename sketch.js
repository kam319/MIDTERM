var house;
var girl;
var grim;
var die;
//var open door;
var click = 0;
var x;
var y;
var ghost;
var screen1;



function preload(){
   house= loadImage('house.png')
   girl= loadImage('girl.png')
   grim= loadImage('grim.png')
   die= loadImage('youdied.jpg')
   winn= loadImage('win.jpg')
   ghost= loadImage('ghost.png')
}

  function setup(){
  createCanvas(1500,1000);
  x = width;
  y = height/2;


  button = createButton('open');
  button.position(200,500);
  button.mousePressed(open);
  

  button = createButton('open');
  button.position(500,50);
  button.mousePressed(open);

  button = createButton('open');
  button.position(950,50);
  button.mousePressed(open);

  button = createButton('open');
  button.position(1200,70);
  button.mousePressed(win);

  button = createButton('startover');
  button.position(720,750);
  button.mousePressed(startover);
}

function open(){
   //image (die,200,200,200,200);
   click = 1;
}
function startover(){
  click = 2;
}
function win() {
  click = 3;

}

function draw(){
  background(0);
  image(house,0,0,1500,820);
  image(girl,mouseX,mouseY,100,200);
  image(ghost,x,y,100,200);
  y = y + random(-1, 1);
  x = x - 1;
  if (x < 0) {
    x = width;
  }
  
  if(click == 1) {
    background(0);
    image (die,0,0,1400,800);

  }


  if(click ==2){
    background(0);
    image(house,0,0,1500,820);
    image(girl,mouseX,mouseY,100,200);
    image(ghost,x,y,100,200);
    y = y + random(-1, 1);
    x = x - 1;
    if (x < 0) {
      x = width;
    }
  }

  if(click ==3){
    background(0);
    image(winn,0,0,1450,850);
  }
  
}

//js stands for java script , set ups draw once while draw puts up 60 frames per second
