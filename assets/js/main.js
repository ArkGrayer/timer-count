const timerHtml = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let timeSeconds = 0;
let timer;

function getTimeSeconds(seconds) {
  const time = new Date(seconds * 1000);
  return time.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

function initTimer() {
  timer = setInterval(function () {
    timeSeconds++;
    timerHtml.innerHTML = getTimeSeconds(timeSeconds);
  }, 1000);
}

start.addEventListener("click", function () {
  clearInterval(timer);
  initTimer();
  timerHtml.classList.remove("stopTimer");
});

pause.addEventListener("click", function () {
  clearInterval(timer);
  timerHtml.classList.add("stopTimer");
});

reset.addEventListener("click", function () {
  clearInterval(timer);
  timeSeconds = 0;
  timerHtml.innerHTML = "00:00:00";
  timerHtml.classList.remove("stopTimer");
});
