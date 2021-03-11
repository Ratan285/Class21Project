
var music;
var greenBox,blueBox,yellowBox,redBox,ball;
var y;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
  createCanvas(800,600);

  greenBox=createSprite(100,580,180,20);
  greenBox.shapeColour="green";

  blueBox=createSprite(300,580,180,20);
  blueBox.shapeColour="blue";

  yellowBox=createSprite(500,580,180,20);
  yellowBox.shapeColour = "yellow"

  redBox=createSprite(700,580,180,20);
  redBox.shapeColour= "red";

  ball = createSprite(random(20,750),40,20,20);
  ball.shapeColour="white";
  ball.velocityX=(random(-2,7));
  ball.velocityY=5;
  


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();

    ball.bounceOff(blueBox);
    ball.bounceOff(yellowBox);
    ball.bounceOff(redBox);
    ball.bounceOff(greenBox);

    



    //add condition to check if box touching surface and make it box
    
    drawSprites();
}
