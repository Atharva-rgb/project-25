class Bin{
  constructor(x,y,width,height){
    var options ={
      isStatic : true,
      friction : 0.3,
      density : 1.2  
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height; 
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body); 
  }
  display(){
    push();
    rectMode(CENTER);
    
    rect(this.x,this.y,this.width,this.height);
    pop();  
  }  
  
}