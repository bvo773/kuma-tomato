// Get the start button and timer display elements
const startButton = document.getElementById('start-btn');
const timerDisplay = document.querySelector('.timer-display');

let timeLeft = 25 * 60; // (25 * 60) = 1500 seconds

// When the button is clicked, run this function
startButton.addEventListener('click', function(){
    // setInterval() runs code every 1000 milliseconds (1 second)
    const timer = setInterval(function(){
        timeLeft --;

        // Calculate minutes: divide by 60 and round down
        let minutes = Math.floor(timeLeft / 60)

        // Calculate seconds: use modulus operator to get remainder 
        let seconds = timeLeft % 60;

        // Update the timer display with new time
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // If time runs out, stop the timer and show alert
        if (timerLeft <= 0) {
            clearInterval(timer);
            alert('Time is up!');
        }
    }, 1000); // Run every 1000ms (1 second))

})