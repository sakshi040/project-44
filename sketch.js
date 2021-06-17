var road1,road2,road3,road4
var car1;
var collider1;

function setup(){
    canvas=createCanvas(displayWidth,displayHeight);
    road1=createSprite(displayWidth/2,displayHeight-100,1000,1000)
    road2 = createSprite(displayWidth+480,displayHeight-800,3000,500)

    collider1=createSprite(30,displayHeight-100,30,1900)
    collider1.shapeColor="white"
   road2.shapeColor = "yellow"
    car1 = createSprite(displayWidth/2,displayHeight-300,50,50)
    car1.shapeColor = "red"
}

function draw(){
//     var rand = Math.round(random(1,10));
//    switch(rand){
//     case 1:background("white");
//     break;
//     case 2:background("black");
//     break;
//     case 3:background("brown");
//     break;
//     case 4:background("pink");
//     break;
//     case 5:background("orange");
//     break;
//     case 6:background("blue");
//     break;
//     case 7:background("turquoise");
//     break;
//     case 8:background("green");
//     break;
//     case 9:background("magenta");
//     break;
//     case 10:background("purple");
//     break;
//     default:break;
//     }
    
    background
    camera.position.x=car1.x
    camera.position.y=car1.y
    if(keyDown("Up_Arrow")){
        car1.y-=5
    }
        if(keyDown("Down_Arrow")){
            car1.y+=5
    }
    if(keyDown("left_Arrow")){
        car1.x-=5
    }
        if(keyDown("right_Arrow")){
            car1.x+=5
    }
car1.collide(collider1);
    drawSprites()
    fill("white")
    text(mouseX+ "," +mouseY,mouseX,mouseY)
}