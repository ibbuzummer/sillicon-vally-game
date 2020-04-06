var luck,moments,Help;
var img_lake,  img_man, img_dog, img_rescue;


var noRows=10, noCols=10;

var item;
var pyramidA=[], pyramidx=50, pyramidy=410; 
var bridgeA=[], bridgex=60, bridgey=425;//actual bridge

var bridge1A=[], bridge1x=60,bridge1y=425;//bridge  shown in info sheet
var pyramid, bridge, bridge1,crossingA=[];

var health=350; var progress=0;

var rescue=false;
var delay=false; var time;
var inforead=false;//when false info sheet is shown

  
function preload() {
  img_background = loadImage("assets/bg.png");
  // img_lake=loadImage("assets/lake1.jpg");
  // img_lake=loadImage("assets/lake7.jpg");
  img_lake=loadImage("assets/lake3.jpg");
  img_man=loadImage("assets/man.png");
  img_dog=loadImage("assets/dog2.png");
  img_rescue=loadImage("assets/boy.png");
  luck = loadSound("assets/luck.mp3");
  moments = loadSound("assets/moments.mp3");
  Help = loadSound("assets/help.mp3");
}

function setup(){
    var canvas = createCanvas(1100,550);
    
    pyramid=new Pyramid(pyramidx,pyramidy,noRows,noCols);
    bridge=new Pyramid(bridgex,bridgey,noRows,noCols);
    bridge.constBridge();
    bridge1=new Pyramid(bridge1x,bridge1y,noRows,noCols);
    bridge1.constBridge1();
    message=new Message();
    gameinfo=new GameInfo();

}

function draw() {
  background("cyan");
  
  pyramid.constPyramid();

  if(inforead===false){
    gameinfo.display();
   bridge1.bridge1Show();
  }  
   
  keyPress();
  
  if (inforead==true){
    lakeview();
    bridge.bridgeShow();
    checkMouse();
 
    if(checkMouse()!=true){
      if (mouseIsPressed){
        delayR(400);
        health=health-20;
      }
    }

    progress=crossingA.length;//shows the no of tiles placed in the bridge 
    if (progress===10){ //rescue--success
      rescue=true;
    }
    if (health<0){//rescue--failed
      rescue="fail";
      Help.play();
    }
    message.display();
  }
} 

//*************************draw ENDS**********************
function checkMouse(){
  if(mouseIsPressed){
    this_x = mouseX;
    this_y = mouseY;
    for(let i=0;i<noRows;i++){
      if(this_x>bridgeA[i].x-10 && this_x<bridgeA[i].x+10){
        if (this_y>bridgeA[i].y-15 && this_y<bridgeA[i].y+15 ){
          crossingA[i]=bridgeA[i];
          crossingA[i].x=620;
          delayR(400);
          luck.play();
          health=health+20;
          return(true);
        }
      } 
    }
  }
}

function delayR(time){
  delay=false;
  var time1=millis();
  while (delay===false){
    var time2=millis();
    if(time2-time1>time){
      delay=true;  
    }
  }
}  


function keyPress() {
  if(keyIsPressed){ 
    if (keyCode ===32) {
      inforead=true;
    }else{
      inforead=false;
    }  
  }
}      
