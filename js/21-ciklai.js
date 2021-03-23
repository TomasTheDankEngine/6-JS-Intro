const list = [1, -5, 78, 2, 11, -14, 0, -3];

for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item < -10) {
        break;
    }
    console.log(item);
}

console.clear()

//FOR-IN*********************

for (const i in list) {
    const item = list[i];
    if (item > 0) {
        continue;
    }
    console.log(i);
}

console.clear()

//FOR-OF******************

for (const item of list) {
    if (item > 0) {
        continue;
    }
    console.log(item);
}

console.clear()

//WHILE******************

let randNum = 0;
let randNumCount = 0;

while (randNum < 0.9) {
    randNum = Math.random();
    randNumCount++;
    console.log(randNumCount, randNum);
}

console.clear();

let i = 0;

while (i < list.length) {
    const item = list[i];
    console.log(item);
    i++
}

console.clear();

//DO-WHILE***************

let dwi = 0;

do {
    console.log(dwi);
    dwi++;
} while (dwi < 5);

console.clear();

/**********************************/

//FOR EACH

list.forEach((item, i) => {
    console.log(i, item);
});

console.clear();

const doubleList = [[1, 2, 3], [-5, -9, 9, 1], [-7, -7, -7], [1000000]];

let dlSum = 0;

doubleList.forEach(innerList => innerList.forEach(n => dlSum += n));

console.log(dlSum);;
//------

console.clear();

const doubleListt = [5, [1, 2, 3], [-5, -9, 9, 1], -50000, [-7, -7, -7], [1000000]];

let dlSumm = 0;

doubleListt.forEach(
    innerItem => typeof innerItem === 'number'
    ? dlSumm += innerItem
    : innerItem.forEach(n => dlSumm += n)
);

console.log('Suma:', dlSumm);

console.clear();

/******************************************/

//MAP

const mapList = [1, 2, 3, 4, 5, 6];

const mapListSqr = [];

for (const num of mapList) {
    mapListSqr.push(num * num);
}
console.log(mapListSqr);

const mapListSquare = mapList.map(n => n * n);
console.log(mapListSquare);

console.clear();

/******************************************/

const pazymiai = [10, 8, 9, 9, 2, 4, 7, 8, -6, 10, -5, 5, 8];

const konvertuoti = pazymiai.map(n => n < 0 ? 0 : n);

console.log(konvertuoti);
/**********/
console.clear();

const decimals = [3.14, 5.6, 9.999, 6, -5, -7.7, 9.666];

console.log(decimals);

const absolut = decimals.map(n => Math.round(n));

console.log(absolut);

/*********************************************/

//FILTER

console.clear();

const marks = [10, 8, 9, 9, 2, 4, 7, 8, 9.22, 7.99, -6, 10, -5, 5, 8, 55, 66, 1];

//selecty only real marks [1....10]

console.log(marks);

const filteredMarks = marks.filter(k => k >= 1 && k <= 10 && k % 1 === 0);

console.log(filteredMarks);

/*****************************************/
//only capital words
console.clear();

const dictionary = ['Hey', 'ya', 'heyyy', 'Yaaao'];

const cap = dictionary.filter(word => word[0] === word[0].toUpperCase());

console.log(dictionary);
console.log(cap);

/***************************************/

console.clear();

//REDUCE

const marques = [10, 2, 8, 5, 5];

console.log(marques);

const reducedMarques = marques.reduce((total, paz) => total + paz);

console.log(reducedMarques);

/***************************************/
//text/word when joining all first letters
console.clear();

const dictionary2 = ['Hey', 'ya', 'heyyy', 'Yaaao'];

const short = dictionary2.reduce((total, word) => total + word[0], '');

console.log(short);