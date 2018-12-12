const { partition } = require('./util');

function quickSort(leftIndex, rightIndex, array) {
  if (rightIndex - leftIndex <= 0) {
    return;
  }

  let pivotPosition = partition(leftIndex, rightIndex, array);

  console.log(
    `quickSelect leftIndex ${leftIndex} rightIndex ${rightIndex} array ${array} pivotPosition ${pivotPosition}`
  );

  quickSort(leftIndex, pivotPosition - 1, array);
  quickSort(pivotPosition + 1, rightIndex, array);
}

module.exports = quickSort;
