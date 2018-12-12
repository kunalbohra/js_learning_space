const { swap, partition } = require('./util');

describe('test for utils', () => {
  xtest('swap works as expected', () => {
    const array = [1, 2, 3, 4];
    swap(0, 1, array);
    expect(array).toEqual([2, 1, 3, 4]);
  });

  xtest('partition works as expected', () => {
    const array = [0, 50, 20, 10, 60, 30];

    expect(partition(0, array.length - 1, array)).toBe(3);
  });
});
