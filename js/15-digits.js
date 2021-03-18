function digitsInNumber(number) {
    if (typeof number !== 'number') {
        return 'Must be a number.';
    }
    if (isNaN(number)) {
        return `Error: ${number} is not a number.`
    }
    if (!isFinite(number)) {
        return `Error: ${number} is not a number that can be defined.`
    }
    number = Math.abs(number);
    let leng = number.toString();
    if (leng.indexOf('.') >= 0) {
        leng = leng.length;
        leng -= 1;
    }
    else {leng = leng.length;}
    
    return leng;
}

console.log(digitsInNumber(6546548));
console.log(digitsInNumber(NaN));
console.log(digitsInNumber(-Infinity));
console.log(digitsInNumber(Infinity));
console.log(digitsInNumber('uwu'));
console.log(digitsInNumber(false));
console.log(digitsInNumber(6));
console.log(digitsInNumber(89));
console.log(digitsInNumber(0));
console.log(digitsInNumber(8.594));
console.log(digitsInNumber());
console.log(digitsInNumber(null));
console.log(digitsInNumber([]));
console.log(digitsInNumber([7, 8, 9]));
console.log(digitsInNumber(['a']));
console.log(digitsInNumber(.1), .1);
console.log(digitsInNumber(0.142));
console.log(digitsInNumber(-0.142));

console.log('-----------------------------');

function digits(skaicius) {
    if (typeof skaicius !== 'number') {
        return 'Error: turi buti skaicius';
    }
    if (!isFinite(skaicius)) {
        return `Error: ${skaicius} nera normalus skaicius`;
    }
    skaicius = Math.abs(skaicius)
    const tekstinisSkaicius = '' + skaicius;
    let skaitmenuKiekis = tekstinisSkaicius.length;
    if (skaicius % 1 !== 0) {
        skaitmenuKiekis--;
    }

    return skaitmenuKiekis;
}

console.log(digits(6546548));
console.log(digits(NaN));
console.log(digits(-Infinity));
console.log(digits(Infinity));
console.log(digits('uwu'));
console.log(digits(false));
console.log(digits(6));
console.log(digits(89));
console.log(digits(0));
console.log(digits(8.594));
console.log(digits());
console.log(digits(null));
console.log(digits([]));
console.log(digits([7, 8, 9]));
console.log(digits(['a']));
console.log(digits(.1), .1);
console.log(digits(0.142));
console.log(digits(-0.142));
console.log(digits(10000000000000000000000000000000000000000000000000));
console.log(digits(0.1000000000000000000000000000000000000000000000));