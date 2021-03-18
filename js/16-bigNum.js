function bigNum(list) {

    if (!Array.isArray(list)) {
        return 'Error: incorrect type. Must be an array.'
    }
    if (list.length === 0) {
        return 'Error: array is empty.'
    }
    let biggest = -Infinity;
    for (let i = 1; i < list.length; i++) {
        const number = list[i];
        if (!isFinite(number)) {
            continue;
        }
        if (number > biggest) {
            biggest = number;
        }
    }

    if (biggest === -Infinity) {
        return 'Error: no normal numbers in list.'
    }

    return biggest;
}


console.log(bigNum('tometa'));
console.log(bigNum(null));
console.log(bigNum(false));
console.log(bigNum(Infinity));
console.log(bigNum(bigNum));
console.log(bigNum([]));
console.log(bigNum({}));
console.log(bigNum([5]));
console.log(bigNum([2, 5, 4]));
console.log(bigNum([-8, 11, 4, 8, -9, 90]));
console.log(bigNum([69, 69, 69, 69, 420, 42]));
console.log(bigNum([-1, -2, -3, -4, -5]));
console.log(bigNum([-5, -2, -100, -55, 1]));
console.log(bigNum([-5, 5, 3, Infinity]));
console.log(bigNum([-5, Infinity, 3]));
console.log(bigNum([Infinity, -5, 5, 3]));
console.log(bigNum([Infinity, -5, -Infinity, 5, 'ddd', 3, NaN]));
console.log(bigNum(['888', Infinity, 'ddd', NaN]));