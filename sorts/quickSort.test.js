const quickSort = require('./quickSort');

describe('quickSort tests', () => {
  xtest('quickSort works as expected', () => {
    const array = [0, 5, 2, 1, 6, 3];

    quickSort(0, array.length - 1, array);
    expect(array).toEqual([0, 1, 2, 3, 5, 6]);
  });
});
