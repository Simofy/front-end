const dummyShoppingList = [
  { vegan: true, name: 'banana', price: 1 },
  { vegan: false, name: 'shrimps', price: 5.5 },
  { vegan: true, name: 'avocado', price: 6.4 },
  { vegan: true, name: 'tomato', price: 2 },
  { vegan: true, name: 'pineapple', price: 3 },
  { vegan: false, name: 'salmon', price: 8.1 },
]

const shoppingCart = [];

function renderCart() {
  const cart = document.getElementById('cart');
  cart.innerHTML = '';
  console.log(shoppingCart);
  let totalPrice = 0;
  let veganOptions = 0;
  let restPrice = 0;
  for (let index = 0; index < shoppingCart.length; index++) {
    const cartItem = shoppingCart[index];
    const item = document.createElement('div');
    const name = document.createElement('span');


    // Prideti prie teksto prekes kaina
    name.innerText = cartItem.name + ' ' + cartItem.price;
    totalPrice += cartItem.price;
    if (cartItem.vegan) {
      veganOptions += cartItem.price;
    } else {
      restPrice += cartItem.price;
    }


    item.appendChild(name);
    const buttonRemove = document.createElement('button');
    buttonRemove.innerText = 'Remove';
    buttonRemove.onclick = function () {
      removeFromList(index);
    }
    item.appendChild(buttonRemove);
    cart.appendChild(item);
  };
  const total = document.getElementById('total');
  // Suskaiciuoti total cart suma
  // Naudoti for loop
  total.innerHTML = `
  Total: ${totalPrice}, vegan options: ${veganOptions}, price without vegan options: ${restPrice}
  `;
  // Bonus add vegan price and the rest price
}

function addToList(shoppingItem) {
  shoppingCart.push(shoppingItem);
  // Ikelti i shoppingCart shoppingItem objekta naudojant .push()
  renderCart();
}

function removeFromList(index) {
  // Pasalinti naudojant index
  // Skaityti apie splice funkcija cia:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  shoppingCart.splice(index, 1);
  renderCart();
}

window.onload = function () {
  const body = document.getElementById('body');
  for (let i = 0; i < dummyShoppingList.length; i++) {
    const listItem = dummyShoppingList[i];
    //____
    const div = document.createElement('div');
    div.className = 'shopping-item';
    div.innerHTML = `
    <span>${listItem.name}</span>
    <span>${listItem.price}</span>
    `;
    const buttonAdd = document.createElement('button');
    //____
    buttonAdd.onclick = function () {
      addToList(listItem);
    }
    buttonAdd.textContent = 'Add';
    //____
    div.appendChild(buttonAdd);
    body.appendChild(div);
    //____

  }
}