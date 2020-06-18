/*
        7kyu - Training JS #36: methods of Math---kata author's lover:random()
        https://www.codewars.com/kata/training-js-number-36-methods-of-math-kata-authors-lover-random/train/javascript
*/


function rndCode() {
    let code = "";
    let symbols = "~!@#$%^&*";
    for (let i = 0; i < 8; i++) {
        if (i < 2) code += String.fromCharCode(~~(13 * Math.random() + 65))
        else if (i < 6) code += String.fromCharCode(~~(10 * Math.random() + 48))
        else code += symbols[~~(symbols.length*Math.random())]
    }
    return code
}

rndCode();