// Given an array of at least 3 integers, return the greatest possible product.

// Naïve solution is getting 3 largest numbers, but if there is only one negative number we will want
// the largest negative number.

// if there are 2 negative numbers, we will want the two lowest numbers and the greatest number.
// 3 numbers

function greatestProd(intArr) {
  var top = -Infinity, second = -Infinity, third = -Infinity;
  var bottom = 0, secondLow = 0;

  var topChanged = false;
  var lowestChanged = false;

  intArr.forEach(function(num) {
    top = num > top ? (topChanged = true, third = second, second = top, num) : top;
    second = num > second && !topChanged ? (topChanged = true, third = second, num) : second;
    third = num > third && !topChanged ? num: third;

    if (num < 0) {
      bottom = num < bottom ? (lowestChanged = true, secondLow = bottom, num) : bottom;
      secondLow = num < secondLow && !lowestChanged ? num : secondLow;
    }

    topChanged = false;
    lowestChanged = false;
  });

  return Math.max (top * second * third, bottom * secondLow * top);
}

console.log(greatestProd([-10, -10, -1, 3, 4, 10]));
console.log(greatestProd([-10, -10, -1, -5, -6]));
console.log(greatestProd([3,4,5,6]));
