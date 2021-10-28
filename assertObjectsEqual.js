const assertObjectEqual = function(actual, expected) {
  // console.log('actual/expected:',actual, expected);
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    // console.log('expected:',expected);
    // console.log('actual:', actual);
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    // console.log(arrayOne[i]);
    // console.log(arrayTwo[i]);
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  //length of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //object1[key] = value of object
  for (const key in object1) {
    //if the value of object is an array 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key])) {
        //goes to next iteration of for loop
        continue
      } else {
        return false;
      }
    }
    //if value of the object are equal 
    if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectEqual(ab, abc); // => false

const def = { a: "1", b: "2", c: "3" };
assertObjectEqual(def, abc); // => true

assertObjectEqual(ab, abc); // => false

//TEST CODE: Arrays As Values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEqual(cd, cd2); // => false

assertObjectEqual(cd, cd); // => true
