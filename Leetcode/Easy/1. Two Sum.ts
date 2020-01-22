// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


//  3rd with hashmap
var twoSum = function (nums: number[], target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let bingo = target - nums[i];
        if (map.has(bingo)) {
            return [map.get(bingo), i];
        }
        map.set(nums[i], i);
    }
};

/* 2nd with little better performance

var twoSum = function (nums: number[], target) {
    let indices = [];
    nums.some((v, ind) => {
        let loc = nums.lastIndexOf(target - v);
        if (loc != -1 && loc != ind) {
            indices = [ind, loc];
            return true
        }
    });
    return indices
}; */

/* 1st

var twoSum = function (nums: number[], target) {
    let indices = [];
    nums.some((v, ind) => {
        let numLeft = nums.slice(ind + 1);
        for (let i = 0; i < numLeft.length; i++) {
            if (v + numLeft[i] == target) {
                indices = [ind, nums.lastIndexOf(numLeft[i])];
                return true;
            }
        }
    });
    return indices
}; */