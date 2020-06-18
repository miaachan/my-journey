/*
        5kyu - Valid Parentheses
        https://www.codewars.com/kata/valid-parentheses/train/javascript

        v2 17 Oct,19: Rewrite using Regex
*/
const { performance } = require('perf_hooks');

// v1: Old, stupid method
function old_validParentheses(parens) {
    let s = parens;
    while (s.length) {
        if (s[0] != '(' || s.length == 1) return false;
        let ind = false;
        for (let i = 1; i < s.length; i += 2) {
            if (s[i] == ')') {
                ind = i;
                break;
            }
        }
        if (!ind) return false;
        s = s.slice(1, ind) + s.slice(ind + 1);
    }
    return true;
}

// v2: Rewrite using regex
function validParentheses(parens) {
    let regex = /\(\)/g;
    while (regex.test(parens)) parens = parens.replace(regex, '');
    return parens === "";
}

var t0 = performance.now();
let res = validParentheses("()()(()())()()(())()()()()()(()())(()())");
var t1 = performance.now();

console.log(res);
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");
