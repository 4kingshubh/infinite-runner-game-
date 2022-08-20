var runner, runnerImg
var path ,pathImg




function preload() {
    
    pathImg=loadImage("ground1.png");
    runnerImg=loadImage("runner.png");
   
}

function setup() {
    createCanvas(700, 350);

   
 
path=createSprite(350,200,20,20);
path.addImage("running",pathImg);
path.scale=1.2;
path.velocityX=5;

runner = createSprite(100,100, 20, 20);
 runner.addImage("running", runnerImg);
 runner.scale=0.1;

}

function draw() {
    background(255);

    if (path.x > 701) {
        path.x = width / 2;
      }


    drawSprites();

}