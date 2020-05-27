/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        
    }
    console.log(nums)
};


findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);