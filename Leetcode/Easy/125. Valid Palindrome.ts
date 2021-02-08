/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (!is_alphanumeric(s[left]) && left < right) left++;
        while (!is_alphanumeric(s[right]) && left < right) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++;
        right--;
    }

    return true;

    function is_alphanumeric(char) {
        return /[a-zA-Z0-9]/.test(char);
    }
}
// @lc code=end
