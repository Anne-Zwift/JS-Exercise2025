export const BASE_URL = 'https://v2.api.noroff.dev';

/**
 * Fetches data from a specific API endpoint.
 * This function is not exported and is used internally by other functions.
 * @param {string} endpoint The API endpoint to fetch data from.
 * @returns {Promise<object>} The JSON data from the response.
 * @throws {Error} If the network request fails or the response status is not ok.
 */

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5uZVp3aWZ0IiwiZW1haWwiOiJhbm5tYXQwMDA3NUBzdHVkLm5vcm9mZi5ubyIsImlhdCI6MTc1MjA1OTAwMH0.yu5ZModvAMvagf-6SLVkI0YZvNbhiJbBEj6Hgy92Nm4

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5uZVp3aWZ0IiwiZW1haWwiOiJhbm5tYXQwMDA3NUBzdHVkLm5vcm9mZi5ubyIsImlhdCI6MTc1NzY3MTM1MX0.cc2qQINKeCqKq2jYqApxghRAukY6wA0Ffpbo7yk3ACc
async function apiFetch(endpoint, options = {}) {
  const { body, ...customOptions } = options;

  const headers = {
    'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5uZVp3aWZ0IiwiZW1haWwiOiJhbm5tYXQwMDA3NUBzdHVkLm5vcm9mZi5ubyIsImlhdCI6MTc1NzY3MTM1MX0.cc2qQINKeCqKq2jYqApxghRAukY6wA0Ffpbo7yk3ACc',
    'X-Noroff-API-Key': '40ab3224-7374-4906-ba26-b12607da760a', // Add the API key here
    ...customOptions.headers,
  };

  const config = {
    ...customOptions,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
    config.method = 'POST'; // Default to POST if a body is present
  }

  try {
    const fullUrl = BASE_URL + endpoint;
    const response = await fetch(fullUrl, config);

    // Attempt to parse the JSON response first, regardless of the status.
    const responseData = await response.json();

    // Check if the response was not successful.
    if (!response.ok) {
      // Access the specific error message from the Noroff API structure.
      const errorMessage = responseData?.errors?.[0]?.message || 'An unknown error occurred';
      throw new Error(`Request failed with status: ${response.status}: ${errorMessage}`);
    }

    // If the response is ok, return the parsed data.
    return responseData;
  } catch (error) {
    // Log the error for debugging purposes.
    console.error('API Client Error:', error);
    // Re-throw the error so the calling code can handle it
    throw error;
  }
}

// Now we can export helper methods for different HTTP requests.
export const get = (endpoint, options = {}) => apiFetch(endpoint, { ...options, method: 'GET' });
export const post = (endpoint, body, options = {}) => apiFetch(endpoint, { ...options, body, method: 'POST' });
export const put = (endpoint, body, options = {}) => apiFetch(endpoint, { ...options, body, method: 'PUT' });
export const del = (endpoint, options = {}) => apiFetch(endpoint, { ...options, method: 'DELETE' });
