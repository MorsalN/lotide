//TEST ASSERTION FUNCTIONS
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

const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: We got: ${actual} which === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: We got: ${actual} which !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const middle = function(array) {
  for (num of array) {

    if (array.length < 3) {
      return [];
    }
    
    if (array.length % 2 === 0) {
      let middleIndex = array.length / 2 
      let start = middleIndex - 1;
      array = array.slice(start, middleIndex + 1);
    }

    if (array.length % 2 !== 0) {
      let middleIndex = Math.round(array.length / 2); 
      let start = middleIndex - 1;
      array = array.slice(start, middleIndex);
    }
    return array;
  } 
};

//TEST CODE

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]


// assertArraysEqual((middle([1]), [])); // => []
// assertArraysEqual((middle([1,2]), []));



