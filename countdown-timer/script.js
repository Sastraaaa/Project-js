// Get the HTML element
const countdownElement = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const inputHours = document.getElementById("inputHours");
const inputMinutes = document.getElementById("inputMinutes");
const inputSeconds = document.getElementById("inputSeconds");
const startButton = document.getElementById("startButton");

// variable countdown interval
let countdownInterval;

// function start timer
const startTimer = () => {
  let hours = parseInt(inputHours.value) || 0;
  let minutes = parseInt(inputMinutes.value) || 0;
  let seconds = parseInt(inputSeconds.value) || 0;

  //   cover total time into second
  let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  //   no input time handler
  if (totalTimeInSeconds <= 0) {
    alert("you must be input a valid time");
    return;
  }

  inputHours.value = "";
  inputMinutes.value = "";
  inputSeconds.value = "";

  countdownInterval = setInterval(() => {
    if (totalTimeInSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up!");
      return;
    }

    totalTimeInSeconds--;

    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = totalTimeInSeconds % 60;

    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
  }, 1000);
};

// Add event listener to start button
startButton.addEventListener("click", startTimer);
