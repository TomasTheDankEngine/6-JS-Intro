function makeNegative(num) {
    if (typeof num !== "number" || isNaN(num) || num === Infinity || num === -Infinity) {
        return `'num' must be a normal number and cannot be ${num}.`
    }
    return num <= 0 ? num : -num;
}

console.log(makeNegative(42), 'expected', -42);
console.log(makeNegative(0), 'expected', 0);
console.log(makeNegative(12), 'expected', -12);
console.log(makeNegative(-5), 'expected', -5);
console.log(makeNegative('x'));