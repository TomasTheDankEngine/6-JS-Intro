function multiply(a, b) {
    if (typeof a !== "number" || isNaN(a) || a === Infinity || a === -Infinity) {
        return `'a' must be a normal number and cannot be ${a}.`
    }
    if (typeof b !== "number" || isNaN(b) || b === Infinity || b === -Infinity) {
        return `'b' must be a normal number and cannot be ${b}.`
    }
    const rez = a * b;
    return rez;
}

console.log(multiply(4, 5), 'expected', 20);
console.log(multiply(5, 'c'), 'expected', 20);
console.log(multiply(['as', 8, 9], 9));
console.log(multiply([2], [2]));
console.log(multiply(NaN, NaN));
console.log(multiply(NaN, 5));
console.log(multiply('s', NaN));
console.log(multiply(Infinity, NaN));
console.log(multiply(NaN, -Infinity));
console.log(multiply(-Infinity, 5));
console.log(multiply(6, NaN));