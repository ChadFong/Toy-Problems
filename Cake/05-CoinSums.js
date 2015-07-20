// Create a function which takes an amount of money, and an array of coin denominations and return
// the number of ways change can be made with the coin denominations.

// The number of solutions for any given coin is the sum of the number of solutions for the amount - coin.

// Amount | 1 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 |
// Coin   |___________________________________________   Each location is equal to the sum of solutions
//    01  | 1 | 1 |  1 |  1 |  1 |  1 |  1 |  1 |  1 |   for coin value and lower at amount-coin
//    05  |   | 1 |  2 |  3 |  4 |  5 |  6 |  7 |  9 |   
//    10  |       |  1 |  2 |  4 |  6 |  9 | 12 | 16 |
//    25  |                      |  1 |  2 |  4 |  6 |


function coinSums (totalAmount, denominations) {
  var solutions = [];

  denominations.forEach(function(coin) {
    for (var amount = 1 ; amount <= totalAmount ; amount++) {
      if (amount - coin === 0) {
        solutions[amount] = solutions[amount] === undefined ? 1 : solutions[amount] + 1;
      } else if (solutions[amount - coin] !== undefined) {
        solutions[amount] = solutions[amount] === undefined ? solutions[amount - coin] : solutions[amount - coin] + solutions[amount];
      }
    }
  });
  return solutions[totalAmount];
}

console.log(coinSums(40, [1,5,10,25]));
