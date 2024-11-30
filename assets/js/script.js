let totalSeconds;
let interval;
const form = document.querySelector("form");

const countDown = () => {
  const minutes = Math.floor(totalSeconds / 60);
  const secondes = totalSeconds % 60;
  let sec = secondes < 10 ? "0" + secondes : secondes;
  countdownDisplay.textContent = `${minutes} : ${sec}`;
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    clearInterval(interval);
    countdownDisplay.textContent = "C'est terminé";
    start.value = "GO";
  }
  totalSeconds--;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert("Veuillez entrer un nombre de minutes supérieur à 0.");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    start.value = "STOP";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
}) 