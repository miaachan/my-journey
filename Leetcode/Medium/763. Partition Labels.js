/**
 * @param {string} S
 * @return {number[]}
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) since the maximum length is 26 (number of characters)
 */
var partitionLabels = function (S) {
    let ans = [];
    let map = new Map();
    for (let i = 0; i < S.length; ++i) map.set(S[i], i);

    let last = 0;
    let start = 0;
    for (let i = 0; i < S.length; ++i) {
        // Extend the length of the current substring
        last = Math.max(last, map.get(S[i]));

        if (i === last) {
            ans.push(last - start + 1);
            // starting index of the next substring, so i + 1
            start = i + 1;
        }
    }
    return ans;
};

//  Brute force
var partitionLabelsBF = function (S) {
    let ans = [];
    for (let i = 0; i < S.length; ++i) {
        let lastIndex = S.lastIndexOf(S[i]);
        // console.log(`char: ${S[i]}, lastIndex: ${lastIndex}`);

        let curLoc = lastIndex !== i ? i + 1 : i;
        // Check between S[i] ... S[lastIndex]
        while (curLoc < lastIndex) {
            // console.log(i);
            let curCharLastIndex = S.lastIndexOf(S[curLoc]);
            if (curCharLastIndex > lastIndex) {
                lastIndex = curCharLastIndex;
            }
            curLoc++;
        }
        ans.push(curLoc - i + 1);
        i = curLoc;
    }
    console.log(ans);
    return ans;
};

partitionLabels("ababcbacadefegdehijhklij");
// Expected: [1,9]
partitionLabels("caedbdedda");
