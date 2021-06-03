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

// alert(localStorage.getItem('option'));

// document.getElementById('option-1').addEventListener('click', function () {

// })

document.querySelector('select').addEventListener('change', function (event) {
  const target = event.target;
  localStorage.setItem('theme', target.value);
  applyTheme(target.value);
})
// });


const array = [1, 2, 3];

console.log('For');
let shouldRunFor = true;
for (let i = 1; array.length; i++) {
  if (i == 3) {
    shouldRunFor = false;
  }
  console.log(i);
}

//___________________
let i = 1;
if (shouldRunFor) {
  if (i == 3) {
    shouldRunFor = false;
  }
  console.log(i);
  i++;
}
if (shouldRunFor) {
  if (i == 3) {
    shouldRunFor = false;
  }
  console.log(i);
  i++;
}
if (shouldRunFor) {
  if (i == 3) {
    shouldRunFor = false;
  }
  console.log(i);
  i++;
}


// console.log('While')
// let i = 0;
// let k = 0;
// while (i < 10) {
//   if (k % 10 === 0) {
//     i++;
//     console.log(k);
//   }
//   k++;
// }

