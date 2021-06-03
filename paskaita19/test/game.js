"use script"

window.addEventListener('load', function () {
  const arr = [1, 2, 3, 4, 5, 6];
  const elemList = document.querySelectorAll('div[class|=animated]');
  console.log(elemList)
  for (let i = 0; i < elemList.length; i += 1) {
    const animatedElm = elemList[i];
    const randomId = Math.floor(Math.random() * arr.length);
    animatedElm.classList.add(`animated-${arr[randomId]}`);
    arr.splice(randomId, 1);
    animatedElm.addEventListener('click', function () {
      animatedElm.remove();
      console.log(document.querySelectorAll('div.animated'))
      if (document.querySelectorAll('div[class|=animated]').length === 0) {
        document.querySelector('.modal').style.display = 'block';
      }
    });

  };

});