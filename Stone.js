class Stone {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.body = Bodies.rect(x, y,this.width,this.height,options);
      this.radius = this.radius;
      this.image=loadImage("stone.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0, this.width,this.height);
      pop();
    }
  };