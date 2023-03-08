const startButton = document.getElementById("js--startButton");
const stopButton = document.getElementById("js--stopButton");
const resetButton = document.getElementById("js--resetButton");
const secondsDisplay = document.getElementById("js--seconds");
const minutesDisplay = document.getElementById("js--minutes");
const slider = document.getElementById("js--slider");
const sliderText = document.getElementById("js--slider-text");
const body = document.getElementById("js--body");
const image = document.getElementById("js--imageView");
const displayButton = document.getElementById("js--displayButton");

function setFontSize(rem_size) {
    slider.value = rem_size;
    body.style.fontSize = `${slider.value}rem`;
    sliderText.innerText = `${slider.value}x`;
}

setFontSize(2);

let counterSec = 0; // seconds
let counterMin = 0; // minutes

let isRunning = false;
let imageShown = false;
let timer = null;

let imageInfo = {
    "alt": "afbeelding van een engineer uit TF2",
    "src": "https://media.tenor.com/MV666zYV7X4AAAAC/tf2-tf2engineer.gif"
};

displayButton.onclick = function () {

    if (!imageShown) {
        image.setAttribute("src", imageInfo.src);
        image.setAttribute("alt", imageInfo.alt);

        displayButton.innerText = "Hide image"
    } else {
        image.setAttribute("src", "");
        image.setAttribute("alt", "");

        displayButton.innerText = "Display image"
    }

    imageShown = !imageShown; // big brain
};

slider.oninput = function() {
    setFontSize(slider.value)
};

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

        }, 1000)
        
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