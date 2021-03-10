const a = 7;
const b = 44;

if (a > b) {
    const ans = `${a} is greater than ${b}`;
    console.log(ans);
} else {
    const eans = `${b} is greater than ${a}`;
    console.log(eans);
}

const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Cookies block 1');
}

if (!cookiesAgreed) {
    console.log('Cookies block 2');
}