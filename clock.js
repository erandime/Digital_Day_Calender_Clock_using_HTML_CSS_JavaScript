setInterval(myClock, 500);
function myClock() {
    const now = new Date();

    let hour = now.getHours();
    if (hour < 10) {
        hour = "0" + hour;
    }

    let min = now.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }

    let sec = now.getSeconds();
    if (sec < 10) {
        sec = "0" + sec;
    }

    let meridiem;
    if (hour <= 12) {
        meridiem = "AM";
    } else {
        meridiem = "PM";
    }

    let year = now.getFullYear();

    let month = now.getMonth();
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
    }

    let date = now.getDate();
    let sup;
    switch (date) {
        case 1:
        case 21:
        case 31:
            sup = "st";
            break;
        case 2:
        case 22:
            sup = "nd";
            break;
        case 3:
        case 23:
            sup = "rd";
            break;
        default:
            sup = "th";
            break;
    }

    let day = now.getDay();
    switch (day) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    day = day.toUpperCase();
    
    document.getElementById("day").innerHTML = day;
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec + " " + meridiem;
    document.getElementById("date").innerHTML = date + sup + " of " + month + " " + year;



}
