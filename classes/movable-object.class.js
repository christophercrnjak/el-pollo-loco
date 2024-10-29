class MovableObject extends DrawableObject {
  speed = 1.5;
  speedY = 0;
  acceleration = 1.5;
  energy = 100;
  lastHit = 0;
  lifebar = 100;
  otherDirection = false;
  jumpStarted = false;

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  applyGravity() {
    setInterval(() => {
      if ((this.isAboveGround() && this.jumpStarted) || (this.speedY > 0 && !this.jumpStarted)) {
        this.jumpStarted = true;
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
      if (this.y >= 185) {
        this.y = 185;
        this.speedY = 0;
        this.jumpStarted = false;
      }
    }, 1000 / 50);
  }

  applyGravityForBottle() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 50);
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
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // difference in ms
    timepassed = timepassed / 1000; // difference in s
    return timepassed < 1;
  }

  isDead() {
    return this.energy <= 0;
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 185;
    }
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
