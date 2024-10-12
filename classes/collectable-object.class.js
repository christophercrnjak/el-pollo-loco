class CollectableObject extends DrawableObject {
  constructor(imagePath, x) {
    super();
    this.loadImage(imagePath);
    this.x = x;
    this.y = 345;
    this.width = 120;
    this.height = 120;
  }
}
