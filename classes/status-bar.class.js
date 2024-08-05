class StatusBar extends DrawableObject {
  IMAGES = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
  ];

  percentage = 100;
  x = 40;
  y = 0;
  width = 200;
  height = 60;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.calcImageIndex()];
    this.img = this.imageCache[path];
  }

  calcImageIndex() {
    switch (this.percentage) {
      case 100:
        return 5;
      case 80:
        return 5;
      case 60:
        return 5;
      case 40:
        return 5;
      case 20:
        return 5;
      case 0:
        return 5;
    }
  }
}
