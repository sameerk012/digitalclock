/*-console.log("JS file is ready t use");

let clock = document.getElementById("clock");
// console.log(clock);

let hour = document.getElementById("hour");
// console.log(hour);

let minutes = document.getElementById("minutes");
// console.log(minutes);

let seconds = document.getElementById("seconds");
// console.log(seconds);

//=====================================================

function printnum() {
    for (let j = 1; j <= 10; j++) 
    {
        setTimeout(function time() {
            // console.log(j);
            seconds.innerText = j;
        }, j * 1000)

        if (j == 10)
        {
            console.log("countdown done")
        }
    }
}

printnum()




*/

// var day = new day();
// console.log(day);

function updateClock() {
    var now = new Date();
    var hours = formatTime(now.getHours());
    var minutes = formatTime(now.getMinutes());
    var seconds = formatTime(now.getSeconds());
    var day = getDayName(now.getDay());


    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('day').textContent = day;
}

function formatTime(time) {
    return (time < 10) ? "0" + time : time;
}

function getDayName(dayIndex) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
