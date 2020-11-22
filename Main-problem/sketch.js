let conduit_y = 440;
let conduit_h = 10;
let g = 180;
let lava_h = 15;
let drop_y = 470;
let middrop_y = 450;
let lava_x = 90;
let lava_h2 = 10;
let tree_y = 390;
let tree_h = 0;
let y1 = 310;
let y2 = 306;
let y3 = 312;
let y4 = 306;
let y5 = 308;
let whooshSound;
let explosion;
let c1 = 0;
let c2 = 0;

//Preload sounds
function preload() {
  whooshSound = loadSound("whoosh.mp3");
  explosion = loadSound("explosion.mp3");
}

function setup() {
  createCanvas(700, 500);
  background(173, 216, 230);
  whooshSound.play();
  //For slow motion
  //frameRate(5);
}

function draw() {

  noStroke();
  
  //Blue background
  if (conduit_y != 70) {
    background(173, 216, 230);
  }
  //Grey background
  else {
    background(g);
    if (g > 70) {
      g -= 2;
    }
  }
  
  //Volcano
  fill(160,82,45);
  triangle(100, 400, 350, 50, 600, 400)
  fill(125,42,22)
  
  //Volcano Layers
  push();
  rotate(0.62);
  fill(125,42,22)
  rect(340, -112, 10, 375);
  pop();

  push();
  rotate(0.95);
  fill(125,42,22)
  rect(290, -230, 375, 10);
  pop();
  
  push();
  rotate(0.62);
  fill(125,42,22)
  rect(390, -55, 10, 375);
  pop();
  
  push();
  rotate(0.95);
  fill(125,42,22)
  rect(355, -180, 375, 10);
  pop();
  
  push();
  rotate(0.62);
  fill(125,42,22)
  rect(440, 10, 10, 375);
  pop();
  
  push();
  rotate(0.95);
  fill(125,42,22)
  rect(440, -130, 375, 10);
  pop();
  
  //Volcano Cap Up
  if (conduit_y != 70) {
    fill(173, 216, 230);
    triangle(335, 70, 350, 49, 365, 70);
  }
  
  //Earth
  fill(101, 57, 33);
  rect(0, 400, width, 100);
  
  //Earth Layers
  let layer_y = 470;
  fill(139,69,19);
  for (let i = 0; i < 4; i++) {
    rect(0, layer_y, width, 10);
    layer_y -= 20
  }
  
  //Conduit
  fill(255);
  rect(339, 70, 22, 410);
  
  //Magma Chamber
  fill(240, 80, 0);
  arc(350, 490, 200, 100, PI, TWO_PI);
  
  //Ground magma
  fill(240, 80, 0);
  rect(0, 490, width, 10);
  
  //Tree 
  fill(131, 37, 13);
  rect(40, 310, 12, 90);
  fill("green");
  //Foliage
  //Top two
  circle(50, 280, 20);
  circle(40, 280, 20);
  //Middle four
  circle(30, 290, 20);
  circle(60, 290, 20);
  circle(30, 298, 20);
  circle(60, 298, 20);
  //Bottom two
  circle(50, 305, 20);  
  circle(40, 305, 20);
  //Center
  circle(45, 295, 20);
  
  //Tree burn
  if (lava_x <= 50) {
    fill(20, 20, 20);
    rect(40, tree_y, 12, tree_h);
    if (tree_h != 90) {
      tree_h += 30;
      tree_y -= 30;
    }
    //Foliage
    else {
      fill(20, 20, 20);
      //Top two
      circle(50, 280, 20);
      circle(40, 280, 20);
      //Middle four
      circle(30, 290, 20);
      circle(60, 290, 20);
      circle(30, 298, 20);
      circle(60, 298, 20);
      //Bottom two
      circle(50, 305, 20);  
      circle(40, 305, 20);
      //Center
      circle(45, 295, 20);
      c2 += 1;
      if (c2 > 10) {
        //Tree disappear
        fill(70);
        rect(40, tree_y, 12, tree_h);
        //Foliage
        //Top two
        circle(50, 280, 20);
        circle(40, 280, 20);
        //Middle four
        circle(30, 290, 20);
        circle(60, 290, 20);
        circle(30, 298, 20);
        circle(60, 298, 20);
        //Bottom two
        circle(50, 305, 20);  
        circle(40, 305, 20);
        //Center
        circle(45, 295, 20);

        //Tree Crumble
        fill(0);
        circle(36, y1, 5);
        circle(42, y2, 5);
        circle(47, y3, 5);
        circle(50, y4, 5);
        circle(55, y5, 5);
      
        if (y1 != 390) {
          y1 += 2;
        }
        if (y2 != 390) {
          y2 += 2;
        }
        if (y3 != 390) {
          y3 += 2;
        }
        if (y4 != 390) {
          y4 += 2;
        }
        if (y5 != 390) {
          y5 += 2;
        }
      }
    }
  }
  
  //Magma and droplet rising
  if (conduit_y != 70) {
    conduit_y -= 5;
    conduit_h += 5;
    drop_y -= 5;
    middrop_y -= 5;
  }
  
  //Draw conduit
  fill(240, 80, 0);
  rect(339, conduit_y, 22, conduit_h);
  
  //Draw droplet
  fill(255, 152, 98);
  triangle(343, drop_y, 350, middrop_y, 357, drop_y);
  ellipse(350, drop_y, 14, 14);  
  
  //Check if maximum height of conduit is reached
  if (conduit_y == 70) {
    
    //Play explosion sound
    if (c1 == 0) {
      explosion.play()
    }
    //Stop explosion sound
    else if (c1 == 130) {
      explosion.stop()
    }
    c1 += 1;
    //Droplet disappears
    fill(240, 80, 0);
    triangle(343, drop_y, 350, middrop_y, 357, drop_y);
    ellipse(350, drop_y, 14, 14);
    
    //Cloud 1
    fill("grey");
    circle(350, 10, 47);
    circle(322, 22, 40);
    circle(321, 42, 40);
    circle(350, 48, 40);
    circle(379, 42, 40);
    circle(378, 22, 40);
    
    //Clouds 2 and 3
    if (lava_h > 200) {
      //Cloud 2
      fill("grey");
      circle(255, 20, 20);
      circle(265, 20, 20);
      circle(255, 30, 20);
      circle(265, 30, 20);
    }
    if (lava_h > 400) {
      //Cloud 3
      fill("grey");
      circle(200, 10, 20);
      circle(210, 10, 20);
      circle(200, 20, 20);
      circle(210, 20, 20);
    }
    
    //Lava Dome
    fill(240, 80, 0);
    arc(350, 70, 50, 40, PI, TWO_PI);
    
    //Lava flow diagonal left
    push();
    rotate(0.62);
    fill(240, 80, 0);
    rect(304, -152, 10, lava_h);
    pop();
    
    //Lava flow diagonal right
    push();
    rotate(0.95);
    fill(240, 80, 0);
    rect(255, -265, lava_h, 10);
    pop();
    
    //Increase height of lava flow
    if (lava_h != 420) {
      lava_h += 5;
    }
    else {
      //Lava flow horizontal left
      fill(240, 80, 0);
      rect(lava_x, 390, lava_h2, 10);
      
      //Lava flow horizontal right
      fill(240, 80, 0);
      rect(600, 390, lava_h2, 10);
      
      //Increase lava flow horizontal
      if (lava_x > 0) {
        lava_x -= 5;
        lava_h2 += 5;
      }
    }    
  }
  
  //Labelling
  stroke(255);
  line(450, 465, 380, 465);
  fill(255);
  text("Magma Chamber", 462, 468);
  if (drop_y <= 350) {
    line(425, 300, 355, 300);
    text("Conduit", 435, 303);
  }
  if (conduit_y == 70) {
    line(420, 70, 350, 70);
    text("Crater", 432, 73);
  }
  if (lava_h >= 120) {
    line(270, 150, 200, 150);
    text("Surface", 150, 153);
  }  
}