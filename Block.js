class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      //rectMode(CENTER);
     // rect(pos.x,pos.y,this.width, this.height);
     if(this.body.speed < 3){
      var angle = this.body.angle
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      image(this.image, 0,0, this.width, this.height)
      pop();
     }
     else{
       push();
       tint(255,this.visibility)
       image(this.image, 0,0, this.width, this.height)
       this.visibility-=5
       World.remove(world, this.body)
       pop();
     }
    }
}