'use strict';

const url = 'https://api.icndb.com/jokes/random';
const paragraph = document.getElementById('joke');
const button = document.getElementById('get-joke');

button.addEventListener('click', function () {
  getJoke();
});

function getJoke() {
  let xhr = new XMLHttpRequest();
  button.disabled = true;

  xhr.open('GET', url);

  xhr.addEventListener('load', function () {
    const response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
    button.disabled = false;
  });
  xhr.send();
}

getJoke();