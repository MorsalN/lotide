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

module.exports = eqArrays;

//TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays([1, 2, 56], [1, 2]), false);