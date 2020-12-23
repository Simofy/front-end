window.onload = function () {
  const buttonElement = document
    .getElementById('button');
  const decorationsElement = document
    .getElementById('decorations');
  buttonElement
    .onclick = function () {
      buttonElement.toggleAttribute('data-active');
      decorationsElement.toggleAttribute('data-light-on');
      document.body.toggleAttribute('data-light-on');
    }
  // i l k
  for (let i = 0; i < 6; i++) {
    const light = document.createElement('div');
    light.className = 'light';
    setInterval(function () {
      light
        .style
        .backgroundColor = `#${((1 << 24) * Math.random() | 0).toString(16)}`;
    }, 400);
    light.style.transform = "translate(0, "
      + Math.random() * 50 +
      "px)";
    decorationsElement.appendChild(light);
  }
}
