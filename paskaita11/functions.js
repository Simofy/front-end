"use strict"


let arrayOfColors = [
  'red', // index 0
  'yellow', // index 1
  'green', // index 2
  'purple',
  'black',
]

let index = 0;

/**
 * Add width and height to function changeColor
 */


function changeColor() {
  let randomLeft = Math.random() * 100;
  let element = document
    .getElementById('container');
  element.style.backgroundColor = arrayOfColors[index];
  element.style.left = randomLeft + '%';
  console.log(arrayOfColors[index], index);
  // index += 1;
  index = (index + 1) % arrayOfColors.length;
}

function onLoad() {
  document.getElementById('buttonChangeColor').onclick = changeColor;
}

window.onload = onLoad;

