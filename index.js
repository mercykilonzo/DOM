const title = document.getElementById('title');
// const body = document.body('body');
// const h3 = document.querySelector('h3');
const fruitList = document.getElementById('fruList')
const vegetableList = document.getElementById('vegList')
const image = document.getElementById('image')



// Change document background color to silver
 document.body.style.backgroundColor = 'Silver'

// Change the font color for h1 title tag to green
title.style.color = 'Green';

// Change the font case for h3 title tags to uppercase
const h3tags = document.getElementsByTagName('h3')
for(let i=0; i<h3tags.length; i++){
    h3tags[i].style.textTransform='uppercase'
}

// Add one more fruit to the fruits list

const newLi = document.createElement('LI');
const LiContent = document.createTextNode('Pineapple');
fruitList.appendChild(newLi);
newLi.appendChild(LiContent);


// Add one more vegetable to the vegetables list
const newVegLi = document.createElement('LI');
const liContent = document.createTextNode('Cabbage');
vegetableList.appendChild(newVegLi);
newVegLi.appendChild(liContent);

const shopImage = document.createElement('img')
shopImage.src = 'images/shop.jpg';
shopImage.width = 390
shopImage.height = 600
shopImage.alt = 'Welcome to mama Mboga '
image.appendChild(shopImage)


const orders = document.getElementById('orders');
const newHeading = document.createElement('H1');
newHeading.textContent = 'Make An Order';
orders.appendChild(newHeading);

newHeading.style.color = 'green'

const fruits = document.getElementById('fruits')
const fruitBanana = document.createElement('img')
fruitBanana.src = 'images/banana.jpg';
fruitBanana.width = 290
fruitBanana.height = 300

const fruitMango = document.createElement('img')
fruitMango.src = 'images/mango.jpg';
fruitMango.width = 290
fruitMango.height = 300

const fruitPineapple = document.createElement('img')
fruitPineapple.src = 'images/pineapple.jpg';
fruitPineapple.width = 290
fruitPineapple.height = 300


fruits.appendChild(fruitBanana)
fruits.appendChild(fruitMango)
fruits.appendChild(fruitPineapple)

fruits.style.display = 'flex';
fruits.style.gap = '20px';





