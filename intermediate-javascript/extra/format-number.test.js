const { formatNumber } = require('./format-number');

test('Format number returns short numbers as a string', () => {
  expect(formatNumber(123)).toBe("123");
})

test('Format number returns short numbers with decimal places as a string', () => {
  expect(formatNumber(123.987)).toBe("123.987");
})

test('Format number returns long numbers as a string with commas', () => {
  expect(formatNumber(12345)).toBe("12,345");
})

test('Format number returns long numbers with decimals as a string with commas', () => {
  expect(formatNumber(1234567.8)).toBe("1,234,567.8");
})