let img;
let imge;
function preload() {
  img = loadImage('Assets/download.jpg');
  imge = loadImage('Assets/download (1).jpg');
}



let sceneNum = 0;
let dot = new Mover();
let dots = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 4000; i++) {
    dots[i] = new Mover();
    
}
  
}

function draw() {
  mouseClicked = function() {
    sceneNum++;
  }
  if (sceneNum == 0) {
    background(173, 100, 255);
    fill(255, 7, 255);
    textSize(25);
    text("Guess What?", 100, 100);
    textSize(30);
    text("Click to Start", 200, 200)
  } else if (sceneNum == 1) {
    background(200);
    image(img, mouseX*3, mouseY*3);

    for (let i = 0; i < 4000; i++) {
      dots[i].update();
      dots[i].show();
    }

    rect(mouseX, mouseY,10,10);
    textSize(25);
    text("Drag mouse here",10,70);
    textSize(10);
    text("(Then click again once done)",70,30);
  } else if (sceneNum == 2) {
    background(200, 100, 140);
    fill(255,230,230);
    textSize(30);
    text("You got scared didn't you", 30, 70);
   image( imge,10,200);
}
}




