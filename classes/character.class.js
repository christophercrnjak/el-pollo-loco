class Character extends MovableObject {
  IMAGES_WALKING = [
    "./img/2_character_pepe/2_walk/W-21.png",
    "./img/2_character_pepe/2_walk/W-22.png",
    "./img/2_character_pepe/2_walk/W-23.png",
    "./img/2_character_pepe/2_walk/W-24.png",
    "./img/2_character_pepe/2_walk/W-25.png",
    "./img/2_character_pepe/2_walk/W-26.png",
  ];
  IMAGES_JUMPING = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
  ];
  IMAGES_HURTING = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
  ];

  height = 250;
  y = 185; //185
  speed = 3;
  currentImage = 0;
  world;
  walking_sound = new Audio("./audio/running.mp3");

  constructor() {
    super();
    this.loadImage("./img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.applyGravity();
    this.animate();
  }

  animate() {
    this.animateMovement();
    this.animateSprite();
  }

  animateMovement() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.otherDirection = true;
        this.moveLeft();
        this.walking_sound.play();
      }

      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.otherDirection = false;
        this.moveRight();
        this.walking_sound.play();
      }

      if (this.world.keyboard.SPACE && !this.jumpStarted) {
        this.jump();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 120);
  }

  animateSprite() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 1000 / 20);
  }
}
