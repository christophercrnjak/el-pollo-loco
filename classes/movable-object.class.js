class MovableObject extends DrawableObject {
  speed = 1.5;
  speedY = 0;
  acceleration = 1.5;
  energy = 100;
  lastHit = 0;
  lifebar = 100;
  otherDirection = false;
  jumpStarted = false;
  ground = 185;

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  playAnimation(images, holdLastImage = false) {
    if (this.currentImage >= images.length && holdLastImage) {
      this.img = this.imageCache[images[images.length - 1]];
      return;
    }
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  playDeathAnimation(IMAGES_DYING) {
    let frameDuration = 500;
    let animationIndex = 0;

    let deathAnimationInterval = setInterval(() => {
      if (animationIndex < IMAGES_DYING.length) {
        let path = IMAGES_DYING[animationIndex];
        this.img = this.imageCache[path];
        animationIndex++;
      } else {
        clearInterval(deathAnimationInterval);
        this.img = this.imageCache[IMAGES_DYING[IMAGES_DYING.length - 1]];
      }
    }, frameDuration);
  }

  applyGravityForChar() {
    setInterval(() => {
      if (this.canCharJump()) {
        this.charIsJumping();
      }

      if (this.isCharBelowBottom()) {
        this.resetPositionOfChar();
      }
    }, 1000 / 50);
  }

  canCharJump() {
    return (this.isAboveGround() && this.jumpStarted) || (this.speedY > 0 && !this.jumpStarted);
  }

  charIsJumping() {
    this.jumpStarted = true;
    this.y -= this.speedY;
    this.speedY -= this.acceleration;
  }

  isCharBelowBottom() {
    return this.y >= 185;
  }

  resetPositionOfChar() {
    this.y = 185;
    this.speedY = 0;
    this.jumpStarted = false;
  }

  applyGravityForBottle() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.throwBottle();
      }
    }, 1000 / 50);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < this.ground;
    }
  }

  throwBottle() {
    this.y -= this.speedY;
    this.speedY -= this.acceleration;
  }

  checkIfJumping() {
    setInterval(() => {
      if (this.y === 185) {
        this.started = false;
      }
    }, 100 / 50);
  }

  jump() {
    this.speedY = 25;
  }

  hit() {
    if (!this.isHurt()) {
      this.energy -= 20;
      if (this.energy < 0) {
        this.energy = 0;
      }
      this.saveTimeOfLastHit();
    }
  }

  saveTimeOfLastHit() {
    this.lastHit = new Date().getTime();
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    return timepassed < 1000;
  }

  isDead() {
    return this.energy <= 0;
  }

  isWalking() {
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
  }

  isColliding(obj) {
    return (
      this.x + this.width - this.offset.right >= obj.x + obj.offset.left &&
      this.y + this.height - this.offset.bottom >= obj.y + obj.offset.top &&
      this.x + this.offset.left <= obj.x + obj.width - obj.offset.right &&
      this.y + this.offset.top <= obj.y + obj.height - obj.offset.bottom
    );
  }
}
