class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
  backgroundObjects = [
    new backgroundObject("img/5_background/layers/3_third_layer/1.png"),
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    this.addToMap(this.character);

    this.enemies.forEach((enemy) => {
      this.addToMap(enemy);
    });

    this.clouds.forEach((cloud) => {
      this.addToMap(cloud);
    });

    this.backgroundObjects.forEach((bgo) => {
      this.addToMap(bgo);
    });

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  //New Method to simplify the code
  //   addBackgroundsToMap(objects) {
  //     objects.forEach((o) => {
  //       this.addToMap(o);
  //     });
  //   }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
