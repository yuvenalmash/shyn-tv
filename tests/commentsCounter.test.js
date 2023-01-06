/**
 * @jest-environment jsdom
 */
import commentCounter from '../src/modules/commentsCounter.js';

describe('Comments counter', () => {
  test('checks if length of [{a:2},{b:3},{c:4}] is 3', () => {
    document.body.innerHTML = '<ul>'
      + '<li class=\'commentItem\'>comment</li>'
      + '<li class=\'commentItem\'>comment</li>'
      + '<li class=\'commentItem\'>comment</li>'
      + '</ul>';
    expect(commentCounter('.commentItem')).toBe(3);
  });
});