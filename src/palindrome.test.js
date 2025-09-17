import { isPalindrome } from './palindrome.js';

describe('isPalindrome', () => {
  it('should return true for a single-character string', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should return false for a single-character string', () => {
    expect(isPalindrome('ab')).toBe(false);
  });

  it('should return true for "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return true for case-insensitive palindromes', () => {
    expect(isPalindrome('Level')).toBe(true);
  });
}) ;

