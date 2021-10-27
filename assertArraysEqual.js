const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: We got: ${actual} which === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: We got: ${actual} which !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};


let arr1 = [0,1,2,3];
let arr2 = [0,1,2,3];

assertArraysEqual(arr1, arr2); // passed

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true
assertArraysEqual([1, 2, 3], [3, 2, 1]); //false
assertArraysEqual([1, 2, 56], [1, 2]); //false
