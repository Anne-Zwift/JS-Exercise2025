// Explicitly mock the module
jest.mock('./storage.js', () => ({
  // Actual exports from the module
  ...jest.requireActual('./storage.js'),
  // Explicitly make 'load' a mock function
  load: jest.fn(),
}));

// Import statement
import { isUserLoggedIn } from './checkAuth.js';
import { load } from './storage.js';

describe('isUserLoggedIn', () => {

  // Test case 1: when an access token exists
  it('should return true if an access token exists', () => {
    // Arrange
    load.mockReturnValue('a-fake-token-string');

    // Act
    const result = isUserLoggedIn();

    // Assert
    expect(result).toBe(true);
    expect(load).toHaveBeenCalledWith('accessToken');
  });

  // Test case 2: when no access token exists
  it('should return false if no access token exists', () => {
    // Arrange
    load.mockReturnValue(null);

    // Act
    const result = isUserLoggedIn();

    // Assert
    expect(result).toBe(false);
    expect(load).toHaveBeenCalledWith('accessToken');
  });
});