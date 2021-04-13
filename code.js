var products = [
    ['imgs/Products/Product%201.png', 'Fancy Chair', 2500, 'description1'],
    ['imgs/Products/Product%201.png', 'Not Fancy Chair', 3500, 'description2'],
    ['imgs/Products/Product%201.png', 'Random Chair', 1000, 'description3']
];

var products2 = [
    ['imgs/Products/Product%201.png', 'Fancy Chair', 2500, 'description1'],
    ['imgs/Products/Product%201.png', 'Not Fancy Chair', 3500, 'description2'],
    ['imgs/Products/Product%201.png', 'Random Chair', 1000, 'description3']
];

var products3 = [
    ['imgs/Products/Product%201.png', 'Fancy Chair', 2500, 'description1'],
    ['imgs/Products/Product%201.png', 'Not Fancy Chair', 3500, 'description2'],
    ['imgs/Products/Product%201.png', 'Random Chair', 1000, 'description3']
];

var products4 = [
    ['imgs/Products/Product%201.png', 'Fancy Chair', 2500, 'description1'],
    ['imgs/Products/Product%201.png', 'Not Fancy Chair', 3500, 'description2'],
    ['imgs/Products/Product%201.png', 'Random Chair', 1000, 'description3']
];

function loadProducts() {
    var main = document.getElementById('item1');

    var ele = document.createElement('li');
    var title = document.createElement('h1');
    var price = document.createElement('h2');
    var desc = document.createElement('p');

    main.appendChild(ele);
    ele.appendChild(title);
    ele.appendChild(price);
    ele.appendChild(desc);

    title.innerHTML = products[0][1];
    price.innerHTML = '$' + products[0][2];
    desc.innerHTML = products[0][3];

    var main2 = document.getElementById('item2');

    var ele2 = document.createElement('li');
    var title2 = document.createElement('h1');
    var price2 = document.createElement('h2');
    var desc2 = document.createElement('p');

    main2.appendChild(ele2);
    ele2.appendChild(title2);
    ele2.appendChild(price2);
    ele2.appendChild(desc2);

    title2.innerHTML = products2[0][1];
    price2.innerHTML = '$' + products2[0][2];
    desc2.innerHTML = products2[0][3];

    var main3 = document.getElementById('item3');

    var ele3 = document.createElement('li');
    var title3 = document.createElement('h1');
    var price3 = document.createElement('h2');
    var desc3 = document.createElement('p');

    main3.appendChild(ele3);
    ele3.appendChild(title3);
    ele3.appendChild(price3);
    ele3.appendChild(desc3);

    title3.innerHTML = products3[0][1];
    price3.innerHTML = '$' + products3[0][2];
    desc3.innerHTML = products3[0][3];

    var main4 = document.getElementById('item4');

    var ele4 = document.createElement('li');
    var title4 = document.createElement('h1');
    var price4 = document.createElement('h2');
    var desc4 = document.createElement('p');

    main4.appendChild(ele4);
    ele4.appendChild(title4);
    ele4.appendChild(price4);
    ele4.appendChild(desc4);

    title4.innerHTML = products4[0][1];
    price4.innerHTML = '$' + products4[0][2];
    desc4.innerHTML = products4[0][3];

} //end of loadProducts

function itemSelect() {
    for (let i = 0; i < products.length; i++) {
        let line1 = '<img src="' + products[i][0] + '" height="250vh">';
        document.getElementById('item1').innerHTML += line1;
    }

    for (let i = 0; i < products2.length; i++) {
        let line2 = '<img src="' + products2[i][0] + '" height="250vh">';
        document.getElementById('item2').innerHTML += line2;
    }

    for (let i = 0; i < products3.length; i++) {
        let line3 = '<img src="' + products3[i][0] + '" height="250vh">';
        document.getElementById('item3').innerHTML += line3;
    }

    for (let i = 0; i < products4.length; i++) {
        let line4 = '<img src="' + products4[i][0] + '" height="250vh">';
        document.getElementById('item4').innerHTML += line4;
    }
} //end of itemSelect

//function add() {  
//    var button = document.createElement('addButton');
//    document.getElementById(button).innerHTML = ;
//} //end of add


window.onload = function () {
    itemSelect();
    loadProducts();
}
