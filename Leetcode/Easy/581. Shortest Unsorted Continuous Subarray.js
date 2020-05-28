/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    let copy = Array.from(nums);
    copy.sort((a, b) => a - b);

    let upperBound = -1,
        lowerBound = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != copy[i]) {
            upperBound = i;
            for (let j = nums.length - 1; j > i; j--) {
                if (nums[j] != copy[j]) {
                    lowerBound = j;
                    break;
                }
            }
            break;
        }
    }
    if (upperBound === -1) return 0;
    if (lowerBound === -1) return 1;
    return lowerBound + 1 - upperBound;
};


findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);


/* 
similar approach but with less code from leetcode

var findUnsortedSubarray = function(nums) {
    
    let l = 0, r = nums.length-1, nd = -1, st = 0;
    let min  = Infinity, max = -Infinity;
    
    while(r>=0){
        nums[l] >= max ? max = nums[l] : nd = l;
        nums[r] <=min ? min = nums[r] : st = r;
        l++;
        r--;
    }
    
    return nd-st+1;
    
    
};
*/