// You are given the following information, but you may prefer to do some research for yourself.

// * 1 Jan 1900 was a Monday.
// * Thirty days has September,
//   April, June and November.
//   All the rest have thirty-one,
//   Saving February alone,
//   Which has twenty-eight, rain or shine.
//   And on leap years, twenty-nine.
// * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

var week = ["Sun","Mon","Tues","Wed","Thr","Fri","Sat"];

var monthDays = [
  ["Jan", 31],
  ["Feb", 28], // 29 on leap years
  ["Mar", 31],
  ["Apr", 30],
  ["May", 31],
  ["Jun", 30],
  ["Jul", 31],
  ["Aug", 31],
  ["Sep", 30],
  ["Oct", 31],
  ["Nov", 30],
  ["Dec", 31]
];

// Jan 1 1901 -> Tuesday.
// Loop through monthDays simultaneously with week. Count how many times Day 1/Month coincides with "Sun"

var CountingSundays = function(StartDay, StartYear) {
  var count = 0;
  // Day is tracking Sun, Mon, Tues... and needs to be maintained outside of the iteration through months because
  // a given month can start on any given day.
  var day = StartDay;
  while (StartYear <= 2000) {

    for (var month = 0 ; month < monthDays.length ; month++) {
      // Every month starts on the first.  We iterate until we hit the number of days in the given month.
      var date = 1;
      var leapCheck = monthDays[month][1];
      if ( month === 1 && (StartYear % 4 === 0 || (StartYear === 2000 && StartYear % 400 === 0)) ) {
        leapCheck = 29;
      }
      while (date <= leapCheck) {
        // if the DAY is Sun, increase the count.
        if (week[day] === "Sun" && date === 1) {
          count++;
        }
        // Increase day and date.
        day++;
        date++;
        // If we hit the end of the week, loop around.
        if (day === 7) {
          day = 0;
        }
      }
    }
    // Increase the year until we hit the last date we check, Dec 31, 2000
    StartYear++;
  }
  return count;
};

console.log(CountingSundays(2, 1901));









