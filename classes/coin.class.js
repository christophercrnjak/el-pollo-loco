class Coin extends CollectableObject {
  constructor() {
    super();
    this.setupCoinAttributes();
    this.loadCoinImages();
  }

  setupCoinAttributes() {
    this.x = 300 + Math.random() * 2000;
    this.y = Math.random() * 50;
    this.height = 120;
    this.width = 120;
    this.offset = {
      left: 45,
      top: 45,
      right: 45,
      bottom: 45,
    };
  }

  loadCoinImages() {
    this.loadImage("img/8_coin/coin_1.png");
  }
}
