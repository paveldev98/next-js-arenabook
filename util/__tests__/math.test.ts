import { expect, test } from '@jest/globals';
import { add } from 'util/math';

test('add 2 numbers', () => {
  expect(add(1, 1)).toBe(2);
});

test('throws an error when arguments are not numbers', () => {
  expect(() => add(1, '1')).toThrow('Pass only numbers!');
  expect(() => add(false, '1')).toThrow('Pass only numbers!');
  expect(() => add('2', '1')).toThrow('Pass only numbers!');
});
