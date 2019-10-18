/*
        6kyu - Training JS #41: Regular Expression--"\"
        https://www.codewars.com/kata/training-js-number-41-regular-expression-slash/train/javascript

        A very good kata for regex beginners
*/

// v1: Just started to learn regex
let regex = /\b([a-zA-Z\d_])([a-zA-Z\d_])?([a-zA-Z\d_])?\w?\3\2\1\b/g

// v2: simplify version; since \w is equivlent to [a-zA-Z\d_]
regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g

console.log(
    "kIIk OmGxYOmGxY QeQ %*%* hCjJjCh".match(regex)
)
