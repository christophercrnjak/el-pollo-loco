class Cloud extends MovableObject {
  y = 0;
  width = 200;
  height = 200;

  constructor() {
    super();
    this.loadImage("../img/5_background/layers/4_clouds/1.png");
    this.x = Math.random() * 700;
  }
}
