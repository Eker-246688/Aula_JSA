let seconds = 0, minutes = 0, hours = 0;
let timer;
let isRunning = false;

function pad(value) {
    return value.toString().padStart(2, '0');
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

updateDisplay();
