const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const amPmEl = document.getElementById("amPm");

function updateClock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let amPm = "AM";

    if (hours >= 12) {
        hours = hours - 12;
        amPm = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
    amPmEl.innerText = amPm;

    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock();