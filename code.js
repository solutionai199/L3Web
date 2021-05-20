var products = [
  ['imgs/Products/Product%201.png', 'Fancy Chair', 200, 'description'],
  ['imgs/Products/Product%201.png', 'Not Fancy Chair', 90, 'description'],
  ['imgs/Products/Product%201.png', 'Random Chair', 75, 'description'],
  ['imgs/Products/Product%201.png', 'Epic Chair', 500, 'description'],
  ['imgs/Products/Product%201.png', 'Sunday Afternoon Chair', 25, 'description'],
  ['imgs/Products/Product%201.png', 'Nice Chair', 100, 'description']
];

var cartItems = [];
var totalItems = 0;
var empty = false;
var plus = '<div class="increase">' + '+' + '</div>';
var minus = '<div class="decrease">' + '-' + '</div>';
var cartAdd = '<div class="cartAdd">' + 'Add To Cart' + '</div>';

function loadProducts() { //loading products on the product page

  var main = document.getElementById('items'); //where these elements will go on the cart html page

  for (var i = 0; i < products.length; i++) {

    //creating the elements properties
    var ele = document.createElement('li');
    var pic = document.createElement('img');
    var header = document.createElement('h2');
    var price = document.createElement('h2');
    var desc = document.createElement('p');
    var increase = document.createElement('button');
    var box = document.createElement('input');
    var decrease = document.createElement('button');
    var add = document.createElement('button');

    //appendchild makes all these elements childs of the list or goes under it
    main.appendChild(ele);
    ele.appendChild(pic);
    ele.appendChild(header);
    ele.appendChild(price);
    ele.appendChild(desc);
    ele.appendChild(increase);
    ele.appendChild(box);
    ele.appendChild(decrease);
    ele.appendChild(add);

    //sets these elements content to the html page
    pic.src = products[i][0];
    header.innerHTML = products[i][1];
    price.innerHTML = '$' + products[i][2];
    desc.innerHTML = products[i][3];
    increase.innerHTML = plus;
    decrease.innerHTML = minus;
    box.type = 'number';
    add.innerHTML = cartAdd;
    box.setAttribute('id', 'input' + i);
    box.value = 1;

    increase.dataset.cartIndex = i;
    increase.addEventListener('click', increasing, false);

    decrease.dataset.cartIndex = i;
    decrease.addEventListener('click', decreasing, false);

    add.dataset.cartIndex = i;
    add.addEventListener('click', adding, false);
  }
} //end of loadProducts

function increasing(num) {
  const NUM = event.currentTarget.dataset.cartIndex;
  var inputBox = document.getElementById('input' + NUM);
  inputBox.value++;
} //end of increasing

function decreasing(num) {
  const NUM = event.currentTarget.dataset.cartIndex;
  var inputBox = document.getElementById('input' + NUM);
  if (inputBox >= 1) { //stops it from going negative
    inputBox.value--;
  }
}

function adding(event) { //function for the button to add products to cart
  const NUM = event.currentTarget.dataset.cartIndex;
  cartItems.push([products[NUM]]); //pushes the products as the number dataset into the cart
  cartItems[cartItems.length - 1][1] = Number(document.getElementById('input' + NUM).value);

  updateCart();
} //end of adding

function updateCart() {
  var itemCounter = document.getElementById('itemCount');
  totalItems = 0;

  for (var i = 0; i < cartItems.length; i++) {
    totalItems += cartItems[i][1];
  }

  window.sessionStorage.setItem('cartItems', JSON.stringify(cartItems)); //stores the items in cart to the website so it isn't lost when changing pages
  itemCounter.innerHTML = totalItems;
} //end of updateCart

function loadCart() { // loading products on cart page
  var main = document.getElementById('cartProducts'); //where these elements will go on the cart html page

  var data = sessionStorage.getItem('cartItems');
  data = JSON.parse(data);
  cartItems = data;

  updateCart();

  for (var i = 0; i < cartItems.length; i++) {

    //creating the elements properties
    var ele = document.createElement('li');
    var pic = document.createElement('img');
    var header = document.createElement('h2');
    var price = document.createElement('h2');
    var subtract = document.createElement('button');
    var amount = document.createElement('h2');
    var subtotal = document.createElement('h3');
    var grandTotal = document.createElement('h2');

    //appendchild makes all these elements childs of the list or goes under it
    main.appendChild(ele);
    ele.appendChild(pic);
    ele.appendChild(header);
    ele.appendChild(price);
    ele.appendChild(amount);
    ele.appendChild(subtotal);
    ele.appendChild(subtract);
    ele.appendChild(grandTotal);

    //sets these elements content to the html page
    pic.src = cartItems[i][0][0];
    header.innerHTML = '<div class="name">' + cartItems[i][0][1] + '</div>';
    price.innerHTML = '<div class="price">' + '$' + cartItems[i][0][2] + '</div>';
    amount.innerHTML = '<div class="amount">' + cartItems[i][1] + '</div>';
    subtotal.innerHTML = '<div class="subtotal">' + '$' + cartItems[i][1] * cartItems[i][0][2] + '</div>';
    // grandTotal.innerHTML = '$' + cartItems[0][2] * cartItems[i][2];

    subtract.innerHTML = '<div class="delete">' + 'Remove' + '</div>';
    subtract.dataset.cartIndex = i;
    subtract.addEventListener('click', deleteItems, false);
  }
} //end of loadCart

function deleteItems() { //function for removing the items in the cart
  const NUM = event.currentTarget.dataset.cartIndex;
  delete cartItems[NUM];
  cartItems = cartItems.filter(item => item !== undefined);
  updateCart();
  loadCart();
  // window.location.reload(true);

  if (cartItems.length == 0) {
    console.log(empty);
    empty = true;
  }
  if (empty == true) {
    var main = document.getElementById('cartProducts');
    var text = document.createElement('h2');
    main.appendChild(text);
    text.innerHTML = 'Your Cart Is empty';
  }
} //end of deleteItems

window.onload = function() {
  loadProducts();
} //end of window.onload
