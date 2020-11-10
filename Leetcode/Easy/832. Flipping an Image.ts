function flipAndInvertImage(A: number[][]): number[][] {
    let len = A[0].length;
    let mid = Math.floor(len / 2);
    for (let row = 0; row < A.length; ++row) {
        let lptr = 0;
        let rptr = len - 1;
        while (lptr < rptr) {
            [A[row][lptr], A[row][rptr]] = [A[row][rptr] ^ 1, A[row][lptr] ^ 1];
            lptr++;
            rptr--;
        }
        if (len % 2 !== 0) A[row][mid] ^= 1;
    }
    return A;
}

flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
]);
