class MovableObject {
  x = 100;
  y = 250;
  img;
  height = 200;
  width = 100;
  imageCache = [];
  speed = 1.5;
  otherDirection = false;
  speedY = 0;
  acceleration = 1.5;
  jumpStarted = false;
  energy = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

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

  testCheckCollision() {
    if (
      (character.x + character.width > enemy.x &&
        character.y + character.height > enemy.y &&
        character.x < enemy.x &&
        character.y < enemy.y + chicken.height) ||
      (character.x < enemy.x + enemy.width &&
        character.y < enemy.y + enemy.height &&
        character.x + character.width > enemy.x &&
        character.y + character.height > enemy.y)
    ) {
      // do something
    }
  }

  isColliding(obj) {
    return (
      this.x + this.width > obj.x &&
      this.y + this.height > obj.y &&
      this.x < obj.x &&
      this.y < obj.y + obj.height

      // this.x + this.width >= obj.x &&
      // this.x <= obj.x + obj.width &&
      // this.y + this.offsetY + this.height >= obj.y &&
      // this.y + this.offsetY <= obj.y + obj.height &&
      // obj.onCollisionCourse // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  isHurt() {
    //
  }

  isDead() {
    return this.energy == 0;
  }
}
