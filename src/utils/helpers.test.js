import { formatDate } from './helpers';

describe('formatDate function', () => {
  it('formats date correctly', () => {
    const inputDate = '2024-02-11';
    const formattedDate = formatDate(inputDate);
    expect(formattedDate).toBe('February 11, 2024');
  });
});
