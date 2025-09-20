let seconds = 0;
let minutes = 0;
let hours = 0;
let intervals;
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("flagBtn");
const lapList = document.getElementById("laps");
let count = 0;

lapBtn.addEventListener("click", () => {
    count++;

    const lapTime = hours + ":" + minutes + ":" + seconds;

    const li = document.createElement("li");

    const session = document.createElement("span");
    session.textContent = "Session " + count;
    session.classList.add("session");

    const time = document.createElement("span");
    time.textContent = lapTime;
    time.classList.add("dro");

    li.appendChild(session);
    li.appendChild(time);
    lapList.appendChild(li);

})

startBtn.addEventListener("click", () => {
    if (!intervals) {
        intervals = setInterval(updateTime, 10);
    } else {
        clearInterval(intervals);
        intervals = null;

    }
})
resetBtn.addEventListener("click", () => {
    clearInterval(intervals);
    intervals = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.textContent = "00:00:00";
})

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    display.textContent = hours + ":" + minutes + ":" + seconds;
}
