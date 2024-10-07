class ThrowableObject extends MovableObject {
  constructor() {
    super();
    this.loadImage("./img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.x = 100;
    this.y = 100;
    this.height = 70;
    this.width = 60;
    this.speedY = 30;
    this.speedX = 20;
    this.throw(100, 150);
  }

  throw(x, y) {
    this.x = x;
    this.y = y;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
