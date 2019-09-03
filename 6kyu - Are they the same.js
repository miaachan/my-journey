/* 
        6 kyu - Are they the "same"?
        https://www.codewars.com/kata/are-they-the-same/train/javascript


        Compute the elements in array2, loop the square of array1's element.
        Return true if match is found.
*/

function comp(array1, array2) {
    if (!array1 || !array2) return false;
    while (array2.length) {
        let val = array2.pop();
        let flag = false;
        for (let i = 0; i < array1.length; i++) {
            if (Math.pow(array1[i], 2) == val) {
                flag = true;
                array1.splice(i, 1);
                break;
            }
        }
        if (!flag) return false;
    }
    return true;
}


a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
comp(a1, a2);