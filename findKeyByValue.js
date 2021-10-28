const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('❌❌❌ Assertion Failed: ' + actual + ' !== ' + expected);
  }

};

// const findKeyByValue = function(object, value) {
//   for (const index in object) {   
//     const keys = Object.keys(object);
//     console.log(keys)
//     if (object[index] === value) {
//       console.log(object[index]);
//       //gives all the keys in obj ex. sci_fi,comedy,drama
//       //Object.keys(object);
      
//       for (const key of object[index]) {
//         console.log(object[key]);
//         if (object[key] === value) {
//           return object[key];
//         }
//       }
//     }
//   }
// };


const findKeyByValue = function(object, value) {
  for (const keys in object) {   
      if (object[keys] === value) {
        return keys;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);