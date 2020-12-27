"use strict";

window.onload = function () {
  for (let i = 0; i < catList.length; i++) {
    const cat = catList[i];
    const container = document.getElementById('cat-container');
    const aTag = document.createElement('a');
    /**
     * 1.
     * Atrušiuoti pagal title length, kuriu length butu daugiau arba lygu 8
     */
    /**
     * 2.
     * Uzdeti koki skirtinga background-color jei href turi zodi shorthair
     * Galima naudoti string.includes('') = boolean
     */
    aTag.href = cat.href;
    aTag.innerHTML = cat.title;
    container.appendChild(aTag);
  }
}