document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("SplashScreen");
  const gameCanvas = document.getElementById("GameCanvas");
  const startButton = document.getElementById("StartButton");
  const rulesButton = document.getElementById("RulesButton");
  const impressum = document.getElementById("Impressum");

  startButton.addEventListener("click", () => {
    splashScreen.style.display = "none";
    gameCanvas.style.display = "block";

    init();
  });

  rulesButton.addEventListener("click", () => {
    alert("Rules:\n1. Collect coins.\n2. Avoid enemies.\n3. Reach the end of the level!");
  });

  impressum.addEventListener("click", () => {
    alert("Game developed by Chris. Thanks for playing!");
  });
});
