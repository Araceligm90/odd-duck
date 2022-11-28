'use strict';

// document.queryselector is just like a CSS selector //
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');
let resultsButton = document.getElementById('results');
let clicks = 0;


// create products constructor //
function Products(name, src) {
    this.name = name;
    this.src = src;
    this.clicks = 0;
    this.views = 0;
}

let bag = new Products('bag', 'img/bag.jpg');
let banana = new Products('banana', 'img/banana.jpg');
let bathroom = new Products('bathroom', 'img/bathroom.jpg');
let boots = new Products('boots', 'img/boots.jpg');
let breakfast = new Products('breakfast', 'img/breakfast.jpg');
let bubblegum = new Products('bubblegum', 'img/bubblegum.jpg');
let chair = new Products('chair', 'img/chair.jpg');
let cthulhu = new Products('cthulhu', 'img/cthulhu.jpg');
let dogDuck = new Products('dogduck', 'img/dog-duck.jpg');
let dragon = new Products('dragon', 'img/dragon.jpg');
let pen = new Products('pen', 'img/pen.jpg');
let petSweep = new Products('petsweep', 'img/pet-sweep.jpg');
let scissors = new Products('scissors', 'img/scissors.jpg');
let shark = new Products('shark', 'img/shark.jpg');
let sweep = new Products('sweep', 'img/sweep.png');
let tauntaun = new Products('tauntaun', 'img/tauntaun.jpg');
let unicorn = new Products('unicorn', 'img/unicorn.jpg');
let waterCan = new Products('watercan', 'img/water-can.jpg');
let wineGlass = new Products('wine-glass', 'img/wine-glass.jpg');

let productList = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass];

// get random product index //
function getRandomIndex() {
    return Math.floor(Math.random() * productList.length)
}

// render function: invoke function on page load to display three random products //
function renderProducts() {
    let firstProduct = productList[getRandomIndex()];
    let secondProduct = productList[getRandomIndex()];
    let thirdProduct = productList[getRandomIndex()];

    // we only move on when firstProduct and secondProduct are different //
    while (firstProduct === secondProduct || firstProduct === thirdProduct || secondProduct === thirdProduct ) {
        secondProduct = productList[getRandomIndex()];
        thirdProduct = productList[getRandomIndex()];
    }

    // DOM manipulation //
    // we display 3 random and unique images //
    image1.src = firstProduct.src;
    image1.alt = firstProduct.name;
    image1.title = firstProduct.name;
    image2.src = secondProduct.src;
    image2.alt = secondProduct.name;
    image2.title = secondProduct.name;
    image3.src = thirdProduct.src;
    image3.alt = thirdProduct.name;    
    image3.title = thirdProduct.name;

    // increment views //
    firstProduct.views++
    secondProduct.views++
    thirdProduct.views++
}

// event handler //
// what happens when a user cicks a product: 1. increments product's .clicks, 2. render 3 nwe products //
function handleProductClick(event) {
    clicks ++;
    // the event object knows about the event, and the element targeted //

    // how to imcrement the correct product's clicks? //
    // 1. iterate over products array //
    // 2. if productsList[i].alt === event.target.alt, then increment .clicks //

    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name == event.target.alt) {
            productList[i].clicks++
        }
    }
    if (clicks > 25) {
        // When we get to 25 clicks, the 'click' will no longer be responsive//
        image1.removeEventListener('click', handleProductClick);
        image2.removeEventListener('click', handleProductClick);
        image3.removeEventListener('click', handleProductClick);
    }
    renderProducts();
}

function viewResults(event) {
    let ul = document.querySelector('ul');
    // make one 'li' for each product inside products //
        for (let i = 0; i < productList.length; i++) {
            let li = document.createElement('li');
            li.innerText = `${productList[i].name} was viewed ${productList[i].views} times, and was clicked ${productList[i].clicks} times`;
            ul.appendChild(li);
        } 
}


// on page load //

image1.addEventListener('click', handleProductClick)
image2.addEventListener('click', handleProductClick)
image3.addEventListener('click', handleProductClick)
resultsButton.addEventListener('click', viewResults);
renderProducts();
