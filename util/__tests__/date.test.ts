import { expect, test } from '@jest/globals';
import { formatDate } from 'util/date';

test('format date to display the date with different local date formats', () => {
  expect(
    formatDate(
      new Date(
        'Sat Nov 30 2024 00:00:00 GMT+0100 (Central European Standard Time)',
      ),
    ),
  ).toBe('30/11/2024');
});
