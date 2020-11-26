class Chain
{
constructor(bodyA, bodyB)
{
   var con_options = 
   {
     bodyA:bodyA,
     bodyB: bodyB,
     stiffness: 0.02,
     length: 50
   }
  this.chain = Constraint.create(con_options);
  World.add(world,this.chain);
}
  display()
  {
    var A = this.chain.bodyA.position;
    var B = this.chain.bodyB.position;
    stroke("red");
    strokeWeight(4);
    line(A.x,A.y,B.x,B.y);
  }
}