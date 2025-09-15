import { get } from './apiService.js'

/*async function apiFetchImport() {
  try {
    const games = await get('/social/profiles');
    console.log('Successfully fetched games:', games);
  } catch (error) {
    console.error('Failed to fetch data:', error.message);
  }
}

apiFetchImport();*/

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


//Games
//import { get } from "./apiService";

// Get references to the HTML elements we will interact with.
//import { get } from './services/apiService.js';

const gamesContainer = document.getElementById('games-container');
const loadMoreButton = document.getElementById('load-more-btn');

// State variable to keep track of the current page
let currentPage = 1;
let isFetching = false;

// Function to fetch a page of games and render them
async function fetchAndRenderGames(page) {
  isFetching = true;
  loadMoreButton.textContent = 'Loading...';
  loadMoreButton.disabled = true;

  try {
    const response = await get(`/old-games?page=${page}&limit=2`);
    const games = response.data;
    const meta = response.meta;

    // Append new games to the container
    games.forEach((game) => {
      const gameElement = document.createElement('div');
      gameElement.textContent = game.name;
      gamesContainer.appendChild(gameElement);
    });

    // Update the button based on the meta data
    if (meta.isLastPage) {
      loadMoreButton.style.display = 'none'; // Hide button if no more pages
    } else {
      loadMoreButton.textContent = 'Load More';
      loadMoreButton.disabled = false;
    }
  } catch (error) {
    console.error('Failed to fetch games:', error);
    loadMoreButton.textContent = 'Failed to load. Try again?';
    loadMoreButton.disabled = false;
  } finally {
    isFetching = false;
  }
}

// Event listener for the button
loadMoreButton.addEventListener('click', () => {
  if (!isFetching) {
    currentPage++; // Increment the page number
    fetchAndRenderGames(currentPage);
  }
});

// Initial load
fetchAndRenderGames(currentPage);




//Exercise: form

const avatarBioForm = document.getElementById('update-profile-form');
console.log(avatarBioForm);

avatarBioForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(avatarBioForm);
  console.log(formData);
  
  for (const [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }

});

