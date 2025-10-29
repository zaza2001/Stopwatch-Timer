let intervals;
const wutebi = document.getElementById("wutebi");
const wamebi = document.getElementById("wamebi");
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
startBtn.addEventListener("click", () => {
    if (!intervals) {
        intervals = setInterval(updateTime, 1000);
    } else {
        clearInterval(intervals);
        intervals = null;

    }
})
resetBtn.addEventListener("click", () => {
    clearInterval(intervals);
    intervals = null;
    wutebi.value = 0;
    wamebi.value = 0;
    display.textContent = "00:00";

})



function updateTime() {
    if (wamebi.value > 0) {
        wamebi.value--;
    } else {
        if (wutebi.value > 0) {
            wutebi.value--;
            wamebi.value = 59;
        } else {
            clearInterval(intervals);
            intervals = null;
        }
    }
    display.textContent = wutebi.value.padStart?.(2, "0") + ":" +
        wamebi.value.toString().padStart(2, "0");
}