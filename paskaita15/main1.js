


// Paprastesnis solution

// idName elementas kuriame bus ideti elementai su tagName 
function populateCart(idName, tagName, limit) {
  fetch(`https://simutis.dev/api/generate-shopping-cart?${limit ? `limit=${limit}​​` : ''}​​`)
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById(idName);
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        // Kaip atrodo item objektas
        const sablonas = {
          "name": "Dexter Jettster",
          "price": 91.58376969420108,
          "vegan": true
        };
        //______________________
        const element = document.createElement(tagName);
        const tableCellName = document.createElement('td');
        const tableCellPrice = document.createElement('td');
        const tableCellVegan = document.createElement('td');
        tableCellName.innerText = item.name;
        tableCellPrice.innerText = item.price;
        tableCellVegan.innerText = item.vegan;

        element.appendChild(tableCellName);
        element.appendChild(tableCellPrice);
        element.appendChild(tableCellVegan);

        container.appendChild(element);
        //______________________
      }
    })
}


window.onload = function () {

  populateCart('table-body', 'tr');

}
/**
 * Sukurti lentele  [name price vegan]
 *                  [asdasd, 10.15, taip]
 * Naudojant func populateCart ir joje pakeisti koda tarp komentaru bloku
 */