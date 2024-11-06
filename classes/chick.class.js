class Chick extends MovableObject {
  height = 60;
  width = 70;
  y = 367;

  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DYING = ["img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  // chicken_sound = new Audio("./audio/chicken.mp3");
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
    this.animate();
  }

  // NEW to try kill and remove an enemy
  die() {
    this.playAnimation(this.IMAGES_DYING);
    setTimeout(() => {
      this.remove(); // remove enemy out of game
    }, 500);
  }

  remove() {
    // needs to be written
  }

  animate() {
    // this.chicken_sound.pause();
    setInterval(() => {
      this.moveLeft();
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
    // this.chickenSoundOn();
  }
  chickenSoundOn() {
    this.chicken_sound.play();
  }
}