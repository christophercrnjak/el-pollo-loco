class Bottle extends CollectableObject {
  offset = {
    left: 22,
    top: 60,
    right: 22,
    bottom: 60,
  };
  height = 70;
  width = 60;

  constructor() {
    let x = Math.random() * 2000;
    let y = 350;
    super("img/6_salsa_bottle/salsa_bottle.png", x, y);
  }
}
