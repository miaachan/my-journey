/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 != 0) return false;
    let stack = []

    for (let v of s) {
        if (v === '(' || v === '[' || v === '{') stack.push(v);
        else if (stack.length === 0) return false;
        else if (v === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        }
        else if (v === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        }
        else if (v === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        } else return false;
    }
    return stack.length === 0;
};


/* 
    by regex

    var isValid = function (s) {
    let regex = /\(\)|\[\]|{}/g;
    while (regex.test(s)) s = s.replace(regex, '');
    if (s !== '') return false;
    return true;
}; */