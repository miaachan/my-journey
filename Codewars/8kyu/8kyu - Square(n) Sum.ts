/*
        8kyu - Square(n) Sum
        https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript
*/

export function squareSum(numbers: number[]): number {
    return numbers.reduce((sum, _) => sum += _ ** 2, 0);
}