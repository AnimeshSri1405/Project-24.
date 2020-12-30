class Paper {
    constructor(x, y,diameter) {
      var options = {
        
        'restitution':0.3,
          'friction':0.5,
          'density':1.2
         
      }
      this.body = Matter.Bodies.circle(x, y, diameter, options);
    // this.x=x;
     //this.y=y;
     
      this.diameter = diameter;
      World.add(world,this.body)
    }
display(){
 var pos=this.body.position
 fill("yellow")
 //push();
 //translate(pos.x,pos.y)
  ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,this.diameter,this.diameter)
   // pop();
}








}