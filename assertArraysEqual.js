const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: We got: ${actual} which === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: We got: ${actual} which !== ${expected}`);
  }
};

module.exports = assertArraysEqual; 

//TEST CODE
let arr1 = [0,1,2,3];
let arr2 = [0,1,2,3];

assertArraysEqual(arr1, arr2); // passed

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //true
assertArraysEqual([1, 2, 3], [3, 2, 1]); //false
assertArraysEqual([1, 2, 56], [1, 2]); //false
