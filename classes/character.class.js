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
  IMAGES_DYING = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];

  height = 250;
  y = 185;
  speed = 3;
  world;
  walking_sound = new Audio("./audio/running.mp3");
  offset = {
    left: 15,
    top: 95,
    right: 15,
    bottom: 10,
  };

  isDeadAnimationPlaying = false;
  isHurtAnimationPlaying = false;

  constructor() {
    super();
    this.loadImage("./img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_HURTING);
    this.loadImages(this.IMAGES_DYING);
    this.applyGravityForChar();
    this.animate();
  }

  animate() {
    this.animateMovement();
    this.animateSprite();
  }

  animateMovement() {
    setInterval(() => {
      this.walking_sound.pause();
      if (this.isWalkingLeft()) {
        this.otherDirection = true;
        this.moveLeft();
        this.walking_sound.play();
      }

      if (this.isWalkingRight()) {
        this.otherDirection = false;
        this.moveRight();
        this.walking_sound.play();
      }

      if (this.isJumping()) {
        this.jump();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 120);
  }

  animateSprite() {
    setInterval(() => {
      if (this.isDead()) {
        console.log("Character is dead!");
        this.isHurtAnimationPlaying = false;
        this.isDeadAnimationPlaying = true;
        this.playAnimation(this.IMAGES_DYING);
        if (this.currentImage % this.IMAGES_DYING.length == 6) {
          this.currentImage--;
        }
      } else if (!this.isDead() && this.isHurt() && !this.isHurtAnimationPlaying) {
        this.playHurtAnimation();
      } else if (!this.isDead() && this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else if (!this.isDead() && this.isWalking()) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 1000 / 20);
  }

  playHurtAnimation() {
    this.isHurtAnimationPlaying = true;
    this.playAnimation(this.IMAGES_HURTING);
    setTimeout(() => {
      this.loadImage("./img/2_character_pepe/1_idle/idle/I-1.png");
      this.isHurtAnimationPlaying = false;
    }, this.IMAGES_HURTING.length * 30); // Setze die Verzögerung entsprechend der Dauer der Hurt-Animation
  }

  isWalkingLeft() {
    return this.world.keyboard.LEFT && this.x > 0;
  }

  isWalkingRight() {
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }

  isJumping() {
    return this.world.keyboard.SPACE && !this.jumpStarted;
  }

  isFalling() {
    return this.speedY > 0;
  }
}
