// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.


var multiples3and5 = function() {
  // Get all multiples from 0 to 1000:
  var multiples = [];
  for(var i = 0 ; i < 1000 ; i++ ) {
    if( i % 3 === 0 || i % 5 === 0 ) {
      multiples.push(i);
    }
  }

  // Sum the multiples:
  return multiples.reduce(function(total, current){
    return total + current;
  });
};
