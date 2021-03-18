function bigNum(list) {

    if (!Array.isArray(list)) {
        return 'Error: incorrect type. Must be an array.'
    }
    if (list.length === 0) {
        return 'Error: array is empty.'
    }
    let biggest = list[0];
    for (let i = 1; i < list.length; i++) {
        const number = list[i];
        if (number > biggest) {
            biggest = number;
        }
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