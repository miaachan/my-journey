function containsDuplicate(nums: number[]): boolean {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;

    /**
     * let set = new Set(nums);
     * return set.length !== set.size
     */
}

let res = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(res);
