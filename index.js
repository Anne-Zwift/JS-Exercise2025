// index.js
/*import { add } from './utils.js';

function start() {
    const sum = add(5, 10);
    console.log(`The sum is: ${sum}`);
}

start();*/

//Exercise 2.1 Event Loop
//Micro-task runs before macro-task
console.log('A: Script start');//1

fetch('https://v2.api.noroff.dev/old-games/1').then(function () {
  console.log('B: Promise resolved');//micro, 3
});

setTimeout(function () {
  console.log('C: setTimeout finished');//macro, 4
}, 0);

console.log('D: Script end');//2

