/*
        8kyu - Reversed sequence
        https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/typescript
*/

export const reverseSeq = (n: number): number[] => {
    return Array(n).fill(0).map((_, ind) => n - ind);
};
  
reverseSeq(5);