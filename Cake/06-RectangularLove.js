// Find overlap of two rectangles.

// Rectangles are hash maps like this:
// rect = {
//   x: 5,     (x,y) coordinates
//   y: 7,

//   width: 3,   height/width
//   height: 4
// };

function overlappingRectangle (rect1, rect2) {
  var width = [];
  var height = [];
  var populate = function (rect) {
    for (var w = rect.x ; w <= rect.width + rect.x ; w++) {
      width[w] = width[w] === undefined ? 1 : width[w] + 1;
    }
    for (var h = rect.y ; h <= rect.height + rect.y ; h++) {
      height[h] = height[h] === undefined ? 1 : height[h] + 1;
    }
  };

  populate(rect1);
  populate(rect2);

  var x, y, heightRect, widthRect;

  [x, widthRect] = width.reduce(define, []);
  [y, heightRect] = height.reduce(define, []);

  if (x === undefined) {return "No intersection";}
  if (width === undefined) {return "Adjacent, but no intersection";}

  return new Rectangle(x, y, widthRect, heightRect);

  function define(total, current, coord) {
    if (current === 2 && total[0] === undefined) {
      total[0] = coord;
    } else if (current === 2) {
      total[1] = total[1] + 1 || 1;
    }
    return total;
  }
}


var a = new Rectangle(2,2,5,5);
var b = new Rectangle(1,1,4,4);
console.log(overlappingRectangle(a,b));

function Rectangle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}
