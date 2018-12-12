function partition(leftIndex, rightIndex, array) {
  let pivot_postion = rightIndex;
  let pivot = array[pivot_postion];

  rightIndex = rightIndex - 1;

  while (true) {
    while (array[leftIndex] < pivot) {
      leftIndex = leftIndex + 1;
      console.log(
        `leftIndex inside while ${leftIndex} array ${
          array[leftIndex]
        } pivot ${pivot}`
      );
    }
    while (array[rightIndex] > pivot) {
      rightIndex -= 1;
    }

    if (leftIndex >= rightIndex) {
      break;
    } else {
      console.log(
        `swap leftIndex ${leftIndex} rightIndex ${rightIndex} array ${array}`
      );
      swap(leftIndex, rightIndex, array);
    }
  }

  swap(leftIndex, pivot_postion, array);
  console.log(`leftIndex ${leftIndex}`);
  return leftIndex;
}

function swap(x, y, array) {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}

module.exports = {
  swap,
  partition
};
