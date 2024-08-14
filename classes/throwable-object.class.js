class ThrowableObject extends MovableObject {
  x = 200;
  y = 350;
  height = 90;
  speedY = 30;
  speedX = 20;

  constructor() {
    super();
    this.loadImage("./img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.throw(20, 30);
  }

  throw(x, y) {
    this.x = x;
    this.y = y;
    this.applyGravity();
  }
}
