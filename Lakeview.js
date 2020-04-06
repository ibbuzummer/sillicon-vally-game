function lakeview(){
    image(img_lake,300,5,785,440);
    textSize(25);
    stroke("red");
    fill(250,0,5);
    if(rescue===false){
      image(img_man,586,360-progress*28,130,(100-5*progress));  
      image(img_dog,590,45,75,55);
    }else if(rescue===true){
      moments.play();
  //    delayR(4000);
      // image(img_man,500,460-i*28,130,(100-5*i));
      // image(img_dog,500,(470-i*30),75,55);
      image(img_rescue,400,400,150,125);
      image(img_dog,590,450,75,55);
      noLoop();
    }else if(rescue==="fail") {  
      image(img_man,370,300,20,20); 
      image(img_dog,590,45,75,55);
      noLoop();
    }
}