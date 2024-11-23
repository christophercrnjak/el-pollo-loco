class Chick extends Enemy {
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DYING = ["./img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  constructor() {
    super();
    this.setupChickAttributes();
    this.loadChickImages();
    this.animate();
  }

  setupChickAttributes() {
    this.x = 350 + Math.random() * 2400;
    this.y = 367;
    this.speed = this.speed + Math.random() * 3 * this.speed;
    this.height = 60;
    this.width = 70;
    this.offset = {
      left: 10,
      top: 5,
      right: 10,
      bottom: 5,
    };
  }

  loadChickImages() {
    this.loadImage("./img/3_enemies_chicken/chicken_small/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_DYING);
  }
}
