import { featuredShowsCounter } from '../src/modules/homePage.js';

describe('Featured shows counter', () => {
  test('checks if length of [1,2,3,4,5] is 5', () => {
    const shows = [1, 2, 3, 4, 5];
    expect(featuredShowsCounter(shows)).toBe(5);
  });
});