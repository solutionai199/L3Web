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

function itemSelect() {
    for (let ii = 1; ii <= 1; ii++) {
        for (let i = 0; i < products.length; i++) {
            let items = '<div class="temp"><img class="img" src="' + products[i][0] + '"> <h3>' + products[i][1] + '</h3> <h5>' + products[i][3] + '</h5> <h3>' + products[i][2] + '</h3></div>';
            document.getElementById('item' + ii).innerHTML += items;
        }
    }

    for (let ii = 2; ii <= 2; ii++) {
        for (let i = 0; i < products2.length; i++) {
            let items2 = '<div class="temp"><img class="img" src="' + products2[i][0] + '"> <h3>' + products2[i][1] + '</h3> <h5>' + products2[i][3] + '</h5> <h3>' + products2[i][2] + '</h3></div>';
            document.getElementById('item' + ii).innerHTML += items2;
        }
    }

    for (let ii = 3; ii <= 3; ii++) {
        for (let i = 0; i < products3.length; i++) {
            let items3 = '<div class="temp"><img class="img" src="' + products3[i][0] + '"> <h3>' + products3[i][1] + '</h3> <h5>' + products3[i][3] + '</h5> <h3>' + products3[i][2] + '</h3></div>';
            document.getElementById('item' + ii).innerHTML += items3;
        }
    }

    for (let ii = 4; ii <= 4; ii++) {
        for (let i = 0; i < products4.length; i++) {
            let items4 = '<div class="temp"><img class="img" src="' + products4[i][0] + '"> <h3>' + products4[i][1] + '</h3> <h5>' + products4[i][3] + '</h5> <h3>' + products4[i][2] + '</h3></div>';
            document.getElementById('item' + ii).innerHTML += items4;
        }
    }
} //end of itemSelect

//function changeNum(){
//    document..getElementById('wow').onclick = function(){
//        addNum(0);
//    }
//}

function add(num) {
    var text = document.getElementById('wow' + num).value;
    text = Number(text);
    document.getElementById('wow' + num).value = text += 1;
} //end of add

function minus(num) {
    var text = document.getElementById('wow' + num).value;
    text = Number(text);
    if (text >= 1) {
        document.getElementById('wow' + num).value = text -= 1;
    }
} //end of minus

window.onload = function () {
    itemSelect();
} //end of window.onload
