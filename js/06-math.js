const markss = [7, 10, 7];

const summ = markss[0] + markss[1] + markss[2];

const avgg = summ / markss.length;

console.log(avgg);
console.log('----------------');

const marks = [10, 8, 6, 4];

const count = marks.length;
let sum = 0;
console.log('sum: '+sum);

sum = sum + marks[0];
console.log('sum: '+sum);

sum = sum + marks[1];
console.log('sum: '+sum);

sum = sum + marks[2];
console.log('sum: '+sum);

sum = sum + marks[3];
console.log('sum: '+sum);

const avg = sum / count;
console.log('average: '+avg);

console.log('--------------');

marks2 = [2, 4, 6, 8]
let markIndex = 0;

let sum2 = 0;
sum2 += marks2[markIndex];
markIndex +=1;
console.log('sum: '+sum2);

sum2 += marks2[markIndex];;
markIndex +=1;
console.log('sum: '+sum2);

sum2 += marks2[markIndex];;
markIndex +=1;
console.log('sum: '+sum2);

sum2 += marks2[markIndex];
markIndex +=1;
console.log('sum: '+sum2);

console.log('---------------------');

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