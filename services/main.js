import { get } from './apiService.js'

async function apiFetchImport() {
  try {
    const games = await get('/old-games');
    console.log('Successfully fetched games:', games);
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
  }
}

apiFetchImport();