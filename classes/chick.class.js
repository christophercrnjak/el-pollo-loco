class Chick extends Enemy {
  height = 60;
  width = 70;
  y = 367;

  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DYING = ["./img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  offset = {
    left: 10,
    top: 5,
    right: 10,
    bottom: 5,
  };

  constructor() {
    super();
    this.loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.x = 350 + Math.random() * 2400;
    this.speed = this.speed + Math.random() * 3 * this.speed;
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DYING);
    this.animate();
  }
}
