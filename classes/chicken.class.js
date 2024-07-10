class Chicken extends MovableObject {
  height = 60;
  width = 70;
  y = 367;
  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  currentImage = 0;
  chicken_sound = new Audio("./audio/chicken.mp3");

  constructor() {
    super();
    this.loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 200 + Math.random() * 400;
    this.speed = this.speed + Math.random() * this.speed;
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    this.chicken_sound.pause();
    this.moveLeft();
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
    this.chicken_sound.play();
  }
}
