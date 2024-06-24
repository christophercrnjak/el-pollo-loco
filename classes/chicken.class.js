class Chicken extends MovableObject {
  height = 60;
  width = 70;
  y = 367;

  constructor() {
    super();
    this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 200 + Math.random() * 400;
  }
}
