class Paper{
    constructor(x,y){
     var options = {
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
     }   
    this.x = x;
    this.y = y;
    this.radius = 50; 
    this.image = loadImage("images/paper.png");
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    
    World.add(world,this.body);
    }
   display(){
    var angle = this.body.angle;
    push()   
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    fill("blue");
    
    image(this.image,0,0,this.radius,this.radius);
    
    //ellipseMode(RADIUS);
    //ellipse(0,0,this.radius,this.radius);
    
    pop();  
     }


}