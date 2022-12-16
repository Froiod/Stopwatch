const startStopBtn = document.querySelector('#startStopBtn');
const reserBtn = document.querySelector('#resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


let timeInterval = null;
let timerStatus = "Stopped"
function stopWatch() {

    seconds++;
    if (seconds / 100 === 1) {
        seconds = 0;
        minutes++;
    }
    if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else leadingSeconds = seconds;

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else leadingMinutes = minutes;

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else leadingHours = hours;

    let displayTimer = document.getElementById('timer').innerHTML =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}



startStopBtn.addEventListener('click', function() {
    if (timerStatus === "Stopped") {
        timeInterval = window.setInterval(stopWatch, 10);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "Started"
    } else {
        window.clearInterval(timeInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "Stopped"
    }
});

reserBtn.addEventListener('click', function(){
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "Stopped"
})