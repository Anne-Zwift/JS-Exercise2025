jest.mock('./apiClient.js');

import { getGameTitleById } from "./gameService.js";
import { get } from "./apiClient.js";

describe('getGameTitleById', () => {

  it('should return the game\'s title on success', async () => {
    //Arrange
  const fakeResponse = {
    data: {
      name: 'Lemmings',
    }
  }
  get.mockResolvedValue(fakeResponse);

    //Act
  const result = await getGameTitleById(2);
    //Assert
  expect(result).toBe('Lemmings');
  console.log(result);
  expect(get).toHaveBeenCalledWith('/old-games/2');

  });

  it('should throw an error if the API call fails', async () => {
    //Arrange
  const fakeError = new Error('Game not found');
  get.mockRejectedValue(fakeError);
    //Act & Assert
  await expect(getGameTitleById(999)).rejects.toThrow('Game not found');
});
});