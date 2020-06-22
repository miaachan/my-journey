/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let getLen = (l, r) => {
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            l--;
            r++;
        }
        // l & r is now out of bound, so -2 for the outbound elements in left & right.
        return r - l + 1 - 2;
    }
    let ansLen = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        // For handling both odd & even case.
        let curLen = Math.max(getLen(i, i), getLen(i, i + 1));
        if (curLen > ansLen) {
            ansLen = curLen;
            start = i - Math.floor((ansLen - 1) / 2);
        }
    }
    console.log(s.substr(start, ansLen))
    return s.substr(start, ansLen);
};

/*
 *  shit solution on 1st attempt, ugly as fuck!!
 *
    var longestPalindrome = function (s) {
    let dp = Array.from(Array(s.length), () => Array(s.length).fill(0));
    let answer_str = "";

    for (let j = 0; j < s.length; ++j) {
        for (let i = 0; i <= j; ++i) {
            if (j === i) {
                dp[j][i] = true
                answer_str = (answer_str.length === 0) ? s[j] : answer_str;
            } else if (s[j] === s[i] && dp[j - 1][i + 1]) {
                dp[j][i] = true;
                answer_str = (answer_str.length < j - i + 1) ? s.substring(i, j + 1) : answer_str;
            } else if (s[j] === s[i] && dp[j - 1][i + 1] === 0 && dp[j - 1][i]) {
                dp[j][i] = true;
                answer_str = (answer_str.length < j - i + 1) ? s.substring(i, j + 1) : answer_str;
            }
            else {
                dp[j][i] = false;
            }
        }
    }
    return answer_str;
}; */