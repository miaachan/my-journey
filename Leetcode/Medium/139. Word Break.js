/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let mem = {};
    let dictSet = new Set(wordDict);

    wordBreak(s);
    console.log(mem)

    /**
     * @param {string} str
     */
    function wordBreak(str) {
        if (mem[str] !== undefined) return mem[str];
        if (dictSet.has(str)) return mem[str] = true;

        for (let i = 1; i < str.length; ++i) {
            let left = str.slice(0, i);
            let right = str.slice(i);

            if (dictSet.has(right) && wordBreak(left, right)) {
                return mem[str] = true;
            }
        }
        return mem[str] = false;
    }
};


wordBreak("leetcode", ["leet", "code"]);
wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);

wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    [
        "a",
        "aa",
        "aaa",
        "aaaa",
        "aaaaa",
        "aaaaaa",
        "aaaaaaa",
        "aaaaaaaa",
        "aaaaaaaaa",
        "aaaaaaaaaa",
    ]
);
