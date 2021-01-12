"use strict";

function applyTheme(theme) {
  fetch('/paskaita17/' + theme + '.css')
    .then((response) => response.text())
    .then(function (text) {
      document.querySelector('style').innerHTML = text;
    })
}

// window.addEventListener('load', function () {
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
  document.querySelector('select').value = savedTheme;
} else {
  applyTheme('theme-1');
}

alert(localStorage.getItem('option'));

document.getElementById('option-1').addEventListener('click', function () {

})

document.querySelector('select').addEventListener('change', function (event) {
  const target = event.target;
  localStorage.setItem('theme', target.value);
  applyTheme(target.value);
})
// });

