// import { sum } from '../src/index.js';

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });


import { commentCounter } from '../src/modules/commentsPopup.js'

test('checks if length of [{a:2},{b:3},{c:4}] is 3',()=>{
  const comments = [{a:2},{b:3},{c:4}]
  expect(commentCounter(comments)).toBe(3);
})