// index.js
import { add } from './utils.js';

function start() {
    const sum = add(5, 10);
    console.log(`The sum is: ${sum}`);
}

start();

//Exercise 2.1 Event Loop
//Micro-task runs before macro-task
/*console.log('A: Script start');//1

fetch('https://v2.api.noroff.dev/old-games/1').then(function () {
  console.log('B: Promise resolved');//micro, 3
});

setTimeout(function () {
  console.log('C: setTimeout finished');//macro, 4
}, 0);

console.log('D: Script end');//2*/

//Example of creating a Resolving Promise

/*const successfulPromise = new Promise((resolve, reject) => {
  console.log('Executor function started. Waiting for the operation...');

  setTimeout(() => {
    // The operation was successful.
    const resultData = { userId: 1, username: 'testuser' };
    resolve(resultData);
  }, 2000);
});

console.log('Promise has been created.');

successfulPromise.then((data) => {
  console.log('Promise was fulfilled!');
  console.log('Received data:', data);
});*/

// Rejecting Promise

/*const conditionalPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.5; // 50% chance of failure

    if (isSuccess) {
      resolve('Operation was successful.');
    } else {
      reject(new Error('Operation failed! Could not connect.'));
    }
  }, 1500);
});

conditionalPromise
  .then((message) => {
    console.log('Success:', message);
  })
  .catch((error) => {
    console.error('Failure:', error.message);
  });*/

/*function checkAuthStatus() {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const isLoggedIn = Math.random() > 0.2;

      if (isLoggedIn) {
        resolve(`{ success: true, message: 'User is authenticated.' }`);
      } else {
        reject(new Error('Authentication failed!'));
      }
    }, 1000);// delay goes inside the setTimeout
  });
} 

checkAuthStatus()
  .then((message) => {
    console.log('Success:', message);
  })
  .catch((error) => {
    console.log('Failure:', error.message);
  });*/


  //Exercise 2.1: Promise.all and Promise.allSettled
/*
This script demonstrates how to fetch and log data from two different API endpoints concurrently.
It uses async/await with Promise.all() to wait for both network requests to complete before
processing the responses.
*/

// Define the base URL for the API.
//const BASE_URL = 'https://v2.api.noroff.dev/old-games';

/**

Fetches game data for a given game ID from the Noroff API.

@param {number} gameId - The ID of the game to fetch.

@returns {Promise<object>} A promise that resolves with the parsed JSON data.
*/

/*const BASE_URL = 'https://v2.api.noroff.dev/old-games';
console.log(BASE_URL);

async function fetchGames() {
  console.log('Initiating current API calls...');

  try {
    const responses = await Promise.all([fetch(`${BASE_URL}/1`),
    fetch(`${BASE_URL}/2`)]);

   for (const response of responses) {
    if(!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} from ${response.url}`);
      
    }
   }

   const games = await Promise.all(
    responses.map(response => response.json())
   );

   console.log('Fetching games was successful! Here is the data:')
   console.log(games);
  } catch (error) {
    console.log('At least one of the games could not be fetched from the API.', error);
  }

}
fetchGames();*/

/*const BASE_URL = 'https://v2.api.noroff.dev/old-games';
console.log(BASE_URL);

async function fetchGamesRobustly() {
  console.log('Initiating current API calls...');

  try {
    const responses = await Promise.allSettled([fetch(`${BASE_URL}/1`),
    fetch(`${BASE_URL}/9999`),
    fetch(`https://invalid.url.to.test.rejection`)
]);

   for (const result of responses) {
      if (result.status === 'fulfilled') {
        const response = result.value;
        if (response.ok) {
          // Process and log JSON for fulfilled and OK responses
          const gameData = await response.json();
          console.log(`🤩 Game data fetched successfully for: ${gameData.title}`);
          console.log(gameData);
        } else {
          // Log a warning for fulfilled but not-OK responses
          console.warn(`⚠️ Warning: Fetch was successful, but the response status was not ok: ${response.status} from ${response.url}`);
        }
      } else if (result.status === 'rejected') {
        // Log an error for rejected promises (e.g., network errors)
        console.error(`❌ Error: A network request failed. Reason:`, result.reason);
      }
    }
    console.log('All promises have settled. Check the logs above for individual results.');
  } catch (error) {
    // This catch block would only be reached if Promise.allSettled itself failed, which is rare
    console.error('An unexpected error occurred during the robust fetch process:', error);
  }
}

fetchGamesRobustly();*/

//Exercise Promise.any

/*async function fetchFromFastestSource() {
  //define an array of three URL
  const urls = [
    'https://v2.api.noroff.dev/invalid-endpoint ',
    'https://v2.api.noroff.dev/old-games/8',
    'https://another.invalid.com/data',
  ];
//Create an array of promises by mapping over your URLs array. For each URL, create a fetch promise.
const promises = urls.map(url =>
    fetch(url)
    //Chain a .then() to handle the result. Inside the .then()
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
  );

  try {
    //Use Promise.any to wait for the first successful fetch.
    const result = await Promise.any(promises);
    console.log("Success! Received API:", result);
    return result;
    //Chain a .catch() to handle the case where all promises might fail. Log the error.errors to see the collection of failures.
  } catch (error) {
    console.error("All promises failed:", error.errors);
    throw new Error("All endpoints failed to return a valid response.");
  }

}

fetchFromFastestSource();*/



//Exercise: using parallel await
//const BASE_URL = 'https://v2.api.noroff.dev/old-games';
//console.log(BASE_URL);

/*async function fetchAndHydrateGames() {
  const BASE_URL = 'https://v2.api.noroff.dev/old-games';
  console.log(`Starting the game hydration process from: ${BASE_URL}`);

  try {
    // 1. Fetch the main "Old Games" endpoint.
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 2. Get the JSON from the response.
    const { data: allGames } = await response.json();

    // 3. Use .slice() to get the first four games.
    const firstFourGames = allGames.slice(0, 4);
    console.log('First four games to hydrate:', firstFourGames);

    // 4. Use .map() to create an array of new fetch promises for each game's details.
    const gameDetailPromises = firstFourGames.map(game => {
      const url = `${BASE_URL}/${game.id}`;
      return fetch(url);
    });

    // 5. Use await Promise.all() to wait for the detail fetches to resolve.
    const detailResponses = await Promise.all(gameDetailPromises);

    // 6. Create another Promise.all() to get JSON from all responses.
    const gamesWithDetails = await Promise.all(
      detailResponses.map(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} for URL: ${response.url}`);
        }
        return response.json();
      })
    );

    // 7. Log the name of each game.
    console.log('Successfully hydrated games:');
    gamesWithDetails.forEach(game => {
      console.log(game.data.name);
    });

    // Return the full array of games with details for further use
    return gamesWithDetails;

  } catch (error) {
    console.error('An error occurred during the fetch and hydration process:', error.message);
  }
}

// Call the main function to start the process
fetchAndHydrateGames();*/


//Exercise: window.addEventListener

/*window.addEventListener('unhandledrejection', (event) => {
  event.preventDefault();
  console.log("A global handler has caught an error.");
  console.error('The Reason was:', event.reason);
});

function createIntentionalError() {
  return Promise.reject(new Error('This is a test failure from the task'));
}
createIntentionalError();*/

