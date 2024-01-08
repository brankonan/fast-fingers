let timerHtml = document.getElementById("timer");
let countdown;
let input = document.getElementById("wordInput");
let gameStarted = false;
let restartButton = document.getElementById("restartButton");

const textForGame =
  "Brzo, živahno, iskra, radosno, munjevito, brzopleto, živopisno, šareno, razdragano, razdraganost, hitro, grunuti, rasplamsati se, procvetati, bljesak, razleteti se, tresnuti, podivljati, prošlost, veselo, razuzdano, poletno, provijavati, trzati se, trzaj, izgubiti kontrolu, okretati se, promaja, šetati se, prodorno, osvežiti se, zaroniti, mrdnuti se, pribrati se, munje, pomamiti se, iskočiti, jurnuti, razgaliti se, razigrati se, zasjati, vrisak, krik, svetkovati, proslava, trgnuti se, huknuti, potrčati, uzbudljivost, iznenađujuće, žustro, trčati, skakati, zveketati, blesak, žar, pobrkati se, povratiti se, probuditi se, uplašiti se, naborati se, raskriljenost, izbezumiti se, poleteti, podivljati, napor, divljačko, oluja, besneti, raspaliti se, raskopčan, odbrusiti, duh, življe, uzavreli, rasplamsavati se, šuma, nestrpljivo, oduševljavati se, zasjati, nagliti, urlik, naglo, munjevit, munjevito, munja, rastresti, šareno, slobodno, razbuktati se, munjevit, razuzdano, naelektrisati, nestrpljivo, osvežiti se, divljenje, kratak izliv nečega, procvetati, blesak, raspaliti se, treperiti, zaranjati, munjevito, besneti, ubrzanje, munjevito, radosno, munjevito, munjevito, munjevito, munjevito, munjevito.";
let array = textForGame.split(", ");

function startGame() {
  gameStarted = true;
  timer = 60;
  timerHtml.innerText = timer.toString();
  countdown = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timer--;
  timerHtml.innerText = timer.toString();
  if (timer === 0) {
    clearInterval(countdown);
    alert("Vreme je isteklo!");
    gameEnd();
  }
}

input.addEventListener("keydown", (event) => {
  console.log(event);
  if (gameStarted === false) {
    startGame();
  }
});
function gameEnd() {
  gameStarted = false;
  clearInterval(countdown);
  timer = 60;
  input.value = "";
}
function restartGame() {
  gameEnd();
  startGame();
}
restartButton.addEventListener("click", () => {
  restartGame();
});
