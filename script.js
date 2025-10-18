// Get the start button and timer display elements
const startButton = document.getElementById('start-btn');
const timerDisplay = document.querySelector('.timer-display');

// Variables to track timer state
let timeLeft = 25 * 60; // Total duration in seconds
let isRunning = false;
let startTime = null;
const totalDuration = 25 * 60;

function updateDisplay() {
    // Calculate elapsed time in seconds since start
    const elapsed = Math.floor((Date.now() - startTime) / 1000);

    // Calculate the remaining time
    timeLeft = totalDuration - elapsed;

    if (timeLeft <= 0) {
        timeLeft = 0;
    }

    // Convert to minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

}

startButton.addEventListener('click',)
