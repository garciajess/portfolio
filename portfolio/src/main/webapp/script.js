// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function addRandomQuote() {
  /* TV Show Full House quotes */
  const quotes =
      ['You got it, dude. - Michelle Tanner', 
      'Cut. It. Out! - Uncle Joey', 
      'Have mercy! - Uncle Jesse', 
      'Oh, mylanta! - DJ Tanner', 
      "It's always open! - DJ Tanner"];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}

/**
 * Fetches the hello from the server and adds it to the DOM.
 */
function getHello() {
  console.log('Fetching a hello.');
  const responsePromise = fetch('/data');
  responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addHelloToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');
  const textPromise = response.text();
  textPromise.then(addHelloToDom);
}

/** Adds the hello to the DOM. */
function addHelloToDom(hello) {
  console.log('Adding hello to dom: ' + hello);
  const helloContainer = document.getElementById('hello-container');
  helloContainer.innerText = hello;
}