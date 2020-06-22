/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0, right = 0;
    let answer = 0;

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            right++;
            answer = Math.max(answer, set.size);
        } else {
            set.delete(s[left])
            left++;
        }
    }

    return answer;
};