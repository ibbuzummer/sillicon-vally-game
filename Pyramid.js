class Pyramid{
    constructor(_x,_y,_noRows,_noCols){
        var options={
        }
    this.x=_x,  this.y=_y,
    this.rows=_noRows, this.cols=_noCols
    }

    constPyramid(){
        for (let  i = 0; i<this.rows; i++) {  
            for (let j=0; j<this.cols;j++) {
            fill("blue");
            item = new PyrItem(this.x+j*24,this.y-35*i,20,30);
            pyramidA.push (item);
            }
        }
    }

    constBridge(){
        for (let  i = 0; i<this.rows; i++) {  
            var ranNo=floor(random(6,8));
            var j=ranNo;
            while ( j<this.cols) {
                item = new PyrItem(this.x+j*24,this.y-35*i,20,30);
                bridgeA.push (item);
                j=j+ranNo;   
            }
        }
    }

    constBridge1(){
        for (let  i = 0; i<this.rows; i++) {  
            var ranNo=floor(random(2,4));
            var j=ranNo;
            while ( j<this.cols) {
                item = new PyrItem(this.x+j*24,this.y-35*i,20,30);
                bridge1A.push (item);
                j=j+6+ranNo;   
            }
        }
    }





   
    bridgeShow(){
           fill("red");
        for (let  i = 0; i < bridgeA.length; i++) {  
            item = bridgeA[i];
            item.display();
        }
    }

    bridge1Show(){
        fill("red");
     for (let  i = 0; i < bridge1A.length; i++) {  
         item = bridge1A[i];
         item.display();
     }
 }

}