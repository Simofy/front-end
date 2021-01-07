

let selected;

let score = 0;

function setup() {

  const scoreElement = document.querySelector('#score');

  scoreElement.innerHTML = score;

  const gameContainer = document.querySelector('#game');

  const girdSize = 2;

  const numberList = [];

  for (let i = 1; i <= girdSize / 2; i += 1) {
    numberList.push(i);
    numberList.push(i);
  }

  const cardList = [];

  const cardSolved = [];

  for (let i = 0; i < girdSize; i += 1) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = numberList.splice(Math.floor(Math.random() * numberList.length), 1)[0];

    card.addEventListener('click', function () {
      card.style.color = 'white';

      if (selected !== undefined) {
        const innerTextFirst = cardList[selected].innerText;
        const innerTextSecond = card.innerText;
        if (innerTextFirst == innerTextSecond) {
          cardList[selected].className = 'card solved';
          card.className = 'card solved';
          cardSolved.push(selected);
          cardSolved.push(i);

          if (girdSize === cardSolved.length) {
            document.querySelector('.congrats-container').style.display = '';
          }
        }
        selected = undefined;
        console.log(innerTextFirst, innerTextSecond, i);

        score += 1;
        scoreElement.innerHTML = score;

      }

      for (let k = 0; k < cardList.length; k += 1) {
        if (i !== k && selected !== i) {
          cardList[k].style.color = 'black';
        }
      }
      selected = i;
    });

    cardList.push(card);
    gameContainer.appendChild(card);
  }
}


function onload() {
  setup();
  document.querySelector('button').addEventListener('click', function () {
    document.querySelector('#game').innerHTML = '';
    document.querySelector('.congrats-container').style.display = 'none';
    score = 0;
    selected = undefined;
    setup();
  });
}

window.addEventListener('load', onload);
