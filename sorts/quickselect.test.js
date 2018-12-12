const quickSelect = require('./quickselect');

describe('quickSelect tests', () => {
  test('quickSelect works as expected', () => {
    const array = [0, 50, 20, 10, 60, 30];
    expect(quickSelect(1, 0, array.length - 1, array)).toBe(10);
  });
});
