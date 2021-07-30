class Log
{constructor(x,y,height,angle)
    {
        var option={
            'restitution' : 0.8,
            'friction': 1,
            'density': 0.7
        }
        this.body=Bodies.rectangle(x,y,10,height,option);
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,angle);

        this.width=10;
        this.height=height;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();     
    }
}