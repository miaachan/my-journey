/* 
        5kyu - Alphabet wars - nuclear strike
        https://www.codewars.com/kata/alphabet-wars-nuclear-strike/train/javascript

*/
const { performance } = require('perf_hooks');

function alphabetWar(battlefield) {
    if (!/#/g.test(battlefield)) return battlefield.match(/\w/g).join('') || "";
    else { 
        // Nuclear found. All char without shelter die.
        console.log(

        )

    }


    return "oops";
}


let t0 = performance.now();
console.log(
    alphabetWar('ab#de[fg]ijk')
)
let t1 = performance.now();
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");