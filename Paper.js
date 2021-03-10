class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }
        this.body = Bodies.circle(x, y, 70, options);
        this.radius = radius;
        // this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);

    }
}