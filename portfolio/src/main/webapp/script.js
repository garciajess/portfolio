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

/* Adds a random greeting to the page. */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/* Adds a random TV show quote to the page. */
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

/* Fetches quotes from the servers and adds them to the DOM. */
function getQuoteJSON() {
  fetch('/data').then(response => response.json()).then((quotes) => {
    console.log("Fetching quote from server");
    const quoteListElement = document.getElementById('inspiration-container');
    quoteListElement.innerHTML = '';
    quoteListElement.appendChild(createListElement('Quote: ' + quotes[0]));
    quoteListElement.appendChild(createListElement('Quote: ' + quotes[1]));
    quoteListElement.appendChild(createListElement('Quote: ' + quotes[2]));

  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}