class Plinko{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 20;
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        push();
        fill("white");
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}