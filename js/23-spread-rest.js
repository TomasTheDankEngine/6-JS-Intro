const spread1 = [5, 9, 3];
console.log(spread1);

const spread2 = [...spread1, 7];
console.log(spread2);

const spread3 = [7, ...spread1];
console.log(spread3);

console.clear();

//rest operator
const average = (...list) => {
    const sum = list.reduce((total, num) => total + num, 0);
    return sum / list.length;
}


const ave = average(10, 2, 8, 4, 6);

console.log(ave);

/*****************************************/

console.clear();

const aboutMe = (name, age, list) => {
    return `Hi, I am ${name}, I'm ${age} years old and I like ${list.join(', ')}.`
}

const jej = aboutMe('Ogog', 999, ['a', 'b', 'c', 'd']);
console.log(jej);

/***************************************/

console.clear();

let cc = [4, 44];
let dd = [8, 88];

console.log(cc);
console.log(dd);

dd = cc;

console.log(cc);
console.log(dd);

cc[0] = 111111;

console.log(cc);
console.log(dd);

console.clear();

