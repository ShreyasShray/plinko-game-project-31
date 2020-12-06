class Particle{
    constructor(x, y){
    var options = {
        isStatic: false,
        restitution: 0.4
    }
    this.body = Bodies.circle(x, y, 10, options);
    this.color = color(random(0,255), random(0, 255), random(0, 255)); 
    this.radius = 20;
    World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        push();
        fill(this.color);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}