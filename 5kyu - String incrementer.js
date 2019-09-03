const { performance } = require('perf_hooks');

function incrementString(str) {
    /*     if (!str) return '1';
    
        let incrementedString = str.split('').reverse();
        let numbers = [];
    
        for (let i = 0; i < incrementedString.length; i++) {
            // Not a number
            if (isNaN(incrementedString[i])) {
                if (i == 0) return(str + '1');
                break;
            }
            else numbers.push(incrementedString[i]);
        }
        numbers = numbers.reverse();
        let incNum = parseInt(numbers.join('')) + 1;
        incNum = ('' + incNum).padStart(numbers.length, '0');
        return(str.slice(0, str.length - numbers.length) + incNum) */

    let match = str.match(/\d+$/);
    if (!match) return str + '1';

    let numbers = (parseInt(match[0]) + 1 + '').padStart(str.length - match.index, '0');
    return str.slice(0, match.index) + numbers
}
/* 
    1) 搵出最尾既digit
*/

var t0 = performance.now();

console.log(
    incrementString("foobar003"),
    incrementString("foo"),//, "foo1");
    incrementString("foobar001"),//, "foobar002");
    incrementString("foobar99"),//, "foobar100");
    incrementString("foobar099"),//, "foobar100");
    incrementString("")//, "1");
)

// incrementString("foobar003");
// incrementString("foo");
// incrementString("foobar001");
// incrementString("foobar99");
// incrementString("foobar099");
// incrementString("");



var t1 = performance.now();
// console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");