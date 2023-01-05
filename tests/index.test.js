import { commentCounter } from '../src/modules/commentsPopup.js';
import { featuredShowsCounter } from '../src/modules/homePage.js';

describe('Comments counter', () => {
  test('checks if length of [{a:2},{b:3},{c:4}] is 3', () => {
    const comments = [{ a: 2 }, { b: 3 }, { c: 4 }];
    expect(commentCounter(comments)).toBe(3);
  });
});

describe('Featured shows counter', () => {
  test('checks if length of [1,2,3,4,5] is 5', () => {
    const shows = [1, 2, 3, 4, 5];
    expect(featuredShowsCounter(shows)).toBe(5);
  });
});