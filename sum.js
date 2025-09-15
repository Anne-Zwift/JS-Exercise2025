// sum.js
/*function sum(a, b) {
  return a + b;
}
export default sum;*/

//Exercise unit test

/**
 * Capitalises the first letter of a string.
 * @param {string} str The string to capitalise.
 * @returns {string} The capitalised string.
 */

export function capitalise(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}