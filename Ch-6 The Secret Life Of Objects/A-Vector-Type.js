/**
 * A Vector Type
Write a constructor Vector that represents a vector in two-dimensional space.
It takes x and y parameters (numbers), which it should save to properties of
the same name.

Give the Vector prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (the one in this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length
of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
 */

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(o) {
  return new Vector(this.x + o.x, this.y + o.y);
};

Vector.prototype.minus = function(o) {
  return new Vector(this.x - o.x, this.y - o.y);
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function() { return Math.sqrt((this.x * this.x) + (this.y * this.y)) }
});

var v1 = new Vector(10,20);
var v2 = new Vector(100, 200);

var v3 = v1.plus(v2);
var v4 = v2.minus(v1);

console.log(v3);
console.log(v4);

console.log(v1.length);