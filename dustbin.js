class Dustbin {
  constructor(x, y,width, height) {
    var options = {
       isStatic:true
    }
    this.body = Bodies.rectangle(x, y,width, height, options);
    this.width =width;
    this.height = height;
    //this.IMG=loadImage("dustbingreen.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    noFill();
    noStroke();
    rect(0,0,this.width,this.height)
    //image(this.IMG,0,0,this.width,this.height)
    pop();
  }
};