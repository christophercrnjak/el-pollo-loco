document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("SplashScreen");
  const gameCanvas = document.getElementById("GameCanvas");
  const startButton = document.getElementById("StartButton");

  startButton.addEventListener("click", () => {
    splashScreen.style.display = "none";
    gameCanvas.style.display = "block";

    init();
  });
});
