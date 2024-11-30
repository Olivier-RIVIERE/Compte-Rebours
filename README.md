# Countdown Timer with JavaScript ⏱️

![Your Logo](./assets/img/1716296373896.jpg)

---

## Description
This project is an **interactive countdown timer** built using **HTML**, **CSS**, and **pure JavaScript**. It allows the user to input a duration in minutes, start a countdown, and dynamically display the remaining time. Once the countdown reaches zero, a message is displayed to indicate the end.

---

## Features
- **Dynamic input**: The user can enter a number of minutes into a form field.
- **Countdown in MM:SS format**: The timer displays the remaining time, with formatted seconds (e.g., `5:07`).
- **Input validation**: The form ensures that only valid values are accepted before starting.
- **Interactive button**: The button toggles its state (`GO` → `STOP`) depending on the timer's status.
- **End message**: When the countdown finishes, a message is shown: `"C'est terminé"` (This can be customized).

---

## Prerequisites
There are no special requirements. You only need a modern browser to run this project.

---

## Core Code

Here’s the JavaScript code that handles the timer logic:

```javascript
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
    countdownDisplay.textContent = "C'est terminé";
    start.value = "GO";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(choice.value)) {
    alert("Please enter a valid number of minutes greater than 0.");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    start.value = "STOP";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});
```

---

## Demonstration

Here’s how the project works step by step:

1. **Step 1**: The user inputs the desired number of minutes and clicks the button to start the countdown.
2. **Step 2**: The timer begins, and the remaining time is displayed in real-time.
3. **Step 3**: When the countdown ends, a message `"C'est terminé"` is displayed (can be customized).

---

## Potential Improvements
1. **Add a Pause/Resume button** for better control.
2. **Play a sound at the end of the countdown** to notify the user.
3. **Keep a history of countdowns** to track previous sessions.
4. **Improve the visual design**: Add advanced CSS styling for a polished look.

---


