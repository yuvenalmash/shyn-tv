/**
 * @jest-environment jsdom
 */
import commentCounter from '../src/modules/commentsCounter.js';

describe('Comments counter', () => {
  test('checks if li items are 3', () => {
    document.body.innerHTML = '<ul>'
      + '<li class=\'commentItem\'>comment</li>'
      + '<li class=\'commentItem\'>comment</li>'
      + '<li class=\'commentItem\'>comment</li>'
      + '</ul>';
    expect(commentCounter('.commentItem')).toBe(3);
  });

  test('checks if \'li\' items are 0', () => {
    document.body.innerHTML = '<ul>'
      + '</ul>';
    expect(commentCounter('.commentItem')).toBe(0);
  });
});