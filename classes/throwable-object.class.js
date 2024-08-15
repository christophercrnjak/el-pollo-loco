class ThrowableObject extends MovableObject {
  x = 100;
  y = 100;
  height = 70;
  width = 60;
  speedY = 30;
  speedX = 20;

  constructor() {
    super();
    this.loadImage("./img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
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
