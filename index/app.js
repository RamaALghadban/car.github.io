let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'AUDI',
        image: 'yollwecar.png',
        price: 120000
    },
    {
        id: 2,
        name: 'HONDA',
        image: 'red car.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'VOLVO',
        image: 'gray car.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'BMW',
        image: 'black car.PNG',
        price: 123000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../img/${value.image}" class="car_photo">
            <div class="title" >${value.name}</div>
            <div class="card-content">
                  <div class="wrapper-card">
                    <div class="all">
                    <img src="../img/chier.png" alt="" class="icon_image"><div class="word">4 Seator</div> 
                    <img src="../img/drive.png" alt="" class="icon_image"><div class="word1">Manual</div>
                    <img src="../img/clock.png" alt="" class="icon_image"><div class="word2">5KM/1-lt</div>
                  </div>
                </div>
                <br>
                <p class="start">Starting at $500/Day</p>
                <br>
                </div>
            
            <div class="card-bottom">
            <a href="../detiles/Details.html"  class="Details-btn"> Details ></a>
            <button onclick="addToCard(${key})" class="btn_cart" id="cart">Buy Now</button>
`
            ;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img class="s-card" src="../img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}