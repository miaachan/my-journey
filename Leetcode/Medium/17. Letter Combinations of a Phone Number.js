/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];
    let keys = [
        [''],
        [''],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    let ans = [];
    dfs(0, "");
    return ans;

    /* Input: "23"
     * 
     * l denotes starting index of digits (which is the index of '2') here
     * Empty string 'cur' used for storing the current combination.
     * 
     * Once the 'cur' have exact same length with digits
     * ==> a new combination is found.
     * 
     * Pop the last char in 'cur' and running again (dfs).
     * 
    */
    function dfs(l, cur) {
        if (cur.length == digits.length) {
            ans.push(cur);
            return;
        }
        let d2index = digits[l] - '0';
        for (let i = 0; i < keys[d2index].length; i++) {
            cur += keys[d2index][i];
            dfs(l + 1, cur);
            cur = cur.slice(0, -1);
        }
    }
};

// letterCombinations("23");
letterCombinations("");