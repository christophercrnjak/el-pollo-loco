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

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  moveLeft(otherDirection) {
    this.x -= this.speed;
    this.otherDirection = otherDirection;
    // this.walking_sound.play();
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
      if ((this.y = 185)) {
        this.started = false;
      }
    }, 100 / 50);
  }

  isAboveGround() {
    return this.y < 185;
  }

  jump() {
    this.speedY = 25;
  }
}
