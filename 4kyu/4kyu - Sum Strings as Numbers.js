const { performance } = require('perf_hooks');

function sumStrings(a, b) {
    // Handle empty string
    if (!a || !b) return (!a) ? b : a;

    let larger, smaller;
    if (a.length >= b.length) {
        larger = a.split('').reverse();
        smaller = b.split('').reverse();
    } else {
        larger = b.split('').reverse();
        smaller = a.split('').reverse();
    }

    for (let i = 0; i < smaller.length; i++) smaller[i] = parseInt(smaller[i]) + parseInt(larger[i]) + '';
    smaller = smaller.concat(larger.slice(smaller.length));

    let sth = smaller.reduce((prev, cur, curInd) => {
        if (prev.length == 0) prev.push(cur);
        else {
            if (prev[curInd - 1].length > 1) {
                prev[curInd - 1] = prev[curInd - 1][1];
                cur = parseInt(cur) + 1 + '';
            }
            prev.push(cur)
        }
        return prev;
    }, []).reverse();
    while (sth[0] == '0') sth.shift();
    return sth.join('');
}

/* 
        1) reverse 咗佢先, 之後逐項加, (細wrap大D個個)
        2) reduce 變length = 2 拎[1] 但就下一個index進位
*/


var t0 = performance.now();


sumStrings('1', '456') // 579
sumStrings('8797', '45') // 8842
sumStrings('00103', '08567'); // 8670
// sumStrings('712569312664357328695151392', '8100824045303269669937');
//- Expected: '712577413488402631964821329', instead got: '7.125774134884027e+26'



var t1 = performance.now();
// console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");