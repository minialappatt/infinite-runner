var track;
var car1,car1img
var gameState = 0;

function preload()
{
  trackImg = loadAnimation(
  "../images/0.png",
  "../images/1.png",
  "../images/2.png",
  "../images/3.png",
  "../images/4.png",
  "../images/5.png",
  "../images/6.png",
  "../images/7.png",
  "../images/8.png",
  "../images/9.png",
  "../images/10.png",
  "../images/11.png",
  "../images/12.png",
  "../images/13.png",
  "../images/14.png",
  "../images/15.png",
  "../images/16.png",
  "../images/17.png",
  "../images/18.png",
  "../images/19.png",
  "../images/20.png",
  "../images/21.png",
  "../images/22.png",
  "../images/23.png",
  "../images/24.png",
  "../images/25.png",
  "../images/26.png",
  "../images/27.png",
  "../images/28.png",
  "../images/29.png",
  "../images/30.png",
  "../images/31.png",
  "../images/32.png",
  "../images/33.png",
  "../images/34.png",
  "../images/35.png",
  "../images/36.png",
  "../images/37.png",
  "../images/38.png",
  "../images/39.png",
  "../images/40.png",
  "../images/41.png",
  "../images/42.png",
  "../images/43.png",
  "../images/44.png",
  "../images/45.png",
  "../images/46.png",
  "../images/47.png",
  "../images/48.png",
  "../images/49.png",
  "../images/50.png",
  "../images/51.png",
  "../images/52.png",
  "../images/53.png",
  "../images/54.png",
  "../images/55.png",
  "../images/56.png",
  "../images/57.png",
  "../images/58.png",
  "../images/59.png",
  "../images/60.png",
  "../images/61.png",
  "../images/62.png",
  "../images/63.png",
  "../images/64.png",
  "../images/65.png",
  "../images/66.png",
  "../images/67.png",
  "../images/68.png",
  "../images/69.png",
  "../images/70.png",
  "../images/71.png",
  "../images/72.png",
  "../images/73.png",
  "../images/74.png",
  "../images/75.png",
  "../images/76.png",
  "../images/77.png",
  "../images/78.png",
  "../images/79.png",
  "../images/80.png",
  "../images/81.png",
  "../images/82.png",
  "../images/83.png",
  "../images/84.png",
  "../images/85.png",
  "../images/86.png",
  "../images/87.png",
  "../images/88.png",
  "../images/89.png",
  "../images/90.png",
  "../images/91.png",
  "../images/92.png",
  "../images/93.png",
  "../images/94.png",
  "../images/95.png",
  "../images/96.png",
  "../images/97.png",
  "../images/98.png",
  "../images/99.png",
  "../images/100.png",
  "../images/101.png",
  "../images/102.png",
  "../images/103.png",
  "../images/104.png",
  "../images/105.png",
  "../images/106.png",
  "../images/107.png",
  "../images/108.png",)
  

  startAnim = loadAnimation(
    "../images/s1.png",
    "../images/s2.png",
    "../images/s3.png",
    "../images/s4.png",
    "../images/s5.png",
    "../images/s6.png",
    "../images/s7.png",
    "../images/s8.png",
    "../images/s9.png",
    "../images/s10.png",
    "../images/s11.png",
    "../images/s12.png",
    "../images/s13.png",
    "../images/s14.png",
    "../images/s15.png",
    "../images/s16.png",
    "../images/s17.png",
    "../images/s18.png",
    "../images/s19.png",)
    sim = loadImage("images/f1.png")
    tim = loadAnimation(
      "images/t1.png",
      "images/t2.png",
      "images/t3.png", 
      "images/t4.png",
      "images/t5.png",
      "images/t6.png",
      "images/t7.png",
      "images/t8.png",
      "images/t9.png",
      "images/t10.png",
      "images/t11.png",
      "images/t12.png",
      "images/t13.png",
      "images/t14.png",
      "images/t15.png",
      "images/t16.png",
      "images/t17.png",
      "images/t18.png",
      "images/t19.png",
      "images/t20.png",
      "images/t21.png",
      "images/t22.png",
      "images/t23.png",
      "images/t24.png",
      "images/t25.png",
      "images/t26.png",
      "images/t27.png",
      "images/t28.png",
      "images/t29.png",
      "images/t30.png",
      "images/t31.png",
      "images/t32.png",
      "images/t33.png",
      "images/t34.png",
      "images/t35.png",
      "images/t36.png",
      "images/t37.png",
      "images/t38.png",
      "images/t39.png",
      "images/t40.png",
      "images/t41.png",
      "images/t42.png",
      "images/t43.png",
      "images/t44.png",
      "images/t45.png",
      "images/t46.png",
      "images/t47.png",
      "images/t48.png",
      "images/t49.png",
      "images/t50.png",
      "images/t51.png",
      "images/t52.png",
      "images/t53.png",
      "images/t54.png",
      "images/t55.png",
      "images/t56.png",
      "images/t57.png",
      "images/t58.png",
      "images/t59.png",
      "images/t60.png",
      "images/t61.png",
      "images/t62.png",
      "images/t63.png",
      "images/t64.png",
      "images/t65.png",
      "images/t66.png",
      "images/t67.png",
      "images/t68.png",
      "images/t69.png",
      "images/t70.png",
      "images/t71.png",)

  car1img = loadImage("images/im.png")
  apImg = loadImage("images/akl.png")
  arImg = loadImage("images/akr.png")
  audio = loadSound("h.mp3.mp3")
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  
  road = createSprite(width/2,200,10,10);
  road.addAnimation("running",trackImg);
  road.scale = 2

 car1 = createSprite(700,400,10,10);
 car1.addImage(car1img)
 car1.scale = 1.5;
 
 start = createSprite(500,500,1200,1200)
 start.addAnimation("moving",startAnim)
start.scale = 2

s = createSprite(900,500,15,15);
s.addAnimation("moving",tim);
s.scale = 0.3
cargroup = new Group();

ap = createSprite(950,450,15,15);
ap.addImage(apImg);
ap.scale = 0.4

ar = createSprite(1100,450,15,15);
ar.addImage(arImg);
ar.scale = 0.8






}

