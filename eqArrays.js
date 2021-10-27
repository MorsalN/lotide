const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne === arrayTwo) {
    return true;
  } 

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


// function eqArrays(a, b) {
//   if (a === b) return true;
//   if (a == null || b == null) return false;
//   if (a.length !== b.length) return false;

//   // If you don't care about the order of the elements inside
//   // the array, you should sort both arrays here.
//   // Please note that calling sort on an array will modify that array.
//   // you might want to clone your array first.

//   for (var i = 0; i < a.length; ++i) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);