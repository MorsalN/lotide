const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array === [] || array.length < 1) {
    return [];
  } else {
    let newArray = Array.from(array.slice(1));
    return newArray;
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check single element
const test = tail(["Labs"]);
assertEqual(test.length, 2); // ensure we get back two elements
assertEqual(test[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(test[1], "Labs"); // ensure second element is "Labs"