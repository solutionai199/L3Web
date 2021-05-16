var products = [
  ['imgs/Products/Product%201.png', 'Fancy Chair', 2500, 'description1'],
  ['imgs/Products/Product%201.png', 'Not Fancy Chair', 3500, 'description2'],
  ['imgs/Products/Product%201.png', 'Random Chair', 1000, 'description3']
];

var cartItems = [];
var totalItems = 0;

function loadProducts() { //loading products on the product page

  var main = document.getElementById('items');

  for (var i = 0; i < products.length; i++) {

    var ele = document.createElement('li');
    var pic = document.createElement('img');
    var header = document.createElement('h2');
    var price = document.createElement('h2');
    var desc = document.createElement('p');

    var increase = document.createElement('button');
    var decrease = document.createElement('button');
    var box = document.createElement('input');
    var add = document.createElement('button');

    main.appendChild(ele);
    ele.appendChild(pic);
    ele.appendChild(header);
    ele.appendChild(price);
    ele.appendChild(desc);

    ele.appendChild(increase);
    ele.appendChild(decrease);
    ele.appendChild(box);
    ele.appendChild(add);

    pic.src = products[i][0];
    header.innerHTML = products[i][1];
    price.innerHTML = '$' + products[i][2];
    desc.innerHTML = products[i][3];

    increase.innerHTML = "+";
    decrease.innerHTML = "-";
    box.type = 'number';
    add.innerHTML = 'Add To Cart';

    box.setAttribute('id', 'input' + i);
    box.value = 1;

    add.dataset.cartIndex = i;
    add.addEventListener('click', adding, false);
  }
}

function adding(event) {
  const NUM = event.currentTarget.dataset.cartIndex;
  cartItems.push([products[NUM]]);
  cartItems[cartItems.length - 1][1] = Number(document.getElementById('input' + NUM).value);

  updateCart();
}

function updateCart() {
  var itemCounter = document.getElementById('itemCount');
  totalItems = 0;
  for (var i = 0; i < cartItems.length; i++) {
    totalItems += cartItems[i][1];
  }

  window.sessionStorage.setItem('cartItems', JSON.stringify(cartItems));

  itemCounter.innerHTML = totalItems;
}

function loadCart() { // loading products on cart page

  var main = document.getElementById('cartProducts');

  var data = sessionStorage.getItem('cartItems');
  data = JSON.parse(data);

  cartItems = data;

  for (var i = 0; i < products.length; i++) {

    var ele = document.createElement('li');
    var pic = document.createElement('img');
    var header = document.createElement('h2');
    var price = document.createElement('h2');
    var subtract = document.createElement('button');
    var amount = document.createElement('h2');
    var subtotal = document.createElement('h3');

    main.appendChild(ele);
    ele.appendChild(pic);
    ele.appendChild(header);
    ele.appendChild(price);
    ele.appendChild(subtract);
    ele.appendChild(amount);
    ele.appendChild(subtotal);

    pic.src = cartItems[i][0][0];
    header.innerHTML = cartItems[i][0][1];
    price.innerHTML = '$' + cartItems[i][0][2];
    amount.innerHTML = cartItems[i][1];
    subtotal.innerHTML = '$' + cartItems[i][1] * cartItems[i][0][2];

    subtract.innerHTML = 'Remove';

    subtract.dataset.cartIndex = i;
    subtract.addEventListener('click', deleteItems, false);
  }
}

function deleteItems() {
  alert('gone');
}

window.onload = function() {
  loadProducts();
} //end of window.onload
