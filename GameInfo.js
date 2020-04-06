class GameInfo {
  constructor(){
        
  }
 
  display(){
    textSize(25);
    stroke(25,10,5);  
    fill(0,0,255);
    this.x=300;
    this.y=100;
    
    
    text('The Game is to rescue a PET DOG  ',300,this.y);
    text('The PET DOG is stranded on the other side of a lake',300,this.y+40);
    text('Construct a Bridge of 10 stones to the other side ',300,this.y+120);
    text('Stones are available on the Left Side ',300,this.y+160);
    text('Select the CORRECT stone from each Row ',300,this.y+200);
    text('Click MOUSE to pick up the stone and make the Bridge ',300,this.y+240);
    text('Only ONE stone in EACH ROW can be moved ',300,this.y+280);
    text('Finish the Bridge before Health runs out ! ', 300,this.y+320);
    text("RESCUE THE PET ... !",300,this.y+400);
    
    fill(255,0,0);
    text('Press SPACE to PLAY  ... ',750,500);
  }
}