const a = 8;
const b = 5;
const s = a + b;
console.log(s);
console.log('--------');

function sumTen(first, second) {
    console.log('First: ', first);
    console.log('Second: ', second);
    console.log(`${first} + ${second} * 10 = `, (first + second ) * 10);    
}

sumTen(a, b);