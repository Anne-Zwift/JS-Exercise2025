export const BASE_URL = 'https://v2.api.noroff.dev';

/**
 * Fetches data from a specific API endpoint.
 * This function is not exported and is used internally by other functions.
 * @param {string} endpoint The API endpoint to fetch data from.
 * @returns {Promise<object>} The JSON data from the response.
 * @throws {Error} If the network request fails or the response status is not ok.
 */

async function apiFetch(endpoint) {

  try {
    const fullUrl = BASE_URL + endpoint;
    const response = await fetch(fullUrl);

    // Check if the response was successful.
     if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    // Parse the response as JSON and return it.
    return await response.json();
  } catch (error) {
    // Log the error for debugging purposes.
    console.error('API Client Error:', error);
    // Re-throw the error so the calling code can handle it
    throw error;
  }
}

// Now we can export helper methods
export const get = (endpoint) => apiFetch(endpoint);
//export const post = (endpoint, body) => apiFetch(endpoint, { body });
//export const put = (endpoint, body) =>
  //apiFetch(endpoint, { method: 'PUT', body });
//export const del = (endpoint) => apiFetch(endpoint, { method: 'DELETE' });