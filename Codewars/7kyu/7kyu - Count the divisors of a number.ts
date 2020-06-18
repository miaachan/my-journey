/*
        7kyu - Count the divisors of a number
        https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/typescript
*/
declare var require: any;
const { performance } = require('perf_hooks');
let t0 = performance.now();

export function divisors(n: number) {
    // your code here
    let total: number = 0;
    for (let i: number = 1; i <= n; i++) {
        total += (n % i == 0) ? 1 : 0;
    }
    return total;

}

console.log(divisors(500000));

let t1 = performance.now();
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");