// sum.test.js
import sum from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

//Exercise: capitalise

import { capitalise } from './sum.js';

describe('The capitalise function', () => {

 // Test case 1: lowercase string -> capitalized
it('should correctly capitalise a simple lowercase string', () => {
//arrange
const inputString = 'hello';

//act
const result = capitalise(inputString);

//assert
expect(result).toBe('Hello');
  });

  // Test case 2: already capitalized string -> unchanged
it('should return a capitalized string unchanged', () => {
  //arrange
  const inputString = 'World';

  //act

  const result = capitalise(inputString);

  //assert

  expect(result).toBe('World');
});

  // Test case 3: empty string -> empty string
  it('should return an empty string for an empty input', () => {
    //arrange
    const inputString = '';

    //act

    const result = capitalise(inputString);

    //assert

    expect(result).toBe('');
  });
    
  });