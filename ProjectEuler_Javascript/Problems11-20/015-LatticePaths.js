// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
// there are exactly 6 routes to the bottom right corner.
// [
//   [->,->, V, V ], [->, V, ->, V], [->, V, V, ->]
//   [V, ->, ->, V], [V, ->, V, ->], [V, V, ->, ->]
// ]
// How many such routes are there through a 20×20 grid?

// Starting from the bottom right we can simply count the # of paths to the end.
// Any point further ahead will have the same number of paths to the solution as
// all points ahead of it.

// We will populate a matrix where each point contains the number of paths possible
// to the end.  The sum of the points to the right and below it.  Because we can only move
// down or right these values are reflected across the diagonal.

// x being the x by x grid.
function LatticePaths(x) {
  // We know the bottom and right-most row/col will be popluated by 1s, and the row/columns
  // one farther will count up by one. So we populate our matrix to begin with that.

  // We use n = x+1 because we are counting from the top left corner of the grids.  Our matrix records the values
  // at the bottom right position so we must count one grid more.
  var n = x+1;
  var matrix = [];
  for (var i = 0 ; i < n ; i++) {
    matrix.push(new Array(n));
  }

  var j = 2;
  for (i = n-2 ; i >= 0 ; i--) {
    matrix[n-1][i] = 1;
    matrix[i][n-1] = 1;
    matrix[n-2][i] = j;
    matrix[i][n-2] = j;
    j++;
  }

  // Now we calculate the number of paths from our current location to the bottom corner.  That is the sum of paths from
  // the grid below, and the grid to the right of our current grid.  We sum these until we hit the diagonal grid which is
  // the sum of each grid (or the grid below * 2).
  for (var row = n-3, col = n-3 ; row >= 0; row--, col--) {
    for (var base = n-3 ; base > row ; base--) {
      matrix[base][col] = matrix[base+1][col] + matrix[base][col+1];
    }
    matrix[row][col] = matrix[row+1][col] * 2;
  }
  console.log(matrix[0][0]);
}

LatticePaths(20);