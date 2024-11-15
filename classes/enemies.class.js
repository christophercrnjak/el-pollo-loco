class Enemy extends MovableObject {
  alive = true;

  die() {
    this.alive = false;
    this.playAnimation(this.IMAGES_DYING);
  }

  animate() {
    setInterval(() => {
      if (this.alive) {
        this.moveLeft();
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 100);
  }
}
