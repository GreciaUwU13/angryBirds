class Chain {
   constructor (bodyA, bodyB){
       var options = {
           bodyA: bodyA, 
           bodyB: bodyB,
           estiffness: 0.04,
           length: 10,
} 
this.Chain = Constraint.create(options);
World.add(world, this.Chain);
   }

display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(3);
    line(bird.body.position.x, bird.body.position.y, constrainegLog.body.position.x, constrainegLog.body.position.y);
}
}