function draw() {
  background(rgb(198,135,103))
     // image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5); 
     //road.velocity=1.2;
     if (mousePressedOver(s)) {
       gameState = 1
     }

     if(gameState===0){
      start.visible = true;
     
      road.visible = false;
      car1.visible = false;
      ap.visible = false;
      ar.visible = false;
     }
     if(gameState===1){
      start.visible = false;
      s.visible = false;
      road.visible = true;
      car1.visible = true;
      ap.visible = true;
      ar.visible = true;
      //audio.play();
      //fire1();
     // road.velocityY = 10

     if (road.y > 400)  {
      road.y = 0;
    }

    if (keyDown("LEFT_ARROW")) 
    {
        car1.x = car1.x-5;
    }
    
      if (keyDown("RIGHT_ARROW")) 
    {
        car1.x = car1.x+5;
    }
    car1.depth = background.depth+120

    if (mousePressedOver(ap)) {
      car1.x = car1.x-5
    }

    if (mousePressedOver(ar)) {
      car1.x = car1.x+5
    }

  }
    
     drawSprites();
}
function fire1() {
  if (frameCount % 100 === 0) {
    var car = createSprite(800,100,40,10);
    car.x = Math.round(random(width/2,width/3.4));
  
    car.addImage(sim);
    car.scale = 0.1
   // car.velocityX = Math.round(random(20))
    
     //assign lifetime to the variable
    //car.lifetime = 200;
    car.setCollider("rectangle",199,0,-60,230);
  
    cargroup.add(car);
   // car.debug = true;

      }
  }

