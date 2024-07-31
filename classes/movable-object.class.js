class MovableObject extends DrawableObject {
  imageCache = [];
  speed = 1.5;
  otherDirection = false;
  speedY = 0;
  acceleration = 1.5;
  jumpStarted = false;
  energy = 100;
  lastHit = 0;
  lifebar = 100;

  drawBorder(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss
    ) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  drawOffsetBorder(ctx) {
    if (this instanceof Character) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "red";
      ctx.rect(
        this.offset.left,
        this.offset.top,
        this.offset.right,
        this.offset.bottom
      );
      ctx.stroke();
    }
  }

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
      if (
        (this.isAboveGround() && this.jumpStarted) ||
        (this.speedY > 0 && !this.jumpStarted)
      ) {
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

  checkIfJumping() {
    setInterval(() => {
      if (this.y === 185) {
        this.started = false;
      }
    }, 100 / 50);
  }

  isAboveGround() {
    return this.y < 185;
  }

  isWalking() {
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
  }

  jump() {
    this.speedY = 25;
  }

  isColliding(obj) {
    return (
      this.x + this.width > obj.x &&
      this.y + this.height > obj.y &&
      this.x < obj.x &&
      this.y < obj.y + obj.height

      // this.x + this.width - this.offset.right > obj.x // + obj.offset.left &&
      // this.y + this.height - this.offset.bottom>= obj.y &&
      // this.x <= obj.x + obj.width &&
      // this.y + this.offsetY <= obj.y + obj.height &&
      // obj.onCollisionCourse // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    );
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
    return this.energy == 0 && !this.isDeadAnimationPlaying;
  }
}
