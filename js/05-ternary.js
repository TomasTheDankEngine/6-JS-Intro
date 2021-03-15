
const a = 5;
const b = 7;

let ats = '';

if (a > b) {
    ats = 'greater than';
}
else {
    ats = 'not greater than';
}

console.log(ats);
console.log('------------');

const c = 55;

const d = 5;

const ats2 = c > d ? c+' greater than '+d : c+' not greater than '+d;
console.log(ats2);