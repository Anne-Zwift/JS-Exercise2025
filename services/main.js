import { get } from './apiService.js'

async function apiFetchImport() {
  try {
    const games = await get('/social/profiles');
    console.log('Successfully fetched games:', games);
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
  }
}

apiFetchImport();

//login

import { post } from './apiService.js';

async function loginUser(email, password) {
  const LOGIN_ENDPOINT = '/auth/login';

  const credentials = {
    "email": email,
    "password": password,
  };

  try {
    // Make the POST request to the login endpoint with the credentials.
    const result = await post(LOGIN_ENDPOINT, credentials);

    // Save the access token and profile data to localStorage.
    // The Noroff API returns data like { accessToken: "...", profile: { ... } }.
    if (result.accessToken) {
      localStorage.setItem('accessToken', result.accessToken);
    }
    if (result.profile) {
      localStorage.setItem('profile', JSON.stringify(result.profile));
    }
    
    // Log a success message to the console.
    console.log("Login was successful:", result);
    return result.profile;

  } catch (error) {
    // Log the error to the console for debugging purposes.
    console.error("Login failed:", error.message);
  }
}

// Example usage of the login function with a hardcoded email and password.
loginUser("annmat00075@stud.noroff.no", "Sykle2003");


//Logout

/*function logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('profile');
  console.log('User has been logged out.');
}

document.addEventListener('DOMContentLoaded', () => {
  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', logout);
  }
});*/

