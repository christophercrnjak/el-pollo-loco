document.addEventListener("DOMContentLoaded", () => {
  const splashScreen = document.getElementById("SplashScreen");
  const rulesDiv = document.getElementById("RulesDiv");
  const impressumDiv = document.getElementById("ImpressumDiv");
  const gameCanvas = document.getElementById("GameCanvas");

  const startButton = document.getElementById("StartButton");
  const rulesButton = document.getElementById("RulesButton");
  const impressumButton = document.getElementById("ImpressumButton");

  const backFromImpressum = document.getElementById("BackFromImpressum");
  const backFromRules = document.getElementById("BackButton");

  startButton.addEventListener("click", () => {
    splashScreen.style.display = "none";
    gameCanvas.style.display = "block";
    init();
  });

  rulesButton.addEventListener("click", () => {
    splashScreen.style.display = "none";
    rulesDiv.style.display = "flex";
  });

  impressumButton.addEventListener("click", () => {
    splashScreen.style.display = "none";
    impressumDiv.style.display = "flex";
  });

  backFromRules.addEventListener("click", () => {
    rulesDiv.style.display = "none";
    splashScreen.style.display = "flex";
  });

  backFromImpressum.addEventListener("click", () => {
    impressumDiv.style.display = "none";
    splashScreen.style.display = "flex";
  });
});
