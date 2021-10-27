const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
  } else {
    console.log('❌❌❌ Assertion Failed: ' + actual + ' !== ' + expected);
  }

};

const countLetters = function(sentence) {
  let result = {};
  sentence = sentence.split(' ').join('');
  //console.log(sentence);
  for (let letters of sentence) {
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  } 
  return result;
};

console.log(countLetters("lighthouse in the house"));