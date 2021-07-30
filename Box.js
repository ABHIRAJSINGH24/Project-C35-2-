class Box{
    constructor(x,y,width,height,color){
        var options={
            'density':0.1,
            'friction':3,
            'restitution':0.8,
            'isStatic':true
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    rotate(angle);
    translate(pos.x,pos.y);
    fill(this.color);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
}