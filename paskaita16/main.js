function onLoad() {

  window.addEventListener('scroll', function () {
    console.log('Alio?');
  });

  document.querySelector('body').addEventListener('click', function () {
    document.querySelector('.side-bar').className = 'side-bar';
    console.log('Body clicked');
  });

  document.querySelector('button').addEventListener('click', function (event) {
    console.log(event);
    event.stopPropagation();
    document.querySelector('.side-bar').className = 'side-bar open';
    console.log('Button clicked');
  });

  document.querySelector('.side-bar').addEventListener('click', function (event) {
    event.stopPropagation();
  });

  const elm = document.querySelector('form');
  if (elm) {
    elm.addEventListener('submit', function (event) {
      event.preventDefault();
    });
  }

}

window.addEventListener('load', onLoad);
