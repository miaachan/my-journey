/* 
        4kyu - Remove Zeros
        https://www.codewars.com/kata/52aae14aa7fd03d57400058f
*/

function removeZeros(array) {
    let totalZeros = 0;

    for (let i = 0; i < array.length; i++) {
        let zeroFlag = false;
        let zeroStart = 0;
        let zeroEnd = 0;
        let zeroType;
        if (array[i] == 0) {
            // Avoid stucking in loop.
            if (i >= array.length - 1 - totalZeros) break;
            zeroType = array[i];
            zeroFlag = true;
            zeroStart = i;
            zeroEnd = zeroStart;
            while (zeroEnd + 1 < array.length && array[zeroEnd + 1] === zeroType) zeroEnd++;
        }
        let zeros = (zeroFlag) ? (zeroStart == zeroEnd) ? 1 : zeroEnd - zeroStart + 1 : 0;
        totalZeros += zeros;

        let diffZeroInd = -1;
        // Push 'zeroEnd + 1'th element till reaching zeroStart.
        // zeroEnd + 1 既element 一個個向前拉到zeroStart
        if (zeroFlag) {
            for (let j = zeroEnd + 1; j < array.length; j++) {
                // Mark the index if there is another type of zero while pushing
                if (array[j] == 0 && array[j] !== zeroType && diffZeroInd == -1) {
                    diffZeroInd = j - zeros;
                }
                array[zeroStart++] = array[j];
            }
        }

        // Add those zeros in the end.
        let _ = 1;
        while (zeros) {
            array[array.length - _] = zeroType;
            _++;
            zeros--;
        }
        if (diffZeroInd != -1) i = diffZeroInd - 1;
    }
    return array;
}