// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

function factorial(num) {
  if(num === 1) {
    return 1;
  }
  return num * factorial(num-1);
}

// JS number cannot hold enough digits, here is wolfram alpha's output as a string:
var result = "93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000";

console.log(
  result.split('').reduce(function(total,current){
    return total + parseInt(current, 10);
  }, 0)
);
