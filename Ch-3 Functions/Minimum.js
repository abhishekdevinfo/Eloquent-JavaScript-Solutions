/**
Minimum

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can do that ourselves now. Write a function min
that takes two arguments and returns their minimum.
 */

var min = function(a, b) {
  return a > b ? b : a;
}

console.log(min(0,-10));