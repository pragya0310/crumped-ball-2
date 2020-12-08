class PaperBall {
  constructor(x, y) {
    var options = {
        isStatic:false,
        restitution:0.3,
        density:1.4
    }
    this.radius=40;
    this.body = Bodies.circle(x, y,this.radius-5,options);
  
  this.IMG=loadImage("paper.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
  ellipseMode(RADIUS);

    fill("hotPink");
    //ellipse(0, 0,this.radius*2,this.radius*2);
   image(this.IMG,0,0,this.radius,this.radius)
    pop();
  }
};