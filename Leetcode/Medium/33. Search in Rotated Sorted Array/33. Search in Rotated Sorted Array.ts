function search(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        // console.log(`start: ${start}, mid: ${mid}, end: ${end}`);

        if (nums[mid] === target) {
            // console.log(`bingo, ${mid}`);
            return mid;
        }

        // check if the upper part is sorted
        if (nums[start] <= nums[mid]) {
            // yes, it is sorted, compare target and decide which way to split
            if (target >= nums[start] && target < nums[mid]) {
                end = mid - 1;
                continue;
            }
            start = mid + 1;
            continue;
        }

        // No, the upper part isn't sorted, which means, the reaming parts must be sorted.
        if (target > nums[mid] && target <= nums[end]) {
            start = mid + 1;
            continue;
        }
        end = mid - 1;
    }
    return -1;
}

search([4, 5, 6, 7, 0, 1, 2], 0);
