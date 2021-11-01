const assertEqual = require('./assertEqual');

const head = function(array) {
  if (head === []) {
    return undefined;
  } else {
    return array[0];
  }
};

module.exports = head;

//TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 5);
// assertEqual(head([5]), 5);
