/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reverse = 0;
    let num = Math.abs(x);
    while (num > 0) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    if (reverse > 0x7FFFFFFF) return 0;
    return (x < 0) ? reverse * -1 : reverse;
};

reverse(214);
reverse(-123);
