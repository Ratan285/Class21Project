var music;
var greenBox,blueBox,yellowBox,redBox,ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
  createCanvas(800,600);

  greenBox=createSprite(100,580,180,20);
  greenBox.shapeColor="green";

  blueBox=createSprite(300,580,180,20);
  blueBox.shapeColor="blue";

  yellowBox=createSprite(500,580,180,20);
  yellowBox.shapeColor = "yellow"

  redBox=createSprite(700,580,180,20);
  redBox.shapeColor= "red";

  ball = createSprite(random(20,750),40,20,20);
  ball.shapeColor="white";
  ball.velocityX=(random(-2,7));
  ball.velocityY=5;
  


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();

    if(ball.isTouching(blueBox)&& ball.bounceOff(blueBox)){
        ball.shapeColor="blue";
    }
    if(ball.isTouching(redBox)&& ball.bounceOff(redBox)){
        ball.shapeColor="red";
    }
    if(ball.isTouching(yellowBox)&& ball.bounceOff(yellowBox)){
        ball.shapeColor="yellow";
    }
    if(ball.isTouching(greenBox)&& ball.bounceOff(greenBox)){
        ball.shapeColor="green";
    }

    /*ball.bounceOff(blueBox);
    ball.bounceOff(yellowBox);
    ball.bounceOff(redBox);
    ball.bounceOff(greenBox);*/
    ball.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box
    
    drawSprites();
}
