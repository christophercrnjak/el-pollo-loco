class Coin extends CollectableObject {
  constructor() {
    let x = Math.random() * 2000; // Zufällige X-Position auf der Karte
    let y = Math.random() * 400; // Zufällige Y-Position
    super("img/8_coin/coin_1.png", x, y); // Bild und Position setzen
  }
}
