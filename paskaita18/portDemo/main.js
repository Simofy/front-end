function updateLocalStorage(key, value) {
  const oldStorage = JSON.parse(localStorage.getItem('saved')) || {};
  localStorage.setItem('saved', JSON.stringify({
    ...oldStorage,
    [key]: value,
  }))
}

window.addEventListener('load', function () {
  const container = document.querySelector('.container');
  const list = JSON.parse(localStorage.getItem('saved')) || {};
  for (let i = 0; i < 4; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';

    for (let k = 0; k < 4; k += 1) {
      const hex = document.createElement('div');

      hex.classList.toggle('')


      hex.className = 'hexagon';
      const state = list[`hex-${i}-${k}`];
      if (state) {
        switch (state) {
          case 'green':
            hex.setAttribute('data-state', 'green');
            break;
          case 'blue':
            hex.setAttribute('data-state', 'blue');
            break;
          default:
            break;
        }

        for (let i = 0; i < 10; i += 1) {
          if (i === 5) {
            continue;
          }
          console.log(i);
        }

        function test(state) {
          let a = '';

          switch (state) {
            case 'green':
              console.log('green');
              break;
            case 'blue':
              console.log('blue');
              break;
            case 'red':
              console.log('red');
              break;
            case 'yellow':
              console.log('yellow');
              break;
            default:
              console.log('default');
              break;
          }
        }

      }
      hex.addEventListener('click', function () {
        const oldState = hex.getAttribute('data-state');
        let newState = '';
        if (oldState) {
          if (oldState === 'green') {
            newState = 'blue';
          }
        } else {
          newState = 'green';
        }
        updateLocalStorage(`hex-${i}-${k}`, newState);
        hex.setAttribute('data-state', newState);
      });
      row.appendChild(hex)
    }
    container.appendChild(row)
  }
})