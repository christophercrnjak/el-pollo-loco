class MovableObject {
  x = 100;
  y = 250;
  img;
  height = 200;
  width = 100;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  moveRight() {}

  moveLeft() {}
}
