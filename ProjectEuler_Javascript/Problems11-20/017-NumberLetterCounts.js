// If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, 
// how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 
// 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing 
// out numbers is in compliance with British usage.

var ones = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen"
};

var tens = {
  0: "",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety"
};

function numbersToWords(num){
  var numStr = num.toString();
  var len = numStr.length;
  var returnStr = "";

  if (len >= 4) {
    var thousands = numStr[len-4];
    returnStr += ones[thousands] + "thousand";
  }

  if (len >= 3) {
    var hundreds = numStr[len-3];
    if (ones[hundreds] !== "") {
      if (numStr.slice(len-2) !== "00") {
        returnStr += ones[hundreds] + "hundredand";
      } else {
        returnStr += ones[hundreds] + "hundred";
      }
    }
  }

  // Handles 0 -> 99
  var tensPlace = numStr.slice(len-2);
  if (len >=2 && ones[tensPlace]) {
    returnStr += ones[tensPlace];
  } else if (tensPlace[1]) {
    returnStr += tens[tensPlace[0]] + ones[tensPlace[1]];
  } else {
    returnStr += ones[tensPlace[0]];
  }
  console.log(returnStr);
  return returnStr;
}

function NumberLetterCounts(max) {
  var sum = 0;
  for (var i = 1 ; i <= max ; i++) {
    sum += numbersToWords(i).length;
  }
  return sum;
}

console.log(NumberLetterCounts(1000));




