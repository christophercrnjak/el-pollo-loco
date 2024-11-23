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

  currentImage = 0;
  isDeadAnimationPlaying = false;
  isHurtAnimationPlaying = false;

  constructor() {
    super();
    this.setupCharacterAttributes();
    this.loadCharacterImages();
    this.animate();
  }

  setupCharacterAttributes() {
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

  loadCharacterImages() {
    this.loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 300);
  }

  animateSprite() {
    setInterval(() => {
      if (this.isDead()) {
        debugger;
        console.log("Endboss is dead!");
        this.isHurtAnimationPlaying = false;
        this.isDeadAnimationPlaying = true;
        this.playAnimation(this.IMAGES_DYING);
        if (this.currentImage % this.IMAGES_DYING.length == 6) {
          this.currentImage--;
        }
      } else if (!this.isDead() && this.isHurt() && !this.isHurtAnimationPlaying) {
        this.playHurtAnimation();
      }
    }, 1000 / 20);
  }

  playHurtAnimation() {
    this.isHurtAnimationPlaying = true;
    this.playAnimation(this.IMAGES_HURTING);
    setTimeout(() => {
      this.loadImage("./img/4_enemie_boss_chicken/5_dead/G26.png");
      this.isHurtAnimationPlaying = false;
    }, this.IMAGES_HURTING.length * 30); // Setze die Verzögerung entsprechend der Dauer der Hurt-Animation
  }
}
