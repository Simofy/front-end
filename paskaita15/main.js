"use strict";

const cart = [];


function populateTableRow(element, item, index, action) {

  //_____
  const tableRow = document.createElement('tr');
  const tableCellName = document.createElement('td');
  const tableCellPrice = document.createElement('td');
  const tableCellVegan = document.createElement('td');
  tableCellName.innerText = item.name;
  tableCellPrice.innerText = item.price;
  if (item.vegan) {
    tableCellVegan.innerText = 'Yes';
  } else {
    tableCellVegan.innerText = 'No';
  }
  tableRow.appendChild(tableCellName);
  tableRow.appendChild(tableCellPrice);
  tableRow.appendChild(tableCellVegan);

  // Ignore
  const tableCellButton = document.createElement('td');
  const button = document.createElement('button');
  button.className = 'btn btn-primary'
  button.innerText = action === 'add' ? 'Add' : 'Remove';
  button.onclick = function () {
    handleCartChange(item, action, index);
  };
  tableCellButton.appendChild(button);
  tableRow.appendChild(tableCellButton);
  // End Ignore




  element.appendChild(tableRow);
}

function renderTotalAmount(total) {
  const totalElement = document.getElementById('table-cart-footer-total');
  totalElement.innerText = `Total: ${total.toFixed(2)}$`;
}

function renderCartTable() {
  const table = document.getElementById('table-cart-body');
  table.innerHTML = '';
  let total = 0;
  for (let i = 0; i < cart.length; i += 1) {
    const item = cart[i];
    populateTableRow(table, item, i, 'remove');
    total += item.price;
  }
  renderTotalAmount(total);
}

function handleCartChange(item, state, index) {
  if (state === 'add') {
    cart.push(item);
  } else if (state === 'remove') {
    cart.splice(index, 1);
  } else if (state === 'removeAll') {
    cart.splice(0);
  }
  renderCartTable();
}



// idName elementas kuriame bus ideti elementai su tagName 
function populateCart(idName, tagName, limit) {
  fetch(`https://simutis.dev/api/generate-shopping-cart?${limit ? `limit=${limit}` : ''}`)
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById(idName);
      document.getElementById('spinner').remove();
      data.forEach((item, index) => {

        //______________________
        populateTableRow(container, item, index, 'add');
        //______________________
      });
    })
}

/**
 * Sukurti lentele  [name price vegan]
 *                  [asdasd, 10.15, taip]
 * Naudojant func populateCart ir joje pakeisti koda tarp komentaru bloku
 */


function onLoad() {
  const buttonClear = document.getElementById('button-clear');

  buttonClear.onclick = function () {
    handleCartChange(null, 'removeAll');
  }
  populateCart('table-body', 'tr', 100);
  renderCartTable();
  // for (let i = 0; i < 10; i += 1) {
  //   const listItem = document.createElement('span');
  //   listItem.innerText = 'Alio';
  //   listItem.className = 'list-item';

  //   listItem.onclick = function () {
  //     let prevElm = listItem.previousElementSibling;
  //     let nextElm = listItem.nextElementSibling;

  //     listItem.style.backgroundColor = 'green';

  //     while (prevElm) {
  //       prevElm.style.backgroundColor = 'red';
  //       prevElm = prevElm.previousElementSibling;
  //     }

  //     while (nextElm) {
  //       nextElm.style.backgroundColor = 'blue';
  //       nextElm = nextElm.nextElementSibling;
  //     }
  //   }
  //   container.appendChild(listItem);
  // }
}

window.onload = onLoad;