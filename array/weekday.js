const weekday = 'Saturday';
const day = -15;

function findWeekday(weekday, day) {
    const weekdays = {
        'Monday': 0,
        'Tuesday': 1,
        'Wednesday': 2,
        'Thursday': 3,
        'Friday': 4,
        'Saturday': 5,
        'Sunday': 6
    }
    
    const dayMap = {
        0: 'Monday',
        1 : 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4:'Friday',
        5: 'Saturday',
        6: 'Sunday'
    }
    
    let d = 0;
    if (day > 0) {
      d = (day + weekdays[weekday]) % 7;
    } else {
        day = Math.abs(day) % 7
        d = (7 - day + weekdays[weekday]) % 7;
    }
    console.log(dayMap[d]);
}

findWeekday(weekday, day);








