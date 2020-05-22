/**
 * @param {number} n
 * @return {number}
 */

/* var climbStairs = function (n) {
    if (n <= 2) return n;
    // f[n] = f[n-1] + f[n-2]
    let two = 1, one = 2, cur;
    for (let i = 3; i <= n; i++) {
        cur = one + two;
        two = one;
        one = cur;
    }
    return cur;
}; */

// O(n) space
var climbStairs = function (n) {
    if (n <= 2) return n;
    // f[n] = f[n-1] + f[n-2]
    let f = [];
    f[1] = 1;
    f[2] = 2;
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];

    }
    return f[n];
};