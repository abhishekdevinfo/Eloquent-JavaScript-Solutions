/**
 * A List
 
Objects, as generic blobs of values, can be used to build all sorts of data
structures. A common data structure is the list (not to be confused with the
array). A list is a nested set of objects, with the first object holding a refer-
ence to the second, the second to the third, and so on.

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

The resulting objects form a chain, like this:
value: 1
rest:----------->>>>> value: 2
                      rest: ------------>>>>>>  value: 3
                                                rest: null


A nice thing about lists is that they can share parts of their structure.
For example, if I create two new values {value: 0, rest: list} and {value:
-1, rest: list} (with list referring to the variable defined earlier), they are
both independent lists, but they share the structure that makes up their last
three elements. In addition, the original list is also still a valid three-element
list.

Write a function arrayToList that builds up a data structure like the
previous one when given [1, 2, 3] as an argument, and write a listToArray
function that produces an array from a list. Also write the helper functions
prepend, which takes an element and a list and creates a new list that adds
the element to the front of the input list, and nth, which takes a list and a
number and returns the element at the given position in the list, or undefined
when there is no such element.
If you haven’t already, also write a recursive version of nth.
 */

const arrayToList = (array) => {
  let arrayLength = array.length - 1; 
  let list = null
  let value, rest;
  for (let i = arrayLength; i >= 0; i--) {
    value = array[i];
    rest = list;
    list = {
      value: value,
      rest: rest
    }
  }
  return list;
}

let list = arrayToList([1,2,3])
console.log(list);



const listToArray = (list) => {
  let array = [];
  for (let i = 0; ; i++) {
    array[i] = list.value;
    list = list.rest;
    if (!list) {
      break;
    }
  }
  return array;
}

let array = listToArray(list)
console.log(array);



const prepend = (element, list) => {
  let newList = {
    value: element,
    rest: list
  }
  return newList;
}

let helper = prepend(10, list);
console.log(helper);



const nth = (list, number) => {
  for (let i = 0; ; i++) {
    if (i === number) {
      return list.value;
    }
    list = list.rest;
    if (!list) {
      break;
    }
  }
  return undefined;
}

console.log(nth(arrayToList([10, 20, 30]), 1));

const nthRecursive = (list, number) => {
  if (!list) {
    return undefined;
  } else if (number === 0) {
    return list.value;
  } else {
    return nthRecursive(list.rest, number - 1);
  }
}

console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

