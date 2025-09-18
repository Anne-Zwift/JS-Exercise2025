/**
 * Creates a new user profile object.
 * @param {string} name - user profile name
 * @param {string} email - user profile email
 * @param {number} age - user profile age
 * @returns {(object|null)} - returns the profile object on success or null on failure.
 * @example
 * // Example of a successful call
 * const newUser = createdUserProfile('Alice', 'alice@example.com', 30);
 * // Expected output:
 * // {
 * //   name: 'Alice',
 * //   email: 'alice@example.com',
 * //   age: 30,
 * //   createdAt: [Date object],
 * //   isActive: true
 * // }
 * * // Example of a failed call
 * const invalidUser = createUserProfile('Bob', '', 25);
 * // Expected output:
 * // null
 */

export function createUserProfile(name, email, age) {
  if (!name || !email || !age) {
    return null;
  }
const profile = {
  name: name,
  email: email,
  age: age,
  createdAt: new Date(),
  isActive: true,
};

return profile;

}


