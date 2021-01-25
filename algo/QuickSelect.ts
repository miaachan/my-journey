// Commonly used in TopK question

/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map<number, number>();
    let unqie_num: number[] = [];

    for (let num of nums) {
        if (map.has(num)) map.set(num, map.get(num) + 1);
        else {
            unqie_num.push(num);
            map.set(num, 1);
        }
    }
    console.log(unqie_num);
    return quickSearch(unqie_num, 0, unqie_num.length - 1, k - 1);

    function quickSearch(nums: number[], low: number, high: number, k: number) {
        let j = partition(nums, low, high);
        console.log(j, nums);
        if (j === k) {
            console.log(nums.slice(0, j + 1));
            return nums.slice(0, j + 1);
        }

        return j > k
            ? quickSearch(nums, low, j - 1, k)
            : quickSearch(nums, j + 1, high, k);
    }

    // from leetcode sol
    // shorter, cleaner and super easy to understand !
    function partition(nums: number[], low: number, high: number) {
        let pivot_freq = map.get(nums[high]);
        let index_to_drop = low;

        // Move all greater elements to the left
        for (let i = low; i <= high; ++i) {
            if (map.get(nums[i]) > pivot_freq) {
                [nums[index_to_drop], nums[i]] = [nums[i], nums[index_to_drop]];
                index_to_drop++;
            }
        }

        // swap nums[i] with (pivot) nums[high]
        [nums[index_to_drop], nums[high]] = [nums[high], nums[index_to_drop]];
        return index_to_drop;
    }

    //  ... > i > ... return i
    function partition_harder_yet_faster(
        nums: number[],
        low: number,
        high: number
    ) {
        let pivot_freq = map.get(nums[high]);
        let i = low - 1,
            j = high;

        while (true) {
            // i must stop at a place that is not smaller than the pivot
            // for the case with same frequency, possibly causing out of bound
            while (++i <= high && map.get(nums[i]) >= pivot_freq);
            // looking for a element nums[j] that greater than pivot
            while (--j >= low && map.get(nums[j]) < pivot_freq);
            if (i >= j) break;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        // Edge case, i goes out of bound
        if (i > high) return high;

        // swap nums[i] with (pivot) nums[high]
        [nums[i], nums[high]] = [nums[high], nums[i]];
        return i;
    }
}
// @lc code=end

function topMinK(nums: number[], k: number): number[] {
    if (k === 0) return [];
    return quickSearch(nums, 0, nums.length - 1, k - 1);

    function quickSearch(nums: number[], low: number, high: number, k: number) {
        let j = partition(nums, low, high);
        if (j === k) {
            console.log(nums.slice(0, j + 1));
            return nums.slice(0, j + 1);
        }

        return j > k
            ? quickSearch(nums, low, j - 1, k)
            : quickSearch(nums, j + 1, high, k);
    }

    /**
     *
     * @param nums [1, 9, 7, 12, 3, 7, 8]
     * @param low 1
     * @param high 6
     *
     * pivot = nums[high]
     * return i where [1, 7, 7, 3, 8(i, pivot), 9, 12]
     */
    function partition(nums: number[], low: number, high: number) {
        let pivot = nums[high];
        let i = low - 1,
            j = high;

        while (true) {
            // looking for a element nums[i] that smaller than pivot
            while (++i <= high && nums[i] < pivot);
            // looking for a element nums[j] that greater than pivot
            while (--j >= low && nums[j] > pivot);
            if (i >= j) break;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        // swap nums[i] with (pivot) nums[high]
        nums[high] = nums[i];
        nums[i] = pivot;
        return i;
    }
}
