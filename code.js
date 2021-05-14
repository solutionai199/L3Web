var products = [
  ['imgs/Products/Product%201.png', 'Fancy Chair', 2500, 'description1'],
  ['imgs/Products/Product%201.png', 'Not Fancy Chair', 3500, 'description2'],
  ['imgs/Products/Product%201.png', 'Random Chair', 1000, 'description3']
];

var products2 = [
  ['imgs/Products/Product%201.png', 'Epic', 2500, 'description1'],
  ['imgs/Products/Product%201.png', 'Gamer', 3500, 'description2'],
  ['imgs/Products/Product%201.png', 'Me', 1000, 'description3']
];

var products3 = [
  ['imgs/Products/Product%201.png', 'This', 2500, 'description1'],
  ['imgs/Products/Product%201.png', 'Is', 3500, 'description2'],
  ['imgs/Products/Product%201.png', 'Chair', 1000, 'description3']
];

var products4 = [
  ['imgs/Products/Product%201.png', 'What', 2500, 'description1'],
  ['imgs/Products/Product%201.png', 'Is', 3500, 'description2'],
  ['imgs/Products/Product%201.png', 'Up', 1000, 'description3']
];

var cart = [];

function itemSelect() {
  for (let ii = 1; ii <= 1; ii++) {
    for (let i = 0; i < products.length; i++) {
      let items = '<div class="chairs"><img class="img" src="' + products[i][0] + '"> <h3>' + products[i][1] + '</h3> <h5>' + products[i][3] + '</h5> <h3>$' + products[i][2] + '</h3></div>';
      document.getElementById('item' + ii).innerHTML += items;
      buttons();
    }
  }

  for (let ii = 2; ii <= 2; ii++) {
    for (let i = 0; i < products2.length; i++) {
      let items2 = '<div class="chairs"><img class="img" src="' + products2[i][0] + '"> <h3>' + products2[i][1] + '</h3> <h5>' + products2[i][3] + '</h5> <h3>$' + products2[i][2] + '</h3></div>';
      document.getElementById('item' + ii).innerHTML += items2;
      buttons2();
    }
  }

  for (let ii = 3; ii <= 3; ii++) {
    for (let i = 0; i < products3.length; i++) {
      let items3 = '<div class="chairs"><img class="img" src="' + products3[i][0] + '"> <h3>' + products3[i][1] + '</h3> <h5>' + products3[i][3] + '</h5> <h3>$' + products3[i][2] + '</h3></div>';
      document.getElementById('item' + ii).innerHTML += items3;
      buttons3();
    }
  }

  for (let ii = 4; ii <= 4; ii++) {
    for (let i = 0; i < products4.length; i++) {
      let items4 = '<div class="chairs"><img class="img" src="' + products4[i][0] + '"> <h3>' + products4[i][1] + '</h3> <h5>' + products4[i][3] + '</h5> <h3>$' + products4[i][2] + '</h3></div>';
      document.getElementById('item' + ii).innerHTML += items4;
      buttons4();
    }
  }
} //end of itemSelect

function buttons() {
  var main = document.getElementById('item1');
  var add = document.createElement('button');
  var minus = document.createElement('button');
  var box = document.createElement('input');

  main.appendChild(add);
  main.appendChild(minus);
  main.appendChild(box);

  add.innerHTML = "+";
  minus.innerHTML = "-";
  box.type = 'number';
}

function buttons2() {
  var main = document.getElementById('item2');
  var add = document.createElement('button');
  var minus = document.createElement('button');

  main.appendChild(add);
  main.appendChild(minus);

  add.innerHTML = "+";
  minus.innerHTML = "-";
}

function buttons3() {
  var main = document.getElementById('item3');
  var add = document.createElement('button');
  var minus = document.createElement('button');

  main.appendChild(add);
  main.appendChild(minus);

  add.innerHTML = "+";
  minus.innerHTML = "-";
}

function buttons4() {
  var main = document.getElementById('item4');
  var add = document.createElement('button');
  var minus = document.createElement('button');

  main.appendChild(add);
  main.appendChild(minus);

  add.innerHTML = "+";
  minus.innerHTML = "-";
}

window.onload = function() {
  itemSelect();
} //end of window.onload
