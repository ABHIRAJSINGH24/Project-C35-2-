class Basket2{
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
        this.body1 = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body1);
        this.body2 = Bodies.rectangle(this.x-this.width/2-25,this.y-this.height/2,this.width+50,this.height-50,options);
        World.add(world,this.body2);
        this.body3 = Bodies.rectangle(this.x-this.width/2-25,this.y+this.height/2,this.width+50,this.height-50,options);
        World.add(world,this.body3);
    }
    display(){
    var angle1 = this.body1.angle;
    var pos1 = this.body1.position;

    var angle2 = this.body2.angle;
    var pos2 = this.body2.position;

    var angle3 = this.body3.angle;
    var pos3 = this.body3.position;

    push();
    rotate(angle1);
    translate(pos1.x,pos1.y);
    rectMode(CENTER);
    fill(this.color);
    rect(0,0,this.width,this.height);
    pop();

    push();
    rotate(angle2);
    translate(pos2.x,pos2.y);
    rectMode(CENTER);
    fill(this.color);
    rect(0,0,this.width+50,this.height-50);
    pop();

    push();
    rotate(angle3);
    translate(pos3.x,pos3.y);
    rectMode(CENTER);
    fill(this.color);
    rect(0,0,this.width+50,this.height-50);
    pop();
    }
}