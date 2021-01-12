"use strict";

window.addEventListener('load', function () {

  const container = document.querySelector('.container');
  document.addEventListener('mousemove', function (event) {
    const { pageX, pageY } = event;
    const { innerWidth, innerHeight } = window;
    const halfW = innerWidth / 2;
    const halfH = innerHeight / 2;
    const rationX = ((pageX - halfW) / halfW) * 0.1;
    const rationY = ((pageY - halfH) / halfH) * 0.1;
    container
      .style
      .transform = `
      scale(0.8)
      perspective(300px)
      rotate3d(0, 1, 0, ${Math.asin(rationX)}rad)
      rotate3d(1, 0, 0, ${Math.asin(-rationY)}rad)
    `;
  })

  // const elmList = document.querySelectorAll('div[class|=animated]');
  // for (let i = 0; i < elmList.length; i += 1) {
  //   const animatedElm = elmList[i];
  //   animatedElm.classList.add('random-anim')
  //   animatedElm.addEventListener('click', function () {
  //     animatedElm.remove();
  //   });
  // }
  // console.log(elmList)

  // const container = document
  //   .querySelector('#special-container');

  // const savedSize = localStorage.getItem('size');
  // if (savedSize) {
  //   const obj = JSON.parse(savedSize);
  //   container.style.width = obj.width;
  //   container.style.height = obj.height;
  // }

  // document
  //   .querySelector('#special-container')
  //   .addEventListener('click', function () {


  //     function onMouseMove(event) {
  //       const x = event.clientX;
  //       const y = event.clientY;
  //       container.style.width = (x - 80) + 'px';
  //       container.style.height = (y - 80) + 'px';
  //     };
  //     document.addEventListener('mousemove', onMouseMove);
  //     document.addEventListener('mouseup', function () {
  //       document.removeEventListener('mousemove', onMouseMove);

  //       localStorage.setItem('size', JSON.stringify({
  //         width: container.style.width,
  //         height: container.style.height,
  //       }));

  //     });

  //   });
});