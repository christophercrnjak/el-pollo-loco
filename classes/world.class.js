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
  collectedCoins = 0;
  collectedBottles = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  draw() {
    this.prepareCanvas();
    this.drawBackground();
    this.drawCharacter();
    this.resetCanvas();
    this.drawStatusBars();
    this.repeatDrawMethod();
  }

  prepareCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);
  }

  drawBackground() {
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
  }

  drawCharacter() {
    this.addToMap(this.character);
  }

  resetCanvas() {
    this.ctx.translate(-this.camera_x, 0);
  }

  drawStatusBars() {
    this.addToMap(this.statusBarHealth);
    this.addToMap(this.statusBarCoin);
    this.addToMap(this.statusBarBottle);
    this.addToMap(this.statusBarEndboss);
  }

  repeatDrawMethod() {
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
    this.checkCollisions();
    this.throwBottles();
    this.removeThrowableObjects();
  }

  checkCollisions() {
    setInterval(() => {
      this.checkEnemyCollisions();
      this.checkCoinCollisions();
      this.checkBottleCollisions();
      this.checkEndbossWithBottleCollisions();
    }, 50);
  }

  checkEnemyCollisions() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.isAboveGround()) {
          enemy.die();
          this.removeEnemy(index);
          this.character.bounce();
        } else {
          this.character.hit();
          this.updateHealthStatusBar();
        }
      }
    });
  }

  updateHealthStatusBar() {
    this.statusBarHealth.setPercentage(this.character.energy);
  }

  removeEnemy(index) {
    setTimeout(() => {
      this.level.enemies.splice(index, 1);
    }, 400);
  }

  checkCoinCollisions() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        this.level.coins.splice(index, 1);
        this.collectedCoins++;
        this.updateCoinStatusBar();
      }
    });
  }

  throwBottles() {
    setInterval(() => {
      if (this.keyboard.D && this.collectedBottles > 0) {
        let bottle = new ThrowableObject(this.character.x, this.character.y);
        this.throwableObjects.push(bottle);
        this.collectedBottles--;
        this.statusBarBottle.setPercentage(this.collectedBottles * 20);
      }
    }, 200);
  }

  removeThrowableObjects() {
    setInterval(() => {
      this.throwableObjects = this.throwableObjects.filter((bottle) => {
        if (bottle.y >= this.level.level_end_y || bottle.x > this.level.level_end_x) {
          console.log("Bottle removed due to out of bounds:", bottle.x, bottle.y);
          return false;
        }
        return true;
      });
    }, 50);
  }

  updateCoinStatusBar() {
    this.statusBarCoin.setPercentage(this.collectedCoins * 20);
  }

  checkBottleCollisions() {
    this.level.bottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.level.bottles.splice(index, 1);
        this.collectedBottles++;
        this.updateBottleStatusBar();
      }
    });
  }

  updateBottleStatusBar() {
    this.statusBarBottle.setPercentage(Math.round(this.collectedBottles * 20));
  }

  checkEndbossWithBottleCollisions() {
    this.throwableObjects.forEach((bottle, index) => {
      if (this.endboss().isColliding(bottle)) {
        debugger;
        console.log("Bottle position:", bottle.x, bottle.y);
        console.log("Endboss position:", this.endboss().x, this.endboss().y);
        // bottle.explode(); // still to implement animation
        this.removeBottle(index);
        this.endboss().hit(); // needs to be implemented in endboss.class.js
        this.endboss().hitAnimation();
        this.statusBarEndboss.setPercentage(this.character.energy);
      }
    });
  }

  endboss() {
    return this.level.enemies[1];
  }

  removeBottle(bottle) {
    this.level.bottles.splice(bottle, 1);
  }
}
