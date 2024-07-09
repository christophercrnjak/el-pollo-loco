let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      keyboard.UP = true;
      // console.log("ArrowUp auf true");
      break;
    case "ArrowDown":
      keyboard.DOWN = true;
      // console.log("ArrowDown auf true");
      break;
    case "ArrowLeft":
      keyboard.LEFT = true;
      // console.log("ArrowLeft auf true");
      break;
    case "ArrowRight":
      keyboard.RIGHT = true;
      // console.log("ArrowRight auf true");
      break;
    case " ":
      keyboard.SPACE = true;
      // console.log("Space auf true");
      break;
    default:
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowUp":
      keyboard.UP = false;
      // console.log("ArrowUp wieder auf false");
      break;
    case "ArrowDown":
      keyboard.DOWN = false;
      // console.log("ArrowDown wieder auf false");
      break;
    case "ArrowLeft":
      keyboard.LEFT = false;
      // console.log("ArrowLeft wieder auf false");
      break;
    case "ArrowRight":
      keyboard.RIGHT = false;
      // console.log("ArrowRight wieder auf false");
      break;
    case " ":
      keyboard.SPACE = false;
      // console.log("Space wieder auf false");
      break;
    default:
      break;
  }
});
