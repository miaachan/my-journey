function countSubstrings(s: string): number {
    let total = 0;

    for (let i = 0; i < s.length; ++i) {
        let leftPtr = i;
        let rightPtr = s.length - 1;
        total += 1;
        while (leftPtr < rightPtr) {
            // Shrink the area to locate possible palindromic substring
            if (s[rightPtr] === s[leftPtr]) {
                let lptr = leftPtr + 1;
                let rptr = rightPtr - 1;
                while (s[lptr] === s[rptr] && lptr < rptr) {
                    lptr++;
                    rptr--;
                }
                if (lptr > rptr || rptr === lptr) ++total;
            }
            rightPtr--;
        }
    }
    return total;
}

countSubstrings("abacabb");
