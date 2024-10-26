class DrawableObject {
  x = 100;
  y = 250;
  img;
  imageCache = [];
  currentImage = 0;
  height = 200;
  width = 100;
  offset = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  };

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

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawBorder(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss ||
      this instanceof Coin
    ) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  drawOffsetBorder(ctx) {
    if (this instanceof Character) {
      ctx.beginPath();
      ctx.lineWidth = "2";
      ctx.strokeStyle = "red";

      // Verwende x, y, width, height, um den Rahmen am Charakter auszurichten
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.right - this.offset.left,
        this.height - this.offset.bottom - this.offset.top
      );

      ctx.stroke();
    }
  }
}
