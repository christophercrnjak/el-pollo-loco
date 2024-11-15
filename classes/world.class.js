class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBarHealth = new StatusBarHealth();
  statusBarCoin = new StatusBarCoin();
  statusBarBottle = new StatusBarBottle();
  statusBarEndboss = new StatusBarEndboss();
  throwableObjects = [];
  coinScore = 0;
  bottleScore = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0);

    this.addToMap(this.statusBarHealth);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarBottle);
    this.addToMap(this.statusBarEndboss);

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => this.addToMap(o));
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);

    // mo.drawBorder(this.ctx);
    // mo.drawOffsetBorder(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }

  setWorld() {
    this.character.world = this;
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.throwObjects();
    }, 200);
  }

  checkCollisions() {
    this.checkEnemyCollisions();
    this.checkCoinCollisions();
    this.checkBottleCollisions();
  }

  // working on die-possibility for enemies - worked in chick.class.js
  checkEnemyCollisions() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.isAboveGround()) {
          enemy.die();
          setTimeout(() => {
            this.remove(index);
          }, 500);
        } else {
          this.character.hit();
          this.statusBarHealth.setPercentage(this.character.energy);
        }
      }
    });
  }

  remove(index) {
    this.level.enemies.splice(index, 1);
  }

  checkCoinCollisions() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        this.level.coins.splice(index, 1);
        this.increaseCoinScore();
      }
    });
  }

  increaseCoinScore() {
    this.coinScore += 20;
    this.statusBarCoin.setPercentage(this.coinScore);
  }

  throwObjects() {
    if (this.keyboard.D) {
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
    }
  }

  checkBottleCollisions() {
    this.level.bottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.level.bottles.splice(index, 1);
        this.increaseBottleScore();
      }
    });
  }

  increaseBottleScore() {
    this.bottleScore += 20;
    this.statusBarBottle.setPercentage(this.bottleScore);
  }
}
