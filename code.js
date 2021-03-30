var products = [
    ['product1', 3500, 'description1'],
    ['product2', 3500, 'description2'],
    ['product3', 3500, 'description3'],
    ['product4', 3500, 'description4']
];

function loadProducts() {
    var main = document.getElementById('shopping');

    var ele = document.createElement('li');
    var title = document.createElement('h1');
    var price = document.createElement('h2');
    var desc = document.createElement('p');

    var deleteButton = document.createElement('button');

    main.appendChild(ele);
    ele.appendChild(title);
    ele.appendChild(price);
    ele.appendChild(desc);
    ele.appendChild(deleteButton);

    title.innerHTML = products[0][0];
    price.innerHTML = '$' + products[0][1];
    desc.innerHTML = products[0][2];

}
