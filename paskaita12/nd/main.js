"use strict";

window.onload = function () {
  const container = document.getElementById('cat-container');
  for (let i = 0; i < catList.length; i++) {
    const cat = catList[i];
    if (cat.title.length >= 8) {
      const aTag = document.createElement('a');
      const aTagImg = document.createElement('img');
      /**
       * 1.
       * Atrušiuoti pagal title length, kuriu length butu daugiau arba lygu 8
       */
      /**
       * 2.
       * Uzdeti koki skirtinga background-color jei href turi zodi Shorthair
       * Galima naudoti string.includes('') = boolean
       */
      if (cat.href.includes('Shorthair')) {
        aTag.style.backgroundColor = 'red';
      }
      if (cat.imageUrl) {
        aTagImg.src = cat.imageUrl;
      }
      aTag.href = cat.href;
      aTag.innerHTML = cat.title.toUpperCase();
      aTag.appendChild(aTagImg);

      container.appendChild(aTag);
    }
  }
  // let numberArray = [];

  // for (let i = 0; i < 10; i++) {
  //   numberArray.push(i * 80);
  // }

  // numberArray.forEach(function (steps) {
  //   // console.log(steps);
  // });

  // const newArray = numberArray.map(function (steps) {
  //   return steps + ' steps';
  // });

  // const test123 = {
  //   test: 1,
  //   labas: 'alio',
  //   'test-value': 1000,
  // };

  // let test321 = { ...test123 };

  // let test = 'asd';
  // document.body.innerHTML = '<span class="italic">' + 'asd' + "</span>";


  // test321.test *= 1000;

  // console.log(test.strike())

  // for (let i = 100; i >= 0; i--) {
  //   if (newArray[i] !== undefined) {
  //     console.log(newArray[i]);
  //   }
  // }
}
