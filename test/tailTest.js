const assert = require('chai').assert;
const tail = require('../tail');

describe("#head", () => { 

  it("Check the original array: original array should still have 3 elements!", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual((words.length), 3);
  });

  it("Check the returned array elements: ensure first element is Lighthouse", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual((result[0]), 'Lighthouse');
  });

  it("Check the returned array elements: ensure second element is Labs", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual((result[1]), 'Labs');
  });

  it("Check single element: ensure single element length returns 0", () => {
    const test = tail(["Labs"]);
    assert.strictEqual(test.length, 0);
  });

  it("Check single element: ensure first element is undefined", () => {
    const test = tail(["Labs"]);
    assert.strictEqual(test[0], undefined);
  });

  it("Check single element: ensure second element is undefined", () => {
    const test = tail(["Labs"]);
    assert.strictEqual(test[1], undefined);
  });
});
