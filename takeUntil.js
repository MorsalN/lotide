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

const takeUntil = function(array, callback) {
  //gets the index
  let stopAt = array.findIndex(callback);
  //slices array at that index
  const slicedArray = array.slice(0,stopAt)
  return slicedArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([ 1, 2, 5, 7, 2 ], [ 1, 2, 5, 7, 2 ]);
assertArraysEqual([ 1, 2, 5, 7, 2 ], [ 1, 2, 5, 7]);
assertArraysEqual([ "I've", 'been', 'to', 'Hollywood' ], [ "I've", 'been', 'to', 'Hollywood' ]);
assertArraysEqual([ "I've", 'been', 'to', 'Hollywood' ], [ "I've", 'been', 'to' ]);

