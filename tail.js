const tail = function(array) {
  if (array === [] || array.length < 1) {
    return [];
  } else {
    let newArray = Array.from(array.slice(1));
    return newArray;
  }
};

module.exports = tail;
