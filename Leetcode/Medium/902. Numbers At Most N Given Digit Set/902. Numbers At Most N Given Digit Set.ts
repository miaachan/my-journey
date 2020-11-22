function atMostNGivenDigitSet(digits: string[], n: number): number {
    let set: number = 0;
    let n_str = n.toString();

    // Handle cases `x, xx, xxx`
    // 3^1 + 3^2 + 3^3
    for (let i = 1; i < n_str.length; ++i) {
        set += Math.pow(digits.length, i);
    }
    // console.log(`Result: ${set}\n`);

    // Handle from the leftmost digit
    for (let i = 0; i < n_str.length; ++i) {
        let sameNum: boolean = false;
        // assume `digits` is sorted
        for (let j = 0; j < digits.length; ++j) {
            if (digits[j] > n_str[i]) break;
            if (digits[j] === n_str[i]) {
                sameNum = true;
                break;
            }

            // Consider 2|1|xx, 3^2, (4)-(1)-1
            set += Math.pow(digits.length, n_str.length - i - 1);
            // console.log(`n_str: ${n_str[i]}\tCurrent digit: ${digits[j]}`);
            // console.log(n_str.length - i);
        }
        if (!sameNum) return set;
    }
    // Can compsoe the entire `2563`, so plus 1
    return set + 1;
}


atMostNGivenDigitSet(["1", "2", "6"], 2563);
