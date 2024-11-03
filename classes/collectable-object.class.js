class CollectableObject extends DrawableObject {
  constructor(imagePath, x, y) {
    super();
    this.loadImage(imagePath);
    this.x = x;
    this.y = y;
    this.width = 120;
    this.height = 120;
  }
}
