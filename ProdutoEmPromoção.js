let totalSeconds = 240; // 4 minutos em segundos

function startTimer() {
    const timer = setInterval(() => {
        totalSeconds--;
        updateDisplay();

        if (totalSeconds <= 0) {
            clearInterval(timer);
            document.getElementById('temporizador').textContent = "Oferta encerrada";
            document.getElementById('temporizador').style.color = "red";
        }
    }, 1000);
}

function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    document.getElementById('temporizador').textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

startTimer();
