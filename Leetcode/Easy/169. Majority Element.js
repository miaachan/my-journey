/**
 * @param {number[]} nums
 * @return {number}
 */

//  Should use object instead of Map() tho.
var majorityElement = function (nums) {
    if (nums.length == 1) return nums[0];
    let map = new Map();

    for (let num of nums) {
        if (map.has(num)) {
            if (map.get(num) + 1 > nums.length / 2)
                return num;
            map.set(num, map.get(num) + 1);
        } else map.set(num, 1);
    }
    return null;
};

/* 
    a very interesting algo called
    Boyer-Moore Voting Algorithm
*/

var majorityElement = function (nums) {
    let candidate = nums[0];
    let count = 1;

    for (let num of nums) {
        if (candidate === num) count++;
        else if (--count === 0) {
            candidate = num;
            count = 1;
        }
    }
    return candidate;
};
