// Given an array of tuples, where each tuple stores a meeting start and end time (integers representing
// 30-minute blocks past 9AM), write a function called condenseMeetingTimes which will return an array
// of tuples showing all ranges where a meeting is taking place.

function condenseMeetingTimes(meetings) {
  var meetingTimes = [];
  var condensedTimes = [];
  var start, end;
  var meeting = 0;

  meetings.forEach(function(timesTuple) {
    start = timesTuple[0]; end = timesTuple[1];
    meetingTimes[start] = meetingTimes[start] !== undefined ? meetingTimes[start] + 1 : 1;
    meetingTimes[end] = meetingTimes[end] !== undefined ? meetingTimes[end] - 1 : -1;
  });
  
  start = null; end = null;
  meetingTimes.forEach(function(time, i){
    meeting += time;
    if (meeting === 1 && start === null) {
      start = i;
    } else if (meeting === 0 && end === null) {
      end = i;
      condensedTimes.push([start,end]);
      start = null; end = null;
    }
  });

  return condensedTimes;
}

console.log(condenseMeetingTimes( [ [0,1], [3,5], [4,8], [10,12], [9,10] ] ));
console.log(condenseMeetingTimes( [ [1,2], [2,3] ] ));
console.log(condenseMeetingTimes( [ [1,5], [2,3] ] ));
console.log(condenseMeetingTimes( [ [1, 10], [2, 6], [3, 5], [7,9], [11, 12] ] ));
