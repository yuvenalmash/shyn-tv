/**
 * @jest-environment jsdom
 */
import featuredShowsCounter from '../src/modules/showsCounter.js';

describe('Featured shows counter', () => {
  test('checks if number of items with class name is 3', () => {
    document.body.innerHTML = '<div>'
      + '<div class=\'card\'>card</div>'
      + '<div class=\'card\'>card</div>'
      + '<div class=\'card\'>card</div>'
      + '</div>';
    expect(featuredShowsCounter('card')).toBe(3);
  });

  test('checks if number of items with class name is 0', () => {
    document.body.innerHTML = '<div>'
      + '</div>';
    expect(featuredShowsCounter('card')).toBe(0);
  });
});
