// palindrome.js
export function isPalindrome(word) {
  // Convert the word to lowercase before reversing and comparing
  const cleanedWord = word.toLowerCase();
  const reversedWord = cleanedWord.split('').reverse().join('');
  
  return cleanedWord === reversedWord;
}