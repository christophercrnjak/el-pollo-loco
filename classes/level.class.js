class Level {
  enemies;
  clouds;
  backgroundObjects;
  level_end_x = 1200;
  coins;

  constructor(enemies, clouds, backgroundObjects, coins) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.coins = coins;
  }
}
