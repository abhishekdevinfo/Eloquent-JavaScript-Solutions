/**
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to check whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even
or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N 􀀀 2.
Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on 􀀀1. Why? Can you think
of a way to fix this?
 */

const isEven = (a) => {
  if (a < 0) {
    a = -(a);
  }
  if (a === 0) {
    return true;
  } 
  if (a === 1) {
    return false;
  }

  return isEven(a - 2);

}

//  OR

const isEvenAnotherWay = (a) => {
  if (a < 0) {
    a = -(a);
  }
  return a === 0 ? true : a === 1 ? false : isEvenAnotherWay(a - 2);
}

console.log(isEven(-2));         