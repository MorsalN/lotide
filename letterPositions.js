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



const letterPositions = function(sentence) {
  
  const results = {};

  for (let i = 0; i < sentence.length; i++) {

    let char = sentence[i];
    if (char !== ' ') {
      //if the character is already there in the resultant object
      if(results[char]){
        results[char].push(i);
      } else {
        results[char] = [i];
      }
      
    //console.log('object:', results);
    }
  }
  return results;
};


//TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);


// //OUTPUT SAMPLE
// /*
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }*/