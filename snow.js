class Snow{
    constructor(x,y){
        var options ={
            'friction' : 1.0 ,
            'density' : 1.0
       }
         this.body = Bodies.rectangle(x,y,width,height,options);
         this.width = width;
         this.height = height;
         this.image = loadImage("snow4.webp");
         World.add(world,this.body);
    }
    display(){
     var position = this.body.position;
     push();
     translate(position.x,position.y);
    imageMode(CENTER)
    image(this.image,0,0,this.width,this.height);
    pop();

    }

}