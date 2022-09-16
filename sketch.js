let spritedata; //Data for each frame on the spritesheet
let spritesheet; //Linking to .png file
let ships = []; //Array for storing ship objects within Sprite class.
let animation = []; //Array for animation frames on the spritesheet. Referenced by Sprite class

function preload(){ //Load external stuff 
  spritedata = loadJSON('ship1.json')
  spritesheet = loadImage('ship.png')
}

function setup(){
  createCanvas(800, 800);


  let sprites = spritedata.frames //'sprites' now calls up the frame number in the spritesheet.

  for(let i =0; i < sprites.length; i++) {//Loops through the animation frames up to max frame number
    let pos = sprites[i].position
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h)
    animation.push(img) //pushes the array by one frame and thus assigns the right 
                        //coordinates to each image (frame of animation) in the array.)
  }

for (let i = 0; i < 1; i++) {
ships[i] = new Sprite(animation, 400 , 400); //creates x number of Sprite objects in ship array
} 

}

function draw() {
  background(50);

  for (let ship of ships){ //makes x number of Sprite objects based on the max size of ships array
  
  ship.update();
  ship.show();
 
  ship.animate(); // runs all functions defined below within Sprite class

  }

for (ship of ships){


  if (keyIsDown(LEFT_ARROW)) { //broken
    ship.turn(-0.03);
  } else if (keyIsDown(RIGHT_ARROW)) { //broken
    ship.turn(0.03);
  } else if (keyIsDown(UP_ARROW)) { //Working but thrusts up-right???
    ship.thrust();
  }
 
  }

}

class Sprite { //Currently main class for ships and their behaviors
  /// --visual/animation-- ///
  constructor( animation, x, y) { //New values can go here
this.animation = animation; //referencing the animation array to get correct animation frames
this.len = this.animation.length; //determining maximum framecount for the spritesheet
this.index = 0; //starts at first frame on spritesheet
 /// --non-visual elements-- ///
this.x = x; //x and y contain the Sprite object's x,y position and this is assigning them to variables
this.y = y; //
this.pos = createVector(width / 2, height / 2); // gives all Sprite-class objects position vectors for physics
this.heading = 0;  // The angle the ship is facing 
this.damping = 0.995; // Slows ship allowing for easier control at cost of realism
this.velocity = createVector(0, 0); // gives all Sprite-class objects velocity vectors
this.acceleration = createVector(0, 0); // '' acceleration vectors
//this.thrusting = false PROBABLY DONT NEED THIS?
  }

update() {
this.velocity.add(this.acceleration);
this.velocity.mult(this.damping);
this.velocity.limit(this.topspeed);
this.pos.add(this.velocity);
this.acceleration.mult(0); //clears acceleration at end of loop
rotate(this.heading);


}

applyForce(force) {
  this.acceleration.add(force);
}

turn(a) {
  
  this.heading += a;
}

thrust() {
  let angle = this.heading;
  let force = p5.Vector.fromAngle(angle);

  force.mult(0.1)
  this.applyForce(force);

  force.mult(-2);
  
}

  show() {
    let index = Math.floor(this.index % this.len); //RNG
    
   image(this.animation[index], this.pos.x, this.pos.y); //Shows the image at x and y coordinates from 'pos'.

    
  }

  animate() {
   this.index ++; //runs the animation frames by adding 1 to index each frame

    }

  }
