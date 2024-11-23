class Bottle extends CollectableObject {
  constructor() {
    super();
    this.setupBottleAttributes();
    this.loadBottleImages();
  }

  setupBottleAttributes() {
    this.x = 300 + Math.random() * 2000;
    this.y = 350;
    this.height = 70;
    this.width = 60;
    this.offset = {
      left: 22,
      top: 60,
      right: 22,
      bottom: 60,
    };
  }

  loadBottleImages() {
    this.loadImage("img/6_salsa_bottle/salsa_bottle.png");
  }
}
