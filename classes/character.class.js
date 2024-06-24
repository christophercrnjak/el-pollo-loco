class Character extends MovableObject {
  height = 250;
  y = 185;
  constructor() {
    super();
    this.loadImage("../img/2_character_pepe/1_idle/idle/I-1.png");
  }

  jump() {}
}
