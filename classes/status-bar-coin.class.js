class StatusBarCoin extends DrawableObject {
  IMAGES = [
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
    "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
  ];

  percentage = 100;
  x = 210;
  y = 0;
  width = 200;
  height = 60;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.setPercentage(0);
  }

  setPercentage(score) {
    this.percentage = Math.min(score, 100); // Maximal 100 Punkte
    let path = this.IMAGES[this.calcImageIndex()];
    this.img = this.imageCache[path];
  }

  calcImageIndex() {
    if (this.percentage >= 100) {
      return 5;
    } else if (this.percentage >= 80) {
      return 4;
    } else if (this.percentage >= 60) {
      return 3;
    } else if (this.percentage >= 40) {
      return 2;
    } else if (this.percentage >= 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
