const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const NEWYEAR = '1 January 2023';

function countDown() {
    const newYear = new Date(NEWYEAR);
    const todaysDate = new Date();
    
    let numOfSeconds = (newYear - todaysDate) / 1000;

    let secondsRemaining = Math.floor(numOfSeconds) % 60;
    let minutesRemaining = Math.floor((numOfSeconds / 60) % 60);
    let hoursRemaining = Math.floor((numOfSeconds / 3600) % 24);
    let daysRemaining = Math.floor(numOfSeconds / (3600 * 24));

    daysElement.textContent = daysRemaining;
    hoursElement.textContent = formatTime(hoursRemaining);
    minutesElement.textContent = formatTime(minutesRemaining);
    secondsElement.textContent = formatTime(secondsRemaining);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
function startCountDown() {
    setInterval(countDown, 1000);
}

startCountDown();