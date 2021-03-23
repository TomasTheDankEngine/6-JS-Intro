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

