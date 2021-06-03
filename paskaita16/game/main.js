

let selected;

let score = 0;

function setup() {

  const scoreElement = document.querySelector('#score');

  scoreElement.innerHTML = score;

  const gameContainer = document.querySelector('#game');

  const girdSize = 8;

  const numberList = [];

  for (let i = 1; i <= girdSize / 2; i += 1) {
    numberList.push(i);
    numberList.push(i);
  }

  const cardList = [];

  const cardSolved = [];

  const state = {
    beforeHide: false,
  }

  for (let i = 0; i < girdSize; i += 1) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = numberList.splice(Math.floor(Math.random() * numberList.length), 1)[0];

    card.addEventListener('click', function () {
      if (state.beforeHide) {
        return;
      }
      card.classList.add('open');
      if (selected !== undefined) {
        const innerTextFirst = cardList[selected].innerText;
        const innerTextSecond = card.innerText;
        if (innerTextFirst == innerTextSecond && cardList[selected] !== card) {

          cardSolved.push(selected);
          cardSolved.push(i);
          const oldSelected = selected;
          setTimeout(function () {
            cardList[oldSelected].className = 'card solved';
            card.className = 'card solved';
            anime({
              targets: [cardList[oldSelected], card],
              translateY: 1000
            });
          }, 300);

          if (girdSize === cardSolved.length) {
            document.querySelector('.congrats-container').style.display = '';
          }
        } else {
          state.beforeHide = true;
          setTimeout(function () {
            state.beforeHide = false;
            for (let k = 0; k < cardList.length; k += 1) {
              cardList[k].classList.remove('open');
            }
          }, 300);
        }


        selected = undefined;

        score += 1;
        scoreElement.innerHTML = score;

      } else {
        for (let k = 0; k < cardList.length; k += 1) {
          if (i !== k && selected !== i) {
            cardList[k].classList.remove('open');
          }
        }
        selected = i;
      }
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
