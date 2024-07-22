let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
    startStopButton.textContent = 'Start';
    elapsedTime = 0;
    display.textContent = '00:00:00';
});

function updateTime() {
    elapsedTime = Date.now() - startTime;
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    display.textContent = `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}