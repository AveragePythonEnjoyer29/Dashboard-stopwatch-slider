const startButton = document.getElementById("js--startButton");
const stopButton = document.getElementById("js--stopButton");
const resetButton = document.getElementById("js--resetButton");
const secondsDisplay = document.getElementById("js--seconds");
const minutesDisplay = document.getElementById("js--minutes");

let counterSec = 0; // seconds
let counterMin = 0; // minutes

let isRunning = false;
let timer = null;

startButton.onclick = function () {
    if (!isRunning) {

        timer = setInterval(function(){
            counterSec++; // increment by one

            if (counterSec == 60) {
                counterMin++;
                counterSec = 0; // reset counter to 0
            }

            // update html
            secondsDisplay.innerText = counterSec;
            minutesDisplay.innerText = counterMin;

        }, 50)
        
        isRunning = true; // set running to true
    }

}

stopButton.onclick = function () {
    if (timer == null || !isRunning) {
        return
    }

    isRunning = false;
    clearInterval(timer);
}

resetButton.onclick = function () {
    counterSec = 0;
    counterMin = 0;

    secondsDisplay.innerHTML = 0;
    minutesDisplay.innerHTML = 0
}