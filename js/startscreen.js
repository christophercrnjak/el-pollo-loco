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
    splashScreen.style.display = "none";
    const rulesDiv = document.getElementById("RulesDiv");
    rulesDiv.style.display = "flex";
  });

  document.getElementById("BackButton").addEventListener("click", () => {
    const rulesDiv = document.getElementById("RulesDiv");
    rulesDiv.style.display = "none";
    splashScreen.style.display = "flex";
  });

  impressum.addEventListener("click", () => {
    splashScreen.style.display = "none";
    const impressumDiv = document.getElementById("ImpressumDiv");
    impressumDiv.style.display = "flex";
  });

  document.getElementById("BackFromImpressum").addEventListener("click", () => {
    const impressumDiv = document.getElementById("ImpressumDiv");
    impressumDiv.style.display = "none";
    splashScreen.style.display = "flex";
  });
});
