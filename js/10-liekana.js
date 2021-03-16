const from = -18;
const to = 18;
const div = 5;
let amount = 0;

for (let i = from; i <= to; i++) {
    if (i % div === 0) {
    //console.log(i, i % div);
    amount++;
    }
}
const ans = `In the interval from ${from} to ${to}, there are ${amount} non-residual division number(s).`
console.log(ans);