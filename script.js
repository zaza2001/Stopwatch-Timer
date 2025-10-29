const stopwatchbtn = document.getElementById("stopwatchbtn");
const timerbtn = document.getElementById("timerbtn");
const stopwatchSection = document.getElementById("stopwatchSection");
const timerSection = document.getElementById("timerSection");

stopwatchbtn.addEventListener("click", () => {
    stopwatchbtn.classList.add("active");
    timerbtn.classList.remove("active");
    stopwatchSection.classList.remove("hidden");
    timerSection.classList.add("hidden");
});



let hours = 0;
let minutes = 0;
let seconds = 0;
let stopwatchInterval;
let stopwatchRunning = false;
const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const startStopwatch = document.getElementById("startStopwatch");
const resetStopwatch = document.getElementById("resetStopwatch");
const lapStopwatch = document.getElementById("lapStopwatch");
const lapList = document.getElementById("stopwatchLaps");
let lapCount = 0;

function updateStopwatch() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    stopwatchDisplay.textContent =
        hours + ":" + minutes + ":" + seconds;
}

startStopwatch.addEventListener("click", () => {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatch, 100);
        stopwatchRunning = true;
    } else {
        clearInterval(stopwatchInterval);
        stopwatchRunning = false;
    }
});

resetStopwatch.addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    hours = minutes = seconds = 0;
    stopwatchDisplay.textContent = "00:00:00";
    lapList.innerHTML = "";
    lapCount = 0;
});

lapStopwatch.addEventListener("click", () => {
    if (stopwatchRunning) {
        lapCount++;
        const li = document.createElement("li");
        const session = document.createElement("span");
        session.textContent = "Session " + lapCount;
        session.classList.add("session");
        const time = document.createElement("span");
        time.textContent = stopwatchDisplay.textContent;
        time.classList.add("dro");
        li.append(session, time);
        lapList.appendChild(li);
    }
});

let timerInterval;
let timerRunning = false;
const timerMinutes = document.getElementById("timerMinutes");
const timerSeconds = document.getElementById("timerSeconds");
const timerDisplay = document.getElementById("timerDisplay");
const startTimer = document.getElementById("startTimer");
const resetTimer = document.getElementById("resetTimer");
timerbtn.addEventListener("click", () => {
    timerbtn.classList.add("active");
    stopwatchbtn.classList.remove("active");
    timerSection.classList.remove("hidden");
    stopwatchSection.classList.add("hidden");
});

function updateTimer() {
    let mins = parseInt(timerMinutes.value) || 0;
    let secs = parseInt(timerSeconds.value) || 0;

    if (secs > 0) {
        secs--;
    }
    else if (mins > 0) {
        mins--;
        secs = 59;
    } else {
        clearInterval(timerInterval);
        timerRunning = false;
    }

    timerMinutes.value = mins;
    timerSeconds.value = secs;
    timerDisplay.textContent = mins + ":" + secs;
}

startTimer.addEventListener("click", () => {
    if (!timerRunning) {
        timerInterval = setInterval(updateTimer, 100);
        timerRunning = true;
    } else {
        clearInterval(timerInterval);
        timerRunning = false;
    }
});

resetTimer.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerRunning = false;
    timerMinutes.value = 0;
    timerSeconds.value = 0;
    timerDisplay.textContent = "00:00";
});
