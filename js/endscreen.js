document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("SplashScreen");
  const endScreenDiv = document.getElementById("EndScreenDiv");
  const gameCanvas = document.getElementById("GameCanvas");

  const backtoStartButton = document.getElementById("EndScreenButton");

  backtoStartButton.addEventListener("click", () => {
    endScreenDiv.style.display = "none";
    gameCanvas.style.display = "none";
    splashScreen.style.display = "flex";
  });
});
