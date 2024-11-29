class Endboss extends MovableObject {
  IMAGES_WALKING = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_HURTING = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DYING = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  currentImage = 0;
  isDeadAnimationPlaying = false;
  isHurtAnimationPlaying = false;

  constructor() {
    super();
    this.setupEndbossAttributes();
    this.loadEndbossImages();
    this.animateEndboss();
  }

  setupEndbossAttributes() {
    this.x = 3000;
    this.y = -35;
    this.height = 500;
    this.width = 300;
    this.offset = {
      left: 10,
      top: 75,
      right: 10,
      bottom: 15,
    };
  }

  loadEndbossImages() {
    this.loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_HURTING);
    this.loadImages(this.IMAGES_DYING);
  }

  animateEndboss() {
    setInterval(() => {
      if (this.isDead() && !this.isDeadAnimationPlaying) {
        console.log("Endboss is dead!");
        this.isHurtAnimationPlaying = false;
        this.isDeadAnimationPlaying = true;
        // debugger;
        // this.playAnimation(this.IMAGES_DYING, true);
        this.playDeathAnimation(this.IMAGES_DYING);
      } else if (!this.isDead() && this.isHurt() && !this.isHurtAnimationPlaying) {
        this.playHurtAnimation();
      } else {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 200);
  }

  playHurtAnimation() {
    this.isHurtAnimationPlaying = true;
    this.playAnimation(this.IMAGES_HURTING);
    this.isHurtAnimationPlaying = false;
  }
}
