/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = [];
    _generateParenthesis(n, n, "");

    function _generateParenthesis(l, r, cur) {
        // Base case, add to the ans array
        if (l == 0 && r == 0) {
            ans.push(cur);
            return;
        }
        if (l > 0) {
            _generateParenthesis(l - 1, r, cur + '(');
        }
        if (r > l) {
            _generateParenthesis(l, r - 1, cur + ')');
        }
    }
    return ans;
};


generateParenthesis(3);