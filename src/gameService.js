import { get } from './apiClient.js';

export async function getGameTitleById(id) {
  const response = await get(`/old-games/${id}`);
  return response.data.name;
}