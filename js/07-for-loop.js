const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
var abcIndex;

for (abcIndex=0; abcIndex<abc.length; abcIndex++) {
    zodis += abc[abcIndex];
    console.log(zodis);
}

console.log('');
zodis = '';

for (abcIndex=abc.length-1; abcIndex>=0; abcIndex--) {
    zodis += abc[abcIndex];
    console.log(zodis);
}

console.log('---------------');

marks = [5, 8, 10, 9, 4, 2, 5, 6, 7, 9, 8];
let sum = 0;
let avg = 0;

for (let i=0; i < marks.length; i++) {
    sum += marks[i]
    console.log('sum: '+sum);
    avg = sum / marks.length;
    console.log("average: "+avg);
}
console.log('--------------------');