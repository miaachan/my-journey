/* 
        7 kyu - Sub-array elements sum
        https://www.codewars.com/kata/sub-array-elements-sum/train/javascript

*/
const { performance } = require('perf_hooks');

function elementsSum(arr, d) {
    let sum = 0;
    for (let i = 0, j = arr.length - 1; i < arr.length; i++ , j--) {
        if (typeof arr[i][j] !== 'undefined') sum += arr[i][j];
        else if (d) sum += d;
    }
    return sum;
}

let t0 = performance.now();

elementsSum(
    [[250, -100, 55, -29, 5, -704, -50, 41, 81, -87, -99, 2, 0, -6, -89, 59, -17, 13, 1, -1, -728, 9, -3, 376, -54, 7, -99, 0, -10, -488], [82, -628, -3, -18, 66, -198, 80, 208, 747, 459, -78, -921, 88, 28, 86, -18, 545, -168, -614, 5, 235, -190, 1, 65, -4, -87, 59, -921], [-10, -10, 0, -73, -348, 7, -1, 231, 5, -739, -33, -1, -79, -111, 931, -42, -712, 110, 0, -223, 69, 251, -215, 604, 62, 85, 978, 8, -727, 19, 7, -488, -501, 326, 0], [5, 810, -707, 7, 11, -780, 416, -28, 8, -32, 1, 707, -867, -481, -82], [1, 790, -648, -981, 10, -44, -60, -372, -41, -97, -561, 963, 0, 48, 39, 24, 72, 86, -789, -49, -1, -9, -517, -20, -797, 20, -7, 901, -712, -1, 2, 692, 2, 0, 788, -728, 894], [90, -10, -43, -24, 37, -487, 321, -33, 4, -5, 37, -944, 54, -677, 757], [0, 674, -684, 27, 85, -373, -545, 406, 929], [21, 10, 7, 1, 1], [-1, -578], [-316, 266, 721, 49, 0, -38, 472, -1, -3, -87, -94, -70, 29, -3, 26, 4, -8, -21, -917, 86, -10, -686, 508, -2, 973, -593, -1, 14, 0, -2, 934], [-85, -33, 824, -940, -3, 61, -945, 21, -327, 1, -53, 169, 926, -5, 736, -787, 33, -180, 52, -271, 762, -7, -832, -26, 7, -425, 215, -980, -52], [-4, 68, 3, -16, 360, 1, 702, -648, 560, 428, 976, 60, -212, -19, -612, -36, 6, -60, -99, -5, 63, -74, 631, -36, 9], [-71, -463, -607, 347, -10, -217, -51, -452, 357, 1, 838, -1, -52, -1, 196, 1, -416, -908, 1, 65, 3, -221, -273, -66, 492, -5, -16, -100, 2, -792, 982, 94, -748], [-2, 1, -9, 6, 12, -3, 1, 2, -7, -3, -42, 975], [-548, 43, 169, 8, 490, 59, 720, -10, -372, 66, 25], [7, 7, -1, 697, 233, -5, -379, 660, -493, -866, -841, 48, -182, -623], [311, 10, 319, 45, 564, -70, -1, 0, 820, 10, 796, 45, 564, 39, -5, 6, 10, -819, -31, -948], [-53, -246, 1, 0, -834, -9, -49, 10, -323, -339, 16, 189], [1, 4, -56, 43, 289, 181, -41, 46, 0, 402, -736, 14, 1, -581, 12, -49, -964, 33], [-31, -5, 77, 91, 40, -1, -5, 75, -8, -180, 14, 76, -8, 604, 848, -971, 70, -577, 979, -772], [894, -5, 0, 2, -52, 100, -801, 8, 248, 0, -833, -942, -920, -932, 33], [-66, 480, 12, -68, -377, -9, -151, -1, 4, -5, -36, -5, 256, -869, -54, -73, -666, 876, 32, 256, -139, -623, -182], [-509, 69, 352, 7, 519, -19, -535, 145, -225, 81, -404, -23, -12, -48, -5, -17, 6, -9, 892, 21, -65, -743, 6, 10, -55, -19, 928, -73, 35, -482, 36, -436, 10, 436, -22, 677, 621, 1, -68, -618], [91, -10, -784, -432, -4, 281, -1, -42, -6, -619, -861, 40, 624, 132, -957, -23, 609, -1, -392, 771, 737, -1, -83, -768, -48, 1, 388, -1, -997, 2], [-5, 1, -2, -510, 1], [-47, 91, -13, -1, -62, -517, 1, -98, 96, -373, -1, 161, 491, 58, -79, -1, 763, 143, -10, 8, -384, 639, 644], [0, -9, 964, 175, -392, -155, 617, -87, 437, 39, 804, -30, -9, 48, -856, 45, 690, -1, 42, -541, 1, -82, -180, -6, 528, 481, 879, 920, -16, 0, -16, -30], [-3, -230, 255, -816, -54, 10, 5, -5, -10, 269, 78, 19, 316, 71, -93, -105, 1, 704, -676], [59, 66, -676, -429], [9, 9, 26, 118, -865, 0, 239, 1, 18, -58, 3, 37, 377, -57, -57, 59, -692, -104, -906, 522, 339, 23, 1, 944, -75, -73, -22, -89, -106], [51, 410], [520, 924, 30, 9, 862, -136, -899, 993, -493, -46, -315, 39, 1, -86, 10, -586, 173, 10, -9, 0, -809, 181, 99, 4, 187, 947, -286, -10, -45, -90, 2, -937, 5], [-5, 1, 48, 6, 10, 570, 381, -318, 6, -2, 74, 100, -1, 88, 9, -917, -2, 830, 7, 379, -62, -45, -9, 877, -87, -16, -513], [39, 962, -358, 576, -5, 0, -75, -39, -41, -683, 573, 169, 16, -868, -86, -715, 465, 768, -10, -374, 3, 70, 649, -9, 0, -7, 88, 300, 7, -32, -8, 72, 2], [3, 289, -89, 1, 196, -6, -317], [-76, -33, -53, 9, -66, 1, -759, 55, 577, 93, 12, -6, 573, -744, 0, 66, 0, 159, 63, 0, -1, 302, -392, 24, 0, 854, 102, -1, 87, 813, 371, 9, 472, -98, -793]], -8
)

let t1 = performance.now();
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");