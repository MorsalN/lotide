const middle = function(array) {
  for (num of array) {

    if (array.length < 3) {
      return [];
    }
    
    if (array.length % 2 === 0) {
      let middleIndex = array.length / 2 
      let start = middleIndex - 1;
      array = array.slice(start, middleIndex + 1);
    }

    if (array.length % 2 !== 0) {
      let middleIndex = Math.round(array.length / 2); 
      let start = middleIndex - 1;
      array = array.slice(start, middleIndex);
    }
    return array;
  } 
};

module.exports = middle;






