const { partition } = require('./util.js');

function quickSelect(kthLowestValue, leftIndex, rightIndex, array) {
  if (rightIndex - leftIndex <= 0) {
    return array[leftIndex];
  }

  let pivotPosition = partition(leftIndex, rightIndex, array);

  console.log(
    `quickSelect leftIndex ${leftIndex} rightIndex ${rightIndex} array ${array} pivotPosition ${pivotPosition}`
  );

  if (kthLowestValue < pivotPosition) {
    quickSelect(kthLowestValue, leftIndex, pivotPosition - 1, array);
  } else if (kthLowestValue > pivotPosition) {
    quickSelect(kthLowestValue, pivotPosition + 1, rightIndex, array);
  } else {
    return array[pivotPosition];
  }
}

module.exports = quickSelect;
