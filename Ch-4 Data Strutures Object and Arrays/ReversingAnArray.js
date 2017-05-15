/**
Reversing an Array

Arrays have a method reverse, which changes the array by inverting the
order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
as an argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace, does what the reverse
method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situa-
tions? Which one is more efficient?
 */

const reverseArray = (array) => {
  let count = 0;
  let length = array.length - 1;
  let newArray = [];
  for (let i = length; i >= 0; i -= 1) {
    newArray[count] = array[i];
    count += 1;
  }
  return newArray;
}

// OR

const reverseArray2 = (array) => {
  let newArray = [];
  array.forEach((arr) => {
    newArray.unshift(arr);
  });
  return newArray;
}

const reverseArrayInPlace = (array) => {
  let length = array.length - 1;
  let temp = undefined;
  for (let i = 0; i <= length; i += 1) {
    temp = array[length];
    array[length] = array[i];
    array[i] = temp;
    length -= 1;
  } 
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray2(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);